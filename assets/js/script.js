// Mengambil elemen tombol dengan id 'drawer-button' untuk digunakan sebagai pemicu menu navigasi
const drawerButton = document.getElementById('drawer-button');

// Mengambil elemen menu navigasi dengan id 'nav-menu' yang akan ditampilkan atau disembunyikan
const navMenu = document.getElementById('nav-menu');

// Pastikan elemen ditemukan sebelum menambahkan event listener
if (drawerButton && navMenu) {
    drawerButton.addEventListener('click', () => {
        // Mengubah (toggle) kelas 'active' pada elemen menu navigasi untuk menampilkan atau menyembunyikannya
        navMenu.classList.toggle('active');

        // Mengambil elemen ikon di dalam tombol menu
        const icon = drawerButton.querySelector('ion-icon');

        // Jika menu navigasi aktif (terlihat), ikon tombol akan berubah menjadi 'close'
        if (navMenu.classList.contains('active')) {
            icon.setAttribute('name', 'close');
        } 
        // Jika menu navigasi tidak aktif (tersembunyi), ikon tombol akan berubah kembali menjadi 'menu'
        else {
            icon.setAttribute('name', 'menu');
        }
    });
}

// Mengambil elemen dengan class "menu-toggle" yang berfungsi sebagai tombol untuk menampilkan atau menyembunyikan menu
const menuToggle = document.querySelector(".menu-toggle");

// Mengambil elemen dengan class "nav-links" yang berisi daftar menu navigasi
const navLinks = document.querySelector(".nav-links");

// Pastikan elemen ditemukan sebelum menambahkan event listener
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        // Mengubah (toggle) kelas 'active' pada elemen menu navigasi
        navLinks.classList.toggle("active");

        // Jika menu dalam keadaan aktif (terlihat), maka atur opacity dan posisi transisi agar tampak lebih smooth
        if (navLinks.classList.contains("active")) {
            navLinks.style.opacity = "1";
            navLinks.style.transform = "translateY(0)";
        } 
        // Jika menu tidak aktif (tersembunyi), ubah opacity dan geser posisi sedikit ke atas
        else {
            navLinks.style.opacity = "0";
            navLinks.style.transform = "translateY(-10px)";
        }
    });
}

// Mengambil semua tombol dengan class "read-more" untuk menangani klik pada tombol "Read More"
const readMoreButtons = document.querySelectorAll(".read-more");

// Pastikan tombol "Read More" ada sebelum menambahkan event listener
if (readMoreButtons.length > 0) {
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            // Mencegah perilaku default dari link (agar tidak langsung melompat)
            e.preventDefault();

            // Mengambil nilai atribut 'href' dari tombol yang ditekan (menunjuk ke elemen target)
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            // Pastikan elemen target ditemukan sebelum melakukan scroll
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
}