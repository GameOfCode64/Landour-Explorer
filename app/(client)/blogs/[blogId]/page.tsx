import React from "react";
import Image from "next/image";
import blog3 from "@/public/blog3.jpg";

import FollowBtn from "@/components/FollowBtn";

interface BlogParams {
  params: Promise<{ blogId: string }>;
}
const TrekPage = async ({ params }: BlogParams) => {
  const id = await (await params).blogId;
  return (
    <div className="md:px-20 px-4">
      <div className="flex w-full flex-col">
        <div className="w-full h-[400px] bg-ocean-green-500/15 rounded-3xl">
          <Image
            src={blog3}
            alt="Blog_image"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
        <div className="flex items-center justify-between my-8">
          <div className="flex items-center">
            <div className="flex items-center">
              <Image
                src={blog3}
                alt="Blog_image"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="ml-4">
                <h1 className="text-lg font-semibold">John Doe</h1>
                <p className="text-sm text-gray-500">1 hour ago</p>
              </div>
            </div>
          </div>
          <FollowBtn text="follow" />
        </div>
        <div className="flex flex-col">
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

export default TrekPage;
