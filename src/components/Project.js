import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slideshow from './Slideshow';
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
                            <Slideshow screenshots={project.screenshots} />
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default Project