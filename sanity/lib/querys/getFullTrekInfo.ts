import { client } from "@/sanity/lib/client";

async function getFullTrek(slug: string) {
  const query = `*[_type == "trekCard" && slug.current == $slug][0]{
      _id,
    trekName,
    videoUrls,
    "backgroundImageUrl": backgroundImage.asset->url,
    duration,
    prize,
    trekAltitude,
    location,
    distance,
    bestTime,
    trekDescription,
    rating,
   
  }`;

  const params = { slug };
  const data = await client.fetch(query, params);
  return data;
}

export default getFullTrek;
