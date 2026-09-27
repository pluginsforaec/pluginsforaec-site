// Live ARQO Demo House on the landing page: rotate, zoom, pan. Same GLB as the
// SketchUp model; only the default scene is shown (no showcase or error layer).
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const host = document.getElementById('model');
const status = document.getElementById('model-status');
const label = document.getElementById('model-label');
const fallback = document.getElementById('model-fallback');
const PRESET = { position: [14, 11, 16], target: [0, 1.0, 0], span: 10.2 };

function fail(message) {
  if (fallback) fallback.hidden = false;
  if (status) status.textContent = message;
  host.classList.add('failed');
}

function init() {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true });
  } catch (error) {
    return fail('WebGL unavailable');
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  host.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#eeeee7');
  scene.add(new THREE.HemisphereLight('#ffffff', '#c9cfc0', 2.15));
  const sun = new THREE.DirectionalLight('#fffaf0', 2.1);
  sun.position.set(-7, 13, 9);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -11, right: 11, top: 10, bottom: -10 });
  sun.shadow.normalBias = 0.03;
  sun.shadow.bias = -0.0001;
  scene.add(sun);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: 0.13 }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.123;
  ground.receiveShadow = true;
  scene.add(ground);
  const grid = new THREE.GridHelper(36, 36, '#d8dbd0', '#e0e2d8');
  grid.position.y = -0.125;
  grid.material.transparent = true;
  grid.material.opacity = 0.4;
  scene.add(grid);

  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.05, 6000);
  camera.position.fromArray(PRESET.position);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.fromArray(PRESET.target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minZoom = 0.5;
  controls.maxZoom = 4;
  controls.maxPolarAngle = Math.PI / 2 - 0.02;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.6;
  controls.addEventListener('start', () => { controls.autoRotate = false; });
  camera.lookAt(controls.target);

  function resize() {
    const width = host.clientWidth || 1;
    const height = host.clientHeight || 1;
    const aspect = width / height;
    camera.left = -PRESET.span * aspect / 2;
    camera.right = PRESET.span * aspect / 2;
    camera.top = PRESET.span / 2;
    camera.bottom = -PRESET.span / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }
  new ResizeObserver(resize).observe(host);
  resize();

  const outlineMaterial = new THREE.LineBasicMaterial({ color: '#60705d', transparent: true, opacity: 0.56 });
  const meshes = [];
  new GLTFLoader().loadAsync('assets/arqo-demo-house-01.glb').then(gltf => {
    gltf.scene.traverse(node => {
      if (!node.isMesh) return;
      meshes.push(node);
      node.material = node.material.clone();
      node.castShadow = !node.material.transparent;
      node.receiveShadow = !node.material.transparent;
      if (!node.name.startsWith('Tree_Canopy')) {
        const outline = new THREE.LineSegments(new THREE.EdgesGeometry(node.geometry, 30), outlineMaterial);
        outline.raycast = () => {};
        node.add(outline);
      }
    });
    scene.add(gltf.scene);
    host.classList.add('ready');
    if (status) status.textContent = '';
  }).catch(error => {
    console.error(error);
    fail('Model could not be loaded');
  });

  // Hover: name the part under the pointer, the way ARQO names it in SketchUp.
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
    if (hovered) hovered.material.emissive.setHex(0);
    hovered = node;
    if (hovered) {
      hovered.material.emissive.setHex(0x2a3a22);
      let owner = hovered;
      while (!owner.userData.arqoId && owner.parent && owner.parent.userData) owner = owner.parent;
      if (label) { label.textContent = (owner.userData.arqoId || hovered.name).replace(/_/g, ' '); label.hidden = false; }
    } else if (label) {
      label.hidden = true;
    }
  });
  renderer.domElement.addEventListener('pointerleave', () => {
    if (hovered) hovered.material.emissive.setHex(0);
    hovered = null;
    if (label) label.hidden = true;
  });

  const reset = document.getElementById('model-reset');
  if (reset) reset.onclick = () => {
    camera.position.fromArray(PRESET.position);
    controls.target.fromArray(PRESET.target);
    camera.zoom = 1;
    camera.updateProjectionMatrix();
    controls.autoRotate = true;
    controls.update();
  };

  renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });
}

init();
