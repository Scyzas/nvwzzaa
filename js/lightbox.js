/* LIGHTBOX: perbesar foto, tutup lewat tombol X, klik latar, atau tombol Esc */
window.openLightbox = (function(){
  const box = document.getElementById('lightbox'), frame = box.querySelector('.lb-frame');
  const img = document.getElementById('lb-img'), cap = document.getElementById('lb-cap');
  const btn = box.querySelector('.lb-close');
  let last = null;

  function open(src, caption, style){
    last = document.activeElement;
    img.src = src; img.alt = caption || 'Foto kenangan';
    cap.textContent = caption || '';
    frame.className = 'lb-frame' + (style ? ' ' + style : '');
    box.classList.add('open'); box.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('lb-open');
    btn.focus({preventScroll: true});
  }
  function close(){
    if (!box.classList.contains('open')) return;
    box.classList.remove('open'); box.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('lb-open');
    if (last) last.focus({preventScroll: true});
  }
  btn.addEventListener('click', close);
  box.addEventListener('click', e => { if (e.target === box) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  return open;
})();