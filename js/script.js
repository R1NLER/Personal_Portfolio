const menuButton = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar');
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('main section[id]');
const header = document.querySelector('.header');
const yearNode = document.querySelector('#current-year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuButton && navbar) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navbar.classList.toggle('active');
  });
}

const setActiveLink = () => {
  const scrollPosition = window.scrollY + 180;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPosition >= top && scrollPosition < top + height) {
      navLinks.forEach((link) => link.classList.remove('active'));
      const active = document.querySelector(`.navbar a[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  });

  if (header) {
    header.classList.toggle('sticky', window.scrollY > 24);
  }
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navbar) navbar.classList.remove('active');
    if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
  });
});
