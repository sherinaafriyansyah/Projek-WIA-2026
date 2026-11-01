// Navbar
// Mengambil elemen navbar
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");
// Fungsi membuka dan menutup navigasi
menuButton.addEventListener("click", function () {
    // Mengubah kondisi menu
    const isOpen = navMenu.classList.toggle("active");
    // Mengubah animasi hamburger
    menuButton.classList.toggle("active", isOpen);
    // Mengubah status aksesibilitas
    menuButton.setAttribute("aria-expanded", isOpen);
    // Mengubah label tombol
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu" : "Buka menu"
    );
});
// Menutup menu ketika link diklik
const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Buka menu");
    });
});
// Menutup menu ketika klik di luar navbar
document.addEventListener("click", function (event) {
    if (
        !menuButton.contains(event.target) &&
        !navMenu.contains(event.target)
    ) {
        navMenu.classList.remove("active");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Buka menu");
    }
});


// Hero-Section 
// Mengambil Element HTML
// Mengambil semua slide foto
const slides = document.querySelectorAll(".slide");

// Mengambil semua tombol titik
const dots = document.querySelectorAll(".dot");

// Mengambil tombol panah
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Mengambil area slider
const slider = document.querySelector(".slider");

// Menyimpan posisi slide yang sedang aktif
let currentIndex = 0;

// Variabel untuk timer otomatis
let autoSlide;

// Menampilkan Slide
function showSlide(index) {
    // Menghitung jumlah slide
    const totalSlides = slides.length;
    // Kembali ke slide terakhir jika melewati awal
    if (index < 0) {
        currentIndex = totalSlides - 1;
    }
    // Kembali ke slide pertama jika melewati akhir
    else if (index >= totalSlides) {
        currentIndex = 0;
    }
    // Jika masih dalam rentang yang benar
    else {
        currentIndex = index;
    }
    // Menonaktifkan semua slide dan titik
    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });
    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });
    // Mengaktifkan slide yang dipilih
    slides[currentIndex].classList.add("active");
    // Mengaktifkan titik yang sesuai
    dots[currentIndex].classList.add("active");
}


// Tombol Panah
// Menampilkan foto sebelumnya
prevButton.addEventListener("click", function() {
    showSlide(currentIndex - 1);
    restartAutoSlide();
});
// Menampilkan foto berikutnya
nextButton.addEventListener("click", function() {
    showSlide(currentIndex + 1);
    restartAutoSlide();
});

// Tombol Titik
// Mengatur setiap titik agar bisa diklik
dots.forEach(function(dot, index) {
    dot.addEventListener("click", function() {
        // Menampilkan slide sesuai titik
        showSlide(index);
        // Mengatur ulang timer otomatis
        restartAutoSlide();

    });
});


// Slider Otomatis
// Menjalankan slider otomatis setiap 5 detik
function startAutoSlide() {
    // Hentikan timer lama agar tidak bertumpuk
    clearInterval(autoSlide);
    autoSlide = setInterval(function() {
        showSlide(currentIndex + 1);
    }, 5000);

}
// Mengatur ulang timer setelah pengguna klik
function restartAutoSlide() {
    startAutoSlide();
}
// Berhenti sementara saat mouse berada di slider
slider.addEventListener("mouseenter", function() {
    clearInterval(autoSlide);
});
// Melanjutkan saat mouse meninggalkan slider
slider.addEventListener("mouseleave", function() {
    startAutoSlide();
});

// Inisialisasi
// Menampilkan slide pertama
showSlide(0);
// Memulai pergantian foto otomatis
startAutoSlide();



