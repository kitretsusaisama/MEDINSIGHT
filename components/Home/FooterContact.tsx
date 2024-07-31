const HomeContactForm: React.FC = () => {
    return (
      <div className="home-contact-form parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">fill the form</h3>
                <h2 className="text-anime-style-3">Contact Form.</h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
  
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-5 col-12">
              {/* Contact Appointment Start */}
              <div className="contact-appointment">
                <div className="appointment-img">
                  <img src="images/contact-us-img.png" alt="Contact Us" />
                </div>
                <div className="appointment-content">
                  <h3>Make <strong>Appointment</strong> & Take Care Of Your Healthy Life</h3>
                </div>
              </div>
              {/* Contact Appointment End */}
            </div>
  
            <div className="col-lg-8 col-md-7 col-12">
              {/* Contact Form Start */}
              <div className="contact-form">
                <form id="appointmentForm" action="#" method="POST" data-toggle="validator">
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Name" required />
                      <div className="help-block with-errors"></div>
                    </div>
  
                    <div className="form-group col-md-6 mb-4">
                      <input type="email" name="email" className="form-control" id="email" placeholder="Email" required />
                      <div className="help-block with-errors"></div>
                    </div>
  
                    <div className="form-group col-md-6 mb-4">
                      <input type="text" name="phone" className="form-control" id="phone" placeholder="Your Phone" required />
                      <div className="help-block with-errors"></div>
                    </div>
  
                    <div className="form-group col-md-6 mb-4">
                      <input type="date" name="date" className="form-control" id="date" required />
                      <div className="help-block with-errors"></div>
                    </div>
  
                    <div className="form-group col-md-12 mb-4">
                      <textarea name="msg" className="form-control" id="msg" rows={4} placeholder="Your Message" required></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
  
                    <div className="col-md-12 form-group">
                      <button type="submit" className="btn-default">send</button>
                      <div id="msgSubmit" className="h3 hidden"></div>
                    </div>
                  </div>
                </form>
              </div>
              {/* Contact Form End */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeContactForm;
  