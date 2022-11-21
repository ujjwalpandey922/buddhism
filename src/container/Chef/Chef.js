import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./Chef.css";

const Chef = () => (
  <div className="app__chef app__bg app__wrapper section__padding">
    <div className="app__chef-image app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__chef-content">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-info">
        <div className="app__chef-info-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            corrupti sequi praesentium vero nobis reiciendis?
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          accusamus fugit iusto amet? Doloremque molestiae quod consequuntur
          reprehenderit corporis ullam nostrum aut, commodi impedit doloribus.
          Quos numquam sunt delectus architecto?
        </p>
      </div>
      <div className="app__chef-sign">
        <p className="app__checf-sign">Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
