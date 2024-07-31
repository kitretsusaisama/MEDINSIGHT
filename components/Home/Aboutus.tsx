import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* About Image Start */}
            <div className="about-img">
              <div className="about-us-image">
                <div className="about-us-image-1">
                  <figure className="image-anime reveal">
                    <img src="/images/about-img-1.jpg" alt="About Us Image 1" />
                  </figure>
                </div>
                <div className="about-us-image-2">
                  <figure className="image-anime reveal">
                    <img src="/images/about-img-2.jpg" alt="About Us Image 2" />
                  </figure>
                </div>
              </div>
              <div className="about-video wow fadeInUp">
                <figure className="image-anime">
                  <img src="/images/about-video-img.jpg" alt="About Us Video" />
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="btn-video popup-youtube">
                    <i className="fas fa-play-circle"></i> Watch Video
                  </a>
                </figure>
              </div>
            </div>
            {/* About Image End */}
          </div>

          <div className="col-lg-6">
            {/* About Content Start */}
            <div className="about-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">about medicalife</h3>
                <h2 className="text-anime-style-3">Our Best Services & Popular Treatment Here.</h2>
              </div>
              {/* Section Title End */}

              {/* About Content Body Start */}
              <div className="about-content-body">
                <p className="wow fadeInUp">
                  We take pride in offering a wide range of best-in-class medical services and popular treatments to cater to your diverse healthcare needs.
                </p>
              </div>
              {/* About Content Body End */}

              {/* About Content Footer Start */}
              <div className="about-content-footer">
                <ul className="wow fadeInUp" data-wow-delay="0.25s">
                  <li>Mental Health Solutions</li>
                  <li>Rapid Patient Improvement</li>
                  <li>World-Class Treatment</li>
                </ul>
                <a href="#" className="btn-default wow fadeInUp" data-wow-delay="0.5s">Read More</a>
              </div>
              {/* About Content Footer End */}
            </div>
            {/* About Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
