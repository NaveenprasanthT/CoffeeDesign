import React from "react";
import "./styles/services-section.css";
import servicesImage from "../../../assets/image/development-images.jpg"; // replace with your image
import { ServiceCard } from "../../../common/Components/ServiceCard";
import { ReactComponent as AboutUsIcon } from "../../../assets/about-us-icon.svg";
import StatsSection from "../../../common/Components/StatsSection ";

const ServicesSection = () => {
  const statsData = [
    {
      value: "99%",
      label: "Data Accuracy",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      value: "233+",
      label: "Projects done",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      value: "12K",
      label: "Happy clients",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      value: "17+",
      label: "Products",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];
  return (
    <>
      <section className="services-section">
        <div className="services-image">
          <img src={servicesImage} alt="Web Solutions" />
        </div>

        <div className="services-content">
          <p className="services-subtitle">
            <AboutUsIcon />
            What We Do
          </p>
          <h2 className="services-title">
            Latest Way to Get Web Solutions & Business Growth
          </h2>
          <ServiceCard
            number={"01"}
            title={"Web Development"}
            description="At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis
praesentium voluptatum delenit corruptie"
          />
          <ServiceCard
            number={"02"}
            title={"Web Development"}
            description="At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis
praesentium voluptatum delenit corruptie"
          />{" "}
          <ServiceCard
            number={"03"}
            title={"Web Development"}
            description="At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis
praesentium voluptatum delenit corruptie"
          />{" "}
          <ServiceCard
            number={"04"}
            title={"Web Development"}
            description="At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis
praesentium voluptatum delenit corruptie"
          />{" "}
        </div>
      </section>
      <StatsSection stats={statsData} />
    </>
  );
};

export default ServicesSection;
