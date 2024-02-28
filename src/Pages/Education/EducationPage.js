import React from "react";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="page-overlay">
      <div className="job-experience-container">
        <h1 className="page-header">Education Journey</h1>

        <div className="section">
          <h2 className="section-header">Tertiary Education</h2>

          <div className="experience-item">
            <div className="experience-card">
              <div className="experience-details">
                <h3 className="experience-title">
                  Diploma in Computer Engineering
                </h3>
                <p className="duration">
                  Temasek Polytechnic | 04/2021 - 04/2024
                </p>
                <ul className="responsibilities">
                  <li>Current CGPA: 3.02/4.00</li>
                  <li>Active Member of Computer Engineering Club</li>
                  <li>Completed Coursework:</li>
                  <ul>
                    <li>
                      • Major Project, 2023 (Recipient of NUS BES Design
                      Category Bronze Award)
                    </li>
                    <li>
                      • Artificial Intelligence and Machine Learning, 2023
                      (Grade: A)
                    </li>
                    <li>• Advanced Skill Practice, 2023</li>
                    <li>• Full Stack Development, 2023</li>
                    <li>• Intelligent Automation, 2023</li>
                    <li>• Object-oriented Programming, 2022</li>
                    <li>• Microcontroller Application, 2022</li>
                    <li>• Internet Of Things Project, 2023</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section-header">Secondary School Education</h2>

          {/* Bedok Green Secondary School */}
          <div className="experience-item">
            <div className="experience-card">
              <div className="experience-details">
                <p className="duration">
                  Bedok Green Secondary School | 01/2017 - 12/2020
                </p>
                <ul className="responsibilities">
                  <li>Active Member of Basketball Sport Club</li>
                  <li>Completed Coursework:</li>
                  <ul>
                    <li>• Exercise and Sport Science, 2019-2020</li>
                    <li>• Design and Technology, 2018</li>
                    <li>• Food and Consumer Education, 2017</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
