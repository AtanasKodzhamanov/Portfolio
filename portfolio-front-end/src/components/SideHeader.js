import React, { useState, useEffect } from 'react';
import './SideHeader.css';

function SideHeader(props) {
    return (
        <div className="side-header">
            <div className="portrait">
                <img src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/three-toed-sloth-teaser-1.jpg.optimal.jpg" />
            </div>
            <div className="side-header-links">
                <a href="/">About</a>
                <a href="/projects">Projects</a>
                <a href="/education">Education</a>
                <a href="/experience">Experience</a>
                <a href="/cv">CV</a>
            </div>
        </div>
    );
}

export default SideHeader;