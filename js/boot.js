/* BOOT: selalu mulai dari kondisi awal (dimuat di <head>) */
(function(){
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  window.scrollTo(0, 0);
  // Kembali dari cache (tombol Back / tab dipulihkan): muat ulang agar animasi kembali ke awal
  window.addEventListener('pageshow', function(e){
    if (e.persisted) { location.reload(); return; }
    window.scrollTo(0, 0);
  });
  // Pastikan di atas setelah semua aset dimuat (beberapa browser memulihkan scroll terlambat)
  window.addEventListener('load', function(){
    if (document.body.classList.contains('locked')) window.scrollTo(0, 0);
  });
})();
