/* ================================================================
   extracurricular.js — Carousel for the extracurricular section.
   Same behaviour as experience.js: 2 cards visible on desktop,
   1 on mobile; each arrow click slides exactly 1 card.
   ================================================================ */

const extTrack = document.getElementById('extTrack');
const extPrev  = document.getElementById('extPrev');
const extNext  = document.getElementById('extNext');

let extIndex = 0;

function extPerPage() {
  return window.innerWidth <= 600 ? 1 : 2;
}

function extSlideAmount() {
  const card = extTrack.querySelector('.exp-card');
  if (!card) return 0;
  const gap = parseFloat(getComputedStyle(extTrack).gap) || 20;
  return card.offsetWidth + gap;
}

function extGoTo(index) {
  const cards = [...extTrack.querySelectorAll('.exp-card')];
  const maxIndex = Math.max(0, cards.length - extPerPage());
  extIndex = Math.max(0, Math.min(index, maxIndex));

  extTrack.style.transform = `translateX(-${extIndex * extSlideAmount()}px)`;

  extPrev.disabled = extIndex === 0;
  extNext.disabled = extIndex >= maxIndex;
}

extPrev.addEventListener('click', () => extGoTo(extIndex - 1));
extNext.addEventListener('click', () => extGoTo(extIndex + 1));

/* Touch / swipe support */
let extTouchStartX = 0;
extTrack.addEventListener('touchstart', e => { extTouchStartX = e.touches[0].clientX; }, { passive: true });
extTrack.addEventListener('touchend',   e => {
  const dx = extTouchStartX - e.changedTouches[0].clientX;
  if (Math.abs(dx) > 40) dx > 0 ? extGoTo(extIndex + 1) : extGoTo(extIndex - 1);
});

window.addEventListener('resize', () => extGoTo(extIndex));

extGoTo(0);
