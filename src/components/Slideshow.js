import styles from './Slideshow.module.css'
import { useState } from 'react'

const Slideshow = ({ screenshots }) => {
  const [index, setIndex] = useState(0)

  return (
    <>
      <div className={styles.screenshotsContainer}>
        <div className={styles.slideshow}>
          {screenshots && <img src={screenshots[index]} alt="screenshot" />}
        </div>
      </div>
      {screenshots.length > 1 && (
        <div className={styles.buttonsContainer}>
          <button
            className={styles.slideshowPrevButton}
            onClick={() =>
              setIndex((prevIndex) =>
                prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
              )
            }
          >
            <h1>&#8592;</h1>
          </button>
          <button
            className={styles.slideshowNextButton}
            onClick={() => setIndex((index + 1) % screenshots.length)}
          >
            <h1>&#8594;</h1>
          </button>
        </div>
      )}
    </>
  )
}

export default Slideshow
