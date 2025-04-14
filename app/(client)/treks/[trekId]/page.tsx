import React from "react";
import Image from "next/image";
import trekImg from "@/public/img_2.jpeg";
import { Button } from "@/components/ui/button";
import getFullTrek from "@/sanity/lib/querys/getFullTrekInfo";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { TypedObject } from "sanity";

interface TrekProps {
  params: Promise<{ trekId: string }>;
}

interface TrekData {
  _id: string;
  trekName: string;
  videoUrls: string[];
  backgroundImageUrl: string;
  duration: string;
  prize: number;
  trekAltitude: string;
  location: string;
  distance: string;
  bestTime: string;
  trekDescription: TypedObject[];
  rating: number;
}
const page = async ({ params }: TrekProps) => {
  const { trekId } = await params;
  const data: TrekData = await getFullTrek(trekId.toLowerCase());

  const BlogStyle = `
    prose prose-teal mt-8 text-justify
    max-w-full lg:max-w-[90%] md:max-w-[90%]
    prose-headings:text-left prose-headings:text-2xl prose-headings:text-ocean-green-700
    prose-p:text-left prose-p:mb-5
    prose-img:my-5
    prose-a:text-teal-700
    prose-blockquote:italic prose-blockquote:pl-4
    prose-blockquote:border-l-4 prose-blockquote:border-teal-700
  `.replace(/\s+/g, " ");

  const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => (
        <Image
          src={urlForImage(value)}
          alt="Blog Image"
          width={700}
          height={700}
          className="rounded-xl mx-auto"
        />
      ),
    },
    marks: {
      link: ({ value, children }: any) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 underline"
        >
          {children}
        </a>
      ),
    },
  };
  return (
    <div className="md:px-20 px-4">
      <div className="w-full flex flex-col">
        <div className="w-full md:h-[600px] h-[350px] relative bg-ocean-green-500/15 rounded-3xl">
          <Image
            src={data?.backgroundImageUrl || trekImg}
            width={1000}
            height={1000}
            priority
            alt="Trek_Img"
            className="w-full absolute -z-10 h-full object-cover md:rounded-3xl rounded-2xl"
          />
          <div className="z-20 flex items-center justify-start h-full md:px-20 px-6">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                {data?.trekName}
              </h1>
              <p className="mt-1 font-medium text-white">
                {data?.location} One of the Beautiful Location in Landour
              </p>
              <Button className="bg-ocean-green-500 max-w-[120px] mt-3 hover:bg-ocean-green-600">
                Book Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-4xl font-bold text-ocean-green-500 mt-8">
            {data?.trekName}
          </h2>
          <div className={BlogStyle}>
            <PortableText
              value={data?.trekDescription}
              components={myPortableTextComponents}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
