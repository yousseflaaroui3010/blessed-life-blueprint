# PROJECT ORCHESTRATOR

- **Project:** CLAUDE_CODE_REPLICA
- **Client Brief:** See `docs/CLIENT.txt` (NEVER modify except PM)
- **Active Phase:** PHASE 2
- **PM:** [Your name] — final authority on scope and client communication

## Active Phase Routing

**BEFORE any work, check the Active Phase above and load the correct skill:**

| Phase | Skill to Load | Trigger |
|-------|--------------|---------|
| 1 | `/phase1-discovery` | Discovery, research, PRD |
| 2 | `/phase2-architecture` | Tech stack, architecture, security |
| 3 | `/phase3-design` | UI/UX design, prototyping |
| 4 | `/phase4-sprint-setup` | Scrum init, sprint planning |
| 5 | `/phase5-development` | Coding sprints |
| 6 | `/phase6-qa` | Testing, QA |
| 7 | `/phase7-deployment` | Release, deployment |
| 8 | `/phase8-monitoring` | Monitoring, maintenance |

**Cross-cutting skills (use anytime):**
- `/verify-client-intent` — Validate any deliverable against CLIENT.txt
- `/search-first` — Research protocol (online sources, version checking)
- `/log-update` — Update contextlog.md, gapslog.md, or buglog.md

## Core Rules (Always Active)

### Source of Truth
- `docs/CLIENT.txt` = client's verbatim words. Immutable except by PM.
- Every requirement must trace back to CLIENT.txt or a PM-approved recommendation.
- If CLIENT.txt is ambiguous → flag in gapslog.md → route to PM. NEVER guess.

### No Guessing
- Don't know → say so, log gap. Unsure → state confidence %, flag for verification.
- Requirements = CLIENT.txt. Recommendations = research. Label which is which.
- Ambiguous → stop, write assumption, get confirmation. Challenge false premises.

### Search-First
- Before claiming any tool/lib/technique is "best" → search online. Latest stable versions only.
- Include source URLs. State confidence.

### No Hacks
- Root causes, not symptoms. Production-grade only. Need more time → flag to PM.

### Code Standards (Phase 5+)
See `/phase5-development` skill for full standards (SOLID, security, testing, API, git).
- Every PR must pass: lint + type check + unit tests + security scan

### Logging Protocol
- `docs/contextlog.md` — ONGOING / DONE / LEFT / BLOCKED (after every sprint)
- `docs/gapslog.md` — Missing/ambiguous requirements (Phase 1–4)
- `docs/buglog.md` — Bugs + root-cause fixes (Phase 5+)
- Blocking items → log immediately → continue non-blocked work

### Handoff & Docs
- Verify output against CLIENT.txt before passing downstream. PM is tiebreaker.
- All deliverables: versioned, authored, dated, self-contained, stored in `docs/`.

## Opus Advisor (Rare — Sonnet Handles 90%+)
Use `Agent(model: "opus")` ONLY for: irreversible architecture decisions, security model design, complex data migration strategy. One focused question per call. Never for routine coding, file reads, or well-defined tasks.

## Token Efficiency (Always Active)
- **Read files:** ALWAYS Grep first to find line numbers, then Read with `offset` + `limit`. Never read full files unless <50 lines.
- **Suggest /compact:** Proactively tell the user to `/compact` after completing a sub-task, before switching focus, or when context feels heavy. Include what to focus the compact on (e.g., "focus on: files modified, current blockers, next step").
- **WebSearch:** ONLY when user explicitly requests OR when checking library/API versions. Never for general coding questions.
- **Command output:** Capture summaries, not full logs. Pipe through `head`/`tail` when possible.

## Session Discipline
- One focused task per session.
- `/compact` after each sub-task. `/clear` when switching phases.
- `/memory` audit at session start — prune stale notes.
