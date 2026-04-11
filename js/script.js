const menuButton = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('main section[id]');
const footerText = document.querySelector('.footer-text');

if (footerText) {
  footerText.textContent = `Copyright © ${new Date().getFullYear()}`;
}

if (menuButton && navbar) {
  menuButton.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
}

const setActiveSection = () => {
  let currentId = 'home';

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < bottom) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('active', isActive);
  });
};

window.addEventListener('scroll', setActiveSection);
window.addEventListener('load', setActiveSection);

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbar?.classList.remove('open');
  });
});
