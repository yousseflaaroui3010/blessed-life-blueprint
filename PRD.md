# Product Requirements Document (PRD)
**Version:** 2.1 | **Updated:** 2026-04-22
**Advisor sign-off:** Claude Opus 4.7 (architecture decisions confirmed)

---

## 1. Overview
**Project Name:** Blessed Life Blueprint (BLB)
**Domain:** blessedlife.life
**Purpose:** A personal resource library and "constant improvement hub" curated by Jon Westrom — sharing content, tools, and philosophies that have helped him strive to be his best version. Audience: men he leads, his staff, and his children.
**Core Philosophy:** "Open Shelf" design (warm, editorial, magazine-inspired). Mobile-first installable web app.
**Primary Constraint:** Near-zero cost. No technical involvement from Jon — ever.

---

## 2. Description
Blessed Life Blueprint is a Progressive Web App (PWA) featuring curated resources across Books, People, Videos, AI Tools, and Assessments. It is designed to be a "living" playbook — Jon updates it by interacting with a simple admin panel or, optionally, talking to an AI agent. The site is built on React + Vite + Tailwind CSS and is deployed statically to Vercel free tier. All content is managed via Sanity.io (free tier headless CMS). An optional AI agent layer (free-tier LLM via Groq or OpenRouter) handles conversational update requests when needed.

**Cost breakdown (hard ceiling: $0/month recurring):**
- Vercel hosting: $0 (free tier)
- Sanity.io CMS: $0 (free tier — 3 users, 10k documents, hosted Studio)
- AI agent (Groq free tier / OpenRouter free models): $0
- Domain: deferred — purchase when ready to go live, not a blocker
- Analytics (Umami): $0 (self-hosted on Vercel via edge function)

---

## 3. Feature Inventory

### 3.1 Front-End Features
- **Hero Section:** Full-bleed ocean image, Jon's tagline, scroll hint. Warm navy/amber/linen palette. DM Serif + DM Sans typography. Mobile-first layout.
- **People I Follow & Learn From:** Standalone section (first content section after hero). Cards with profile photo, name, title, Jon's personal note, YouTube + Website links. Jon's own profile card is included here with a "Curator" badge.
- **Books I Recommend:** Cards with title, author, Jon's note, and a "BUY ON AMAZON" link per book.
- **Videos & YouTube Content:** Cards linking to recommended YouTube channels with Jon's description.
- **AI Tools & Education:** Sub-sections for AI Tools I Use, AI Education & Learning, Facebook Groups for AI, People I Follow in AI.
- **Assessments & Self Discovery:** DISC link, Spiritual Gifts link, expandable Personal DNA and Business DNA frameworks.
- **Message of the Day (Future Phase):** Rotating quote/verse/reflection. Admin-queued via Sanity.
- **PWA Shell:** Installable on iOS and Android. Works offline. App icon + splash screen. Native-feel navigation.

### 3.2 Back-End / Admin Features
- **Sanity Studio (Admin Panel):** Jon logs in with email at the Sanity-hosted Studio. Manages all content (People, Books, Videos, AI Tools, Assessments) via a clean, Notion-like interface. No code, no GitHub, no Manus.
- **Jon's Own Profile Card:** Jon has a `isOwner: true` entry in the People section. He can view and edit his own card from the admin panel just like any other person.
- **AI Agent (optional, free-tier LLM):** A conversational interface embedded in the admin panel. Jon can say "add this book" or "remove this person" and the agent writes the change to Sanity. Powered by a free-tier model (Groq + Llama 3.1 70B as primary, OpenRouter free models as fallback). Entirely $0. The agent is opt-in — Sanity Studio works fully without it.
- **Analytics:** Umami (self-hosted, free) — Jon can check if anyone is visiting without needing a Google account.
- **Image Hosting:** Profile photos uploaded via Sanity's asset pipeline (free tier). Only official press photos or images the subject has made publicly available.

---

## 4. Users & Permissions

| Role | Access | How They Interact |
|------|--------|-------------------|
| **Jon (Owner/Admin)** | Full content management | Sanity Studio UI or AI agent chat |
| **Subscribers (followers, staff, children)** | Read-only | Web browser or installed PWA |
| **Public Visitors** | Read-only | Web browser |

---

## 5. EPICs (Priority Order)

---

### EPIC 1 — MVP Launch & Content Population *(Highest)*

**Goal:** Get v1 of blessedlife.life live with real content. Zero placeholder cards at launch.

