/* MAIN: tombol pemicu */
(function(){
  const start = document.getElementById('start');
  start.addEventListener('click', () => {
    document.documentElement.classList.remove('locked');
    document.body.classList.remove('locked');
    document.getElementById('hero').classList.add('go');
    start.disabled = true;
    setTimeout(() => FX.fire(.5, .35, 150), 2300);
    setTimeout(() => FX.fire(.2, .45, 80), 2800);
    setTimeout(() => FX.fire(.8, .45, 80), 3200);
    FX.balloons(window.CONFIG.balloons);
  }, {once: true});
})();
