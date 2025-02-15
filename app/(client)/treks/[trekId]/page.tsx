import React from "react";
import Image from "next/image";
import trekImg from "@/public/img_2.jpeg";
import { Button } from "@/components/ui/button";

interface TrekProps {
  params: Promise<{ trekId: string }>;
}
const page = async ({ params }: TrekProps) => {
  const id = await (await params).trekId;
  return (
    <div className="md:px-20 px-4">
      <div className="w-full flex flex-col">
        <div className="w-full md:h-[600px] h-[350px] relative bg-ocean-green-500/15 rounded-3xl">
          <Image
            src={trekImg}
            alt="Trek_Img"
            className="w-full absolute -z-10 h-full object-cover md:rounded-3xl rounded-2xl"
          />
          <div className="z-20 flex items-center justify-start h-full md:px-20 px-6">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                Landour Bakehouse
              </h1>
              <p className="mt-1 font-medium text-white">
                One of the Beautiful Location in Landour
              </p>
              <Button className="bg-ocean-green-500 max-w-[120px] mt-3 hover:bg-ocean-green-600">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
