import React from "react";
import RightTopRectangles from "./RightTopRectangles";
import RightBottomRectangles from "./RightBottomRectangles";
import Button from "../HomeAbout/Button";
import PDFButton from "./PDFButton";
import resumePath from "../../../../Assets/Documents/judith-most-recent-resume.pdf";

import "./homeExperience.css";

function HomeExperience() {
  return (
    <div className="homeExperience-container">
      <section className="experienceSection experienceLeft">
        <div className="experienceLeftTop">
          <div>
            <h4 className="font__4 numberExperience">02.</h4>
          </div>

          <div>
            <h1 className="font__0 myExperience">Skills &</h1>
            <h1 className="font__0 myExperience">Experience</h1>
          </div>
        </div>

        <div className="experienceLeftMiddle">
          <h3 className="font__3 myExperienceAnswer">
            <p>My areas of expertise have a wide</p>
            <p>but focused range.</p>
          </h3>
        </div>

        <div className="experienceLeftBottom">
          <div className="button-1">
            <Button message="LEARN MORE" url="/experience" />
          </div>

          <div className="button-2">
            <PDFButton message="VIEW RESUME" url={resumePath} />
          </div>
        </div>
      </section>

      <section className="experienceSection experienceRight">
        <div className="experienceRightTop">
          <p>Skills at a Glance + m. glass icon</p>
        </div>

        <div className="experienceRightBottom">
          <div className="experienceRightBottomTop">
            <RightTopRectangles /> {/* TODO: remove rectangles */}
          </div>
          <div className="experienceRightBottomBottom">
            <RightBottomRectangles />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeExperience;
