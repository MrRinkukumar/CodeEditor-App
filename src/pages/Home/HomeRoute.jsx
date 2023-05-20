import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";

export const HomeRoute = <Route exact path="/" element={<Home />} />;
