import { client } from "@/sanity/lib/client";

async function getLatestBlog() {
  const query = `*[_type == "blog"] | order(publishedAt desc)[0] {
    _id,
    title,
    slug,
    author,
    type,
    "authorImageUrl": authorimage.asset->url,
    publishedAt,
    excerpt,
    "backgroundImageUrl": blogbgimage.asset->url,
    body
  }`;

  const latestBlog = await client.fetch(query);
  return latestBlog;
}

export default getLatestBlog;
