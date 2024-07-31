import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Main Footer Start */}
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              {/* About Footer Start */}
              <div className="about-footer">
                {/* Footer Logo Start */}
                <div className="footer-logo">
                  <figure>
                    <img src="/images/footer-logo.svg" alt="Footer Logo" />
                  </figure>
                </div>
                {/* Footer Logo End */}

                {/* Footer Content Start */}
                <div className="footer-content">
                  <p>
                    Our family-centered approach to healthcare ensures that each
                    member of your family receives personalized attention.
                  </p>
                </div>
                {/* Footer Content End */}

                {/* Footer Social Links Start */}
                <div className="footer-social-links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer Social Links End */}
              </div>
              {/* About Footer End */}
            </div>

            <div className="col-lg-2 col-md-3 col-5">
              {/* Footer Quick Links Start */}
              <div className="footer-quick-links">
                <h2>Quick Links</h2>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Doctors</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              {/* Footer Quick Links End */}
            </div>

            <div className="col-lg-3 col-md-4 col-7">
              {/* Footer Contact Details Start */}
              <div className="footer-contact-details">
                <h2>Contact Details</h2>
                <div className="footer-contact-box">
                  <div className="footer-info-box">
                    <div className="icon-box">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <p>Jl. Raya Kuta No.70, Kuta</p>
                  </div>
                  <div className="footer-info-box">
                    <div className="icon-box">
                      <i className="fa-solid fa-envelope-open-text"></i>
                    </div>
                    <p>healthcare@gmail.com</p>
                  </div>
                  <div className="footer-info-box">
                    <div className="icon-box">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <p>+01 547 547 5478</p>
                  </div>
                  <div className="footer-info-box">
                    <div className="icon-box">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <p>8 AM - 5 PM, Monday - Saturday</p>
                  </div>
                </div>
              </div>
              {/* Footer Contact Details End */}
            </div>

            <div className="col-lg-3 col-md-5">
              {/* Footer Newsletter Start */}
              <div className="footer-newsletter">
                <h2>Newsletter</h2>
                <div className="subscribe-content">
                  <h3>Subscribe to our newsletter</h3>
                  <p>Stay informed and never miss out on the latest news, health tips.</p>
                </div>
                <div className="footer-newsletter-form">
                  <form id="newslettersForm" action="#" method="POST">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="mail"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="btn-default">Send</button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Footer Newsletter End */}
            </div>
          </div>

          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-copyright-text">
                  <p>Copyright 2024 © <span>MediPro</span> All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer End */}
    </footer>
  );
};

export default Footer;
