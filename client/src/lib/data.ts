// ============================================================
// Best Life Blueprint (BLB) — Data
// All content is centralized here for easy updates.
// ============================================================

export interface Person {
  name: string;
  title: string;
  description: string;
  imageUrl?: string;
  youtubeUrl?: string;
  websiteUrl?: string;
  isOwner?: boolean;
}

export interface Book {
  title: string;
  author: string;
  note: string;
  amazonLink?: string;
  placeholder?: boolean;
}

export interface Video {
  title: string;
  description: string;
  link?: string;
  placeholder?: boolean;
}

export interface AITool {
  name: string;
  url?: string;
  description: string;
  placeholder?: boolean;
}

export interface AIEducation {
  name: string;
  url?: string;
  description: string;
  placeholder?: boolean;
}

export interface FacebookGroup {
  name: string;
  url?: string;
  description: string;
  placeholder?: boolean;
}

export interface AILeader {
  name: string;
  url?: string;
  description: string;
  placeholder?: boolean;
}

export interface Assessment {
  title: string;
  description: string;
  link?: string;
  cta: string;
  type: "link" | "expandable";
  expandableContent?: string[];
}

export interface MiscResource {
  title: string;
  description: string;
  link?: string;
  tag: string;
  placeholder?: boolean;
}

// ── PEOPLE I FOLLOW ────────────────────────────────────────
export const people: Person[] = [
  {
    name: "Jon Westrom",
    title: "Founder & Curator",
    description: "I built Blessed Life Blueprint to share the resources, voices, and frameworks that are shaping my journey. Every person, book, and tool on this site has personally impacted how I lead, think, and live.",
    websiteUrl: "https://westromhub.com",
    isOwner: true,
  },
  {
    name: "Ed Mylett",
    title: "Performance Coach & Podcaster",
    description: "One of the most impactful voices in personal development. His energy and intensity push you to reach your next level.",
    imageUrl: "https://www.edmylett.com/img/whoIsEd/ed.png",
    youtubeUrl: "https://www.youtube.com/@EdMylett",
    websiteUrl: "https://edMylett.com",
  },
  {
    name: "Tony Robbins",
    title: "Life Strategist & Author",
    description: "The GOAT of personal development. He has transformed millions of lives and his frameworks for peak performance are unmatched.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tony_Robbins.jpg/250px-Tony_Robbins.jpg",
    youtubeUrl: "https://www.youtube.com/@TonyRobbins",
    websiteUrl: "https://www.tonyrobbins.com",
  },
  {
    name: "Simon Sinek",
    title: "Leadership Expert & Author",
    description: "Start With Why changed how I think about leadership and purpose. His clarity on what makes great leaders is brilliant.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Simon_Sinek_speaks_to_I_MIG_Marines_%282%29_%28cropped%29.jpg/250px-Simon_Sinek_speaks_to_I_MIG_Marines_%282%29_%28cropped%29.jpg",
    youtubeUrl: "https://www.youtube.com/@SimonSinek",
    websiteUrl: "https://simonsinek.com",
  },
  {
    name: "Craig Groeschel",
    title: "Pastor & Leadership Author",
    description: "Faith-based leadership that translates directly to business and life. His leadership podcast is essential listening.",
    youtubeUrl: "https://www.youtube.com/@CraigGroeschel",
    websiteUrl: "https://www.life.church",
  },
  {
    name: "John Maxwell",
    title: "Leadership Author & Speaker",
    description: "The definitive authority on leadership. His 5 Levels of Leadership and 21 Laws have shaped how I lead every single day.",
    youtubeUrl: "https://www.youtube.com/@JohnMaxwellLeadership",
    websiteUrl: "https://www.johnmaxwell.com",
  },
  {
    name: "Dan Martell",
    title: "SaaS Entrepreneur & Author",
    description: "His Buy Back Your Time framework is a game changer. He teaches entrepreneurs how to build real freedom into their business.",
    youtubeUrl: "https://www.youtube.com/@DanMartell",
    websiteUrl: "https://www.danmartell.com",
  },
  {
    name: "Lewis Howes",
    title: "Lifestyle Entrepreneur & Podcaster",
    description: "The School of Greatness podcast is packed with insights from the world's top performers. Lewis lives what he preaches.",
    youtubeUrl: "https://www.youtube.com/@LewisHowes",
    websiteUrl: "https://lewishowes.com",
  },
];

