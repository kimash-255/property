import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div class="about-us">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            {/* <!-- About Left Image Start --> */}
            <div class="about-images">
              <div class="about-video">
                <figure class="reveal image-anime">
                  <img src="images/video-img-2.jpg" alt="" />
                </figure>

                <div class="video-play-button">
                  <Link
                    href="https://www.youtube.com/watch?v=2JNMGesMC2Y"
                    class="popup-video"
                  >
                    <img src="images/icon-play.svg" alt="" />
                  </Link>
                </div>
              </div>

              <div class="about-image">
                <figure class="reveal image-anime">
                  <img src="images/video-img-1.jpg" alt="" />
                </figure>
              </div>
            </div>
            {/* <!-- About Left Image End --> */}
          </div>
          <div class="col-lg-6">
            {/* <!-- About Content Start --> */}
            <div class="about-content">
              {/* <!-- Section Title Start --> */}
              <div class="section-title">
                <h3 class="wow fadeInUp">About Jivux</h3>
                <h2 class="text-anime">
                  The Leading Real Estate About Marketplace.
                </h2>
              </div>
              {/* <!-- Section Title End --> */}

              {/* <!-- About Content Body Start --> */}
              <div class="about-content-body">
                <p class="wow fadeInUp" data-wow-delay="0.5s">
                  We are a passionate team dedicated to providing exceptional
                  service, ensuring quality, trust, and a seamless experience
                  for our clients. Our goal is to help you make the best choices
                  with confidence.
                </p>

                <ul>
                  <li class="wow fadeInUp" data-wow-delay="0.75s">
                    <div class="icon-box">
                      <img src="images/icon-about-1.svg" alt="" />
                    </div>
                    <span>Smart Home Design</span>
                  </li>

                  <li class="wow fadeInUp" data-wow-delay="1s">
                    <div class="icon-box">
                      <img src="images/icon-about-2.svg" alt="" />
                    </div>
                    <span>Beautiful Scene Around</span>
                  </li>

                  <li class="wow fadeInUp" data-wow-delay="1.25s">
                    <div class="icon-box">
                      <img src="images/icon-about-3.svg" alt="" />
                    </div>
                    <span>Exceptional Lifestyle</span>
                  </li>

                  <li class="wow fadeInUp" data-wow-delay="1.5s">
                    <div class="icon-box">
                      <img src="images/icon-about-4.svg" alt="" />
                    </div>
                    <span>Complete 24/7 Security</span>
                  </li>
                </ul>

                <Link
                  href="#"
                  class="btn-default wow fadeInUp"
                  data-wow-delay="1.75s"
                >
                  Read More
                </Link>
              </div>
              {/* <!-- About Content Body End --> */}
            </div>
            {/* <!-- About Content End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
