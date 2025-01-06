// JavaScript for interactive header and hamburger menu

// Select elements
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  // Toggle the navigation menu on hamburger click
  hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
  });

  // Close the navigation menu when clicking outside
  document.addEventListener('click', (event) => {
      if (!hamburger.contains(event.target) && !nav.contains(event.target)) {
          nav.classList.remove('active');
      }
  });

  // Add scroll effect to header
  window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });

  // Vision section content visibility
  const visionContent = document.querySelector('.vision-content');
  window.addEventListener('scroll', () => {
      const rect = visionContent.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
          visionContent.classList.add('visible');
      }
  });

  // Add hover effects for navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
          link.style.color = '#e63946';
      });
      link.addEventListener('mouseleave', () => {
          link.style.color = '#333';
      });
  });
});
