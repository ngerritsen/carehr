export default function validateForm(formValues) {
  const { name, email, subject, message, gotcha } = formValues;
  let valid = true;

  Object.keys(formValues)
    .map(key => formValues[key].container)
    .forEach(unsetError);

  if (name.value.trim().length < 3) {
    setError(name.container, 'Vul een naam in van minimaal 3 karakters in.');
    valid = false;
  }

  if (!isValidEmail(email.value)) {
    setError(email.container, 'Vul een geldig email adres in.');
    valid = false;
  }

  if (message.value.trim().length < 16) {
    setError(message.container, 'Vul een bericht van minimaal 16 karakters in.');
    valid = false;
  }

  return valid;
}

function unsetError(container) {
  const errorEl = container.querySelector('[data-form-error]');
  console.log(errorEl);
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
  el.dataset.formError = true;

  return el;
}

function isValidEmail(value) {
  return !!value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
}
