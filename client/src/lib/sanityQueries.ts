import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient, isSanityConfigured } from "./sanityClient";
import type { Person, Book, Video, AITool, AIEducation, FacebookGroup, AILeader, Assessment } from "./data";

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;
export const urlFor = (source: SanityImageSource) => builder?.image(source);

function client() {
  if (!sanityClient) throw new Error("Sanity not configured");
  return sanityClient;
}

// ── GROQ queries ───────────────────────────────────────────

export async function fetchPeople(): Promise<Person[]> {
  const raw = await client().fetch<any[]>(
    `*[_type == "person"] | order(order asc) { name, title, description, "imageUrl": image.asset->url, youtubeUrl, websiteUrl, isOwner }`
  );
  return raw.map((p) => ({ ...p, isOwner: p.isOwner ?? false }));
}

export async function fetchBooks(): Promise<Book[]> {
  return client().fetch(
    `*[_type == "book"] | order(order asc) { title, author, note, amazonLink }`
  );
}

export async function fetchVideos(): Promise<Video[]> {
  return client().fetch(
    `*[_type == "video"] | order(order asc) { title, description, link }`
  );
}

export async function fetchAITools(): Promise<AITool[]> {
  return client().fetch(
    `*[_type == "aiTool"] | order(order asc) { name, url, description }`
  );
}

export async function fetchAIEducation(): Promise<AIEducation[]> {
  return client().fetch(
    `*[_type == "aiEducation"] | order(order asc) { name, url, description }`
  );
}

export async function fetchFacebookGroups(): Promise<FacebookGroup[]> {
  return client().fetch(
    `*[_type == "facebookGroup"] | order(order asc) { name, url, description }`
  );
}

export async function fetchAILeaders(): Promise<AILeader[]> {
  return client().fetch(
    `*[_type == "aiLeader"] | order(order asc) { name, url, description }`
  );
}

export async function fetchAssessments(): Promise<Assessment[]> {
  const raw = await client().fetch<any[]>(
    `*[_type == "assessment"] | order(order asc) { title, description, cta, type, link, expandableContent }`
  );
  return raw.map((a) => ({
    ...a,
    expandableContent: a.expandableContent ?? [],
  }));
}
