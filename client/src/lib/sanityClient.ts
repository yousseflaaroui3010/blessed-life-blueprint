import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.VITE_SANITY_DATASET as string | undefined) ?? "production";

export const isSanityConfigured = Boolean(projectId && projectId.trim() !== "" && projectId !== "REPLACE_ME");

export const sanityClient = isSanityConfigured
  ? createClient({ projectId: projectId!, dataset, apiVersion: "2024-01-01", useCdn: true })
  : null;
