/* ================================================================
   i18n.js — Internationalisation (language switcher: EN / ES / FR)
   ================================================================ */

// Reads a value from a nested object using a dot-separated path string.
// e.g. getVal(t, "nav.home") is equivalent to t.nav.home
// The optional chaining (?.) means it returns undefined instead of throwing
// if an intermediate key doesn't exist.
function getVal(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj);
}

// Maps each language to its compiled CV PDF, published by the
// TomasNavarro_CV repo's build-and-publish workflow.
const cvByLang = {
  en: 'assets/cv/cv.pdf',
  es: 'assets/cv/cv_es.pdf',
  fr: 'assets/cv/cv_fr.pdf',
};

// Swaps all translatable text on the page to the given language code.
// Relies on two HTML attributes:
//   data-i18n="some.key"      → sets el.textContent (plain text)
//   data-i18n-html="some.key" → sets el.innerHTML   (allows HTML tags like <br>, <strong>)
function applyLang(lang) {
  const t = translations[lang]; // look up the translation object (see translations.js)
  if (!t) return;               // silently ignore unknown language codes

  // Point the CV download button at the PDF matching the selected language
  const cvLink = document.getElementById('cv-download-link');
  if (cvLink && cvByLang[lang]) cvLink.href = cvByLang[lang];

  // Plain-text replacements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getVal(t, el.dataset.i18n);
    if (val !== undefined) el.textContent = val;
  });

  // HTML replacements (used for subtitles that contain <br> or <strong>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = getVal(t, el.dataset.i18nHtml);
    if (val !== undefined) el.innerHTML = val;
  });

  // Update the <html lang="..."> attribute for accessibility / SEO
  document.documentElement.lang = lang;

  // Highlight the active language button in both the desktop nav and mobile drawer
  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === lang)
  );

  // Persist the choice so the correct language loads on next visit
  localStorage.setItem('lang', lang);
}

// Wire up every language button (both desktop nav and mobile drawer)
document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => applyLang(btn.dataset.lang))
);

// On load: use the previously saved language, or default to English
applyLang(localStorage.getItem('lang') || 'en');
