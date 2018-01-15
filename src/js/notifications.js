const SUCCESS_PARAM = 'success';

export default function initNotifications() {
  if (window.location.search.indexOf(SUCCESS_PARAM + '=') > -1) {
    showNotification('Het contact formulier is successvol verzonden!');
  }
}

function showNotification(message) {
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add('notification__success');

  notification.innerHTML = `
    <div class="container">
      <div class="notification__content">
        <span class="notification__message">${message}</span>
        <span class="notification__icon" data-close-notification>
          <i class="fas fa-times-circle"></i>
        </span>
      </div>
    </div>
  `;

  const close = notification.querySelector('[data-close-notification]');

  close.addEventListener('click', () => {
    document.body.removeChild(notification);
  });

  document.body.appendChild(notification);
}
