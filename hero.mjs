// Home hero: ARQO Pavilion, rendered live (hand-written source, not generated).
// Every part names the ARQO tool that makes it. Drag to turn, wheel to zoom.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Water } from 'three/addons/objects/Water.js';
import { createLook, SUN } from './look.mjs';

const host = document.getElementById('home-model');
const label = document.getElementById('home-model-label');
const LANG = document.documentElement.lang === 'tr' ? 'tr' : 'en';
const HOME = { position: [-27, 9, 60], target: [-3, 5, 0] };
const capture = new URLSearchParams(location.search).has('capture');

function roundedRect(x0, z0, x1, z1, r) {
  const s = new THREE.Shape();
  s.moveTo(x0 + r, -z0); s.lineTo(x1 - r, -z0); s.absarc(x1 - r, -z0 - r, r, Math.PI / 2, 0, true);
  s.lineTo(x1, -z1 + r); s.absarc(x1 - r, -z1 + r, r, 0, -Math.PI / 2, true);
  s.lineTo(x0 + r, -z1); s.absarc(x0 + r, -z1 + r, r, -Math.PI / 2, -Math.PI, true);
  s.lineTo(x0, -z0 - r); s.absarc(x0 + r, -z0 - r, r, Math.PI, Math.PI / 2, true);
  return s;
}

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

  const camera = new THREE.PerspectiveCamera(34, 1, 0.3, 600);
  camera.position.fromArray(HOME.position);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.fromArray(HOME.target);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  controls.minDistance = 14; controls.maxDistance = 120;
  controls.enablePan = false;
  controls.maxPolarAngle = Math.PI / 2 - 0.03;
  controls.autoRotate = !capture; controls.autoRotateSpeed = 0.35;
  controls.addEventListener('start', () => { controls.autoRotate = false; });
  camera.lookAt(controls.target);

  function resize() {
    const width = host.clientWidth || 1, height = host.clientHeight || 1;
    camera.aspect = width / height; camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }
  new ResizeObserver(resize).observe(host);
  resize();

  let meshes = [], water = null;
  new GLTFLoader().loadAsync(new URL('assets/arqo-pavilion-01.glb', import.meta.url).href).then(gltf => {
    const model = gltf.scene;
    ({ meshes } = look.apply(scene, model));
    scene.add(model);
    // The long pool in front mirrors the building.
    const geometry = new THREE.ShapeGeometry(roundedRect(-34, 16.4, 30, 22.4, 1.6), 12); geometry.rotateX(-Math.PI / 2);
    water = new Water(geometry, {
      textureWidth: small ? 512 : 1024, textureHeight: small ? 512 : 1024, waterNormals: look.normals,
      sunDirection: new THREE.Vector3(...SUN).normalize(), sunColor: 0xffd7a6, waterColor: 0x1d4a5e, distortionScale: 0.55, fog: false
    });
    water.material.uniforms.size.value = 5;
    water.position.y = 0.06;
    scene.add(water);
    host.classList.add('ready');
    if (capture) setTimeout(() => console.log('HERO-READY'), 500);
  }).catch(error => { console.error(error); host.classList.add('failed'); });

  // Hover names the part and the tool that makes it.
  const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
  let hovered = [], pending = null, dragging = false;
  const partOf = node => { let n = node; while (n && !n.userData.arqoId && n.parent) n = n.parent; return n && n.userData.arqoId ? n : null; };
  const clear = () => { hovered.forEach(look.unglow); hovered = []; if (label) label.hidden = true; };
  renderer.domElement.addEventListener('pointerdown', () => { dragging = true; clear(); });
  addEventListener('pointerup', () => { dragging = false; });
  renderer.domElement.addEventListener('pointermove', event => { if (!dragging) pending = event; });
  renderer.domElement.addEventListener('pointerleave', () => { pending = null; clear(); });
  function hover(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(meshes, false).find(h => !/glass|water/.test(h.object.material.name));
    const part = hit ? partOf(hit.object) : null;
    clear();
    if (!part || part.userData.type === 'site') return;
    part.traverse(n => { if (n.isMesh && !/light|amber/.test(n.material.name)) { look.glow(n, 0xd57750, 0.32); hovered.push(n); } });
    if (label) { label.textContent = `${part.userData.label[LANG]} · ${part.userData.toolLabel}`; label.hidden = false; }
  }

  let visible = true;
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }).observe(host);
  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    if (!visible) return;
    const t = clock.getElapsedTime();
    if (pending) { hover(pending); pending = null; }
    look.update(t);
    if (water) water.material.uniforms.time.value = t * 0.35;
    controls.update();
    renderer.render(scene, camera);
  });
}

start();
