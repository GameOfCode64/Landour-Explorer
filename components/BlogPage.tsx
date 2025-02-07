"use client";
import React from "react";
import Image from "next/image";
import bg1 from "@/public/blog1.jpg";
import bg2 from "@/public/blog2.jpg";
import bg3 from "@/public/blog3.jpg";
import { motion } from "motion/react";

const BlogPage = () => {
  return (
    <div className="flex flex-col mt-8 md:mt-20 md:px-20 px-4 mb-20">
      <h1 className="text-4xl font-bold">Latest Blogs</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8 md:mt-12">
        <div className="flex flex-col">
          <div className="md:w-[600px] w-full h-[400px] rounded-3xl">
            <Image
              src={bg1}
              alt="blog_img"
              className="w-full h-full rounded-3xl object-center object-cover"
            />
          </div>
          <div className="mt-4 space-y-2">
            <p className="font-bold text-ocean-green-500">Traveling</p>
            <h1 className="text-2xl font-bold md:text-wrap">
              Try are our latest blogs & Stories related to traveling
            </h1>
            <p className="text-muted-foreground">Jan 24, 2025, Mon</p>
            <p className="mt-2 text-gray-500 md:pr-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sit amet neque nec mi efficitur tincidunt. Nullam ultricies
              tincidunt mi, ac ultricies sapien.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:my-0 my-8 space-y-4 ">
          <div className="flex gap-5">
            <div className="md:w-[200px] w-[150px] h-[150px] md:h-[200px] rounded-3xl">
              <Image
                src={bg1}
                alt="blog_img"
                className="w-full h-full rounded-3xl object-center object-cover"
              />
            </div>
            <div className="flex flex-col w-[220px]">
              <p className="font-bold text-ocean-green-500">Traveling</p>
              <h1 className="md:max-w-[370px] font-bold text-sm md:text-lg text-wrap">
                Try are our latest blogs & Stories related to traveling. Try are
                our latest blogs.
              </h1>

              <div className="md:mt-12 mt-2 text-sm">
                <p className="font-bold">
                  By :-{" "}
                  <span className="text-ocean-green-500 font-semibold">
                    {" "}
                    John Doe
                  </span>
                </p>
                <p className="text-muted-foreground">Jan 24, 2025, Mon</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="md:w-[200px] w-[150px] h-[150px] md:h-[200px] rounded-3xl">
              <Image
                src={bg1}
                alt="blog_img"
                className="w-full h-full rounded-3xl object-center object-cover"
              />
            </div>
            <div className="flex flex-col w-[220px]">
              <p className="font-bold text-ocean-green-500">Traveling</p>
              <h1 className="md:max-w-[370px] font-bold text-sm md:text-lg text-wrap">
                Try are our latest blogs & Stories related to traveling. Try are
                our latest blogs.
              </h1>

              <div className="md:mt-12 mt-2 text-sm">
                <p className="font-bold">
                  By :-{" "}
                  <span className="text-ocean-green-500 font-semibold">
                    {" "}
                    John Doe
                  </span>
                </p>
                <p className="text-muted-foreground">Jan 24, 2025, Mon</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="md:w-[200px] w-[150px] h-[150px] md:h-[200px] rounded-3xl">
              <Image
                src={bg1}
                alt="blog_img"
                className="w-full h-full rounded-3xl object-center object-cover"
              />
            </div>
            <div className="flex flex-col w-[220px]">
              <p className="font-bold text-ocean-green-500">Traveling</p>
              <h1 className="md:max-w-[370px] font-bold text-sm md:text-lg text-wrap">
                Try are our latest blogs & Stories related to traveling. Try are
                our latest blogs.
              </h1>

              <div className="md:mt-12 mt-2 text-sm">
                <p className="font-bold">
                  By :-{" "}
                  <span className="text-ocean-green-500 font-semibold">
                    {" "}
                    John Doe
                  </span>
                </p>
                <p className="text-muted-foreground">Jan 24, 2025, Mon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 flex items-center justify-center">
        <motion.button
          className="px-8 cursor-pointer  flex bg-ocean-green-500 hover:bg-ocean-green-600 py-3 items-center justify-center text-white rounded-3xl mg:mt-8 mt-4"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Explore All Blogs
        </motion.button>
      </div>
    </div>
  );
};

export default BlogPage;
