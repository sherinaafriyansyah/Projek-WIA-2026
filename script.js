document.addEventListener("DOMContentLoaded", () => {
    // --- 1. NAVIGASI TOGGLE ---
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("Navigasi");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // --- 2. MODAL LAPORAN ---
    const overlay = document.getElementById("overlay");
    const btnCancel = document.getElementById("cancel");
    const btnSend = document.getElementById("send");
    const toast = document.getElementById("toast");

    const btnOpenLaporNav = document.getElementById("open-lapor-nav");
    const btnOpenLaporHero = document.getElementById("open-lapor-hero");
    const btnOpenLaporMenu = document.getElementById("open-lapor-menu");

    function openModal(e) {
        if (e) e.preventDefault();
        overlay.classList.add("active");
    }

    function closeModal() {
        overlay.classList.remove("active");
    }

    if (btnOpenLaporNav) btnOpenLaporNav.addEventListener("click", openModal);
    if (btnOpenLaporHero) btnOpenLaporHero.addEventListener("click", openModal);
    if (btnOpenLaporMenu) btnOpenLaporMenu.addEventListener("click", openModal);

    if (btnCancel) {
        btnCancel.addEventListener("click", closeModal);
    }

    // Aksi Kirim Laporan
    if (btnSend) {
        btnSend.addEventListener("click", () => {
            const schoolName = document.getElementById("school").value;
            const desc = document.getElementById("desc").value;

            if (!schoolName || !desc) {
                alert("Harap isi semua kolom!");
                return;
            }

            closeModal();
            showToast("Laporan berhasil terkirim!");

            document.getElementById("school").value = "";
            document.getElementById("desc").value = "";
        });
    }

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    // --- 3. CAROUSEL / SLIDER GAMBAR ---
    const sliderContainer = document.getElementById("sliderContainer");
    const slides = document.querySelectorAll(".slide-content");
    const prevSlideBtn = document.getElementById("prevSlide");
    const nextSlideBtn = document.getElementById("nextSlide");
    const dots = document.querySelectorAll(".slider-dots .dot");

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlider(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        if (sliderContainer) {
            sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    if (nextSlideBtn) {
        nextSlideBtn.addEventListener("click", () => {
            updateSlider(currentIndex + 1);
        });
    }

    if (prevSlideBtn) {
        prevSlideBtn.addEventListener("click", () => {
            updateSlider(currentIndex - 1);
        });
    }

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const slideIndex = parseInt(e.target.getAttribute("data-index"));
            updateSlider(slideIndex);
        });
    });

    // Auto Slide setiap 4 detik
    setInterval(() => {
        updateSlider(currentIndex + 1);
    }, 4000);
});