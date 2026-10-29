const tombolBuka = document.getElementById("bukaForm");
const modal = document.getElementById("modalLaporan");
const tombolTutup = document.getElementById("tutupForm");

// Membuka modal ketika tombol Mulai Melapor diklik
tombolBuka.addEventListener("click", function () {
  modal.hidden = false;
});

// Menutup modal ketika tombol silang diklik
tombolTutup.addEventListener("click", function () {
  modal.hidden = true;
});
