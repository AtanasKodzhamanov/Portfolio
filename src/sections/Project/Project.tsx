import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Masonry from 'react-masonry-css'
import Slideshow from '../../components/SlideShow/Slideshow'
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
        </div>{' '}
        <a
          className="hover:underline"
          href={project.websiteLink}
          rel="noreferrer"
          target="_blank"
        >
          {project.websiteName}
        </a>
        <br />
        {project.screenshots && <Slideshow screenshots={project.screenshots} />}
        <br />
        <Masonry
          breakpointCols={{ default: 2, 768: 1 }}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {project.description.map((paragraph, index) => {
            return (
              <div className="mb-4 bubble" key={index}>
                <p>{paragraph}</p>
              </div>
            )
          })}
        </Masonry>
        <br />
        <p style={{ fontSize: '0.7em' }}>STATUS: {project.status}</p>
      </div>
    </section>
  )
}

export default Project
