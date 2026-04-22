import { defineField, defineType } from "sanity";

export default defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "author", title: "Author", type: "string", validation: (r) => r.required() }),
    defineField({ name: "note", title: "Jon's Note", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "amazonLink", title: "Amazon Link", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 99 }),
  ],
  preview: {
    select: { title: "title", subtitle: "author" },
  },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
