import React from "react";
import Navbar from "./Navbar";

function Header() {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <div className="header">
      {/* <img src="./assets/images/headshot1.jpeg" alt="headshot image" /> */}
      <h1>Mandie Botinelly</h1>
      <h3>
        <strong>A Gallery of Past & Ongoing Projects</strong>
      </h3>
      <Navbar />
    </div>
  );
}

export default Header;
