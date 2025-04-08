import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            {/* <!-- Why Choose us Images Start --> */}
            <div className="why-choose-us-images">
              <div className="why-choose-us-image1">
                <figure className="reveal image-anime">
                  <img src="images/why-us-img-1.jpg" alt="" />
                </figure>
              </div>

              <div className="why-choose-us-image2">
                <figure className="reveal image-anime">
                  <img src="images/why-us-img-2.jpg" alt="" />
                </figure>
              </div>

              <div className="exclusive-agents">
                <h5>10k+ Exclusive Agents</h5>
                <img src="images/exclusive-agents.png" alt="" />
              </div>
            </div>
            {/* <!-- Why Choose us Images End --> */}
          </div>

          <div className="col-lg-6 order-lg-1">
            {/* <!-- Why Choose us Content Start --> */}
            <div className="why-choose-us-content">
              {/* <!-- Section Title Start --> */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Why Choose Us</h3>
                <h2 className="text-anime">
                  Let's Find the Right Selling Option for You
                </h2>
              </div>
              {/* <!-- Section Title End --> */}

              <div
                className="why-choose-us-body wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <p>
                  We make the process easy with expert guidance and personalized
                  solutions. Our team is dedicated to helping you find the
                  perfect fit, ensuring a seamless and stress-free experience.
                </p>

                <ul>
                  <li>Find Excellent Deals</li>
                  <li>Friendly Host & Fast Support</li>
                  <li>List Your Own Property</li>
                </ul>

                <Link to="#" className="btn-default">
                  Read More
                </Link>
              </div>
            </div>
            {/* <!-- Why Choose us Content End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
