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
      <section className="experience-section experience-left">
        <div className="experienceLeftTop">
          <div>
            <h4 className="font__4 number-experience">02.</h4>
          </div>

          <div>
            <h1 className="font__0 my-experience">Skills &</h1>
            <h1 className="font__0 my-experience">Experience</h1>
          </div>
        </div>

        <div className="experience-left-middle">
          <h3 className="font__3 my-experience-answer">
            <p>My areas of expertise have a wide</p>
            <p>but focused range.</p>
          </h3>
        </div>

        <div className="experienceLeftBottom">
          <div className="experience-button-1">
            <Button message="LEARN MORE" url="/experience" />
          </div>

          <div className="experience-button-2">
            <PDFButton message="VIEW RESUME" url={resumePath} />
          </div>
        </div>
      </section>

      <section className="experience-section experience-right">
        <div className="experience-right-top">
          <p>Skills at a Glance + m. glass icon</p>
        </div>

        <div className="experience-right-bottom">
          {/* <div className="experienceRightBottomTop">
            <RightTopRectangles />
          </div>
          <div className="experienceRightBottomBottom">
            <RightBottomRectangles />
          </div> */}

          <div className="skills-container">
            <div className="skill-section">
              <h2>Hardware</h2>
              <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
                <li>Skill 4</li>
              </ul>
            </div>

            <div className="skill-section">
              <h2>Software</h2>
              <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
                <li>Skill 4</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeExperience;
