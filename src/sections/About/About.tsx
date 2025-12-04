import styles from './About.module.css'
/* contains brand logos to be imported in library */
import {
  faGithub,
  faLinkedin,
  faPython,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
/* element is used for smooth scrolling */
import { Element } from 'react-scroll'
import useGoogleAnalytics from '../../functions/useGoogleAnalytics'
import MiniProjects from './MiniProjects/MiniProjects'
import AboutSection from './AboutSection/AboutSection'

/* add brand logos to library */
library.add(faPython, faJsSquare, faReact, faGithub, faLinkedin)

const About = () => {
  /* add google analytics for page tracking */
  useGoogleAnalytics()

  return (
    /* Element is used for smooth scrolling to this section. To make it work you have to wrap the section with the component and name it. In the navigation use Link to link to the name of the element. */
    <Element name="About" className="section">
      <AboutSection />
    </Element>
  )
}

export default About
