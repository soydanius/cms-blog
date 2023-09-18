import { Link, NavLink } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <h1>
            Happy{" "}
            <img
              style={{ width: 30, height: 30 }}
              src="./logo.png"
              alt="Logo"
            />{" "}
            Homemade
          </h1>
        </div>
        <div className="header-right">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
