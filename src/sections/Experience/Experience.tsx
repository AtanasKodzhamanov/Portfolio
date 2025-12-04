import { Element } from 'react-scroll'
import useGoogleAnalytics from '../../functions/useGoogleAnalytics'
import '../../global.css'
import ExperienceBubble from './ExperienceBubble'
import experienceData from '../../data/experienceData'
import styles from './Experience.module.css'
import Masonry from 'react-masonry-css'
const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 1,
}
const Experience = () => {
  useGoogleAnalytics()

  return (
    <Element name="Experience" className="section">
      <h1 className={styles.specialTitle}>EXPERIENCE</h1>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-4" // Tailwind flex wrapper
        columnClassName="pl-4 bg-clip-padding" // Gutter spacing
      >
        {experienceData.map((experience) => {
          return (
            // Add bottom margin to separate items vertically
            <div className="mb-4 bubble" key={experience.company}>
              <ExperienceBubble
                title={experience.jobTitle}
                date={`${experience.startDate} - ${experience.endDate}`}
                company={experience.company}
                description={experience.description}
              />
            </div>
          )
        })}
      </Masonry>
    </Element>
  )
}

export default Experience
