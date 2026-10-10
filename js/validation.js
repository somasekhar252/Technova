/**
 * TechNova - Client-Side Form Validation & Feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactValidation();
  initJobAppValidation();
});

function initContactValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const fields = [
      { id: 'contact-name', rule: val => val.trim().length >= 2, msg: 'Please enter your full name.' },
      { id: 'contact-email', rule: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()), msg: 'Please enter a valid email address.' },
      { id: 'contact-phone', rule: val => val.trim().length >= 8, msg: 'Please enter a valid phone number.' },
      { id: 'contact-service', rule: val => val !== '', msg: 'Please select a service.' },
      { id: 'contact-message', rule: val => val.trim().length >= 10, msg: 'Please describe your project (at least 10 characters).' }
    ];

    fields.forEach(field => {
      const el = document.getElementById(field.id);
      if (!el) return;

      const valid = field.rule(el.value);
      if (!valid) {
        isValid = false;
        el.classList.add('is-invalid');
        let feedback = el.nextElementSibling;
        if (!feedback || !feedback.classList.contains('invalid-feedback')) {
          feedback = document.createElement('div');
          feedback.className = 'invalid-feedback';
          el.parentNode.insertBefore(feedback, el.nextSibling);
        }
        feedback.textContent = field.msg;
      } else {
        el.classList.remove('is-invalid');
      }
    });

    const alertBox = document.getElementById('contact-form-alert');

    if (isValid) {
      if (alertBox) {
        alertBox.className = 'form-alert alert-success';
        alertBox.textContent = 'Frontend Demo Notice: Validation passed cleanly! No backend API is currently connected to store records or dispatch emails. Integrate your endpoint at POST /api/contact.';
        alertBox.style.display = 'block';
      }
      form.reset();
    } else {
      if (alertBox) {
        alertBox.className = 'form-alert alert-error';
        alertBox.textContent = 'Please fill out all required fields correctly before submitting.';
        alertBox.style.display = 'block';
      }
    }
  });
}

function initJobAppValidation() {
  const form = document.getElementById('job-application-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('job-applicant-name');
    const email = document.getElementById('job-applicant-email');
    const phone = document.getElementById('job-applicant-phone');
    const resume = document.getElementById('job-applicant-resume');

    if (!name || !name.value.trim()) {
      isValid = false;
      if (name) name.classList.add('is-invalid');
    } else {
      if (name) name.classList.remove('is-invalid');
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      isValid = false;
      if (email) email.classList.add('is-invalid');
    } else {
      if (email) email.classList.remove('is-invalid');
    }

    if (!phone || !phone.value.trim()) {
      isValid = false;
      if (phone) phone.classList.add('is-invalid');
    } else {
      if (phone) phone.classList.remove('is-invalid');
    }

    if (!resume || !resume.files.length) {
      isValid = false;
      if (resume) resume.classList.add('is-invalid');
    } else {
      if (resume) resume.classList.remove('is-invalid');
    }

    const alertBox = document.getElementById('job-app-alert');

    if (isValid) {
      if (alertBox) {
        alertBox.className = 'form-alert alert-success';
        alertBox.textContent = 'Frontend Demo Notice: Application form validation passed cleanly! Connect your HR applicant tracking endpoint at POST /api/careers/apply.';
        alertBox.style.display = 'block';
      }
      form.reset();
    } else {
      if (alertBox) {
        alertBox.className = 'form-alert alert-error';
        alertBox.textContent = 'Please complete all required fields and attach your resume.';
        alertBox.style.display = 'block';
      }
    }
  });
}
