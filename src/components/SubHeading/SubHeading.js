import React from "react";
import buddhlogo from "../../assets/smallLogo1.png";
const SubHeading = ({ title }) => {
  const styleObj = {
    width: "50px",
    heigth: "50px",
    borderRadius: "50%",
  };
  return (
    <div className="app__subheading">
      <p className="p__cormorant">{title}</p>
      <img src={buddhlogo} alt="spoon" className="buddhlogo" style={styleObj} />
    </div>
  );
};
export default SubHeading;
