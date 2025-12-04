import React from 'react'
import { Element } from 'react-scroll'
import useGoogleAnalytics from '../../functions/useGoogleAnalytics'
import Project from './Project'
import projectsData from '../../data/projectData'
import styles from './Project.module.css'
import global from '../../App.module.css'

const Projects = () => {
  useGoogleAnalytics()

  return (
    <Element name="Projects" className={global.section}>
      <h1>PROJECTS</h1>
      {projectsData.map((project, index) => (
        <section
          key={index}
          className={styles.project}
          id={project.projectName}
        >
          <Project project={project} />
          <br></br>
        </section>
      ))}
    </Element>
  )
}

export default Projects
