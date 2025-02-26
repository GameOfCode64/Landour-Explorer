import { client } from "@/sanity/lib/client";

export interface HeroInterface {
  _id: string;
  slug: string;
  trekName: string;
  backgroundImageUrl: string;
  location: string;
  rating: number;
}
export const getHeroTreks = async (
  start = 0,
  limit = 8
): Promise<HeroInterface[]> => {
  const query = `
  *[_type == "trekCard"] | order(_createdAt desc) [${start}...${limit}] {
    _id,
    "slug": slug.current,
    trekName,
    "backgroundImageUrl": backgroundImage.asset->url,
    location,
    rating
  }
    `;
  const data = await client.fetch(query);
  return data;
};
