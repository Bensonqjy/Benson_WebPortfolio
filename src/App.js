import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AboutPage from "./Pages/LandingPage/LandingPage";
import ContactPage from "./Pages/ContactMe/ContactPage";
import EducationPage from "./Pages/Education/EducationPage";
import JobExperience from "./Pages/WorkExperience/JobExperience";
import VolunteerExperience from "./Pages/VolunteerExperience/VolunteerExperience";
import AwardsPage from "./Pages/Awards/CommendationsPage";
import ProjectPage from "./Pages/Projects/Projects";
import Footer from "./Component/Footer/Footer";
import PageNotFound from "./Component/ErrorHandling/PageNotFound";
import "./Component/Navbar.css";
function App() {
  const navRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <Router>
      <div>
        <header className="header-nav">
          <h3>Benson Quah</h3>
          <nav ref={navRef}>
            <NavLink to="/" onClick={toggleNavbar}>
              Home
            </NavLink>
            <NavLink to="/EducationJourney" onClick={toggleNavbar}>
              Education
            </NavLink>
            <NavLink to="/WorkExperience" onClick={toggleNavbar}>
              Work Experience
            </NavLink>
            <NavLink to="/Projects" onClick={toggleNavbar}>
              Projects
            </NavLink>
            <NavLink to="/VolunteerExperience" onClick={toggleNavbar}>
              Volunteer Experience
            </NavLink>
            <NavLink to="/AwardsReceived" onClick={toggleNavbar}>
              Awards
            </NavLink>
            <NavLink to="/ContactMe" onClick={toggleNavbar}>
              Connect with Me
            </NavLink>
            <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={toggleNavbar}>
            <FaBars />
          </button>
        </header>
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

function NavLink({ to, onClick, children }) {
  return (
    <Link to={to} onClick={onClick}>
      {children}
    </Link>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/EducationJourney" element={<EducationPage />} />
      <Route path="/WorkExperience" element={<JobExperience />} />
      <Route path="/Projects" element={<ProjectPage />} />
      <Route path="/VolunteerExperience" element={<VolunteerExperience />} />
      <Route path="/AwardsReceived*" element={<AwardsPage />} />
      <Route path="/ContactMe" element={<ContactPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
