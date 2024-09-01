import React from "react";

import ScrollingText from "./ScrollingText";
import { FaPlayCircle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { songOfTheWeek } from "../../../../Assets/Songs/SongOfTheWeek";

import "./homeMain.css";

const HomeMain = () => {
  return (
    <div className="homeMain-container">
      <div className="homeMain-greetings">
        <div className="first-greeting">
          <h4 className="first-greeting-text">Hey, I'm</h4>
        </div>

        <div className="second-greeting">
          <h1 className="second-greeting-text second-greeting-text-1">
            Judith
          </h1>
          <h1 className="second-greeting-text second-greeting-text-2">
            Osei-Tete
          </h1>
        </div>

        <div className="third-greeting">
          <p className="third-greeting-text">
            I love building creative things.
          </p>
        </div>
      </div>

      <div className="homeMain-picture">
        <div className="homeMain-circle-box">
          <div className="homeMain-big-circle big-circle"></div>

          <div className="small-circle">
            <a
              href={songOfTheWeek}
              target="_blank"
              rel="noopener noreferrer"
              className="play-circle-link"
            >
              <FaPlayCircle size={25} className="play-circle" />
            </a>
          </div>
        </div>
      </div>

      {/* 
        <div className="leftSection mainBottom">
          <div className="homeMain-rectangle homeMain-rectangle-1">
            <div className="scripture-square">
              <h3>John 3:16</h3>
            </div>

            <div className="scripture-content">
              <div className="scripture-of-the-week">
                <h3>SCRIPTURE OF THE WEEK</h3>
              </div>
              <div className="verse">
                <ScrollingText />
              </div>
            </div>
          </div>
          <div className="homeMain-rectangle homeMain-rectangle-2"></div>
        </div> */}

      <div className="homeMain-socials">
        <ul className="socials-content-list">
          <li>
            <a
              href="https://www.linkedin.com/in/judithoseitete/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={25} />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/this-is-judith"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={25} />
            </a>
          </li>

          <li>
            <a
              href="mailto:jao92@cornell.edu"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdMail size={25} />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/thisisjudith._/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram size={25} />
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/JudyTheSuperhero/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeMain;
