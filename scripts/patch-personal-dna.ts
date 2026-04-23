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
    "Knowing who you are is the first step to living a blessed life. This isn't a test, and you can't use AI to fake the answers. Take a few minutes, grab a journal, and answer these honestly for yourself.",
  cta: "Discover Your Personal DNA",
  expandableContent: [
    `Your Anchor (Values & Faith)||Instead of listing your "Top 5 Core Values": Think about a time you had to make a really difficult choice. What deep belief, faith, or person made you choose the harder, right path? What is a line you simply refuse to cross?`,
    `Your Drive (Motivators & Goals)||Instead of listing "Top 3 Goals and Professional Context": If money and titles didn't exist, what problem would you still want to wake up and solve? What is the one goal you have right now that actually scares you a little bit because it matters so much?`,
    `Your Mirrors (Strengths & Blind Spots)||Instead of asking for "DISC results and Known Blind Spots": What is something that feels completely effortless to you, but seems really hard for everyone else? Conversely, what is the one piece of constructive criticism you've heard more than once from the people who love you most?`,
    `Your Guardrails (Routines & Non-Negotiables)||Instead of asking for your "Daily Routine": What is the one daily habit or quiet moment that, if you skip it, throws your whole day off? What is your absolute non-negotiable for protecting your peace?`,
    `Your Frequency (Communication & Tone)||Instead of asking for "Communication Preferences": When you are stressed or overwhelmed, how do you tend to act, and how should the people closest to you handle it? When someone needs to tell you a hard truth, how do you want them to say it to you?`,
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
