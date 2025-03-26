
mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Login Modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const modalClose = document.getElementById('modalClose');

loginBtn.addEventListener('click', () => {
  loginModal.classList.add('active');
});

modalClose.addEventListener('click', () => {
  loginModal.classList.remove('active');
});

// Scrolling Content for Each Section
const scrollingContentApplications = document.getElementById('scrollingContentApplications');
const scrollingContentFeatures = document.getElementById('scrollingContentFeatures');
const scrollingContentProcess = document.getElementById('scrollingContentProcess');

// Add horizontal scrolling functionality to each section
[scrollingContentApplications, scrollingContentFeatures, scrollingContentProcess].forEach((scrollingContent) => {
  scrollingContent.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollingContent.scrollBy({
      left: e.deltaY < 0 ? -100 : 100,
      behavior: 'smooth'
    });
  });
});

// Scroll Animation
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});