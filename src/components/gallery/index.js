import Link from "next/link";
import Image from "next/image";

const Gallery = () => {
  // Gallery images data
  const galleryItems = [
    { id: 1, src: "/images/post-1.jpg", delay: "0.25s" },
    { id: 2, src: "/images/post-2.jpg", delay: "0.5s" },
    { id: 3, src: "/images/post-3.jpg", delay: "0.75s" },
    { id: 4, src: "/images/post-4.jpg", delay: "1s" },
    { id: 5, src: "/images/post-5.jpg", delay: "1.25s" },
    { id: 6, src: "/images/post-6.jpg", delay: "1.5s" },
    { id: 7, src: "/images/post-7.jpg", delay: "1.75s" },
    { id: 8, src: "/images/post-8.jpg", delay: "2s" },
  ];

  // About features data
  const aboutFeatures = [
    {
      id: 1,
      icon: "/images/icon-about-1.svg",
      text: "Smart Home Design",
      delay: "0.75s",
    },
    {
      id: 2,
      icon: "/images/icon-about-2.svg",
      text: "Beautiful Scene Around",
      delay: "1s",
    },
    {
      id: 3,
      icon: "/images/icon-about-3.svg",
      text: "Exceptional Lifestyle",
      delay: "1.25s",
    },
    {
      id: 4,
      icon: "/images/icon-about-4.svg",
      text: "Complete 24/7 Security",
      delay: "1.5s",
    },
  ];

  // Text animation data for "Our Photo Gallery"
  const galleryTitleChars = [
    { word: "Our", chars: ["O", "u", "r"] },
    { word: "Photo", chars: ["P", "h", "o", "t", "o"] },
    { word: "Gallery", chars: ["G", "a", "l", "l", "e", "r", "y"] },
  ];

  // Text animation data for "The Leading Real Estate About Market."
  const aboutTitleChars = [
    {
      line: 1,
      words: [
        { word: "The", chars: ["T", "h", "e"] },
        { word: "Leading", chars: ["L", "e", "a", "d", "i", "n", "g"] },
        { word: "Real", chars: ["R", "e", "a", "l"] },
      ],
    },
    {
      line: 2,
      words: [
        { word: "Estate", chars: ["E", "s", "t", "a", "t", "e"] },
        { word: "About", chars: ["A", "b", "o", "u", "t"] },
      ],
    },
    {
      line: 3,
      words: [
        {
          word: "Marketplace.",
          chars: ["M", "a", "r", "k", "e", "t", "p", "l", "a", "c", "e", "."],
        },
      ],
    },
  ];

  return (
    <div className="photo-gallery">
      <div className="container">
        {/* Gallery Section */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h3
                className="wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                Gallery
              </h3>
              <h2 className="text-anime">
                <div
                  className="line"
                  style={{
                    display: "block",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {galleryTitleChars.map((item, wordIndex) => (
                    <React.Fragment key={wordIndex}>
                      <div className="word" style={{ display: "inline-block" }}>
                        {item.chars.map((char, charIndex) => (
                          <div
                            key={charIndex}
                            className="char"
                            style={{
                              display: "inline-block",
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                            }}
                          >
                            {char}
                          </div>
                        ))}
                      </div>{" "}
                    </React.Fragment>
                  ))}
                </div>
              </h2>
            </div>
          </div>
        </div>

        {/* Gallery Items */}
        <div className="row project-gallery-items">
          {galleryItems.map((item) => (
            <div key={item.id} className="col-lg-3 col-6">
              <div
                className="gallery-item wow fadeInUp"
                data-wow-delay={item.delay}
                style={{
                  visibility: "visible",
                  animationDelay: item.delay,
                  animationName: "fadeInUp",
                }}
              >
                <Link href={item.src}>
                  <figure className="image-anime">
                    <Image
                      src={item.src}
                      alt=""
                      width={400}
                      height={300}
                      layout="responsive"
                    />
                  </figure>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-images">
                <div className="about-video">
                  <figure
                    className="reveal image-anime"
                    style={{
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                      visibility: "inherit",
                    }}
                  >
                    <Image
                      src="/images/video-img-2.jpg"
                      alt=""
                      width={600}
                      height={400}
                      layout="responsive"
                    />
                  </figure>

                  <div className="video-play-button">
                    <Link
                      href="https://www.youtube.com/watch?v=2JNMGesMC2Y"
                      className="popup-video"
                    >
                      <Image
                        src="/images/icon-play.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </Link>
                  </div>
                </div>

                <div className="about-image">
                  <figure
                    className="reveal image-anime"
                    style={{
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                      visibility: "inherit",
                    }}
                  >
                    <Image
                      src="/images/video-img-1.jpg"
                      alt=""
                      width={600}
                      height={400}
                      layout="responsive"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h3
                    className="wow fadeInUp"
                    style={{ visibility: "hidden", animationName: "none" }}
                  >
                    About Jivux
                  </h3>
                  <h2 className="text-anime">
                    {aboutTitleChars.map((line, lineIndex) => (
                      <div
                        key={lineIndex}
                        className="line"
                        style={{
                          display: "block",
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        {line.words.map((word, wordIndex) => (
                          <React.Fragment key={wordIndex}>
                            <div
                              className="word"
                              style={{ display: "inline-block" }}
                            >
                              {word.chars.map((char, charIndex) => (
                                <div
                                  key={charIndex}
                                  className="char"
                                  style={{
                                    display: "inline-block",
                                    opacity: 1,
                                    visibility: "inherit",
                                    transform: "translate(0px, 0px)",
                                  }}
                                >
                                  {char}
                                </div>
                              ))}
                            </div>{" "}
                          </React.Fragment>
                        ))}
                      </div>
                    ))}
                  </h2>
                </div>

                <div className="about-content-body">
                  <p
                    className="wow fadeInUp"
                    data-wow-delay="0.5s"
                    style={{
                      visibility: "hidden",
                      animationDelay: "0.5s",
                      animationName: "none",
                    }}
                  >
                    Duis pulvinar metus elit, ut aliquam est sollicitudin
                    finibus. Integer lobortis est interdum. Suspendisse nunc
                    est, varius quis fringilla ac, commodo a ante. Praesent non
                    elit cursus, aliquam sapien quis, dictum tortor.
                  </p>

                  <ul>
                    {aboutFeatures.map((feature) => (
                      <li
                        key={feature.id}
                        className="wow fadeInUp"
                        data-wow-delay={feature.delay}
                        style={{
                          visibility: "hidden",
                          animationDelay: feature.delay,
                          animationName: "none",
                        }}
                      >
                        <div className="icon-box">
                          <Image
                            src={feature.icon}
                            alt=""
                            width={30}
                            height={30}
                          />
                        </div>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
