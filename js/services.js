/**
 * TechNova - Services Category Filtering
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.service-item');
  const grid = document.getElementById('services-grid') || document.querySelector('.services-grid') || (serviceCards.length ? serviceCards[0].parentElement : null);

  let emptyState = document.getElementById('services-empty-state');
  if (!emptyState && grid) {
    emptyState = document.createElement('div');
    emptyState.id = 'services-empty-state';
    emptyState.style.cssText = 'display: none; text-align: center; padding: 3rem 1.5rem; grid-column: 1 / -1; color: var(--text-muted); width: 100%;';
    emptyState.innerHTML = '<p style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem;">No services found</p><p style="font-size: 0.9rem;">No services match the selected category filter.</p>';
    grid.appendChild(emptyState);
  }

  if (!filterBtns.length || !serviceCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      let visibleCount = 0;

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });
});
