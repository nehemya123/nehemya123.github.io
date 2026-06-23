// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}

// Smooth Reveal Animation
const revealElements = document.querySelectorAll(
  ".section, .project-card, .timeline-item"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => observer.observe(el));

// Typing Effect
const phrases = [
  "Building software that solves real problems.",
  "Exploring AI, Cybersecurity, and Cloud Computing.",
  "Always learning. Always building."
];

const typingElement = document.getElementById("typed");

if (typingElement) {
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {
      typingElement.textContent =
        currentPhrase.substring(0, charIndex++);
    } else {
      typingElement.textContent =
        currentPhrase.substring(0, charIndex--);
    }

    let speed = deleting ? 40 : 70;

    if (!deleting && charIndex === currentPhrase.length + 1) {
      deleting = true;
      speed = 1800;
    }

    if (deleting && charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(type, speed);
  }

  type();
}

// Current Year Auto Update
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

