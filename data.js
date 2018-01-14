'use strict';

const tagLine = 'Professioneel HR advies & ondersteuning in de zorg.';

module.exports = {
  title: 'CareHR - ' + tagLine,
  tagLine,
  profiles: [
    {
      name: 'Carlo Reeser',
      image: 'carlo.jpg',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      linkedin: 'https://www.linkedin.com/in/carlo-reeser-85b6338/'
    },
    {
      name: 'René Dessing',
      image: 'rene.jpg',
      intro: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      linkedin: 'https://www.linkedin.com/in/ren%C3%A9-dessing-b525213/'
    },
    {
      name: 'Fred Spiering',
      image: 'fred.jpg',
      intro: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
      linkedin: 'https://www.linkedin.com/in/frederik-fred-spiering-520b3a6/'
    }
  ],
  services: [
    {
      id: 'advies-ondersteuning',
      title: 'HR advies & ondersteuning',
      icon: 'lightbulb',
      intro: 'Voor vragenstukken als functiewaardering, functiebeschrijving, werving en selectie maar ook voor projecten.'
    },
    {
      id: 'hr-check',
      title: 'HR check',
      icon: 'check',
      intro: 'Met behulp van een quickscan een analyse maken van het functioneren en beleving van HR in uw organisatie.'
    },
    {
      id: 'voor-zorgmedewerkers',
      title: 'Ondersteuning & juridisch advies voor zorgmedewerkers',
      icon: 'users',
      intro: 'De Zorg heeft te maken met ingrijpende veranderingen. Functies vervallen of veranderen. Sociale plannen worden opgesteld.'
    },
    {
      id: 'interim-opdrachten',
      title: 'Interim HR opdrachten',
      icon: 'medkit',
      intro: 'De bestaande werkzaamheden blijven uitvoeren, een verbeterplan implementeren en ondertussen op zoek naar een oplossing voor de toekomst.'
    }
  ]
}
