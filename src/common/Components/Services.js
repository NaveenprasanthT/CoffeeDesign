import React from "react";
import Header from "./Header";
import "./styles/Services.css";
import { PaintIcon,ArrowIcon, Arrow} from "../svgIcon";

const Services = () => {
  const cardData = [
    {
      icon: <PaintIcon />,
      title: "Logo & brand identity",
      values: ["Color Psychology", "Consistent Aesthetics", "Adaptability"],
      link: "Read more",
    },
    {
      icon: <PaintIcon />,
      title: "Graphic Design ",
      values: ["Color Psychology", "Consistent Aesthetics", "Adaptability"],
      link: "Read more",
    },
    {
      icon: <PaintIcon />,
      title: "Web & App Design ",
      values: ["Color Psychology", "Consistent Aesthetics", "Adaptability"],
      link: "Read more",
    },
  ];

  return (
    <div className="services-container">
      <Header
        heading="Services"
        title={
          <>
            Creative <span>Design</span> Agency to provide solutions
          </>
        }
        desc="Our belief system says that effective design is born from combining empathy, data, and insights"
        underline
      />
      <div className="services-wrap">
        {cardData.map((card) => (
          
          <div className="services-card">
            <div className="s-icon">{card.icon}</div>
            <div className="s-title">
              <h1>{card.title}</h1>
            </div>
            {card.values.map((value) => (
              <div className="s-contents">
                <span><ArrowIcon stroke={2}/></span>
                <span>{value}</span>
              </div>
            ))}
            <div className="s-link">
              <a href="2nd page">{card.link}</a>
              <span>
               <Arrow color="#d4002a" width={20} height={14}/>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