// ── BOOKS ──────────────────────────────────────────────────
export const books: Book[] = [
  {
    title: "The One Thing",
    author: "Gary Keller",
    note: "This book will change how you prioritize everything.",
    amazonLink: "https://www.amazon.com/dp/1885167776",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    note: "Small changes, massive results. Read this first if you've never read a personal development book.",
    amazonLink: "https://www.amazon.com/dp/0735211299",
  },
  {
    title: "Start With Why",
    author: "Simon Sinek",
    note: "Understanding your why changes everything about how you lead and live.",
    amazonLink: "https://www.amazon.com/dp/1591846447",
  },
  {
    title: "Extreme Ownership",
    author: "Jocko Willink & Leif Babin",
    note: "Ownership is the foundation of leadership. No excuses.",
    amazonLink: "https://www.amazon.com/dp/1250183863",
  },
  {
    title: "The 5 AM Club",
    author: "Robin Sharma",
    note: "Your morning routine sets the tone for your entire life.",
    amazonLink: "https://www.amazon.com/dp/1443460869",
  },
  {
    title: "Dare to Lead",
    author: "Brené Brown",
    note: "Vulnerability is not weakness. It's the birthplace of courage.",
    amazonLink: "https://www.amazon.com/dp/0399592520",
  },
  {
    title: "EntreLeadership",
    author: "Dave Ramsey",
    note: "Practical, no nonsense business leadership for entrepreneurs.",
    amazonLink: "https://www.amazon.com/dp/1451617852",
  },
];

// ── YOUTUBE / VIDEO ────────────────────────────────────────
export const videos: Video[] = [
  {
    title: "Ed Mylett Podcast",
    description: "One of the best interviewers in personal development. Every episode delivers.",
    link: "https://www.youtube.com/@EdMylett",
  },
  {
    title: "Tony Robbins",
    description: "The GOAT of personal development. Period.",
    link: "https://www.youtube.com/@TonyRobbins",
  },
  {
    title: "Andy Elliott",
    description: "Sales energy and mindset on another level.",
    link: "https://www.youtube.com/@AndyElliott",
  },
  {
    title: "Simon Sinek",
    description: "Leadership thinking that sticks with you.",
    link: "https://www.youtube.com/@SimonSinek",
  },
  {
    title: "Craig Groeschel Leadership Podcast",
    description: "Faith based leadership that's also incredibly practical for business.",
    link: "https://www.youtube.com/@CraigGroeschel",
  },
];

// ── AI TOOLS ───────────────────────────────────────────────
export const aiTools: AITool[] = [
  {
    name: "Claude by Anthropic",
    url: "https://claude.ai",
    description: "My primary AI assistant. This is where I do my best strategic thinking.",
  },
  {
    name: "Manus",
    url: "https://manus.im",
    description: "Autonomous AI agent. I use this to build things and run research.",
  },
  {
    name: "n8n",
    url: "https://n8n.io",
    description: "Workflow automation. This is the backbone of our AI powered systems.",
  },
  {
    name: "Vapi",
    url: "https://vapi.ai",
    description: "Voice AI platform. We're building AI phone agents with this.",
  },
  {
    name: "ChatGPT by OpenAI",
    url: "https://chat.openai.com",
    description: "Another strong AI tool. Great for brainstorming and general use.",
  },
];

export const aiEducation: AIEducation[] = [
  { name: "AI Course or Resource", description: "Coming soon", placeholder: true },
  { name: "AI Course or Resource", description: "Coming soon", placeholder: true },
  { name: "AI Course or Resource", description: "Coming soon", placeholder: true },
];

export const facebookGroups: FacebookGroup[] = [
  { name: "Facebook Group", description: "Coming soon", placeholder: true },
  { name: "Facebook Group", description: "Coming soon", placeholder: true },
  { name: "Facebook Group", description: "Coming soon", placeholder: true },
];

