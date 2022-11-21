import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="app__navbar ">
        <div className="app_navbar-img">
          <a href="#home">
            <img src={images.gericht} alt="logo" />
          </a>
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="app__navbar-login">
          <span>
            <a href="/">Log In/Register </a>
          </span>
          <div />
          <a href="/">
            <span>Book a table </span>
          </a>
        </div>
        <div className="app__navbar-smallscreen">
          {!toggle ? (
            <GiHamburgerMenu
              fontsize={30}
              onClick={() => setToggle(true)}
              className="app__navbar-smallscreen-menu"
            />
          ) : null}
          {toggle ? (
            <div className="app__navbar-smallscreen-overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                className="overlay__close"
                fontsize={30}
                onClick={() => setToggle(false)}
              />
              <ul
                className="app__navbar-smallscreen-links"
                onClick={() => setToggle(false)}
              >
                <li className="p__opensans">
                  <a href="#home">Home</a>
                </li>
                <li className="p__opensans">
                  <a href="#about">About</a>
                </li>
                <li className="p__opensans">
                  <a href="#menu">Menu</a>
                </li>
                <li className="p__opensans">
                  <a href="#awards">Awards</a>
                </li>
                <li className="p__opensans">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
