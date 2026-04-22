import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "blb",
  title: "Blessed Life Blueprint",
  projectId: process.env.SANITY_PROJECT_ID ?? "REPLACE_ME",
  dataset: process.env.SANITY_DATASET ?? "production",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
