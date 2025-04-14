import React from "react";
import Image from "next/image";
import bg1 from "@/public/blog1.jpg";
import bg2 from "@/public/blog2.jpg";
import MotionButton from "@/components/MotionButton";
import getLatestBlog from "@/sanity/lib/querys/getlatestBlog";
import { getTop3Blogs } from "@/sanity/lib/querys/getTop3Blogs";
import Link from "next/link";

const BlogPage = async () => {
  const latest = await getLatestBlog();
  const sideBlogs = await getTop3Blogs();

  return (
    <div className="flex flex-col mt-8 md:mt-20 md:px-20 px-4 mb-20">
      <h1 className="text-4xl font-bold">Latest Blogs</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8 md:mt-12">
        <div className="flex flex-col">
          <div className="md:w-[600px] w-full h-[400px] rounded-3xl">
            <Image
              src={latest.backgroundImageUrl || bg1}
              width={1000}
              height={1000}
              alt="blog_img"
              className="w-full h-full rounded-3xl object-center object-cover"
            />
          </div>
          <div className="mt-4 space-y-2">
            <p className="font-bold text-ocean-green-500">{latest.type}</p>
            <Link
              href={`/blogs/${latest.slug.current}`}
              className="hover:underline"
            >
              <h1 className="text-2xl font-bold md:text-wrap">
                {latest.title}
              </h1>
            </Link>
            <p className="text-muted-foreground">
              {new Date(latest?.publishedAt).toDateString()}
            </p>
            <p className="mt-2 text-gray-500 md:pr-14">
              <p>{latest.excerpt}</p>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:my-0 my-8 space-y-4 ">
          {sideBlogs.map((data, index) => (
            <div className="flex gap-5" key={index}>
              <div className="md:w-[200px] w-[150px] h-[150px] md:h-[200px] rounded-3xl">
                <Image
                  src={data.backgroundImageUrl || bg2}
                  width={1000}
                  height={1000}
                  alt="blog_img"
                  className="w-full h-full rounded-3xl object-center object-cover"
                />
              </div>
              <div className="flex flex-col w-[220px]">
                <p className="font-bold text-ocean-green-500">
                  {data.type || "Traveling"}
                </p>
                <Link
                  href={`/blogs/${latest.slug.current}`}
                  className="hover:underline"
                >
                  <h1 className="md:max-w-[370px] font-bold text-sm md:text-lg text-wrap">
                    {data.title}
                  </h1>
                </Link>
                <div className="md:mt-6 mt-2 text-sm">
                  <p className="font-bold">
                    By :-{" "}
                    <span className="text-ocean-green-500 font-semibold">
                      {" "}
                      {data.author || "John Doe"}
                    </span>
                  </p>
                  <p className="text-muted-foreground">
                    {" "}
                    {new Date(latest?.publishedAt).toDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MotionButton />
    </div>
  );
};

export default BlogPage;
