import React from "react";
import CreativeDesignSection from "../../../common/Components/CreativeDesignSection ";
import { ReactComponent as AboutUsIcon } from "../../../assets/about-us-icon.svg";
import "./Styles/about-us.css";
function AboutUs() {
  return (
    <div className="services-about-us">
      <div>
        <CreativeDesignSection
          icon={<AboutUsIcon />}
          title="About us"
          heading="Empowering Brands Through Thoughtful Design Solutions"
          align="start"
        />{" "}
      </div>
      <p className="services-about-us-heading">
        "Empowering brands with innovative design solutions, crafting unique
        experiences, and turning ideas into visually compelling, user-centric
        realities."
      </p>
    </div>
  );
}

export default AboutUs;
