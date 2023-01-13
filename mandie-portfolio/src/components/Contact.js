import React from "react";

function Contact() {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <div id="ContactMe">
      <h2>Contact Me</h2>
      <ul class="contactList">
        <li>970.691.8560</li>
        <li>amandabotinelly@gmail.com</li>
        <li>
          <a href="https://github.com/MandieBot" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mandie-botinelly/" target="_blank">
            LinkedIn
          </a>
        </li>
      </ul>
      <footer>Made with ♥️</footer>
    </div>
  );
}

export default Contact;
