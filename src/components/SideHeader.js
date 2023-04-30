import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './SideHeader.css';

function SideHeader(props) {
    const [activeLink, setActiveLink] = useState('');


    return (
        <div className="navbar">
            <div className="side-header">
                <div className="portrait">
                    <a href="https://www.linkedin.com/in/atanas-kodzhamanov/" target="_blank" rel="noopener noreferrer">
                        <img alt="portrait" src="https://media.licdn.com/dms/image/C4E03AQFOyZTGqtVpCQ/profile-displayphoto-shrink_400_400/0/1608346958215?e=1687996800&v=beta&t=_s4b9pwWifugANfBV5ZCXnd9mMw7Gb8fkzo3G_fjMac" />
                    </a>
                </div>
                <div className="side-header-links">
                    <Link className={activeLink === 'About' ? 'active' : ''} to="About" smooth={true} duration={500} spy={true} onSetActive={() => setActiveLink('About')} onSetInactive={() => setActiveLink('')}>About</Link>
                    <Link className={activeLink === 'Projects' ? 'active' : ''} to="Projects" smooth={true} duration={500} spy={true} onSetActive={() => setActiveLink('Projects')} onSetInactive={() => setActiveLink('')}>Projects</Link>
                    <Link className={activeLink === 'Education' ? 'active' : ''} to="Education" smooth={true} duration={500} spy={true} onSetActive={() => setActiveLink('Education')} onSetInactive={() => setActiveLink('')}>Education</Link>
                    <Link className={activeLink === 'Experience' ? 'active' : ''} to="Experience" smooth={true} duration={500} spy={true} onSetActive={() => setActiveLink('Experience')} onSetInactive={() => setActiveLink('')}>Experience</Link>
                    <Link className={activeLink === 'CV' ? 'active' : ''} to="CV" smooth={true} duration={500} spy={true} onSetActive={() => setActiveLink('CV')} onSetInactive={() => setActiveLink('')}>CV</Link>
                </div>

            </div>
        </div>
    );
}

export default SideHeader;
