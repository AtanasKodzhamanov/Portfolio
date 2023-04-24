import React from 'react';
import './App.css'; // Import the CSS file
import SideHeader from './components/SideHeader';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {

  return (
    <div className="page-body">
      <SideHeader />
      <div className="content-container">
        <AnimatedRoutes />
      </div>
    </div>
  );
}

export default App;
