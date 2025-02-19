import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Map, MapPin, Phone, Star } from "lucide-react";
import { trekCards } from "@/data/trekdata";
import Link from "next/link";

const TrekPageCard = () => {
  return (
    <div className="mt-8">
      <div className="grid lg:grid-cols-3 lg:gap-12 gap-2 md:grid-cols-2 grid-cols-1 px-0 my-16">
        {trekCards.map((trek, index) => (
          <div
            className="lg:w-[320px] md:w-[360px] w-full h-[550px]"
            key={index}
          >
            <div className="w-full h-[50%] bg-center">
              <Image
                src={trek.image}
                alt={`${trek.trekName} image`}
                className="w-full rounded-3xl h-full"
                width={350}
                height={200}
              />
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex items-center justify-between px-2">
                <p className="font-semibold">{trek.trekName}</p>
                <p className="flex items-center justify-center gap-2 text-ocean-green-500 font-semibold">
                  <Star size={18} />
                  {trek.rating}
                </p>
              </div>
              <div className="flex flex-col mt-4 px-2 space-y-2">
                <p className="flex items-center font-semibold justify-normal gap-4">
                  <MapPin size={22} className="text-ocean-green-500" />
                  {trek.location}
                </p>
              </div>
              <div className="w-full flex items-center justify-center gap-3 mt-4">
                <a href="tel:8630024459">
                  <Button className="py-6 bg-transparent border-[4px] text-ocean-green-500 rounded-md border-solid border-ocean-green-600 hover:text-white hover:border-ocean-green-500 hover:bg-ocean-green-500">
                    <Phone />
                  </Button>
                </a>
                <Link
                  href={
                    trek.slug === null
                      ? ""
                      : `/treks/${trek.trekName.split(" ").join("-")}`
                  }
                  className="w-full"
                >
                  <Button className="w-full py-6 border-[4px] border-solid border-ocean-green-500 bg-ocean-green-500 hover:bg-ocean-green-600 hover:border-ocean-green-600">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekPageCard;
