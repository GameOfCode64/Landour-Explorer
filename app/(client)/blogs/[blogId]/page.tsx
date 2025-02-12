import React from "react";

interface BlogParams {
  params: Promise<{ blogId: string }>;
}
const TrekPage = async ({ params }: BlogParams) => {
  const id = await (await params).blogId;
  return <div className="md:px-20 px-4">Blog Id : {id}</div>;
};

export default TrekPage;
