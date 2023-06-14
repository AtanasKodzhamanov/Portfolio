import React from 'react'
import { Element } from 'react-scroll'
import useGoogleAnalytics from './useGoogleAnalytics'
import './Experience.css'

const Experience = () => {
  useGoogleAnalytics()

  return (
    <Element name="Experience" className="section">
      <h1>Experience</h1>
      <div>
        <h2>Competition Economist</h2>
        <div className="company-date">
          <h3>AlixPartners</h3>
          <h3>2020 - 2023</h3>
        </div>
        <a href="https://www.alixpartners.com/services/economics-consulting/">
          Economics Consulting
        </a>

        <div>
          <p>
            I drafted sections of expert reports, conducted market research and
            literature reviews, performed data analysis, proposed arguments,
            built econometric models, and debugged code in Stata/Python/R.
          </p>

          <p>
            Working with a leading agricultural supplier, I researched past
            cartels and the economic theory behind buyer cartels to help address
            a claim regarding an alleged buyer cartel.
          </p>

          <p>
            I provided support for a major media broadcaster during a dispute in
            contractual terms renegotiation following Covid-19. My role involved
            conducting econometric and statistical analyses to predict football
            game TV viewership using Stata and Tableau.
          </p>

          <p>
            In the telecommunication sector, I analyzed post-merger competitive
            effects and foreclosure incentives using a vertical price pressure
            model.
          </p>

          <p>
            I was part of the team defending Visa against a damages claim raised
            by Sainsbury’s, focusing on the setting of multilateral interchange
            fees.
          </p>

          <p>
            Collaborating with a major car manufacturing company, I conducted
            overcharge pass-on analyses and built a damages estimation model in
            Stata and Excel to address a damages claim related to a car part
            cartel.
          </p>

          <p>
            I offered assistance to a toy manufacturer facing an abuse of
            dominance foreclosure case.
          </p>
        </div>
      </div>
      <div>
        <h2>SAS Developer</h2>
        <div className="company-date">
          <h3>Computershare UK and Base 3 Systems</h3>
          <h3>2016 - 2018</h3>
        </div>
        <div>
          <p>
            Delivered and managed adhoc and regular MI reports for clients
            across the business using SAS Enterprise Guide, SAS DI Studio, SQL
            and VBA.
          </p>
          <p>
            Automated and made the production of weekly reports more efficient
            using Excel VBA.
          </p>
          <p>Extensive coding and debugging of SAS and SQL code.</p>
          <p>
            Ensured that SQL and SAS code ran as efficiently as possible to
            accommodate the large datasets being handled.
          </p>
        </div>
      </div>
    </Element>
  )
}

export default Experience
