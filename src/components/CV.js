import React from 'react';
import { motion } from 'framer-motion';
import { transition, variants } from './Animations';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const CV = ({ direction }) => {
    return (
        <motion.div
            className="cv"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants[direction]}
        >
            <iframe src="https://drive.google.com/file/d/1uDAs24ewydq0tzsI-HNvbLIEoOXpCs7a/preview" width="900px" height="1200px"></iframe>
        </motion.div>
    );
};

export default CV;
