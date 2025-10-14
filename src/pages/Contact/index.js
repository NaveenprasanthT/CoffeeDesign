import React from "react";
import ContactForm from "./Components/ContactForm";
import MapCard from "./Components/MapCard";
import ContactUs from "./Components/ContactUs";

function ContactPage() {
  return (
    <div>
        <ContactUs/>
      <ContactForm />
      <MapCard
        address=" IBM India Pvt Ltd, G1 Block Manyata Embassy, Outer Ring Rd
On-site services"
        title="Adress"
      />{" "}
    </div>
  );
}

export default ContactPage;
