import React from "react";
import LeftRectangles from "../HomeAbout/LeftRectangles";
import RightTopRectangles from "./RightTopRectangles";
import RightBottomRectangles from "./RightBottomRectangles";

import "./homeExperience.css";

function HomeExperience() {
  return (
    <div className="homeExperience-container">
      <div className="experienceSection experienceLeft">
        <div className="experienceLeftTop">
          <p>02.</p>
          <p>My Experience</p>
        </div>

        <div className="experienceLeftMiddle">
          I've had opportunities to get some things done
        </div>

        <div className="experienceLeftBottom">
          <LeftRectangles />
        </div>
      </div>

      <div className="experienceSection experienceRight">
        <div className="experienceRightTop">
          <p>Skills at a Glance</p>
        </div>

        <div className="experienceRightBottom">
          <div className="experienceRightBottomTop">
            <RightTopRectangles />
          </div>
          <div className="experienceRightBottomBottom">
            <RightBottomRectangles />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeExperience;
