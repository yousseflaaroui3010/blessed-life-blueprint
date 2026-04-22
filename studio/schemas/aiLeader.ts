import { defineField, defineType } from "sanity";

export default defineType({
  name: "aiLeader",
  title: "AI Thought Leader",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "url", title: "URL", type: "url" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 99 }),
  ],
  preview: {
    select: { title: "name", subtitle: "description" },
  },
});
