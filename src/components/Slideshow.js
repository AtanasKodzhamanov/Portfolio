import styles from "./Slideshow.module.css"
import { useState } from "react"

const Slideshow = ({ screenshots }) => {

    const [index, setIndex] = useState(0)

    return (
        <>
            {screenshots &&
                <>
                    <img src={screenshots[index]} alt="screenshot" className={styles.slideshow} />
                    <button onClick={() => setIndex((index + 1) % screenshots.length)}>Next</button>
                </>
            }
        </>
    )
}

export default Slideshow