// Shared look for the ARQO Pavilion viewers (hand-written source, not generated).
// Turns the flat model materials (MAT_timber, MAT_stone, ...) into textured, lit
// materials: procedural textures, sky and reflections, golden-hour sun, glowing lights.
// Usage: const look = createLook(THREE, renderer); look.apply(scene, model); look.update(t)

function canvas(size, draw) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  draw(c.getContext('2d'), size); return c;
}
function rng(seed) { let s = seed >>> 0; return () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; }; }
function speckle(g, size, r, count, colors, alpha, len = 1) {
  for (let i = 0; i < count; i++) {
    g.globalAlpha = alpha * (0.4 + r() * 0.6); g.fillStyle = colors[Math.floor(r() * colors.length)];
    g.fillRect(r() * size, r() * size, 1 + r() * 2 * len, 1 + r() * 2);
  }
  g.globalAlpha = 1;
}
const PAINT = {
  timber(g, s) {                                   // planks 0.3 m wide, tile = 2.4 m
    const r = rng(3), w = s / 8;
    for (let i = 0; i < 8; i++) {
      const tone = 0.88 + r() * 0.22;
      g.fillStyle = `rgb(${Math.round(203 * tone)},${Math.round(140 * tone)},${Math.round(72 * tone)})`;
      g.fillRect(i * w, 0, w, s);
      for (let k = 0; k < 26; k++) { g.globalAlpha = 0.05 + r() * 0.09; g.fillStyle = r() < 0.5 ? '#6b3f17' : '#f0c48e'; g.fillRect(i * w + r() * w, 0, 1 + r() * 1.5, s); }
      g.globalAlpha = 0.55; g.fillStyle = '#5a3414'; g.fillRect(i * w, 0, 2, s); g.globalAlpha = 1;
    }
  },
  stone(g, s) {                                    // travertine panels 1.2 x 0.6 m, tile = 2.4 m
    const r = rng(5);
    g.fillStyle = '#ece9e0'; g.fillRect(0, 0, s, s);
    for (let i = 0; i < 90; i++) { g.globalAlpha = 0.05 + r() * 0.08; g.fillStyle = r() < 0.5 ? '#c9c2b0' : '#ffffff'; g.fillRect(0, r() * s, s, 1 + r() * 3); }
    speckle(g, s, r, 1400, ['#b9b19c', '#d8d2c2'], 0.25, 3);
    g.globalAlpha = 0.5; g.fillStyle = '#a9a492';
    for (let y = 0; y < s; y += s / 4) g.fillRect(0, y, s, 2);
    for (let row = 0; row < 4; row++) for (let x = (row % 2) * s / 4; x < s; x += s / 2) g.fillRect(x, row * s / 4, 2, s / 4);
    g.globalAlpha = 1;
  },
  stoneDark(g, s) {
    const r = rng(7);
    g.fillStyle = '#b9b5a8'; g.fillRect(0, 0, s, s);
    speckle(g, s, r, 5000, ['#9c988b', '#d2cec1', '#aaa699'], 0.35, 2);
    g.globalAlpha = 0.45; g.fillStyle = '#8d897c';
    for (let y = 0; y < s; y += s / 2) g.fillRect(0, y, s, 2);
    for (let x = 0; x < s; x += s / 2) g.fillRect(x, 0, 2, s);
    g.globalAlpha = 1;
  },
  paving(g, s) {                                   // tiles 1.2 m, tile = 2.4 m
    const r = rng(9);
    for (let i = 0; i < 2; i++) for (let k = 0; k < 2; k++) { const t = 0.94 + r() * 0.08; g.fillStyle = `rgb(${Math.round(222 * t)},${Math.round(219 * t)},${Math.round(208 * t)})`; g.fillRect(i * s / 2, k * s / 2, s / 2, s / 2); }
    speckle(g, s, r, 3000, ['#c4c0b2', '#f2f0e8'], 0.3);
    g.globalAlpha = 0.6; g.fillStyle = '#a5a193';
    for (let v = 0; v < s; v += s / 2) { g.fillRect(0, v, s, 2); g.fillRect(v, 0, 2, s); }
    g.globalAlpha = 1;
  },
  ground(g, s) {
    const r = rng(11);
    g.fillStyle = '#86a860'; g.fillRect(0, 0, s, s);
    for (let i = 0; i < 60; i++) { g.globalAlpha = 0.12; g.fillStyle = r() < 0.5 ? '#6f9450' : '#9cba72'; g.beginPath(); g.arc(r() * s, r() * s, 20 + r() * 60, 0, 7); g.fill(); }
    speckle(g, s, r, 9000, ['#5f8443', '#a9c77d', '#789c54'], 0.5);
  },
  leaf(g, s) { const r = rng(13); g.fillStyle = '#ffffff'; g.fillRect(0, 0, s, s); speckle(g, s, r, 7000, ['#5d7d3c', '#dff0b8', '#89a860'], 0.55, 2); },
  fabric(g, s) { const r = rng(15); g.fillStyle = '#f3f1ea'; g.fillRect(0, 0, s, s); speckle(g, s, r, 5000, ['#dcd8cc', '#ffffff'], 0.4); }
};

