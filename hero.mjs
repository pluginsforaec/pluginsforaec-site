// Home hero: the ARQO Demo House turning slowly. Same GLB the plugin ships with;
// the viewer is deliberately minimal (no fixtures, no panels): drag to turn,
// wheel to zoom, hover to read a part's name.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const host = document.getElementById('home-model');
const label = document.getElementById('home-model-label');
const HOME = { position: [14, 11, 16], target: [0, 0.9, 0], span: 10.4 };

function surface() { return getComputedStyle(document.body).getPropertyValue('--surface-2').trim() || '#eeede7'; }

function start() {
  if (!host) return;
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true }); } catch (error) { host.classList.add('failed'); return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  host.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(surface());
  new MutationObserver(() => scene.background.set(surface())).observe(document.body, { attributes: true, attributeFilter: ['data-theme', 'style'] });
  scene.add(new THREE.HemisphereLight('#ffffff', '#c9cfc0', 2.15));
  const sun = new THREE.DirectionalLight('#fffaf0', 2.1);
  sun.position.set(-7, 13, 9);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -12, right: 12, top: 10, bottom: -10 });
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
  grid.material.opacity = 0.4;
  scene.add(grid);

  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.05, 6000);
  camera.position.fromArray(HOME.position);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.fromArray(HOME.target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minZoom = 0.5;
  controls.maxZoom = 5;
  controls.enablePan = false;
  controls.maxPolarAngle = Math.PI / 2 - 0.02;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;
  controls.addEventListener('start', () => { controls.autoRotate = false; });
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

  const outline = new THREE.LineBasicMaterial({ color: '#60705d', transparent: true, opacity: 0.56 });
  const meshes = [];
  new GLTFLoader().loadAsync(new URL('assets/arqo-demo-house-01.glb', import.meta.url).href).then(gltf => {
    gltf.scene.traverse(node => {
      if (!node.isMesh) return;
      meshes.push(node);
      node.material = node.material.clone();
      node.castShadow = !node.material.transparent;
      node.receiveShadow = !node.material.transparent;
      if (!node.name.startsWith('Tree_Canopy')) {
        const edges = new THREE.LineSegments(new THREE.EdgesGeometry(node.geometry, 30), outline);
        edges.raycast = () => {};
        node.add(edges);
      }
    });
    scene.add(gltf.scene);
    host.classList.add('ready');
  }).catch(error => { console.error(error); host.classList.add('failed'); });

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let hovered = null;
  renderer.domElement.addEventListener('pointermove', event => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(meshes, false)[0];
    const node = hit ? hit.object : null;
    if (node === hovered) return;
    if (hovered?.material.emissive) hovered.material.emissive.setHex(0);
    hovered = node;
    if (hovered && label) {
      if (hovered.material.emissive) hovered.material.emissive.setHex(0x2a3a22);
      let owner = hovered;
      while (!owner.userData.arqoId && owner.parent) owner = owner.parent;
      label.textContent = (owner.userData.arqoId || hovered.name).replace(/[._]/g, ' ');
      label.hidden = false;
    } else if (label) label.hidden = true;
  });
  renderer.domElement.addEventListener('pointerleave', () => {
    if (hovered?.material.emissive) hovered.material.emissive.setHex(0);
    hovered = null;
    if (label) label.hidden = true;
  });

  // Only render while the hero is on screen.
  let visible = true;
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }).observe(host);
  renderer.setAnimationLoop(() => { if (!visible) return; controls.update(); renderer.render(scene, camera); });
}

start();
