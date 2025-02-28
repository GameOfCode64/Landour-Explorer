import SearchTrek from "@/components/SearchTrek";
import React from "react";

interface SearchProps {
  params: Promise<{ quary: string }>;
}

const SearchPage = async ({ params }: SearchProps) => {
  const query = (await params).quary;

  return <SearchTrek query={query} />;
};

export default SearchPage;
