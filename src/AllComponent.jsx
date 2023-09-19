import React from "react";
import Home from "./common/Home";
import Navbar from "./common/Navbar";
import About from "./about/About";
import Meals from "./menu/Meals";
import Review from "./reviews/Review";
import Connect from "./connect/Connect";

const AllComponent = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Meals />
      <About />
      <Review />
      <Connect />
    </div>
  );
};

export default AllComponent;
