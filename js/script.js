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
      navLinks.forEach((link) => link.classList.remove('active'));
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  const header = document.querySelector('header');
  if (header) header.classList.toggle('sticky', window.scrollY > 60);

  if (menuIcon && navbar) {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
};

if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal({
    distance: '40px',
    duration: 900,
    delay: 100,
    reset: false
  });

  ScrollReveal().reveal('.home-content, .heading, .contact p', { origin: 'top' });
  ScrollReveal().reveal('.hero-metrics, .services-box, .value-card, .portfolio-box', { origin: 'bottom' });
}

if (typeof Typed !== 'undefined' && document.querySelector('.multiple-text')) {
  new Typed('.multiple-text', {
    strings: ['SysAdmin', 'desarrollador web', 'técnico informático'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1400,
    loop: true
  });
}
