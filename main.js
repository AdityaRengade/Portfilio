// Navbar scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);
});

// Mobile menu toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// Close mobile menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
  });
});

// Scroll reveal animations
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  reset: true
});

// Apply scroll reveal to elements
sr.reveal('.home-content, .heading', { origin: 'left' });
sr.reveal('.home-img, .about-img', { origin: 'right' });
sr.reveal('.about-content, .projects-container, .contact-form', { origin: 'bottom' });
sr.reveal('.project-card', { interval: 200 });

// Typewriter effect for home content
const typed = new Typed('.home-content h3', {
  strings: ['Frontend Developer', 'UI/UX Designer', 'Web Designer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Form submission handling is in form.js