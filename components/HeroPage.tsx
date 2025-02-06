"use client";
import React from "react";
import Image from "next/image";
import map from "@/public/map.png";
import air from "@/public/bg-air.png";
import bg1 from "@/public/img_1.jpg";
import bg2 from "@/public/img_2.jpeg";
import { motion } from "motion/react";

const HeroPage = () => {
  return (
    <div className="bg-cover bg-center w-full h-screen relative">
      <Image
        className="absolute top-0 left-0 z-[-1]"
        src={map}
        layout="fill"
        objectFit="cover"
        alt="bgimg"
      />
      <div className="md:px-20 px-4 py-8 md:gap-28 gap-8 relative z-[10] grid lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col">
          <h1 className="font-bold md:text-[56px] text-[38px] text-nowrap w-full">
            Discover the{" "}
            <p className="text-ocean-green-500 font-bold">Uttarakhand’s</p>{" "}
            Hidden Wonders
          </h1>
          <p className="md:pr-28 md:mt-8 mt-4 text-left text-warp text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            impeditodit excepturi alias sint id numquam nemo itaque quod minus
            iure nam nullalabore maiores facere sit asperiores placeat,
            assumenda praesentiumaut? Fuga voluptatum nesciunt nobis, atque ut,
            provident veniam dolorem nemo.
          </p>
          <button className=" w-[150px] cursor-pointer hidden md:flex bg-ocean-green-500 hover:bg-ocean-green-600 py-3 items-center justify-center text-white rounded-3xl mg:mt-8 mt-4">
            Explore Now
          </button>
          <Image
            src={air}
            alt="airplane"
            className="absolute bottom-[-260px] left-18 md:block hidden"
            width={500}
            height={500}
          />
        </div>
        <div className="flex items-center justify-normal md:gap-5 gap-2 flex-row">
          <div className="md:w-[250px] w-[200px] h-[380px] rounded-3xl">
            <Image
              src={bg2}
              alt="bg1"
              className="rounded-3xl w-full h-full  object-cover"
            />
          </div>
          <div className="flex flex-col md:gap-5 gap-2">
            <div className="md:w-[250px] w-[170px] h-[180px] rounded-3xl">
              <Image
                src={bg2}
                alt="bg2"
                className="rounded-3xl w-full h-full  object-cover"
              />
            </div>
            <div className="md:w-[250px] w-[170px] h-[180px] rounded-3xl">
              <Image
                src={bg1}
                alt="bg2"
                className="rounded-3xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center md:hidden">
          <motion.button
            className="w-[180px] cursor-pointer md:hidden flex bg-ocean-green-500 hover:bg-ocean-green-600 py-3 items-center justify-center text-white rounded-3xl mg:mt-8 mt-4"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Explore Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
