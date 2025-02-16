import { type SchemaTypeDefinition } from "sanity";
import { heroSection } from "@/sanity/lib/schemas/heroSchema";
import { trekCard } from "@/sanity/lib/schemas/trekSchema";
import { blogs } from "@/sanity/lib/schemas/blog";
import { review } from "@/sanity/lib/schemas/review";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection, trekCard, blogs, review],
};
