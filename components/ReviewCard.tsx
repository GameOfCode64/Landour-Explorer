"use client";
import React from "react";
import Image from "next/image";
import userImage from "@/public/avatar.png";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  "The best decision I’ve ever made was choosing Landour Explorer for my trekking adventure! From the moment I signed up, the team was incredibly professional, friendly, and knowledgeable",
  "The best decision I’ve ever made was choosing Landour Explorer for my trekking adventure! From the moment I signed up, the team was incredibly professional, friendly, and knowledgeable",
  "The best decision I’ve ever made was choosing Landour Explorer for my trekking adventure! From the moment I signed up, the team was incredibly professional, friendly, and knowledgeable",
  "The best decision I’ve ever made was choosing Landour Explorer for my trekking adventure! From the moment I signed up, the team was incredibly professional, friendly, and knowledgeable",
  "The best decision I’ve ever made was choosing Landour Explorer for my trekking adventure! From the moment I signed up, the team was incredibly professional, friendly, and knowledgeable",
  "The best decision I’ve ever made was choosing Landour Explorer for my trekking adventure! From the moment I signed up, the team was incredibly professional, friendly, and knowledgeable",
];

const ReviewCard = () => {
  return (
    <div className="mt-6 flex overflow-hidden">
      <div className="relative flex flex-col space-y-6">
        {/* Left to Right Scroll */}
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-[400px] h-[250px] rounded-lg bg-[#f0f1f5] min-w-[250px] px-2 py-3"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-normal gap-3">
                  <div className="w-[50px] h-[50px] rounded-full">
                    <Image
                      src={userImage}
                      alt="user_review_Image"
                      className="w-full h-full object-center rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>Aman Lal</p>
                    <p className="text-[12px] to-muted-foreground">
                      Jan 24, 2025,Mon
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-normal px-2">
                <Star size={22} className="text-[#f4cd00] mt-2" />
                <Star size={22} className="text-[#f4cd00] mt-2" />
                <Star size={22} className="text-[#f4cd00] mt-2" />
                <Star size={22} className="text-[#f4cd00] mt-2" />
                <Star size={22} className="text-[#f4cd00] mt-2" />
              </div>
              <p className="text-sm text-muted-foreground px-3 py-3">
                {review}
              </p>
            </div>
          ))}
        </motion.div>
        {/* Right to Left Scroll */}
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-[400px] h-[250px] rounded-lg bg-[#f0f1f5] min-w-[250px] px-2 py-3"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-normal gap-3">
                  <div className="w-[50px] h-[50px] rounded-full">
                    <Image
                      src={userImage}
                      alt="user_review_Image"
                      className="w-full h-full object-center rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>Aman Lal</p>
                    <p className="text-[12px] to-muted-foreground">
                      Jan 24, 2025,Mon
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-normal px-2">
                <Star size={22} className="text-[#f4cd00] mt-2" />
                <Star size={22} className="text-[#f4cd00] mt-2" />
                <Star size={22} className="text-[#f4cd00] mt-2" />
                <Star size={22} className="text-[#f4cd00] mt-2" />
                <Star size={22} className="text-[#f4cd00] mt-2" />
              </div>
              <p className="text-sm text-muted-foreground px-3 py-3">
                {review}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewCard;
