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

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/EducationJourney" element={<EducationPage />} />
      <Route path="/WorkExperience" element={<JobExperience />} />
      <Route path="/Projects" element={<ProjectPage />} />
      <Route path="/VolunteerExperience" element={<VolunteerExperience />} />
      <Route path="/AwardsReceived" element={<AwardsPage />} />
      <Route path="/ContactMe" element={<ContactPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
