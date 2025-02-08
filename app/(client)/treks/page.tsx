import TrekPageCard from "@/components/TrekPageCard";
import React from "react";

const TrekPage = () => {
  return (
    <div className="md:px-20 px-4 py-8">
      <h1 className=" text-2xl font-bold text-ocean-green-500">
        View All Top Location{" "}
      </h1>
      <TrekPageCard />
    </div>
  );
};

export default TrekPage;
