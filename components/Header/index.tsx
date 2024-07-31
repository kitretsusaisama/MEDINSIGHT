import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <div className="header-logo">
              <a className="navbar-brand" href="index.html">
                <img src="/images/logo.svg" alt="Logo" />
              </a>
            </div>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="services.html">
                      Services
                    </a>
                  </li>
                  <li className="nav-item submenu">
                    <a className="nav-link" href="#">
                      Pages
                    </a>
                    <ul>
                      <li className="nav-item">
                        <a className="nav-link" href="services-single.html">
                          Service Single
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="blog-single.html">
                          Blog Single
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="team.html">
                          Our Team
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="team-single.html">
                          Team Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="faqs.html">
                          FAQs
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="404.html">
                          404
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item highlighted-menu">
                    <a className="nav-link" href="appointment.html">
                      Book Appointment <i className="fa-solid fa-calendar-days"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Main Menu End */}

            {/* Navbar Toggle */}
            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
};

export default Header;