**Acceptance Criteria:**
- Site deployed and accessible at blessedlife.life with SSL
- Domain purchased and DNS connected to Vercel
- People section built as a standalone section (first after hero) with all 7 people: Ed Mylett, Tony Robbins, Simon Sinek, Craig Groeschel, John Maxwell, Dan Martell, Lewis Howes — plus Jon's own profile card with "Curator" badge
- Every book card has a working "BUY ON AMAZON" link
- Spiritual Gifts Assessment link is live — **BLOCKED: Jon to supply correct URL**
- Facebook Groups section populated — **BLOCKED: Jon to supply names + URLs**
- AI Education section populated — **BLOCKED: Jon to supply resources**
- Profile photos sourced from official/press channels for all People cards — **BLOCKED: Jon to approve**
- All remaining "Coming soon" placeholders either populated or removed before go-live

**Stack at this stage:** React 19, Vite 7, Tailwind CSS 4, TypeScript 5, `data.ts` as content source (Sanity migration is EPIC 3 — not a blocker for launch)
**Fallback:** If EPIC 3 isn't complete by launch, deploy with populated `data.ts`. Sanity is additive.

---

### EPIC 2 — PWA: Mobile-First Installable App *(High)*

**Goal:** The site feels native on a phone. Jon's followers can install it to their home screen and use it offline.

**Client's words:** "The project should preferably be a web app — PWA — on both laptop and phone, offline and downloadable. Build with a mobile-first mindset."

**Acceptance Criteria:**
- Lighthouse PWA score ≥ 90
- Installable on iOS (Safari "Add to Home Screen") and Android (Chrome install prompt)
- Offline capability: app shell + all current content available without a network connection
- Service worker caching strategy:
  - App shell + fonts: `CacheFirst`
  - Content (Sanity JSON): `StaleWhileRevalidate`
  - Images: `CacheFirst` with size limit
  - Agent/dynamic requests: `NetworkFirst`
- Web App Manifest: name "Blessed Life Blueprint", icons at 192px + 512px, theme color navy, background linen, `display: standalone`
- SW cache invalidated automatically when Vercel redeploys (new content triggers new SW version)
- Current "Open Shelf" visual design preserved 100% — no layout or typography changes
- All existing sections tested on iPhone Safari and Android Chrome before sign-off

**ADR — vite-plugin-pwa (Workbox) chosen over manual SW or framework migration:**
- Canonical Vite + React solution. Zero framework change. Auto-generates manifest + SW. Workbox handles cache invalidation reliably.
- Rejected: Manual service worker — cache poisoning bugs, weekend-destroying maintenance.
- Rejected: Next.js/Remix migration — massive rewrite, absurd ROI for adding PWA to an already-working site.
- Source: https://vite-pwa-org.netlify.app | Confidence: HIGH | Wrong probability: 5%

**Stack addition:** `vite-plugin-pwa`, Workbox

---

### EPIC 3 — Sanity.io Admin Panel & Content Decoupling *(High)*

**Goal:** Jon manages all content himself — no human intermediary, no Manus, no code. A clean, Notion-like dashboard.

**Acceptance Criteria:**
- Sanity schemas defined for: `Person`, `Book`, `Video`, `AITool`, `AIEducation`, `FacebookGroup`, `AILeader`, `Assessment`, `MiscResource`, `DailyMessage`
- Jon's Person entry has `isOwner: true` field; frontend renders a "Curator" badge on his card
- Sanity Studio accessible and functional (hosted by Sanity at `[project].sanity.studio`)
- Jon can log in with email and perform full CRUD on all content types
- Frontend fetches content from Sanity at build time; Vercel webhook triggers a rebuild on every Sanity publish
- `data.ts` retained as a static fallback — if Sanity fetch fails at build time, static seed data is used
- Image uploads for People photos handled via Sanity's asset pipeline (press photos only, rights confirmed before upload)
- Umami analytics deployed and accessible to Jon

**ADR — Sanity.io chosen over custom admin, Tina CMS, Contentlayer:**
- Free tier (3 users, 10k docs, hosted Studio) is sufficient for this project's lifetime.
- Studio UX is clean enough for a non-technical owner — Notion-comparable.
- Schemas-as-code fit the TypeScript codebase. Data is portable (JSON export anytime — no lock-in).
- Rejected: Tina CMS — Git commit flow is friction for non-devs. PRs are not "dead simple."
- Rejected: Custom /admin + Supabase — requires building + maintaining auth, CRUD UI, image pipeline forever. The cost is developer time.
- Rejected: Contentlayer — build-time only, no editor.
- Source: https://www.sanity.io/pricing | Confidence: HIGH | Wrong probability: 10%

