import { Link } from "react-router-dom";
import "./styles/header-section.css";
import { StatCard } from "../../../common/Components/StatCard";
import logo from "../../../assets/abstract-design-icon.svg";
import AbstractDesign from "../../../assets/abstract-design-icon.svg";
import { ReactComponent as ImagesContainerIcon } from "../../../assets/Images-Container-icon.svg";
import { ReactComponent as PatternIcon } from "../../../assets/Pattern.svg";
import { ReactComponent as ShapeIcon } from "../../../assets/Shape-right-Abstract-Design.svg";
import { ReactComponent as ShapeLeftIcon } from "../../../assets/Shape-Abstract-Design.svg";
import { ReactComponent as AbstractRightIcon } from "../../../assets/Abstract-Design-right.svg";
import { ReactComponent as AbstractLefttIcon } from "../../../assets/Abstract-Design-left.svg";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {/* Decorative background */}
      <img src={AbstractDesign} alt="" className="abstract-design-icon" />
      <div className="hero-bg-decor" aria-hidden="true" />

      <div className="hero-container">
        {/* Badge */}
        <div className="spots-badge-container">
          <div className="spots-badge-bordder"></div>
          <div className="spots-badge" role="status" aria-live="polite">
            <span className="spots-dot" aria-hidden="true"></span>
            <span className="spots-text">3 spots left</span>
          </div>
        </div>

        {/* Title */}
        <h1 id="hero-title" className="hero-title">
          Fresh and Modern Template for Agencies &amp; SaaS
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          This template is a perfect fit if you are looking for a modern and
          high-quality website to elevate your business.
        </p>

        {/* CTA Button */}
        <div className="hero-actions">
          <Link href="/pricing" className="hero-btn-primary">
            Get this Template
          </Link>
        </div>

        {/* Trust badge */}
        <div className="hero-trust">
          <img
            src={logo}
            alt="Preview reference artwork used as subtle background motif"
            width={80}
            height={24}
            className="hero-trust-img"
          />
        </div>
      </div>
      <div className="shope-icon-right">
        <ShapeIcon />
      </div>
      <div className="shope-icon-left">
        <ShapeLeftIcon />
      </div>

      <fieldset>
        <div className="pattern-icon">
          <PatternIcon style={{ width: "100%" }} />
        </div>
        <legend>
          {" "}
          <span className="hero-trust-text">
            {" "}
            <span className="shopev2-icon-left">
              <AbstractLefttIcon />
            </span>
            <ImagesContainerIcon />
            62+ Happy Customers{" "}
            <span className="shopev2-icon">
              <AbstractRightIcon />
            </span>
          </span>
        </legend>
        <div
          className="hero-stats-grid"
          role="list"
          aria-label="Company statistics"
        >
          <StatCard value="300+" label="Projects completed" />
          <StatCard value="16+" label="Awards Received" />
          <StatCard value="12+" label="Years of experience" />
          <StatCard value="34+" label="Team members" />
        </div>
      </fieldset>
      {/* Stats Grid */}
    </section>
  );
}
