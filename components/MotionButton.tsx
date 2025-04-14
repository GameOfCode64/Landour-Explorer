"use client";
import React from "react";
import { motion } from "motion/react";

const MotionButton = () => {
  return (
    <div className="my-8 flex items-center justify-center">
      <motion.button
        className="px-8 cursor-pointer  flex bg-ocean-green-500 hover:bg-ocean-green-600 py-3 items-center justify-center text-white rounded-3xl mg:mt-8 mt-4"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onClick={() => {
          window.location.href = "/blogs";
        }}
      >
        Explore All Blogs
      </motion.button>
    </div>
  );
};

export default MotionButton;
