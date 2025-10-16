import React from "react";
import CreativeDesignSection from "../../../common/Components/CreativeDesignSection ";
import { ReactComponent as AboutUsIcon } from "../../../assets/about-us-icon.svg";
import AvatarCircle from "../../../common/Components/AvatarCircle";
import ourTeam from "../../../assets/image/ourTeam1.png";
import ourTeam1 from "../../../assets/image/ourTeam2.png";
import ourTeam2 from "../../../assets/image/ourTeam3.png";
import ourTeam3 from "../../../assets/image/ourTeam4.png";
import ourTeam4 from "../../../assets/image/ourTeam01.jpg";


function OurTeam() {
  const team = [
    { src: ourTeam3, name: "Maya Unzip", role: "Designer" },
    { src: ourTeam, name: "Maya Unzip", role: "Developer" },
    { src: ourTeam1, name: "Maya Unzip", role: "Project Manager" },
    { src: ourTeam2, name: "Maya Unzip", role: "Designer" },
    { src: ourTeam4, name: "Maya Unzip", role: "Developer" },
  ];
  return (
    <>
      <CreativeDesignSection
        icon={<AboutUsIcon />}
        title="Our Team"
        heading="Our Team Curating Excellence from Creativity."
      
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
