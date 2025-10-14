import React from "react";
import { ReactComponent as AboutUsIcon } from "../../../assets/about-us-icon.svg";
import { ReactComponent as HeadsetIcon } from "../../../assets/HeadsetIcon.svg";
import { ReactComponent as ShieldIcon } from "../../../assets/ShieldIcon.svg";
import { ReactComponent as BadgeIcon } from "../../../assets/BadgeIcon.svg";
import "./Styles/about-clients-section.css";
import { SparkIcon } from "../../../common/svgIcon";
import CreativeDesignSection from "../../../common/Components/CreativeDesignSection ";

export default function AboutClientsSection() {
  const features = [
    {
      icon: <SparkIcon />,
      title: "Innovative Solutions",
      desc: "Cutting-edge tools for modern project management needs.",
    },
    {
      icon: <BadgeIcon />,
      title: "Reliable Support",
      desc: "Dedicated assistance ensuring smooth operations.",
    },
    {
      icon: <HeadsetIcon />,
      title: "Proven Results",
      desc: "Track record of driving success and delivering exceptional outcomes.",
    },
    {
      icon: <ShieldIcon />,
      title: "Trusted Security",
      desc: "Robust measures safeguarding your data and ensuring confidentiality.",
    },
  ];

  return (
    <section className="clients-section" aria-labelledby="clients-heading">
      <div>
        <CreativeDesignSection
          icon={<AboutUsIcon />}
          title="Our Clients"
          heading="We Have 1520+ Global Clients"
          align="start"
          description=""
        />
      </div>

      <div className="clients-cards">
        <div className="clients-grid">
          {features.map((item, index) => (
            <article key={index} className="client-card">
              <span className="card-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
