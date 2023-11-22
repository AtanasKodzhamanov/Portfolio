import styles from './ProjectMini.module.css'
import '../global.css'
import { Link } from 'react-scroll'

const ProjectMini = ({ project, targetId }) => {
  return (
    <Link
      to={targetId}
      smooth={true}
      duration={500}
      offset={-50}
      className={styles.projectMini}
    >
      <section>
        <div className={styles.projectNameAndDesc}>
          <h2>{project.projectName}</h2>
          <p>{project.shortDesc}</p>
        </div>
        <div>
          {project.screenshots && (
            <img
              src={project.screenshots[0]}
              alt={`${project.projectName} screenshot`}
            />
          )}
        </div>
      </section>
    </Link>
  )
}

export default ProjectMini
