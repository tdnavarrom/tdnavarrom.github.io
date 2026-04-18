/* ================================================================
   experience.js — Carousel for the experience section.
   Shows 2 cards at once; each arrow click slides exactly 1 card.
   Filter buttons hide/show cards and reset the carousel to start.
   ================================================================ */

const track    = document.getElementById('expTrack');
const prevBtn  = document.getElementById('expPrev');
const nextBtn  = document.getElementById('expNext');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentIndex = 0; // index of the leftmost visible card

/* How many cards fit in the viewport at once */
function perPage() {
  return window.innerWidth <= 600 ? 1 : 2;
}

/* Pixel distance to slide by one card (card width + gap) */
function slideAmount() {
  const card = track.querySelector('.exp-card:not([hidden])');
  if (!card) return 0;
  const gap = parseFloat(getComputedStyle(track).gap) || 20;
  return card.offsetWidth + gap;
}

/* Visible (non-hidden) cards */
function visibleCards() {
  return [...track.querySelectorAll('.exp-card:not([hidden])')];
}

/* Apply transform and update button states */
function goTo(index) {
  const cards = visibleCards();
  const maxIndex = Math.max(0, cards.length - perPage());
  currentIndex = Math.max(0, Math.min(index, maxIndex));

  track.style.transform = `translateX(-${currentIndex * slideAmount()}px)`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= maxIndex;
}

prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

/* Filter buttons — show/hide cards then reset carousel */
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    track.querySelectorAll('.exp-card').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.expType !== filter;
    });

    /* Jump to start instantly (no animation flash) */
    track.style.transition = 'none';
    track.offsetHeight; // force reflow
    track.style.transition = '';
    goTo(0);
  });
});

/* Touch / swipe support */
let touchStartX = 0;
track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
track.addEventListener('touchend',   e => {
  const dx = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(dx) > 40) dx > 0 ? goTo(currentIndex + 1) : goTo(currentIndex - 1);
});

/* Recalculate on resize (card widths change) */
window.addEventListener('resize', () => goTo(currentIndex));

/* Initial state */
goTo(0);
