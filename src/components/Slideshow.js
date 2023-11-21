import styles from "./Slideshow.module.css"
import { useState } from "react"

const Slideshow = ({ screenshots }) => {

    const [index, setIndex] = useState(0)

    return (
        <div className={styles.slideshow}>
            {screenshots &&
                <>
                    <button className={styles.slideshowPrevButton}
                        onClick={() => setIndex((prevIndex) => prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1)}
                    >Prev</button>
                    <img src={screenshots[index]} alt="screenshot" />
                    <button className={styles.slideshowNextButton} onClick={() => setIndex((index + 1) % screenshots.length)}>Next</button>
                </>
            }
        </div>
    )
}

export default Slideshow