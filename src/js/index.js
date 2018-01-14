import initFormValidation from './formValidation';
import './fontAwesome';

ready(() => {
  initFormValidation();
});

function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
    return;
  }

  document.addEventListener('DOMContentLoaded', fn);
}
