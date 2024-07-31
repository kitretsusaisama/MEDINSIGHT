import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Hero Content Start */}
            <div className="hero-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">we take care of your health</h3>
                <h1 className="text-anime-style-3">We Are Providing Best & Affordable Health Care.</h1>
              </div>
              {/* Section Title End */}

              {/* Hero Body Start */}
              <div className="hero-body">
                <p className="wow fadeInUp">Our goal is to deliver the highest quality healthcare services. We believe that everyone deserves access to excellent medical care without compromising on quality.</p>
              </div>
              {/* Hero Body End */}

              {/* Hero Footer Start */}
              <div className="hero-footer">
                <a href="#" className="btn-default wow fadeInUp" data-wow-delay="0.25s">Read More</a>
                <a href="../../../external.html?link=https://www.youtube.com/watch?v=Y-x0efG1seA" className="btn-video popup-youtube wow fadeInUp" data-wow-delay="0.25s">
                  <i className="fas fa-play-circle"></i> Watch Video
                </a>
              </div>
              {/* Hero Footer End */}
            </div>
            {/* Hero Content End */}
          </div>

          <div className="col-lg-6">
            {/* Hero Image Start */}
            <div className="hero-images">
              <div className="hero-image-1">
                <figure className="image-anime reveal">
                  <img src="https://medinsight.vercel.app/images/hero-img-1.jpg" alt="Hero Image 1" />
                </figure>
              </div>
              <div className="hero-image-2">
                <figure className="image-anime reveal">
                  <img src="https://medinsight.vercel.app/images/hero-img-2.jpg" alt="Hero Image 2" />
                </figure>
              </div>
            </div>
            {/* Hero Image End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
