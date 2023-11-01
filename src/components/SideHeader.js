import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './SideHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function SideHeader() {
  const [activeLink, setActiveLink] = useState('')
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen)
  }

  const navStyle = {
    width: navOpen ? '100%' : '0%',
  }

  return (
    <div className="navbar">
      <div id="mobile-nav" style={navStyle} className="mobile-nav">
        <Link
          to="About"
          smooth={true}
          duration={500}
          onClick={() => setNavOpen(false)}
        >
          <h3 >About</h3>
        </Link>
        <Link
          to="Projects"
          smooth={true}
          duration={500}
          onClick={() => setNavOpen(false)}
        >
          <h3>Projects</h3>
        </Link>
        <Link
          to="Experience"
          smooth={true}
          duration={500}
          onClick={() => setNavOpen(false)}
        >
          <h3>Experience</h3>
        </Link>
        <Link
          to="Education"
          smooth={true}
          duration={500}
          onClick={() => setNavOpen(false)}
        >
          <h3>Education</h3>
        </Link>
      </div>
      <div className="side-header">
        <div className="side-header-links">
          <div>
            <Link
              className={activeLink === 'About' ? 'active' : ''}
              to="About"
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveLink('About')}
              onSetInactive={() => setActiveLink('')}
            >
              About
            </Link>
          </div>
          <div>
            <Link
              className={activeLink === 'Experience' ? 'active' : ''}
              to="Experience"
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveLink('Experience')}
              onSetInactive={() => setActiveLink('')}
            >
              Experience
            </Link>
          </div>
          <Link
            className={activeLink === 'Projects' ? 'active' : ''}
            to="Projects"
            smooth={true}
            duration={500}
            spy={true}
            onSetActive={() => setActiveLink('Projects')}
            onSetInactive={() => setActiveLink('')}
          >
            Projects
          </Link>
          <div>
            <Link
              className={activeLink === 'Education' ? 'active' : ''}
              to="Education"
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveLink('Education')}
              onSetInactive={() => setActiveLink('')}
            >
              Education
            </Link>
          </div>
        </div>
      </div>
      <div id="hamburger-icon" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} size="lg" style={{ color: 'white' }} />
      </div>
    </div>
  )
}

export default SideHeader
