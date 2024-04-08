import React from "react";
import "./header.css";

const Header = () =>
{
    return (
        <header className="header">
            <nav  className="header-bar">
                <a href="" className="personal-logo">
                    Judith
                </a>

                <div>
                    <ul className="content-list">
                        <li className="nav-item">
                            HOME
                        </li>

                        <li className="nav-item">
                            ABOUT
                        </li>

                        <li className="nav-item">
                            EXPERIENCE
                        </li>

                        <li className="nav-item">
                            PROJECTS
                        </li>

                        <li className="nav-item">
                            BLOG
                        </li>

                        <li className="nav-item">
                            RESOURCES
                        </li>
                    </ul> 
                </div>
            </nav>
        </header>
    );
}

export default Header;