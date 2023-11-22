import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slideshow from './Slideshow'
import styles from './Project.module.css'
/* PROJECT STRUCTURE
{
    projectName: '',
    websiteName: '',
    websiteLink: '',
    iconsList: [
        {
            iconTitle: faPython,
            iconLink: null,
        },
    ],
    description: [

    ],
    status: ,
    screenshots: [],
},
*/

const Project = ({ project }) => {
  const icons = project.iconsList.map((iconObj, index) => {
    const props = {
      icon: iconObj.iconTitle,
      size: '3x',
      style: { color: '#2c3e50' },
      key: index,
    }

    if (iconObj.iconLink) {
      props.onClick = () => window.open(iconObj.iconLink, '_blank')
    }

    return <FontAwesomeIcon {...props} />
  })

  return (
    <section className="project">
      <div>
        <div className={styles.titleIcons}>
          <h2>{project.projectName}</h2>
          <div className={styles.icons}>{icons}</div>
        </div>
        <a href={project.websiteLink} rel="noreferrer" target="_blank">
          {project.websiteName}
        </a>
        <br />
        {project.screenshots && <Slideshow screenshots={project.screenshots} />}
        <br />
        <div className={styles.descriptionContainer}>
          {project.description.map((paragraph, index) => {
            return (
              <div className={styles.bubble}>
                <p key={index}>{paragraph}</p>
              </div>
            )
          })}
        </div>
        <br />
        <p style={{ fontSize: '0.7em' }}>STATUS: {project.status}</p>

      </div>
    </section>
  )
}

export default Project
