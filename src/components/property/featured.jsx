import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import propertyData from "@/data/propertydata";

const Featured = () => {
  return (
    <div className="featured-property">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">Explore</h3>
              <h2 className="text-anime">What We Offer</h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {/* Property Slider Start */}
            <div className="property-slider">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="swiper"
              >
                {propertyData.map((property) => (
                  <SwiperSlide key={property.slug} className="swiper-slide">
                    {/* Property Item Start */}
                    <div className="property-item">
                      {/* Property Item Header Start */}
                      <div className="property-header">
                        <figure className="image-anime">
                          <img
                            src={property.images?.[0]}
                            alt={property.title}
                          />
                        </figure>
                      </div>
                      {/* Property Item Header End */}

                      {/* Property Item Body Start */}
                      <div className="property-body">
                        <h3>{property.title}</h3>
                        <p>{property.location}</p>

                        <div className="property-meta">
                          {property.features
                            ?.slice(0, 4)
                            .map((feature, index) => (
                              <div
                                className="property-amenity-item"
                                key={index}
                              >
                                <span>• {feature}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                      {/* Property Item Body End */}

                      {/* Property Item Footer Start */}
                      <div className="property-footer">
                        <p className="property-price">{property.price}</p>
                        <Link
                          to={`/properties/${property.slug}`}
                          className="btn-default"
                        >
                          View More
                        </Link>
                      </div>
                      {/* Property Item Footer End */}
                    </div>
                    {/* Property Item End */}
                  </SwiperSlide>
                ))}
                <div className="swiper-pagination"></div>
              </Swiper>
            </div>
            {/* Property Slider End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
