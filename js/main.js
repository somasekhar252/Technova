/**
 * TechNova Corporate IT Website - Main JavaScript
 * Handles Global Navigation, Scroll Effects, Animated Counters, Accordions, and Modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimatedCounters();
  initAccordions();
  initModals();
  initNewsletterForm();
});

/**
 * Navigation & Mobile Toggle logic
 */
function initNavigation() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('is-active');
      navMenu.classList.toggle('is-active');
      const expanded = mobileToggle.classList.contains('is-active');
      mobileToggle.setAttribute('aria-expanded', expanded);
    });

    // Close mobile nav when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('is-active');
        navMenu.classList.remove('is-active');
      });
    });
  }

  // Active state matching current filename
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Animated statistics counters on scroll into view
 */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const observerOptions = {
    threshold: 0.5
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const prefix = counter.getAttribute('data-prefix') || '';
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 1800; // ms
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          // Ease-out cubic formula
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentCount = Math.floor(easeOut * target);

          counter.textContent = `${prefix}${currentCount.toLocaleString()}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
          }
        };

        requestAnimationFrame(updateCount);
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(counter => counterObserver.observe(counter));
}

/**
 * FAQ Accordion logic
 */
function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    const item = header.parentElement;
    const initialOpen = item ? item.classList.contains('is-open') : false;
    header.setAttribute('aria-expanded', initialOpen ? 'true' : 'false');

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Optional: close other accordion items in same accordion container
      const parent = item.parentElement;
      if (parent && parent.classList.contains('accordion-single')) {
        parent.querySelectorAll('.accordion-item').forEach(sibling => {
          sibling.classList.remove('is-open');
          const sibHeader = sibling.querySelector('.accordion-header');
          if (sibHeader) sibHeader.setAttribute('aria-expanded', 'false');
        });
      }

      if (!isOpen) {
        item.classList.add('is-open');
        header.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('is-open');
        header.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/**
 * Global Modal handlers
 */
function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal-target');
      const modal = document.getElementById(modalId);
      if (modal) {
        openModal(modal);
      }
    });
  });

  const closeButtons = document.querySelectorAll('.modal-close, .modal-backdrop');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
    });
  });

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModals = document.querySelectorAll('.modal.is-open');
      openModals.forEach(modal => closeModal(modal));
    }
  });
}

function openModal(modal) {
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
}

/**
 * Global Newsletter Signup Form
 */
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const alertBox = form.nextElementSibling;
      
      if (emailInput && emailInput.value.trim() !== '') {
        if (alertBox && alertBox.classList.contains('form-alert')) {
          alertBox.className = 'form-alert alert-success';
          alertBox.textContent = 'Thank you for subscribing to TechNova insights!';
          alertBox.style.display = 'block';
        } else {
          alert('Thank you for subscribing to TechNova insights!');
        }
        emailInput.value = '';
      }
    });
  });
}
