import React from "react";
import "./homeMain.css";
import Circles from "./Circles";

const Header = () => {
  return (
    <>
      <div className="homeMain-container">
        <div className="mainSection left"></div>

        <div className="mainSection right">
          <Circles />
          {/* <SmallCircle /> */}
        </div>
      </div>
    </>
  );
};

export default Header;
