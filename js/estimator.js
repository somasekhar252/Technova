/**
 * TechNova - Project Cost Estimator & Multi-Step Enquiry Form Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initEstimator();
  initMultiStepForm();
});

const BASE_PRICES = {
  website: { min: 45000, max: 85000, minWeeks: 2, maxWeeks: 4, name: 'Corporate Website' },
  webapp: { min: 120000, max: 280000, minWeeks: 6, maxWeeks: 10, name: 'Web Application' },
  mobileapp: { min: 140000, max: 300000, minWeeks: 6, maxWeeks: 8, name: 'Mobile Application' },
  saas: { min: 220000, max: 480000, minWeeks: 10, maxWeeks: 14, name: 'SaaS Platform' },
  crm: { min: 250000, max: 550000, minWeeks: 12, maxWeeks: 16, name: 'CRM / ERP Solution' },
  automation: { min: 80000, max: 180000, minWeeks: 3, maxWeeks: 5, name: 'Automation System' },
  custom: { min: 180000, max: 400000, minWeeks: 8, maxWeeks: 12, name: 'Custom Enterprise Software' }
};

const FEATURE_PRICES = {
  auth: { min: 15000, max: 25000, weeks: 1, name: 'User Auth & RBAC' },
  dashboard: { min: 25000, max: 45000, weeks: 2, name: 'Admin Dashboard' },
  payment: { min: 15000, max: 30000, weeks: 1, name: 'Payment Gateway' },
  api: { min: 20000, max: 40000, weeks: 1.5, name: 'API Integrations' },
  notifications: { min: 12000, max: 20000, weeks: 1, name: 'Real-time Push/Email Alerts' },
  analytics: { min: 18000, max: 35000, weeks: 1, name: 'Advanced Analytics & Export' },
  multilang: { min: 15000, max: 25000, weeks: 1, name: 'Multi-language (i18n)' },
  appext: { min: 35000, max: 65000, weeks: 2, name: 'Companion Mobile App' }
};

function initEstimator() {
  const estimatorForm = document.getElementById('project-estimator-form');
  if (!estimatorForm) return;

  const typeRadios = estimatorForm.querySelectorAll('input[name="est_project_type"]');
  const featureCheckboxes = estimatorForm.querySelectorAll('input[name="est_features"]');
  const priceDisplay = document.getElementById('est-price-display');
  const durationDisplay = document.getElementById('est-duration-display');
  const featuresListDisplay = document.getElementById('est-selected-features-list');

  function calculateEstimate() {
    let selectedTypeKey = 'webapp';
    typeRadios.forEach(radio => {
      if (radio.checked) selectedTypeKey = radio.value;
    });

    const base = BASE_PRICES[selectedTypeKey] || BASE_PRICES.webapp;

    let totalMin = base.min;
    let totalMax = base.max;
    let totalMinWeeks = base.minWeeks;
    let totalMaxWeeks = base.maxWeeks;
    let selectedFeatures = [];

    featureCheckboxes.forEach(cb => {
      if (cb.checked) {
        const featKey = cb.value;
        const feat = FEATURE_PRICES[featKey];
        if (feat) {
          totalMin += feat.min;
          totalMax += feat.max;
          totalMinWeeks += feat.weeks;
          totalMaxWeeks += feat.weeks;
          selectedFeatures.push(feat.name);
        }
      }
    });

    // Format currency INR
    const formatINR = (val) => '₹' + Math.round(val).toLocaleString('en-IN');

    if (priceDisplay) {
      priceDisplay.textContent = `${formatINR(totalMin)} – ${formatINR(totalMax)}`;
    }

    if (durationDisplay) {
      durationDisplay.textContent = `Estimated Timeline: ${Math.round(totalMinWeeks)}–${Math.round(totalMaxWeeks)} Weeks`;
    }

    if (featuresListDisplay) {
      if (selectedFeatures.length === 0) {
        featuresListDisplay.innerHTML = '<li>Base Core Architecture Only</li>';
      } else {
        featuresListDisplay.innerHTML = selectedFeatures.map(f => `<li>✓ ${f}</li>`).join('');
      }
    }
  }

  typeRadios.forEach(r => {
    r.addEventListener('change', () => {
      // Toggle card selected visual class
      r.closest('.option-cards-grid').querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
      r.closest('.option-card').classList.add('selected');
      calculateEstimate();
    });
  });

  featureCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      cb.closest('.option-card').classList.toggle('selected', cb.checked);
      calculateEstimate();
    });
  });

  // Initial calculation run
  calculateEstimate();
}

/**
 * Multi-Step Project Enquiry Form Wizard (start-project.html)
 */
function initMultiStepForm() {
  const wizardForm = document.getElementById('multi-step-project-form');
  if (!wizardForm) return;

  const steps = wizardForm.querySelectorAll('.wizard-step-panel');
  const stepIndicators = document.querySelectorAll('.step-indicator');
  const prevBtn = document.getElementById('wizard-prev-btn');
  const nextBtn = document.getElementById('wizard-next-btn');
  const submitBtn = document.getElementById('wizard-submit-btn');

  let currentStep = 0;

  function updateWizardUI() {
    steps.forEach((step, idx) => {
      step.classList.toggle('active', idx === currentStep);
    });

    stepIndicators.forEach((ind, idx) => {
      ind.classList.remove('active', 'completed');
      if (idx === currentStep) {
        ind.classList.add('active');
      } else if (idx < currentStep) {
        ind.classList.add('completed');
      }
    });

    if (prevBtn) prevBtn.style.display = currentStep === 0 ? 'none' : 'inline-flex';
    if (nextBtn) nextBtn.style.display = currentStep === steps.length - 1 ? 'none' : 'inline-flex';
    if (submitBtn) submitBtn.style.display = currentStep === steps.length - 1 ? 'inline-flex' : 'none';
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      // Validate current step before advancing
      if (validateStep(currentStep)) {
        currentStep++;
        if (currentStep >= steps.length) currentStep = steps.length - 1;
        updateWizardUI();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentStep--;
      if (currentStep < 0) currentStep = 0;
      updateWizardUI();
    });
  }

  function validateStep(stepIndex) {
    const currentPanel = steps[stepIndex];
    if (!currentPanel) return true;

    const requiredInputs = currentPanel.querySelectorAll('[required]');
    let isValid = true;

    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('is-invalid');
        isValid = false;
      } else {
        input.classList.remove('is-invalid');
      }
    });

    return isValid;
  }

  wizardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      const successBox = document.getElementById('wizard-success-message');
      wizardForm.style.display = 'none';
      if (successBox) {
        successBox.style.display = 'block';
      }
    }
  });

  updateWizardUI();
}