export const aiLeaders: AILeader[] = [
  { name: "AI Thought Leader", description: "Coming soon", placeholder: true },
  { name: "AI Thought Leader", description: "Coming soon", placeholder: true },
  { name: "AI Thought Leader", description: "Coming soon", placeholder: true },
];

// ── ASSESSMENTS ────────────────────────────────────────────
export const assessments: Assessment[] = [
  {
    title: "DISC Personality Assessment",
    description:
      "This is the full Tony Robbins DISC assessment. It will show you your natural behavioral style, your adapted style, and your core motivators. I use this with everyone I coach and mentor. It’s the starting point for real self awareness.",
    link: "https://www.tonyrobbins.com/disc",
    cta: "Take the DISC Assessment",
    type: "link",
  },
  {
    title: "Spiritual Gifts Assessment",
    description:
      "If you’re a person of faith, understanding your spiritual gifts is a game changer. This helps you see how God designed you to serve and contribute.",
    link: "https://gifts.churchgrowth.org/spiritual-gifts-survey/",
    cta: "Discover Your Spiritual Gifts",
    type: "link",
  },
  {
    title: "Discover Your Personal DNA",
    description:
      "Knowing who you are is the first step to living a blessed life. This isn't a test, and you can't use AI to fake the answers. Take a few minutes, grab a journal, and answer these honestly for yourself.",
    cta: "Discover Your Personal DNA",
    type: "expandable",
    expandableContent: [
      `Your Anchor (Values & Faith)||Instead of listing your "Top 5 Core Values": Think about a time you had to make a really difficult choice. What deep belief, faith, or person made you choose the harder, right path? What is a line you simply refuse to cross?`,
      `Your Drive (Motivators & Goals)||Instead of listing "Top 3 Goals and Professional Context": If money and titles didn't exist, what problem would you still want to wake up and solve? What is the one goal you have right now that actually scares you a little bit because it matters so much?`,
      `Your Mirrors (Strengths & Blind Spots)||Instead of asking for "DISC results and Known Blind Spots": What is something that feels completely effortless to you, but seems really hard for everyone else? Conversely, what is the one piece of constructive criticism you've heard more than once from the people who love you most?`,
      `Your Guardrails (Routines & Non-Negotiables)||Instead of asking for your "Daily Routine": What is the one daily habit or quiet moment that, if you skip it, throws your whole day off? What is your absolute non-negotiable for protecting your peace?`,
      `Your Frequency (Communication & Tone)||Instead of asking for "Communication Preferences": When you are stressed or overwhelmed, how do you tend to act, and how should the people closest to you handle it? When someone needs to tell you a hard truth, how do you want them to say it to you?`,
    ],
  },
  {
    title: "Create Your Business DNA",
    description:
      "Just like a personal DNA, this helps you build a profile of your business that an AI assistant can use to give you better, more relevant advice. Answer these questions once and you’ll save yourself hours of explaining context in every conversation.",
    cta: "Build Your Business DNA",
    type: "expandable",
    expandableContent: [
      "Company name, industry, and years in business",
      "Mission, vision, and core values",
      "Target market and ideal customer profile",
      "Team size, structure, and key roles",
      "Revenue model and pricing structure",
      "Tech stack and tools used daily",
      "Top 3 business goals for the next 12 months",
      "Biggest current challenges or bottlenecks",
      "Brand voice and communication style",
      "Competitive landscape and differentiators",
    ],
  },
];

// ── MISCELLANEOUS ──────────────────────────────────────────
export const miscResources: MiscResource[] = [
  { title: "Resource", description: "", link: "", tag: "Category", placeholder: true },
  { title: "Resource", description: "", link: "", tag: "Category", placeholder: true },
  { title: "Resource", description: "", link: "", tag: "Category", placeholder: true },
  { title: "Resource", description: "", link: "", tag: "Category", placeholder: true },
  { title: "Resource", description: "", link: "", tag: "Category", placeholder: true },
  { title: "Resource", description: "", link: "", tag: "Category", placeholder: true },
];

// ── NAV SECTIONS ───────────────────────────────────────────
export const navSections = [
  { id: "people", label: "People" },
  { id: "books", label: "Books" },
  { id: "videos", label: "Videos" },
  { id: "ai", label: "AI Tools" },
  { id: "assessments", label: "Assessments" },
];
