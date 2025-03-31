import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return(
        <div class="hero hero-video">
<div class="hero-section">
  {/* <!-- Video Start --> */}
  <div class="hero-bg-video">
    {/* <!-- Selfhosted Video Start --> */}
    <video autoplay muted loop id="myVideo">
      <source src="images/hero.mp4" type="video/mp4" />
    </video>
    {/* <!-- Selfhosted Video End --> */}
  </div>
  {/* <!-- Video End --> */}

  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-12">
        {/* <!-- Hero Left Content Start --> */}
        <div class="hero-content">
          <div class="section-title">
            <h3 class="wow fadeInUp">Welcome to Jivux</h3>
            <h1 class="text-anime">Invest Today in Your Dream Home</h1>
          </div>
          <div
            class="hero-content-body wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <p>
              Duis ultricies, tortor a accumsan fermentum, purus diam
              mollis velit, eu bibendum ipsum erat quis leo. Vestibulum
              finibus, leo dapibus feugiat rutrum, augue lacus rhoncus
              velit, vel scelerisque odio est.
            </p>
          </div>

          <div
            class="hero-content-footer wow fadeInUp"
            data-wow-delay="0.75s"
          >
            <a href="#" class="btn-default">View Property</a>
            <a href="#" class="btn-default btn-border">Contact Now</a>
          </div>
        </div>
        {/* <!-- Hero Left Content End --> */}
      </div>
    </div>
  </div>
</div>

{/* <!-- Hero Search Form Start --> */}
<div class="hero-search-form-section">
  <div class="container">
    {/* <!-- Property Search Form Start --> */}
    <div class="hero-search-form wow fadeInUp" data-wow-delay="1s">
      <div class="search-heading">
        <h4>Search Property</h4>
      </div>

      <!-- Filter Form Start -->
      <form action="#" method="get">
        <div class="row">
          <div class="col-lg-2 col-md-6">
            <input
              type="text"
              class="form-control"
              placeholder="Enter keywords"
            />
          </div>

          <div class="col-lg-2 col-md-6">
            <select class="form-control">
              <option value="">Sell or Rent</option>
              <option>Sell</option>
              <option>Rent</option>
            </select>
          </div>

          <div class="col-lg-2 col-md-6">
            <select class="form-control">
              <option value="">Property Type</option>
              <option>Apartment</option>
              <option>Office</option>
            </select>
          </div>

          <div class="col-lg-2 col-md-6">
            <select class="form-control">
              <option value="">Location</option>
              <option>Surat</option>
              <option>Banglore</option>
            </select>
          </div>

          <div class="col-lg-2 col-md-6">
            <select class="form-control">
              <option value="">Amenities</option>
              <option>Swimming Pool</option>
              <option>Playarea</option>
            </select>
          </div>

          <div class="col-lg-2 col-md-6">
            <button type="submit" class="btn-default">Search</button>
          </div>
        </div>
      </form>
      {/* <!-- Filter Form End --> */}
    </div>
    {/* <!-- Property Search Form End --> */}
  </div>
</div>
{/* <!-- Hero Search Form End --> */}
</div>

    );
};
export default Hero;