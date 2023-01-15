import React from "react";
import profilepic from "../images/profilepic.jpeg";

function About() {
  return (
    <div id="AboutMe">
      <img class="headerImg" src={profilepic} alt="headshot image" />
      <h2>
        Recent coding bootcamp graduate eager to leverage 7 years of diverse sales expertise to venture into a new role in software development with
        the skills acquired in frontend, backend, TDD, and Integrations Engineering. Adaptable and collaborative problem-solver with a proven track
        record of leading group projects as Scrum Master. Lover of learning and maintains a growth mindset with every challenge.
      </h2>
    </div>
  );
}

export default About;
