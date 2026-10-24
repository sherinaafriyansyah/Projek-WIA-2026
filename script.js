JS
/* ===== 1. Slider foto ===== */
const daftarSlide = document.querySelectorAll('.slide');
const wadahTitik = document.getElementById('titik');
let posisi = 0;
let jam;
 
// buat titik penanda sebanyak jumlah slide
daftarSlide.forEach(function (slide, nomor) {
  const titik = document.createElement('button');
  if (nomor === 0) titik.classList.add('aktif');
  titik.addEventListener('click', function () {
    pindahKe(nomor);
    mulaiUlang();
  });
  wadahTitik.appendChild(titik);
});
const daftarTitik = wadahTitik.querySelectorAll('button');
 
function pindahKe(nomorBaru) {
  daftarSlide[posisi].classList.remove('aktif');
  daftarTitik[posisi].classList.remove('aktif');
 
  posisi = (nomorBaru + daftarSlide.length) % daftarSlide.length;
 
  daftarSlide[posisi].classList.add('aktif');
  daftarTitik[posisi].classList.add('aktif');
}
 
// ganti foto otomatis tiap 4,5 detik
function mulaiUlang() {
  clearInterval(jam);
  jam = setInterval(function () { pindahKe(posisi + 1); }, 4500);
}
 
document.getElementById('tombolNext').addEventListener('click', function () {
  pindahKe(posisi + 1);
  mulaiUlang();
});
mulaiUlang();
 
// kalau foto belum ada, sembunyikan ikon gambar rusak
document.querySelectorAll('.foto').forEach(function (foto) {
  foto.addEventListener('error', function () { foto.style.display = 'none'; });
});
 
 
/* ===== 2. Angka statistik naik dari 0 ===== */
document.querySelectorAll('[data-angka]').forEach(function (el) {
  const tujuan = Number(el.dataset.angka);
  const akhiran = el.dataset.akhiran || '';
  const mulai = performance.now();
  const lama = 1200; // milidetik
 
  function jalan(sekarang) {
    const p = Math.min((sekarang - mulai) / lama, 1);
    const nilai = Math.round(tujuan * (1 - Math.pow(1 - p, 3)));
    el.textContent = nilai.toLocaleString('id-ID') + akhiran;
    if (p < 1) requestAnimationFrame(jalan);
  }
  requestAnimationFrame(jalan);
});
 
 
/* ===== 3. Formulir laporan ===== */
const latarForm = document.getElementById('latarForm');
const pesan = document.getElementById('pesan');
 
function bukaForm() {
  latarForm.classList.add('buka');
  document.getElementById('namaSekolah').focus();
}
function tutupForm() {
  latarForm.classList.remove('buka');
}
 
document.getElementById('tombolLapor').addEventListener('click', bukaForm);
document.getElementById('tombolBatal').addEventListener('click', tutupForm);
 
// klik area gelap di luar formulir = tutup
latarForm.addEventListener('click', function (e) {
  if (e.target === latarForm) tutupForm();
});
 
// tekan Esc = tutup
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') tutupForm();
});
 
document.getElementById('tombolKirim').addEventListener('click', function () {
  tutupForm();
  document.getElementById('namaSekolah').value = '';
  document.getElementById('kerusakan').value = '';
  pesan.classList.add('tampil');
  setTimeout(function () { pesan.classList.remove('tampil'); }, 2500);
});