import { Link } from "react-router-dom";

const AskUs = () => {
  return (
    <div className="infobar-cta">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Infobar Box Start --> */}
            <div className="infobar-box">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  {/* <!-- Infobar Content Start --> */}
                  <div className="cta-content">
                    <h2 className="text-anime">
                      Need Help? Talk to Our Expert.
                    </h2>
                    <p className="wow fadeInUp">
                      Contact us for assistance with your property search or any
                      inquiries.
                    </p>
                  </div>
                  {/* <!-- Infobar Content End --> */}
                </div>

                <div className="col-lg-5">
                  {/* <!-- CTA Button Start --> */}
                  <div className="cta-button">
                    <a
                      href="tel:+254777123456"
                      className="btn-default btn-border"
                    >
                      <i className="fa-solid fa-phone-volume"></i> +254 777 444
                      777
                    </a>
                    <a
                      href="mailto:info@mytownkaren.com"
                      className="btn-default"
                    >
                      Contact Now
                    </a>
                  </div>
                  {/* <!-- CTA Button End --> */}
                </div>
              </div>
            </div>
            {/* <!-- Infobar Box End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskUs;