// Data Anggaran Wilayah
const regionData = {
    "sumba timur": {
        name: "Sumba Timur",
        schools: 24,

        data: {
            2026: {
                categories: [
                    {
                        name: "Rehabilitasi sekolah",
                        budget: 6.0,
                        realization: 4.2
                    },
                    {
                        name: "Sarana belajar",
                        budget: 3.6,
                        realization: 2.8
                    },
                    {
                        name: "Dukungan operasional",
                        budget: 2.4,
                        realization: 1.4
                    }
                ]
            },

            2025: {
                categories: [
                    {
                        name: "Rehabilitasi sekolah",
                        budget: 5.5,
                        realization: 4.0
                    },
                    {
                        name: "Sarana belajar",
                        budget: 3.3,
                        realization: 2.5
                    },
                    {
                        name: "Dukungan operasional",
                        budget: 2.2,
                        realization: 1.5
                    }
                ]
            }
        }
    },

    "alor": {
        name: "Alor",
        schools: 31,

        data: {
            2026: {
                categories: [
                    {
                        name: "Rehabilitasi sekolah",
                        budget: 5.0,
                        realization: 3.2
                    },
                    {
                        name: "Sarana belajar",
                        budget: 3.0,
                        realization: 2.1
                    },
                    {
                        name: "Dukungan operasional",
                        budget: 2.5,
                        realization: 1.8
                    }
                ]
            },

            2025: {
                categories: [
                    {
                        name: "Rehabilitasi sekolah",
                        budget: 4.6,
                        realization: 3.0
                    },
                    {
                        name: "Sarana belajar",
                        budget: 2.8,
                        realization: 2.0
                    },
                    {
                        name: "Dukungan operasional",
                        budget: 2.3,
                        realization: 1.6
                    }
                ]
            }
        }
    },

    "asmat": {
        name: "Asmat",
        schools: 28,

        data: {
            2026: {
                categories: [
                    {
                        name: "Rehabilitasi sekolah",
                        budget: 7.0,
                        realization: 4.5
                    },
                    {
                        name: "Sarana belajar",
                        budget: 4.5,
                        realization: 2.8
                    },
                    {
                        name: "Dukungan operasional",
                        budget: 3.7,
                        realization: 2.5
                    }
                ]
            },

            2025: {
                categories: [
                    {
                        name: "Rehabilitasi sekolah",
                        budget: 6.5,
                        realization: 4.2
                    },
                    {
                        name: "Sarana belajar",
                        budget: 4.1,
                        realization: 2.7
                    },
                    {
                        name: "Dukungan operasional",
                        budget: 3.4,
                        realization: 2.2
                    }
                ]
            }
        }
    },

    "pegunungan bintang": {
        name: "Pegunungan Bintang",
        schools: 35,

        data: {
            2026: {
                categories: [
                    {
                        name: "Rehabilitasi sekolah",
                        budget: 8.0,
                        realization: 5.0
                    },
                    {
                        name: "Sarana belajar",
                        budget: 5.5,
                        realization: 3.5
                    },
                    {
                        name: "Dukungan operasional",
                        budget: 4.5,
                        realization: 3.0
                    }
                ]
            },

            2025: {
                categories: [
                    {
                        name: "Rehabilitasi sekolah",
                        budget: 7.4,
                        realization: 4.6
                    },
                    {
                        name: "Sarana belajar",
                        budget: 5.0,
                        realization: 3.2
                    },
                    {
                        name: "Dukungan operasional",
                        budget: 4.1,
                        realization: 2.7
                    }
                ]
            }
        }
    }
};

// Mengambil element dari HTML
const searchForm = document.getElementById("searchForm");
const regionSearch = document.getElementById("regionSearch");
const yearFilter = document.getElementById("yearFilter");
const levelFilter = document.getElementById("levelFilter");
const clearSearch = document.getElementById("clearSearch");
const searchMessage = document.getElementById("searchMessage");

const regionTitle = document.getElementById("regionTitle");
const periodText = document.getElementById("periodText");
const budgetYear = document.getElementById("budgetYear");
const totalBudget = document.getElementById("totalBudget");
const totalRealization = document.getElementById("totalRealization");
const realizationNote = document.getElementById("realizationNote");
const chartSubtitle = document.getElementById("chartSubtitle");

const chartContent = document.getElementById("chartContent");
const chartAxis = document.getElementById("chartAxis");

// Wilayah yang sedang ditampilkan
let currentRegion = "sumba timur";


// Format Angka Rupiah
// Mengubah 12 menjadi Rp12,0 M
function formatBillion(value) {
    return "Rp" + value.toLocaleString("id-ID", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    }) + " M";
}
// Mengubah angka menjadi format ringkas
function formatNumber(value) {
    return value.toLocaleString("id-ID", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });
}

