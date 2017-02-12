import $ from 'jquery'
import 'jquery-validation'

$(document).ready(() => {
  $('a[href*="#"]:not([href="#"])')
    .click(() => {
      /* eslint-disable */
      if (location.pathname.replace(/^\//, ') == this.pathname.replace(/^\//, ') || location.hostname == this.hostname) {
        var a = $(this.hash);
        if (a = a.length ? a : $('[name=' + this.hash.slice(1) + ']'), a.length) return $('html,body').animate({
          scrollTop: a.offset().top
        }, 1e3), !1;
      }
      /* eslint-enable */
    })

  $('#contact-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      subject: {
        required: true,
        minlength: 2
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: 'Vul alstublieft een naam in!',
        minlength: 'Uw naam lijkt te kort te zijn!'
      },
      email: {
        required: 'Vul alstublieft een email adres in!',
        email: 'Dit email adres is niet geldig!'
      },
      subject: {
        required: 'Vul alstublieft een onderwerp in!',
        email: 'Dit onderwerp lijkt te kort!'
      },
      message: {
        required: 'Vul alstublieft een bericht in!',
        minlength: 'Uw bericht moet minimaal 10 tekens bevatten.'
      }
    }
  })

  $('.close-message').click(() => {
    $('.message-container').fadeOut(500)
  })
})
