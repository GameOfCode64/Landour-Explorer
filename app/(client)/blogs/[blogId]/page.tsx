import React from "react";
import Image from "next/image";
import blog3 from "@/public/blog3.jpg";
import FollowBtn from "@/components/FollowBtn";
import getfullblogs from "@/sanity/lib/querys/getFullblog";
import { notFound } from "next/navigation";
import avatar from "@/public/avatar.png";
import { PortableText } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

interface BlogParams {
  params: { blogId: string };
}

const TrekPage = async ({ params }: BlogParams) => {
  const { blogId } = params;
  const blogData = await getfullblogs(blogId);

  if (!blogData) return notFound();

  const BlogStyle = `
    prose prose-teal mt-8 text-justify
    max-w-full lg:max-w-[90%] md:max-w-[90%]
    prose-headings:text-left prose-headings:text-2xl prose-headings:text-teal-700
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
      <div className="flex w-full flex-col">
        {/* Blog Top Image */}
        <div className="w-full h-[400px] bg-ocean-green-500/15 rounded-3xl">
          <Image
            src={
              blogData.blogbgimage ? urlForImage(blogData.blogbgimage) : blog3
            }
            width={1200}
            height={500}
            alt={`Cover image for blog titled "${blogData.title}"`}
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>

        {/* Author Info + Follow */}
        <div className="flex items-center justify-between my-8">
          <div className="flex items-center">
            <Image
              src={
                blogData.authorimage
                  ? urlForImage(blogData.authorimage)
                  : avatar
              }
              width={56}
              height={56}
              alt={`Author image for ${blogData.author}`}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="ml-4">
              <h1 className="text-lg font-semibold">{blogData.author}</h1>
              <p className="text-sm text-gray-500">
                {new Date(blogData?.publishedAt).toDateString()}
              </p>
            </div>
          </div>
          <FollowBtn text="follow" />
        </div>

        {/* Blog Content */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-ocean-green-500">
            {blogData.title}
          </h1>
          <div className={BlogStyle}>
            <PortableText
              value={blogData?.body}
              components={myPortableTextComponents}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekPage;
