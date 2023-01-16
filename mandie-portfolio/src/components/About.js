import React from "react";
import profilepic from "../images/profilepic.jpeg";

function About() {
  return (
    <div id="AboutMe">
      <img class="headerImg" src={profilepic} alt="headshot image" />
      <p class="aboutText">
        Newly armed with her Certificate of Completion in full stack web development from the University of Denver, Mandie is eager to leverage seven
        years of diverse sales expertise to venture into a new position as Data Integrations Engineer, where she will continue to grow her engineering
        skills. She is an adaptable and collaborative problem-solver with a proven track record of leading group projects as Scrum Master. She
        maintains a growth mindset with every challenge and describes herself as a lover of learning.
      </p>
    </div>
  );
}

export default About;
