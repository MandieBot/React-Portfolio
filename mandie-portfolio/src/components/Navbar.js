import React from "react";
import { Link } from "react-router-dom";

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
    </div>
  );
}

export default Nav;