**Stack addition:** `@sanity/client`, `sanity` v3, GROQ

---

### EPIC 4 — AI Agent Layer: Free-Model Conversational Updates *(Medium — Optional)*

**Goal:** Jon can make content changes by speaking naturally to an agent inside the platform. No forms, no menus for simple requests. Entirely $0.

**This is opt-in.** Sanity Studio works fully without the agent. The agent is an enhancement, not a dependency.

**Example interactions:**
- "Add this book: Buy Back Your Time by Dan Martell"
- "Remove Lewis Howes from the people I follow"
- "The Spiritual Gifts link should go to [URL]"
- "Add a Facebook group called AI Automation Nation"

**Acceptance Criteria:**
- Agent UI accessible via a Jon-auth-gated `/agent` route (or embedded in the admin area)
- Agent calls a free-tier LLM via Vercel serverless function (API key in env vars, never exposed to client)
- Tool/function definitions map to Sanity mutation API: `createDocument`, `updateDocument`, `deleteDocument`
- Agent cannot delete content without an explicit confirmation step
- All agent actions logged in Sanity with timestamp + action type (audit trail)
- If LLM rate limit is hit, agent shows a clear message; Sanity Studio remains fully functional

**ADR — Free-tier LLM (Groq + OpenRouter) over Claude API, n8n, or Manus:**
- **Primary:** Groq free tier with `llama-3.1-70b-versatile` — fast inference, generous free limits (14,400 req/day), function calling supported, zero cost.
- **Fallback:** OpenRouter free models (e.g., `meta-llama/llama-3.1-70b-instruct:free`, `google/gemma-2-9b-it:free`) — same zero-cost principle, broader model pool.
- Rejected: Claude API — paid per token. Unnecessary cost for a personal project when free models do the job.
- Rejected: n8n — $20+/month on cloud; self-hosting adds infra complexity.
- Rejected: Manus as platform agent — opaque runtime, lock-in, not appropriate for a long-lived personal project.
- Source: https://console.groq.com/docs/openai | Confidence: HIGH | Wrong probability: 15%

**Stack addition:** `groq-sdk` or raw `fetch` to Groq/OpenRouter API (server-side Vercel function only)

---

#### Agent Prompting Standard (applies to all LLM calls in this project)

All system prompts must follow the **COSTAR framework** + DOs/DON'Ts. Prompts must be brief — every unnecessary token is waste on a free-tier rate limit.

**COSTAR structure:**
```
C — Context:    One sentence. Who is the agent, what system does it operate in.
O — Objective:  Exactly what the agent must accomplish in this call.
S — Style:      How to format the output (JSON, plain text, structured fields).
T — Tone:       Neutral, concise. No filler phrases.
A — Audience:   Jon (non-technical owner). Confirmations must be plain English.
R — Response:   Exact output format with field names. JSON schema preferred.
```

**DOs:**
- Extract structured fields (title, author, url, category) from natural language before calling any Sanity mutation
- Always confirm destructive actions in plain English before executing ("Remove Ed Mylett — are you sure? Yes / No")
- Return a brief success summary after every mutation ("Done. Added 'Buy Back Your Time' by Dan Martell to Books.")
- If a required field is missing, ask for it in one short question ("What's the author's name?")
- Stay strictly within the defined tool schemas — no freeform database writes

**DON'Ts:**
- Don't repeat the user's input back verbatim
- Don't add disclaimers, caveats, or "As an AI..." preamble
- Don't hallucinate Amazon links, YouTube URLs, or website URLs — leave the field empty and flag it ("No URL found — add it manually in the admin if needed")
- Don't chain more than 2 tool calls per turn without a user confirmation checkpoint
- Don't expose Sanity project IDs, tokens, or internal field names in user-facing messages

**Example system prompt (Books agent — COSTAR):**
```
C: You are a content assistant for Jon's personal website admin panel, with write access to his Sanity CMS.
O: Parse the user's message and create, update, or delete a Book entry in Sanity.
S: Output a JSON object matching the Book schema: { title, author, note, amazonLink? }. If executing a mutation, call the appropriate tool.
T: Concise. No filler. Confirm actions in plain English.
A: Non-technical owner. Use simple language. Never show raw IDs or schema names.
R: After every successful mutation, respond with one sentence: what was done. If info is missing, ask one question.

DO extract title and author from natural phrasing ("a book about habits by James Clear" → title: "Atomic Habits", author: "James Clear").
DON'T invent Amazon links. DON'T proceed with delete without confirmation.
```

