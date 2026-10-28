# Ucapan Ulang Tahun

```
index.html            kerangka & section (hero, ucapan, harapan, memory)
css/   base · layout · components · cake · animations · responsive
js/    config (ubah di sini) · cake · effects · sections · main
assets/images/bg/        gambar latar hero (opsional)
assets/images/memories/  foto kenangan (foto-1.jpg, dst.)
```

## Cara ubah
Semua isi ada di `js/config.js`: nama, ucapan, surat, latar hero (`gradient | grid | image | color`), dan foto.
Untuk foto, taruh file di `assets/images/memories/` lalu isi `src: "assets/images/memories/foto-1.jpg"`.

Foto otomatis memenuhi bingkai: `memoryFit: "cover"` (penuh, tepi terpotong) atau `"contain"` (utuh, sisi diisi blur). Bentuk bingkai lewat `memoryRatio`. Per foto bisa ditimpa dengan `fit`, `ratio`, `pos`.

## Deploy ke GitHub Pages
1. Upload seluruh isi folder ini ke repo (`index.html` harus di root).
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
3. Buka `https://<username>.github.io/<repo>/`.
