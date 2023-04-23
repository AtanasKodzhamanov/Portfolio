import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, useHistory } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';
import CV from './CV';
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();
    const currentPathRef = useRef(location.pathname);
    const prevPathRef = useRef("initial");

    function AnimatedRoutes({ currentPathRef, prevPathRef }) {
        const location = useLocation();

        if (prevPathRef.current !== currentPathRef.current) {
            console.log("current pathname: " + currentPathRef.current);
            console.log("previous pathname: " + prevPathRef.current);
            prevPathRef.current = currentPathRef.current;
            currentPathRef.current = location.pathname;
        }
    }

    const pathsOrder = ['/', '/projects', '/education', '/experience', '/cv'];

    const animationDirection = () => {
        const currentIndex = pathsOrder.indexOf(location.pathname);
        const prevIndex = pathsOrder.indexOf(prevPathRef.current);
        return currentIndex > prevIndex ? 'up' : 'down';
    };

    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<About direction={animationDirection()} />} />
                <Route path="/projects" element={<Projects direction={animationDirection()} />} />
                <Route path="/education" element={<Education direction={animationDirection()} />} />
                <Route path="/experience" element={<Experience direction={animationDirection()} />} />
                <Route path="/cv" element={<CV direction={animationDirection()} />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