---

### EPIC 5 — SMS / Push Notification Delivery *(Low — Future)*

**Goal:** Jon pushes content (a video, a quote, a new book) to his followers via text or push notification.

**Client's words:** "Texting men that are following this website... texting them something every day, three times a week about a video." (Timestamp 4:23 — future vision, not a v1 request.)

**Do not build until Jon explicitly asks for it after v1 is live and being used.**

**Draft scope when ready:**
- Subscriber list managed in Sanity (name + phone, opt-in only)
- SMS via Twilio free tier — triggered from admin panel or AI agent ("send this week's book to everyone")
- Push notifications via native Web Push API (built on EPIC 2's service worker — no third-party service needed)

---

### EPIC 6 — Message of the Day *(Low — Future)*

**Goal:** A rotating daily message (quote, verse, reflection) to encourage return visits.

**Client's words:** "We may have message of the day or something like that pop up." (Timestamp 4:17 — casual mention, not a firm request.)

**Do not build until Jon asks after v1 is live.**

**Draft scope when ready:**
- Sanity content type: `DailyMessage { text, author, date, category: quote|verse|reflection }`
- Jon queues messages via Sanity Studio or dictates to the AI agent
- UI component in hero — hidden gracefully if no message is scheduled today
- Fallback: hardcoded evergreen message if Sanity fetch fails

---

## 6. Architecture Decision Records (ADRs)

| ADR | Decision | Rejected Alternatives |
|-----|----------|----------------------|
| ADR-001 | Content: Sanity.io free tier | Custom Supabase admin, Tina CMS, Contentlayer |
| ADR-002 | PWA: vite-plugin-pwa (Workbox) | Manual SW, Next.js/Remix migration |
| ADR-003 | AI Agent: Groq free tier (Llama 3.1 70B) + OpenRouter fallback, Vercel serverless | Claude API (paid), n8n, Manus |
| ADR-004 | Analytics: Umami (self-hosted, free) | Google Analytics (privacy), Plausible ($9/mo) |
| ADR-005 | Hosting: Vercel free tier | Netlify (equivalent), Manus (replaced) |

---

## 7. Non-Goals (Explicitly Out of Scope)
Rejected to honor: "non-business project, don't want to get carried away."

- Firebase Cloud Messaging / OneSignal (native Web Push via EPIC 2 covers this)
- Full Supabase stack (Sanity free tier is simpler and sufficient)
- Recharts / data visualization (in codebase but unused — remove)
- Manus as a platform-level agent (vendor lock-in, opaque pricing)
- WordPress or any PHP CMS
- Native iOS/Android app (PWA covers the requirement at zero cost)
- Human intermediary as the update mechanism (replaced by Sanity Studio + AI agent)

---

## 8. Open Items — Blocked on Client

| # | Item | Blocked By |
|---|------|-----------|
| 1 | Correct URL for Spiritual Gifts Assessment | Jon to supply |
| 2 | Facebook Groups: names + URLs | Jon to supply |
| 3 | AI Education: resource names + URLs | Jon to supply |
| 4 | AI Thought Leaders: names + URLs | Jon to supply |
| 5 | Profile photos for all 7 People cards | Jon to approve photo sources |
| 6 | Jon's own bio/description for his Curator card | Jon to write or approve |
| 7 | Any additional books for launch | Jon to supply |
| 8 | Personal DNA + Business DNA question review | Jon to approve current list |

---

## 9. Success Metric
For a non-business legacy project, the primary KPI is behavioral:
**Jon uses the site himself at least once per week and has shared it with at least one person he leads.**
Secondary metrics: live at blessedlife.life, loads in <2s on mobile, zero broken links, Lighthouse PWA score ≥ 90.

---

## 10. Competitive Analysis
- **Linktree / Bento.me:** Link curation without editorial depth, expandable content, or personal narrative. No admin panel at this quality level.
- **Substack / Ghost:** Newsletter/feed paradigm — wrong shape for a curated resource library. Higher cost.
- **Notion (published):** Closest alternative for ease of update. But aesthetics are rigid (looks like Notion). No branded design system.
- **BLB's Edge:** Polished bespoke UI (Open Shelf design) + Sanity Studio simplicity + Claude AI agent for conversational updates + PWA for phone/desktop install. No compromises on design, usability, or cost.
