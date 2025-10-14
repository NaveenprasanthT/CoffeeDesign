import React from "react";
import { ReactComponent as AboutUsIcon } from "../../../assets/about-us-icon.svg";
import CreativeDesignSection from "../../../common/Components/CreativeDesignSection ";

function OurClients() {
  return (
    <>
      <CreativeDesignSection
        icon={<AboutUsIcon />}
        title="What We Do Our Projects"
        heading="Creative Design Agency to provide solutions"
        description="Our belief system says that effective design"
      />{" "}
    </>
  );
}

export default OurClients;
