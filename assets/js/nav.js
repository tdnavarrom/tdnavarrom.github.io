/* ── Mobile drawer ── */
const hamburger     = document.getElementById('hamburger');
const drawer        = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawerOverlay');

function openDrawer() {
  drawer.classList.add('open');
  drawerOverlay.classList.add('open');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () =>
  drawer.classList.contains('open') ? closeDrawer() : openDrawer()
);
drawerOverlay.addEventListener('click', closeDrawer);
document.querySelectorAll('.drawer-link').forEach(l => l.addEventListener('click', closeDrawer));

/* ── Scroll progress bar ── */
const progressBar = document.getElementById('navProgress');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total    = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
}, { passive: true });

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(l => l.classList.remove('active'));
    const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
    if (active) active.classList.add('active');
  });
}, { threshold: 0.35, rootMargin: '-10% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));
