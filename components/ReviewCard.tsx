"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import userImage from "@/public/avatar.png";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { getReview1 } from "@/sanity/lib/querys/getReview1";
import { getReview2 } from "@/sanity/lib/querys/getReview2";

interface ReviewInterface {
  name: string;
  date: string;
  comment: string;
  userImage: string;
}

const ReviewCard = () => {
  const [reviews1, setReviews1] = useState<ReviewInterface[] | null>(null);
  const [reviews2, setReviews2] = useState<ReviewInterface[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReview1();
        setReviews1(data);
      } catch (error) {
        console.error("Failed to fetch navbar data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReview2();
        setReviews2(data);
      } catch (error) {
        console.error("Failed to fetch navbar data:", error);
      }
    };
    fetchData();
  }, []);
  if (reviews1 === null || reviews2 === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-6 flex overflow-hidden">
      <div className="relative flex flex-col space-y-6">
        {/* Left to Right Scroll */}
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {reviews2.map((review, index) => (
            <div
              key={index}
              className="w-[400px] h-[250px] rounded-lg bg-[#f0f1f5] min-w-[250px] px-2 py-3"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-normal gap-3">
                  <div className="w-[50px] h-[50px] rounded-full">
                    <Image
                      src={review.userImage}
                      alt="user_review_Image"
                      width={150}
                      height={150}
                      className="w-full h-full object-center rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>{review.name}</p>
                    <p className="text-[12px] to-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
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
                {review.comment}
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
          {reviews1.map((review, index) => (
            <div
              key={index}
              className="w-[400px] h-[250px] rounded-lg bg-[#f0f1f5] min-w-[250px] px-2 py-3"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-normal gap-3">
                  <div className="w-[50px] h-[50px] rounded-full">
                    <Image
                      src={review.userImage}
                      alt="user_review_Image"
                      width={150}
                      height={150}
                      className="w-full h-full object-center rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>{review.name}</p>
                    <p className="text-[12px] to-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
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
                {review.comment}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewCard;
