import React from "react";

import images from "../../constants/images";
import data from "../../constants/data";
import { SubHeading } from "../../components";
import "./Laurels.css";

const Laurels = () => (
  <div
    className="app__bg section__padding app__wrapper app__laurels"
    id="awards"
  >
    <div className="app__wrapper-info">
      <SubHeading title="Awards & Recognitions" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels-awards">
        {data.awards.map((award) => (
          <div className="app__laurels-awards-single" key={award.title}>
            <img src={award.imgUrl} alt="awards" />
            <div className="app__laurels-awards-single-award-info">
              <p className="p__opensans" style={{ color: "#DCCA87" }}>
                {award.title}
              </p>
              <p className="p__opensans">{award.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="app__wrapper-img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
