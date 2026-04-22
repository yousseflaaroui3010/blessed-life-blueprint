import { defineField, defineType } from "sanity";

export default defineType({
  name: "facebookGroup",
  title: "Facebook Group",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Group Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "url", title: "Facebook URL", type: "url" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 99 }),
  ],
  preview: {
    select: { title: "name", subtitle: "description" },
  },
});
