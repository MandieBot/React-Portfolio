import React from "react";
import Navbar from "./Navbar";
import profilepic from "../images/profilepic.jpeg";

function Header() {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <div className="header">
      <img class ="headerImg" src={profilepic} alt="headshot image" />
      <h1>Mandie Botinelly</h1>
      <h3>
        <strong>A Gallery of Past & Ongoing Projects</strong>
      </h3>
      <Navbar />
    </div>
  );
}

export default Header;
