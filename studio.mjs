// SketchUp-style ARQO workspace on the site. Hand-written source (not generated).
// The window chrome (menus, toolbars, tray, status bar) lives in index.html; this
// module drives the viewport and the tools. Tools with a prepared scene in the Demo
// House really run here on that scene (Make Face+, Find Gap, Connect / Heal, Weld+,
// Line to Face), with undo. It is a web preview: the plugin itself runs in SketchUp.
// app.js talks to this module through window.arqoStudio.{update, apply}.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const LANG = document.documentElement.lang === 'tr' ? 'tr' : 'en';
const asset = name => new URL(`assets/${name}`, import.meta.url).href;
const $ = selector => document.querySelector(selector);
const ACCENT = 0xd57750;
const SELECT = 0x1f5cff;
const SPAN = 12.8;                 // orthographic frustum height at zoom 1 (m)
const DIST = 23.5;                 // perspective distance at zoom 1 (m)
const HOME = { target: new THREE.Vector3(0, 1.0, 0), dir: new THREE.Vector3(14, 10, 16).normalize() };
const SCENE_DIR = new THREE.Vector3(9, 11, -15).normalize(); // tool scenes sit behind the house

const TEXT = {
  en: {
    loading: 'Loading the model…', noWebgl: 'WebGL is not available in this browser.', failed: 'The model could not be loaded.',
    ready: 'Select an object, or pick an ARQO tool. Middle-drag orbits, Shift + middle-drag pans, the wheel zooms.',
    native: name => `${name} is a SketchUp tool. It works in SketchUp; this web preview only has Select, Orbit, Pan and Zoom.`,
    planned: name => `${name} is planned and not built yet. In the plugin it stays greyed out until it ships.`,
    push: 'ARQOPush: the twelve modes are on the ARQO Special toolbar; they are being built.',
    noScene: name => `${name} works in SketchUp. The demo model has no prepared scene for it yet.`,
    prompt: {
      S01: 'Make Face+: the two loops are selected. Click Apply or press Enter.',
      S10: 'Find Gap: the edges are selected. Click Apply or press Enter.',
      S09: 'Connect / Heal: the edges are selected. Click Apply or press Enter.',
      S11: 'Weld+: the edges are selected. Click Apply or press Enter.',
      S02: 'Line to Face: move the mouse to set the wall height and click, or type the height and press Enter.'
    },
    makeFace: (made, skipped) => `${made} face created${skipped ? `, ${skipped} loop skipped: it is not planar` : ''}.`,
    findGap: (gaps, ends, mm, smallest) => `${ends} open end${ends === 1 ? '' : 's'}, ${gaps} gap${gaps === 1 ? '' : 's'} marked${gaps ? `, smallest ${smallest} mm` : ''} (limit ${mm} mm).`,
    connect: (closed, left) => `${closed} gap${closed === 1 ? '' : 's'} closed${left ? `, ${left} open end${left === 1 ? '' : 's'} left: no partner within the gap limit` : ''}.`,
    weld: (edges, curves) => `${edges} edges welded into ${curves} curve${curves === 1 ? '' : 's'}; the branch is split where three edges meet.`,
    lineToFace: (walls, mm) => `${walls} wall face${walls === 1 ? '' : 's'} created, ${mm} mm high.`,
    undone: label => `Undone: ${label}`, redone: label => `Redone: ${label}`, nothing: 'Nothing to undo.',
    pickTool: 'Pick an ARQO tool first.', badValue: 'Type a height such as 2500, 2.5m or 250cm.',
    noSelection: 'No Selection', name: 'Name', type: 'Type', id: 'ARQO ID', size: 'Size', group: 'Group', edges: 'Edges', faces: 'Faces',
    height: 'Height', measurements: 'Measurements',
    settings: { gapLimitMm: 'Gap limit (mm)', heightMm: 'Wall height (mm)', lastDistanceMm: 'Last distance (mm)' },
    noSettings: 'This tool has no settings.', opensInSketchUp: 'Opens in SketchUp.', trayOnly: 'In SketchUp'
  },
  tr: {
    loading: 'Model yükleniyor…', noWebgl: 'Bu tarayıcıda WebGL yok.', failed: 'Model yüklenemedi.',
    ready: 'Bir nesne seç ya da bir ARQO aracı seç. Orta tuşla sürükle: döndür, Shift + orta tuş: kaydır, tekerlek: yakınlaştır.',
    native: name => `${name} bir SketchUp aracıdır. SketchUp'ta çalışır; bu web önizlemede yalnız Select, Orbit, Pan ve Zoom var.`,
    planned: name => `${name} planlandı, henüz yapılmadı. Eklentide çıkana kadar sönük görünür.`,
    push: "ARQOPush: on iki mod ARQO Special çubuğunda; yapım aşamasında.",
    noScene: name => `${name} SketchUp'ta çalışır. Demo modelde bu araç için hazır sahne henüz yok.`,
    prompt: {
      S01: 'Make Face+: iki döngü seçili. Uygula\'ya bas ya da Enter.',
      S10: 'Find Gap: kenarlar seçili. Uygula\'ya bas ya da Enter.',
      S09: 'Connect / Heal: kenarlar seçili. Uygula\'ya bas ya da Enter.',
      S11: 'Weld+: kenarlar seçili. Uygula\'ya bas ya da Enter.',
      S02: 'Line to Face: fareyi oynatarak duvar yüksekliğini ayarla ve tıkla, ya da yüksekliği yazıp Enter\'a bas.'
    },
    makeFace: (made, skipped) => `${made} yüzey oluşturuldu${skipped ? `, ${skipped} döngü atlandı: düzlemsel değil` : ''}.`,
    findGap: (gaps, ends, mm, smallest) => `${ends} açık uç, ${gaps} boşluk işaretlendi${gaps ? `, en küçüğü ${smallest} mm` : ''} (sınır ${mm} mm).`,
    connect: (closed, left) => `${closed} boşluk kapatıldı${left ? `, ${left} açık uç kaldı: sınır içinde eşi yok` : ''}.`,
    weld: (edges, curves) => `${edges} kenar ${curves} eğriye birleştirildi; üç kenarın buluştuğu yerde dallanma ayrıldı.`,
    lineToFace: (walls, mm) => `${walls} duvar yüzeyi oluşturuldu, yükseklik ${mm} mm.`,
    undone: label => `Geri alındı: ${label}`, redone: label => `Yinelendi: ${label}`, nothing: 'Geri alınacak işlem yok.',
    pickTool: 'Önce bir ARQO aracı seç.', badValue: 'Yüksekliği 2500, 2.5m ya da 250cm gibi yaz.',
    noSelection: 'Seçim yok', name: 'Ad', type: 'Tür', id: 'ARQO ID', size: 'Boyut', group: 'Grup', edges: 'Kenarlar', faces: 'Yüzeyler',
    height: 'Yükseklik', measurements: 'Measurements',
    settings: { gapLimitMm: 'Boşluk sınırı (mm)', heightMm: 'Duvar yüksekliği (mm)', lastDistanceMm: 'Son mesafe (mm)' },
    noSettings: 'Bu aracın ayarı yok.', opensInSketchUp: "SketchUp'ta açılır.", trayOnly: "SketchUp'ta"
  }
}[LANG];

