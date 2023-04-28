import React from 'react';
import './App.css'; // Import the CSS file
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
        <About />
        <Projects />
        <Education />
        <Experience />
        <CV />

      </div>
    </div>
  );
}

export default App;
