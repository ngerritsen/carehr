export default function initFormValidation() {
  const form = document.querySelector('[data-form-validation]');
  const formSections = [...document.querySelectorAll('[data-form-section]')];

  form.addEventListener('submit', (event) => {
    const errors = validateForm(formSections);

    if (errors) {
      event.preventDefault();
    }
  })
}

function validateForm(formSections) {
  const name = getFormInput(formSections, 'name');
  const email = getFormInput(formSections, 'email');
  const subject = getFormInput(formSections, 'subject');
  const message = getFormInput(formSections, 'message');

  let errors = false;

  formSections.forEach(unsetError);

  if (name.value.trim().length < 3) {
    setError(name.container, 'Vul een naam in van minimaal 3 karakters in.');
    errors = true;
  }

  if (!isValidEmail(email.value)) {
    setError(email.container, 'Vul een geldig email adres in.');
    errors = true;
  }

  if (subject.value.trim().length < 3) {
    setError(subject.container, 'Vul een onderwerp van minimaal 3 karakters in.');
    errors = true;
  }

  if (message.value.trim().length < 21) {
    setError(message.container, 'Vul een bericht van minimaal 21 karakters in.');
    errors = true;
  }

  return errors;
}

function unsetError(container) {
  const errorEl = container.querySelector('[data-form-error]');

  if (errorEl) {
    container.removeChild(errorEl);
  }
}

function setError(container, message) {
  const errorEl = container.querySelector('[data-form-error]');

  if (errorEl) {
    errorEl.textContent = message;
    return;
  }

  container.appendChild(createErrorEl(message));
}

function createErrorEl(message) {
  const el = document.createElement('div');

  el.textContent = message;
  el.classList.add('form-error');

  return el;
}

function isValidEmail(value) {
  return !!value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
}

function getFormInput(formSections, name) {
  const el = formSections.find(el => el.getAttribute('data-form-section') === name);
  const field = el.querySelector('input') || el.querySelector('textarea');

  return {
    container: el,
    value: field.value
  }
}
