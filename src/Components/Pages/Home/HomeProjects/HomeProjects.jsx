import React from "react";
import Button from "../HomeAbout/Button";
import LeftRectangles from "../HomeAbout/LeftRectangles";

import "./homeProjects.css";

function HomeProjects() {
  return (
    <div className="homeProjects-container">
      <section className="projectsSection projectsLeft">
        <div className="projectsLeftTop">
          <div>
            <h4 className="font__4 numberProjects">03.</h4>
          </div>

          <div>
            <h1 className="font__0 myProjects">Personal</h1>
            <h1 className="font__0 myProjects">Projects</h1>
          </div>
        </div>

        <div className="projectsLeftMiddle">
          <h3 className="font__3 myProjectsAnswer">
            <p>I have worked on several projects both</p>
            <p>individually and as part of a team.</p>
          </h3>
        </div>

        <div className="projectsLeftBottom">
          <div className="button-1">
            <Button message="LEARN MORE" url="/projects" />
          </div>

          <div className="button-2">
            <Button message="PITCH IDEA" url="/projects" />
          </div>
        </div>
      </section>

      <section className="projectsSection projectsRight">
        <div className="projectsRightTop">Most Recent Projects</div>
        <div className="projectsRightBottom">
          <div className="projectsRightBottomTop"></div>
          <div className="projectsRightBottomMiddle"></div>
          <div className="projectsRightBottomBottom"></div>
        </div>
      </section>
    </div>
  );
}

export default HomeProjects;
