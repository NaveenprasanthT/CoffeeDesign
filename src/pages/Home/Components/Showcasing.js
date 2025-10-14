import React from "react";
import ProjectCard from "../../../common/Components/ProjectCard ";
import CreativeDesignSection from "../../../common/Components/CreativeDesignSection ";
import { ReactComponent as AboutUsIcon } from "../../../assets/about-us-icon.svg";
import Made3D from "../../../assets/3d-made-images.png";
import Atomize from "../../../assets/Atomize-image.png";

function Showcasing() {
  const projects = [
    {
      image: Atomize,
      subtitle: "Developer forward",
      description:
        "Content is powered by markdown and lives alongside your codebase",
    },
    {
      image: Made3D,
      subtitle: "Developer forward",
      description:
        "Content is powered by markdown and lives alongside your codebase",
    },
  ];
  const projectstwo = [
    {},
    {},
    {
      subtitle: "Developer forward",
      description:
        "Content is powered by markdown and lives alongside your codebase",
    },
  ];
  return (
    <>
      <CreativeDesignSection
        icon={<AboutUsIcon />}
        title="Our Projects"
        heading="Showcasing Creativity Through Successful Project Execution"
        description="A platform you can rely on to reach your audience"
      />
      <div className="project-card-grid">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
          />
        ))}
      </div>
      <div className="project-card-grid">
        {projectstwo.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Showcasing;
