import React from 'react';
import './About.css';
import { motion } from "framer-motion";
import { transition, variants } from './Animations';


const About = ({ direction }) => {
    return (
        <motion.div
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
        </motion.div>
    );
};

export default About;





