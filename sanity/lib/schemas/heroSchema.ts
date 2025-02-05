export const heroSection: any = {
  name: "hero",
  title: "Hero Page",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "sideImage1",
      title: "Side Image 1",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "sideImage2",
      title: "Side Image 2",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
