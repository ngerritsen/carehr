import initContactForm from './contactForm';
import initIcons from './icons';
import initNotifications from './notifications';
import ready from './ready';

initIcons();

ready(() => {
  initContactForm();
  initNotifications();
});
