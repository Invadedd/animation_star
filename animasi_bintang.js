// Menyiapkan canvas
const canvas = document.getElementById("star-canvas");
const ctx = canvas.getContext("2d");

// Menentukan lebar dan tinggi canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fungsi untuk menggambar bintang
function drawStar(x, y, r, p, m) {
  ctx.beginPath();
  ctx.moveTo(x, y - r);
  for (let i = 0; i < p; i++) {
    ctx.rotate(Math.PI / p);
    ctx.lineTo(x + r * m, y);
    ctx.rotate(Math.PI / p);
    ctx.lineTo(x, y - r);
  }
  ctx.closePath();
  ctx.fill();
}

// Fungsi untuk membuat animasi
function animate() {
  // Bersihkan canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Menentukan posisi dan ukuran bintang
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const r = 50 + Math.random() * 100;
  const p = 5 + Math.floor(Math.random() * 2);
  const m = Math.random() * 2 - 1;

  // Mengatur warna bintang
  ctx.fillStyle = `rgba(255, 200, 0, ${Math.random()})`;

  // Menggambar bintang
  drawStar(x, y, r, p, m);

  // Memanggil fungsi animate kembali setelah waktu yang ditentukan
  setTimeout(animate, 10000 / 1000);
}

// Memulai animasi
animate();
 
