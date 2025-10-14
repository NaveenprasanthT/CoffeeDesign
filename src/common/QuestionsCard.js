import React from "react";
import CreativeDesignSection from "./Components/CreativeDesignSection ";
import { ReactComponent as AboutUsIcon } from "../assets/about-us-icon.svg";
import FAQ from "./Components/faq";
function QuestionsCard() {
  return (
    <div>
      <CreativeDesignSection
        icon={<AboutUsIcon />}
        title="What We Do Our Projects"
        heading="Creative Design Agency to provide solutions"
        align="start"
      />{" "}
      <FAQ />
    </div>
  );
}

export default QuestionsCard;
