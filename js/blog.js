/**
 * TechNova - Blog Search & Category Filtering
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('blog-search');
  const filterBtns = document.querySelectorAll('.blog-filter-btn');
  const blogCards = document.querySelectorAll('.blog-item');
  const grid = document.getElementById('blog-grid') || (blogCards.length ? blogCards[0].parentElement : null);

  let emptyState = document.getElementById('blog-empty-state');
  if (!emptyState && grid) {
    emptyState = document.createElement('div');
    emptyState.id = 'blog-empty-state';
    emptyState.style.cssText = 'display: none; text-align: center; padding: 3rem 1.5rem; grid-column: 1 / -1; color: var(--text-muted); width: 100%;';
    emptyState.innerHTML = '<p style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem;">No articles found</p><p style="font-size: 0.9rem;">No articles match your search keywords or topic category.</p>';
    grid.appendChild(emptyState);
  }

  let activeCategory = 'all';

  function filterPosts() {
    if (!blogCards.length) return;
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;

    blogCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const title = card.querySelector('.blog-title') ? card.querySelector('.blog-title').textContent.toLowerCase() : '';
      const snippet = card.querySelector('.blog-snippet') ? card.querySelector('.blog-snippet').textContent.toLowerCase() : '';

      const matchesCat = (activeCategory === 'all' || category === activeCategory);
      const matchesSearch = (query === '' || title.includes(query) || snippet.includes(query));

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-filter');
        filterPosts();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterPosts);
  }
});
