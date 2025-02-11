import React from "react";
import Image from "next/image";
import img2 from "@/public/blog3.jpg";
import { blogData } from "@/data/trekdata";

const BlogCard = () => {
  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <div className="flex flex-col">
          <div className="w-full md:h-[400px] h-[300px] rounded-3xl">
            <Image
              src={img2}
              alt="blog"
              className="w-full h-full object-center rounded-3xl"
            />
          </div>
          <div className="flex flex-col px-2 py-6 space-y-1">
            <p className="font-bold text-ocean-green-500">Traveling</p>
            <h3 className=" text-2xl font-bold">
              Try are our latest blogs & Stories related to traveling
            </h3>
            <p className="text-muted-foreground">Jan 24, 2025, Mon</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sit amet neque nec mi efficitur tincidunt. Nullam ultricies
              tincidunt mi, ac ultricies sapien.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          {blogData.map((data, index) => (
            <div className="flex md:flex-row flex-col gap-6" key={index}>
              <div className="md:w-[200px] w-full md:h-[200px] h-[300px]">
                <Image
                  src={data.image}
                  alt="blog"
                  className="w-full h-full object-center rounded-3xl"
                />
              </div>
              <div className="flex flex-col md:max-w-sm w-full space-y-2">
                <p className=" font-bold text-ocean-green-500">{data.type}</p>
                <h3 className="text-2xl font-bold">{data.heading}</h3>
                <p className=" text-sm text-muted-foreground">{data.date}</p>
                <p className="text-sm text-muted-foreground">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-24">
        <div className="flex flex-col space-y-3">
          {blogData.map((data, index) => (
            <div className="flex md:flex-row flex-col gap-6" key={index}>
              <div className="md:w-[200px] w-full md:h-[200px] h-[300px]">
                <Image
                  src={data.image}
                  alt="blog"
                  className="w-full h-full object-center rounded-3xl"
                />
              </div>
              <div className="flex flex-col md:max-w-lg w-full space-y-2">
                <p className=" font-bold text-ocean-green-500">{data.type}</p>
                <h3 className="text-2xl font-bold">{data.heading}</h3>
                <p className=" text-sm text-muted-foreground">{data.date}</p>
                <p className="text-sm text-muted-foreground">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
