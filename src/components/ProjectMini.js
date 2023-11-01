import './ProjectMini.css'

const ProjectMini = ({ project }) => {

    return (
        <section className="projectMini">
            <div>
                <div className="title-icons">
                    <h2>{project.projectName}</h2>
                </div>
                <a href={project.websiteLink} rel="noreferrer" target="_blank">{project.websiteName}</a>
            </div>
            {project.screenshots && <img src={project.screenshots[0]} alt="screenshot" />}
        </section>
    )
}

export default ProjectMini