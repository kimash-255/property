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
                <h5>Contact Our Us Now To Book a Space</h5>
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
                  Discover Unmatched Value & Convenience at MyTown Karen
                </h2>
              </div>
              {/* <!-- Section Title End --> */}

              <div
                className="why-choose-us-body wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <p style={{ color: "white" }}>
                  At MyTown Karen, we offer a unique shopping experience with a
                  wide variety of retail, dining, and service options. Our
                  community-driven approach ensures that you’ll find everything
                  you need in one place, making it easy and convenient for your
                  business or shopping.
                </p>

                <ul>
                  <li style={{ color: "white" }}>
                    Wide Range of Retail Spaces
                  </li>
                  <li style={{ color: "white" }}>
                    High Foot Traffic & Central Location
                  </li>
                  <li style={{ color: "white" }}>Flexible Leasing Options</li>
                </ul>

                <Link to="#" className="btn-default">
                  Learn More
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
