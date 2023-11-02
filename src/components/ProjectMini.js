import styles from "./ProjectMini.module.css"

const ProjectMini = ({ project }) => {

    return (
        <section className={styles.projectMini}>
            <div className={styles.projectNameAndDesc}>
                <h2>{project.projectName}</h2>
                <p>{project.shortDesc}</p>
            </div>
            <div>
                {project.screenshots && <img src={project.screenshots[0]} alt="screenshot" />}
            </div>
        </section>
    )
}

export default ProjectMini