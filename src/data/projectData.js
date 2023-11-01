
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
        projectName: 'DonaDogs',
        websiteName: 'www.donadogs.org',
        websiteLink: 'https://www.donadogs.com/en/',
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
            'Inspired by the needs of a dog rescue in a small Bulgarian town, DonaDogs was my first major project using Django. Since its launch in January 2023, the website has had a transformative impact on the rescue center\'s operations. Previously, only a handful of dogs had virtual sponsors, now, nearly all of the dogs are virtually adopted. This surge in sponsorship has solved the shelter\'s ongoing food shortage, enabling them to not only increase the number of dogs they can look after, but also significantly improve the conditions in which these dogs live.',

            'The website content is managed by the shelter through Django\'s admin panel. It allows the shelter to manage the database of dogs, add pictures, descriptions and allocate them in the appropriate category: sick, adopted, new, etc. Through the admin panel, the shelter can also add information boxes under each page and also control visuals such as applying different text/title/background color and the relative text positioning.'
        ],
        status: 'MAINTENANCE AND IMPROVEMENTS',
        screenshots: ['https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/11_eilpzm.webp', 'https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/22_kiiis0.webp', 'https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/33_c8oh3e.webp', 'https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/44_y0mji5.webp', 'https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/55_rj2cuc.webp'],
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
        status: 'MAINTENANCE AND IMPROVEMENTS',
        screenshots: ['https://res.cloudinary.com/dxwb5ejff/image/upload/v1689992137/atanas/Screenshot_2023-07-22_at_03.12.22_ljxvpr.webp', 'https://res.cloudinary.com/dxwb5ejff/image/upload/v1689992137/atanas/Screenshot_2023-07-22_at_03.11.44_wsxude.webp', 'https://res.cloudinary.com/dxwb5ejff/image/upload/v1689992137/atanas/Screenshot_2023-07-22_at_03.11.55_we6dhg.webp'],
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
                iconLink: "https://github.com/AtanasKodzhamanov/www.construct-m.com"
            },
        ],
        description: [
            'Construct-M is a freelance project developed for the needs of an engineering consultancy, built with ReactJS.',
            'The website aims to provide basic information about the company and its services as well as showcase some of the projects they have worked on.',
            'Each of the pages contains parallax scrolling as well as transition effects. The website is also able to render 3D models that users can inspect, rotate and zoom in.',
            'The project is temporary paused until the client provides the necessary content such as descriptions, images and 3D models.'
        ],
        status: 'ON HOLD',
        screenshots: ['https://res.cloudinary.com/dxwb5ejff/image/upload/v1689993525/atanas/Screenshot_2023-07-22_at_03.24.36_kk1vrn.webp', 'https://res.cloudinary.com/dxwb5ejff/image/upload/v1689993525/atanas/Screenshot_2023-07-22_at_03.24.58_tugemb.webp'],
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
            'Itesica Notes is a note taking app and my first ReactJS project (using Django for backend). The aim of this app was to practice and improve my ReactJS skills while creating a product that can solve a personal need of mine of having a note taking app that I can use to store information on various topics in an easily accessible manner.',
            'The app allows for note nesting where each note can have multiple children notes. Notes are held into "notebooks" themselves for better organisation.',
            'The website supports multiple users with each able to add, view, edit and delete their notes.',
            'The goal is to create a website where users can openly share their notebooks using unique keys. The webapp is in early development with the design, functionality and code being subject to constant change and improvement.',
        ],
        status: 'UNDER DEVELOPMENT',
        screenshots: ['https://res.cloudinary.com/dxwb5ejff/image/upload/v1689993525/atanas/Screenshot_2023-07-22_at_03.37.04_c7id0e.webp'],
    },
    {
        projectName: "Planetary Defence",
        websiteName: "",
        websiteLink: "",
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
                iconLink: "",
            },
        ],
        description: [
            "This is a turn-based, 4x, city-builder, rougelite ReactJS game.",
        ],
        status: "ACTIVE DEVELOPMENT",
        screenshots: ["https://res.cloudinary.com/dxwb5ejff/image/upload/v1691869489/atanas/Screenshot_2023-08-12_at_20.42.20_x9dsoo.webp", "https://res.cloudinary.com/dxwb5ejff/image/upload/v1691869489/atanas/Screenshot_2023-08-12_at_20.42.45_d1dtb6.webp"],
    },
    {
        projectName: "Babylon",
        websiteName: "",
        websiteLink: "",
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
                iconLink: "",
            },
        ],
        description: [
            "Babylon (working name) is a language-learning app developed using React Native.",
            "The app uses flashcards to provide a smooth and hassle-free vocabulary learning experience.",
            "Babylon's core code is complete and I am currently focusing on improving the design and user experience (using Figma), adding animations, adding additional features as well as building the core language content. The aim is to produce a unique, high quality commercial product and publish it on the App Store and Google Play in the next few months.",
        ],
        status: "ACTIVE DEVELOPMENT"
    },
    {
        projectName: "This portfolio website",
        websiteName: "",
        websiteLink: "",
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
                iconLink: "",
            },
        ],
        description: [
            "This portfolio website was created using ReactJS.",
        ],
        status: "MAINTENANCE",
    },
    {
        projectName: "EOA",
        websiteName: "",
        websiteLink: "",
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
                iconLink: "",
            },
        ],
        description: [
            "EOA is a turn-based rougelike game developed using ReactJS with the goal of publishing the game on Steam by the end of the year.",
        ],
        status: "ACTIVE DEVELOPMENT",
        screenshots: ["https://res.cloudinary.com/dxwb5ejff/image/upload/v1691869489/atanas/Screenshot_2023-08-12_at_20.41.02_d9asi8.webp"],
    },
    {
        projectName: "Tiny Projects",
        websiteName: "",
        websiteLink: "",
        iconsList: [
            {
                iconTitle: faPython,
                iconLink: null,
            },
            {
                iconTitle: faGithub,
                iconLink: "",
            },
        ],
        description: [
            "These are some of the smaller projects I've worked on. They are mostly built with Python and aimed to solve real world problems that I've had.",
        ],
    }

]

export default projectsData