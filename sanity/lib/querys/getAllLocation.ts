import { client } from "@/sanity/lib/client";

interface LocationInterface {
  trekName: string;
}

export const getAllLocation = async (): Promise<LocationInterface[]> => {
  const query = `*[_type == "trekCard"]{
    trekName
}`;

  const data = await client.fetch(query);

  return data;
};
