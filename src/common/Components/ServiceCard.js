import React from "react";
import "./styles/ServiceCard.css";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-icon.svg";

export function ServiceCard({ number, title, description, onClick }) {
  return (
    <div className="service-card">
      <span className="service-number">{number}</span>

      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>

      <div className="service-arrow" onClick={onClick}>
      <ArrowIcon/>
      </div>
      <div className="border-style"></div>
    </div>
  );
}
