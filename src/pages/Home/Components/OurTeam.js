import React from "react";
import CreativeDesignSection from "../../../common/Components/CreativeDesignSection ";
import { ReactComponent as AboutUsIcon } from "../../../assets/about-us-icon.svg";
import AvatarCircle from "../../../common/Components/AvatarCircle";
import ourTeam from "../../../assets/ourTeam01.jpg";
function OurTeam() {
  const team = [
    { src: ourTeam, name: "Maya Unzip", role: "Designer" },
    { src: ourTeam, name: "Maya Unzip", role: "Developer" },
    { src: ourTeam, name: "Maya Unzip", role: "Project Manager" },
    { src: ourTeam, name: "Maya Unzip", role: "Designer" },
    { src: ourTeam, name: "Maya Unzip", role: "Developer" },
  ];
  return (
    <>
      <CreativeDesignSection
        icon={<AboutUsIcon />}
        title="What We Do Our Projects"
        heading="Creative Design Agency to provide solutions"
        description="Our belief system says that effective design"
      />{" "}
      <div className="tt-team-grid">
        {team.map((member, index) => (
          <AvatarCircle
            key={index}
            src={member.src}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>{" "}
    </>
  );
}

export default OurTeam;
