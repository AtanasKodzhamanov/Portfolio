import React, { useState, useEffect } from 'react';
import './SideHeader.css';


function SideHeader(props) {
    return (
        <div className="navbar">
            <div className="side-header">
                <div className="portrait">
                    <img src="https://media.licdn.com/dms/image/C4E03AQFOyZTGqtVpCQ/profile-displayphoto-shrink_400_400/0/1608346958215?e=1687996800&v=beta&t=_s4b9pwWifugANfBV5ZCXnd9mMw7Gb8fkzo3G_fjMac" />
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