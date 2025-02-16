"use client";
import React from "react";
import { motion } from "motion/react";

const AboutPage = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/path-to-image.jpg')] opacity-30"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-gray-900"
        >
          “The Best Journeys in Life Are Those That Answer Questions You Never
          Thought to Ask”
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-lg text-gray-700"
        >
          At Landour Explorer, we believe in crafting experiences that go beyond
          the ordinary. Every journey is a story waiting to be told, and we are
          here to make yours unforgettable.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block bg-ocean-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-ocean-green-700"
          href="/contact-us"
        >
          Get in Touch
        </motion.a>
      </div>
    </div>
  );
};

export default AboutPage;
