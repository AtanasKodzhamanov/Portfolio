import React from 'react';

import './Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faPython, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { Element } from 'react-scroll';


library.add(faPython, faJsSquare, faReact, faGithub, faLinkedin);

const Education = () => {
    return (
        <Element name="Education" className="section">

            <h1>Education and Experience</h1>
            <br></br>
            <div>
                <h2>Programming</h2>
                <div className="icons-container">
                    <div>
                        <FontAwesomeIcon icon={faPython} size="6x" style={{ color: "#2c3e50" }} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faJsSquare} size="6x" style={{ color: "#2c3e50" }} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faReact} size="6x" style={{ color: "#2c3e50" }} />
                    </div>

                </div>
                <p>I have experience with a variety of programming languages, including Python, SAS, SQL, STATA, JavaScript, R and C#. I have used these languages to develop a range of applications and solve complex problems on both professional and hobby projects. I am always looking to improve my programming skills, learn new technologies and expand my skillset in the field of programming. </p>
                <p>My formal programming education comprises of:</p>
                <ul>
                    <li>Software University: various courses in Python, Django, ReactJS, C#, JavaScript, SQL, HTML and CSS</li>
                    <li>Formal training and certifications in SAS and SAS SQL</li>
                    <li>Online courses, university classes and on the job training in STATA</li>
                    <li>Online courses, university classes and on the job training in R</li>
                    <li>Various other Udemy and LinkedIn Learning Python and ReactJS classes</li>
                </ul>
            </div>
            <br></br>
            <div>
                <h2>Economics</h2>
                <p>I am an Economist by education and have completed both a bachelors and a masters degree in economics.
                </p>
                <div>
                    <div className="education-school-box">
                        <div className="tse-image">
                            <img src="https://www.lamm.it/wp-content/uploads/Toulouse-School-of-Economics-Study-benches-LAMM-1.jpg" alt="school" width="100%;" height="100%" object-fit="cover" />
                        </div>
                        <div className="tse-text">
                            <div className="tse-text-first-half">
                                <h3>Toulouse School of Economics</h3>

                                <p>During my time at Toulouse School of Economics, I gained a deep understanding of industrial organization, econometrics, and game theory. The program provided me with rigorous training in these subjects, and I had the opportunity to apply my knowledge to real-world case studies and projects. </p>
                                <p>
                                    Through my studies, I developed strong analytical and problem-solving skills and gained a better understanding of how economic theories and principles can be used to analyse and understand complex market structures and behaviours. The knowledge and skills I have acquired at Toulouse School of Economics have already proved to be invaluable assets.</p>
                            </div>
                            <div className="tse-text-second-half">
                                <a href="https://www.tse-fr.eu/master-emo-international-track">Master in Economics of Markets and Organizations (M2)</a>
                                <br></br>
                                <a href="https://www.tse-fr.eu/masters-international-track">Master in Economics - International Track (M1)</a>
                                <p>Skills: Industrial Economics · Python · R · STATA · Econometrics</p>
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
                                <h3>Royal Holloway, University Of London</h3>
                                <p>I had the pleasure of studying at Royal Holloway, where I completed a Bachelor of Science in Economics. During my time there, I learned the fundamental principles of economics, including how to analyse and interpret data to make informed decisions. I also studied micro- and macroeconomics, finance, and game theory, among other topics.</p>
                            </div>
                            <div className="rhul-text-second-half">
                                <a href="https://www.royalholloway.ac.uk/studying-here/undergraduate/economics/economics/">BSc Economics</a>
                                <p>Skills: Economics · Econometrics · STATA</p>
                            </div>

                        </div>
                        <div className="rhul-image">
                            <img src="https://i2-prod.getsurrey.co.uk/incoming/article13821588.ece/ALTERNATES/s1227b/MSR_SAH_030215snow_01.jpg" alt="school" width="100%;" height="100%" object-fit="cover" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2>Finance</h2>
                <div className="finance-box">
                    <div className="finance-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cfa-institute-logo.svg/768px-Cfa-institute-logo.svg.png?20201124173558" alt="logo" width="100%;" height="100%" object-fit="cover" />
                    </div>
                    <div className="finance-text">
                        <h3>Passed all levels of CFA</h3>
                        <p>I have completed all three levels of the Chartered Financial Analyst (CFA) exams. The CFA program is a professional credential that covers a range of topics in finance and investment. Through this program, I have gained a deeper understanding of investment principles, as well as practical skills in financial analysis, valuation, and portfolio management. I have also learned how to apply these concepts and skills in real-world scenarios and make informed, evidence-based decisions. Overall, the CFA program has been a valuable and enriching experience.</p>
                        <a href="https://www.cfainstitute.org/en/programs/cfa/curriculum">CFA curriculum</a>
                    </div>
                </div>
            </div>
            <div>
                <h2>Various Certifications</h2>
            </div>
        </Element>
    );
};

export default Education;
