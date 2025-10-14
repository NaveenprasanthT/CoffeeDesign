import React from "react";
import "./styles/about-intro.css";
import { ReactComponent as AboutIntroIcon } from "../../../assets/about-intro-icon.svg";
import { ReactComponent as AboutUsIcon } from "../../../assets/about-us-icon.svg";
import { ReactComponent as WorkFormIcon } from "../../../assets/work-form-icon.svg";

export function AboutIntro() {

  return (
    <div>
      <section className="about-intro" aria-labelledby="about-title">
        <div className="about-intro-grid">
          {/* Left Content */}
          <div className="about-intro-left">
            <div className="about-intro-header">
              <AboutUsIcon /> <span>About Us</span>
            </div>

            <h2 id="about-title" className="about-intro-title">
              Our Main Goal To Satisfied
              <br className="hidden-sm" /> Local &amp; Global Clients
            </h2>

            <p className="about-intro-text">
              sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam aperiam eaque quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo voluptatem.
            </p>
          </div>

          {/* Right Icon */}
          <div className="about-intro-right">
            <AboutIntroIcon className="about-intro-icon" />
          </div>
        </div>
      </section>
      <section aria-label="Our pillars" className="pillars-section">
        <div className="pillars-container">
          <div className="pillars-flex">
            <h3 className="pillars-title">Research</h3>

            <WorkFormIcon />
            <h3 className="pillars-title">Collaborate</h3>

            <WorkFormIcon />

            <h3 className="pillars-title">Build</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
