const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav a[href^="#"]');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}

window.addEventListener('scroll', () => {
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 20);
    }

    const scrollPosition = window.scrollY + 180;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});
