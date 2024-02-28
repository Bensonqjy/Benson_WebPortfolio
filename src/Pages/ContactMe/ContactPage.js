import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./ContactPage.css";
const ContactPage = () => {
  return (
    <div className="page-overlay">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li>
              <FaEnvelope />{" "}
              <a href="mailto:benson.quah.sg@gmail.com">
                benson.quah.sg@gmail.com
              </a>
            </li>
          </ul>
          <h2>Social Media</h2>
          <ul>
            <li>
              <FaLinkedin />{" "}
              <a href="https://www.linkedin.com/in/bensonqjy/">
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="contact-form">
                    <h2>Send Me a Message</h2>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" required />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div> */}
      </div>
    </div>
  );
};

export default ContactPage;
