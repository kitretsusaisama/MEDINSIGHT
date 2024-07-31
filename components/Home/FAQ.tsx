import React from 'react';

const OurFaqs: React.FC = () => {
  return (
    <div className="our-faqs">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq-counter-image">
              {/* Image Item Start */}
              <div className="faq-image">
                <figure className="reveal image-anime">
                  <img src="/images/home-faq-img.jpg" alt="Healthcare Image" />
                </figure>
              </div>
              {/* Image Item End */}

              {/* Counter Item Start */}
              <div className="counter-item">
                {/* Counter Box Start */}
                <div className="counter-box-1">
                  <div className="counter-content">
                    <h3><span className="counter">100</span>+</h3>
                    <p>Doctors</p>
                  </div>
                </div>
                {/* Counter Box End */}
                
                {/* Counter Box Start */}
                <div className="counter-box-2">
                  <div className="counter-content">
                    <h3><span className="counter">16</span>+</h3>
                    <p>World Offices</p>
                  </div>
                </div>
                {/* Counter Box End */}
              </div>
              {/* Counter Item End */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="faqs-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">FAQs</h3>
                <h2 className="text-anime-style-3">Consultations with Qualified Doctors.</h2>
              </div>
              {/* Section Title End */}
              
              {/* FAQ Accordion Start */}
              <div className="faq-accordion" id="accordion">
                {/* FAQ Item Start */}
                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Are telemedicine consultations available?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>Yes, we offer telemedicine consultations for certain medical conditions.</p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Do you accept health insurance?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>Yes, we accept most major health insurance plans.</p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}

                {/* FAQ Item Start */}
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How much does a consultation cost?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>Consultation fees vary depending on the doctor and the type of consultation.</p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item End */}
              </div>
              {/* FAQ Accordion End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFaqs;
