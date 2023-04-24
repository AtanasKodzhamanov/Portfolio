import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

    useEffect(() => {
        prevPathRef.current = currentPathRef.current;
        currentPathRef.current = location.pathname;
    }, [location]);

    const pathsOrder = ['/', '/projects', '/education', '/experience', '/cv'];

    const animationDirection = () => {
        const currentIndex = pathsOrder.indexOf(location.pathname);
        const prevIndex = pathsOrder.indexOf(prevPathRef.current);
        return currentIndex > prevIndex ? 'up' : 'down';
    };

    return (
        <AnimatePresence>
            <Routes>
                <Route exact path="/" element={<About direction={animationDirection()} />} />
                <Route exact path="/projects" element={<Projects direction={animationDirection()} />} />
                <Route exact path="/education" element={<Education direction={animationDirection()} />} />
                <Route exact path="/experience" element={<Experience direction={animationDirection()} />} />
                <Route exact path="/cv" element={<CV direction={animationDirection()} />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
