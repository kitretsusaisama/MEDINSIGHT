const ClientsTestimonials: React.FC = () => {
    return (
      <div className="clients-testimonials">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">testimonial</h3>
                <h2 className="text-anime-style-3">What Patients Say About Us.</h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
  
          <div className="row">
            <div className="col-md-12">
              {/* Testimonial Slider Start */}
              <div className="testimonial-slider">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-image">
                            <figure className="image-anime">
                              <img src="images/author-1.jpg" alt="Mary Johnson" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <div className="author-title">
                              <h3>Mary Johnson</h3>
                            </div>
                            <div className="testimonial-title">
                              <p>Student</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-rating-list">
                          <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                          </ul>
                        </div>
                        <div className="testimonial-content">
                          <p>Great experience, caring doctors, and modern. Highly compassionate staff.</p>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}
  
                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-image">
                            <figure className="image-anime">
                              <img src="images/author-2.jpg" alt="John Doe" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <div className="author-title">
                              <h3>John Doe</h3>
                            </div>
                            <div className="testimonial-title">
                              <p>CEO of Digital Marketing</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-rating-list">
                          <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star-half-stroke"></i></li>
                          </ul>
                        </div>
                        <div className="testimonial-content">
                          <p>Highly skilled doctors and compassionate staff. Highly recommended.</p>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}
  
                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-image">
                            <figure className="image-anime">
                              <img src="images/author-3.jpg" alt="Robert Lee" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <div className="author-title">
                              <h3>Robert Lee</h3>
                            </div>
                            <div className="testimonial-title">
                              <p>Accountant</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-rating-list">
                          <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star-half-stroke"></i></li>
                            <li><i className="fa-regular fa-star"></i></li>
                          </ul>
                        </div>
                        <div className="testimonial-content">
                          <p>Top-notch healthcare with a patient-centered approach.</p>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}
  
                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-image">
                            <figure className="image-anime">
                              <img src="images/author-4.jpg" alt="Emily Davis" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <div className="author-title">
                              <h3>Emily Davis</h3>
                            </div>
                            <div className="testimonial-title">
                              <p>CEO of Digital Marketing</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-rating-list">
                          <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-regular fa-star"></i></li>
                          </ul>
                        </div>
                        <div className="testimonial-content">
                          <p>Highly skilled doctors and compassionate staff. A patient-centered approach.</p>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
              {/* Testimonial Slider End */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ClientsTestimonials;
  