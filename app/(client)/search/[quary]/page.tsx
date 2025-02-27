import SearchTrek from "@/components/SearchTrek";
import React from "react";
interface SearchProps {
  params: Promise<{ query: string }>;
}
const SearchPage = async ({ params }: SearchProps) => {
  const query = await (await params).query;
  return <SearchTrek quary={query} />;
};

export default SearchPage;
