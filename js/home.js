const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('open', !open);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    menu.focus();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();

// Keep the navigation in sync with the current section of the landing page.
const sectionGroups = [
  ['home', 'home'], ['about', 'about'], ['services', 'services'],
  ['sistemas', 'services'], ['desarrollo', 'services'], ['portfolio', 'portfolio'],
  ['projects', 'projects'], ['formacion', 'formacion'], ['contact', 'contact']
].map(([id, group]) => ({ section: document.getElementById(id), group }))
 .filter(item => item.section);
const sectionLinks = Array.from(navigation.querySelectorAll('a[href^="#"]'));
function updateCurrentSection() {
  if (!sectionGroups.length) return;
  const headerHeight = document.querySelector('.header').offsetHeight;
  const threshold = headerHeight + Math.min(window.innerHeight * 0.25, 180);
  let active = sectionGroups[0].group;
  sectionGroups.forEach(({section, group}) => {
    if (section.getBoundingClientRect().top <= threshold) active = group;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) active = 'contact';
  sectionLinks.forEach(link => {
    if (link.getAttribute('href') === `#${active}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
if (sectionGroups.length && sectionLinks.length) {
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(() => { updateCurrentSection(); scheduled = false; });
    }
  }, { passive: true });
  window.addEventListener('resize', updateCurrentSection);
  window.addEventListener('load', updateCurrentSection);
  updateCurrentSection();
}
