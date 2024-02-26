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
    DonaDogs: 0,
    'Know Thy Art': 1,
    'Walks Of Life': 2,
    'Construct-M': 9,
    'Itesica Notes': 4,
    'Planetary Defence': 5,
    Babylon: 6,
    'This portfolio website': 7,
    EOA: 8,
  }

  const sortedProjectsData = [...projectsData].sort(
    (a, b) => projectsOrder[a.projectName] - projectsOrder[b.projectName]
  )

  return (
    /* Element is used for smooth scrolling to this section. To make it work you have to wrap the section with the component and name it. In the navigation use Link to link to the name of the element. */
    <Element name="About" className="section">
      <div className={styles.aboutContent}>
        <div>
          <h1>Hey, my name is Atanas</h1>
          <div className={styles.infoParas}>
            <div className={styles.bubble}>
              <h2>
                I am a full-stack <strong>React</strong> (JavaScript) and{' '}
                <strong>Django</strong> (Python) developer
              </h2>
            </div>
            <div className={styles.bubble}>
              <h2>
                with several years of professional experience in SQL, SAS and
                STATA programming and economics consulting
              </h2>
            </div>
          </div>
          <div className={styles.bubble}>
            <div className={styles.linksContainer}>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/atanas-kodzhamanov/"
                target="_blank"
                rel="noreferrer"
              >
                message me on <strong>linkedin</strong>
              </a>
              <a className={styles.link} href="mailto:messageatanas@gmail.com">
                Drop me an <strong>Email</strong>
              </a>
              <a
                className={styles.link}
                href="https://drive.google.com/file/d/1KHYGUJLIZA3rkQayvN6L_XrfxXn5MCQe/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Download my <strong>CV</strong>
              </a>
              <a
                className={styles.link}
                href="https://github.com/AtanasKodzhamanov/"
                target="_blank"
                rel="noreferrer"
              >
                Check out my <strong>github</strong>
              </a>
            </div>
          </div>
          <div className={styles.bubble} style={{ display: "flex", justifyContent: "center" }}>
            <a
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              href="https://store.steampowered.com/app/2797630/Walks_Of_Life/"
            >
              Wishlist <strong>Walks of Life</strong> on Steam!
            </a>
          </div>
        </div>
      </div>
      <div className={styles.miniProjectsSection}>
        {sortedProjectsData.map((project, index) => (
          <div key={index}>
            <ProjectMini project={project} targetId={project.projectName} />
          </div>
        ))}
      </div>
    </Element >
  )
}

export default About