// Tileable wave normal map for water.
function waterNormals(size = 256) {
  return canvas(size, (g, s) => {
    const image = g.createImageData(s, s), k = Math.PI * 2 / s;
    const waves = [[3, 1, 1], [1, 4, 0.7], [-5, 2, 0.5], [7, -6, 0.3], [11, 9, 0.18], [-13, 5, 0.15]];
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
      let dx = 0, dy = 0;
      for (const [a, b, amp] of waves) { const c = Math.cos((a * x + b * y) * k + a) * amp; dx += c * a; dy += c * b; }
      const nx = -dx * 0.05, ny = -dy * 0.05, l = Math.hypot(nx, ny, 1), i = (y * s + x) * 4;
      image.data[i] = (nx / l * 0.5 + 0.5) * 255; image.data[i + 1] = (ny / l * 0.5 + 0.5) * 255; image.data[i + 2] = (1 / l * 0.5 + 0.5) * 255; image.data[i + 3] = 255;
    }
    g.putImageData(image, 0, 0);
  });
}

// Evening sky as an equirectangular image: blue above, warm at the horizon, soft clouds.
function skyCanvas() {
  const w = 2048, h = 1024, c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'), r = rng(21);
  const grad = g.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, '#2f66ad'); grad.addColorStop(0.28, '#6fa3d8'); grad.addColorStop(0.43, '#c3dcf0'); grad.addColorStop(0.495, '#ffe3bd');
  grad.addColorStop(0.505, '#d9c6a6'); grad.addColorStop(0.6, '#b7b49a'); grad.addColorStop(1, '#8f9478');
  g.fillStyle = grad; g.fillRect(0, 0, w, h);
  const sun = g.createRadialGradient(w * 0.31, h * 0.44, 0, w * 0.31, h * 0.44, 380);      // glow around the sun
  sun.addColorStop(0, 'rgba(255,236,190,0.95)'); sun.addColorStop(0.25, 'rgba(255,214,150,0.5)'); sun.addColorStop(1, 'rgba(255,200,140,0)');
  g.fillStyle = sun; g.fillRect(0, 0, w, h * 0.5);
  for (let i = 0; i < 46; i++) {
    const x = r() * w, y = h * (0.1 + r() * 0.33), rx = 90 + r() * 240, ry = 14 + r() * 32;
    for (let k = 0; k < 9; k++) {
      const cx = x + (r() - 0.5) * rx * 1.6, cy = y + (r() - 0.5) * ry, cr = ry * (0.9 + r() * 1.6);
      const cloud = g.createRadialGradient(cx, cy, 0, cx, cy, cr * 2.4);
      cloud.addColorStop(0, y > h * 0.3 ? 'rgba(255,232,205,0.32)' : 'rgba(255,255,255,0.3)'); cloud.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = cloud; g.beginPath(); g.ellipse(cx, cy, cr * 2.6, cr, 0, 0, 7); g.fill();
      if (cx < 300) { g.beginPath(); g.ellipse(cx + w, cy, cr * 2.6, cr, 0, 0, 7); g.fill(); }
    }
  }
  return c;
}

// Box-projected texture coordinates from world positions (the model has no UVs).
function boxUV(THREE, geometry, metres) {
  const g = geometry.index ? geometry.toNonIndexed() : geometry;
  const p = g.attributes.position, uv = new Float32Array(p.count * 2);
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), n = new THREE.Vector3();
  for (let i = 0; i + 2 < p.count; i += 3) {
    a.fromBufferAttribute(p, i); b.fromBufferAttribute(p, i + 1); c.fromBufferAttribute(p, i + 2);
    n.subVectors(b, a).cross(c.clone().sub(a));
    const ax = Math.abs(n.x), ay = Math.abs(n.y), az = Math.abs(n.z);
    for (const [k, v] of [[i, a], [i + 1, b], [i + 2, c]]) {
      const [u, w] = ay >= ax && ay >= az ? [v.x, v.z] : ax >= az ? [v.z, v.y] : [v.x, v.y];
      uv[k * 2] = u / metres; uv[k * 2 + 1] = w / metres;
    }
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return g;
}

export const SUN = [-34, 21, 40];

