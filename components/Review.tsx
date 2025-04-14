import React from "react";
import ReviewCard from "@/components/ReviewCard";

const Review = () => {
  return (
    <div className="md:px-20 px-4 mt-12">
      <div className="flex flex-col">
        <h1 className="md:text-4xl text-3xl font-bold">
          People&apos;s experience with
          <p className="mt-1 text-ocean-green-500">Landour Explorer</p>
        </h1>
        <div className="w-full h-[600px]">
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Review;
