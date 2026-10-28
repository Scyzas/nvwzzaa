/* CONFIG: ubah isi di sini saja */
window.CONFIG = {
  name: "Novwanda Azaline Ramadhani",
  greeting: "Terima kasih sudah selalu ada, menjadi wanita yang kuat, mandiri, sabar, dan jadi tempat ternyaman buatku.",
  closing: "Sekali lagi, selamat ulang tahun, sayang.",

  hero: {
    background: "gradient",                   // "gradient" | "grid" | "image" | "color"
    image: "assets/images/bg/hero.jpg",       // dipakai jika background = "image"
    color: "#071433"                          // dipakai jika background = "color"
  },

  balloons: 16,

  notes: [
    {t:"Sehat selalu", p:"Semoga kamu selalu sehat, tidurmu nyenyak, dan harimu nggak terlalu melelahkan.", pin:"#2f6fed"},
    {t:"Rezeki & umur panjang", p:"Semoga rezekimu lancar dan berkah, umurmu panjang, dan kamu selalu dekat sama hal-hal baik.", pin:"#0ea5b7"},
    {t:"Makin dewasa", p:"Makin bertambah umur, semoga kamu tumbuh jadi pribadi yang makin baik dan makin sabar.", pin:"#64748b"},
    {t:"Cita-citamu", p:"Semoga semua yang kamu perjuangkan terwujud satu per satu.", pin:"#d99a2b"},
    {t:"Tenang & cukup", p:"Semoga kamu selalu merasa cukup, tenang, dan dikelilingi orang-orang yang tulus.", pin:"#1d4ed8"},
    {t:"Untuk kita", p:"Semoga kita terus tumbuh bareng, saling dukung, dan jadi tempat pulang satu sama lain.", pin:"#0f766e"},
    {t:"Banyak tawa", p:"Semoga kamu sering ketawa lepas, dan hari-harimu lebih banyak senengnya daripada capeknya.", pin:"#2f6fed"},
    {t:"Makasih ya", p:"Makasih udah sabar, pengertian sama aku dan selalu ada. Aku sayang kamu.", pin:"#d99a2b"}
  ],

  // Bentuk bingkai & cara foto mengisi bingkai (berlaku untuk semua foto, bisa ditimpa per foto)
  memoryRatio: "1 / 1",     // "1 / 1" persegi | "4 / 5" potret | "3 / 4" | "4 / 3" lanskap
  memoryFit: "cover",       // "cover" = penuh bingkai (tepi terpotong) | "contain" = utuh (sisi diisi blur)

  // src diisi path foto, mis. "assets/images/memories/foto-1.jpg". Kosong = placeholder bisa diketuk untuk unggah sementara.
  // style: "" (putih) | "gold" | "dark"
  // opsional per foto: fit, ratio, pos (titik fokus, mis. "center top" agar wajah tidak terpotong)
  memories: [
    {caption:"", src:"assets/images/memories/1.jpeg", style:""},
    {caption:"", src:"assets/images/memories/3.jpeg", style:"gold"},
    {caption:"", src:"assets/images/memories/4.jpeg", style:"dark"},
    {caption:"", src:"assets/images/memories/5.jpeg", style:""},
    {caption:"", src:"assets/images/memories/6.webp", style:"gold"},
    {caption:"", src:"assets/images/memories/8.jpeg", style:"dark"},
    {caption:"", src:"assets/images/memories/9.jpeg", style:""},
    {caption:"", src:"assets/images/memories/10.jpeg", style:"gold"},
  ]
};
