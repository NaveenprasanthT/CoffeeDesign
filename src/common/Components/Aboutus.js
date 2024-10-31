import React from "react";
import Header from "./Header";
import "./styles/About.css";
import logo from "../../assets/image/coffee Logo.png";
import about from "../../assets/image/About us.png";
import circle from "../../assets/image/Ellipse 3.png";
import { Arrow } from "../svgIcon";

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
          <a href="2nd page">
            Know More{" "}
            <span>
              <Arrow color="#fff" />
            </span>
          </a>
        </div>
        <div className="about-r">
          <div className="about-img">
            <img src={circle} alt="circle" />
            <div className="about-logo">
              <img src={logo} alt="about-us logo" />
            </div>
          </div>
          <div className="about-bg">
            <img src={about} alt="about-us icon" />
            <div className="r-title">
              <h1>
                A global digital <br />
                media company
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
