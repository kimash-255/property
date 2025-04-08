import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="footer ">
      {/* Footer Newsletter Start */}
      <div className="footer-newsletter ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="newsletter-box">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="newsletter-title">
                      <h2>Subscribe to Our Newsletter</h2>
                      <p>
                        Stay in the loop with the latest news, events, and
                        offers from MyTown Karen.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="newsletter-form">
                      <form action="#">
                        <div className="row g-0 align-items-center">
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter email address here"
                            />
                          </div>
                          <div className="col-sm-4">
                            <button type="submit" className="btn-default">
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Newsletter End */}

      {/* Mega Footer Start */}
      <div className="mega-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-about">
                <div className="footer-logo">
                  <img src="images/logo/logo.png" alt="MyTown Karen" />
                </div>

                <div className="footer-about-content">
                  <p>
                    MyTown Karen – Your go-to destination for shopping, dining,
                    and more.
                  </p>
                </div>

                <div className="footer-social-links">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-contact-info">
                <h3>Contact Info</h3>

                <div className="footer-contact-box">
                  <div className="footer-info-box">
                    <div className="icon-box">
                      <img src="images/icon-location.svg" alt="" />
                    </div>
                    <p>MyTown Karen, Karen Road, Nairobi, Kenya</p>
                  </div>

                  <div className="footer-info-box">
                    <div className="icon-box">
                      <img src="images/icon-phone.svg" alt="" />
                    </div>
                    <p>+254 777 123 456</p>
                  </div>

                  <div className="footer-info-box">
                    <div className="icon-box">
                      <img src="images/icon-email.svg" alt="" />
                    </div>
                    <p>info@mytownkaren.co.ke</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-quick-links">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/offers">Offers</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer-appointment">
                <h3>Appointment</h3>
                <div className="footer-appointment-content">
                  <p>
                    Interested in leasing space or learning more? Book an
                    appointment with our team today.
                  </p>
                  <Link to="#" className="btn-default">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mega Footer End */}
    </footer>
  );
};

export default FooterSection;
