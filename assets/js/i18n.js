/* ── i18n: language switcher ── */
function getVal(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj);
}

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getVal(t, el.dataset.i18n);
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = getVal(t, el.dataset.i18nHtml);
    if (val !== undefined) el.innerHTML = val;
  });

  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === lang)
  );
  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => applyLang(btn.dataset.lang))
);

applyLang(localStorage.getItem('lang') || 'en');