// Native tools: our own simple glyphs, not SketchUp's artwork.
const G = (body, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" ${extra}>${body}</svg>`;
const NATIVE = [
  { id: 'select', x: 90, name: 'Select', key: 'Space', web: true, icon: G('<path d="M6 3l12 9-5.5 1.2L15.5 20l-2.6 1.2-2.9-6.6L6 18z" fill="#fff"/>') },
  { id: 'eraser', x: 152, name: 'Eraser', key: 'E', icon: G('<path d="M4 16l8-8 7 7-5 5H8z" fill="#f4c7c7"/><path d="M9 20h11"/>') },
  { sep: true },
  { id: 'line', x: 192, name: 'Line', key: 'L', icon: G('<path d="M5 19L18 6"/><path d="M16 4l4 4" stroke="#d24a3a"/>') },
  { id: 'rectangle', x: 302, name: 'Rectangle', key: 'R', icon: G('<rect x="4" y="6" width="16" height="12" fill="#fff"/>') },
  { id: 'pushpull', x: 365, name: 'Push/Pull', key: 'P', icon: G('<path d="M4 15l8-4 8 4-8 4z" fill="#e9eef7"/><path d="M12 13V3m-3 3l3-3 3 3" stroke="#d24a3a"/>') },
  { sep: true },
  { id: 'move', x: 445, name: 'Move', key: 'M', icon: G('<path d="M12 3v18M3 12h18M12 3l-2.5 2.5M12 3l2.5 2.5M12 21l-2.5-2.5M12 21l2.5-2.5M3 12l2.5-2.5M3 12l2.5 2.5M21 12l-2.5-2.5M21 12l-2.5 2.5" stroke="#d24a3a"/>') },
  { id: 'rotate', x: 485, name: 'Rotate', key: 'Q', icon: G('<path d="M19 12a7 7 0 1 1-2-4.9"/><path d="M17 3v4.5h-4.5" stroke="#d24a3a"/>') },
  { id: 'scale', x: 525, name: 'Scale', key: 'S', icon: G('<rect x="4" y="9" width="11" height="11" fill="#fff"/><path d="M13 11l7-7m-4 0h4v4" stroke="#d24a3a"/>') },
  { sep: true },
  { id: 'tape', x: 612, name: 'Tape Measure', key: 'T', icon: G('<rect x="3" y="8" width="18" height="8" rx="1" fill="#f6e7a6"/><path d="M7 8v3M11 8v4M15 8v3M19 8v4"/>') },
  { id: 'paint', x: 652, name: 'Paint Bucket', key: 'B', icon: G('<path d="M5 11l6-6 7 7-6 6z" fill="#fff"/><path d="M19 15c0 1.5 1 2.2 1 3.2a1 1 0 0 1-2 0c0-1 1-1.7 1-3.2z" fill="#3a78d8" stroke="#3a78d8"/>') },
  { sep: true },
  { id: 'orbit', x: 700, name: 'Orbit', key: 'O', web: true, icon: G('<ellipse cx="12" cy="12" rx="9" ry="4.5"/><path d="M12 3a9 9 0 0 1 0 18" stroke="#d24a3a"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>') },
  { id: 'pan', x: 740, name: 'Pan', key: 'H', web: true, icon: G('<path d="M8 13V6.5a1.3 1.3 0 0 1 2.6 0V11m0-5.5V5a1.3 1.3 0 0 1 2.6 0v6m0-5a1.3 1.3 0 0 1 2.6 0v5.5m0-3.5a1.3 1.3 0 0 1 2.6 0V15a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L4.5 14a1.3 1.3 0 0 1 2.2-1.4L8 14" fill="#fff"/>') },
  { id: 'zoom', x: 780, name: 'Zoom', key: 'Z', web: true, icon: G('<circle cx="10" cy="10" r="6" fill="#fff"/><path d="M14.5 14.5L20 20" stroke-width="2.4"/>') },
  { id: 'extents', x: 820, name: 'Zoom Extents', key: 'Shift+Z', web: true, icon: G('<circle cx="11" cy="11" r="5" fill="#fff"/><path d="M15 15l4 4M3 7V3h4M21 7V3h-4M3 17v4h4" stroke-width="1.6"/>') }
];

const state = {
  ready: false, pending: null, first: true, native: 'select', tool: null, toolDef: null, scope: 'selection',
  selected: null, undo: [], redo: [], perspective: true, axes: true, shadows: true, xray: false, tray: true, catalog: null
};

const host = document.getElementById('plugin-scene');
const loading = document.getElementById('studio-loading');
const hoverLabel = document.getElementById('studio-label');
const statusLine = document.getElementById('studio-status');
const vcbInput = document.getElementById('su-vcb');
const vcbLabel = document.getElementById('su-vcb-label');
const toastBox = document.getElementById('su-toast');
const entityBox = document.getElementById('su-entity');
const settingsBox = document.getElementById('su-settings');
const windowBox = document.getElementById('su-window');

function status(text) { if (statusLine) statusLine.textContent = text; }
let toastTimer;
function toast(title, text) {
  if (!toastBox) return;
  toastBox.innerHTML = `<b>${title}</b>${text}`;
  toastBox.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toastBox.hidden = true; }, 5200);
}

// --- geometry helpers -----------------------------------------------------------
const KEY = v => `${v.x.toFixed(4)},${v.y.toFixed(4)},${v.z.toFixed(4)}`;
function segmentsOf(node) {
  const out = [];
  node.updateWorldMatrix(true, true);
  node.traverse(child => {
    if (!child.isLineSegments || child.userData.webOnly) return;
    const p = child.geometry.attributes.position;
    for (let i = 0; i + 1 < p.count; i += 2) {
      out.push([new THREE.Vector3().fromBufferAttribute(p, i).applyMatrix4(child.matrixWorld), new THREE.Vector3().fromBufferAttribute(p, i + 1).applyMatrix4(child.matrixWorld), child]);
    }
  });
  return out;
}
function graphOf(segments) {
  const nodes = new Map();
  const node = v => { const k = KEY(v); if (!nodes.has(k)) nodes.set(k, { key: k, point: v.clone(), edges: [] }); return nodes.get(k); };
  segments.forEach(([a, b], index) => { const na = node(a), nb = node(b); na.edges.push({ to: nb, index }); nb.edges.push({ to: na, index }); });
  return nodes;
}
function chainsOf(segments) {
  const nodes = graphOf(segments);
  const used = new Set();
  const chains = [];
  const walk = (start, first) => {
    const points = [start.point];
    let current = start, edge = first;
    for (;;) {
      used.add(edge.index);
      current = edge.to;
      points.push(current.point);
      if (current.edges.length !== 2) break;
      const next = current.edges.find(e => !used.has(e.index));
      if (!next) break;
      edge = next;
    }
    return points;
  };
  for (const n of nodes.values()) if (n.edges.length !== 2) for (const e of n.edges) if (!used.has(e.index)) chains.push({ points: walk(n, e), closed: false });
  for (const n of nodes.values()) for (const e of n.edges) if (!used.has(e.index)) { const pts = walk(n, e); chains.push({ points: pts, closed: true }); }
  return { chains, nodes };
}
function planeOf(points) {
  const normal = new THREE.Vector3();
  for (let i = 0; i < points.length; i++) {
    const a = points[i], b = points[(i + 1) % points.length];
    normal.x += (a.y - b.y) * (a.z + b.z); normal.y += (a.z - b.z) * (a.x + b.x); normal.z += (a.x - b.x) * (a.y + b.y);
  }
  if (normal.lengthSq() < 1e-12) return null;
  normal.normalize();
  const origin = points[0];
  const off = Math.max(...points.map(p => Math.abs(p.clone().sub(origin).dot(normal))));
  return { normal, origin, planar: off < 1e-4 };
}

