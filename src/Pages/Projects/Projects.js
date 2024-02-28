import React from "react";
import "./Projects.css";

const ProjectsPage = () => {
  return (
    <div className="page-overlay">
      <div className="projects-container">
        <div className="project-card landscape">
          <img
            src={require("../Projects/Images/PFile.png")}
            alt="Project 1"
            className="project-image"
          />
          <div className="project-details">
            <h3 className="project-title">PFile Application</h3>
            <p className="project-description">
              Led a project to develop a secure file submission platform
              enabling employees to upload personal documents remotely. Utilized
              React Native, React.js, and SwaggerAPI for seamless data
              transmission and secure login. Leveraged Microsoft SQL for data
              manipulation. <br />
              (10/2023 - 02/2024)
            </p>
          </div>
        </div>
        <div className="project-card landscape">
          <img
            src={require("../Projects/Images/SleepApnea.png")}
            alt="Project 2"
            className="project-image"
          />
          <div className="project-details">
            <h3 className="project-title">
              Artificial Intelligence Based Sleep Apnea Diagnosis System
            </h3>
            <p className="project-description">
              Empowers users with comprehensive insights into a patient's sleep
              patterns and overall sleep condition. Utilizes React JS, Firebase,
              and AIML for predictive guidance and real-time data integration.
              <br />
              (05/2023 - 08/2023)
            </p>
          </div>
        </div>
        <div className="project-card landscape">
          <img
            src={require("../Projects/Images/CGH_ss.png")}
            alt="Project 3"
            className="project-image"
          />
          <div className="project-details">
            <h3 className="project-title">CGH MRI Simulator</h3>
            <p className="project-description">
              Allows visualization of an actual MRI setting using Raspberry Pi
              and Python. Enhances patient comfort and reduces resource wastage
              through simulated scenarios. <br />
              (05/2023 - 08/2023)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
