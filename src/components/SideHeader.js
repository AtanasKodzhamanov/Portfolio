import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './SideHeader.css'
import '../global.css'

function SideHeader() {
  const [activeLink, setActiveLink] = useState('')

  return (
    <div className="navbar">
      <div id="mobile-nav" className="mobile-nav">
        <Link to="About" smooth={true} duration={500} offset={-100}>
          <h3>About</h3>
        </Link>
        <Link to="Projects" smooth={true} duration={500} offset={-100}>
          <h3>Projects</h3>
        </Link>
        <Link to="Experience" smooth={true} duration={500} offset={-100}>
          <h3>Experience</h3>
        </Link>
        <Link to="Education" smooth={true} duration={500} offset={-100}>
          <h3>Education</h3>
        </Link>
      </div>
    </div>
  )
}

export default SideHeader
