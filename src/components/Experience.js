import React from 'react';
import { motion } from 'framer-motion';

import { transition, variants } from './Animations';

const Experience = ({ direction }) => {
    return (
        <motion.div
            className="experience"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants[direction]}
        >
            <h1>Experience</h1>
        </motion.div>
    );
};

export default Experience;
