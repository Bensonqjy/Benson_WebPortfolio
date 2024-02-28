import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./Footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <div className="footer-contact">
          <a href="mailto:benson.quah.sg@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/bensonqjy/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Property of Benson Quah. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
