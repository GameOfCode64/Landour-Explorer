"use client";
import "swiper/css";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import img1 from "@/public/img_1.jpg";
import img2 from "@/public/img_2.jpeg";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const TrekCard = () => {
  return (
    <div className="flex flex-col">
      {/* Top Nav */}
      <div className="mt-6 w-full h-[60px]">
        <Carousel className="w-full h-full">
          <CarouselContent className="w-[100px] mx-3 space-x-4 h-[40px]">
            <CarouselItem className="px-4 py-2 flex items-center justify-center  bg-ocean-green-500 text-white rounded-3xl">
              View All
            </CarouselItem>
            <CarouselItem className="px-4 py-2 flex items-center justify-center font-semibold rounded-3xl">
              Landour
            </CarouselItem>
            <CarouselItem className="px-4 py-2 flex items-center justify-center font-semibold rounded-3xl">
              Landour
            </CarouselItem>
            <CarouselItem className="px-4 py-2 flex items-center justify-center font-semibold rounded-3xl">
              Landour
            </CarouselItem>
            <CarouselItem className="px-4 py-2 flex items-center justify-center font-semibold rounded-3xl">
              Landour
            </CarouselItem>
            <CarouselItem className="px-4 py-2 flex items-center justify-center font-semibold rounded-3xl">
              Landour
            </CarouselItem>
            <CarouselItem className="px-4 py-2 flex items-center justify-center font-semibold rounded-3xl">
              Landour
            </CarouselItem>
            <CarouselItem className="px-4 py-2 flex items-center justify-center font-semibold rounded-3xl">
              Landour
            </CarouselItem>
            <CarouselItem className="px-4 py-2 flex items-center justify-center font-semibold rounded-3xl">
              Landour
            </CarouselItem>
            <CarouselItem className="px-4 py-2 flex items-center justify-center font-semibold rounded-3xl">
              Landour
            </CarouselItem>
            <CarouselItem className="px-4 py-2 flex items-center justify-center font-semibold rounded-3xl">
              Landour
            </CarouselItem>
            <CarouselItem className="px-4 py-2 flex items-center justify-center font-semibold rounded-3xl">
              Landour
            </CarouselItem>
            <CarouselItem className="px-4 py-2 flex items-center justify-center font-semibold rounded-3xl">
              Landour
            </CarouselItem>
            <CarouselItem className="px-4 py-2 flex items-center justify-center font-semibold rounded-3xl">
              Landour
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      {/* Top Nav */}
      <div className="w-full h-full mt-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1080: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          autoplay={{ delay: 5000 }}
          speed={700}
          className="w-full h-[440px] py-[20px] flex items-center"
        >
          <SwiperSlide className="flex flex-col w-[280px] h-full rounded-md px-2 py-4 mb-4">
            <div className="w-full h-[90%] bg-center">
              <Image
                src={img2}
                alt={`trek image`}
                className="w-full rounded-3xl h-full"
              />
            </div>
            <div className="flex flex-col mt-2 px-1">
              <p className="text-lg font-sans font-semibold ">
                Landour Backhouse, Landour
              </p>
              <p className="text-muted-foreground font-medium">Landour</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col w-[280px] h-full rounded-md px-2 py-4 mb-4">
            <div className="w-full h-[90%] bg-center">
              <Image
                src={img1}
                alt={`trek image`}
                className="w-full rounded-3xl h-full"
              />
            </div>
            <div className="flex flex-col mt-2 px-1">
              <p className="text-lg font-sans font-semibold ">
                Landour Backhouse, Landour
              </p>
              <p className="text-muted-foreground font-medium">Landour</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col w-[280px] h-full rounded-md px-2 py-4 mb-4">
            <div className="w-full h-[90%] bg-center">
              <Image
                src={img2}
                alt={`trek image`}
                className="w-full rounded-3xl h-full"
              />
            </div>
            <div className="flex flex-col mt-2 px-1">
              <p className="text-lg font-sans font-semibold ">
                Landour Backhouse, Landour
              </p>
              <p className="text-muted-foreground font-medium">Landour</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col w-[280px] h-full rounded-md px-2 py-4 mb-4">
            <div className="w-full h-[90%] bg-center">
              <Image
                src={img1}
                alt={`trek image`}
                className="w-full rounded-3xl h-full"
              />
            </div>
            <div className="flex flex-col mt-2 px-1">
              <p className="text-lg font-sans font-semibold ">
                Landour Backhouse, Landour
              </p>
              <p className="text-muted-foreground font-medium">Landour</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col w-[280px] h-full rounded-md px-2 py-4 mb-4">
            <div className="w-full h-[90%] bg-center">
              <Image
                src={img2}
                alt={`trek image`}
                className="w-full rounded-3xl h-full"
              />
            </div>
            <div className="flex flex-col mt-2 px-1">
              <p className="text-lg font-sans font-semibold ">
                Landour Backhouse, Landour
              </p>
              <p className="text-muted-foreground font-medium">Landour</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col w-[280px] h-full rounded-md px-2 py-4 mb-4">
            <div className="w-full h-[90%] bg-center">
              <Image
                src={img1}
                alt={`trek image`}
                className="w-full rounded-3xl h-full"
              />
            </div>
            <div className="flex flex-col mt-2 px-1">
              <p className="text-lg font-sans font-semibold ">
                Landour Backhouse, Landour
              </p>
              <p className="text-muted-foreground font-medium">Landour</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col w-[280px] h-full rounded-md px-2 py-4 mb-4">
            <div className="w-full h-[90%] bg-center">
              <Image
                src={img2}
                alt={`trek image`}
                className="w-full rounded-3xl h-full"
              />
            </div>
            <div className="flex flex-col mt-2 px-1">
              <p className="text-lg font-sans font-semibold ">
                Landour Backhouse, Landour
              </p>
              <p className="text-muted-foreground font-medium">Landour</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <motion.button
          className=" px-8 cursor-pointer  flex bg-ocean-green-500 hover:bg-ocean-green-600 py-3 items-center justify-center text-white rounded-3xl mg:mt-8 mt-4"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onClick={() => window.location.replace("/treks")}
        >
          Explore All Locations
        </motion.button>
      </div>
    </div>
  );
};

export default TrekCard;
