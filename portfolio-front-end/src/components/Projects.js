import React from 'react';
import { motion } from 'framer-motion';
import { transition, variants } from './Animations';

const Projects = ({ direction }) => {
    return (
        <motion.div
            className="projects"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants[direction]}
        >
            <h1>Projects</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc eu nunc aliquet, nec ultricies nisl aliquet
            </p>
        </motion.div>
    );
};

export default Projects;
