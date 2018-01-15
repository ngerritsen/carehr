import validateForm from './validateForm';

export default function initContactForm() {
  const form = document.querySelector('[data-form-validation]');

  form.addEventListener('submit', (event) => {
    if (!validateForm(parseForm(form))) {
      event.preventDefault();
    }
  });
}

function parseForm(form) {
  const formSections = [...document.querySelectorAll('[data-form-section]')];
  const fields = {};

  formSections.forEach((container) => {
    const name = container.getAttribute('data-form-section');
    const value = (
      container.querySelector('input') ||
      container.querySelector('textarea')
    ).value;

    fields[name] = { container, value };
  });

  return fields;
}
