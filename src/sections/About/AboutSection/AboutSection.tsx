import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../About.module.css'
import {
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
const AboutSection = () => {
  return (
    <div className="flex flex-col gap-8 w-full ">
      <h1>Hey, my name is Atanas</h1>
      {/* Top Row */}
      <div className="grid grid-cols-2 gap-8 w-full ">
        <div className="bubble flex flex-col items-center justify-center text-center">
          <h2>
            Full-stack <strong>React</strong> and <strong>Python</strong>{' '}
            developer
          </h2>
          <div className="icons-container">
            <FontAwesomeIcon
              icon={faPython}
              size="5x"
              style={{ color: '#2c3e50' }}
            />

            <FontAwesomeIcon
              icon={faJsSquare}
              size="5x"
              style={{ color: '#2c3e50' }}
            />

            <FontAwesomeIcon
              icon={faReact}
              size="5x"
              style={{ color: '#2c3e50' }}
            />
          </div>
        </div>
        <div className="bubble flex items-center justify-center text-center">
          <h2>
            with professional experience in <strong>SQL</strong>,{' '}
            <strong>SAS</strong>, <strong>STATA</strong> and{' '}
            <strong>economics</strong>
          </h2>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col gap-4">
        <div className="bubble">
          <div className="w-full flex flex-row justify-evenly items-center">
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
            {/* <a
              className={styles.link}
              href="https://drive.google.com/file/d/1KHYGUJLIZA3rkQayvN6L_XrfxXn5MCQe/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download my <strong>CV</strong>
            </a> */}
            {/* <a
              className={styles.link}
              href="https://github.com/AtanasKodzhamanov/"
              target="_blank"
              rel="noreferrer"
            >
              Check out my <strong>github</strong>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
