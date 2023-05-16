import React from "react";
import data from "../../constants/data";
import "./SpecialMenu.css";
import { MenuItem, SubHeading } from "../../components";

const SpecialMenu = () => (
  <div className="app__specialmenu section__padding flex__center" id="path">
    <div className="app__specialmenu-title">
      <SubHeading title="More about the Principles" />
      <h1 className="headtext__cormorant"> The Noble Eightfold Path</h1>
    </div>
    <div className="app__specialmenu-menu">
      <div className="app__specialmenu-menu_winenbeer">
        <span className="app__specialmenu-menu_heading">Actions & Paths</span>
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
    
    </div>
   
  </div>
);

export default SpecialMenu;
