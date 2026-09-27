import data from '../../generated/catalog.mjs';

export const catalog = data;
export const tools = data.tools.map(manifest => ({
  id: manifest.requirementId,
  requirementId: manifest.requirementId,
  productId: manifest.id,
  moduleId: manifest.moduleId,
  entitlement: manifest.license.entitlement,
  ...manifest.locales.tr,
  category: data.product.categories.find(item => item.id === manifest.category).label.tr,
  manifest,
  icons: manifest.icons
}));

const byId = new Map(tools.map(tool => [tool.id, tool]));
const byProduct = new Map(tools.map(tool => [tool.productId, tool]));
export const toolById = id => byId.get(id) || byId.get(`S${id}`);
export const bundleTools = data.bundle.toolIds.map(id => byProduct.get(id));
export const quickTools = data.product.quickTools.map(id => byProduct.get(id));
export const reviewTools = data.product.iconReviewTools.map(id => byProduct.get(id));

export function icon(id, size = 32, options = {}) {
  const tool = toolById(id);
  if (!tool) throw new Error(`Unknown tool: ${id}`);
  const revision = options.legacy ? 1 : tool.manifest.icon.revision;
  const item = tool.icons.find(candidate => candidate.revision === revision);
  if (!item) throw new Error(`Missing icon revision ${revision} for ${tool.productId}`);
  const pixels = [16, 24, 32, 48, 64].includes(Number(size)) ? Number(size) : 32;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${pixels}" height="${pixels}" fill="none" stroke="currentColor" stroke-width="${item.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" data-icon-revision="${revision}" aria-hidden="true">${item.body}</svg>`;
}

export const accents = Object.fromEntries(Object.entries(data.tokens.accents).map(([key, value]) => [
  key, [value.color, value.light.soft, value.light.ink, value.dark.soft, value.dark.ink]
]));
