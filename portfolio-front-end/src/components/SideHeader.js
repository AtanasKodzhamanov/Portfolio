import React, { useState, useEffect } from 'react';
import './SideHeader.css';


function SideHeader(props) {
    return (
        <div className="navbar">
            <div className="side-header">
                <div className="portrait">
                    <img src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/three-toed-sloth-teaser-1.jpg.optimal.jpg" />
                </div>
                <div className="side-header-links">
                    <a href="/">ABOUT</a>
                    <a href="/projects">PROJECTS</a>
                    <a href="/education">EDUCATION</a>
                    <a href="/experience">EXPERIENCE</a>
                    <a href="/cv">CV</a>
                </div>
            </div>
        </div>
    );
}

export default SideHeader;