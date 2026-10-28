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
// The house's SketchUp materials drawn with the shared look's real materials; the rest keep their own colour.
const LOOK_NAMES = {
  MAT_GLASS: 'MAT_glass', MAT_TREE_TRUNK: 'MAT_trunk', MAT_TREE_GREEN: 'MAT_leaf',
  MAT_SLAB_LIGHT: 'MAT_stone', MAT_DECK_TERRACOTTA: 'MAT_timber', MAT_FRAME_DARK: 'MAT_steel'
};

// The garden the house stands in: a stone path from the stair and more of the house's own tree component around
// it. Built before the look is applied, so it gets the same materials.
function garden(model, house) {
  const add = (geometry, name, x, y, z) => {
    const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ name }));
    mesh.position.set(x, y, z); model.add(mesh); return mesh;
  };
  // the path leaves the stair the way it runs down: across its narrow side, away from the house
  const stair = model.getObjectByProperty('name', 'Stair_Main');
  if (stair) {
    const foot = new THREE.Box3().setFromObject(stair), c = foot.getCenter(new THREE.Vector3()), mid = house.getCenter(new THREE.Vector3());
    const alongX = foot.max.x - foot.min.x < foot.max.z - foot.min.z, length = 9, wide = Math.max(foot.max.x - foot.min.x, foot.max.z - foot.min.z) + 0.4;
    const sign = alongX ? Math.sign(c.x - mid.x) || 1 : Math.sign(c.z - mid.z) || 1;
    const start = alongX ? (sign > 0 ? foot.max.x : foot.min.x) : (sign > 0 ? foot.max.z : foot.min.z);
    const path = alongX ? new THREE.BoxGeometry(length, 0.04, wide) : new THREE.BoxGeometry(wide, 0.04, length);
    add(path, 'MAT_paving', alongX ? start + sign * length / 2 : c.x, 0, alongX ? c.z : start + sign * length / 2);
  }
  const tree = model.getObjectByProperty('name', 'Tree_01');
  if (tree) {
    for (const [x, z, s, turn] of [[house.min.x - 3.5, house.min.z - 1, 1.25, 0.4], [house.max.x + 3.2, house.min.z - 0.5, 1.1, 1.3], [house.max.x + 4.5, house.max.z + 2, 0.9, 2.1], [house.min.x - 5, house.max.z + 4, 1.35, 2.9], [house.min.x - 9, house.min.z - 4, 1.5, 0.9]]) {
      const copy = tree.clone(); copy.position.set(x, 0, z); copy.scale.setScalar(s); copy.rotation.y = turn; model.add(copy);
    }
  }
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
    // Frame the house: every part with a tool (its own ground slab left out), measured before the garden goes in.
    model.updateMatrixWorld(true);
    const box = new THREE.Box3();
    model.traverse(node => { if (node.isMesh && houseTool(partOf(node)?.userData.arqoId)) box.expandByObject(node); });
    if (box.isEmpty()) box.setFromObject(model);
    garden(model, box);
    model.traverse(node => { if (node.isMesh && LOOK_NAMES[node.material.name]) node.material.name = LOOK_NAMES[node.material.name]; });
    ({ meshes } = look.apply(scene, model));
    renderer.toneMappingExposure = 0.86;   // the house is pale: keep its whites from burning out
    const edges = new THREE.LineBasicMaterial({ color: '#1f231c', transparent: true, opacity: 0.3 });
    model.traverse(node => {
      if (!node.isMesh) return;
      // SketchUp's drawn edges on the built parts (not on glass or leaves), so the pale stone keeps its shape
      if (meshes.includes(node)) {
        if (/stone|timber|steel/.test(node.material.name)) { const e = new THREE.LineSegments(new THREE.EdgesGeometry(node.geometry, 30), edges); e.raycast = () => {}; node.add(e); }
        return;
      }
      // the SketchUp colour, lit and shadowed like the rest, with SketchUp's own drawn edges
      node.material = new THREE.MeshStandardMaterial({ color: node.material.color, roughness: 0.78, side: THREE.DoubleSide });
      node.material.userData.base = { emissive: 0, intensity: 1 };
      node.castShadow = node.receiveShadow = true;
      const e = new THREE.LineSegments(new THREE.EdgesGeometry(node.geometry, 30), edges); e.raycast = () => {}; node.add(e);
      meshes.push(node);
    });
    scene.add(model);
    const center = box.getCenter(new THREE.Vector3()), size = box.getSize(new THREE.Vector3()).length();
    // A model on a warm, quiet ground that melts into the same colour far away: no horizon, only the house and
    // its shadow (an architect's presentation, not a game level).
    const PAPER = '#e6ddcb';
    scene.background = new THREE.Color(PAPER);
    scene.fog = new THREE.Fog(PAPER, size * 2.3, size * 5.2);
    const ground = new THREE.Mesh(new THREE.CircleGeometry(size * 5, 96), new THREE.MeshStandardMaterial({ color: '#cbbfa5', roughness: 1 }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.02; ground.receiveShadow = true;
    scene.add(ground);
    controls.target.copy(center);
    camera.position.copy(center).add(new THREE.Vector3(-0.7, 0.3, 1).normalize().multiplyScalar(size * 1.5));
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
    const hit = raycaster.intersectObjects(meshes, false).find(h => !/glass|paving/.test(h.object.material.name));
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
