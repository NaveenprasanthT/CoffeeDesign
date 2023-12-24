import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

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
      <Route path='/' element={<WrapperRoutes />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Router;
