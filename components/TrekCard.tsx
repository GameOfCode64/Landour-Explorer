"use client";
import "swiper/css";
import React, { useEffect, useState } from "react";
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
import { getAllLocation } from "@/sanity/lib/querys/getAllLocation";
import { getHeroTreks } from "@/sanity/lib/querys/getHeroTreks";

interface TrekCardProps {
  trekName: string;
}
export interface HeroInterface {
  _id: string;
  slug: string;
  trekName: string;
  backgroundImageUrl: string;
  location: string;
  rating: number;
}
const TrekCard = () => {
  const [location, setLocation] = useState<TrekCardProps[]>([]);
  const [treks, setTreks] = useState<HeroInterface[]>([]);

  useEffect(() => {
    const fetchLocation = async () => {
      const data = await getAllLocation();
      setLocation(data);
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchTreks = async () => {
      const data = await getHeroTreks();
      setTreks(data);
    };
    fetchTreks();
  }, []);
  return (
    <div className="flex flex-col">
      {/* Top Nav */}
      <div className="mt-6 w-full flex space-x-1 h-[60px]">
        <div className="px-4 py-2 text-nowrap w-24 h-[40px] bg-ocean-green-500 text-white rounded-3xl">
          View All
        </div>
        <Carousel className="w-full h-full">
          <CarouselContent className="w-[220px] text-nowrap mx-3 gap-5 h-[40px]">
            {location.map((item, index) => (
              <CarouselItem
                className="px-4 bg-ocean-green-500 text-sm  text-center text-white py-2 font-semibold rounded-3xl"
                key={index}
                onClick={() => window.location.replace(`/treks`)}
              >
                {item.trekName}
              </CarouselItem>
            ))}
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
          {treks.map((item) => (
            <SwiperSlide
              key={item._id}
              className="cursor-pointer flex flex-col w-[280px] h-full rounded-md px-2 py-4 mb-4"
              onClick={() => window.location.replace(`/treks/${item.slug}`)}
            >
              <div className="w-full h-[90%] bg-center">
                <Image
                  src={item.backgroundImageUrl}
                  width={600}
                  height={600}
                  alt={`${item.trekName} image`}
                  className="w-full rounded-3xl h-full"
                />
              </div>
              <div className="flex flex-col mt-2 px-1">
                <p className="text-lg font-sans font-semibold ">
                  {item.trekName}, Landour
                </p>
                <p className="text-muted-foreground font-medium">
                  {item.location}
                </p>
              </div>
            </SwiperSlide>
          ))}
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
