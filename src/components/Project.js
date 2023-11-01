import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faGithub,
    faPython,
    faJsSquare,
    faReact,
    faCss3,
    faHtml5,
} from '@fortawesome/free-brands-svg-icons'


const Project = ({ project }) => {
    const icons = project.iconsList.map((iconObj, index) => {
        const props = {
            icon: iconObj.iconTitle,
            size: '3x',
            style: { color: '#2c3e50' },
            key: index
        };

        if (iconObj.iconLink) {
            props.onClick = () => window.open(iconObj.iconLink, '_blank');
        }

        return <FontAwesomeIcon {...props} />;
    });


    return (
        <section className="project">
            <div>
                <div className="title-icons">
                    <h2>{project.projectName}</h2>
                    <div className="icons">
                        {icons}
                    </div>
                </div>
                <a href={project.websiteLink} rel="noreferrer" target="_blank">{project.websiteName}</a>
                {project.description.map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>
                })}
                <p> </p>
                <p> </p>
                <p style={{ fontSize: '0.7em' }}>
                    STATUS: {project.status}
                </p>
                {project.screenshots &&
                    <div className="screenshots-container">
                        <h3>Project Screenshots</h3>
                        <div className="screenshots">
                            {project.screenshots.map((screenshot, index) => {
                                return (
                                    <div className="screenshot" key={index}>
                                        <img src={screenshot} alt="screenshot" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default Project