import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import PhotoDetails from "../components/PhotoDetails/PhotoDetails";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photoDetails/:id" element={<PhotoDetails />} />
    </Routes>
  );
};

export default CustomRoutes;
