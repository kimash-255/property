import { Link } from "react-router-dom";
import propertyData from "@/data/propertydata";

const Listing = () => {
  return (
    <div className="page-property-listing">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Property Listings Start */}
            <div className="property-listings">
              <div className="row">
                {propertyData.map((property, index) => {
                  const {
                    slug,
                    images,
                    title,
                    location,
                    storeSize,
                    unitsAvailable,
                    parkingSpaces,
                    features,
                  } = property;

                  return (
                    <div className="col-md-6" key={slug}>
                      <div
                        className="property-item wow fadeInUp"
                        data-wow-delay={`${0.25 + index * 0.25}s`}
                        style={{
                          visibility: "visible",
                          animationDelay: `${0.25 + index * 0.25}s`,
                          animationName: "fadeInUp",
                        }}
                      >
                        {/* Image and Type */}
                        <div className="property-header">
                          <figure className="image-anime">
                            <img
                              src={images[0]}
                              alt={title}
                              width="400"
                              height="300"
                              style={{ width: "100%", height: "auto" }}
                            />
                          </figure>
                          <span className="property-label">For Sale</span>
                        </div>

                        {/* Property Body */}
                        <div className="property-body">
                          <h3>{title}</h3>
                          <p>{location}</p>

                          <div className="property-meta">
                            <div className="property-amenity-item">
                              <div className="icon-box">
                                <img
                                  src="/images/icon-area.svg"
                                  alt="Area icon"
                                  width="20"
                                  height="20"
                                />
                              </div>
                              <span>{storeSize}</span>
                            </div>

                            <div className="property-amenity-item">
                              <div className="icon-box">
                                <img
                                  src="/images/icon-badroom.svg"
                                  alt="Units Available icon"
                                  width="20"
                                  height="20"
                                />
                              </div>
                              <span>
                                {unitsAvailable} Unit
                                {unitsAvailable !== 1 ? "s" : ""}
                              </span>
                            </div>

                            <div className="property-amenity-item">
                              <div className="icon-box">
                                <img
                                  src="/images/icon-garage.svg"
                                  alt="Parking icon"
                                  width="20"
                                  height="20"
                                />
                              </div>
                              <span>
                                {parkingSpaces} Parking Space
                                {parkingSpaces !== 1 ? "s" : ""}
                              </span>
                            </div>

                            <div className="property-amenity-item">
                              <div className="icon-box">
                                <img
                                  src="/images/icon-bathroom.svg"
                                  alt="Features icon"
                                  width="20"
                                  height="20"
                                />
                              </div>
                              <span>{features.join(", ")}</span>
                            </div>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="property-footer">
                          <Link to={`/shop/${slug}`} className="btn-default">
                            View Shop
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination */}
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="post-pagination wow fadeInUp"
                    data-wow-delay="1.5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "1.5s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <ul className="pagination">
                      <li>
                        <Link to="#">
                          <i className="fa-solid fa-arrow-left-long"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">1</Link>
                      </li>
                      <li className="active">
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">3</Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Property Listings End */}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="property-sidebar">
              <div
                className="expert-help-box wow fadeInUp"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                  marginTop: "30px",
                  padding: "20px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <h3>Need Help? Ask Our Experts</h3>
                <p>
                  Our team of experts is ready to assist you with any questions
                  about available shops.
                </p>

                <div className="experts-list" style={{ marginTop: "20px" }}>
                  <div
                    className="expert-card"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "15px",
                      padding: "10px",
                      backgroundColor: "#fff",
                      borderRadius: "6px",
                    }}
                  >
                    <div
                      className="expert-image"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginRight: "15px",
                      }}
                    >
                      <img
                        src="/images/agent-2.jpg"
                        alt="Real Estate Expert"
                        width="60"
                        height="60"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="expert-info">
                      <h4 style={{ margin: "0 0 5px 0", fontSize: "16px" }}>
                        Sarah Johnson
                      </h4>
                      <p
                        style={{
                          margin: "0 0 5px 0",
                          color: "#666",
                          fontSize: "14px",
                        }}
                      >
                        Shop Expert
                      </p>
                      <div
                        className="expert-contact"
                        style={{ fontSize: "13px" }}
                      >
                        <p style={{ margin: "2px 0" }}>
                          <i
                            className="fa fa-phone"
                            style={{ marginRight: "5px" }}
                          ></i>
                          +1 (555) 123-4567
                        </p>
                        <p style={{ margin: "2px 0" }}>
                          <i
                            className="fa fa-envelope"
                            style={{ marginRight: "5px" }}
                          ></i>
                          sarah@shopfinder.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="btn-default"
                  style={{
                    display: "block",
                    textAlign: "center",
                    marginTop: "20px",
                    padding: "10px 15px",
                    backgroundColor: "#2b8a3e",
                    color: "white",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "background-color 0.3s",
                  }}
                >
                  Contact All Experts
                </Link>
              </div>
            </div>
          </div>
          {/* Sidebar End */}
        </div>
      </div>
    </div>
  );
};

export default Listing;
