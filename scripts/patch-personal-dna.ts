import { createClient } from "@sanity/client";

const token = process.env.SANITY_TOKEN;
if (!token) {
  console.error("Missing SANITY_TOKEN. Run: SANITY_TOKEN=your_token pnpm patch-dna");
  process.exit(1);
}

const client = createClient({
  projectId: "dy5zmmyg",
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const updatedDNA = {
  title: "Discover Your Personal DNA",
  description:
    "This isn't a test, and there are no right answers. You can't use AI to write this for you, because an AI doesn't have your memories, your heart, or your lived experiences. To find your true Personal DNA, find a quiet place and answer these four questions using a specific story or memory from your own life:",
  cta: "Discover Your Personal DNA",
  expandableContent: [
    `The "Unseen" Test||Think of a moment when you felt incredibly proud of yourself, but absolutely nobody else was watching or knew about it. What were you doing, and why did it feel so right?||This reveals your true, unfiltered values when ego and applause are removed.`,
    `The "Noise" Test||What is something the world or culture tells you that you should care deeply about, but deep down, you genuinely don't?||This reveals your boundaries and shows where you are an independent thinker.`,
    `The "Flow" Test||When was the last time you completely lost track of time because you were so absorbed and energized by what you were doing?||This points directly to your God-given gifts and natural wiring.`,
    `The "Safe Harbor" Test||Think of the person in your life who makes you feel the most safe, valued, and understood. What exactly do they do that makes you feel that way, and how can you start doing that for someone else?||This reveals the kind of legacy and impact you actually want to leave behind.`,
  ],
};

async function run() {
  const doc = await client.fetch<{ _id: string } | null>(
    `*[_type == "assessment" && (title == "Create Your Personal DNA" || title == "Discover Your Personal DNA")][0]{ _id }`,
  );

  if (!doc) {
    console.error('No Personal DNA assessment document found in Sanity.');
    process.exit(1);
  }

  await client.patch(doc._id).set(updatedDNA).commit();
  console.log(`✓ Personal DNA assessment updated (doc: ${doc._id})`);
}

run().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
