import React from "react";
import "./AwardsPage.css";

const CommendationsPage = () => {
  return (
    <div className="page-overlay">
      <div className="commendations-container">
        <div className="commendation-card portrait">
          <img
            src={require("../Awards/Images/TP_MP_Commendation_Award.jpg")}
            alt="Certificate 1"
          />
          <h3>Commendation Award Certificate</h3>
          <p>
            Received the 2nd highest-level certificate of Major Project
            (10/2023)
          </p>
        </div>
        <div className="commendation-card landscape">
          <img
            src={require("../Awards/Images/ARTSIC.png")}
            alt="Certificate 2"
          />
          <h3>Certificate of Participation</h3>
          <p>
            Awarded for participation in the ARTSIC’23 Competition in Singapore
            (06/2023)
          </p>
        </div>
        <div className="commendation-card landscape">
          <img
            src={require("../Awards/Images/NUS_BES.png")}
            alt="Certificate 3"
          />
          <h3>Bronze Award</h3>
          <p>
            Won 3rd prize at NUS Design Challenge Competition in Singapore
            (04/2023)
          </p>
        </div>

        <div className="commendation-card landscape">
          <img
            src={require("../Awards/Images/TikTok.png")}
            alt="Certificate 4"
          />
          <h3>TikTok Youth Camp</h3>
          <p>
            Completed the Foundation Programme in Web Development and Android
            Application Development (06/2022)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommendationsPage;
