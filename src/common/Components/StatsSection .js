import React from "react";
import "./styles/StatsSection.css";

/**
 * Reusable Stats Section
 * @param {Object[]} stats - Array of objects [{ value, label, description }]
 */
const StatsSection = ({ stats }) => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stats-card" key={index}>
            <h3 className="stats-value">{item.value}</h3>
            <h4 className="stats-label">{item.label}</h4>
            <p className="stats-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
