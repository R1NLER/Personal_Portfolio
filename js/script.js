/* Toggle Icon Navbar */
const currentYear = new Date().getFullYear();
document.querySelectorAll('.footer-text p').forEach((copyright) => {
    copyright.innerHTML = `Copyright &copy; ${currentYear}`;
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Scroll */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove Navbar Onclick */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove ('active');
};

/* Scroll Reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, .portfolio-shell', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* Portfolio Tabs */
const projectTabs = document.querySelectorAll('.portfolio-tab');
const projectPanels = document.querySelectorAll('.project-panel');
const projectControls = document.querySelectorAll('.portfolio-control');
const progressBar = document.querySelector('.portfolio-progress-bar');

if (projectTabs.length && projectPanels.length) {
    const projectOrder = Array.from(projectTabs).map((tab) => tab.dataset.project);
    let currentProjectIndex = 0;

    const activateProject = (projectId) => {
        projectTabs.forEach((tab) => {
            const isActive = tab.dataset.project === projectId;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        projectPanels.forEach((panel) => {
            const isActive = panel.id === projectId;
            panel.classList.toggle('active', isActive);
            panel.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        });

        if (progressBar) {
            progressBar.style.width = `${100 / projectOrder.length}%`;
            progressBar.style.transform = `translateX(${currentProjectIndex * 100}%)`;
        }
    };

    projectTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentProjectIndex = index;
            activateProject(tab.dataset.project);
        });
    });

    projectControls.forEach((button) => {
        button.addEventListener('click', () => {
            const direction = button.dataset.direction === 'next' ? 1 : -1;
            currentProjectIndex = (currentProjectIndex + direction + projectOrder.length) % projectOrder.length;
            activateProject(projectOrder[currentProjectIndex]);
        });
    });

    activateProject(projectOrder[currentProjectIndex]);
}

/* Animated Text */
const typed = new Typed('.multiple-text', {
    strings: ['Técnico Informático', 'Desarrollador Web', 'SysAdmin', 'Programador'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
