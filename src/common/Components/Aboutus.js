import React from "react";
import "./styles/About.css";
import about from "../../assets/image/reading-book-images.png";
import { ArrowRightIcon } from "../svgIcon";
import { ReactComponent as Arrow02 } from "../../assets/Arrow-02-ui-make.svg";

const Aboutus = () => {
  return (
    <div className="about-wrap">
      <div className="about-container">
        <div className="about-l">
          <h1>
            Passionate about <span>design</span> & <span>development,</span> we
            craft innovative solutions that bring ideas to life. Welcome to
            creativity redefined.
          </h1>
        </div>
        <div className="about-r">
         <div className="arrow-02-icon"> <Arrow02 />
          </div>
          <div className="about-bg">
            <img src={about} alt="about-us icon" />
            <div role="button" className="r-title">
              <h1>Get Started </h1>
              <div className="arrow-right-icon">
                <ArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
