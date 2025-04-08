import { useParams, Link } from "react-router-dom";
import propertyData from "@/data/propertydata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Shop = () => {
  const { slug } = useParams();

  if (!slug) return <p>Loading...</p>;

  const shop = propertyData.find((item) => item.slug === slug);

  if (!shop) {
    return <p>Shop not found</p>;
  }

  return (
    <div className="page-property-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="property-single-content">
              {/* Shop Photos Slider */}
              <div
                className="property-photos-slider wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  className="property-photo-swiper"
                >
                  {shop.images.map((src, index) => (
                    <SwiperSlide key={index}>
                      <div className="property-photo-item">
                        <figure className="image-anime">
                          <img
                            src={src}
                            alt={`shop-${index}`}
                            width={709}
                            height={400}
                          />
                        </figure>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Overview */}
              <div
                className="property-overview wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="property-single-subtitle">
                  <h3>Overview</h3>
                </div>
                <div className="property-overview-box">
                  {[
                    {
                      icon: "icon-badroom.svg",
                      label: "Units Available",
                      value: shop.unitsAvailable,
                    },
                    {
                      icon: "icon-bathroom.svg",
                      label: "Parking Spaces",
                      value: shop.parkingSpaces,
                    },
                    {
                      icon: "icon-area.svg",
                      label: "Store Size",
                      value: shop.storeSize,
                    },
                    {
                      icon: "icon-garage.svg",
                      label: "Year Built",
                      value: shop.yearBuilt,
                    },
                  ].map(({ icon, label, value }, index) => (
                    <div className="property-overview-item" key={index}>
                      <div className="icon-box">
                        <img
                          src={`/images/${icon}`}
                          alt={label}
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="property-overview-content">
                        <h3>{label}</h3>
                        <p>{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* About Shop */}
              <div
                className="about-property wow fadeInUp"
                data-wow-delay="0.75s"
              >
                <div className="property-single-subtitle">
                  <h3>About This Shop</h3>
                </div>
                <div className="about-property-content">
                  <p>{shop.description}</p>
                  <div className="about-property-cta">
                    <Link to="/contact" className="btn-default btn-border">
                      Contact us
                    </Link>
                    <a href={`tel:${shop.phone}`} className="btn-default">
                      <i className="fa-solid fa-phone-volume"></i> {shop.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Features & Amenities */}
              <div
                className="property-amenities wow fadeInUp"
                data-wow-delay="1s"
              >
                <div className="property-single-subtitle">
                  <h3>Features & Amenities</h3>
                </div>
                <div className="property-amenities-box">
                  <ul>
                    {shop.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map Location */}
              <div
                className="property-map-location wow fadeInUp"
                data-wow-delay="1.25s"
              >
                <div className="property-single-subtitle">
                  <h3>Map Location</h3>
                </div>
                <div className="property-map-iframe">
                  <iframe
                    src={shop.mapEmbedUrl}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="porperty-single-sidebar">
              {/* Other Details */}
              <div
                className="property-info-box wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <h3>Other Details</h3>
                <div className="property-info-lists">
                  {[
                    {
                      icon: "icon-property-location.svg",
                      value: shop.location,
                      alt: "Location",
                    },
                    {
                      icon: "icon-property-phone.svg",
                      value: shop.phone,
                      alt: "Phone",
                    },
                  ].map(({ icon, value, alt }, index) => (
                    <div className="property-info-item" key={index}>
                      <div className="icon-box">
                        <img
                          src={`/images/${icon}`}
                          alt={alt}
                          width={24}
                          height={24}
                        />
                      </div>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Form */}
              <div
                className="property-inquiry-box wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <h3>Send Inquiry</h3>
                <div className="property-inquiry-form">
                  <form id="contactForm" action="#" method="POST">
                    <div className="row">
                      {["Name", "Email", "Phone"].map((placeholder, index) => (
                        <div className="form-group col-md-12 mb-3" key={index}>
                          <input
                            type={placeholder === "Email" ? "email" : "text"}
                            name={placeholder.toLowerCase()}
                            className="form-control"
                            placeholder={placeholder}
                            required
                          />
                        </div>
                      ))}
                      <div className="form-group col-md-12 mb-3">
                        <textarea
                          name="msg"
                          className="form-control"
                          rows="4"
                          placeholder="Write a Message"
                          required
                        ></textarea>
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn-default">
                          Send Message
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
  );
};

export default Shop;