// Membaca data berdasarkan filter
function getSelectedData(regionKey) {
    const region = regionData[regionKey];
    const year = yearFilter.value;
    const level = levelFilter.value;

    // Mengambil data sesuai tahun
    const yearData = region.data[year];

    // Faktor jenjang hanya untuk simulasi.
    // Data SD dan SMP belum merupakan data resmi
    // atau pembagian anggaran yang sebenarnya.
    const levelFactor = {
        "SD & SMP": 1,
        "SD": 0.62,
        "SMP": 0.38
    };
    const factor = levelFactor[level];

    // Menghitung anggaran setiap kategori
    const categories = yearData.categories.map(function(item) {
        return {
            name: item.name,
            budget: item.budget * factor,
            realization: item.realization * factor
        };
    });

    // Total dihitung dari kategori yang ditampilkan.
    const budget = categories.reduce(function(total, item) {
        return total + item.budget;
    }, 0);
    const realization = categories.reduce(function(total, item) {
        return total + item.realization;
    }, 0);

    // Persentase realisasi terhadap anggaran
    const percentage = budget > 0
        ? (realization / budget) * 100
        : 0;
    return {
        region,
        year,
        level,
        categories,
        budget,
        realization,
        percentage
    };
}

// Memperbarui informasi wilayah
function renderRegion(regionKey) {
    const data = getSelectedData(regionKey);

    // Memperbarui nama wilayah
    regionTitle.textContent = "Kabupaten " + data.region.name;

    // Memperbarui periode
    periodText.textContent =
        "Januari–September " + data.year +
        " • " + data.region.schools + " sekolah contoh";

    // Memperbarui tahun
    budgetYear.textContent = data.year;

    // Memperbarui total anggaran
    totalBudget.textContent = formatBillion(data.budget);

    // Memperbarui realisasi
    totalRealization.textContent = formatBillion(data.realization);

    // Memperbarui persentase realisasi
    realizationNote.textContent =
        formatNumber(data.percentage) + "% dari anggaran";

    // Memperbarui keterangan grafik
    chartSubtitle.textContent =
        data.region.name + " • Tahun anggaran " + data.year;

    // Menggambar ulang grafik dengan data terbaru
    renderChart(data.categories);

}


// Membuat grafik batang
function renderChart(categories) {
    // Mencari nilai anggaran terbesar
    const maxValue = Math.max(
        ...categories.map(function(item) {
            return item.budget;
        }),
        1
    );
    // Menentukan batas sumbu yang mudah dibaca.
    // Contoh: nilai terbesar 6,0 menghasilkan batas 6.
    const maxScale = Math.ceil(maxValue / 2) * 2;

    // Membuat isi grafik
    chartContent.innerHTML = "";

    categories.forEach(function(item) {

        // Menghitung panjang batang dalam persen
        const budgetWidth =
            (item.budget / maxScale) * 100;

        const realizationWidth =
            (item.realization / maxScale) * 100;

        // Membuat grup kategori
        const group = document.createElement("div");
        group.className = "category-group";

        // Membuat judul kategori
        const title = document.createElement("span");
        title.className = "category-title";
        title.textContent = item.name;

        group.appendChild(title);

        // Membuat batang anggaran
        group.appendChild(
            createBarLine(
                item.budget,
                budgetWidth,
                "budget",
                "Anggaran"
            )
        );

        // Membuat batang realisasi
        group.appendChild(
            createBarLine(
                item.realization,
                realizationWidth,
                "realization",
                "Realisasi"
            )
        );

        chartContent.appendChild(group);

    });

    // Membuat angka pada sumbu grafik
    chartAxis.innerHTML = "";

    // Empat titik sumbu: 0%, 33%, 67%, 100%
    for (let i = 0; i <= 3; i++) {

        const tick = document.createElement("span");

        const value = maxScale * i / 3;

        tick.textContent = formatNumber(value);

        chartAxis.appendChild(tick);

    }

}

