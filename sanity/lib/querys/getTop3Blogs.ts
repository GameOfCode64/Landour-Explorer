import { client } from "@/sanity/lib/client";

export interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  type: string;
  authorImageUrl: string;
  publishedAt: string;
  excerpt: string;
  backgroundImageUrl: string;
  body: any[];
}

export async function getTop3Blogs(): Promise<Blog[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc)[0...3] {
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

  const blogs: Blog[] = await client.fetch(query);
  return blogs;
}
