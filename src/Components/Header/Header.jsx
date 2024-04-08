import React from "react";
import "./header.css";

const Header = () =>
{
    return (
        <header className="header">
            <nav  className="nav container">
                <a href="" className="personal-logo">
                    Judith
                </a>

                <div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            Home
                        </li>

                        <li className="nav-item">
                            About
                        </li>

                        <li className="nav-item">
                            Experience
                        </li>

                        <li className="nav-item">
                            Projects
                        </li>

                        <li className="nav-item">
                            Blog
                        </li>

                        <li className="nav-item">
                            Resources
                        </li>
                    </ul> 
                </div>
            </nav>
        </header>
    );
}

export default Header;