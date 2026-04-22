import { defineField, defineType } from "sanity";

export default defineType({
  name: "assessment",
  title: "Assessment",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "cta", title: "Button Label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: { list: ["link", "expandable"], layout: "radio" },
      initialValue: "link",
      validation: (r) => r.required(),
    }),
    defineField({ name: "link", title: "External Link (if type = link)", type: "url" }),
    defineField({
      name: "expandableContent",
      title: "Checklist Items (if type = expandable)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 99 }),
  ],
  preview: {
    select: { title: "title", subtitle: "type" },
  },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
