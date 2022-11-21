import React from "react";
import images from "../../constants/images";
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
          About us
        </h1>
        <img src={images.spoon} alt="aboutus__spoon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex
          reiciendis tempore? Ullam dolorum ratione, pariatur quod incidunt rem
          dolores.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content-knife flex__center">
        <img src={images.knife} alt="kunai" />
      </div>
      <div className="app__aboutus-content-history">
        <h1 className="app__aboutus-content-about-h1 headtext__cormorant">
          History
        </h1>
        <img src={images.spoon} alt="history__spoon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex
          reiciendis tempore? Ullam dolorum ratione, pariatur quod incidunt rem
          dolores.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
