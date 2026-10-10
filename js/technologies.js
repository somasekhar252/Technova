/**
 * TechNova - Technologies Stack Filtering
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.tech-filter-btn');
  const techCards = document.querySelectorAll('.tech-item');

  if (!filterBtns.length || !techCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      techCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
