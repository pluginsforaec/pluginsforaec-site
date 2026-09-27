// Live Demo House inside the plugin workspace. The page's app.js drives it through
// window.arqoStudio.update({ tool, highlight, guides, scope }); the model, the tool
// fixtures ("before" states per tool) and the object records are the same data the
// SketchUp model carries. Tool algorithms never run here: they run in SketchUp.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const host = document.getElementById('plugin-scene');
const loading = document.getElementById('studio-loading');
const label = document.getElementById('studio-label');
const note = document.getElementById('studio-note');
const HOME = { position: [14, 11, 16], target: [0, 1.0, 0], span: 10.6 };
const ACCENT = 0xd57750;

let pending = null;
let ready = false;
let data = null;
const byArqoId = new Map();
const fixtures = new Map(); // node name -> group
const outlineMaterial = new THREE.LineBasicMaterial({ color: '#60705d', transparent: true, opacity: 0.56 });
const meshes = [];
const baseEmissive = new Map();

function surfaceColor() {
  const value = getComputedStyle(document.body).getPropertyValue('--surface-2').trim();
  return value || '#eeede7';
}

function build() {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true }); }
  catch (error) { if (loading) loading.textContent = 'Bu tarayıcıda WebGL yok'; return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  host.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(surfaceColor());
  new MutationObserver(() => { scene.background.set(surfaceColor()); }).observe(document.body, { attributes: true, attributeFilter: ['data-theme', 'style'] });
  scene.add(new THREE.HemisphereLight('#ffffff', '#c9cfc0', 2.15));
  const sun = new THREE.DirectionalLight('#fffaf0', 2.1);
  sun.position.set(-7, 13, 9);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -14, right: 14, top: 12, bottom: -12 });
  sun.shadow.normalBias = 0.03;
  sun.shadow.bias = -0.0001;
  scene.add(sun);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: 0.13 }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.123;
  ground.receiveShadow = true;
  scene.add(ground);
  const grid = new THREE.GridHelper(40, 40, '#c9ccc0', '#d8dbd0');
  grid.position.y = -0.125;
  grid.material.transparent = true;
  grid.material.opacity = 0.45;
  scene.add(grid);

  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.05, 6000);
  camera.position.fromArray(HOME.position);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.fromArray(HOME.target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.09;
  controls.minZoom = 0.4;
  controls.maxZoom = 6;
  controls.maxPolarAngle = Math.PI / 2 - 0.02;
  camera.lookAt(controls.target);

  function resize() {
    const width = host.clientWidth || 1;
    const height = host.clientHeight || 1;
    const aspect = width / height;
    camera.left = -HOME.span * aspect / 2;
    camera.right = HOME.span * aspect / 2;
    camera.top = HOME.span / 2;
    camera.bottom = -HOME.span / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }
  new ResizeObserver(resize).observe(host);
  resize();

  // Camera flights: target and zoom ease towards a goal each frame.
  // A flight runs only after a tool selection and stops as soon as the user
  // touches the view, so wheel zoom and drags are never fought over.
  const goal = { target: new THREE.Vector3().fromArray(HOME.target), zoom: 1, flying: false };
  function flyTo(target, zoom) { goal.target.copy(target); goal.zoom = zoom; goal.flying = true; }
  controls.addEventListener('start', () => { goal.flying = false; });

  Promise.all([
    new GLTFLoader().loadAsync('assets/arqo-demo-house-01.glb'),
    fetch('assets/showcase.json').then(response => { if (!response.ok) throw new Error(`showcase.json ${response.status}`); return response.json(); })
  ]).then(([gltf, showcase]) => {
    data = showcase;
    const root = gltf.scene;
    const showcaseGroup = gltf.scenes[showcase.showcaseScene]?.getObjectByName('Showcase_Objects');
    if (showcaseGroup) { root.add(showcaseGroup); showcaseGroup.visible = false; }
    root.traverse(node => {
      if (node.userData.arqoId) byArqoId.set(node.userData.arqoId, node);
      if (!node.isMesh) return;
      meshes.push(node);
      node.material = node.material.clone();
      node.castShadow = !node.material.transparent;
      node.receiveShadow = !node.material.transparent;
      baseEmissive.set(node, node.material.emissive ? node.material.emissive.getHex() : 0);
      if (!node.name.startsWith('Tree_Canopy')) {
        const outline = new THREE.LineSegments(new THREE.EdgesGeometry(node.geometry, 30), outlineMaterial);
        outline.raycast = () => {};
        node.add(outline);
      }
    });
    for (const record of showcase.fixtures) {
      const node = byArqoId.get(record.arqoId) || root.getObjectByName(record.node);
      if (!node) continue;
      // Fixture edges sit on the platform surface; draw them on top, with vertex
      // markers that light up when the operation highlight is on.
      const markers = [];
      node.traverse(child => {
        if (!child.isLine) return;
        child.material = new THREE.LineBasicMaterial({ color: '#3f4a3c', depthTest: false, transparent: true });
        child.renderOrder = 10;
        const points = new THREE.Points(child.geometry, new THREE.PointsMaterial({ color: ACCENT, size: 0.14, depthTest: false, transparent: true }));
        points.renderOrder = 11; points.visible = false; points.raycast = () => {};
        child.add(points); markers.push({ line: child, points });
      });
      fixtures.set(record.node, { node, record, markers }); node.visible = false;
    }
    scene.add(root);
    ready = true;
    if (loading) loading.hidden = true;
    if (pending) update(pending);
  }).catch(error => {
    console.error(error);
    if (loading) loading.textContent = 'Model yüklenemedi';
  });

  // Hover names the part, as ARQO names it in SketchUp's Entity Info.
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let hovered = null;
  function ownerOf(node) { let owner = node; while (!owner.userData.arqoId && owner.parent) owner = owner.parent; return owner; }
  renderer.domElement.addEventListener('pointermove', event => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(meshes.filter(mesh => mesh.visible && ownerVisible(mesh)), false)[0];
    const node = hit ? hit.object : null;
    if (node === hovered) return;
    hovered = node;
    if (hovered && label) {
      const owner = ownerOf(hovered);
      const record = data?.objects?.[owner.userData.arqoId];
      label.textContent = record?.label || owner.userData.arqoId?.replace(/[._]/g, ' ') || hovered.name;
      label.hidden = false;
    } else if (label) label.hidden = true;
  });
  renderer.domElement.addEventListener('pointerleave', () => { hovered = null; if (label) label.hidden = true; });
  function ownerVisible(node) { let n = node; while (n) { if (!n.visible) return false; n = n.parent; } return true; }

  let highlighted = [];
  function clearHighlight() {
    for (const mesh of highlighted) if (mesh.material.emissive) mesh.material.emissive.setHex(baseEmissive.get(mesh) || 0);
    highlighted = [];
  }
  function highlightNodes(nodes) {
    clearHighlight();
    for (const node of nodes) node.traverse(child => {
      if (child.isMesh && child.material.emissive) { child.material.emissive.setHex(ACCENT); child.material.emissiveIntensity = 0.35; highlighted.push(child); }
    });
  }

  function update(options) {
    pending = options;
    if (!ready) return;
    const { tool, highlight, guides, scope } = options;
    grid.visible = guides !== false;
    const productId = tool?.productId || tool?.manifest?.id;
    const fixtureName = data.showcase?.[productId]?.node;
    let active = null;
    for (const [name, entry] of fixtures) { entry.node.visible = name === fixtureName; if (name === fixtureName) active = entry; }
    const showcaseGroup = active?.node.parent;
    if (showcaseGroup && showcaseGroup.name === 'Showcase_Objects') showcaseGroup.visible = Boolean(active);
    clearHighlight();
    if (active) {
      const pivot = active.record.pivot ? new THREE.Vector3().fromArray(active.record.pivot) : new THREE.Box3().setFromObject(active.node).getCenter(new THREE.Vector3());
      flyTo(pivot, 1.7);
      for (const entry of fixtures.values()) for (const m of entry.markers) { m.points.visible = highlight && entry === active; m.line.material.color.set(highlight && entry === active ? ACCENT : '#3f4a3c'); }
      if (note) note.textContent = active.record.showcaseNote || '';
    } else {
      flyTo(new THREE.Vector3().fromArray(HOME.target), 1);
      const rule = data.rules?.[productId];
      if (highlight && rule) {
        const matches = Object.entries(data.objects || {}).filter(([, record]) => rule.allowedTypes.includes(record.type) && (!rule.requiredFlag || record[rule.requiredFlag])).map(([id]) => byArqoId.get(id)).filter(Boolean);
        highlightNodes(scope === 'model' ? matches : matches.slice(0, 1));
        if (note) note.textContent = matches.length ? `${scope === 'model' ? matches.length : 1} nesne bu aracın kapsamında.` : '';
      } else if (note) note.textContent = highlight ? 'Bu araç için modelde hazır sahne henüz yok.' : '';
    }
  }

  window.arqoStudio = { update, reset() { camera.position.fromArray(HOME.position); flyTo(new THREE.Vector3().fromArray(HOME.target), 1); } };
  if (pending) update(pending);

  renderer.setAnimationLoop(() => {
    if (goal.flying) {
      controls.target.lerp(goal.target, 0.08);
      camera.zoom += (goal.zoom - camera.zoom) * 0.08;
      camera.updateProjectionMatrix();
      if (controls.target.distanceTo(goal.target) < 0.01 && Math.abs(goal.zoom - camera.zoom) < 0.005) goal.flying = false;
    }
    controls.update();
    renderer.render(scene, camera);
  });
}

function update(options) { pending = options; if (window.arqoStudio && ready) window.arqoStudio.update(options); }
if (!window.arqoStudio) window.arqoStudio = { update, reset() {} };
build();
