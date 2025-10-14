import React from "react";
import CreativeDesignSection from "../../../common/Components/CreativeDesignSection ";
import { ReactComponent as AboutUsIcon } from "../../../assets/about-us-icon.svg";
import TestimonialCard from "../../../common/Components/TestimonialCard";

function Testimonials() {
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
    <div>
      <CreativeDesignSection
        icon={<AboutUsIcon />}
        title="What We Do Our Projects"
        heading="Creative Design Agency to provide solutions"
        align="start"
      />{" "}
      <div className="tt-testimonial-grid">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} quote={t.quote} author={t.author} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
