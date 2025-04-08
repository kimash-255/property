const Hero = () => {
  return (
    <div className="hero hero-video" style={{ height: "100vh" }}>
      <div className="" style={{ height: "100%" }}>
        {/* Video Start */}
        <div
          className="hero-bg-video"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: -1,
          }}
        >
          <video
            autoPlay
            muted
            loop
            id="myVideo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="images/logo/hero.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Video End */}

        <div className="container" style={{ height: "100%" }}>
          <div
            className="row align-items-center"
            style={{
              height: "100%",
            }}
          >
            <div className="col-lg-12">
              <div
                className="hero-content"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "80%", // Slightly reduce to give space below
                  paddingBottom: "5vh", // Adds spacing before next component
                }}
              >
                <div className="section-title">
                  <h1 className="text-anime">
                    <div
                      className="line"
                      style={{
                        display: "block",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <div className="word" style={{ display: "inline-block" }}>
                        {"Welcome to".split("").map((char, idx) => (
                          <span
                            key={`line1-char-${idx}`}
                            className="wow fadeInUp"
                            data-wow-delay={`${0.1 + idx * 0.05}s`}
                            style={{
                              display: "inline-block",
                              whiteSpace: "pre",
                            }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className="line"
                      style={{
                        display: "block",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <div className="word" style={{ display: "inline-block" }}>
                        {/* "My" in dark blue */}
                        {"My".split("").map((char, idx) => (
                          <span
                            key={`line2-char-my-${idx}`}
                            className="wow fadeInUp"
                            data-wow-delay={`${
                              0.1 + ("Welcome to".length + idx) * 0.05
                            }s`}
                            style={{
                              display: "inline-block",
                              whiteSpace: "pre",
                              color: "#002f49",
                            }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}

                        {/* "town" in green */}
                        {"town".split("").map((char, idx) => (
                          <span
                            key={`line2-char-town-${idx}`}
                            className="wow fadeInUp"
                            data-wow-delay={`${
                              0.1 + ("Welcome toMy".length + idx) * 0.05
                            }s`}
                            style={{
                              display: "inline-block",
                              whiteSpace: "pre",
                              color: "#a1cd44",
                            }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}

                        {/* " Karen" in white */}
                        {" Karen".split("").map((char, idx) => (
                          <span
                            key={`line2-char-karen-${idx}`}
                            className="wow fadeInUp"
                            data-wow-delay={`${
                              0.1 + ("Welcome toMytown".length + idx) * 0.05
                            }s`}
                            style={{
                              display: "inline-block",
                              whiteSpace: "pre",
                              color: "#ffffff",
                            }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </div>
                    </div>
                  </h1>
                </div>

                <div
                  className="hero-content-footer wow fadeInUp"
                  data-wow-delay="0.75s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.75s",
                    animationName: "fadeInUp",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  <a href="#" className="btn-default">
                    View Property
                  </a>
                  <a href="#" className="btn-default btn-border">
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
