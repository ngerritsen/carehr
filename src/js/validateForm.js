export default function validateForm(formValues) {
  const { name, email, subject, message, gotcha } = formValues;
  let errors = false;

  formSections.forEach(({ container }) => unsetError(container));

  if (gotcha.value) {
    errors = true;
  }

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
