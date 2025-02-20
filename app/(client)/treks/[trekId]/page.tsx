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
        <div className="flex flex-col mt-4">
          <h1 className="text-2xl font-bold text-ocean-green-500">
            Exploring the Hidden Trails of Landour
          </h1>
          <div className="md:max-w-4xl flex flex-col spy mt-4 w-full text-left">
            <p className="font-medium text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              est suscipit debitis explicabo quibusdam libero consectetur, sed
              necessitatibus culpa pariatur, sit dicta. Iure assumenda excepturi
              cupiditate nam. Nam aut facilis magni accusantium dolore ipsam
              recusandae eius! Iure, vitae? Ipsa officia recusandae alias non,
              magnam porro tempore? Non esse, veritatis quidem odio nihil dicta
              voluptas quasi ratione fugit ducimus, laboriosam vel perferendis
              commodi, incidunt sequi quo deserunt. Harum nostrum asperiores
              minus autem fuga totam officia veritatis? Quis, laborum facere!
              Ullam error facere nam accusantium, ipsa animi quae numquam hic
              nesciunt magnam! Quisquam, quidem. Quisquam, quidem. Quisquam,
            </p>
            <p className="font-medium text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              est suscipit debitis explicabo quibusdam libero consectetur, sed
              necessitatibus culpa pariatur, sit dicta. Iure assumenda excepturi
              cupiditate nam. Nam aut facilis magni accusantium dolore ipsam
              recusandae eius! Iure, vitae? Ipsa officia recusandae alias non,
              magnam porro tempore? Non esse, veritatis quidem odio nihil dicta
              voluptas quasi ratione fugit ducimus, laboriosam vel perferendis
              commodi, incidunt sequi quo deserunt. Harum nostrum asperiores
              minus autem fuga totam officia veritatis? Quis, laborum facere!
              Ullam error facere nam accusantium, ipsa animi quae numquam hic
              nesciunt magnam! Quisquam, quidem. Quisquam, quidem. Quisquam,
            </p>
            <p className="font-medium text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              est suscipit debitis explicabo quibusdam libero consectetur, sed
              necessitatibus culpa pariatur, sit dicta. Iure assumenda excepturi
              cupiditate nam. Nam aut facilis magni accusantium dolore ipsam
              recusandae eius! Iure, vitae? Ipsa officia recusandae alias non,
              magnam porro tempore? Non esse, veritatis quidem odio nihil dicta
              voluptas quasi ratione fugit ducimus, laboriosam vel perferendis
              commodi, incidunt sequi quo deserunt. Harum nostrum asperiores
              minus autem fuga totam officia veritatis? Quis, laborum facere!
              Ullam error facere nam accusantium, ipsa animi quae numquam hic
              nesciunt magnam! Quisquam, quidem. Quisquam, quidem. Quisquam,
            </p>
            <p className="font-medium text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              est suscipit debitis explicabo quibusdam libero consectetur, sed
              necessitatibus culpa pariatur, sit dicta. Iure assumenda excepturi
              cupiditate nam. Nam aut facilis magni accusantium dolore ipsam
              recusandae eius! Iure, vitae? Ipsa officia recusandae alias non,
              magnam porro tempore? Non esse, veritatis quidem odio nihil dicta
              voluptas quasi ratione fugit ducimus, laboriosam vel perferendis
              commodi, incidunt sequi quo deserunt. Harum nostrum asperiores
              minus autem fuga totam officia veritatis? Quis, laborum facere!
              Ullam error facere nam accusantium, ipsa animi quae numquam hic
              nesciunt magnam! Quisquam, quidem. Quisquam, quidem. Quisquam,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
