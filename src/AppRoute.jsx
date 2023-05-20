import React from "react";
import { HomeRoute } from "./pages/Home/HomeRoute";
import { AboutRoute } from "./pages/About/AboutRoute";
import { Routes } from "react-router-dom";

const AppRoute = () => {
  return (
    <>
      <Routes>
        {HomeRoute}
        {AboutRoute}
      </Routes>
    </>
  );
};

export default AppRoute;
