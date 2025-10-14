import React from "react";
import "./styles/ProjectCard.css";

const ProjectCard = ({ image, title, subtitle, description }) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        {image && <img src={image} alt={title} />}
        <div className="project-card-content">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-subtitle">{subtitle}</p>
          <p className="project-card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
