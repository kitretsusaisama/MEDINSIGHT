import React from 'react';

const CtaBox: React.FC = () => {
  return (
    <div className="cta-box">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            {/* Cta Item Start */}
            <div className="cta-item">
              {/* Icon Box Start */}
              <div className="icon-box">
                <img src="/images/icon-appointment.svg" alt="Appointment Icon" />
              </div>
              {/* Icon Box End */}

              {/* Cta Content Start */}
              <div className="cta-content">
                <h3 className="text-anime-style-3">Open For Appointments</h3>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  We are delighted to announce that our doors are open, and we are now accepting appointments to serve you better.
                </p>
              </div>
              {/* Cta Content End */}
            </div>
            {/* Cta Item End */}
          </div>

          <div className="col-lg-4">
            {/* Cta Btn Start */}
            <div className="cta-btn">
              <a href="#" className="appointment-btn wow fadeInUp">
                Make Appointment <i className="fa-solid fa-calendar-days"></i>
              </a>
            </div>
            {/* Cta Btn End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBox;
