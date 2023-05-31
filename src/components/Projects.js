import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faPython, faJsSquare, faReact, faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { Element } from 'react-scroll';
import './Projects.css';
import useGoogleAnalytics from './useGoogleAnalytics';

library.add(faPython, faJsSquare, faReact, faGithub, faCss3, faHtml5);

const Projects = () => {
    useGoogleAnalytics();

    return (
        <Element name="Projects" className="section">
            <section className="project">
                <h1>Projects</h1>
                <div>
                    <div className="title-icons">
                        <h2>DonaDogs</h2>
                        <div className="icons">

                            <FontAwesomeIcon
                                icon={faPython}
                                size="3x"
                                style={{ color: "#2c3e50" }}
                            />
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                size="3x"
                                style={{ color: "#2c3e50" }}
                            />
                            <FontAwesomeIcon
                                icon={faCss3}
                                size="3x"
                                style={{ color: "#2c3e50" }}
                            />
                            <FontAwesomeIcon
                                icon={faHtml5}
                                size="3x"
                                style={{ color: "#2c3e50" }}
                            />
                            <br>
                            </br>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="3x"
                                style={{ color: "#2c3e50" }}
                                onClick={() => window.open("https://github.com/AtanasKodzhamanov/www.DonaDogs.org", "_blank")}
                            />
                        </div>
                    </div>
                    <a href="https://www.donadogs.com/en/">www.donadogs.org</a>

                    <p>DonaDogs was my first major Django project that was inspired by the needs of a dog rescue in a small Bulgarian town. Since its release in January 2023, the website has increased the number of virtual sponsors from a handful to now having nearly all dogs virtually adopted, solving the shelter's perpetual lack of food problem and allowing them to expand the number of dogs they can take care of as well as improve the conditions they live in.</p>
                    <p>The design of the website underwent multiple iterations with additional sections being added and the visuals constantly evolving. Through this website I learned a lot about Django, HTML and CSS as well as vanilla JavaScript. The app design and visuals are my own.</p>
                    <p>The website content is managed by the shelter through Django's admin panel.</p>
                    <p>Have a look at the website and consider adopting!  </p>
                    <div className="screenshots-container">
                        <h3>Project Screenshots</h3>
                        <div className="screenshots">
                            <div className="screenshot">
                                <img src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/11_eilpzm.webp" alt="screenshot5" />
                            </div>
                            <div className="screenshot">
                                <img src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/22_kiiis0.webp" alt="screenshot1" />
                            </div>
                            <div className="screenshot">
                                <img src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/33_c8oh3e.webp" alt="screenshot2" />
                            </div>
                            <div className="screenshot">
                                <img src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/44_y0mji5.webp" alt="screenshot3" />
                            </div>
                            <div className="screenshot">
                                <img src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550390/atanas/55_rj2cuc.webp" alt="screenshot4" />
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
                                style={{ color: "#2c3e50" }}
                            />
                            <FontAwesomeIcon
                                icon={faCss3}
                                size="3x"
                                style={{ color: "#2c3e50" }}
                            />
                            <br>
                            </br>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="3x"
                                style={{ color: "#2c3e50" }}
                                onClick={() => window.open("https://github.com/AtanasKodzhamanov/www.construct-m.com", "_blank")}
                            />
                        </div>

                    </div>
                    <a href="https://www.construct-m.com/">www.construct-m.com</a>

                    <p>Construct-M is a freelance project developed for the needs of an engineering consultancy. Built with ReactJS. </p>
                    <p>The website design was made in collaboration with the client.</p>
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
                                style={{ color: "#2c3e50" }}
                            />
                            <FontAwesomeIcon
                                icon={faReact}
                                size="3x"
                                style={{ color: "#2c3e50" }}
                            />
                            <FontAwesomeIcon
                                icon={faCss3}
                                size="3x"
                                style={{ color: "#2c3e50" }}
                            />
                            <br>
                            </br>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="3x"
                                style={{ color: "#2c3e50" }}
                                onClick={() => window.open("https://github.com/AtanasKodzhamanov/ItesicaNotes", "_blank")}
                            />
                        </div>
                    </div>
                    <p>Itesica Notes is a note taking app and my first ReactJS project (Django backend) and my project submission at SoftUni's ReactJS course. The aim of this app was to practice and improve my ReactJS skills while creating a product that can solve a personal need of mine of having a note taking app that I can use to store information on various topics in an easily accessible manner.</p>
                    <p>The website supports multiple users with each able to add,view,edit and delete their notes. The app design and visuals are my own.</p>
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
                                style={{ color: "#2c3e50" }}
                            />
                            <FontAwesomeIcon
                                icon={faCss3}
                                size="3x"
                                style={{ color: "#2c3e50" }}
                            />
                            <br>
                            </br>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="3x"
                                style={{ color: "#2c3e50" }}
                                onClick={() => window.open("https://github.com/AtanasKodzhamanov/www.kodzhamanov.com", "_blank")}
                            />
                        </div>
                    </div>
                    <p>This portfolio website was created using ReactJS. </p>
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
                                style={{ color: "#2c3e50" }}
                            />
                            <br>
                            </br>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="3x"
                                style={{ color: "#2c3e50" }}
                                onClick={() => window.open("https://github.com/AtanasKodzhamanov/TinyProjects", "_blank")}
                            />
                        </div>
                    </div>
                    <p>These are some of the smaller projects I've worked on. They are mostly built with Python and aimed to solve real world problems that I've had.</p>
                    <ul>
                        <li><p>GiantFileSafari - The code traverses a directory tree and collects information about the files and folders in the tree. It then analyzes the collected data and outputs the results to an Excel file. The code allows the user to specify the minimum size of files to include in the analysis and the number of top results to show. It also calculates the total size of files in each folder and the depth of each folder in the directory tree. I used this to identify files and folders eating up my SSD storage. Packaged as a standalone executable.</p></li>
                        <li><p>MarcoPolo - This code uses the Selenium webdriver to open a Firefox browser and navigate to a list of URLs. The URLs are read from an Excel file and the corresponding web pages are screenshot. The screenshots are saved to a specified directory. The code also uses threading to distribute the workload across multiple threads and run the tasks in parallel. The script is used to document evidence for trial bundle preparation.</p></li>
                    </ul>
                </div>
            </section>

        </Element>
    );
};

export default Projects;
