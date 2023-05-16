import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import buddhaQuote from "../../assets/buddhism3.png";
import "./Chef.css";

const Chef = () => (
  <div className="app__chef app__bg app__wrapper section__padding" id="believe">
    <div className="app__chef-image app__wrapper_img app__wrapper_img-reverse">
      <img src={buddhaQuote} alt="chef" />
    </div>
    <div className="app__chef-content">
      <SubHeading title=" Word's of Wisdom" />
      <h1 className="headtext__cormorant">What Buddhism Believes In</h1>
      <div className="app__chef-info">
        <div className="app__chef-info-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Many buddhists today practice the seeking of enlightenment rather
            than practicing the way of Buddha himself.
          </p>
        </div>
        <p className="p__opensans">
          Buddha was an enlightened being who spread his philosophy far and
          wide, preaching and changing and influencing the world and his actions
          live on to this day. Buddhists in most countries are seen as people
          who simply meditate. The idea is to relinquish attachment to earthly
          desires in order to DO MORE. The core re-evaluation leads us to the
          idea that Nirvana is something to achieve in this realm. And that
          leaving this realm is a negative desire in it of itself.
        </p>
      </div>
      <div className="app__chef-sign">
        <p className="app__checf-sign">Kevin Luo</p>
        <p className="p__opensans">Theologian </p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
