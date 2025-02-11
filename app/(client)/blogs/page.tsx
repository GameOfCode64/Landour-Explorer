import React from "react";
import BlogCard from "@/components/BlogCard";

const BlogPage = () => {
  return (
    <div className="md:px-20 px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-ocean-green-500">
        Our Latest Blogs
      </h1>
      <BlogCard />
    </div>
  );
};

export default BlogPage;
