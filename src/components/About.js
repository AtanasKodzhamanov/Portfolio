import React from 'react'
import './About.css'
/* contains brand logos to be imported in library */
import {
  faGithub,
  faLinkedin,
  faPython,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* element is used for smooth scrolling */
import { Element } from 'react-scroll'
import useGoogleAnalytics from './useGoogleAnalytics'

/* add brand logos to library */
library.add(faPython, faJsSquare, faReact, faGithub, faLinkedin)

const About = () => {
  /* add google analytics for page tracking */
  useGoogleAnalytics()

  return (
    /* Element is used for smooth scrolling to this section. To make it work you have to wrap the section with the component and name it. In the navigation use Link to link to the name of the element. */
    <Element name="About" className="section">
      <div className="name-container">
        <div className="name">
          <h1>Atanas Kodzhamanov</h1>
        </div>
        <div className="about-links-container">
          <h3>Software Engineer and Economist</h3>
          <a href="mailto:messageatanas@gmail.com">Email</a>
        </div>
      </div>
      <div className="about-content">
        <p>
          Hello there! Welcome to my portfolio website. This is where I get to
          present some of the projects I've worked on and share my profile with
          potential employers and collaborators. I primarily work with Python and Javascript, using frameworks like Django and React. I also have several years of professional experience in SQL, SAS and STATA programming.
        </p>
        <p>
          Take a look around and if you are looking to hire a junior developer don't hesitate to get in touch.
        </p>
      </div>
      <div className="about-icons-container">
        <div>
          <FontAwesomeIcon
            icon={faGithub}
            size="6x"
            style={{ color: '#2c3e50' }}
            onClick={() =>
              window.open('https://github.com/AtanasKodzhamanov/', '_blank')
            }
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="6x"
            style={{ color: '#2c3e50' }}
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/atanas-kodzhamanov/',
                '_blank'
              )
            }
          />
        </div>
        <hr />
      </div>
    </Element>
  )
}

export default About
