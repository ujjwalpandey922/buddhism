import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-links_contact-header">Contact Us</h1>
        <p className="p__opensans"> Vedant Hospital, Lane-4 ,Pune- 411047</p>
        <p className="p__opensans">+91 8446992222</p>
        <p className="p__opensans">+91 8888888888</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer logo" />

        <p className="p__opensans">
          * The best way to find self is read some fucking books so fucking
          tawts *
        </p>
        <img src={images.spoon} alt="spoon footer" style={{ marginTop: 20 }} />
        <div className="app__footer-links-logos">
          <FiFacebook size={30} color="white" />
          <FiInstagram size={30} color="white" />
          <FiTwitter size={30} color="white" />
        </div>
      </div>
      <div className="app__footer-links_works">
        <h1 className="app__footer-links_contact-header">Working Hours</h1>
        <p className="p__opensans">
          Monday-Friday :<br />
          10:00 am - 02:00am
        </p>
        <p className="p__opensans">
          Saturday-Sunday:
          <br />
          08:00 am - 02:00am
        </p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">@Gustavo 2022.All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
