/**
 * TechNova - Portfolio / Case Study Filtering & Modal Preview
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const grid = document.getElementById('portfolio-grid');

  let emptyState = document.getElementById('portfolio-empty-state');
  if (!emptyState && grid) {
    emptyState = document.createElement('div');
    emptyState.id = 'portfolio-empty-state';
    emptyState.style.cssText = 'display: none; text-align: center; padding: 3rem 1.5rem; grid-column: 1 / -1; color: var(--text-muted); width: 100%;';
    emptyState.innerHTML = '<p style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem;">No case studies found</p><p style="font-size: 0.9rem;">No projects match the selected category. Try choosing another filter.</p>';
    grid.appendChild(emptyState);
  }

  if (filterBtns.length && portfolioItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        let visibleCount = 0;

        portfolioItems.forEach(item => {
          const category = item.getAttribute('data-category');
          const tech = item.getAttribute('data-tech') || '';
          
          if (filterValue === 'all' || category === filterValue || tech.includes(filterValue)) {
            item.style.display = 'flex';
            visibleCount++;
          } else {
            item.style.display = 'none';
          }
        });

        if (emptyState) {
          emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
        }
      });
    });
  }
});
