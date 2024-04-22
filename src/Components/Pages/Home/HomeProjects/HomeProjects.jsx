import React from "react";

import Button from "../HomeAbout/Button";
import projectImagePath from "../../../../Assets/Photos/stash.jpeg";
import personalWebsitePath from "../../../../Assets/Photos/personalWebsite.jpeg";

import "./homeProjects.css";

function HomeProjects() {
  return (
    <div className="homeProjects-container">
      <section className="homeProjects-section projectsLeft">
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

      <section className="homeProjects-section projects-right">
        <div className="projects-right-top">
          <h2 className="most-recent-projects">Most Recent Projects</h2>
        </div>
        <div className="projects-right-bottom">
          <div className="projects-right-bottom-top">
            <div className="projects-right-bottom-top-left">
              <img
                src={projectImagePath}
                alt="Stash App"
                className="projectImage-1"
              />
            </div>

            <div className="projects-right-bottom-top-right">
              <div className="project-title">
                <h3>STASH</h3>
              </div>

              <div className="project-description">
                <p>
                  Student-friendly budgetting and finance tracker app made using
                  Flutter, Dart and Android Studio.
                </p>
              </div>

              <div className="project-extras">
                <div className="project-timeline"></div>
                <div className="project-links"></div>
              </div>
            </div>
          </div>

          <div className="projects-right-bottom-bottom">
            <div className="projects-right-bottom-bottom-left"></div>
            <div className="projects-right-bottom-bottom-right">
              <img
                src={personalWebsitePath}
                alt="Personal Website"
                className="projectImage-2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeProjects;
