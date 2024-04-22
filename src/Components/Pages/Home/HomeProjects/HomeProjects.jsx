import React from "react";

import Button from "../HomeAbout/Button";
import projectImagePath from "../../../../Assets/Photos/stash.jpeg";
import personalWebsitePath from "../../../../Assets/Photos/personalWebsite.jpeg";
import { FaRegClock } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

import "./homeProjects.css";
import { Link } from "react-router-dom";

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
                  Flutter, Dart, Android Studio and Kotlin.
                </p>
              </div>

              <div className="project-extras">
                <div className="project-timeline">
                  <FaRegClock size="18" />
                  <span>April 2024 - present</span>
                </div>

                <div className="project-links">
                  <a
                    // TODO: update link
                    href="https://github.com/this-is-judith"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size="18" />
                  </a>

                  <a
                    // TODO: update link
                    href="https://github.com/this-is-judith"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size="18" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-right-bottom-bottom">
            <div className="projects-right-bottom-bottom-left">
              <div className="project-title">
                <h3>PERSONAL WEBSITE</h3>
              </div>

              <div className="project-description">
                <p>
                  This very website! Features include 6+ pages,
                  mobile-responsiveness, and a blog. Built using React and
                  Firebase.
                </p>
              </div>

              <div className="project-extras">
                <div className="project-timeline">
                  <FaRegClock size="18" />
                  <span>Jan 2024 - present</span>
                </div>

                <div className="project-links">
                  <a
                    // TODO: update link
                    href="https://github.com/this-is-judith"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size="18" />
                  </a>

                  <Link
                    to="/"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size="18" />
                  </Link>
                </div>
              </div>
            </div>

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