// --- materials and markers ----------------------------------------------------------
function ringTexture(color) {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'); g.strokeStyle = color; g.lineWidth = 9; g.beginPath(); g.arc(32, 32, 24, 0, Math.PI * 2); g.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const markerMaterials = {};
function markers(points, color, size = 18) {
  if (!markerMaterials[color]) markerMaterials[color] = new THREE.PointsMaterial({ size, sizeAttenuation: false, map: ringTexture(color), transparent: true, depthTest: false });
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const p = new THREE.Points(geometry, markerMaterials[color]); p.renderOrder = 30; p.userData.webOnly = true; p.raycast = () => {};
  return p;
}
function lines(pairs, color, { dashed = false, onTop = true } = {}) {
  const geometry = new THREE.BufferGeometry().setFromPoints(pairs.flat());
  const material = dashed ? new THREE.LineDashedMaterial({ color, dashSize: 0.006, gapSize: 0.004, depthTest: !onTop, transparent: true })
    : new THREE.LineBasicMaterial({ color, depthTest: !onTop, transparent: true });
  const l = new THREE.LineSegments(geometry, material); if (dashed) l.computeLineDistances(); l.renderOrder = 25; l.userData.webOnly = true; l.raycast = () => {};
  return l;
}
function faceMaterial() { return new THREE.MeshStandardMaterial({ color: ACCENT, emissive: ACCENT, emissiveIntensity: 0.25, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, roughness: 0.9 }); }
function settle(material) { setTimeout(() => { material.color.set('#f3f1ea'); material.emissive.set(0x000000); }, 1400); }

function build() {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
  catch (error) { if (loading) loading.textContent = TEXT.noWebgl; return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  host.prepend(renderer.domElement);
  renderer.domElement.tabIndex = 0;

  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight('#ffffff', '#b9bdb0', 2.0));
  const sun = new THREE.DirectionalLight('#fffaf0', 2.2);
  sun.position.set(-7, 13, 9); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -14, right: 14, top: 12, bottom: -12 });
  sun.shadow.normalBias = 0.03; sun.shadow.bias = -0.0001;
  scene.add(sun);
  // SketchUp-like ground: a flat plane in a muted green-grey, with a shadow catcher.
  const shadowPlane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: 0.18 }));
  shadowPlane.rotation.x = -Math.PI / 2; shadowPlane.position.y = -0.124; shadowPlane.receiveShadow = true; scene.add(shadowPlane);

  // Axes: red, green, blue; solid on the positive side, dotted on the negative.
  const axes = new THREE.Group();
  const axis = (dir, color) => {
    const pos = lines([[new THREE.Vector3(0, 0.002, 0), dir.clone().multiplyScalar(60).setY(0.002 + dir.y * 60)]], color, { onTop: false });
    const neg = lines([[new THREE.Vector3(0, 0.002, 0), dir.clone().multiplyScalar(-60).setY(0.002 - dir.y * 60)]], color, { dashed: true, onTop: false });
    neg.material.dashSize = 0.5; neg.material.gapSize = 0.35; axes.add(pos, neg);
  };
  axis(new THREE.Vector3(1, 0, 0), 0xd23b2f); axis(new THREE.Vector3(0, 0, -1), 0x2f9a3a); axis(new THREE.Vector3(0, 1, 0), 0x2f55d2);
  scene.add(axes);

  // Cameras: perspective (SketchUp's default) and parallel projection.
  const persp = new THREE.PerspectiveCamera(35, 1, 0.05, 4000);
  const ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.05, 4000);
  let camera = persp;
  camera.position.copy(HOME.target).addScaledVector(HOME.dir, DIST);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(HOME.target);
  controls.enableDamping = true; controls.dampingFactor = 0.1;
  controls.zoomToCursor = true;
  controls.minDistance = 1; controls.maxDistance = 400; controls.minZoom = 0.2; controls.maxZoom = 12;
  controls.maxPolarAngle = Math.PI - 0.01;

  function resize() {
    const w = host.clientWidth || 1, h = host.clientHeight || 1, aspect = w / h;
    persp.aspect = aspect; persp.updateProjectionMatrix();
    ortho.left = -SPAN * aspect / 2; ortho.right = SPAN * aspect / 2; ortho.top = SPAN / 2; ortho.bottom = -SPAN / 2; ortho.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }
  new ResizeObserver(resize).observe(host);
  resize();

  function setProjection(perspective) {
    if (perspective === (camera === persp)) return;
    const dir = camera.position.clone().sub(controls.target).normalize();
    if (perspective) { persp.position.copy(controls.target).addScaledVector(dir, DIST / ortho.zoom); camera = persp; }
    else { ortho.position.copy(controls.target).addScaledVector(dir, DIST); ortho.zoom = DIST / camera.position.distanceTo(controls.target); ortho.updateProjectionMatrix(); camera = ortho; }
    controls.object = camera; controls.update();
    state.perspective = perspective;
  }

  // Camera flights run only after a tool, a view or Zoom Extents, and stop when the user moves the view.
  const goal = { target: HOME.target.clone(), dir: HOME.dir.clone(), zoom: 1, flying: false };
  function flyTo(target, zoom = 1, dir = camera.position.clone().sub(controls.target).normalize()) {
    goal.target.copy(target); goal.dir.copy(dir).normalize(); goal.zoom = zoom; goal.flying = true;
  }
  controls.addEventListener('start', () => { goal.flying = false; });

  const root = new THREE.Group(); scene.add(root);
  const opsGroup = new THREE.Group(); scene.add(opsGroup);
  const meshes = [];
  const pickables = [];
  const fixtures = new Map();
  const byId = new Map();
  let data = null;
  const edgeMaterial = new THREE.LineBasicMaterial({ color: '#111214' });
  const fixtureMaterial = new THREE.LineBasicMaterial({ color: '#1d1f22', depthTest: false, transparent: true });
  const selectedFixtureMaterial = new THREE.LineBasicMaterial({ color: SELECT, depthTest: false, transparent: true });
  const xrayStore = new Map();

  Promise.all([
    new GLTFLoader().loadAsync(asset('arqo-demo-house-01.glb')),
    fetch(asset('showcase.json')).then(r => { if (!r.ok) throw new Error(`showcase.json ${r.status}`); return r.json(); }),
    import(new URL('lib/catalog.mjs', document.baseURI).href).catch(() => null)
  ]).then(([gltf, showcase, catalog]) => {
    data = showcase; state.catalog = catalog;
    const model = gltf.scene;
    const showcaseGroup = gltf.scenes[showcase.showcaseScene]?.getObjectByName('Showcase_Objects');
    if (showcaseGroup) model.add(showcaseGroup);
    model.traverse(node => {
      if (node.userData.arqoId) byId.set(node.userData.arqoId, node);
      if (!node.isMesh) return;
      meshes.push(node); pickables.push(node);
      node.material = node.material.clone();
      node.castShadow = !node.material.transparent; node.receiveShadow = !node.material.transparent;
      if (!node.name.startsWith('Tree_Canopy')) { const e = new THREE.LineSegments(new THREE.EdgesGeometry(node.geometry, 30), edgeMaterial); e.raycast = () => {}; e.userData.webOnly = true; node.add(e); }
    });
    for (const record of showcase.fixtures) {
      const node = byId.get(record.arqoId) || model.getObjectByName(record.node);
      if (!node) continue;
      node.traverse(child => { if (child.isLineSegments) { child.material = fixtureMaterial; child.renderOrder = 10; pickables.push(child); } });
      fixtures.set(record.node, { node, record });
    }
    root.add(model);
    state.ready = true;
    if (loading) loading.hidden = true;
    renderNative(); renderMenus(); showFixture(null); wireDialog(); showEntity(null); status(TEXT.ready); setVcb(TEXT.measurements, '');
    if (state.pending) update(state.pending);
  }).catch(error => { console.error(error); if (loading) loading.textContent = TEXT.failed; });

  // --- selection and Entity Info ------------------------------------------------------
  let selectionBox = null;
  function ownerOf(object) { let o = object; while (o && !o.userData.arqoId && o.parent) o = o.parent; return o && o.userData.arqoId ? o : object; }
  function select(object) {
    if (selectionBox) { scene.remove(selectionBox); selectionBox = null; }
    for (const { node } of fixtures.values()) node.traverse(c => { if (c.isLineSegments && c.material === selectedFixtureMaterial) c.material = fixtureMaterial; });
    state.selected = object || null;
    if (object) {
      const isFixture = [...fixtures.values()].some(f => f.node === object);
      if (isFixture) object.traverse(c => { if (c.isLineSegments && !c.userData.webOnly) c.material = selectedFixtureMaterial; });
      else { selectionBox = new THREE.BoxHelper(object, SELECT); selectionBox.material.depthTest = false; selectionBox.renderOrder = 40; scene.add(selectionBox); }
    }
    showEntity(object);
  }
  function showEntity(object) {
    if (!entityBox) return;
    if (!object) { entityBox.innerHTML = `<p class="su-muted">${TEXT.noSelection}</p>`; return; }
    const box = new THREE.Box3().setFromObject(object); const s = box.getSize(new THREE.Vector3());
    const mm = v => Math.round(v * 1000).toLocaleString(LANG === 'tr' ? 'tr-TR' : 'en-US');
    const fixture = [...fixtures.values()].find(f => f.node === object);
    const edgeCount = fixture ? segmentsOf(object).length : 0;
    const type = fixture ? `${TEXT.edges} (${edgeCount})` : TEXT.group;
    const name = fixture ? fixture.record.showcaseLabel : (object.name || '').replace(/_/g, ' ');
    entityBox.innerHTML = `<p class="su-entity-title">${type}</p><dl><dt>${TEXT.name}</dt><dd>${name}</dd><dt>${TEXT.id}</dt><dd>${object.userData.arqoId || '—'}</dd><dt>${TEXT.size}</dt><dd>${mm(s.x)} × ${mm(s.z)} × ${mm(s.y)} mm</dd></dl>`;
  }

  // --- tools --------------------------------------------------------------------------------
  const setting = (tool, id) => {
    const input = settingsBox && settingsBox.querySelector(`[data-setting="${id}"]`);
    const fallback = tool?.manifest?.settings?.find(s => s.id === id)?.default;
    const value = input ? Number(input.value) : fallback;
    return Number.isFinite(value) && value > 0 ? value : fallback;
  };
  function renderSettings(tool) {
    if (!settingsBox || document.getElementById('su-dialog')) return;
    const list = tool?.manifest?.settings || [];
    settingsBox.innerHTML = list.length ? list.map(s => `<label>${TEXT.settings[s.id] || s.id}<input type="number" min="0" step="any" data-setting="${s.id}" value="${s.default}"></label>`).join('') : `<p class="su-muted">${TEXT.noSettings}</p>`;
  }
  function fixtureFor(tool) {
    const node = data?.showcase?.[tool?.productId]?.node;
    return node ? fixtures.get(node) : null;
  }
  function showFixture(active) {
    const group = active?.node.parent;
    for (const f of fixtures.values()) f.node.visible = f === active;
    if (group && group.name === 'Showcase_Objects') group.visible = Boolean(active);
  }

  function frame(box, extraHeight = 0) {
    const size = box.getSize(new THREE.Vector3()); const centre = box.getCenter(new THREE.Vector3());
    if (extraHeight > size.y) { centre.y += (extraHeight - size.y) / 2; size.y = extraHeight; }
    const zoom = THREE.MathUtils.clamp(SPAN / (Math.max(size.x, size.z, size.y * 1.35, 0.5) * 2.4), 1, 4.5);
    flyTo(centre, zoom, SCENE_DIR);
  }

  function activate(tool, fly) {
    cancelInteractive();
    state.tool = tool; state.toolDef = null;
    renderSettings(tool);
    const status_ = tool.manifest?.implementationStatus || 'planned';
    if (tool.id === 'A01') { status(TEXT.push); toast('ARQOPush', TEXT.push); showFixture(null); return; }
    if (status_ === 'planned') { status(TEXT.planned(tool.name)); if (fly) toast('ARQO', TEXT.planned(tool.name)); showFixture(null); return; }
    const fixture = fixtureFor(tool);
    const runner = RUNNERS[tool.id];
    if (!fixture || !runner) { status(TEXT.noScene(tool.name)); if (fly) toast(tool.name, TEXT.noScene(tool.name)); showFixture(null); return; }
    state.toolDef = { runner, fixture };
    showFixture(fixture);
    select(fixture.node);
    status(TEXT.prompt[tool.id] || tool.name);
    if (fly) frame(new THREE.Box3().setFromObject(fixture.node), runner.interactive ? setting(tool, 'heightMm') / 1000 : 0);
    if (runner.interactive) startInteractive(fixture);
    else { clearTimeout(state.runTimer); state.runTimer = setTimeout(apply, fly ? 1300 : 0); }
  }

  function record(op) {
    op.toolId = state.tool?.id;
    const prior = state.undo.findIndex(o => o.toolId === op.toolId);
    if (prior >= 0) { state.undo[prior].undo(); state.undo.splice(prior, 1); op.redo(); }
    state.undo.push(op); state.redo.length = 0;
    if (op.objects && op.objects.length) { const box = new THREE.Box3(); op.objects.forEach(o => box.expandByObject(o)); if (!box.isEmpty()) frame(box); }
    toast(`ARQO · ${op.tool}`, op.message); status(`${op.tool}: ${op.message}`);
  }
  function undo() {
    const op = state.undo.pop();
    if (!op) { toast('Edit', TEXT.nothing); return; }
    op.undo(); state.redo.push(op); status(TEXT.undone(`${op.tool}`));
  }
  function redo() {
    const op = state.redo.pop(); if (!op) return;
    op.redo(); state.undo.push(op); status(TEXT.redone(`${op.tool}`));
  }
  function keep(objects, tool, message) {
    const add = () => objects.forEach(o => opsGroup.add(o));
    const remove = () => objects.forEach(o => opsGroup.remove(o));
    add();
    return { tool, message, objects, undo: remove, redo: add };
  }

  const RUNNERS = {
    S01: { run(tool, fixture) { // Make Face+
      const objects = []; let made = 0, skipped = 0;
      fixture.node.traverse(child => {
        if (!child.isLineSegments || child.userData.webOnly) return;
        const { chains } = chainsOf(segmentsOf(child));
        for (const chain of chains) {
          const pts = chain.closed ? chain.points.slice(0, -1) : chain.points;
          const plane = chain.closed && pts.length >= 3 ? planeOf(pts) : null;
          if (!plane || !plane.planar) { skipped++; objects.push(lines(pts.map((p, i) => [p, pts[(i + 1) % pts.length]]), 0xd23b2f, { dashed: true })); continue; }
          const u = new THREE.Vector3().subVectors(pts[1], pts[0]).normalize(); const v = new THREE.Vector3().crossVectors(plane.normal, u);
          const flat = pts.map(p => new THREE.Vector2(p.clone().sub(plane.origin).dot(u), p.clone().sub(plane.origin).dot(v)));
          const tris = THREE.ShapeUtils.triangulateShape(flat, []);
          const g = new THREE.BufferGeometry().setFromPoints(pts); g.setIndex(tris.flat()); g.computeVertexNormals();
          const m = faceMaterial(); const mesh = new THREE.Mesh(g, m); mesh.userData.webOnly = true; objects.push(mesh); settle(m); made++;
        }
      });
      return keep(objects, tool.name, TEXT.makeFace(made, skipped));
    } },
    S10: { run(tool, fixture) { // Find Gap
      const limit = setting(tool, 'gapLimitMm') / 1000;
      const { gaps, ends } = openEnds(fixture, limit);
      const objects = [];
      if (gaps.length) { objects.push(markers(gaps.flat(), '#d23b2f')); objects.push(lines(gaps, 0xd23b2f, { dashed: true })); }
      if (ends.length) objects.push(markers(ends, '#e29a2d'));
      const smallest = gaps.length ? Math.min(...gaps.map(([a, b]) => a.distanceTo(b) * 1000)).toFixed(2) : '0';
      return keep(objects, tool.name, TEXT.findGap(gaps.length, ends.length + gaps.length * 2, Math.round(limit * 1000), smallest));
    } },
    S09: { run(tool, fixture) { // Connect / Heal
      const limit = setting(tool, 'gapLimitMm') / 1000;
      const { gaps, ends } = openEnds(fixture, limit);
      const objects = [];
      if (gaps.length) { const l = lines(gaps, ACCENT); objects.push(l, markers(gaps.flat(), '#2f9a3a', 14)); setTimeout(() => l.material.color.set('#1d1f22'), 1400); }
      if (ends.length) objects.push(markers(ends, '#e29a2d'));
      return keep(objects, tool.name, TEXT.connect(gaps.length, ends.length));
    } },
    S11: { run(tool, fixture) { // Weld+
      const segments = segmentsOf(fixture.node);
      const { chains } = chainsOf(segments);
      const palette = [0xd57750, 0x3a6ea5, 0x5b8c5a, 0x9a5ba5, 0xc49a2c, 0x2a9d9a];
      const objects = chains.map((chain, i) => lines(chain.points.slice(0, -1).map((p, k) => [p, chain.points[k + 1]]), palette[i % palette.length]));
      objects.push(markers(chains.flatMap(c => [c.points[0], c.points[c.points.length - 1]]), '#1f5cff', 12));
      return keep(objects, tool.name, TEXT.weld(segments.length, chains.length));
    } },
    S02: { interactive: true, run(tool, fixture, heightM) { // Line to Face
      const h = heightM ?? setting(tool, 'heightMm') / 1000;
      const { group, count } = wallGroup(fixture, h, false);
      return keep([group], tool.name, TEXT.lineToFace(count, Math.round(h * 1000)));
    } }
  };

  function openEnds(fixture, limit) {
    const nodes = graphOf(segmentsOf(fixture.node));
    const open = [...nodes.values()].filter(n => n.edges.length === 1).map(n => n.point);
    const gaps = []; const used = new Set();
    for (let i = 0; i < open.length; i++) {
      if (used.has(i)) continue;
      let best = -1, bestD = Infinity;
      for (let j = i + 1; j < open.length; j++) { if (used.has(j)) continue; const d = open[i].distanceTo(open[j]); if (d < bestD) { bestD = d; best = j; } }
      if (best >= 0 && bestD <= limit && bestD > 0) { gaps.push([open[i], open[best]]); used.add(i); used.add(best); }
    }
    const ends = open.filter((_, i) => !used.has(i));
    return { gaps, ends };
  }
  function wallGroup(fixture, h, preview) {
    const segments = segmentsOf(fixture.node);
    const group = new THREE.Group(); group.userData.webOnly = true;
    const up = new THREE.Vector3(0, h, 0);
    const edgesOut = [];
    for (const [a, b] of segments) {
      const g = new THREE.BufferGeometry().setFromPoints([a, b, b.clone().add(up), a.clone().add(up)]); g.setIndex([0, 1, 2, 0, 2, 3]); g.computeVertexNormals();
      const m = preview ? new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false }) : faceMaterial();
      group.add(new THREE.Mesh(g, m)); if (!preview) settle(m);
      edgesOut.push([a.clone().add(up), b.clone().add(up)], [a, a.clone().add(up)], [b, b.clone().add(up)]);
    }
    group.add(lines(edgesOut, preview ? ACCENT : 0x1d1f22, { onTop: preview }));
    return { group, count: segments.length };
  }

  // Line to Face: the height follows the mouse along the vertical through the first point.
  const interactive = { on: false, fixture: null, base: null, height: 0, preview: null };
  function startInteractive(fixture) {
    interactive.on = true; interactive.fixture = fixture; interactive.base = segmentsOf(fixture.node)[0][0];
    interactive.height = setting(state.tool, 'heightMm') / 1000;
    setVcb(TEXT.height, `${Math.round(interactive.height * 1000)} mm`);
    drawPreview();
  }
  function drawPreview() {
    if (interactive.preview) opsGroup.remove(interactive.preview);
    interactive.preview = wallGroup(interactive.fixture, interactive.height, true).group; opsGroup.add(interactive.preview);
  }
  function cancelInteractive() {
    if (interactive.preview) opsGroup.remove(interactive.preview);
    Object.assign(interactive, { on: false, fixture: null, preview: null });
    setVcb(TEXT.measurements, '');
  }
  function commitInteractive(heightM) {
    const tool = state.tool, fixture = interactive.fixture;
    cancelInteractive();
    record(RUNNERS.S02.run(tool, fixture, heightM));
    select(null);
    state.toolDef = null;
  }
  function heightFromPointer(event) {
    const ray = rayAt(event);
    const base = interactive.base, up = new THREE.Vector3(0, 1, 0);
    const w0 = ray.origin.clone().sub(base);
    const b = ray.direction.dot(up), d = ray.direction.dot(w0), e = up.dot(w0);
    const denom = 1 - b * b; if (Math.abs(denom) < 1e-6) return interactive.height;
    const t = (e - b * d) / denom;
    return THREE.MathUtils.clamp(t, 0.1, 20);
  }

  function apply() {
    if (!state.ready) return;
    if (!state.tool) { toast('ARQO', TEXT.pickTool); return; }
    if (!state.toolDef) { activate(state.tool, true); if (!state.toolDef) return; }
    const { runner, fixture } = state.toolDef;
    if (runner.interactive) { commitInteractive(interactive.on ? interactive.height : undefined); return; }
    record(runner.run(state.tool, fixture));
    select(null);
    state.toolDef = null;
  }

  // --- pointer, keyboard, native tools -----------------------------------------------------
  const raycaster = new THREE.Raycaster(); raycaster.params.Line.threshold = 0.04;
  const ndc = new THREE.Vector2();
  function rayAt(event) {
    const r = renderer.domElement.getBoundingClientRect();
    ndc.set(((event.clientX - r.left) / r.width) * 2 - 1, -((event.clientY - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera); return raycaster.ray;
  }
  function visible(o) { for (let n = o; n; n = n.parent) if (!n.visible) return false; return true; }
  function pick(event) {
    rayAt(event);
    const hit = raycaster.intersectObjects(pickables.filter(visible), false)[0];
    return hit ? ownerOf(hit.object) : null;
  }
  let down = null;
  renderer.domElement.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, button: e.button }; renderer.domElement.focus({ preventScroll: true }); });
  renderer.domElement.addEventListener('pointerup', e => {
    if (!down || e.button !== 0 || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 4) { down = null; return; }
    down = null;
    if (interactive.on) { commitInteractive(interactive.height); return; }
    if (state.native === 'select') select(pick(e));
  });
  renderer.domElement.addEventListener('pointermove', e => {
    if (interactive.on && !(e.buttons & 4)) { interactive.height = heightFromPointer(e); setVcb(TEXT.height, `${Math.round(interactive.height * 1000)} mm`); drawPreview(); }
    if (!hoverLabel) return;
    const owner = pick(e);
    if (owner && owner.userData.arqoId) { hoverLabel.textContent = (owner.name || owner.userData.arqoId).replace(/_/g, ' '); hoverLabel.hidden = false; }
    else hoverLabel.hidden = true;
  });
  renderer.domElement.addEventListener('pointerleave', () => { if (hoverLabel) hoverLabel.hidden = true; });

  function setNative(id) {
    const tool = NATIVE.find(t => t.id === id);
    if (!tool) return;
    if (!tool.web) { toast(tool.name, TEXT.native(tool.name)); return; }
    if (id === 'extents') { zoomExtents(); return; }
    state.native = id;
    const M = THREE.MOUSE;
    controls.mouseButtons = { LEFT: id === 'orbit' ? M.ROTATE : id === 'pan' ? M.PAN : id === 'zoom' ? M.DOLLY : null, MIDDLE: M.ROTATE, RIGHT: M.PAN };
    renderer.domElement.style.cursor = { select: 'default', orbit: 'grab', pan: 'move', zoom: 'zoom-in' }[id];
    document.querySelectorAll('[data-native]').forEach(b => { b.classList.toggle('active', b.dataset.native === id && id !== 'select'); b.classList.toggle('mute', b.dataset.native === 'select' && id !== 'select'); });
    if (id !== 'select') cancelInteractive();
  }
  function zoomExtents() {
    const box = new THREE.Box3().setFromObject(root); const sphere = box.getBoundingSphere(new THREE.Sphere());
    flyTo(sphere.center, THREE.MathUtils.clamp(SPAN / (sphere.radius * 2.1), 0.2, 12));
  }
  function view(dir) { flyTo(controls.target.clone(), camera === ortho ? ortho.zoom : DIST / camera.position.distanceTo(controls.target), dir); }

  function renderNative() {
    const bar = document.getElementById('su-native');
    if (!bar) return;
    const real = bar.classList.contains('su-native');
    bar.innerHTML = real
      ? NATIVE.filter(t => !t.sep).map(t => `<button type="button" data-native="${t.id}" title="${t.name} (${t.key})" aria-label="${t.name}" style="left:${((t.x - 10 - 19) / 1540 * 100).toFixed(3)}%;width:${(38 / 1540 * 100).toFixed(3)}%;top:${(69 / 110 * 100).toFixed(2)}%;height:${(38 / 110 * 100).toFixed(2)}%"></button>`).join('')
      : NATIVE.map(t => t.sep ? '<span class="su-sep"></span>' : `<button type="button" data-native="${t.id}" class="${t.web ? '' : 'is-native-off'}" title="${t.name} (${t.key})" aria-label="${t.name}">${t.icon}</button>`).join('');
    bar.addEventListener('click', e => { const b = e.target.closest('[data-native]'); if (b) setNative(b.dataset.native); });
    setNative('select');
  }

  function vcbValue(text) {
    const m = String(text).trim().replace(',', '.').match(/^(-?\d+(?:\.\d+)?)\s*(mm|cm|m)?$/i);
    if (!m) return null;
    const n = Number(m[1]); const unit = (m[2] || 'mm').toLowerCase();
    const metres = unit === 'm' ? n : unit === 'cm' ? n / 100 : n / 1000;
    return metres > 0 && metres <= 50 ? metres : null;
  }
  function setVcb(label, value) { if (vcbLabel) vcbLabel.textContent = label; if (vcbInput) vcbInput.value = value; }
  if (vcbInput) vcbInput.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    if (!interactive.on) { apply(); return; }
    const h = vcbValue(vcbInput.value); if (h == null) { toast('Line to Face', TEXT.badValue); return; }
    commitInteractive(h);
  });

  const pluginViewVisible = () => { const v = document.getElementById('plugin-view'); return v && !v.hidden; };
  document.addEventListener('keydown', e => {
    if (!state.ready || !pluginViewVisible()) return;
    const inField = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName) && document.activeElement !== vcbInput;
    if (inField) return;
    const ctrl = e.ctrlKey || e.metaKey;
    if (ctrl && e.key.toLowerCase() === 'z') { e.preventDefault(); undo(); return; }
    if (ctrl && e.key.toLowerCase() === 'y') { e.preventDefault(); redo(); return; }
    if (ctrl && e.key.toLowerCase() === 't') { e.preventDefault(); select(null); return; }
    if (document.activeElement === vcbInput) return;
    if (e.key === 'Escape') { cancelInteractive(); select(null); state.toolDef = null; status(TEXT.ready); return; }
    if (e.key === 'Enter') { e.preventDefault(); apply(); return; }
    if (interactive.on && /^[0-9.,]$/.test(e.key)) { vcbInput.value = ''; vcbInput.focus(); return; }
    const k = e.key.toLowerCase();
    if (e.key === ' ') { e.preventDefault(); setNative('select'); }
    else if (k === 'o') setNative('orbit'); else if (k === 'h') setNative('pan');
    else if (k === 'z' && e.shiftKey) setNative('extents'); else if (k === 'z') setNative('zoom');
  });

  // --- menus ----------------------------------------------------------------------------------
  const pop = document.createElement('div'); pop.className = 'su-menu-pop'; pop.hidden = true; pop.setAttribute('role', 'menu');
  const menubar = document.getElementById('su-menubar');
  if (menubar) menubar.append(pop);
  let openMenu = null;
  const item = (label, action, opts = {}) => ({ label, action, ...opts });
  const dirs = { top: new THREE.Vector3(0, 1, 0.0001), front: new THREE.Vector3(0, 0.0001, 1), back: new THREE.Vector3(0, 0.0001, -1), right: new THREE.Vector3(1, 0.0001, 0), left: new THREE.Vector3(-1, 0.0001, 0), iso: HOME.dir };
  function menuItems(name) {
    const soon = { disabled: true };
    switch (name) {
      case 'File': return [item('New', null, soon), item('Open…', null, soon), item('Save', null, soon), { sep: true }, item('Download model (.glb)', () => { const a = document.createElement('a'); a.href = asset('arqo-demo-house-01.glb'); a.download = 'arqo-demo-house-01.glb'; a.click(); })];
      case 'Edit': return [item('Undo', undo, { key: 'Ctrl+Z', disabled: !state.undo.length }), item('Redo', redo, { key: 'Ctrl+Y', disabled: !state.redo.length }), { sep: true }, item('Select None', () => select(null), { key: 'Ctrl+T' })];
      case 'View': return [
        item('Axes', () => { state.axes = !state.axes; axes.visible = state.axes; }, { checked: state.axes }),
        item('Shadows', () => { state.shadows = !state.shadows; sun.castShadow = state.shadows; shadowPlane.visible = state.shadows; }, { checked: state.shadows }),
        item('X-ray', toggleXray, { checked: state.xray })];
      case 'Camera': return [
        item('Parallel Projection', () => setProjection(false), { checked: !state.perspective }), item('Perspective', () => setProjection(true), { checked: state.perspective }), { sep: true },
        ...['top', 'front', 'right', 'back', 'left', 'iso'].map(v => item(v === 'iso' ? 'Iso' : v[0].toUpperCase() + v.slice(1), () => view(dirs[v]))), { sep: true },
        item('Orbit', () => setNative('orbit'), { key: 'O' }), item('Pan', () => setNative('pan'), { key: 'H' }), item('Zoom', () => setNative('zoom'), { key: 'Z' }), item('Zoom Extents', zoomExtents, { key: 'Shift+Z' })];
      case 'Draw': return ['Line', 'Arc', 'Rectangle', 'Circle', 'Polygon', 'Freehand'].map(n => item(n, null, soon));
      case 'Tools': return [item('Select', () => setNative('select'), { key: 'Space' }), ...['Eraser', 'Tape Measure', 'Paint Bucket', 'Move', 'Rotate', 'Scale', 'Push/Pull', 'Follow Me', 'Offset'].map(n => item(n, null, soon))];
      case 'Window': return [item('Default Tray', () => { state.tray = !state.tray; windowBox?.classList.toggle('no-tray', !state.tray); }, { checked: state.tray })];
      case 'Extensions': return extensionItems();
      case 'Help': return [item('ARQO Help', () => document.getElementById('plugin-details')?.click()), item('PluginsForAEC', () => { location.href = LANG === 'tr' ? '../' : './'; })];
      default: return [];
    }
  }
  function extensionItems() {
    const tools = state.catalog?.tools || [];
    const out = [{ head: 'ARQO' }];
    const cats = [...new Set(tools.filter(t => t.id !== 'A01').map(t => t.category))];
    for (const cat of cats) {
      out.push({ head: cat });
      for (const t of tools.filter(x => x.category === cat && x.id !== 'A01')) out.push(item(t.name, () => document.querySelector(`#quick-tools [data-plugin-tool="${t.id}"]`)?.click(), { icon: state.catalog.icon(t.id, 16), planned: t.manifest.implementationStatus === 'planned' }));
    }
    const push = tools.find(t => t.id === 'A01');
    if (push) { out.push({ head: 'ARQO Special' }, item(push.name, () => document.querySelector(`#quick-tools [data-plugin-tool="A01"]`)?.click(), { icon: state.catalog.icon('A01', 16) })); }
    out.push({ sep: true }, item('Settings…', openDialog), item('Toolbar layout', null, { disabled: true }));
    return out;
  }
  function showMenu(button) {
    const name = button.dataset.suMenu;
    menubar.querySelectorAll('[data-su-menu]').forEach(b => b.classList.toggle('open', b === button));
    const items = menuItems(name);
    pop.innerHTML = items.map((it, i) => it.sep ? '<hr>' : it.head ? `<div class="su-menu-head">${it.head}</div>`
      : `<button type="button" role="menuitem" data-i="${i}" ${it.disabled ? 'disabled' : ''} class="${it.planned ? 'is-planned' : ''}"><span class="su-check">${it.checked ? '✓' : ''}</span>${it.icon || ''}<span>${it.label}</span>${it.key ? `<span class="su-key">${it.key}</span>` : ''}</button>`).join('');
    pop.style.left = `${button.offsetLeft}px`; pop.style.top = `${button.offsetTop + button.offsetHeight + 2}px`;
    pop.hidden = false; openMenu = { name, items };
  }
  function closeMenu() { pop.hidden = true; openMenu = null; menubar?.querySelectorAll('[data-su-menu]').forEach(b => b.classList.remove('open')); }
  function renderMenus() {
    if (!menubar) return;
    menubar.addEventListener('click', e => {
      const b = e.target.closest('[data-su-menu]');
      if (b) { if (openMenu?.name === b.dataset.suMenu) closeMenu(); else showMenu(b); return; }
      const it = e.target.closest('[data-i]');
      if (it && openMenu) { const entry = openMenu.items[Number(it.dataset.i)]; closeMenu(); entry.action?.(); }
    });
    menubar.addEventListener('mouseover', e => { const b = e.target.closest('[data-su-menu]'); if (b && openMenu && openMenu.name !== b.dataset.suMenu) showMenu(b); });
    document.addEventListener('pointerdown', e => { if (openMenu && !menubar.contains(e.target)) closeMenu(); });
  }
  function toggleXray() {
    state.xray = !state.xray;
    for (const m of meshes) {
      if (state.xray) { xrayStore.set(m, { t: m.material.transparent, o: m.material.opacity, d: m.material.depthWrite }); Object.assign(m.material, { transparent: true, opacity: 0.35, depthWrite: false }); }
      else { const s = xrayStore.get(m); if (s) Object.assign(m.material, { transparent: s.t, opacity: s.o, depthWrite: s.d }); }
      m.material.needsUpdate = true;
    }
  }

  function openDialog() { const d = document.getElementById('su-dialog'); if (!d) return; renderSettingsAll(); d.hidden = false; }
  function wireDialog() {
    const d = document.getElementById('su-dialog'); if (!d) return;
    const close = () => { d.hidden = true; };
    document.getElementById('su-dialog-ok')?.addEventListener('click', close);
    document.getElementById('su-dialog-close')?.addEventListener('click', close);
  }
  function renderSettingsAll() {
    if (!settingsBox || settingsBox.dataset.all) return;
    const seen = new Set(); const rows = [];
    for (const t of state.catalog?.tools || []) for (const st of t.manifest.settings || []) { if (seen.has(st.id) || !TEXT.settings[st.id] || st.id === 'lastDistanceMm') continue; seen.add(st.id); rows.push(`<label>${TEXT.settings[st.id]}<input type="number" min="0" step="any" data-setting="${st.id}" value="${st.default}"></label>`); }
    settingsBox.innerHTML = rows.join(''); settingsBox.dataset.all = '1';
  }

  function renderFloating() {
    const viewport = host.closest('.su-viewport'); if (!viewport) return;
    const nav = document.createElement('div'); nav.className = 'su-nav';
    nav.innerHTML = NATIVE.filter(t => t.web).map(t => `<button type="button" data-native="${t.id}" title="${t.name} (${t.key})" aria-label="${t.name}">${t.icon}</button>`).join('');
    nav.addEventListener('click', e => { const b = e.target.closest('[data-native]'); if (b) setNative(b.dataset.native); });
    const side = document.createElement('div'); side.className = 'su-float';
    const scenes = [['Iso', () => view(HOME.dir)], ['Top', () => view(dirs.top)], ['Front', () => view(dirs.front)], ['Right', () => view(dirs.right)],
      ...[...fixtures.values()].map(f => [f.record.showcaseLabel.replace(/^S\d+ /, ''), () => { const box = new THREE.Box3().setFromObject(f.node); showFixture(f); flyTo(box.getCenter(new THREE.Vector3()), 3, SCENE_DIR); }])];
    side.innerHTML = '<div class="su-float-row"><span class="su-float-label">Scenes</span><button type="button" data-float="scenes" aria-label="Scenes">' + G('<rect x="3" y="7" width="18" height="13" rx="1" fill="#fff"/><path d="M3 7l3-4h14l-3 4M10 11v6l5-3z"/>') + '</button></div>'
      + '<div class="su-float-row"><span class="su-float-label">Shadows</span><button type="button" data-float="shadows" aria-label="Shadows" class="active">' + G('<path d="M4 14l8-4 8 4-8 4z" fill="#fff"/><path d="M12 18l8-4v3l-8 4z" fill="#7a7f86" stroke="none"/>') + '</button></div>'
      + '<div class="su-scenes" hidden>' + scenes.map((s, i) => '<button type="button" data-scene="' + i + '">' + s[0] + '</button>').join('') + '</div>';
    side.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.float === 'scenes') side.querySelector('.su-scenes').hidden = !side.querySelector('.su-scenes').hidden;
      else if (b.dataset.float === 'shadows') { state.shadows = !state.shadows; sun.castShadow = state.shadows; shadowPlane.visible = state.shadows; b.classList.toggle('active', state.shadows); }
      else if (b.dataset.scene) { scenes[Number(b.dataset.scene)][1](); side.querySelector('.su-scenes').hidden = true; }
    });
    viewport.append(nav, side);
    setNative(state.native);
  }

  // --- public API (called by app.js) --------------------------------------------------------
  function update(options) {
    state.pending = options;
    if (!state.ready) return;
    const { tool, scope, guides } = options;
    state.scope = scope || 'selection';
    axes.visible = guides !== false && state.axes;
    if (!tool) return;
    if (state.first) { // page load keeps the Select tool unless the address names a tool
      state.first = false;
      if (!new URLSearchParams(location.search).has('tool')) { state.tool = tool; renderSettings(tool); return; }
    }
    if (state.tool && state.tool.id === tool.id && state.toolDef) return;
    activate(tool, true);
    // Deep link: ?tool=S10&apply=1 opens the tool and shows its result.
    if (!state.applied && state.toolDef?.runner.interactive && new URLSearchParams(location.search).get('apply') === '1') { state.applied = true; setTimeout(apply, 1500); }
  }
  window.arqoStudio = { update, apply, undo, redo };
  if (state.pending) update(state.pending);

  renderer.setAnimationLoop(() => {
    if (goal.flying) {
      controls.target.lerp(goal.target, 0.09);
      const wanted = controls.target.clone().addScaledVector(goal.dir, camera === persp ? DIST / goal.zoom : DIST);
      camera.position.lerp(wanted, 0.09);
      if (camera === ortho) { ortho.zoom += (goal.zoom - ortho.zoom) * 0.09; ortho.updateProjectionMatrix(); }
      if (controls.target.distanceTo(goal.target) < 0.005 && camera.position.distanceTo(wanted) < 0.01) goal.flying = false;
    }
    controls.update();
    if (selectionBox) selectionBox.update();
    renderer.render(scene, camera);
  });
}

// app.js may call before the model is ready; keep the last request.
window.arqoStudio = { update(options) { state.pending = options; }, apply() {}, undo() {}, redo() {} };
build();
