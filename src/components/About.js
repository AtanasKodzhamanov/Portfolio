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
import ProjectMini from './ProjectMini'
import projectsData from '../data/projectData'

/* add brand logos to library */
library.add(faPython, faJsSquare, faReact, faGithub, faLinkedin)

const About = () => {
  /* add google analytics for page tracking */
  useGoogleAnalytics()

  return (
    /* Element is used for smooth scrolling to this section. To make it work you have to wrap the section with the component and name it. In the navigation use Link to link to the name of the element. */
    <Element name="About" className="section">

      <div className="about-content">
        <div>
          <h1 className="special-title">
            FULL-STACK DEVELOPER
          </h1>


          <h2>
            Hi, my name is Atanas.
          </h2><h2>I am a full-stack React (JavaScript) and Django (Python) developer. I also have several years of professional experience in SQL, SAS and STATA programming and economics consulting.
          </h2>

          <h2>
            Take a look around and if you are looking to hire a React/Django developer don't hesitate to get in touch.

          </h2>
          <br></br>
          <div className="about-links-container">
            <a href="mailto:messageatanas@gmail.com">Feel free to send me an Email</a>
          </div>

        </div>
      </div>
      <div className="mini-projects-section">
        {projectsData.map((project, index) => (
          <section key={index} className="project">
            <ProjectMini project={project} />
          </section>
        ))}
      </div>
    </Element>
  )
}

export default About
