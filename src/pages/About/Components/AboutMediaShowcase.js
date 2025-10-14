import React from "react";
import ServicesImages from "../../../assets/image/services-images.jpg";
import { PlayIcon } from "../../../common/svgIcon";
import "./Styles/about-media-show-case.css";
function AboutMediaShowcase() {
  return (
    <>
      <div className="about-showcase-video-main">
        <div className="about-showcase-video-container">
          <img
            src={ServicesImages}
            alt="Person working on laptop"
            className="about-hero-image"
          />
          <div className="about-play-button">
            <PlayIcon color="red" />
          </div>
        </div>
      </div>
      <div className="about-coffee-text">
        At Coffee Design studio, we don't just design. We curate experiences,
        blend aesthetics, and breathe life into pixels. We are the storytellers
        of visuals, the architects of imagination. Our studio is not just a
        space; it's a playground where ideas dance, colors mingle, and
        creativity knows no bounds. Founded on the belief that design transcends
        the visual, we embark on a journey with every project, infusing passion
        and purpose into every pixel. Meet the minds behind the masterpieces. We
        are a collective of dreamers, thinkers, and creators. United by a love
        for design, fueled by coffee, and inspired by the world around us. Join
        us in shaping narratives, redefining aesthetics, and bringing visions to
        life.
      </div>
    </>
  );
}

export default AboutMediaShowcase;
