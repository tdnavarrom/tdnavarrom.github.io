/* ── Experience filter (All / Academic / Industry) ── */
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.timeline-item').forEach(item => {
      item.hidden = filter !== 'all' && item.dataset.expType !== filter;
    });
  });
});
