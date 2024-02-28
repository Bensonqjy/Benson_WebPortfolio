import React from "react";
import "./JobExperience.css";

const JobExperience = () => {
  return (
    <div className="page-overlay">
      <div className="job-experience-container">
        <h1 className="page-header">Work Experience</h1>

        <div className="section">
          <h2 className="section-header">Internship Experience</h2>

          <div className="experience-item">
            <div className="experience-card">
              <div className="experience-details">
                <h3 className="experience-title">Mobile App Developer</h3>
                <p className="company">
                  Systems on Silicon Manufacturing Company Pte Ltd
                </p>
                <p className="duration">Duration: 10/2023 - 02/2024</p>
                <ul className="responsibilities">
                  <li>
                    • PFile Application: Mobile App development (Microsoft
                    Azure, React Native, React JS, ASP.Net, SwaggerAPI,
                    Microsoft SQL)
                  </li>
                  <li>
                    • Assisted in the completion of RFP IT Ticketing system
                    proposal
                  </li>
                  <li>
                    • Powerpoint Macro: Splitting and Merging of Powerpoint
                    Slides
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-header">Professional Experience</h2>

          <div className="experience-item">
            <div className="experience-card">
              <div className="experience-details">
                <h3 className="experience-title">Executive Member</h3>
                <p className="company">People’s Association</p>
                <p className="duration">Duration: 01/2023 - 12/2024</p>
                <ul className="responsibilities">
                  <li>
                    • Fostered community bonds through engagement and event
                    organization
                  </li>
                  <li>
                    • Provided up-to-date information and collaborated with
                    authorities to address concerns
                  </li>
                  <li>
                    • Passionate about creating a close-knit and thriving
                    community
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-card">
              <div className="experience-details">
                <h3 className="experience-title">Apple Retail Associate</h3>
                <p className="company">Challenger Technologies Limited</p>
                <p className="duration">Duration: 01/2021 - 03/2023</p>
                <ul className="responsibilities">
                  <li>• Recommended products based on customer needs</li>
                  <li>• Provided exceptional customer service</li>
                  <li>• Developed strong interpersonal communication skills</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobExperience;
