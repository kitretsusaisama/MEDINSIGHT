import React from 'react';

const MedicalServices: React.FC = () => {
  return (
    <div className="medical-services">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="medical-service-heading">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">medical services</h3>
                <h2 className="text-anime-style-3">We are Providing Best Services.</h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            {/* Medical Service Item Start */}
            <div className="medical-service-item wow fadeInUp">
              <div className="medical-service-content">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src="/images/icon-medical-service-1.svg" alt="Eye Care Icon" />
                </div>
                {/* Icon Box End */}

                {/* Medical Content Start */}
                <div className="medical-content">
                  <h3>eye care</h3>
                  <p>We understand the importance of clear vision and its impact on your life.</p>
                </div>
                {/* Medical Content End */}
              </div>
              {/* Medical Service Button Start */}
              <div className="medical-service-btn">
                <a href="#" className="btn-services">read more <i className="far fa-arrow-alt-circle-right"></i></a>
              </div>
              {/* Medical Service Button End */}
            </div>
            {/* Medical Service Item End */}
          </div>

          <div className="col-lg-4 col-md-4">
            {/* Medical Service Item Start */}
            <div className="medical-service-item wow fadeInUp" data-wow-delay="0.25s">
              <div className="medical-service-content">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src="/images/icon-medical-service-2.svg" alt="Medical Checkup Icon" />
                </div>
                {/* Icon Box End */}

                {/* Medical Content Start */}
                <div className="medical-content">
                  <h3>medical checkup</h3>
                  <p>During your medical checkup, our skilled healthcare professionals will provide comprehensive care.</p>
                </div>
                {/* Medical Content End */}
              </div>
              {/* Medical Service Button Start */}
              <div className="medical-service-btn">
                <a href="#" className="btn-services">read more <i className="far fa-arrow-alt-circle-right"></i></a>
              </div>
              {/* Medical Service Button End */}
            </div>
            {/* Medical Service Item End */}
          </div>

          <div className="col-lg-4 col-md-4">
            {/* Medical Service Item Start */}
            <div className="medical-service-item wow fadeInUp" data-wow-delay="0.5s">
              <div className="medical-service-content">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src="/images/icon-medical-service-3.svg" alt="Dental Care Icon" />
                </div>
                {/* Icon Box End */}

                {/* Medical Content Start */}
                <div className="medical-content">
                  <h3>dental care</h3>
                  <p>We are passionate about providing top-notch dental care to help you maintain a healthy smile.</p>
                </div>
                {/* Medical Content End */}
              </div>
              {/* Medical Service Button Start */}
              <div className="medical-service-btn">
                <a href="#" className="btn-services">read more <i className="far fa-arrow-alt-circle-right"></i></a>
              </div>
              {/* Medical Service Button End */}
            </div>
            {/* Medical Service Item End */}
          </div>

          <div className="col-lg-4 col-md-4">
            {/* Medical Service Item Start */}
            <div className="medical-service-item wow fadeInUp" data-wow-delay="0.75s">
              <div className="medical-service-content">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src="/images/icon-medical-service-4.svg" alt="Laboratory Service Icon" />
                </div>
                {/* Icon Box End */}

                {/* Medical Content Start */}
                <div className="medical-content">
                  <h3>laboratory service</h3>
                  <p>We understand the critical role that accurate diagnostics play in guiding treatment.</p>
                </div>
                {/* Medical Content End */}
              </div>
              {/* Medical Service Button Start */}
              <div className="medical-service-btn">
                <a href="#" className="btn-services">read more <i className="far fa-arrow-alt-circle-right"></i></a>
              </div>
              {/* Medical Service Button End */}
            </div>
            {/* Medical Service Item End */}
          </div>

          <div className="col-lg-4 col-md-4">
            {/* Medical Service Item Start */}
            <div className="medical-service-item wow fadeInUp" data-wow-delay="1s">
              <div className="medical-service-content">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src="/images/icon-medical-service-5.svg" alt="Patient-centered Icon" />
                </div>
                {/* Icon Box End */}

                {/* Medical Content Start */}
                <div className="medical-content">
                  <h3>patient-centered</h3>
                  <p>Our patient-centered approach ensures personalized care for every individual.</p>
                </div>
                {/* Medical Content End */}
              </div>
              {/* Medical Service Button Start */}
              <div className="medical-service-btn">
                <a href="#" className="btn-services">read more <i className="far fa-arrow-alt-circle-right"></i></a>
              </div>
              {/* Medical Service Button End */}
            </div>
            {/* Medical Service Item End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalServices;
