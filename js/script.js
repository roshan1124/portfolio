/* =========================================
   Roshan Vadapalli — Portfolio Script
   Features:
   1. Sticky navbar shadow on scroll
   2. Mobile menu toggle
   3. Active nav link on scroll
   4. Smooth close menu on link click
   5. Back-to-top button
   6. Fade-in on scroll (IntersectionObserver)
   7. Contact form (front-end only)
   8. Auto current year in footer
========================================= */


// ====== Cache elements ======
const navbar      = document.getElementById("navbar");
const menuToggle  = document.getElementById("menuToggle");
const navLinks    = document.getElementById("navLinks");
const backToTop   = document.getElementById("backToTop");
const yearEl      = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formStatus  = document.getElementById("formStatus");
const navAnchors  = document.querySelectorAll(".nav-link");
const sections    = document.querySelectorAll("section[id]");


// ====== 1 & 5. Navbar shadow + Back to top on scroll ======
function handleScroll() {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
    backToTop.classList.add("visible");
  } else {
    navbar.classList.remove("scrolled");
    backToTop.classList.remove("visible");
  }
  setActiveNavLink();
}
window.addEventListener("scroll", handleScroll);


// ====== 2. Mobile menu toggle ======
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}


// ====== 4. Close menu when a link is clicked ======
navAnchors.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


// ====== 3. Highlight active nav link based on scroll ======
function setActiveNavLink() {
  const scrollPos = window.scrollY + 120; // offset for sticky navbar

  sections.forEach((section) => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navAnchors.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href === `#${id}`);
      });
    }
  });
}


// ====== 5. Back to top click ======
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ====== 8. Footer year ======
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


// ====== Additional: Smooth scroll for all anchor links ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// ====== Initial call to set active link on page load ======
setTimeout(() => {
  setActiveNavLink();
  handleScroll();
}, 100);


// FASTER animation
const revealElements = document.querySelectorAll('.project-card, .skill-card');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 50);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.05}s`;
  revealObserver.observe(el);
});