// Membuat satu baris batang
function createBarLine(value, width, type, label) {
    // Pembungkus batang dan nilai
    const line = document.createElement("div");
    line.className = "bar-line";

    // Area tempat batang ditampilkan
    const track = document.createElement("div");
    track.className = "bar-track";

    // Batang grafik
    const bar = document.createElement("div");
    bar.className = "bar " + type;

    // Lebar berdasarkan nilai anggaran/realisasi
    bar.style.width = Math.min(100, Math.max(0, width)) + "%";

    // Informasi untuk pembaca layar
    bar.setAttribute(
        "aria-label",
        label + ": " + formatNumber(value) + " miliar rupiah"
    );

    track.appendChild(bar);

    // Angka di sebelah kanan batang
    const valueLabel = document.createElement("span");
    valueLabel.className = "bar-value";
    valueLabel.textContent = formatNumber(value);

    line.appendChild(track);
    line.appendChild(valueLabel);

    return line;
}

// Fitur pencarian wilayah
function searchRegion() {
    // Menghapus spasi berlebih dan menyamakan huruf
    const query = regionSearch.value
        .trim()
        .toLocaleLowerCase("id-ID");

    // Mencocokkan nama kabupaten
    const matchedKey = Object.keys(regionData).find(
        function(key) {
            return key === query;
        }
    );

    // Jika wilayah tidak ditemukan
    if (!matchedKey) {

        searchMessage.textContent =
            "Wilayah tidak ditemukan. Coba Sumba Timur, Alor, Asmat, atau Pegunungan Bintang.";

        return;
    }

    // Menyimpan wilayah yang dipilih
    currentRegion = matchedKey;

    // Menghapus pesan kesalahan
    searchMessage.textContent = "";

    // Memperbarui seluruh tampilan
    renderRegion(currentRegion);

}

// Form pencarian
// Mencari ketika tombol ditekan atau Enter digunakan
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    searchRegion();
});


// Tombol hapus pencarian
clearSearch.addEventListener("click", function() {
    regionSearch.value = "";
    regionSearch.focus();
    searchMessage.textContent =
        "Masukkan nama wilayah yang tersedia.";

});

// Tahun berubah: hitung ulang data dan grafik
yearFilter.addEventListener("change", function() {
    renderRegion(currentRegion);
});


// Jenjang berubah: hitung ulang data dan grafik
levelFilter.addEventListener("change", function() {
    renderRegion(currentRegion);

});

// Memampilkan data pertama
// Saat halaman dibuka, tampilkan Sumba Timur
renderRegion(currentRegion);




// Step & Form Laporan
/* MENGAMBIL ELEMEN HTML */
// Tombol untuk membuka form
const openReportButton = document.getElementById("open-report");

// Tombol untuk menutup form
const closeReportButton = document.getElementById("close-report");

// Modal form pelaporan
const reportModal = document.getElementById("report-modal");

// Modal konfirmasi berhasil
const successModal = document.getElementById("success-modal");

// Form pelaporan
const reportForm = document.getElementById("report-form");

// Input foto bukti
const evidenceInput = document.getElementById("evidence");

// Tulisan nama foto
const uploadLabel = document.getElementById("upload-label");

// Tempat menampilkan informasi foto
const filePreview = document.getElementById("file-preview");

// Tempat menampilkan pesan kesalahan
const formError = document.getElementById("form-error");

// Tempat menampilkan kode laporan
const generatedCode = document.getElementById("generated-code");

// Tombol kembali ke beranda
const backHomeButton = document.getElementById("back-home");


// Menyimpan informasi foto yang dipilih
let selectedEvidence = null;


// Nama tempat penyimpanan data laporan di browser
const STORAGE_KEY = "laporanKerusakanSekolah";


/* FUNGSI MEMBUKA DAN MENUTUP MODAL */

// Fungsi untuk menampilkan modal
function showModal(modal) {

    // Menampilkan modal menggunakan class CSS
    modal.classList.add("is-visible");

    // Menandai modal sebagai terlihat
    modal.setAttribute("aria-hidden", "false");

    // Mencegah halaman belakang ikut di-scroll
    document.body.style.overflow = "hidden";
}


