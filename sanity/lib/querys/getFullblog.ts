import { client } from "@/sanity/lib/client";

async function getfullblogs(slug: string) {
  const query = `*[_type == "blog" && slug.current == "${slug}"][0]{
        _id,
        title,
        slug,
        author,
        body,
        "authorimage": authorimage.asset->url,
        "blogbgimage": blogbgimage.asset->url,
        publishedAt,
  }`;

  const data = await client.fetch(query);
  return data;
}

export default getfullblogs;
