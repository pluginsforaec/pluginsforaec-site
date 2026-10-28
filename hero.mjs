// Home hero: ARQO Demo House, the same model the plugin is tested on, rendered live (hand-written source, not
// generated). Every part names the ARQO tool that makes it (site/house-tools.mjs). Drag to turn, wheel to zoom.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { createLook } from './look.mjs';
import { houseTool } from './house-tools.mjs';

const host = document.getElementById('home-model');
const label = document.getElementById('home-model-label');
const LANG = document.documentElement.lang === 'tr' ? 'tr' : 'en';
const capture = new URLSearchParams(location.search).has('capture');
// The house's SketchUp materials that the shared look already knows; the rest keep their own colour.
const LOOK_NAMES = { MAT_GLASS: 'MAT_glass', MAT_TREE_TRUNK: 'MAT_trunk', MAT_TREE_GREEN: 'MAT_leaf' };

function start() {
  if (!host) return;
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: capture }); } catch (error) { host.classList.add('failed'); return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  host.prepend(renderer.domElement);
  const small = Math.min(innerWidth, innerHeight) < 700;
  const look = createLook(THREE, renderer, { shadows: small ? 2048 : 4096 });
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog('#e9dcc6', 90, 260);

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 600);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.maxPolarAngle = Math.PI / 2 - 0.03;
  controls.autoRotate = !capture; controls.autoRotateSpeed = 0.35;
  controls.addEventListener('start', () => { controls.autoRotate = false; });

  function resize() {
    const width = host.clientWidth || 1, height = host.clientHeight || 1;
    camera.aspect = width / height; camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }
  new ResizeObserver(resize).observe(host);
  resize();

  let meshes = [];
  new GLTFLoader().loadAsync(new URL('assets/arqo-demo-house-01.glb', import.meta.url).href).then(gltf => {
    const model = gltf.scenes.find(s => s.name === 'ARQO_HOUSE_CLEAN') || gltf.scene;
    model.traverse(node => { if (node.isMesh && LOOK_NAMES[node.material.name]) node.material.name = LOOK_NAMES[node.material.name]; });
    ({ meshes } = look.apply(scene, model));
    const edges = new THREE.LineBasicMaterial({ color: '#1f231c', transparent: true, opacity: 0.38 });
    model.traverse(node => {
      if (!node.isMesh || meshes.includes(node)) return;
      // the SketchUp colour, lit and shadowed like the rest, with SketchUp's own drawn edges
      node.material = new THREE.MeshStandardMaterial({ color: node.material.color, roughness: 0.82, side: THREE.DoubleSide });
      node.material.userData.base = { emissive: 0, intensity: 1 };
      node.castShadow = node.receiveShadow = true;
      const e = new THREE.LineSegments(new THREE.EdgesGeometry(node.geometry, 30), edges); e.raycast = () => {}; node.add(e);
      meshes.push(node);
    });
    scene.add(model);
    // Frame the house: every part with a tool (the ground left out).
    const box = new THREE.Box3();
    model.updateMatrixWorld(true);
    model.traverse(node => { if (node.isMesh && houseTool(partOf(node)?.userData.arqoId)) box.expandByObject(node); });
    if (box.isEmpty()) box.setFromObject(model);
    const center = box.getCenter(new THREE.Vector3()), size = box.getSize(new THREE.Vector3()).length();
    controls.target.copy(center);
    camera.position.copy(center).add(new THREE.Vector3(-0.62, 0.42, 0.95).normalize().multiplyScalar(size * 1.45));
    controls.minDistance = size * 0.45; controls.maxDistance = size * 3;
    camera.lookAt(center);
    host.classList.add('ready');
    if (capture) setTimeout(() => console.log('HERO-READY'), 500);
  }).catch(error => { console.error(error); host.classList.add('failed'); });

  // Hover names the part and the tool that makes it.
  const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
  let hovered = [], pending = null, dragging = false;
  function partOf(node) { let n = node; while (n && !n.userData.arqoId && n.parent) n = n.parent; return n && n.userData.arqoId ? n : null; }
  const clear = () => { hovered.forEach(look.unglow); hovered = []; if (label) label.hidden = true; };
  renderer.domElement.addEventListener('pointerdown', () => { dragging = true; clear(); });
  addEventListener('pointerup', () => { dragging = false; });
  renderer.domElement.addEventListener('pointermove', event => { if (!dragging) pending = event; });
  renderer.domElement.addEventListener('pointerleave', () => { pending = null; clear(); });
  function hover(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(meshes, false).find(h => !/glass/.test(h.object.material.name));
    const part = hit ? partOf(hit.object) : null;
    const made = part && houseTool(part.userData.arqoId);
    clear();
    if (!made) return;
    part.traverse(n => { if (n.isMesh) { look.glow(n, 0xd57750, 0.32); hovered.push(n); } });
    if (label) { label.textContent = `${made.label[LANG]} · ${made.toolLabel}`; label.hidden = false; }
  }

  let visible = true;
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }).observe(host);
  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    if (!visible) return;
    const t = clock.getElapsedTime();
    if (pending) { hover(pending); pending = null; }
    look.update(t);
    controls.update();
    renderer.render(scene, camera);
  });
}

start();
