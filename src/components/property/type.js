import Link from "next/link";
import Image from "next/image";

const PropertyType = () => {
  return (
    <div class="property-types">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {/* <!-- Section Title Start --> */}
            <div class="section-title">
              <h3 class="wow fadeInUp">Property Types</h3>
              <h2 class="text-anime">Explore Apartment Types</h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            {/* <!-- Property Type Slider Start --> */}
            <div class="property-type-slider">
              <div class="swiper">
                <div class="swiper-wrapper">
                  {/* <!-- Property Type Slide Start --> */}
                  <div class="swiper-slide">
                    <div class="property-type-item">
                      <div class="icon-box">
                        <img src="images/icon-property-type-1.svg" alt="" />
                      </div>

                      <h3>Houses</h3>
                      <p>22 Properties</p>
                    </div>
                  </div>
                  {/* <!-- Property Type Slide End --> */}

                  {/* <!-- Property Type Slide Start --> */}
                  <div class="swiper-slide">
                    <div class="property-type-item">
                      <div class="icon-box">
                        <img src="images/icon-property-type-2.svg" alt="" />
                      </div>

                      <h3>Apartments</h3>
                      <p>32 Properties</p>
                    </div>
                  </div>
                  {/* <!-- Property Type Slide End --> */}

                  {/* <!-- Property Type Slide Start --> */}
                  <div class="swiper-slide">
                    <div class="property-type-item">
                      <div class="icon-box">
                        <img src="images/icon-property-type-3.svg" alt="" />
                      </div>

                      <h3>Office</h3>
                      <p>42 Properties</p>
                    </div>
                  </div>
                  {/* <!-- Property Type Slide End --> */}

                  {/* <!-- Property Type Slide Start --> */}
                  <div class="swiper-slide">
                    <div class="property-type-item">
                      <div class="icon-box">
                        <img src="images/icon-property-type-4.svg" alt="" />
                      </div>

                      <h3>Townhome</h3>
                      <p>18 Properties</p>
                    </div>
                  </div>
                  {/* <!-- Property Type Slide End --> */}

                  {/* <!-- Property Type Slide Start --> */}
                  <div class="swiper-slide">
                    <div class="property-type-item">
                      <div class="icon-box">
                        <img src="images/icon-property-type-5.svg" alt="" />
                      </div>

                      <h3>Bungalow</h3>
                      <p>40 Properties</p>
                    </div>
                  </div>
                  {/* <!-- Property Type Slide End --> */}
                </div>

                <div class="swiper-pagination"></div>
              </div>
            </div>
            {/* <!-- Property Type Slider End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyType;
