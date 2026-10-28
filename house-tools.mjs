// Demo house parts and the ARQO tool that makes each (hand-written source, not generated). Keys are the arqoId the
// SketchUp demo house carries (demo-house/source/house.mjs); the hero and the plugin view both read this map.
export const HOUSE_TOOLS = {
  'site.platform':   { tool: 'arqo.tool.s08', toolLabel: 'Smart Offset', label: { en: 'Platform around the house', tr: 'Evin çevresindeki platform' } },
  'floor.main':      { tool: 'arqo.tool.a01', toolLabel: 'ARQOPush', label: { en: 'Main floor slab', tr: 'Ana döşeme' } },
  'floor.entry':     { tool: 'arqo.tool.a01', toolLabel: 'ARQOPush', label: { en: 'Entrance platform', tr: 'Giriş platformu' } },
  'wall.back.main':  { tool: 'arqo.tool.a01', toolLabel: 'ARQOPush', label: { en: 'Back wall', tr: 'Arka duvar' } },
  'wall.left.main':  { tool: 'arqo.tool.s14', toolLabel: 'Mirror+', label: { en: 'Side wall', tr: 'Yan duvar' } },
  'wall.right.main': { tool: 'arqo.tool.s14', toolLabel: 'Mirror+', label: { en: 'Side wall', tr: 'Yan duvar' } },
  'wall.entry':      { tool: 'arqo.tool.s21', toolLabel: 'Smart Slice', label: { en: 'Entrance wall and its opening', tr: 'Giriş duvarı ve açıklığı' } },
  'wall.right.back': { tool: 'arqo.tool.s15', toolLabel: 'Align+', label: { en: 'Rear wing wall', tr: 'Arka kanat duvarı' } },
  'wall.front.low':  { tool: 'arqo.tool.s02', toolLabel: 'Line to Face', label: { en: 'Low front wall', tr: 'Alçak ön duvar' } },
  'roof.upper':      { tool: 'arqo.tool.s08', toolLabel: 'Smart Offset', label: { en: 'Roof and its overhang', tr: 'Çatı ve saçak' } },
  'roof.canopy':     { tool: 'arqo.tool.a01', toolLabel: 'ARQOPush', label: { en: 'Entrance canopy', tr: 'Giriş saçağı' } },
  'roof.right.low':  { tool: 'arqo.tool.s15', toolLabel: 'Align+', label: { en: 'Low roof', tr: 'Alçak çatı' } },
  'glass':           { tool: 'arqo.tool.s07', toolLabel: 'Divide+', label: { en: 'Glazing, divided into equal panels', tr: 'Eşit panellere bölünmüş cam' } },
  'stair.main':      { tool: 'arqo.tool.s33', toolLabel: 'Smart Stair', label: { en: 'Stair', tr: 'Merdiven' } },
  'deck.main':       { tool: 'arqo.tool.s01', toolLabel: 'Make Face+', label: { en: 'Deck', tr: 'Teras' } },
  'landscape':       { tool: 'arqo.tool.s27', toolLabel: 'To Components+', label: { en: 'Tree, one component', tr: 'Ağaç, tek bileşen' } }
};

// The entry for a part: its own arqoId, or its family (glass.panel.02 → glass, landscape.tree.01 → landscape).
export function houseTool(arqoId) {
  if (!arqoId) return null;
  return HOUSE_TOOLS[arqoId] || HOUSE_TOOLS[arqoId.split('.')[0]] || null;
}
