import React from "react";
import Header from "./Header";
import "./styles/About.css";
import logo from "../../assets/image/coffee Logo.png";
import about from "../../assets/image/About us.png";

const Aboutus = () => {
  return (
    <div className="about-wrap">
      <Header heading="About Us" />
      <div className="about-container">
        <div className="about-l">
          <h1>
            Passionate about <span>design</span> & <span>development,</span> we
            craft innovative solutions that bring ideas to life. Welcome to
            creativity redefined.
          </h1>
          <a href="2nd page">Know More</a>
        </div>
        <div className="about-r">
          <div>
            <h1>A golbal digital media company</h1>
          </div>
          <div>
            <img src={logo} alt="about-us logo" />
          </div>
          <div>
            <img src={about} alt="about-us icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;  
