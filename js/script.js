const currentYear = new Date().getFullYear();
document.querySelectorAll('.footer-text p').forEach((copyright) => {
    copyright.innerHTML = `Copyright &copy; ${currentYear}`;
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 180;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
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

if (window.ScrollReveal) {
    ScrollReveal({
        reset: false,
        distance: '60px',
        duration: 1200,
        delay: 120
    });

    ScrollReveal().reveal('.home-content, .heading, .contact-card', { origin: 'top' });
    ScrollReveal().reveal('.services-container, .portfolio-box', { origin: 'bottom' });
    ScrollReveal().reveal('.about-content', { origin: 'left' });
}

if (document.querySelector('.multiple-text') && window.Typed) {
    new Typed('.multiple-text', {
        strings: ['SysAdmin', 'Desarrollador Web', 'Técnico IT orientado a negocio'],
        typeSpeed: 75,
        backSpeed: 45,
        backDelay: 1200,
        loop: true
    });
}
