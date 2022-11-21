import React from "react";
import SubHeading from "../SubHeading/SubHeading";

import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__news section__padding">
    <div className="app__news-heading">
      <SubHeading title="NewsLetter" />
      <h1 className="headtext__cormorant">Subscribe To Our NewsLetter</h1>
      <p className="p__opensans">Never miss latest updates</p>
    </div>
    <div className="app__news-input ">
      <input type="email" placeholder="Enter Your Email" />
      <button type="button" className="custom__button">
        {" "}
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
