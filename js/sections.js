/* SECTIONS: bangun konten dari CONFIG */
(function(){
  const C = window.CONFIG, $ = s => document.querySelector(s);
  const rot = i => ((i * 37) % 11 - 5) / 2.2;

  document.title = 'Selamat ulang tahun, ' + C.name;
  $('#n2').textContent = C.name;
  $('#greeting').textContent = C.greeting;
  $('#closing').textContent = C.closing;

  // Latar hero
  const hero = $('#hero');
  hero.dataset.bg = C.hero.background;
  if (C.hero.image) hero.style.setProperty('--hero-image', `url("${C.hero.image}")`);
  if (C.hero.color) hero.style.setProperty('--hero-color', C.hero.color);

  // Kue
  $('#cake1').innerHTML = window.CAKE_SVG;
  $('#cake2').innerHTML = window.CAKE_SVG.replace(/id="(g1|g2|g3|gf)"/g, 'id="$1b"').replace(/url\(#(g1|g2|g3|gf)\)/g, 'url(#$1b)');

  // Nama (per kata, per huruf)
  const nameEl = $('#name'); let li = 0;
  const words = C.name.split(' ');
  words.forEach((w, wi) => {
    const ws = document.createElement('span'); ws.className = 'word';
    [...w].forEach(ch => { const s = document.createElement('span'); s.className = 'ch'; s.textContent = ch; s.style.setProperty('--i', li++); ws.appendChild(s); });
    nameEl.appendChild(ws);
    if (wi < words.length - 1) nameEl.appendChild(document.createTextNode(' '));
  });

  // Surat
  const wall = $('#wall');
  C.notes.forEach((n, i) => {
    const d = document.createElement('article'); d.className = 'note hand';
    d.style.cssText = `--rot:${rot(i + 2)}deg;--pin:${n.pin};--dl:${(i % 3) * .15}s`;
    d.innerHTML = '<h3></h3><p></p><small></small>';
    d.querySelector('h3').textContent = n.t;
    d.querySelector('p').textContent = n.p;
    d.querySelector('small').textContent = C.from;
    wall.appendChild(d);
  });
  // Ketuk (mobile) untuk mengangkat surat
  wall.addEventListener('click', e => {
    const n = e.target.closest('.note'); if (!n) return;
    const was = n.classList.contains('lift');
    wall.querySelectorAll('.lift').forEach(x => x.classList.remove('lift'));
    if (!was) n.classList.add('lift');
  });

  // Meja kenangan
  const PAL = [['#1d4ed8','#7db4ff'],['#0f766e','#5eead4'],['#334155','#94a3b8'],['#1e3a8a','#60a5fa'],['#0369a1','#7dd3fc'],['#312e81','#818cf8']];
  const table = $('#table'), pick = $('#pick'); let current = null;
  function setPhoto(ph, src, alt, fit, pos){
    ph.textContent = ''; ph.classList.add('has-img'); fit = fit || 'cover';
    if (fit === 'contain'){ const bg = new Image(); bg.src = src; bg.className = 'bg'; bg.alt = ''; ph.appendChild(bg); }
    const im = new Image(); im.src = src; im.alt = alt || 'Foto kenangan'; im.loading = 'lazy'; im.style.objectFit = fit;
    if (pos) im.style.objectPosition = pos;
    im.onerror = () => { ph.classList.remove('has-img'); ph.textContent = 'Foto belum ditemukan'; };
    ph.appendChild(im);
  }
  C.memories.forEach((m, i) => {
    const f = document.createElement('div');
    f.className = 'frame ' + (m.style || '');
    f.style.cssText = `--rot:${rot(i + 5)}deg;--dl:${i * .1}s`;
    f.innerHTML = '<div class="card"><div class="ph"></div><div class="cap hand"></div></div>';
    const ph = f.querySelector('.ph'); f.querySelector('.cap').textContent = m.caption || '';
    ph.style.setProperty('--c1', PAL[i % PAL.length][0]); ph.style.setProperty('--c2', PAL[i % PAL.length][1]);
    if (m.ratio || C.memoryRatio) ph.style.setProperty('--ratio', m.ratio || C.memoryRatio);

    if (m.src) setPhoto(ph, m.src, m.caption, m.fit || C.memoryFit, m.pos);
    else ph.textContent = '＋ Tambah foto';
    f.tabIndex = 0; f.setAttribute('role', 'button'); f.setAttribute('aria-label', m.caption || 'Foto');
    const act = () => {
      const img = ph.querySelector('img:not(.bg)');
      if (img) window.openLightbox(img.currentSrc || img.src, m.caption, m.style);   // ada foto: perbesar
      else { current = ph; pick.click(); }                                              // kosong: pilih foto
    };
    f.addEventListener('click', act);
    f.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); act(); } });

    table.appendChild(f);
  });
  pick.addEventListener('change', e => {
    const file = e.target.files[0]; if (!file || !current) return;
    const r = new FileReader();
    r.onload = () => setPhoto(current, r.result, 'Foto kenangan', C.memoryFit);
    r.readAsDataURL(file); e.target.value = '';
  });

  // Reveal saat scroll
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }), {threshold: .15, rootMargin: '0px 0px -6% 0px'});
  document.querySelectorAll('.rv,.note,.frame').forEach((el, i) => {
    if (el.classList.contains('rv')) el.style.transitionDelay = (i % 3) * .15 + 's';
    io.observe(el);
  });
})();
