import { client } from "@/sanity/lib/client";

export interface HeroInterface {
  _id: string;
  slug: string;
  trekName: string;
  backgroundImageUrl: string;
  location: string;
  rating: number;
}
export const getSearchTrek = async (slug: string): Promise<HeroInterface[]> => {
  const Slug = slug.toLocaleLowerCase();
  const query = `
  *[_type == "trekCard"&& slug.current== "${Slug}" ][0]{
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