// Fungsi untuk menyembunyikan modal
function hideModal(modal) {

    // Menghilangkan class untuk menyembunyikan modal
    modal.classList.remove("is-visible");

    // Menandai modal sebagai tersembunyi
    modal.setAttribute("aria-hidden", "true");

    // Memeriksa apakah masih ada modal yang terbuka
    const anotherModalOpen = document.querySelector(
        ".modal-backdrop.is-visible"
    );

    // Scroll halaman diaktifkan kembali jika semua modal tertutup
    if (!anotherModalOpen) {
        document.body.style.overflow = "";
    }
}


/* Tombol Mulai Melapor */
// Ketika tombol diklik, form akan terbuka
openReportButton.addEventListener("click", function () {

    // Menghapus pesan kesalahan sebelumnya
    formError.textContent = "";

    // Membuka modal form
    showModal(reportModal);

    // Memindahkan fokus ke input nama sekolah
    document.getElementById("school-name").focus();
});


/* TOMBOL TUTUP MODAL */

// Menutup form ketika tombol silang diklik
closeReportButton.addEventListener("click", function () {
    hideModal(reportModal);
});

// Menutup form jika area gelap di luar modal diklik
reportModal.addEventListener("click", function (event) {
    if (event.target === reportModal) {
        hideModal(reportModal);
    }
});


// Menutup modal sukses jika area luarnya diklik
successModal.addEventListener("click", function (event) {
    if (event.target === successModal) {
        hideModal(successModal);
    }
});


// Menutup modal ketika tombol Escape ditekan
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        if (successModal.classList.contains("is-visible")) {
            hideModal(successModal);
        } else if (reportModal.classList.contains("is-visible")) {
            hideModal(reportModal);
        }
    }
});


/* 5. MEMILIH FOTO BUKTI */

// Berjalan ketika pengguna memilih foto
evidenceInput.addEventListener("change", function () {

    // Mengambil file yang dipilih
    selectedEvidence = evidenceInput.files[0] || null;

    // Menghapus informasi file sebelumnya
    filePreview.textContent = "";

    // Jika pengguna tidak memilih file
    if (!selectedEvidence) {
        uploadLabel.textContent = "Tambahkan foto bukti";
        return;
    }

    // Memastikan file yang dipilih berupa gambar
    if (!selectedEvidence.type.startsWith("image/")) {
        formError.textContent = "File bukti harus berupa gambar.";
        evidenceInput.value = "";
        selectedEvidence = null;
        uploadLabel.textContent = "Tambahkan foto bukti";
        return;
    }

    // Membatasi ukuran foto maksimal 5 MB
    if (selectedEvidence.size > 5 * 1024 * 1024) {
        formError.textContent = "Ukuran foto maksimal 5 MB.";
        evidenceInput.value = "";
        selectedEvidence = null;
        uploadLabel.textContent = "Tambahkan foto bukti";
        return;
    }

    // Menghapus pesan kesalahan jika foto valid
    formError.textContent = "";

    // Mengubah tulisan setelah foto dipilih
    uploadLabel.textContent = "Foto bukti dipilih";

    // Menampilkan nama dan ukuran foto
    filePreview.textContent =
        `${selectedEvidence.name} · ${(selectedEvidence.size / 1024 / 1024).toFixed(2)} MB`;
});


/* Membuat Kode Laporan Unik */
// Fungsi untuk menghasilkan kode laporan
function createReportCode() {

    // Mengambil tahun saat ini
    const year = new Date().getFullYear();

    // Membuat angka acak empat digit
    const randomPart = Math.floor(1000 + Math.random() * 9000);

    // Mengambil tiga digit terakhir dari waktu saat ini
    const timePart = Date.now().toString().slice(-3);

    // Menggabungkan semuanya menjadi kode laporan
    return `3T-${year}-${randomPart}${timePart}`;
}


/* Mengambil Data Laporan Yang Tersimpan */
// Membaca laporan yang tersimpan di browser
function getSavedReports() {

    try {

        // Mengambil data dari localStorage
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    } catch (error) {

        // Mengembalikan array kosong jika data tidak terbaca
        return [];
    }
}


