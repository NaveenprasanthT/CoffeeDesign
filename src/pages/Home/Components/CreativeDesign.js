import React from "react";
import { ReactComponent as AboutUsIcon } from "../../../assets/about-us-icon.svg";
import LogoBrandIdentity from "../../../common/Components/LogoBrandIdentity";
import CreativeDesignSection from "../../../common/Components/CreativeDesignSection ";

function CreativeDesign() {
  const services = [
    {
      title: "Logo & brand identity",
      description:
        "We are the top digital marketing agency for branding corp. We offer a full range of services to build your brand.",
    },
    {
      title: "Website design & development",
      description:
        "We craft modern, responsive websites that deliver great user experiences and drive engagement.",
    },
    {
      title: "Digital marketing strategy",
      description:
        "Our experts help you grow your business with data-driven campaigns and smart automation.",
    },
  ];
  return (
    <>
      <CreativeDesignSection
        icon={<AboutUsIcon />}
        title="Popular services"
        heading="Creative Design Agency to provide solutions"
        description="Our belief system says that effective design"
      />
      <LogoBrandIdentity services={services} />
    </>
  );
}

export default CreativeDesign;
