import styles from './ExperienceBubble.module.css'

const ExperienceBubble = (props) => {

    return (
        <div className={styles.experienceBubble}>
            <div className={styles.titleDateRow}>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
            </div>
            <h3>{props.company}</h3>
            {props.description.map((description, index) => {
                return <p key={index}>{description}</p>
            })}
        </div>
    )
}

export default ExperienceBubble