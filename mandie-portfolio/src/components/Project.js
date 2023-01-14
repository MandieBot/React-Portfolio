import React from "react";
import hogwarts from "../images/Hogwarts-Icon.png";
import hangry from "../images/HangryResized1.png";
import weather from "../images/weather-app.png";
import ecommerce from "../images/shopping-cart.jpeg";
import notepad from "../images/notepad.jpeg";
import network from "../images/social-network.png";

function Project() {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <div>
      {/* <h2>This is the Project List</h2> */}
      <div class="smallerApps">
        <p class="border-hover">
          <a href="https://lit-castle-55469.herokuapp.com/" target="_blank">
            <header class="appName">Hogwarts Enrollment Portal</header> <img src={hogwarts} alt="Hogwarts-Crest" />
          </a>
        </p>
        <p class="border-hover">
          <a href="https://mandiebot.github.io/Hangry/" target="_blank">
            {" "}
            <header class="appName">Hangry</header>
            <img src={hangry} alt="Custom-Hangry-Logo" />
          </a>
        </p>
        <p class="border-hover">
          <a href="https://mandiebot.github.io/Weather-Dashboard/" target="_blank">
            <header class="appName">Weather Dashboard</header> <img src={weather} alt="sun peaking out behind cloud" />
          </a>
        </p>
        <p class="border-hover">
          <a href="https://github.com/MandieBot/ORM-E-Commerce-Backend" target="_blank">
            <header class="appName">E-Commerce Site Backend</header> <img src={ecommerce} alt="purple shopping cart" />
          </a>
        </p>
        <p class="border-hover">
          <a href="https://secure-wildwood-33792.herokuapp.com/" target="_blank">
            <header class="appName">Express.js Note Taker</header> <img src={notepad} alt="yellow pencil and notepad" />
          </a>
        </p>
        <p class="border-hover">
          <a href="https://github.com/MandieBot/Social-Network-API" target="_blank">
            <header class="appName">Social Network API</header> <img src={network} alt="speech bubble above people" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Project;
