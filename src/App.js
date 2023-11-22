import React from 'react'
import styles from './App.module.css'
import SideHeader from './components/SideHeader'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import './global.css'

const App = () => {
  return (
    <div className={styles.pageBody}>
      <div className={styles.contentContainer}>
        <SideHeader />
        <div id="about">
          <section>
            <About />
          </section>
        </div>

        <div id="experience">
          <section>
            <Experience />
          </section>
        </div>

        <div id="projects">
          <section>
            <Projects />
          </section>
        </div>

        <div id="education">
          <section>
            <Education />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
