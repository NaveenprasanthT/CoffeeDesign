import React from "react";
import CreativeDesignSection from "../../../common/Components/CreativeDesignSection ";
import { ReactComponent as AboutUsIcon } from "../../../assets/about-us-icon.svg";
import './Styles/about-us.css'
function AboutUs() {
  return (
    <div className="services-about-us">
      <div>
        <CreativeDesignSection
          icon={<AboutUsIcon />}
          title="About us"
          heading="Services we are offering"
          align="start"
        />{" "}
      </div>
      <p className="services-about-us-heading">
        Lorem ipsum dolor sit amet consectetur. Ac sed viverra at enim auctor
        consectetur. Tortor tellus adipiscing aliquet nisi eget id porta. Vel
        non elementum ipsum vulputate. Vitae metus eget pellentesque integer
        diam massa lacus phasellus. Habitasse convallis suspendisse cursus sit
        lobortis vitae sit sit amet. Bibendum tempus eget vel eleifend at. Purus
        sed sagittis diam habitasse. Consequat in netus vulputate tincidunt elit
        eget pellentesque. Eu eget maecenas posuere eget nunc tortor faucibus
        varius.{" "}
      </p>
    </div>
  );
}

export default AboutUs;
