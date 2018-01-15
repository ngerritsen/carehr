const EMAIL_ENDPOINT = 'https://formspree.io/info@carehr.nl';

export default function initContactForm() {
  const form = document.querySelector('[data-form-validation]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formValues = parseForm(form);
    const errors = validateForm(formValues);

    if (!errors) {
      sendForm(formValues);
    }
  })
}

function sendForm(formValues, callback) {
  const request = new XMLHttpRequest();

  request.open('POST', EMAIL_ENDPOINT, true);

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      callback(null);
      return;
    }

    callback(new Error('Formulier opsturen mislukt.'));
  };

  request.onerror = function() {
    callback(new Error('Formulier opsturen mislukt.'));
  };

  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Accept', 'application/json');
  request.send({
    message: `${formValues.message.value}\n\nvan: ${formValues.name.value}`,
    email: formValues.email.value,
    subject: formValues.email.value
  });
}

function parseForm(form) {
  const formSections = [...document.querySelectorAll('[data-form-section]')];

  return formSections.reduce((fields, container) => {
    const value = (
      container.querySelector('input') ||
      container.querySelector('textarea')
    ).value;

    return { ...fields, { value, container } };
  }, {});
}
