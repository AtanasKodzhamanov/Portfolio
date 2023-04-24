import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideHeader.css';

function SideHeader(props) {
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();

    useEffect(() => {
        // Set the active link based on the current page URL
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <div className="navbar">
            <div className="side-header">
                <div className="portrait">
                    <img alt="portrait" src="https://media.licdn.com/dms/image/C4E03AQFOyZTGqtVpCQ/profile-displayphoto-shrink_400_400/0/1608346958215?e=1687996800&v=beta&t=_s4b9pwWifugANfBV5ZCXnd9mMw7Gb8fkzo3G_fjMac" />
                </div>
                <div className="side-header-links">
                    <Link className={activeLink === '/' ? 'active' : ''} to="/">ABOUT</Link>
                    <Link className={activeLink === '/projects' ? 'active' : ''} to="/projects">PROJECTS</Link>
                    <Link className={activeLink === '/education' ? 'active' : ''} to="/education">EDUCATION</Link>
                    <Link className={activeLink === '/experience' ? 'active' : ''} to="/experience">EXPERIENCE</Link>
                    <Link className={activeLink === '/cv' ? 'active' : ''} to="/cv">CV</Link>
                </div>
            </div>
        </div>
    );
}

export default SideHeader;
