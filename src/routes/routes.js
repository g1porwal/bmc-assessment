import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../component/Login";
import DataPage from "../component/Data";
import Home from "../component/Home";


const RoutesBMC = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/data-page" element={<DataPage />} />
          <Route exact path="/home-page" element={<Home />} />

      </Routes>
    </Router>
  );
}
export default RoutesBMC;