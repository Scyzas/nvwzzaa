/* EFFECTS: konfeti (canvas) & balon */
window.FX = (function(){
  const cv = document.getElementById('fx'), cx = cv.getContext('2d');
  const sky = document.getElementById('sky');
  let W, H, DPR, parts = [], running = false, t;
  function size(){
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * DPR; cv.height = H * DPR;
    cx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  size();
  window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(size, 150); });

  const cols = ['#7db4ff','#2f6fed','#ffffff','#f2c46b','#bcd6ff','#0ea5b7'];
  const small = () => W < 600;

  function burst(x, y, n){
    n = Math.round(n * (small() ? .55 : 1));
    for (let i = 0; i < n; i++){
      const a = Math.random() * Math.PI * 2, v = 4 + Math.random() * (small() ? 7 : 10);
      parts.push({x, y, vx: Math.cos(a)*v, vy: Math.sin(a)*v - 6, w: 6 + Math.random()*6, h: 3 + Math.random()*5,
        r: Math.random()*6, vr: (Math.random()-.5)*.4, c: cols[i % cols.length], life: 140 + Math.random()*80});
    }
  }
  function loop(){
    cx.clearRect(0, 0, W, H);
    parts = parts.filter(p => p.life > 0 && p.y < H + 20);
    parts.forEach(p => {
      p.vy += .22; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life--;
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r);
      cx.globalAlpha = Math.min(1, p.life / 40); cx.fillStyle = p.c;
      cx.fillRect(-p.w/2, -p.h/2, p.w, p.h); cx.restore();
    });
    if (parts.length) requestAnimationFrame(loop); else running = false;
  }
  function fire(fx, fy, n){
    burst(W * fx, H * fy, n);
    if (!running){ running = true; requestAnimationFrame(loop); }
  }
  function balloons(count){
    const n = small() ? Math.min(count, 9) : count;
    for (let i = 0; i < n; i++){
      const b = document.createElement('div'); b.className = 'balloon';
      const w = small() ? 40 + Math.random()*18 : 50 + Math.random()*24;
      b.style.cssText = `left:${Math.random()*88}%;--w:${w}px;--x:${(Math.random()-.5)*110}px;--r:${(Math.random()-.5)*30}deg;--d:${5 + Math.random()*3}s;animation-delay:${Math.random()*1.6}s;` +
        `background:radial-gradient(circle at 30% 28%,rgba(255,255,255,.65),transparent 38%),${cols[i % cols.length]}`;
      sky.appendChild(b); setTimeout(() => b.remove(), 11000);
    }
  }
  return {fire, balloons};
})();
