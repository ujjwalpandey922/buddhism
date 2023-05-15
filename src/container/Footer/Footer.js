import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";


import images from "./../../assets/logo3.png";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-links_contact-header">Contact Us</h1>
        <p className="p__opensans"> Somewhere, someplace ,sometime- 411047</p>
        <p className="p__opensans">+91 9999999999</p>
        <p className="p__opensans">+91 8888888888</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images} alt="footer logo" />

        <p className="p__opensans">
          The best way to find self is to read some fucking books so do that you
          fucking tawts
        </p>
        <div className="app__footer-links-logos">
          <FiFacebook size={30} color="white" />
          <FiInstagram size={30} color="white" />
          <FiTwitter size={30} color="white" />
        </div>
      </div>
      <div className="app__footer-links_works">
        <h1 className="app__footer-links_contact-header">Visit Office At</h1>
        <p className="p__opensans">
          Monday-Friday :<br />
          08:00 am - 02:00am
        </p>
        <p className="p__opensans">
          Saturday-Sunday:
          <br />
          08:00 am - 02:00am
        </p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">@Buddhism 2022.All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
