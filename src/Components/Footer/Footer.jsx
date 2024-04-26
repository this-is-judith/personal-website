import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ContactForm from "./ContactForm";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-section footer-top">
        <div className="footer-top-left">
          <div className="footer-top-left-top">
            <h2>SHARE IDEAS WITH ME</h2>
          </div>

          <div className="footer-top-left-bottom">
            <ContactForm />
          </div>
        </div>

        <div className="footer-top-right">
          <div className="footer-quick-links footer-about">
            <h3>About</h3>
            <ul className="footer-links">
              <li className="footer-link-item">Background</li>
              <li className="footer-link-item">Faith</li>
              <li className="footer-link-item">Education</li>
              <li className="footer-link-item">Hobbies</li>
            </ul>
          </div>

          <div className="footer-quick-links footer-experience">
            <h3>Experience</h3>
            <ul className="footer-links">
              <li className="footer-link-item">Skills</li>
              <li className="footer-link-item">Work</li>
              <li className="footer-link-item">Hardware</li>
              <li className="footer-link-item">Software</li>
            </ul>
          </div>

          <div className="footer-quick-links footer-blog">
            <h3>Blog</h3>
            <ul className="footer-links">
              <li className="footer-link-item">Faith</li>
              <li className="footer-link-item">Money</li>
              <li className="footer-link-item">Tech</li>
              <li className="footer-link-item">College</li>
            </ul>
          </div>

          <div className="footer-quick-links footer-socials-container">
            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/judithoseitete/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://github.com/this-is-judith"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="mailto:jao92@cornell.edu"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMdMail size={24} />
              </a>

              <a
                href="https://www.instagram.com/thisisjudith._/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={24} />
              </a>

              <a
                href="https://www.facebook.com/JudyTheSuperhero/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section footer-bottom">
        <p className="name-and-copyright">Judith Osei-Tete © 2024</p>
      </section>
    </footer>
  );
};

export default Footer;
