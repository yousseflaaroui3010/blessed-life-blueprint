import { defineField, defineType } from "sanity";

export default defineType({
  name: "aiTool",
  title: "AI Tool",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Tool Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "url", title: "URL", type: "url" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 99 }),
  ],
  preview: {
    select: { title: "name", subtitle: "description" },
  },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
