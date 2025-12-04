import React from 'react'
import './Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faLinkedin,
  faPython,
  faJsSquare,
  faReact,
  faCss3,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons'
import { Element } from 'react-scroll'
import useGoogleAnalytics from '../../functions/useGoogleAnalytics'

library.add(
  faPython,
  faJsSquare,
  faReact,
  faGithub,
  faLinkedin,
  faCss3,
  faHtml5
)

const Education = () => {
  useGoogleAnalytics()

  return (
    <Element name="Education" className="section">
      <h1 className="special-title">EDUCATION</h1>
      <br></br>
      <div>
        <h2>Economics</h2>
        <p>
          I am an Economist by education and have completed both a bachelors and
          a masters degree in economics.
        </p>
        <br></br>
        <div>
          <div className="education-school-box">
            <div className="tse-image">
              <img
                src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550391/atanas/66_j5wxhl.webp"
                alt="school"
                width="100%;"
                height="100%"
                object-fit="cover"
              />
            </div>
            <div className="tse-text">
              <div className="tse-text-second-half">
                <a
                  className="hover:underline"
                  href="https://www.tse-fr.eu/master-emo-international-track"
                >
                  Master in Economics of Markets and Organizations (M2)
                </a>
                <br></br>
                <a
                  className="hover:underline"
                  href="https://www.tse-fr.eu/masters-international-track"
                >
                  Master in Economics - International Track (M1)
                </a>
              </div>
              <br></br>
              <div className="tse-text-first-half">
                <h3>Toulouse School of Economics</h3>

                <p>
                  During my time at Toulouse School of Economics, I gained a
                  deep understanding of industrial organization, econometrics,
                  and game theory. The program provided me with rigorous
                  training in these subjects, and I had the opportunity to apply
                  my knowledge to real-world case studies and projects.{' '}
                </p>
                <br></br>
                <p>
                  Through my studies, I developed strong analytical and
                  problem-solving skills and gained a better understanding of
                  how economic theories and principles can be used to analyse
                  and understand complex market structures and behaviours. The
                  knowledge and skills I have acquired at Toulouse School of
                  Economics have already proved to be invaluable assets.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        <div>
          <div className="education-school-box">
            <div className="rhul-text">
              <div className="rhul-text-first-half">
                <div className="rhul-text-second-half">
                  <a
                    className="hover:underline"
                    href="https://www.royalholloway.ac.uk/studying-here/undergraduate/economics/economics/"
                  >
                    BSc Economics
                  </a>
                </div>
                <br></br>
                <br></br>

                <h3>Royal Holloway, University Of London</h3>
                <p>
                  I had the pleasure of studying at Royal Holloway, where I
                  completed a Bachelor of Science in Economics. During my time
                  there, I learned the fundamental principles of economics,
                  including how to analyse and interpret data to make informed
                  decisions. I also studied micro- and macroeconomics, finance,
                  and game theory, among other topics.
                </p>
              </div>
            </div>
            <div className="rhul-image">
              <img
                src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1685550391/atanas/77_iibd7u.webp"
                alt="school"
                width="100%;"
                height="100%"
                object-fit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Finance</h2>
        <div className="finance-box">
          <div className="finance-image">
            <img
              src="https://res.cloudinary.com/dxwb5ejff/image/upload/v1685553983/atanas/88_rw1zuk.webp"
              alt="logo"
              width="100%;"
              height="100%"
              object-fit="cover"
            />
          </div>
          <div className="finance-text">
            <a
              className="hover:underline"
              href="https://www.cfainstitute.org/en/programs/cfa/curriculum"
            >
              CFA curriculum
            </a>
            <h3>Passed all levels of CFA</h3>
            <p>
              I have completed all three levels of the Chartered Financial
              Analyst (CFA) exams. The CFA program is a professional credential
              that covers a range of topics in finance and investment. Through
              this program, I have gained a deeper understanding of investment
              principles, as well as practical skills in financial analysis,
              valuation, and portfolio management. I have also learned how to
              apply these concepts and skills in real-world scenarios and make
              informed, evidence-based decisions. Overall, the CFA program has
              been a valuable and enriching experience.
            </p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Education
