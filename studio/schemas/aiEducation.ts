import { defineField, defineType } from "sanity";

export default defineType({
  name: "aiEducation",
  title: "AI Education",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Resource Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "url", title: "URL", type: "url" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 99 }),
  ],
  preview: {
    select: { title: "name", subtitle: "description" },
  },
});
