import { Link } from "react-router-dom";

const Process = () => {
  return (
    <div className="how-it-works">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Section Title Start --> */}
            <div className="section-title">
              <h3 className="wow fadeInUp">How it works</h3>
              <h2 className="text-anime">Explore MyTown Karen</h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            {/* <!-- How it Work Item Start --> */}
            <div
              className="how-it-work-item wow fadeInUp"
              data-wow-delay="0.25s"
            >
              <div className="icon-box">
                <img src="images/icon-how-1.svg" alt="" />
              </div>

              <h3>Discover the Offerings</h3>
              <p>
                Explore the variety of shops, eateries, and services available.
              </p>
            </div>
            {/* <!-- How it Work Item End --> */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* <!-- How it Work Item Start --> */}
            <div
              className="how-it-work-item wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="icon-box">
                <img src="images/icon-how-2.svg" alt="" />
              </div>

              <h3>Visit the Mall</h3>
              <p>
                Walk through the mall, check out the various spaces, and talk to
                retailers.
              </p>
            </div>
            {/* <!-- How it Work Item End --> */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* <!-- How it Work Item Start --> */}
            <div
              className="how-it-work-item wow fadeInUp"
              data-wow-delay="0.75s"
            >
              <div className="icon-box">
                <img src="images/icon-how-3.svg" alt="" />
              </div>

              <h3>Choose Your Space</h3>
              <p>
                Select the perfect space for your needs, whether it's a shop,
                office, or restaurant.
              </p>
            </div>
            {/* <!-- How it Work Item End --> */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* <!-- How it Work Item Start --> */}
            <div className="how-it-work-item wow fadeInUp" data-wow-delay="1s">
              <div className="icon-box">
                <img src="images/icon-how-4.svg" alt="" />
              </div>

              <h3>Finalize the Agreement</h3>
              <p>
                Sign the lease agreement, complete any required documentation,
                and start your business.
              </p>
            </div>
            {/* <!-- How it Work Item End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
