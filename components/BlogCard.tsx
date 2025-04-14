import React from "react";
import Image from "next/image";
import img2 from "@/public/blog3.jpg";
import getLatestBlog from "@/sanity/lib/querys/getlatestBlog";
import { getTop3Blogs } from "@/sanity/lib/querys/getTop3Blogs";
import Link from "next/link";
import { getRestBlogs } from "@/sanity/lib/querys/getRestBlogs";

const BlogCard = async () => {
  const latest = await getLatestBlog();
  const sideBlogs = await getTop3Blogs();
  const restBlogs = await getRestBlogs();

  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <div className="flex flex-col">
          <div className="w-full md:h-[400px] h-[300px] rounded-3xl">
            <Image
              src={latest.backgroundImageUrl || img2}
              width={1000}
              height={1000}
              alt="blog"
              className="w-full h-full object-center rounded-3xl"
            />
          </div>
          <div className="flex flex-col px-2 py-6 space-y-1">
            <p className="font-bold text-ocean-green-500">Traveling</p>
            <Link
              href={`/blogs/${latest.slug.current}`}
              className="hover:underline"
            >
              <h3 className="text-2xl font-bold">{latest.title}</h3>
            </Link>
            <p className="text-muted-foreground">
              {new Date(latest?.publishedAt).toDateString()}
            </p>
            <p>{latest.excerpt}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          {sideBlogs.map((data, index) => (
            <div className="flex md:flex-row flex-col gap-6" key={index}>
              <div className="md:w-[200px] w-full md:h-[200px] h-[300px]">
                <Image
                  src={data.backgroundImageUrl || img2}
                  width={1000}
                  height={1000}
                  alt="blog"
                  className="w-full h-full object-center rounded-3xl"
                />
              </div>
              <div className="flex flex-col md:max-w-sm w-full space-y-2">
                <p className="font-bold text-ocean-green-500">{data.type}</p>
                <Link
                  href={`/blogs/${data.slug.current}`}
                  className="hover:underline"
                >
                  <h3 className="text-2xl font-bold">{data.title}</h3>
                </Link>
                <p className=" text-sm text-muted-foreground">
                  {" "}
                  {new Date(latest?.publishedAt).toDateString()}
                </p>
                <p className="text-sm text-muted-foreground">
                  {latest.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="mt-16 font-bold text-3xl text-ocean-green-500">
        View All Blogs
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-6 mt-12 ">
        {restBlogs.map((data, index) => (
          <div className="flex flex-col" key={index}>
            <div className="w-full md:h-[400px] h-[300px]">
              <Image
                src={data.backgroundImageUrl || img2}
                width={1000}
                height={1000}
                alt="blog"
                className="w-full h-full object-center rounded-3xl"
              />
            </div>
            <div className="flex flex-col px-2 py-6 space-y-1">
              <p className="font-bold text-ocean-green-500">{data.type}</p>
              <Link
                href={`/blogs/${data.slug.current}`}
                className="hover:underline"
              >
                <h3 className="text-2xl font-bold">{data.title}</h3>
              </Link>
              <p className="text-muted-foreground">
                {new Date(latest?.publishedAt).toDateString()}
              </p>
              <p>{data.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
