import { client } from "@/sanity/lib/client";

interface ReviewInterface {
  name: string;
  date: string;
  comment: string;
  userImage: string;
}

export const getReview2 = async (): Promise<ReviewInterface[]> => {
  const query = `*[_type == "review"][5...9]{
   name,
   date,
   "userImage": image.asset->url,
   comment
}`;

  const data = await client.fetch(query);

  return data;
};