export function createLook(THREE, renderer, { background = true, shadows = 4096 } = {}) {
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const tex = (name, size = 512) => { const t = new THREE.CanvasTexture(canvas(size, PAINT[name])); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = aniso; return t; };
  const normals = new THREE.CanvasTexture(waterNormals()); normals.wrapS = normals.wrapT = THREE.RepeatWrapping;
  const sky = new THREE.CanvasTexture(skyCanvas()); sky.colorSpace = THREE.SRGBColorSpace; sky.mapping = THREE.EquirectangularReflectionMapping;
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromEquirectangular(sky).texture; pmrem.dispose();

  const S = THREE.MeshStandardMaterial, P = THREE.MeshPhysicalMaterial, D = THREE.DoubleSide;
  // name -> [material, texture size in metres]
  const library = {
    timber: [new S({ map: tex('timber'), roughness: 0.62, side: D }), 2.4],
    stone: [new S({ map: tex('stone'), roughness: 0.82, side: D }), 2.4],
    stoneDark: [new S({ map: tex('stoneDark'), roughness: 0.9, side: D }), 2.4],
    paving: [new S({ map: tex('paving'), roughness: 0.78, side: D }), 2.4],
    ground: [new S({ map: tex('ground'), roughness: 1, side: D }), 6],
    fabric: [new S({ map: tex('fabric'), roughness: 0.95, side: D }), 1],
    interior: [new S({ color: '#c9a877', roughness: 0.7, side: D })],
    door: [new S({ map: tex('timber'), color: '#c07a3c', roughness: 0.5, side: D }), 1.6],
    steel: [new S({ color: '#2c3136', roughness: 0.42, metalness: 0.75, side: D })],
    trunk: [new S({ color: '#6a5642', roughness: 1 })],
    leaf: [new S({ map: tex('leaf', 256), color: '#7fae55', roughness: 0.9 }), 0],
    leafDark: [new S({ map: tex('leaf', 256), color: '#557f3c', roughness: 0.9 }), 0],
    leafLight: [new S({ map: tex('leaf', 256), color: '#a5c96b', roughness: 0.9 }), 0],
    figure: [new S({ color: '#ffffff', roughness: 0.6, side: D, emissive: '#ffffff', emissiveIntensity: 0.12 })],
    glass: [new P({ color: '#d5ebf3', roughness: 0.04, metalness: 0, transparent: true, opacity: 0.3, envMapIntensity: 2.2, side: D, depthWrite: false })],
    water: [new P({ color: '#4d93b8', roughness: 0.06, metalness: 0, transparent: true, opacity: 0.9, envMapIntensity: 1.8, normalMap: normals, normalScale: new THREE.Vector2(0.35, 0.35), side: D }), 5],
    light: [new S({ color: '#fff1cf', emissive: '#ffc878', emissiveIntensity: 2.6, side: D })],
    amber: [new S({ color: '#f0b04a', emissive: '#ff9d2e', emissiveIntensity: 1.4, roughness: 0.4, side: D })]
  };

  function apply(scene, model) {
    scene.environment = environment;
    if (background) scene.background = sky;
    scene.add(new THREE.HemisphereLight('#cfe2ff', '#e9d8bd', 0.75));
    const sun = new THREE.DirectionalLight('#ffd7a6', 3.1);
    sun.position.fromArray(SUN); sun.castShadow = true; sun.shadow.mapSize.set(shadows, shadows);
    Object.assign(sun.shadow.camera, { left: -50, right: 50, top: 40, bottom: -40, near: 1, far: 160 });
    sun.shadow.bias = -0.0002; sun.shadow.normalBias = 0.04; sun.shadow.radius = 4;
    scene.add(sun);
    const warm = new THREE.PointLight('#ffb45e', 60, 22, 1.8); warm.position.set(-3, 3.2, 6.2); scene.add(warm);   // glow at the entrance
    const meshes = [];
    model.traverse(node => {
      if (!node.isMesh) return;
      const name = (node.material.name || '').replace(/^MAT_/, '');
      const entry = library[name]; if (!entry) return;
      const [material, metres] = entry;
      if (metres) node.geometry = boxUV(THREE, node.geometry, metres);
      else if (metres === 0 && !node.geometry.attributes.uv) {        // foliage: cheap spherical-ish coordinates
        const p = node.geometry.attributes.position, uv = new Float32Array(p.count * 2);
        for (let i = 0; i < p.count; i++) { uv[i * 2] = (p.getX(i) + p.getZ(i)) * 0.9; uv[i * 2 + 1] = p.getY(i) * 0.9; }
        node.geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
      }
      node.material = material.clone(); node.material.name = `MAT_${name}`;
      node.material.userData.base = { emissive: node.material.emissive ? node.material.emissive.getHex() : 0, intensity: node.material.emissiveIntensity ?? 1 };
      const clear = name === 'glass' || name === 'water';
      node.castShadow = !clear && name !== 'light'; node.receiveShadow = name !== 'glass' && name !== 'light';
      if (name === 'glass') node.renderOrder = 2;
      meshes.push(node);
    });
    return { sun, meshes };
  }
  const glow = (mesh, hex, intensity = 0.4) => { const m = mesh.material; if (!m.emissive) return; m.emissive.setHex(hex); m.emissiveIntensity = intensity; };
  const unglow = mesh => { const m = mesh.material, b = m.userData.base; if (!m.emissive || !b) return; m.emissive.setHex(b.emissive); m.emissiveIntensity = b.intensity; };
  const update = seconds => { normals.offset.set(seconds * 0.012, seconds * 0.007); };
  return { apply, update, glow, unglow, normals, sky, environment };
}
