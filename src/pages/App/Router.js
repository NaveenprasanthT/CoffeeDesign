import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Navbar from "../../common/Components/Navbar/index";
import Footer from "../../common/Footer";
import ServicesPages from "../Services";
import AboutPages from "../About";
import ContactPage from "../Contact";
import Showcasing from "../Home/Components/Showcasing";

function WrapperRoutes() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Routes>
      <Route path="/" element={<WrapperRoutes />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPages />} />
        <Route path="services" element={<ServicesPages />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="works" element={<Showcasing />} />
      </Route>
    </Routes>
  );
}

export default Router;
