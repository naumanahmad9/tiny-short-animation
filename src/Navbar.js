import React from "react";
import logo from "./images/logo-junto-main.png";
import arrow from "./images/arrow-green.svg";

function Navbar() {
  return (
    <nav>
      <div>
        <img src={logo} className="logo" />
      </div>
      <ul>
        <li className="nav-active">Home</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Services</li>
        <li>
          <button className="nav-button">Get Started <img src={arrow} className="nav-arrow"/> </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
