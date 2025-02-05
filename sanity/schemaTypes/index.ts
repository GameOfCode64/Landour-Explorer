import { type SchemaTypeDefinition } from "sanity";
import { heroSection } from "@/sanity/lib/schemas/heroSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection],
};
