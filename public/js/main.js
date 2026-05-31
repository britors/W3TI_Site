// ── Nav scroll ──────────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile menu ─────────────────────────────────────────────────────────
document.getElementById('navToggle').addEventListener('click', () => {
  document.querySelector('.nav-inner').classList.toggle('open');
});

// ── Scroll spy ──────────────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const spy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => spy.observe(s));

// ── Fade-in on scroll ────────────────────────────────────────────────────
const fadeEls = document.querySelectorAll(
  '.product-card, .diff-card, .contato-card, .oss-inner > *, .sobre-inner > *'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => fadeObserver.observe(el));

// ── Smooth close mobile menu on link click ───────────────────────────────
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelector('.nav-inner').classList.remove('open');
  });
});
