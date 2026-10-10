/**
 * TechNova - Careers & Job Filtering
 */

document.addEventListener('DOMContentLoaded', () => {
  const departmentFilter = document.getElementById('department-filter');
  const typeFilter = document.getElementById('type-filter');
  const jobCards = document.querySelectorAll('.job-item');
  const grid = document.getElementById('jobs-grid');

  let emptyState = document.getElementById('jobs-empty-state');
  if (!emptyState && grid) {
    emptyState = document.createElement('div');
    emptyState.id = 'jobs-empty-state';
    emptyState.style.cssText = 'display: none; text-align: center; padding: 3rem 1.5rem; grid-column: 1 / -1; color: var(--text-muted); width: 100%;';
    emptyState.innerHTML = '<p style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem;">No open positions found</p><p style="font-size: 0.9rem;">No job openings currently match your department and employment type criteria.</p>';
    grid.appendChild(emptyState);
  }

  function applyJobFilters() {
    if (!jobCards.length) return;

    const deptVal = departmentFilter ? departmentFilter.value : 'all';
    const typeVal = typeFilter ? typeFilter.value : 'all';
    let visibleCount = 0;

    jobCards.forEach(card => {
      const cardDept = card.getAttribute('data-department');
      const cardType = card.getAttribute('data-type');

      const matchesDept = (deptVal === 'all' || cardDept === deptVal);
      const matchesType = (typeVal === 'all' || cardType === typeVal);

      if (matchesDept && matchesType) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (departmentFilter) departmentFilter.addEventListener('change', applyJobFilters);
  if (typeFilter) typeFilter.addEventListener('change', applyJobFilters);
});
