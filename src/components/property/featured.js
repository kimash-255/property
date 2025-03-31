import Link from "next/link";
import Image from "next/image";

const Featured = () => {
  return (
    <div class="featured-property">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {/* <!-- Section Title Start --> */}
            <div class="section-title">
              <h3 class="wow fadeInUp">Properties</h3>
              <h2 class="text-anime">Featured Properties</h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            {/* <!-- Property Slider Start --> */}
            <div class="property-slider">
              <div class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    {/* <!-- Property Item Start --> */}
                    <div class="property-item">
                      {/* <!-- Property Item Header Start --> */}
                      <div class="property-header">
                        <figure class="image-anime">
                          <img src="images/property-1.jpg" alt="" />
                        </figure>

                        <span class="property-label">Rent</span>
                      </div>
                      {/* <!-- Property Item Header End --> */}

                      {/* <!-- Property Item Body Start --> */}
                      <div class="property-body">
                        <h3>Equestrian Family Home</h3>
                        <p>New York City, CA, USA</p>

                        <div class="property-meta">
                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-badroom.svg" alt="" />
                            </div>

                            <span>6 Bedsroom</span>
                          </div>

                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-bathroom.svg" alt="" />
                            </div>

                            <span>3 Bathrooms</span>
                          </div>

                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-area.svg" alt="" />
                            </div>

                            <span>720 sq ft</span>
                          </div>

                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-garage.svg" alt="" />
                            </div>

                            <span>1 Garages</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Property Item Body End --> */}

                      {/* <!-- Property Item Footer Start --> */}
                      <div class="property-footer">
                        <p class="property-price">$150,000</p>
                        <Link href="#" class="btn-default">
                          View Property
                        </Link>
                      </div>
                      {/* <!-- Property Item Footer Start --> */}
                    </div>
                    {/* <!-- Property Item End --> */}
                  </div>

                  <div class="swiper-slide">
                    {/* <!-- Property Item Start --> */}
                    <div class="property-item">
                      {/* <!-- Property Item Header Start --> */}
                      <div class="property-header">
                        <figure class="image-anime">
                          <img src="images/property-2.jpg" alt="" />
                        </figure>

                        <span class="property-label">Sell</span>
                      </div>
                      {/* <!-- Property Item Header End --> */}

                      {/* <!-- Property Item Body Start --> */}
                      <div class="property-body">
                        <h3>Luxury Family Home</h3>
                        <p>New York City, CA, USA</p>

                        <div class="property-meta">
                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-badroom.svg" alt="" />
                            </div>

                            <span>6 Bedsroom</span>
                          </div>

                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-bathroom.svg" alt="" />
                            </div>

                            <span>3 Bathrooms</span>
                          </div>

                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-area.svg" alt="" />
                            </div>

                            <span>720 sq ft</span>
                          </div>

                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-garage.svg" alt="" />
                            </div>

                            <span>1 Garages</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Property Item Body End --> */}

                      {/* <!-- Property Item Footer Start --> */}
                      <div class="property-footer">
                        <p class="property-price">$150,000</p>
                        <Link href="#" class="btn-default">
                          View Property
                        </Link>
                      </div>
                      {/* <!-- Property Item Footer End --> */}
                    </div>
                    {/* <!-- Property Item End --> */}
                  </div>

                  <div class="swiper-slide">
                    {/* <!-- Property Item Start --> */}
                    <div class="property-item">
                      {/* <!-- Property Item Header Start --> */}
                      <div class="property-header">
                        <figure class="image-anime">
                          <img src="images/property-3.jpg" alt="" />
                        </figure>

                        <span class="property-label">Rent</span>
                      </div>
                      {/* <!-- Property Item Header End --> */}

                      {/* <!-- Property Item Body Start --> */}
                      <div class="property-body">
                        <h3>Equestrian Family Home</h3>
                        <p>New York City, CA, USA</p>

                        <div class="property-meta">
                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-badroom.svg" alt="" />
                            </div>

                            <span>6 Bedsroom</span>
                          </div>

                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-bathroom.svg" alt="" />
                            </div>

                            <span>3 Bathrooms</span>
                          </div>

                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-area.svg" alt="" />
                            </div>

                            <span>720 sq ft</span>
                          </div>

                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-garage.svg" alt="" />
                            </div>

                            <span>1 Garages</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Property Item Body End --> */}

                      {/* <!-- Property Item Footer Start --> */}
                      <div class="property-footer">
                        <p class="property-price">$150,000</p>
                        <Link href="#" class="btn-default">
                          View Property
                        </Link>
                      </div>
                      {/* <!-- Property Item Footer End --> */}
                    </div>
                    {/* <!-- Property Item End --> */}
                  </div>

                  <div class="swiper-slide">
                    {/* <!-- Property Item Start --> */}
                    <div class="property-item">
                      {/* <!-- Property Item Header Start --> */}
                      <div class="property-header">
                        <figure class="image-anime">
                          <img src="images/property-4.jpg" alt="" />
                        </figure>

                        <span class="property-label">Rent</span>
                      </div>
                      {/* <!-- Property Item Header End --> */}

                      {/* <!-- Property Item Body Start --> */}
                      <div class="property-body">
                        <h3>Mountain View Condos</h3>
                        <p>New York City, CA, USA</p>

                        <div class="property-meta">
                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-badroom.svg" alt="" />
                            </div>

                            <span>6 Bedsroom</span>
                          </div>

                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-bathroom.svg" alt="" />
                            </div>

                            <span>3 Bathrooms</span>
                          </div>

                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-area.svg" alt="" />
                            </div>

                            <span>720 sq ft</span>
                          </div>

                          <div class="property-amenity-item">
                            <div class="icon-box">
                              <img src="images/icon-garage.svg" alt="" />
                            </div>

                            <span>1 Garages</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Property Item Body End --> */}

                      {/* <!-- Property Item Footer Start --> */}
                      <div class="property-footer">
                        <p class="property-price">$150,000</p>
                        <Link href="#" class="btn-default">
                          View Property
                        </Link>
                      </div>
                      {/* <!-- Property Item Footer End --> */}
                    </div>
                    {/* <!-- Property Item End --> */}
                  </div>
                </div>

                <div class="swiper-pagination"></div>
              </div>
            </div>
            {/* <!-- Property Slider End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
