/* Footer year */
const currentYear = new Date().getFullYear();
document.querySelectorAll('.footer-text p').forEach((copyright) => {
    copyright.innerHTML = `Copyright &copy; ${currentYear}`;
});

/* Toggle Icon Navbar */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

/* Scroll */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav a[href*='${id}']`);
            if (activeLink) activeLink.classList.add('active');
        }
    });

    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

/* Scroll Reveal */
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .hero-card, .heading', { origin: 'top' });
    ScrollReveal().reveal('.portfolio-shell, .services-container', { origin: 'bottom' });
    ScrollReveal().reveal('.about-content', { origin: 'left' });
}

/* Animated Text */
if (typeof Typed !== 'undefined' && document.querySelector('.multiple-text')) {
    new Typed('.multiple-text', {
        strings: ['Administrador de Sistemas', 'Fullstack Developer', 'Cloud & Networking', 'Automatización IT'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}
