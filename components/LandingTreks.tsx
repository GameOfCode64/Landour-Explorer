import React from "react";
import TrekCard from "./TrekCard";

const LandingTreks = () => {
  return (
    <div className="md:mt-12 mt-64 md:px-20 px-4">
      <h1 className="md:text-4xl text-3xl font-bold">Top Locations</h1>
      <TrekCard />
    </div>
  );
};

export default LandingTreks;
