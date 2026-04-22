import { defineField, defineType } from "sanity";

export default defineType({
  name: "video",
  title: "Video / Channel",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "link", title: "YouTube / Link URL", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 99 }),
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
