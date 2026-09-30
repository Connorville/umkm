const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');

// Buka/tutup menu navigasi pada layar kecil.
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

// Tutup menu setelah pengguna memilih tautan.
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// Efek navbar ketika halaman digulir.
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Tahun otomatis pada footer.
document.getElementById('year').textContent = new Date().getFullYear();

// GANTI nomor di bawah dengan nomor WhatsApp bisnis Anda (kode negara 62, tanpa + atau 0 di depan).
const whatsappNumber = '6281234567890';
document.getElementById('whatsappLink').href =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo LensaKita, saya ingin bertanya tentang layanan fotografi.')}`;
