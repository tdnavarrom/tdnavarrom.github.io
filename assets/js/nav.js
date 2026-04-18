/* ================================================================
   nav.js — Navigation: mobile drawer, scroll progress, active link
   ================================================================ */

// --- Mobile drawer ---------------------------------------------------
// The hamburger button (☰) shows/hides a full-width link drawer on mobile.
// The semi-transparent overlay behind the drawer closes it when tapped.
const hamburger     = document.getElementById('hamburger');
const drawer        = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawerOverlay');

function openDrawer() {
  drawer.classList.add('open');
  drawerOverlay.classList.add('open');
  // Animate hamburger icon (three bars → ✕)
  hamburger.classList.add('open');
  // Tell screen readers the menu is now expanded
  hamburger.setAttribute('aria-expanded', 'true');
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

// Toggle on hamburger click
hamburger.addEventListener('click', () =>
  drawer.classList.contains('open') ? closeDrawer() : openDrawer()
);

// Close when the user taps the dark overlay outside the drawer
drawerOverlay.addEventListener('click', closeDrawer);

// Close when any drawer link is clicked (smooth-scrolls to section)
document.querySelectorAll('.drawer-link').forEach(l => l.addEventListener('click', closeDrawer));


// --- Scroll progress bar ---------------------------------------------
// A thin blue line at the bottom of the nav that fills as you scroll.
const progressBar = document.getElementById('navProgress');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  // Total scrollable distance = full page height minus the viewport height
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
}, { passive: true }); // passive: true tells the browser we won't call preventDefault(), allowing smoother scrolling


// --- Active nav link highlight on scroll ----------------------------
// Uses IntersectionObserver to detect which section is currently visible
// and adds the "active" class to the matching nav link.
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Remove active from all links, then highlight the one matching this section
    navLinks.forEach(l => l.classList.remove('active'));
    const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
    if (active) active.classList.add('active');
  });
}, {
  threshold: 0.35,          // section must be 35% visible to trigger
  rootMargin: '-10% 0px -55% 0px' // shrinks the detection zone so the link activates
                                   // when the section is near the top of the viewport
});

sections.forEach(s => observer.observe(s));
