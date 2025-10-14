import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Navbar from "../../common/Components/Navbar/index";
import Footer from "../../common/Footer";
import Aboutus from "../../common/Components/Aboutus";
import ServicesPages from "../Services";

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
        <Route path="about" element={<Aboutus />} />
        <Route path="services" element={<ServicesPages />} />
      </Route>
    </Routes>
  );
}

export default Router;
