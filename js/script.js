const year = new Date().getFullYear();
const copyright = document.querySelector('#copyright');
if (copyright) {
  copyright.textContent = `Copyright © ${year} Gonzalo Victoria`;
}

const menuToggle = document.querySelector('#menu-toggle');
const siteNav = document.querySelector('#site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => siteNav.classList.remove('open'));
  });
}
