import React from "react";
import LeftRectangles from "../HomeAbout/LeftRectangles";

import "./homeProjects.css";

function HomeProjects() {
  return (
    <div className="homeProjects-container">
      <section className="projectsSection projectsLeft">
        <div className="projectsLeftTop">
          <p>03.</p>
          <p>My Projects</p>
        </div>

        <div className="projectsLeftMiddle">
          I've worked on a couple of things
        </div>

        <div className="projectsLeftBottom">
          <LeftRectangles />
        </div>
      </section>

      <section className="projectsSection projectsRight">
        <div className="projectsRightTop">Most Recent Projects</div>
        <div className="projectsRightBottom">
          <div className="projectsRightBottomTop">
            <svg width="600" height="170">
              <rect x="150" y="10" width="260" height="160" fill="grey" />
            </svg>
          </div>
          <div className="projectsRightBottomMiddle">
            <svg width="600" height="170">
              <rect x="250" y="10" width="260" height="160" fill="grey" />
            </svg>
          </div>
          <div className="projectsRightBottomBottom">
            <svg width="600" height="170">
              <rect x="150" y="10" width="260" height="160" fill="grey" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeProjects;
