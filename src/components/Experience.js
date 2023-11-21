import React from 'react'
import { Element } from 'react-scroll'
import useGoogleAnalytics from './useGoogleAnalytics'
import "../global.css"
import ExperienceBubble from './ExperienceBubble'
import experienceData from '../data/experienceData'
import styles from './Experience.module.css'

const Experience = () => {
  useGoogleAnalytics()

  return (
    <Element name="Experience" className="section">
      <h1 className={styles.specialTitle}>EXPERIENCE</h1>
      <div className={styles.experienceContainer}>
        {experienceData.map((experience, index) => {
          return (
            <div className={styles.bubble} key={index}>
              <ExperienceBubble
                title={experience.jobTitle}
                date={`${experience.startDate} - ${experience.endDate}`}
                company={experience.company}
                description={experience.description}
              />
            </div>
          )
        })}
      </div>
    </Element>
  )
}

export default Experience
