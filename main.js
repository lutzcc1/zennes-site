// ── DOM References ──────────────────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const nav = document.getElementById('nav');
const revealElements = document.querySelectorAll('.reveal');

// ── Scroll Reveal (IntersectionObserver) ────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ── Case Study Number Pop Animation ──────────────────────────
const numberElements = document.querySelectorAll('.case-study__number[data-animate]');

const numberObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, index * 150);
        numberObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

numberElements.forEach((el) => numberObserver.observe(el));

// ── Mobile Hamburger Toggle ─────────────────────────────────
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.addEventListener('click', (e) => {
  if (e.target.closest('.nav__link')) {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// ── Smooth Scroll with Sticky Nav Offset ────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const navHeight = nav.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});
