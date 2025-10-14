import React from "react";
import "./Styles/service-our-clients.css";
import CreativeDesignSection from "../../../common/Components/CreativeDesignSection ";
import { ReactComponent as AboutUsIcon } from "../../../assets/about-us-icon.svg";
import laptopImages from "../../../assets/image/Laptop-images.png";
import TestimonialCard from "../../../common/Components/TestimonialCard";
function ServiceOurClients() {
      const testimonials = [
    {
      quote:
        "Working with this design studio was a game-changer for our brand. Their creativity, attention to detail, and ability to bring our vision to life exceeded our expectations!",
      author: "Peter, Belgium",
    },
    {
      quote:
        "Working with this design studio was a game-changer for our brand. Their creativity, attention to detail, and ability to bring our vision to life exceeded our expectations!",
      author: "Peter, Belgium",
    },
    {
      quote:
        "Working with this design studio was a game-changer for our brand. Their creativity, attention to detail, and ability to bring our vision to life exceeded our expectations!",
      author: "Peter, Belgium",
    },
  ];
  return (
    <div className="services-our-clients-pages">
      <div className="services-our-clients-about-us">
        <CreativeDesignSection
          icon={<AboutUsIcon />}
          title="What We Do Our Projects"
          heading="Creative Design Agency to provide solutions"
          align="start"
        />{" "}
        <img src={laptopImages} alt="" />
      </div>
      <div className="tt-testimonial-grid">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} quote={t.quote} author={t.author} />
        ))}
      </div>
    </div>
  );
}

export default ServiceOurClients;
