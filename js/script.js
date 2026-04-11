const year = new Date().getFullYear();
const copyright = document.querySelector('#copyright');
if (copyright) {
  copyright.textContent = `© ${year} Gonzalo Victoria. Portfolio profesional.`;
}

const toggle = document.querySelector('#menu-toggle');
const nav = document.querySelector('#main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}
