import React from "react";
import LeftRectangles from "../HomeAbout/LeftRectangles";
import IPhone from "./IPhone";

import "./homeResources.css";

function HomeResources() {
  return (
    <div className="homeResources-container">
      <div className="resourcesSection resourcesLeft">
        <div className="resourcesLeftTop">
          <p>05.</p>
          <p>Resources</p>
        </div>

        <div className="resourcesLeftMiddle">
          Sharing resources and information I have collection over the years
        </div>

        <div className="resourcesLeftBottom">
          <LeftRectangles />
        </div>
      </div>
      <div className="resourcesSection resourcesRight">
        <IPhone />
      </div>
    </div>
  );
}

export default HomeResources;
