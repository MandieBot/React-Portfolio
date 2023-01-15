import React from "react";
import github from "../images/github-icon-small.png";
import linkedin from "../images/linkedin-icon.png";

function Contact() {
  return (
    <div id="ContactMe">
      <h2>Contact Me</h2>
      <ul class="contactList">
        <li>970.691.8560</li>
        <li>amandabotinelly@gmail.com</li>
        <li>
          <a href="https://github.com/MandieBot" target="_blank">
            <img src={github} alt="Github-Logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mandie-botinelly/" target="_blank">
            <img src={linkedin} alt="Linkedin-Logo" />
          </a>
        </li>
      </ul>
      <footer>Made with ♥️</footer>
    </div>
  );
}

export default Contact;
