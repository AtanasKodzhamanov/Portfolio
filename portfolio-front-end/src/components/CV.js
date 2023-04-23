import React from 'react';
import { motion } from 'framer-motion';
import { transition, variants } from './Animations';

const CV = ({ direction }) => {
    return (
        <motion.div
            className="cv"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants[direction]}
        >
            <h1>CV</h1>
        </motion.div>
    );
};

export default CV;
