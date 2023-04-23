import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
import { Route, Routes } from 'react-router-dom';
import SideHeader from './components/SideHeader';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import CV from './components/CV';

function App() {
  return (
    <div className="page-body">
      <SideHeader />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
