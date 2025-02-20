import { client } from "@/sanity/lib/client";

interface HeroInterface {
  description: string;
  mainImg: string;
  sideImg1: string;
  sideImg2: string;
}

export const getHero = async (): Promise<HeroInterface> => {
  const query = `*[_type == "hero"][0]{
   description,
   "mainImg" : mainImage.asset->url,
   "sideImg1": sideImage1.asset->url,
   "sideImg2": sideImage2.asset->url
}`;

  const data = await client.fetch(query);

  return data;
};
