import initContactForm from './contactForm';
import initIcons from './icons';
import ready from './ready';

initIcons();

ready(() => {
  initContactForm();
});
