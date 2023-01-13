import React from "react";
import Project from "./Project";

function Portfolio() {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <div>
      <h2>This is the Portfolio</h2>
      <Project />
    </div>
  );
}

export default Portfolio;
