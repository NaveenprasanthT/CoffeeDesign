import React from "react";
import CreativeDesignSection from "../../../common/Components/CreativeDesignSection ";
import { ReactComponent as AboutUsIcon } from "../../../assets/about-us-icon.svg";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../../common/svgIcon";
import "./Styles/MapCard.css";
function ContactUs() {
  return (
    <div className="">
      <div className="content-us-main">
        <CreativeDesignSection
          icon={<AboutUsIcon />}
          title="Contact us"
          heading="Get in touch with us. We're here to assist you."
          align="start"
        />{" "}
        <div className="face-book-content-us">
          <div>
            {" "}
            <FacebookIcon color="#1E2532"/>
          </div>
          <div>
            {" "}
            <InstagramIcon color="#1E2532" />
          </div>

          <div>
            {" "}
            <TwitterIcon color="#1E2532"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
