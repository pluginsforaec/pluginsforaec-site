// ARQO site v2: the narrow-screen menu, the toolbar's hover card and the before/after slider.
(() => {
  const nav = document.querySelector('.nav'), menu = nav && nav.querySelector('.menu');
  if (menu) {
    menu.addEventListener('click', () => menu.setAttribute('aria-expanded', String(nav.classList.toggle('open'))));
    nav.querySelectorAll('.links a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
  }
  const tip = document.querySelector('.tb-tip');
  if (tip) {
    document.querySelectorAll('.tb').forEach(button => {
      button.addEventListener('mouseenter', () => {
        tip.querySelector('b').textContent = button.dataset.name + (button.dataset.soon ? ' · coming' : '');
        tip.querySelector('span').textContent = button.dataset.summary;
        tip.hidden = false;
      });
      button.addEventListener('mouseleave', () => { tip.hidden = true; });
    });
  }
  document.querySelectorAll('[data-compare]').forEach(box => {
    const after = box.querySelector('.after'), range = box.querySelector('input');
    const set = () => { after.style.clipPath = `inset(0 0 0 ${range.value}%)`; box.style.setProperty('--split', `${range.value}%`); };
    range.addEventListener('input', set); set();
  });
})();
