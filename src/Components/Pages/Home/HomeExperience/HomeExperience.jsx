import React from "react";

import Button from "../HomeAbout/Button";
import PDFButton from "./PDFButton";
import resumePath from "../../../../Assets/Documents/judith-most-recent-resume.pdf";
import { FaMagnifyingGlass } from "react-icons/fa6";

import "./homeExperience.css";

function HomeExperience() {
  return (
    <div className="homeExperience-container">
      <section className="experience-section experience-left">
        <div className="experience-left-top">
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

        <div className="experience-left-bottom">
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
          <div className="experience-right-top-left">
            <h2 className="at-a-glance">At A Glance</h2>
          </div>
          <div className="experience-right-top-right">
            <FaMagnifyingGlass
              size={40}
              className="magnifying-glass"
              fill="var(--accent-one)"
            />
          </div>
        </div>

        <div className="experience-right-bottom">
          <div className="skills-container">
            <div className="skill-section skill-left font__3">
              <h2>Software</h2>
              <ul>
                <li>Python</li>
                <li>Java & Kotlin</li>
                <li>JavaScript & React</li>
                <li>HTML & CSS</li>
                <li>Flutter & Dart</li>
                <li>Data Structures & Algo</li>
                <li>2+ years school exp.</li>
              </ul>
            </div>

            <div className="skill-section font__3">
              <h2>Hardware</h2>
              <ul>
                <li>PCB Layout & Design</li>
                <li>Digital Logic Design</li>
                <li>Computer Architecture</li>
                <li>Oscilloscope Probing</li>
                <li>Power Sequencing</li>
                <li>Microsoldering</li>
                <li>6+ months industry exp.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeExperience;
