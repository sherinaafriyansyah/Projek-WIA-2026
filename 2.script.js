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




// ---------------------- Data Grafik Anggaran
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

