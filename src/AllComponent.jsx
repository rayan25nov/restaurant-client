import React from "react";
import Home from "./common/Home";
import Navbar from "./common/Navbar";
import About from "./about/About";
import Meals from "./menu/Meals";
import Review from "./reviews/Review";
import Connect from "./connect/Connect";
import Popular from "./menu/Popular";

const AllComponent = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Popular />
      <Meals />
      <About />
      <Review />
      <Connect />
    </div>
  );
};

export default AllComponent;
