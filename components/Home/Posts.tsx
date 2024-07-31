const RecentPosts: React.FC = () => {
    return (
      <div className="recent-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our blog</h3>
                <h2 className="text-anime-style-3">Latest News & Articles.</h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
  
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="0.25s">
                {/* Post Image Start */}
                <div className="post-featured-image">
                  <figure className="image-anime">
                    <a href="#"><img src="images/post-1.jpg" alt="Best Medical Network Directory" /></a>
                  </figure>
                </div>
                {/* Post Image End */}
  
                {/* Post Content Start */}
                <div className="post-item-body">
                  <h2><a href="#">Best Medical Network Directory For Physicians & Clients</a></h2>
                  <p>Hypertension, commonly known as high blood pressure, is a prevalent condition.</p>
                </div>
                {/* Post Content End */}
  
                {/* Btn Readmore Start */}
                <div className="btn-readmore">
                  <a href="#">read more <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                {/* Btn Readmore End */}
              </div>
              {/* Post Item End */}
            </div>
  
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="0.5s">
                {/* Post Image Start */}
                <div className="post-featured-image">
                  <figure className="image-anime">
                    <a href="#"><img src="images/post-2.jpg" alt="The Importance of Regular Health Checkups" /></a>
                  </figure>
                </div>
                {/* Post Image End */}
  
                {/* Post Content Start */}
                <div className="post-item-body">
                  <h2><a href="#">The Importance of Regular Health Checkups</a></h2>
                  <p>Symptoms, causes, risk factors, diagnosis, and treatment options strategies.</p>
                </div>
                {/* Post Content End */}
  
                {/* Btn Readmore Start */}
                <div className="btn-readmore">
                  <a href="#">read more <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                {/* Btn Readmore End */}
              </div>
              {/* Post Item End */}
            </div>
  
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="0.75s">
                {/* Post Image Start */}
                <div className="post-featured-image">
                  <figure className="image-anime">
                    <a href="#"><img src="images/post-3.jpg" alt="Managing Better Stress for Better Mental Health" /></a>
                  </figure>
                </div>
                {/* Post Image End */}
  
                {/* Post Content Start */}
                <div className="post-item-body">
                  <h2><a href="#">Managing Better Stress for Better Mental Health</a></h2>
                  <p>These stories can provide valuable insights into living with a particular condition.</p>
                </div>
                {/* Post Content End */}
  
                {/* Btn Readmore Start */}
                <div className="btn-readmore">
                  <a href="#">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                {/* Btn Readmore End */}
              </div>
              {/* Post Item End */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RecentPosts;
  