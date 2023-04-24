import React from 'react';
import './About.css';
import { motion } from "framer-motion";
import { variants } from './Animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faPython, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';


library.add(faPython, faJsSquare, faReact, faGithub, faLinkedin);


const About = ({ direction }) => {
    return (
        <motion.div
            className="cv"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants[direction]}
        >
            <div className="name-container">
                <div className="name">
                    <h1>Atanas Kodzhamanov</h1>
                </div>
                <div className="about-links-container">
                    <h3>Full Stack Developer</h3>
                    <p>-</p>
                    <a href="mailto:kodzhamanov@gmail.com">kodzhamanov@gmail.com</a>
                    <p>-</p>
                    <a href="/">CV</a>
                </div>
            </div>
            <div className="about-content">
                <p>Hey there! Welcome to my portfolio website. This is where I get to show off some of the stuff I've created and share my skills with you.

                </p>
                <p>Take a look around and let's connect to see how we can work together on something awesome!</p>
            </div>
            <div className="icons-container">
                <div>
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="6x"
                        style={{ color: "#2c3e50" }}
                        onClick={() => window.open("https://github.com/AtanasKodzhamanov/", "_blank")}
                    />
                </div>
                <div>
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        size="6x"
                        style={{ color: "#2c3e50" }}
                        onClick={() => window.open("https://www.linkedin.com/in/atanas-kodzhamanov/", "_blank")}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default About;





