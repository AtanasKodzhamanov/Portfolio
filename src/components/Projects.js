import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faGithub,
    faPython,
    faJsSquare,
    faReact,
    faCss3,
    faHtml5,
} from '@fortawesome/free-brands-svg-icons'
import { Element } from 'react-scroll'
import './Projects.css'
import useGoogleAnalytics from './useGoogleAnalytics'

library.add(faPython, faJsSquare, faReact, faGithub, faCss3, faHtml5)

const Projects = () => {
    useGoogleAnalytics()

    return (
        <Element name="Projects" className="section">
            <h1>Projects</h1>
            <section className="project">
                <div>
                    <div className="title-icons">
                        <h2>DonaDogs</h2>
                        <div className="icons">
                            <FontAwesomeIcon
                                icon={faPython}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <FontAwesomeIcon
                                icon={faCss3}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <FontAwesomeIcon
                                icon={faHtml5}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <br></br>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                                onClick={() =>
                                    window.open(
                                        'https://github.com/AtanasKodzhamanov/www.DonaDogs.org',
                                        '_blank'
                                    )
                                }
                            />
                        </div>
                    </div>
                    <a href="https://www.donadogs.com/en/" target="_blank">www.donadogs.org</a>
                    <p>
                        Inspired by the needs of a dog rescue in a small Bulgarian town,
                        DonaDogs was my first major project using Django. Since its launch
                        in January 2023, the website has had a transformative impact on the
                        rescue center's operations. Previously, only a handful of dogs had
                        virtual sponsors, now, nearly all of the dogs are virtually adopted.
                        This surge in sponsorship has solved the shelter's ongoing food
                        shortage, enabling them to not only increase the number of dogs they
                        can look after, but also significantly improve the conditions in
                        which these dogs live.
                    </p>
                    <p>
                        The website content is managed by the shelter through Django's admin
                        panel. It allows the shelter to manage the database of dogs, add
                        pictures, descriptions and allocate them in the appropriate
                        category: sick, adopted, new, etc. Through the admin panel, the
                        shelter can also add information boxes under each page and also
                        control visuals such as applying different text/title/background
                        color and the relative text positioning.
                    </p>
                    <p> </p>
                    <p> </p>
                    <p style={{ fontSize: '0.7em' }}>
                        STATUS: MAINTENANCE AND IMPROVEMENTS
                    </p>
                    <div className="screenshots-container">
                        <h3>Project Screenshots</h3>
                        <div className="screenshots">
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/11_eilpzm.webp"
                                    alt="screenshot5"
                                />
                            </div>
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/22_kiiis0.webp"
                                    alt="screenshot1"
                                />
                            </div>
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/33_c8oh3e.webp"
                                    alt="screenshot2"
                                />
                            </div>
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/44_y0mji5.webp"
                                    alt="screenshot3"
                                />
                            </div>
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/55_rj2cuc.webp"
                                    alt="screenshot4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="project">
                <div>
                    <div className="title-icons">
                        <h2>Know Thy Art</h2>

                        <div className="icons">
                            <br></br>
                            <FontAwesomeIcon
                                icon={faReact}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <FontAwesomeIcon
                                icon={faCss3}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <br></br>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                                onClick={() =>
                                    window.open(
                                        'https://github.com/AtanasKodzhamanov/www.KnowThy.Art',
                                        '_blank'
                                    )
                                }
                            />
                        </div>
                    </div>
                    <a href="https://www.knowthy.art/" target="_blank">www.KnowThy.Art</a>

                    <p> This is a guessing game where players try to identify the artist whose style inspired a newly created painting. </p>
                    <p> The game is built with React for the frontend and Django for the APIs. The data is stored in a PostgreSQL database that keeps the artist information and user scores.</p>
                    <p> </p>
                    <p style={{ fontSize: '0.7em' }}>STATUS: MAINTENANCE AND IMPROVEMENTS</p>
                    <div className="screenshots-container">
                        <h3>Project Screenshots</h3>
                        <div className="screenshots">
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1689992137/atanas/Screenshot_2023-07-22_at_03.12.22_ljxvpr.webp"
                                    alt="screenshot5"
                                />
                            </div>
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1689992137/atanas/Screenshot_2023-07-22_at_03.11.44_wsxude.webp"
                                    alt="screenshot1"
                                />
                            </div>
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1689992137/atanas/Screenshot_2023-07-22_at_03.11.55_we6dhg.webp"
                                    alt="screenshot2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="project">
                <div>
                    <div className="title-icons">
                        <h2>Planetary Defence</h2>
                        <div className="icons">
                            <br></br>
                            <FontAwesomeIcon
                                icon={faReact}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <br></br>
                        </div>
                    </div>
                    <p>
                        This is a turn-based, 4x, city-builder, rougelite ReactJS game.
                    </p>
                    <p> </p>
                    <p style={{ fontSize: '0.7em' }}>STATUS: ACTIVE DEVELOPMENT</p>
                    <div className="screenshots-container">
                        <h3>Project Screenshots</h3>
                        <div className="screenshots" style={{ flexDirection: 'column' }}>
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1691869489/atanas/Screenshot_2023-08-12_at_20.42.20_x9dsoo.webp"
                                    alt="screenshot5"
                                />
                            </div>
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1691869489/atanas/Screenshot_2023-08-12_at_20.42.45_d1dtb6.webp"
                                    alt="screenshot5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="project">
                <div>
                    <div className="title-icons">
                        <h2>EOA</h2>
                        <div className="icons">
                            <br></br>
                            <FontAwesomeIcon
                                icon={faReact}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <br></br>
                        </div>
                    </div>
                    <p>
                        This is a turn-based rougelike game developed using ReactJS with the goal of publishing the game on Steam by the end of the year.
                    </p>
                    <p> </p>
                    <p style={{ fontSize: '0.7em' }}>STATUS: ACTIVE DEVELOPMENT</p>
                    <div className="screenshots-container">

                        <h3>Project Screenshots</h3>
                        <div className="screenshots" style={{ flexDirection: 'column' }}>
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1691869489/atanas/Screenshot_2023-08-12_at_20.41.02_d9asi8.webp"
                                    alt="screenshot5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="project">
                <div>
                    <div className="title-icons">
                        <h2>Construct-m</h2>

                        <div className="icons">
                            <br></br>
                            <FontAwesomeIcon
                                icon={faReact}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <FontAwesomeIcon
                                icon={faCss3}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <br></br>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                                onClick={() =>
                                    window.open(
                                        'https://github.com/AtanasKodzhamanov/www.construct-m.com',
                                        '_blank'
                                    )
                                }
                            />
                        </div>
                    </div>
                    <a href="https://www.construct-m.com/" target="_blank">www.construct-m.com</a>

                    <p>
                        Construct-M is a freelance project developed for the needs of an
                        engineering consultancy, built with ReactJS.
                    </p>
                    <p>
                        The website aims to provide basic information about the company and
                        its services as well as showcase some of the projects they have
                        worked on.
                    </p>
                    <p>
                        Each of the pages contains parallax scrolling as well as transition
                        effects. The website is also able to render 3D models that users can
                        inspect, rotate and zoom in.
                    </p>
                    <p>
                        The project is temporary paused until the client provides the
                        necessary content such as descriptions, images and 3D models.
                    </p>
                    <p> </p>
                    <p style={{ fontSize: '0.7em' }}>STATUS: ON HOLD</p>
                    <div className="screenshots-container">
                        <h3>Project Screenshots</h3>
                        <div className="screenshots">
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1689993525/atanas/Screenshot_2023-07-22_at_03.24.36_kk1vrn.webp"
                                    alt="screenshot1"
                                />
                            </div>
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1689993525/atanas/Screenshot_2023-07-22_at_03.24.58_tugemb.webp"
                                    alt="screenshot2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="project">
                <div>
                    <div className="title-icons">
                        <h2>Itesica Notes</h2>
                        <div className="icons">
                            <FontAwesomeIcon
                                icon={faPython}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <FontAwesomeIcon
                                icon={faReact}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <FontAwesomeIcon
                                icon={faCss3}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <br></br>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                                onClick={() =>
                                    window.open(
                                        'https://github.com/AtanasKodzhamanov/ItesicaNotes',
                                        '_blank'
                                    )
                                }
                            />
                        </div>
                    </div>
                    <p>
                        Itesica Notes is a note taking app and my first ReactJS project
                        (using Django for backend). The aim of this app was to practice and
                        improve my ReactJS skills while creating a product that can solve a
                        personal need of mine of having a note taking app that I can use to
                        store information on various topics in an easily accessible manner.
                    </p>
                    <p>
                        The app allows for note nesting where each note can have multiple children notes. Notes are held into "notebooks" themselves for better organisation.
                    </p>
                    <p>
                        The website supports multiple users with each able to add, view,
                        edit and delete their notes.
                    </p>
                    <p>
                        The goal is to create a website where users can openly share their
                        notebooks using unique keys. The webapp is in early development with the design, functionality and code being subject to constant change and improvement.
                    </p>
                    <p> </p>
                    <p style={{ fontSize: '0.7em' }}>STATUS: UNDER DEVELOPMENT</p>
                    <div className="screenshots-container">
                        <h3>Project Screenshots</h3>
                        <div className="screenshots" style={{ flexDirection: 'column' }}>
                            <div className="screenshot">
                                <img
                                    src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1689993525/atanas/Screenshot_2023-07-22_at_03.37.04_c7id0e.webp"
                                    alt="screenshot5"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="project">
                <div>
                    <div className="title-icons">
                        <h2>This portfolio website</h2>
                        <div className="icons">
                            <br></br>
                            <FontAwesomeIcon
                                icon={faReact}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <FontAwesomeIcon
                                icon={faCss3}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <br></br>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                                onClick={() =>
                                    window.open(
                                        'https://github.com/AtanasKodzhamanov/www.kodzhamanov.com',
                                        '_blank'
                                    )
                                }
                            />
                        </div>
                    </div>
                    <p>This portfolio website was created using ReactJS. </p>
                    <p> </p>
                    <p style={{ fontSize: '0.7em' }}>STATUS: MAINTENANCE</p>
                </div>
            </section>
            <section className="project">
                <div>
                    <div className="title-icons">
                        <h2>Babylon</h2>
                        <div className="icons">
                            <br></br>
                            <FontAwesomeIcon
                                icon={faReact}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <br></br>
                        </div>
                    </div>
                    <p>
                        Babylon (working name) is a language-learning app developed using
                        React Native.
                    </p>
                    <p>
                        The app uses flashcards to provide a smooth and hassle-free
                        vocabulary learning experience.
                    </p>
                    <p>
                        Babylon's core code is complete and I am currently focusing on
                        improving the design and user experience (using Figma), adding
                        animations, adding additional features as well as building the core
                        language content. The aim is to produce a unique, high quality
                        commercial product and publish it on the App Store and Google Play
                        in the next few months.
                    </p>
                    <p> </p>
                    <p style={{ fontSize: '0.7em' }}>STATUS: ACTIVE DEVELOPMENT</p>
                </div>
            </section>
            <section className="project">
                <div>
                    <div className="title-icons">
                        <h2>Tiny Projects</h2>
                        <div className="icons">
                            <FontAwesomeIcon
                                icon={faPython}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                            />
                            <br></br>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="3x"
                                style={{ color: '#2c3e50' }}
                                onClick={() =>
                                    window.open(
                                        'https://github.com/AtanasKodzhamanov/TinyProjects',
                                        '_blank'
                                    )
                                }
                            />
                        </div>
                    </div>
                    <p>
                        These are some of the smaller projects I've worked on. They are
                        mostly built with Python and aimed to solve real world problems that
                        I've had.
                    </p>
                    <ul>
                        <li>
                            <p>
                                GiantFileSafari - The code traverses a directory tree and
                                collects information about the files and folders in the tree. It
                                then analyzes the collected data and outputs the results to an
                                Excel file. The code allows the user to specify the minimum size
                                of files to include in the analysis and the number of top
                                results to show. It also calculates the total size of files in
                                each folder and the depth of each folder in the directory tree.
                                I used this to identify files and folders eating up my SSD
                                storage. Packaged as a standalone executable.
                            </p>
                        </li>
                        <li>
                            <p>
                                MarcoPolo - This code uses the Selenium webdriver to open a
                                Firefox browser and navigate to a list of URLs. The URLs are
                                read from an Excel file and the corresponding web pages are
                                screenshot. The screenshots are saved to a specified directory.
                                The code also uses threading to distribute the workload across
                                multiple threads and run the tasks in parallel. The script is
                                used to document evidence for trial bundle preparation.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

        </Element>
    )
}

export default Projects
