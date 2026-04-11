const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('main-nav');
if (menuToggle && navbar) {
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  navbar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navbar.classList.remove('open');
    });
  });
}

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

if (sections.length && navLinks.length) {
  const setActive = () => {
    let current = '';
    const threshold = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (threshold >= top && threshold < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('active', isActive);
    });
  };

  window.addEventListener('scroll', setActive);
  setActive();
}
