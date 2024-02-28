import React from "react";
import "./LandingPage.css";

const About = () => {
  return (
    <div className="page-overlay">
      <div className="page-content">
        <h1>Benson Quah</h1>
        <h2>Introduction</h2>
        <p className="intro">
          Highly motivated Computer Engineering student with a strong foundation
          in software development and a steady track record of delivering
          exceptional results. Proficient in a wide range of programming
          languages and frameworks, including C#, .NET, Java, JavaScript,
          TypeScript, React, and React Native. Skilled in both frontend and
          backend development, with hands-on experience in database technologies
          such as Microsoft SQL and Firebase. Possesses excellent communication
          and problem-solving abilities, coupled with a keen eye for detail.
          Committed to continuous learning and leveraging technology to drive
          innovation. Seeking opportunities to contribute to dynamic projects
          and make meaningful contributions to the tech industry.
        </p>
        <h2>Technical Skills</h2>
        <div className="skills-section">
          <div className="card">
            <h3>Programming Languages</h3>
            <ul>
              <li>C#, .NET, Java, JavaScript, TypeScript</li>
              <li>React, React Native</li>
            </ul>
          </div>
          <div className="card">
            <h3>Web Development</h3>
            <ul>
              <li>HTML, CSS</li>
              <li>Frontend Development, Backend Development</li>
            </ul>
          </div>
          <div className="card">
            <h3>Database Technologies</h3>
            <ul>
              <li>Microsoft SQL, Firebase</li>
            </ul>
          </div>
          <div className="card">
            <h3>Frameworks and Libraries</h3>
            <ul>
              <li>ASP.Net</li>
              <li>Flask</li>
            </ul>
          </div>
          <div className="card">
            <h3>Others</h3>
            <ul>
              <li>Object-Oriented Programming (OOP)</li>
              <li>FullStack Development</li>
              <li>Raspberry PI</li>
              <li>SwaggerAPI</li>
            </ul>
          </div>
        </div>
        <h2>Soft Skills</h2>
        <div className="soft-skills">
          <div className="card">
            <h3>Narrator</h3>
            <p>Skilled in storytelling and effective communication</p>
          </div>
          <div className="card">
            <h3>Counterpoint</h3>
            <p>Ability to offer diverse perspective and critical thinking</p>
          </div>
          <div className="card">
            <h3>Strategic Awareness</h3>
            <p>Capacity to anticipate future trends and plan strategically</p>
          </div>
          <div className="card">
            <h3>Service</h3>
            <p>Committed to helping others and providing exceptional support</p>
          </div>
        </div>
        {/* <h2>Goals and Aspirations</h2>
        <p>
          To provide help and assistance to the community and improve their
          lives.
        </p> */}
      </div>
    </div>
  );
};

export default About;
