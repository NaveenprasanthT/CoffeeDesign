import React from "react";
import './styles/CreativeDesignSection.css';

/**
 * Reusable Creative Design Section
 * @param {string} icon - Optional icon element
 * @param {string} title - Section small title
 * @param {string} heading - Main heading text
 * @param {string} description - Description text
 * @param {"center"|"start"} align - Alignment for the content
 */
const CreativeDesignSection = ({ 
  icon, 
  title, 
  heading, 
  description, 
  align = "center", 
  className = "" 
}) => {
  return (
    <div 
      className={`creative-design ${className} ${
        align === "start" ? "align-start" : "align-center"
      }`}
    >
      <p className="creative-design-title">
        {icon && <span className="creative-design-icon">{icon}</span>}
        {title}
      </p>
      <p className="creative-design-heading">{heading}</p>
      <p className="creative-design-description">{description}</p>
    </div>
  );
};

export default CreativeDesignSection;
