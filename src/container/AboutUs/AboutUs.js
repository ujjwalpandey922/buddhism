import React from "react";
import images from "../../constants/images";
import buddhaL from "../../assets/longBuddh.png";

import buddhlogo from "../../assets/smallLogo1.png";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg section__padding flex__center"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content-about">
        <h1 className="app__aboutus-content-about-h1 headtext__cormorant">
          About Buddhism
        </h1>
        <img
          src={buddhlogo}
          alt="aboutus__spoon"
          className="small-buddha-logo"
        />
        <p className="p__opensans">
          In current Buddhist society, the top Buddhist role models have iron
          wills, but lack real ACTION or PURPOSE behind this because of a
          misinterpretation of Dharma. Buddha’s four main vows tell a different
          story of how the Buddha should act.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content-knife flex__center">
        <img src={buddhaL} alt="kunai" />
      </div>
      <div className="app__aboutus-content-history">
        <h1 className="app__aboutus-content-about-h1 headtext__cormorant">
          Meaning  Principles
        </h1>
        <img
          src={buddhlogo}
          alt="aboutus__spoon"
          className="small-buddha-logo"
        />
        <p className="p__opensans meaning-li">
          <li>To save all people</li>
          <li>To renounce all worldly desires</li>
          <li>To learn all teachings</li>
          <li>To attain perfect enlightenment</li>
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
