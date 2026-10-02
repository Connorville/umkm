/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   CURRENT YEAR
========================================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    /*
        GANTI NOMOR INI DENGAN NOMOR WHATSAPP UMKM
        Format: 628xxxxxxxxxx
    */

    const whatsappNumber = "6281234567890";

    const whatsappMessage =
        `Halo LensaKita Studio,%0A%0A` +
        `Nama: ${name}%0A` +
        `No. WhatsApp: ${phone}%0A` +
        `Layanan: ${service}%0A%0A` +
        `Pesan:%0A${message}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

});


/* =========================================
   CLOSE MOBILE NAVBAR AFTER CLICK
========================================= */

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});


/* =========================================
   PORTFOLIO IMAGE PREVIEW
========================================= */

const galleryItems = document.querySelectorAll(".gallery-item");
const modalImage = document.getElementById("modalImage");
const imageModalElement = document.getElementById("imageModal");

const imageModal = new bootstrap.Modal(imageModalElement);

galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const image = item.querySelector("img");

        if (image) {

            modalImage.src = image.src;
            modalImage.alt = image.alt;

            imageModal.show();

        }

    });

});


/* =========================================
   SIMPLE REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".service-card, .pricing-card, .gallery-item, .testimonial-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});

