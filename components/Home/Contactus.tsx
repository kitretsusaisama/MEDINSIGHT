import React from 'react';

const HomeContactUs: React.FC = () => {
  return (
    <div className="home-contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            {/* Home Contact Start */}
            <div className="home-contact-item highlighted-box wow fadeInUp" data-wow-delay="0.25s">
              <div className="highlighted-box-title">
                <h2>Dont <strong>Hesitate </strong>To Contact us</h2>
              </div>
              <div className="appointment-wrap">
                <a className="appointment-btn" href="#">Make Appointment <i className="far fa-calendar-alt"></i></a>
              </div>
            </div>
            {/* Home Contact End */}
          </div>

          <div className="col-lg-4 col-md-4">
            {/* Home Contact Item Start */}
            <div className="home-contact-item box-border wow fadeInUp" data-wow-delay="0.25s">
              {/* Contact Icon Start */}
              <div className="contact-icon">
                <img src="https://medinsight.vercel.app/images/icon-home-contact-1.svg" alt="Need Family Health" />
              </div>
              {/* Contact Icon End */}

              {/* Home Contact Content Start */}
              <div className="contact-content">
                <h3>Need Family Health</h3>
                <p>We understand the importance of family health for overall well-being.</p>
              </div>
              {/* Home Contact Content End */}
            </div>
            {/* Home Contact Item End */}
          </div>

          <div className="col-lg-4 col-md-4">
            {/* Home Contact Item Start */}
            <div className="home-contact-item wow fadeInUp" data-wow-delay="0.25s">
              {/* Contact Icon Start */}
              <div className="contact-icon">
                <img src="https://medinsight.vercel.app/images/icon-home-contact-2.svg" alt="24 Hours Service" />
              </div>
              {/* Contact Icon End */}

              {/* Home Contact Content Start */}
              <div className="contact-content">
                <h3>24 Hours Service</h3>
                <p>We take pride in offering 24-hour medical services to ensure that you are always covered.</p>
              </div>
              {/* Home Contact Content End */}
            </div>
            {/* Home Contact Item End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContactUs;
