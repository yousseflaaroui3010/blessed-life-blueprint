import { createClient } from "@sanity/client";

const token = process.env.SANITY_TOKEN;
if (!token) {
  console.error("Missing SANITY_TOKEN. Run: SANITY_TOKEN=your_token pnpm patch-images");
  process.exit(1);
}

const client = createClient({
  projectId: "dy5zmmyg",
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const patches = [
  {
    name: "Ed Mylett",
    imageUrl: "https://www.edmylett.com/img/whoIsEd/ed.png",
    filename: "ed-mylett.png",
    contentType: "image/png",
  },
  {
    name: "Tony Robbins",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tony_Robbins.jpg/250px-Tony_Robbins.jpg",
    filename: "tony-robbins.jpg",
    contentType: "image/jpeg",
  },
  {
    name: "Simon Sinek",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Simon_Sinek_speaks_to_I_MIG_Marines_%282%29_%28cropped%29.jpg/250px-Simon_Sinek_speaks_to_I_MIG_Marines_%282%29_%28cropped%29.jpg",
    filename: "simon-sinek.jpg",
    contentType: "image/jpeg",
  },
];

async function run() {
  for (const { name, imageUrl, filename, contentType } of patches) {
    console.log(`Processing ${name}...`);

    const doc = await client.fetch<{ _id: string } | null>(
      `*[_type == "person" && name == $name][0]{ _id }`,
      { name }
    );

    if (!doc) {
      console.warn(`  ⚠ No Sanity document found for "${name}" — skipping`);
      continue;
    }

    const res = await fetch(imageUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; BlessedLifeBot/1.0)" },
    });
    if (!res.ok) throw new Error(`Failed to download image for ${name}: ${res.status} ${res.statusText}`);

    const buffer = Buffer.from(await res.arrayBuffer());

    const asset = await client.assets.upload("image", buffer, { filename, contentType });

    await client
      .patch(doc._id)
      .set({ image: { _type: "image", asset: { _type: "reference", _ref: asset._id } } })
      .commit();

    console.log(`  ✓ ${name} — image uploaded and document patched`);
  }

  console.log("\nDone. All images patched.");
}

run().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
