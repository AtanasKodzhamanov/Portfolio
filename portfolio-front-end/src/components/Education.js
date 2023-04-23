import React from 'react';
import { motion } from 'framer-motion';
import { transition, variants } from './Animations';

const Education = ({ direction }) => {
    return (
        <motion.div
            className="education"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants[direction]}
        >
            <h1>Education</h1>
        </motion.div>
    );
};

export default Education;
