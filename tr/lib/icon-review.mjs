import { catalog, icon, reviewTools, tools } from './catalog.mjs';
import { $, escapeHTML } from './dom.mjs';

const explanations = {
  'S01': 'Dolu yüzey ve sınır düğümleri. İçteki gereksiz işaretler kaldırıldı.',
  'S10': 'Büyüteç yerine açık kontur ve iki uç. Boşluk doğrudan gösteriliyor.',
  'S11': 'Zincir halkaları yerine tek hat ve birleşen düğümler.',
  'S14': 'Ortak eksen; kaynak şekil ve yansıma ayrı görsel rollerde.',
  'S21': 'Üst üste küpler yerine ayrılan iki parça ve tek kesit çizgisi.',
  'S33': 'Üç belirgin basamak. Küçük boyutta kaybolan iç çizgiler kaldırıldı.'
};

export function renderIconReview(options = {}) {
  const sizes = catalog.tokens.icon.reviewSizes;
  const variant = options.legacy ? 'legacy' : 'current';
  $('#icon-grid').innerHTML = tools.map(tool => `<button class="icon-tile" data-detail="${tool.id}" aria-label="${escapeHTML(tool.name)} ikonunu incele">${icon(tool.id, 32, options)}<strong>${escapeHTML(tool.name)}</strong><small>${tool.requirementId} / v${options.legacy ? 1 : tool.manifest.icon.revision}</small></button>`).join('');
  $('#icon-comparisons').innerHTML = reviewTools.map(tool => `<article class="icon-comparison"><div class="comparison-heading"><h3>${escapeHTML(tool.name)}</h3><span>${tool.requirementId}</span></div><div class="comparison-scale"><span></span>${sizes.map(size => `<span>${size} px</span>`).join('')}</div><div class="comparison-row legacy-row"><span>v1</span>${sizes.map(size => `<div>${icon(tool.id, size, { legacy: true })}</div>`).join('')}</div><div class="comparison-row revised-row"><span>v2</span>${sizes.map(size => `<div>${icon(tool.id, size)}</div>`).join('')}</div><p>${escapeHTML(explanations[tool.id])}</p></article>`).join('');
  $('#toolbar-size-review').innerHTML = sizes.map(size => `<div class="size-review-row"><span>${size} px</span><div class="real-size-toolbar" aria-label="${size} piksel araç çubuğu">${reviewTools.map(tool => `<button data-detail="${tool.id}" title="${escapeHTML(tool.name)}" aria-label="${escapeHTML(tool.name)}">${icon(tool.id, size, options)}</button>`).join('')}</div></div>`).join('');
  for (const button of document.querySelectorAll('[data-icon-version]')) {
    const active = button.dataset.iconVersion === variant;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  }
}
