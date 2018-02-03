import initContactForm from './contactForm';
import initIcons from './icons';
import initNotifications from './notifications';
import ready from './ready';
import loadWebFonts from './fonts';

loadWebFonts();
initIcons();

ready(() => {
  initContactForm();
  initNotifications();
});
