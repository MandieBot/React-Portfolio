import React from "react";

function Resume() {
  //   const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <div class="resumeStyling">
      <ul class="skillList">
        <li>-Browser Based Technologies: HTML5, CSS, jQuery, JavaScript, Bootstrap, Responsive Design, Local & Session Storage, React.js</li>
        <br></br>
        <li>-API Design: Client-Server Model, REST, JSON, AJAX</li>
        <br></br>
        <li>-Databases: MySQL, Sequelize, MongoDB, Mongoose</li>
        <br></br>
        <li>-Deployment & Delivery: Heroku, Git, GitLab, GitHub Pages, Shell Scripting, Unit Testing, Continuous Integration</li>
        <br></br>
        <li>-Server-Side Development: Node.js, Express.js, User Authentication, Template Engines, MERN Stack</li>
        <br></br>
        <li>-Project Management: Agile Methodology, Scrum Master, Trello</li>
        <br></br>
        <li>-CRM: Salesforce, HubSpot, Front, SalesLoft</li>
      </ul>
      <p>
        View My{" "}
        <a href="https://drive.google.com/file/d/1SAQblDNu90o7xeGYZI8Vjxt743YdYI7d/view?usp=share_link" target="_blank">
          Resume
        </a>
      </p>
    </div>
  );
}

export default Resume;
