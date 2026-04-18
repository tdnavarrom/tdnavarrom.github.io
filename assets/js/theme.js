/* ================================================================
   theme.js — Light / dark theme with time-based auto-detection
   ================================================================ */

const themeToggle = document.getElementById('themeToggle');
const htmlEl      = document.documentElement; // <html> element holds data-theme="dark|light"

// Returns "light" during daytime hours (7am–9pm), "dark" at night.
// Called once on page load to set the initial theme automatically.
function autoTheme() {
  const h = new Date().getHours();
  return (h >= 7 && h < 21) ? 'light' : 'dark';
}

// Apply the auto theme immediately (before any paint to avoid a flash)
htmlEl.setAttribute('data-theme', autoTheme());

// Manual toggle: clicking the sun/moon icon flips between dark and light
// for the rest of the session (no persistence — auto resets on next visit).
themeToggle.addEventListener('click', () => {
  const next = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', next);
});
