
import React from "react";
import "./styles/LogoBrandIdentity.css";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow-right-icon.svg";
const LogoBrandIdentity = ({ services = [] }) => {
  return (
    <section className="logo-brand-section">
      <div className="logo-brand-container">
        {services.map((service, index) => (
          <div className="logo-brand-card" key={index}>
            <div className="logo-brand-card-header">
              <div className="dot"></div>
              <h3 className="log-title">{service.title}</h3>
            </div>
            <p className="logo-brand-card-description">{service.description}</p>
            <button className="logo-brand-arrow-btn">
              <ArrowRightIcon className="logo-arrow-right"/>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoBrandIdentity;
