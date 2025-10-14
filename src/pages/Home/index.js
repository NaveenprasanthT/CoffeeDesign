import React from "react";
import FAQ from "../../common/Components/faq";
import HeaderSection from "./Components/HeaderSection";
import HeaderSections from "./Components/HeaderSections";
import Services from "../../common/Components/Services";
import Aboutus from "../../common/Components/Aboutus";
import Card from "../../common/Components/Card";
import MediaShowcase from "./Components/MediaShowcase";
import { AboutIntro } from "./Components/AboutIntro";
import ServicesSection from "./Components/ServicesSection ";
import CreativeDesign from "./Components/CreativeDesign";
import Showcasing from "./Components/Showcasing";
import OurTeam from "./Components/OurTeam";
import Testimonials from "./Components/Testimonials";

function Home() {

  return (
    <div>
      <HeaderSection />
      <MediaShowcase />
      <AboutIntro />
      <ServicesSection />
      <CreativeDesign />
      <Showcasing />
      <OurTeam />
      <Testimonials/>
    </div>
  );
}

export default Home;
