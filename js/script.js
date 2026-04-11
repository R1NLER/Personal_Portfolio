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
const navLinks = document.querySelectorAll('header nav a[href^="#"]');

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  const header = document.querySelector('header');
  if (header) header.classList.toggle('sticky', window.scrollY > 80);

  if (menuIcon && navbar) {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
};

if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal({
    reset: false,
    distance: '40px',
    duration: 900,
    delay: 100,
  });

  ScrollReveal().reveal('.home-content, .heading, .contact-card', { origin: 'top' });
  ScrollReveal().reveal('.services-box, .portfolio-box', { origin: 'bottom', interval: 120 });
  ScrollReveal().reveal('.about-content', { origin: 'left' });
}

if (document.querySelector('.multiple-text') && typeof Typed !== 'undefined') {
  new Typed('.multiple-text', {
    strings: ['Desarrollador Web', 'Administrador de Sistemas'],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1100,
    loop: true,
  });
}