/* Proses Pengiriman Laporan */
// Berjalan ketika form dikirim
reportForm.addEventListener("submit", function (event) {

    // Mencegah halaman dimuat ulang
    event.preventDefault();

    // Menghapus pesan kesalahan sebelumnya
    formError.textContent = "";

    // Memastikan semua kolom wajib telah diisi
    if (!reportForm.reportValidity()) {
        return;
    }
    // Mengambil seluruh data dari form
    const formData = new FormData(reportForm);

    // Membuat kode laporan baru
    const reportCode = createReportCode();

    // Menyusun data laporan
    const report = {

        // Kode unik laporan
        code: reportCode,

        // Nama sekolah
        schoolName: String(
            formData.get("schoolName")
        ).trim(),

        // Jenis kerusakan
        damageType: String(
            formData.get("damageType")
        ),

        // Lokasi sekolah
        location: String(
            formData.get("location")
        ).trim(),

        // Deskripsi kerusakan
        description: String(
            formData.get("description")
        ).trim(),

        // Nama foto, bukan isi file foto
        evidenceName: selectedEvidence
            ? selectedEvidence.name
            : "",

        // Status awal laporan
        status: "Menunggu Verifikasi",

        // Waktu pembuatan laporan
        createdAt: new Date().toISOString()
    };

    // Mengambil laporan lama
    const reports = getSavedReports();

    // Menambahkan laporan baru
    reports.push(report);


    // Menyimpan data laporan ke browser
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(reports)
        );

    } catch (error) {

        // Memberikan informasi jika penyimpanan gagal
        console.warn(
            "Laporan tidak dapat disimpan di browser ini.",
            error
        );
    }


    // Menampilkan kode pada modal konfirmasi
    generatedCode.textContent = reportCode;
    // Menutup modal form
    hideModal(reportModal);
    // Membuka modal konfirmasi berhasil
    showModal(successModal);
    // Mengosongkan form setelah laporan diproses
    reportForm.reset();
    // Menghapus informasi foto yang sebelumnya dipilih
    selectedEvidence = null;
    // Mengembalikan tulisan upload seperti semula
    uploadLabel.textContent = "Tambahkan foto bukti";
    // Menghapus nama foto dari tampilan
    filePreview.textContent = "";
});


