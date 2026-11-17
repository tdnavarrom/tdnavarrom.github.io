/* ================================================================
   certs.js — Tab filter for the Certifications & Training section.
   "All" shows both groups; the other tabs show only one group.
   ================================================================ */

const certTabs   = document.querySelectorAll('.cert-tab');
const certGroups = document.querySelectorAll('.cert-group');

certTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;

    certTabs.forEach(t => {
      const on = t === tab;
      t.classList.toggle('active', on);
      t.setAttribute('aria-pressed', on);
    });

    certGroups.forEach(g => {
      g.hidden = filter !== 'all' && g.dataset.group !== filter;
    });
  });
});
