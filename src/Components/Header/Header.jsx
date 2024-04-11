import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Photos/logo.png";
import { useScrollToTop } from "../../Assets/Hooks/useScrollToTop";

import "./header.css";

const Header = () => {
  const handleScrollToTop = useScrollToTop();

  return (
    <header className="header-container">
      <nav className="header-bar">
        <div className="header-section-1">
          <Link to="/" onClick={handleScrollToTop}>
            <img className="logo" src={logo} alt="logo"></img>
          </Link>
        </div>

        <div className="header-section-2">
          <ul className="header-content-list">
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav-item">
                About
              </Link>
            </li>

            <li>
              <Link to="/experience" className="nav-item">
                Experience
              </Link>
            </li>

            <li>
              <Link to="/projects" className="nav-item">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/blog" className="nav-item">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/resources" className="nav-item">
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
