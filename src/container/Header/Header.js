import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";

import "./Header.css";

const Header = () => (
  <div className="app__header section__padding app__wrapper" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dinning </h1>
      <p className="p__opensans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        nostrum tempore ipsum doloribus molestias eligendi tenetur maiores
        asperiores consequatur ipsa ullam
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="wekcome" />
    </div>
  </div>
);

export default Header;
