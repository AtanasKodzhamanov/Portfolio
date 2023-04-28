import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faPython, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import dona1 from "../assets/dona1.png"
import dona2 from "../assets/dona2.png"
import Dona3 from "../assets/Dona3.png"
import Dona4 from "../assets/Dona4.png"
import Dona5 from "../assets/Dona5.png"
import { Element } from 'react-scroll';
import './Projects.css';

library.add(faPython, faJsSquare, faReact, faGithub);

const Projects = () => {
    return (
        <Element name="Projects" className="section">
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
                            icon={faReact}
                            size="3x"
                            style={{ color: "#2c3e50" }}
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
                            <img src={Dona5} alt="screenshot5" />
                        </div>
                        <div className="screenshot">
                            <img src={dona1} alt="screenshot1" />
                        </div>
                        <div className="screenshot">
                            <img src={dona2} alt="screenshot2" />
                        </div>
                        <div className="screenshot">
                            <img src={Dona3} alt="screenshot3" />
                        </div>
                        <div className="screenshot">
                            <img src={Dona4} alt="screenshot4" />
                        </div>
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={faGithub}
                    size="6x"
                    style={{ color: "#2c3e50" }}
                    onClick={() => window.open("https://github.com/AtanasKodzhamanov/www.DonaDogs.org", "_blank")}
                />
            </div>

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
                    </div>
                </div>
                <p>Itesica Notes is a note taking app and my first ReactJS project (Django backend) and my project submission at SoftUni's ReactJS course. The aim of this app was to practice and improve my ReactJS skills while creating a product that can solve a personal need of mine of having a note taking app that I can use to store information on various topics in an easily accessible manner.</p>
                <p>The website supports multiple users with each able to add,view,edit and delete their notes. The app design and visuals are my own.</p>
            </div>
            <div>
                <div className="title-icons">
                    <h2>Construct-m</h2>
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
                    </div>
                </div>
                <p>Consult-m is a freelance project developed for the needs of an engineering consultancy. Built with ReactJS. </p>
                <p>The website design and visuals were made in collaboration with the client.</p>
            </div>
            <div>
                <h2>Video Nabludenie</h2>
                <p>Video Nabludenie (translated to Camera Surveillance) is a freelance project developed for the needs of a camera installation firm in Bulgaria. The website is built using ReactJS.</p>
                <p>The website design and visuals were made in collaboration with the client.</p>
            </div>
            <div>
                <div className="title-icons">
                    <h2>Tiny Projects</h2>
                    <div className="icons">
                        <FontAwesomeIcon
                            icon={faPython}
                            size="3x"
                            style={{ color: "#2c3e50" }}
                        />
                    </div>
                </div>
                <p>These are some of the smaller projects I've worked on. They are mostly built with Python and aimed to solve real world problems that I've had.</p>
            </div>


        </Element>
    );
};

export default Projects;
