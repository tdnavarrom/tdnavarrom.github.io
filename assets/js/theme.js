/* ── Theme: auto light (7am–9pm) / dark (night), manual toggle for session ── */
const themeToggle = document.getElementById('themeToggle');
const htmlEl      = document.documentElement;

function autoTheme() {
  const h = new Date().getHours();
  return (h >= 7 && h < 21) ? 'light' : 'dark';
}

htmlEl.setAttribute('data-theme', autoTheme());

themeToggle.addEventListener('click', () => {
  const next = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', next);
});
