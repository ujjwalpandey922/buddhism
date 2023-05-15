import React from "react";
import { SubHeading } from "../../components";
import homepage from "../../assets/buddhism5.png";

import "./Header.css";

const Header = () => (
  <div className="app__header section__padding app__wrapper" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Bauddha and Dharmavinaya" />
      <h1 className="app__header-h1">Towards a Better Life </h1>
      <p className="p__opensans">
        Buddhism is an amazing philosophy full of wisdom with great truths,
        however I believe Buddhists have lost the way of the Buddha and lack a
        real basis of impact. Effective Buddhism is a solution to those who seek
        to follow the Buddhist Path as Buddha Wanted. If Buddha was alive today,
        imagine the amount of change and impact he would be having.
      </p>
    
    </div>
    <div className="app__wrapper_img">
      <img src={homepage} alt="wekcome" />
    </div>
  </div>
);

export default Header;
