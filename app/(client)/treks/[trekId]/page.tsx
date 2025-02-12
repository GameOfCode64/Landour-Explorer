import React from "react";

interface TrekProps {
  params: Promise<{ trekId: string }>;
}
const page = async ({ params }: TrekProps) => {
  const id = await (await params).trekId;
  return <div className="md:px-20 px-4">TrekId : {id}</div>;
};

export default page;
