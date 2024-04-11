import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-bar">
        <div className="header-section-1"></div>

        <div className="header-section-2">
          <ul className="header-content-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link to="/experience">Experience</Link>
            </li>

            <li className="nav-item">
              <Link to="/projects">Projects</Link>
            </li>

            <li className="nav-item">
              <Link to="/blog">Blog</Link>
            </li>

            <li className="nav-item">
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