/* Tobbol Kembali ke Beranda */
// Menutup modal konfirmasi ketika tombol diklik
backHomeButton.addEventListener("click", function () {

    hideModal(successModal);

    // Menggulir halaman kembali ke bagian atas
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* DASAR FITUR CEK STATUS LAPORAN */
// Contoh mengambil laporan berdasarkan kode: //
// const reports = getSavedReports(); //
// const kodeYangDicari = "3T-2026-1234567"; //
// const laporan = reports.find(function (item) {
//     return item.code === kodeYangDicari;
// });
//
// if (laporan) {
//     console.log("Status:", laporan.status);
// } else {
//     console.log("Laporan tidak ditemukan.");
// }



// Cek Status Laporan
// Data berasal dari From Laporan yang disimpan di Supabase
const dataContoh = [
    {
        kode: "3T-2026-1842",
        judul: "Kerusakan atap ruang kelas",
        lokasi: "SD Negeri 4 Alor · Nusa Tenggara Timur",
        status: "diproses",
        tanggalVerifikasi: "23 Oktober, 08:42",
        tanggalProses: "Estimasi 3–5 hari kerja",
        tanggalSelesai: "Menunggu tindak lanjut",
        catatan: "Laporan telah diverifikasi dan sedang diproses oleh dinas terkait."
    }
];
// Simpan data contoh hanya jika belum ada data.
if (!localStorage.getItem("dataLaporan")) {
    localStorage.setItem("dataLaporan", JSON.stringify(dataContoh));
}

// Mengambil Element HTML
const formCekStatus = document.getElementById("formCekStatus");
const inputKode = document.getElementById("kodeLaporan");

const modalStatus = document.getElementById("modalStatus");
const btnClose = document.getElementById("btnClose");

const pesanError = document.getElementById("pesanError");

// Mengambil Data Laporan
function ambilDataLaporan() {
    const data = localStorage.getItem("dataLaporan");
    return data ? JSON.parse(data) : [];
}

// Mencari Laporan Berdasarkan Kode Unik
formCekStatus.addEventListener("submit", function(event) {
    // Mencegah halaman melakukan refresh
    event.preventDefault();

    // Mengambil kode dari input
    const kode = inputKode.value.trim().toUpperCase();

    // Menghilangkan pesan error sebelumnya
    pesanError.textContent = "";

    // Mengambil seluruh data laporan
    const dataLaporan = ambilDataLaporan();

    // Mencari kode yang sesuai
    const laporan = dataLaporan.find(function(item) {

        return item.kode.toUpperCase() === kode;
    });


    // Jika laporan ditemukan
    if (laporan) {
        tampilkanStatus(laporan);
    } else {
        // Jika kode tidak ditemukan
        pesanError.textContent =
            "Kode laporan tidak ditemukan. Periksa kembali kode Anda.";
        modalStatus.classList.remove("show");
        modalStatus.setAttribute("aria-hidden", "true");
    }
});

// Menampilkan Modal Status
function tampilkanStatus(laporan) {
    // Mengisi informasi laporan
    document.getElementById("hasilKode").textContent =
        laporan.kode;

    document.getElementById("judulLaporan").textContent =
        laporan.judul;

    document.getElementById("lokasiLaporan").textContent =
        laporan.lokasi;

    document.getElementById("hasilStatus").textContent =
        laporan.status === "selesai" ? "Selesai" :
        laporan.status === "diproses" ? "Diproses" :
        laporan.status === "terverifikasi" ? "Terverifikasi" :
        "Menunggu Verifikasi";

    document.getElementById("tanggalVerifikasi").textContent =
        laporan.tanggalVerifikasi;

    document.getElementById("tanggalProses").textContent =
        laporan.tanggalProses;

    document.getElementById("tanggalSelesai").textContent =
        laporan.tanggalSelesai;

    document.getElementById("catatanLaporan").textContent =
        laporan.catatan;


    // Mengubah tampilan timeline
    aturTimeline(laporan.status);


    // Mengatur warna badge
    const badge = document.getElementById("statusBadge");

    if (laporan.status === "selesai") {

        badge.style.background = "#e2f7ee";
        badge.style.color = "#07845e";

    } else if (laporan.status === "terverifikasi") {

        badge.style.background = "#e5f0ff";
        badge.style.color = "#2563a6";

    } else {

        badge.style.background = "#fff5d9";
        badge.style.color = "#9b6200";
    }

    // Menampilkan modal
    modalStatus.classList.add("show");
    modalStatus.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    btnClose.focus();
}

// Membuat Timeline Berdasarkan Status
function aturTimeline(status) {
    const tahap1 = document.getElementById("tahap1");
    const tahap2 = document.getElementById("tahap2");
    const tahap3 = document.getElementById("tahap3");

    // Menghapus semua class sebelumnya
    [tahap1, tahap2, tahap3].forEach(function(tahap) {
        tahap.classList.remove("completed", "active");
    });


    if (status === "menunggu") {
        tahap1.classList.add("active");
    }
    else if (status === "terverifikasi") {
        tahap1.classList.add("completed");
        tahap2.classList.add("active");
    }
    else if (status === "diproses") {
        tahap1.classList.add("completed");
        tahap2.classList.add("active");
    }

    else if (status === "selesai") {
        tahap1.classList.add("completed");
        tahap2.classList.add("completed");
        tahap3.classList.add("completed");
    }
}

// Menutup Modal
function tutupModal() {
    modalStatus.classList.remove("show");
    modalStatus.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}


// Tombol X
btnClose.addEventListener("click", tutupModal);

// Jika klik area luar modal
modalStatus.addEventListener("click", function(event) {
    if (event.target === modalStatus) {
        tutupModal();
    }
});


// Tombol ESC pada keyboard
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" &&
        modalStatus.classList.contains("show")) {
        tutupModal();
    }
});
