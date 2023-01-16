import React from "react";
import { Link } from "react-router-dom";
import ripples from "../images/white-ripples.avif";

function Nav() {
  return (
    <div>
      <ul className="navList">
        <li className="navLink">
          <Link to="/">About</Link>
        </li>
        <li className="navLink">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="navLink">
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
      <img class="rippleImg" src={ripples} alt="textured-white-ripples" />
    </div>
  );
}

export default Nav;
