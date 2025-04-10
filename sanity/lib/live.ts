// sanity/lib/live.ts
import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: "2024-04-01", // use actual date version
  }),
});
