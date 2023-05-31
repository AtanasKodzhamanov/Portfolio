import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import './SideHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function SideHeader() {
    const [activeLink, setActiveLink] = useState('');
    const [navOpen, setNavOpen] = useState(false);
    const navRef = useRef(null);

    const toggleNav = () => {
        setNavOpen((prevNavOpen) => !prevNavOpen);
    };

    const navStyle = {
        width: navOpen ? '100%' : '0%',
    };

    return (
        <div className="navbar">
            <div id="mobile-nav" style={navStyle} ref={navRef} className="mobile-nav">
                <Link className={activeLink === 'About' ? 'active' : ''} to="About" smooth={true} duration={500} spy={true} onSetActive={() => setActiveLink('About')} onSetInactive={() => setActiveLink('')} onClick={() => setNavOpen(false)}><h3>About</h3></Link>
                <Link className={activeLink === 'Projects' ? 'active' : ''} to="Projects" smooth={true} duration={500} spy={true} onSetActive={() => setActiveLink('Projects')} onSetInactive={() => setActiveLink('')} onClick={() => setNavOpen(false)}><h3>Projects</h3></Link>
                <Link className={activeLink === 'Education' ? 'active' : ''} to="Education" smooth={true} duration={500} spy={true} onSetActive={() => setActiveLink('Education')} onSetInactive={() => setActiveLink('')} onClick={() => setNavOpen(false)}><h3>Education</h3></Link>
                <Link className={activeLink === 'Experience' ? 'active' : ''} to="Experience" smooth={true} duration={500} spy={true} onSetActive={() => setActiveLink('Experience')} onSetInactive={() => setActiveLink('')} onClick={() => setNavOpen(false)}><h3>Experience</h3></Link>
                <Link className={activeLink === 'CV' ? 'active' : ''} to="CV" smooth={true} duration={500} spy={true} onSetActive={() => setActiveLink('CV')} onSetInactive={() => setActiveLink('')} onClick={() => setNavOpen(false)}><h3>CV</h3></Link>
            </div>
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
            <div id="hamburger-icon" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} size="lg" style={{ color: 'white' }} />
            </div>
        </div>
    );
}

export default SideHeader;
