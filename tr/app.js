import { catalog, tools, toolById, icon, accents, bundleTools, quickTools } from './lib/catalog.mjs';
import { $, $$, escapeHTML, normalize } from './lib/dom.mjs';
import { scene } from './lib/scene.mjs';
import { info } from './lib/roadmap.mjs';
import { renderIconReview } from './lib/icon-review.mjs';

const state={view:'website',sitePage:'home',category:'Tümü',search:'',tool:'S01',highlight:false,scope:'selection',selected:new Set(),theme:'light',accent:'clay'};
const categories=['Tümü',...new Set(tools.map(t=>t.category))];
let toastTimer;

function showView(view){
  if(!['website','plugin','icons'].includes(view))return;
  state.view=view;
  $$('.view').forEach(v=>{const active=v.id===`${view}-view`;v.hidden=!active;v.classList.toggle('active',active)});
  $$('.view-switch button').forEach(b=>{const active=b.dataset.view===view;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
  window.scrollTo({top:0,behavior:'instant'});
}
function showSitePage(page){state.sitePage=page;$('#marketplace-home').hidden=page!=='home';$('#arqo-product').hidden=page!=='arqo';showView('website')}
function notify(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.add('visible');toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3000)}
function applyAppearance(){
  document.body.dataset.theme=state.theme;
  const [accent,soft,ink,darkSoft,darkInk]=accents[state.accent];
  document.body.style.setProperty('--accent',accent);document.body.style.setProperty('--accent-soft',state.theme==='dark'?darkSoft:soft);document.body.style.setProperty('--accent-ink',state.theme==='dark'?darkInk:ink);
  $('#theme-toggle').setAttribute('aria-pressed',String(state.theme==='dark'));$('#theme-toggle').setAttribute('aria-label',state.theme==='dark'?'Açık temayı aç':'Koyu temayı aç');
  $$('[data-accent]').forEach(b=>{b.classList.toggle('active',b.dataset.accent===state.accent);b.setAttribute('aria-pressed',String(b.dataset.accent===state.accent))});
}
function renderTools(){
  const query=normalize(state.search);
  const filtered=tools.filter(t=>(state.category==='Tümü'||state.category===t.category)&&normalize(`${t.name} ${t.summary} ${t.description} ${t.category}`).includes(query));
  $('#result-count').textContent=`${filtered.length} / ${tools.length} araç`;
  $('#tool-grid').innerHTML=filtered.map(t=>`<article class="tool-card" data-tool-card="${t.id}"><div class="tool-card-top"><span class="card-icon">${icon(t.id)}</span><span class="tool-id">${t.requirementId}</span></div><h3>${escapeHTML(t.name)}</h3><p>${escapeHTML(t.summary)}</p><div class="tool-card-bottom"><span>${escapeHTML(t.category)} · Tekil araç</span><button data-detail="${t.id}" aria-label="${escapeHTML(t.name)} detaylarını incele">İncele <span>↗</span></button></div></article>`).join('');
  $('#empty-state').hidden=filtered.length>0;
  $$('.filter').forEach(b=>{const active=b.dataset.category===state.category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
}
function renderPluginList(){const query=normalize($('#plugin-search').value);const filtered=tools.filter(t=>normalize(`${t.name} ${t.category}`).includes(query));$('#plugin-tool-list').innerHTML=filtered.map(t=>`<button class="plugin-tool ${state.tool===t.id?'active':''}" data-plugin-tool="${t.id}" aria-pressed="${state.tool===t.id}">${icon(t.id)}<span>${escapeHTML(t.name)}</span></button>`).join('')||'<p class="plugin-list-empty">Araç bulunamadı.</p>';}
function selectTool(id){
  const t=toolById(id);if(!t)return;id=t.id;state.tool=id;
  $('#property-icon').innerHTML=icon(id);$('#property-category').textContent=t.category.toLocaleUpperCase('tr-TR');$('#property-title').textContent=t.name;$('#property-description').textContent=t.summary;
  $('#viewport-active-icon').innerHTML=icon(id);$('#viewport-active-label').textContent=t.name;
  $$('.quick-tool').forEach(b=>{b.classList.toggle('active',b.dataset.pluginTool===id);b.setAttribute('aria-pressed',String(b.dataset.pluginTool===id))});
  renderPluginList();updateStudio();
}
function updateStudio(){
  const t=toolById(state.tool);window.arqoStudio?.update({tool:t,highlight:state.highlight,guides:$('#show-guides').checked,scope:state.scope});
  $('#toggle-highlight').textContent=state.highlight?'İşlem vurgusunu gizle':'İşlem vurgusunu göster';$('#toggle-highlight').setAttribute('aria-pressed',String(state.highlight));
  $('#studio-status').textContent=`${t.name} · ${state.scope==='selection'?'Seçim':'Model'} · ${state.highlight?'Örnek vurgu açık':'Canlı model'}`;
  const value=$('#demo-tolerance').value;$('#demo-measurement').textContent=value&&$('#demo-tolerance').validity.valid?`Tolerans: ${value} mm`:'Geçerli bir tolerans gir';
}
function openDialog(content){$('#dialog-content').innerHTML=content;if(!$('#tool-dialog').open)$('#tool-dialog').showModal()}
function toolDetail(id){const t=toolById(id);if(!t)return;openDialog(`<div class="dialog-icon">${icon(id)}</div><div class="eyebrow">ARQO / ${escapeHTML(t.category.toLocaleUpperCase('tr-TR'))} / ${t.requirementId}</div><h2 id="dialog-title">${escapeHTML(t.name)}</h2><p>${escapeHTML(t.description)}</p><div class="dialog-sizes">${[16,24,32,48].map(size=>`<div>${icon(id,size)}<small>${size} px</small></div>`).join('')}</div><div class="dialog-actions"><button class="button primary" data-add="${id}">${state.selected.has(id)?'Seçimden çıkar':'Önizleme listeme ekle'} <span>${state.selected.has(id)?'−':'+'}</span></button><button class="button secondary" data-try="${id}">Eklentide göster ↗</button></div><p class="dialog-caption">Tekil araç veya tam paket içinde sunulacak. Fiyat ve uyumluluk ayrıntıları henüz kesinleşmedi.</p>`)}
function listMarkup(items){return `<div class="bundle-list">${items.map(t=>`<button data-detail="${t.id}">${icon(t.id)}<span>${escapeHTML(t.name)}</span><small>${t.requirementId} ↗</small></button>`).join('')}</div>`}
function showBundle(){openDialog(`<div class="eyebrow">ARQO / COMPLETE</div><h2 id="dialog-title">Bütün araçlar, tek pakette.</h2><p>${catalog.product.requiredBaseline.length} temel aracın tamamı ve paket sürümüne dahil ARQO ekleri. Tekil araçlar da ayrı satın alınabilir.</p>${listMarkup(bundleTools)}<p class="dialog-caption">Planlanan ARQO geliştirmeleri:</p><ul class="info-list">${catalog.bundle.plannedAdditions.map(name=>`<li>${escapeHTML(name)}</li>`).join('')}</ul><div class="dialog-actions"><button class="button primary" id="preview-all">${bundleTools.length} aracı önizleme listeme ekle</button></div><p class="dialog-caption">Paket adı, fiyat ve dahil sürümler tasarım aşamasında. Gerçek satın alma veya lisans aktivasyonu yapılmaz.</p>`)}
function showCollection(){const items=tools.filter(t=>state.selected.has(t.id));openDialog(`<div class="eyebrow">SEÇTİĞİN ARAÇLAR</div><h2 id="dialog-title">Seçtiğin ${items.length} araç.</h2><p>${items.length?'Aynı ARQO kurulumunda birlikte kullanılabilecek araç setinin önizlemesi.':'Araç detaylarından istediğin araçları bu listeye ekleyebilirsin.'}</p>${listMarkup(items)}<div class="dialog-actions"><button class="button primary" data-browse>Diğer araçları keşfet ↗</button>${items.length?'<button class="button secondary" id="clear-collection">Seçimi temizle</button>':''}</div><p class="dialog-caption">Bu liste yalnızca açık sayfada saklanır. Sepet, ödeme veya gerçek lisans işlemi değildir.</p>`)}
function showInfo(key){const data=info[key];if(!data)return;openDialog(`<div class="eyebrow">PLUGINSFORAEC / ROADMAP ÖNİZLEMESİ</div><h2 id="dialog-title">${escapeHTML(data[0])}</h2><p>${escapeHTML(data[1])}</p><ul class="info-list">${data[2].map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul><p class="dialog-caption">Planlanan kapsam; ARQO'nun ticari doğrulamasından sonra sıraya girer.</p>`)}

$('#hero-scene').innerHTML=scene('hero');$('#hero-icon').innerHTML=icon('01');$('#single-package-icon').innerHTML=icon('14');
$('.floating-tool strong').textContent=toolById('S01').name;
$('.sidebar-heading span').textContent=tools.length;
$('#category-filters').innerHTML=categories.map(c=>`<button class="filter ${c==='Tümü'?'active':''}" data-category="${escapeHTML(c)}" aria-pressed="${c==='Tümü'}">${escapeHTML(c)}</button>`).join('');
$('#quick-tools').innerHTML=quickTools.map(({id})=>`<button class="quick-tool" data-plugin-tool="${id}" aria-label="${escapeHTML(toolById(id).name)}" title="${escapeHTML(toolById(id).name)}">${icon(id)}</button>`).join('');
renderIconReview();
$('#tool-search').addEventListener('input',e=>{state.search=e.target.value;renderTools()});$('#plugin-search').addEventListener('input',renderPluginList);
$('#theme-toggle').addEventListener('click',()=>{state.theme=state.theme==='light'?'dark':'light';applyAppearance()});
$('#collection-open').addEventListener('click',showCollection);$('#bundle-preview').addEventListener('click',showBundle);
$('#clear-filters').addEventListener('click',()=>{state.category='Tümü';state.search='';$('#tool-search').value='';renderTools()});
$('#toggle-highlight').addEventListener('click',()=>{state.highlight=!state.highlight;updateStudio()});$('#show-guides').addEventListener('change',updateStudio);$('#demo-tolerance').addEventListener('input',updateStudio);
$('#plugin-details').addEventListener('click',()=>toolDetail(state.tool));$('#all-tools-open').addEventListener('click',()=>showView('icons'));
$('.dialog-close').addEventListener('click',()=>$('#tool-dialog').close());
$('#tool-dialog').addEventListener('click',e=>{if(e.target===$('#tool-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});
document.addEventListener('click',e=>{
  const el=e.target.closest('button,a');if(!el)return;
  if(el.dataset.view){showView(el.dataset.view);return}
  if(el.dataset.sitePage){showSitePage(el.dataset.sitePage);return}
  if(el.dataset.info){showInfo(el.dataset.info);return}
  if(el.dataset.accent){state.accent=el.dataset.accent;applyAppearance();return}
  if(el.dataset.category){state.category=el.dataset.category;renderTools();return}
  if(el.dataset.detail){toolDetail(el.dataset.detail);return}
  if(el.dataset.pluginTool){selectTool(el.dataset.pluginTool);return}
  if(el.dataset.scope){state.scope=el.dataset.scope;$$('[data-scope]').forEach(b=>{b.classList.toggle('active',b===el);b.setAttribute('aria-pressed',String(b===el))});updateStudio();return}
  if(el.dataset.iconVersion){renderIconReview({legacy:el.dataset.iconVersion==='legacy'});return}
  if(el.dataset.size){$('#icon-grid').style.setProperty('--icon-size',`${el.dataset.size}px`);$$('[data-size]').forEach(b=>{b.classList.toggle('active',b===el);b.setAttribute('aria-pressed',String(b===el))});return}
  if(el.dataset.add){const id=el.dataset.add;state.selected.has(id)?state.selected.delete(id):state.selected.add(id);$('#collection-count').textContent=state.selected.size;toolDetail(id);notify(state.selected.has(id)?'Araç önizleme listene eklendi.':'Araç önizleme listenden çıkarıldı.');return}
  if(el.dataset.try){$('#tool-dialog').close();selectTool(el.dataset.try);showView('plugin');return}
  if(el.hasAttribute('data-browse')){$('#tool-dialog').close();showSitePage('arqo');$('#tools').scrollIntoView();return}
  if(el.id==='preview-all'){bundleTools.forEach(t=>state.selected.add(t.id));$('#collection-count').textContent=state.selected.size;showCollection();notify(`${bundleTools.length} araç önizleme listene eklendi.`);return}
  if(el.id==='clear-collection'){state.selected.clear();$('#collection-count').textContent='0';showCollection();return}
  if(el.matches('a[href="#"]')){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});return}
});
document.addEventListener('keydown',e=>{if(e.key==='/'&&state.view==='website'&&state.sitePage==='arqo'&&!$('#tool-dialog').open&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();$('#tool-search').focus();$('#tools').scrollIntoView()}});
$('#icon-monochrome').addEventListener('change',e=>$('#icons-view').classList.toggle('monochrome',e.target.checked));
applyAppearance();renderTools();selectTool('S01');
const initialParams=new URLSearchParams(location.search);
if(initialParams.get('page')==='arqo')showSitePage('arqo');
if(initialParams.has('tool'))selectTool(initialParams.get('tool'));if(initialParams.get('highlight')==='1'){state.highlight=true;updateStudio()}
if(initialParams.has('view'))showView(initialParams.get('view'));
