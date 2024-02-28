import React from "react";
import "./VolunteerExperience.css";

const VolunteerExperience = () => {
  return (
    <div className="page-overlay">
      <div className="education-container">
        <h1 className="page-header">Volunteering Journey</h1>

        {/* Volunteer Experience Card */}
        <div className="experience-card">
          <div className="experience-details">
            <h3 className="experience-title">Taekwondo Instructor</h3>
            <p className="duration">01/2024 - Present</p>
            <p className="responsibilities">
              Assisted the Head Coach in coaching students and administrative
              matters
            </p>
          </div>
        </div>

        {/* Volunteer Experience Card */}
        <div className="experience-card">
          <div className="experience-details">
            <h3 className="experience-title">Grassroots Leader</h3>
            <p className="duration">09/2022 - Present</p>
            <p className="responsibilities">
              Assist in the activities planned by the committee
            </p>
          </div>
        </div>

        {/* Volunteer Experience Card */}
        <div className="experience-card">
          <div className="experience-details">
            <h3 className="experience-title">Assignment/Project Helper</h3>
            <p className="duration">03/2023 - 11/2023</p>
            <p className="responsibilities">
              Provided free assistance to individuals in achieving their goals
              or debugging their code
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerExperience;
