import React from 'react';

const HowWeWork: React.FC = () => {
  return (
    <div className="how-we-work">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-md-6">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">How We Work</h3>
              <h2 className="text-anime-style-3">A Comprehensive Directory For Your Health Care.</h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-md-6">
            <div className="section-title-content wow fadeInUp">
              <p>
                We are your trusted one-stop destination for all your healthcare needs. Our comprehensive directory is designed to provide you with easy access to a wide range of healthcare services and providers, ensuring that you and your family.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-6">
            {/* Step Item Start */}
            <div className="work-step-item wow fadeInUp">
              {/* Icon Box Start */}
              <div className="icon-box">
                <img src="/images/icon-work-step-1.svg" alt="Book Appointment" />
              </div>
              {/* Icon Box End */}

              {/* Step Item Content Start */}
              <div className="step-item-content">
                <h3>Book an Appointment</h3>
              </div>
              {/* Step Item Content End */}
            </div>
            {/* Step Item End */}
          </div>

          <div className="col-md-3 col-6">
            {/* Step Item Start */}
            <div className="work-step-item wow fadeInUp" data-wow-delay="0.5s">
              {/* Icon Box Start */}
              <div className="icon-box">
                <img src="/images/icon-work-step-2.svg" alt="Conduct Checkup" />
              </div>
              {/* Icon Box End */}

              {/* Step Item Content Start */}
              <div className="step-item-content">
                <h3>Conduct Checkup</h3>
              </div>
              {/* Step Item Content End */}
            </div>
            {/* Step Item End */}
          </div>

          <div className="col-md-3 col-6">
            {/* Step Item Start */}
            <div className="work-step-item wow fadeInUp" data-wow-delay="0.75s">
              {/* Icon Box Start */}
              <div className="icon-box">
                <img src="/images/icon-work-step-3.svg" alt="Perform Treatment" />
              </div>
              {/* Icon Box End */}

              {/* Step Item Content Start */}
              <div className="step-item-content">
                <h3>Perform Treatment</h3>
              </div>
              {/* Step Item Content End */}
            </div>
            {/* Step Item End */}
          </div>

          <div className="col-md-3 col-6">
            {/* Step Item Start */}
            <div className="work-step-item wow fadeInUp" data-wow-delay="1s">
              {/* Icon Box Start */}
              <div className="icon-box">
                <img src="/images/icon-work-step-4.svg" alt="Prescribe & Payment" />
              </div>
              {/* Icon Box End */}

              {/* Step Item Content Start */}
              <div className="step-item-content">
                <h3>Prescribe & Payment</h3>
              </div>
              {/* Step Item Content End */}
            </div>
            {/* Step Item End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
