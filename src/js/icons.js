import fontawesome from '@fortawesome/fontawesome';

export default function initIcons() {
  const icons = [
    require('@fortawesome/fontawesome-pro-solid/faAngleLeft'),
    require('@fortawesome/fontawesome-pro-solid/faAngleRight'),
    require('@fortawesome/fontawesome-pro-regular/faCheck'),
    require('@fortawesome/fontawesome-pro-solid/faCheckCircle'),
    require('@fortawesome/fontawesome-pro-regular/faEnvelope'),
    require('@fortawesome/fontawesome-pro-regular/faLightbulb'),
    require('@fortawesome/fontawesome-free-brands/faLinkedin'),
    require('@fortawesome/fontawesome-pro-regular/faMedkit'),
    require('@fortawesome/fontawesome-pro-regular/faMobile'),
    require('@fortawesome/fontawesome-pro-solid/faQuoteRight'),
    require('@fortawesome/fontawesome-pro-regular/faUsers')
  ]

  icons.forEach(icon => fontawesome.library.add(icon));
}
