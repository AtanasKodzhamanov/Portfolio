import {
  faGithub,
  faPython,
  faJsSquare,
  faReact,
  faCss3,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons'

const projectsData = [
  {
    projectName: 'Bilingual Crosswords',
    websiteName: 'Steam Store Page',
    websiteLink:
      'https://store.steampowered.com/app/3220820/Bilingual_Crosswords/',
    iconsList: [
      {
        iconTitle: faReact,
        iconLink: null,
      },
      {
        iconTitle: faPython,
        iconLink: null,
      },
    ],
    description: [
      'Bilingual Crosswords is an educational game, motivated by hate for Duolingo, designed to help users improve their vocabulary in a foreign language through solving crossword puzzles.',
      'It offers multiple languages, Anki-like review system, and various dopamine boosting mechanics such as rewards, collectibles, and achievements to enhance user engagement and motivation.',
      'The demo version is available on Steam.',
    ],
    shortDesc: ['An educational crossword puzzle game'],
    status: 'DEMO AVAILABLE, FULL GAME COMING SOONish',
    screenshots: [
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1764367599/atanas/gameplay_gfbkik.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1764367599/atanas/gifts_vcdgsx.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1764367599/atanas/collecttions_nb9nqv.webp',
    ],
  },
  {
    projectName: 'DonaDogs',
    iconsList: [
      {
        iconTitle: faPython,
        iconLink: null,
      },
      {
        iconTitle: faJsSquare,
        iconLink: null,
      },
      {
        iconTitle: faCss3,
        iconLink: null,
      },
      {
        iconTitle: faHtml5,
        iconLink: null,
      },
      {
        iconTitle: faGithub,
        iconLink: 'https://github.com/AtanasKodzhamanov/www.DonaDogs.org',
      },
    ],
    description: [
      "DonaDogs was my first and most impactful project. Since its launch in January 2023, the website has had a transformative effect on the rescue center's operations.",
      "Previously, only a handful of dogs had virtual sponsors, now, nearly all of the dogs are virtually adopted. This surge in sponsorship has solved the shelter's ongoing food shortage, enabling them to not only increase the number of dogs they can look after, but also significantly improve the conditions in which these dogs live.",
      "The website content is managed by the shelter through Django's admin panel. It allows the shelter to manage the database of dogs, add pictures, descriptions and allocate them in the appropriate category: sick, adopted, new, etc.",
      'Through the admin panel, the shelter can also add information boxes under each page and also control visuals such as applying different text/title/background color and the relative text positioning.',
    ],
    shortDesc: ['A dog rescue website'],
    status: 'THE WEBSITE IS NO LONGER ACTIVE DUE TO CHANGE IN MANAGEMENT',
    screenshots: [
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1700675537/atanas/screenshot-2023-11-22-at-172632-655e3f99eaad7_lenwoa.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/11_eilpzm.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/22_kiiis0.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/33_c8oh3e.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/44_y0mji5.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/55_rj2cuc.webp',
    ],
  },
  {
    projectName: 'Walks Of Life',
    websiteName: '',
    websiteLink: '',
    iconsList: [
      {
        iconTitle: faReact,
        iconLink: null,
      },
      {
        iconTitle: faCss3,
        iconLink: null,
      },
    ],
    description: [
      'This ReactJS game is a twist on the classic Game of Life board game and was developed for a 10-day React hackaton.',
      'As you move through the board you have to make strategic decisions that impact various aspects of your life—education, career, wealth, and family.',
      'Each choice you make influences your overall success and happiness. Ignoring aspects of your life such as health can cause problems down the line or even get you killed. The game combines strategy, luck, and life simulation elements.',
    ],
    shortDesc: ['A simulation strategy game made in a 10-day React hackaton'],
    status: 'ACTIVE DEVELOPMENT',
    screenshots: [
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1700575270/atanas/walks1_zurzun.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1700575268/atanas/walks2_sa7lyo.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1700575268/atanas/walks3_qmz8fr.webp',
    ],
  },
  {
    projectName: 'Know Thy Art',
    websiteName: 'www.knowthy.art',
    websiteLink: 'https://www.knowthy.art/',
    iconsList: [
      {
        iconTitle: faReact,
        iconLink: null,
      },
      {
        iconTitle: faCss3,
        iconLink: null,
      },
      {
        iconTitle: faGithub,
        iconLink: 'https://github.com/AtanasKodzhamanov/www.KnowThy.Art',
      },
    ],
    description: [
      'This is a guessing game where players try to identify the artist whose style inspired a newly created painting.',
      'The game is built with React for the frontend and Django for the APIs. The data is stored in a PostgreSQL database that keeps the artist information and user scores.',
    ],
    shortDesc: ['An educational guessing game'],
    status: 'PROJECT GRAVEYARD',
    screenshots: [
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1689992137/atanas/Screenshot_2023-07-22_at_03.12.22_ljxvpr.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1689992137/atanas/Screenshot_2023-07-22_at_03.11.44_wsxude.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1689992137/atanas/Screenshot_2023-07-22_at_03.11.55_we6dhg.webp',
    ],
  },
  {
    projectName: 'Itesica Notes',
    websiteName: '',
    websiteLink: '',
    iconsList: [
      {
        iconTitle: faPython,
        iconLink: null,
      },
      {
        iconTitle: faReact,
        iconLink: null,
      },
      {
        iconTitle: faCss3,
        iconLink: null,
      },
      {
        iconTitle: faGithub,
        iconLink: 'https://github.com/AtanasKodzhamanov/ItesicaNotes',
      },
    ],
    description: [
      'Itesica Notes is a note taking app (ReactJS and Django) that allows for fast storage and retreval of information.',
      'Notes can be nested and each note can have multiple children notes. Notes themselves are held into "notebooks" for better organisation.',
      'The webapp supports multiple users with each able to add, view, edit and delete their notes.',
      'The goal is to create a website where users can openly share their notebooks using unique keys.',
    ],
    shortDesc: ['Note taking webapp'],
    status: 'PROJECT GRAVEYARD',
    screenshots: [
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1689993525/atanas/Screenshot_2023-07-22_at_03.37.04_c7id0e.webp',
    ],
  },
  {
    projectName: 'Planetary Defence',
    websiteName: '',
    websiteLink: '',
    iconsList: [
      {
        iconTitle: faReact,
        iconLink: null,
      },
      {
        iconTitle: faCss3,
        iconLink: null,
      },
      {
        iconTitle: faGithub,
        iconLink: '',
      },
    ],
    description: [
      'This is a turn-based, 4x, city-builder, rougelite ReactJS game.',
      'The player has to manage their planetary resources, choose the appropriate buildings and position them strategically on the planet.',
      'The player has to defend their planet from incoming asteroids and enemy ships.',
      'Space exploration is also a key aspect of the game. The player can send out ships to explore the galaxy and discover new planets and species.',
    ],
    shortDesc: ['A turn-based, 4x, city-builder, rougelite game'],
    status: 'ON HOLD',
    screenshots: [
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1691869489/atanas/Screenshot_2023-08-12_at_20.42.45_d1dtb6.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1691869489/atanas/Screenshot_2023-08-12_at_20.42.20_x9dsoo.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1700675780/atanas/screenshot-2023-11-22-at-175440-655e40b46ba24_sjgdbg.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1700675780/atanas/screenshot-2023-11-22-at-175444-655e40b45ece2_kqgxwf.webp',
    ],
  },
  {
    projectName: 'Babylon',
    websiteName: '',
    websiteLink: '',
    iconsList: [
      {
        iconTitle: faReact,
        iconLink: null,
      },
      {
        iconTitle: faCss3,
        iconLink: null,
      },
      {
        iconTitle: faGithub,
        iconLink: '',
      },
    ],
    description: [
      'Babylon (temporary name) is a language-learning app developed using React Native.',
      'The app uses flashcards to provide a smooth and hassle-free vocabulary learning experience.',
      "Babylon's core code is complete and I am currently focusing on improving the design and user experience, adding animations, adding additional features as well as expanding the language content.",
      'The aim is to publish the app on both the App Store and Google Play.',
    ],
    shortDesc: ['A language-learning app'],
    status: 'ON HOLD',
    screenshots: [
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1700672284/atanas/babylon_iq36as.webp',
    ],
  },
  {
    projectName: 'Edge Of Annihilation II',
    websiteName: '',
    websiteLink: '',
    iconsList: [
      {
        iconTitle: faReact,
        iconLink: null,
      },
      {
        iconTitle: faCss3,
        iconLink: null,
      },
      {
        iconTitle: faGithub,
        iconLink: '',
      },
    ],
    description: [
      'EOA is a turn-based rougelike game developed using ReactJS.',
      'The player has to destroy the enemy base while defending their own.',
      'To do so the player has to manage their resources, select the appropriate units and position them strategically on the battlefield.',
    ],
    shortDesc: ['A turn-based rougelike game'],
    status: 'PROJECT GRAVEYARD',
    screenshots: [
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1691869489/atanas/Screenshot_2023-08-12_at_20.41.02_d9asi8.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1700675537/atanas/screenshot-2023-11-22-at-172735-655e3f991ec14_ifwnby.webp',
    ],
  },
  {
    projectName: 'Construct-M',
    websiteName: 'www.construct-m.com',
    websiteLink: 'https://www.construct-m.com',
    iconsList: [
      {
        iconTitle: faReact,
        iconLink: null,
      },
      {
        iconTitle: faCss3,
        iconLink: null,
      },
      {
        iconTitle: faGithub,
        iconLink: 'https://github.com/AtanasKodzhamanov/www.construct-m.com',
      },
    ],
    description: [
      'Construct-M is a freelance project developed for the needs of an engineering consultancy, built with ReactJS.',
      'The website aims to provide basic information about the company and its services as well as showcase some of the projects they have worked on.',
      'Each of the pages contains parallax scrolling as well as transition effects. The website is also able to render 3D models that users can inspect, rotate and zoom in.',
      'The project is temporary paused until the client provides the necessary content such as descriptions, images and 3D models.',
    ],
    shortDesc: ['Construction engineering consultancy website'],
    status: 'WAITING FOR CONTENT FROM CLIENT',
    screenshots: [
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1689993525/atanas/Screenshot_2023-07-22_at_03.24.36_kk1vrn.webp',
      'https://res.cloudinary.com/dxwb5ejff/image/upload/v1689993525/atanas/Screenshot_2023-07-22_at_03.24.58_tugemb.webp',
    ],
  },
]

export default projectsData
