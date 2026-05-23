/* ═══════════════════════════════════════════════
   script.js — Syed Hamzah Portfolio
   ═══════════════════════════════════════════════ */

// ─── Theme Toggle ────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const html        = document.documentElement;

// Load saved preference (default: dark)
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ─── Mobile Menu ─────────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen     = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
});

// Close menu when a mobile nav link is tapped
function closeMenu() {
  menuOpen = false;
  mobileMenu.classList.remove('open');
}

// ─── Scroll Fade-In ──────────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
