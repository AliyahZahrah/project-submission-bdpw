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

// Mengambil semua tombol dengan class "read-more-button" untuk menangani klik pada tombol "Read More"
const readMoreButtons = document.querySelectorAll(".read-more-button"); // Corrected selector

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
