import React from "react";
import VideoImage from "../../../assets/image/video-images.png";
import { ReactComponent as PlayIcon } from "../../../assets/play-icon.svg";
import { ReactComponent as LuminaIcon } from "../../../assets/lumina-icon.svg";
import { ReactComponent as VortexIcon } from "../../../assets/vortex-icon.svg";
import { ReactComponent as VelocityIcon } from "../../../assets/velocity-icon.svg";
import { ReactComponent as SynergyIcon } from "../../../assets/synergy-icon.svg";
import { ReactComponent as EnigmaIcon } from "../../../assets/enigma-icon.svg";
import { ReactComponent as SpectrumIcon } from "../../../assets/spectrum-icon.svg";
import { ReactComponent as GoogleV2Icon } from "../../../assets/google2-icon.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/google-icon.svg";
import { ReactComponent as StarIcon } from "../../../assets/Star-icon.svg";

import "./styles/media-showcase.css";

const MediaShowcase = () => {
  return (
    <section className="media-showcase">
      <div className="showcase-video-container">
        <img
          src={VideoImage}
          alt="Person working on laptop"
          className="hero-image"
        />
        <div className="play-button">
          <PlayIcon />
        </div>
      </div>

      <p className="trusted-text">
        Trusted by 50,000+ businesses for innovative design and growth.
      </p>

      <div className="brands">
        <span className="brands-content">
          <LuminaIcon className="brands-icon" />
          Lumina
          <span className="brands-border"> </span>
        </span>
        <span className="brands-content">
          <VortexIcon className="brands-icon" />
          Vortex
          <span className="brands-border"> </span>
        </span>
        <span className="brands-content">
          <VelocityIcon className="brands-icon" /> Velocity
          <span className="brands-border"> </span>
        </span>
        <span className="brands-content">
          <SynergyIcon className="brands-icon" /> Synergy
          <span className="brands-border"> </span>
        </span>
        <span className="brands-content">
          <EnigmaIcon className="brands-icon" /> Enigma
          <span className="brands-border"> </span>
        </span>
        <span className="brands-content">
          <SpectrumIcon className="brands-icon" /> Spectrum
        </span>
      </div>

      <div className="ratings">
        <div className="rating-box">
          <GoogleV2Icon className="rating-icon" />
          <div className="rating-info">
            <div className="rating-stars">
              <StarIcon className="half" />
              <span className="rating-number">4.8</span>
              <span className="rating-count">124</span>
            </div>
            <span className="rating-subtext">on Google Review</span>
          </div>
        </div>

        <div className="rating-box">
          <GoogleIcon className="rating-icon" />
          <div className="rating-info">
            <div className="rating-stars">
              <StarIcon className="half" />
              <span className="rating-number">4.8</span>
              <span className="rating-count">124</span>
            </div>
            <span className="rating-subtext">on Google Review</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
