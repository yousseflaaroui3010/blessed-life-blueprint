import { defineField, defineType } from "sanity";

export default defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Title / Role", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "image", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "youtubeUrl", title: "YouTube URL", type: "url" }),
    defineField({ name: "websiteUrl", title: "Website URL", type: "url" }),
    defineField({
      name: "isOwner",
      title: "Curator (Jon's card)",
      type: "boolean",
      description: "Mark true for Jon's own card — renders the Curator badge",
      initialValue: false,
    }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 99 }),
  ],
  preview: {
    select: { title: "name", subtitle: "title", media: "image" },
  },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
