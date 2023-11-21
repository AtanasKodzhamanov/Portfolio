import React from 'react'
import { Element } from 'react-scroll'
import './Projects.css'
import useGoogleAnalytics from './useGoogleAnalytics'
import Project from './Project'
import projectsData from '../data/projectData'

const Projects = () => {
    useGoogleAnalytics()

    return (
        <Element name="Projects" className="section">
            <h1 className="special-title">PROJECTS</h1>

            {projectsData.map((project, index) => (
                <section key={index} className="project" id={project.projectName}>
                    <Project project={project} />
                </section>
            ))}

        </Element>
    )
}

export default Projects
