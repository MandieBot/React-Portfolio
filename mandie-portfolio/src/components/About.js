import React from "react";
import profilepic from "../images/profilepic.jpeg";

function About() {
  return (
    <div id="AboutMe">
      <img class="headerImg" src={profilepic} alt="headshot image" />
      <p class="aboutText">
        As a Sales Executive-turned-Solutions Engineer with over 6 years of combined experience, I am confident in my ability to efficiently analyze
        complex technical objections and communicate customized solutions to satisfy the diverse business needs of clients at any
        lifecycle stage. A hustler who flourishes in fast-paced environments, I operate with a keen focus on data-driven GTM strategies and analytical
        problem-solving techniques to drive any implementation to its successful completion. My proven track record of delivering articulate product
        demonstrations, coupled with my adaptability and growth mindset, would make me a valuable asset to your team.
      </p>
    </div>
  );
}

export default About;
