import React from "react";

import Circles from "./Circles";
import Rectangles from "./Rectangles";
import ScrollDown from "./ScrollDown";
import { FaPlayCircle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import "./homeMain.css";

const Header = () => {
  return (
    <>
      <div className="homeMain-container">
        <section className="mainSection mainLeft">
          <div className="leftSection mainTop">
            <p>Hello! My name is Judith</p>
            <p>I'm a Computer Engineer interested in both</p>
            <p>hardware and software.</p>
          </div>

          <div className="leftSection mainBottom">
            <Rectangles />
          </div>
        </section>

        <section className="mainSection mainRight">
          <Circles />

          <div className="playCircle">
            <FaPlayCircle size={30} color="black" />
          </div>

          <ScrollDown />

          <div className="socials">
            <FaLinkedin size={22} />
            <FaGithub size={22} />
            <IoMdMail size={22} />
            <AiFillInstagram size={22} />
            <FaFacebook size={22} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
