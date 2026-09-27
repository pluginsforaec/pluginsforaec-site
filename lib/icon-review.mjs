import { catalog, icon, reviewTools, tools } from './catalog.mjs';
import { $, escapeHTML } from './dom.mjs';

const explanations = {
  'S01': 'A solid face and boundary nodes. Unneeded inner marks removed.',
  'S10': 'An open outline and two ends instead of a magnifier. The gap is shown directly.',
  'S11': 'One line and joining nodes instead of chain links.',
  'S14': 'A shared axis; source shape and reflection in separate visual roles.',
  'S21': 'Two separating parts and one section line instead of stacked cubes.',
  'S33': 'Three clear steps. Inner lines that vanish at small sizes removed.'
};

export function renderIconReview(options = {}) {
  const sizes = catalog.tokens.icon.reviewSizes;
  const variant = options.legacy ? 'legacy' : 'current';
  $('#icon-grid').innerHTML = tools.map(tool => `<button class="icon-tile" data-detail="${tool.id}" aria-label="View the ${escapeHTML(tool.name)} icon">${icon(tool.id, 32, options)}<strong>${escapeHTML(tool.name)}</strong><small>${tool.requirementId} / v${options.legacy ? 1 : tool.manifest.icon.revision}</small></button>`).join('');
  $('#icon-comparisons').innerHTML = reviewTools.map(tool => `<article class="icon-comparison"><div class="comparison-heading"><h3>${escapeHTML(tool.name)}</h3><span>${tool.requirementId}</span></div><div class="comparison-scale"><span></span>${sizes.map(size => `<span>${size} px</span>`).join('')}</div><div class="comparison-row legacy-row"><span>v1</span>${sizes.map(size => `<div>${icon(tool.id, size, { legacy: true })}</div>`).join('')}</div><div class="comparison-row revised-row"><span>v2</span>${sizes.map(size => `<div>${icon(tool.id, size)}</div>`).join('')}</div><p>${escapeHTML(explanations[tool.id])}</p></article>`).join('');
  $('#toolbar-size-review').innerHTML = sizes.map(size => `<div class="size-review-row"><span>${size} px</span><div class="real-size-toolbar" aria-label="${size} pixel toolbar">${reviewTools.map(tool => `<button data-detail="${tool.id}" title="${escapeHTML(tool.name)}" aria-label="${escapeHTML(tool.name)}">${icon(tool.id, size, options)}</button>`).join('')}</div></div>`).join('');
  for (const button of document.querySelectorAll('[data-icon-version]')) {
    const active = button.dataset.iconVersion === variant;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  }
}
