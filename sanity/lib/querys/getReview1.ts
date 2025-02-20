import { client } from "@/sanity/lib/client";

interface ReviewInterface {
  name: string;
  date: string;
  comment: string;
  userImage: string;
}

export const getReview1 = async (): Promise<ReviewInterface> => {
  const query = `*[_type == "review"][0...5]{
   name,
   date,
   "userImage": image.asset->url,
   comment
}`;

  const data = await client.fetch(query);

  return data;
};
