import React from "react";
import AboutUs from "./Components/AboutUs";
import Aboutus from "../../common/Components/Aboutus";
import AboutMediaShowcase from "./Components/AboutMediaShowcase";
import AboutOurTeam from "./Components/AboutOurTeam";
import ServiceOurClients from "../Services/Components/ServiceOurClients";
import AboutClientsSection from "./Components/AboutClientsSection";

function AboutPages() {
  return (
    <div>
      <AboutUs />
      <AboutMediaShowcase />
      <Aboutus />
      <AboutOurTeam />
      <AboutClientsSection/>
      <ServiceOurClients />
    </div>
  );
}

export default AboutPages;
