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
  // the film reel: each film to its end, then the next; paused while off screen
  document.querySelectorAll('[data-reel]').forEach(box => {
    const films = JSON.parse(box.dataset.reel);
    const video = box.querySelector('video');
    const title = box.querySelector('.reel-title');
    const dots = Array.from(box.querySelectorAll('.reel-dots button'));
    let at = 0;
    const play = () => { const p = video.play(); if (p && p.catch) p.catch(() => {}); };
    const show = n => {
      at = (n + films.length) % films.length;
      const f = films[at];
      if (video.getAttribute('src') !== f.src) { video.src = f.src; video.poster = f.poster; }
      else video.currentTime = 0;
      title.textContent = f.name + ' →';
      title.href = f.href;
      video.setAttribute('aria-label', f.caption);
      dots.forEach((d, i) => d.classList.toggle('on', i === at));
      play();
    };
    video.addEventListener('ended', () => show(at + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => show(i)));
    if ('IntersectionObserver' in window) new IntersectionObserver(entries => entries.forEach(e => (e.isIntersecting ? play() : video.pause())), { threshold: 0.25 }).observe(video);
  });
  document.querySelectorAll('[data-compare]').forEach(box => {
    const after = box.querySelector('.after'), range = box.querySelector('input');
    const set = () => { after.style.clipPath = `inset(0 0 0 ${range.value}%)`; box.style.setProperty('--split', `${range.value}%`); };
    range.addEventListener('input', set); set();
  });
})();
