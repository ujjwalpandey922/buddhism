import React from "react";
import images from "../../constants/images";
import data from "../../constants/data";
import "./SpecialMenu.css";
import { MenuItem, SubHeading } from "../../components";

const SpecialMenu = () => (
  <div className="app__specialmenu section__padding flex__center" id="menu">
    <div className="app__specialmenu-title">
      <SubHeading title="Menu that fits your palette" />
      <h1 className="headtext__cormorant"> Today's Special</h1>
    </div>
    <div className="app__specialmenu-menu">
      <div className="app__specialmenu-menu_winenbeer">
        <span className="app__specialmenu-menu_heading">Wine & Beer</span>
        <div className="app__specialmenu-menu_items">
          {data.wines.map((wines, index) => (
            <MenuItem
              key={wines.title + index}
              title={wines.title}
              price={wines.price}
              tags={wines.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialmenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="app__specialmenu-menu_cocktail">
        <span className="app__specialmenu-menu_heading">Cocktails</span>
        <div className="app__specialmenu-menu_items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem
              key={cocktails.title + index}
              title={cocktails.title}
              price={cocktails.price}
              tags={cocktails.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "20px" }}>
      <button type="button" className="custom__button">
        {" "}
        View More{" "}
      </button>
    </div>
  </div>
);

export default SpecialMenu;
