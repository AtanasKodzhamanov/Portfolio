import React from 'react'
import styles from './About.module.css'
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

  const projectsOrder = {
    "DonaDogs": 0,
    "Know Thy Art": 1,
    "Walks Of Life": 2,
    "Construct-M": 3,
    "Itesica Notes": 4,
    "Planetary Defence": 5,
    "Babylon": 6,
    "This portfolio website": 7,
    "EOA": 8
  };

  const sortedProjectsData = [...projectsData].sort((a, b) => projectsOrder[a.projectName] - projectsOrder[b.projectName]);

  return (
    /* Element is used for smooth scrolling to this section. To make it work you have to wrap the section with the component and name it. In the navigation use Link to link to the name of the element. */
    <Element name="About" className="section">

      <div className={styles.aboutContent}>
        <div>
          <h1>
            Hey, my name is Atanas
          </h1>
          <h2>
            I am a full-stack <strong>React</strong> (JavaScript) and <strong>Django</strong> (Python) developer. I also have several years of professional experience in SQL, SAS and STATA programming and economics consulting.
          </h2>
          <h2>
            Take a look around and if you are looking to hire a React/Django developer don't hesitate to get in touch.
          </h2>
          <br></br>
          <div className={styles.aboutLinksContainer}>
            <a href="mailto:messageatanas@gmail.com">Send me an Email</a>
          </div>

        </div>
      </div>
      <div className={styles.miniProjectsSection}>
        {sortedProjectsData.map((project, index) => (
          <div key={index}>
            <ProjectMini project={project} />
          </div>
        ))}
      </div>
    </Element>
  )
}

export default About
