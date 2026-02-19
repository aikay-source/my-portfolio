# Branch Analysis — Scratchpad

> **What is this file?** Claude's working scratchpad. Contains analysis, decisions, and thinking for the current task/branch. Read this file at the start of a new session to regain context.

---

## Project Overview

- **Project:** Samuel's Portfolio Website
- **Stack:** Astro + Tailwind CSS v4
- **Design Source:** Figma (tokens extracted in `CLAUDE.md`)
- **Deployment Target:** Vercel

## Current Architecture

```
my-portfolio/
├── src/
│   ├── components/       # Astro components
│   │   ├── AboutMe.astro
│   │   ├── Contact.astro
│   │   ├── Experience.astro
│   │   ├── Explorations.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── ProjectCard.astro
│   │   ├── SectionTitle.astro
│   │   └── SelectedWorks.astro
│   ├── pages/
│   │   ├── index.astro       # Home page
│   │   ├── about.astro
│   │   ├── works.astro
│   │   └── works/            # Dynamic project pages
│   ├── content/              # Project markdown data
│   ├── layouts/              # Page templates
│   ├── assets/               # Images (Astro-optimized)
│   └── styles/
│       └── global.css        # Base styles & CSS custom properties
├── CLAUDE.md                 # Design tokens from Figma
└── plan.md                   # Master implementation plan
```

## Key Design Tokens (quick ref)

- **BG:** `#131314` | **Surface:** `#242426` | **Border:** `#313033`
- **Text:** `#FFFFFF` (primary), `#F2F1ED` (body), `#ABABB2` (tertiary), `#A3A29F` (label)
- **Fonts:** TWK Everett (headings), Suisse Intl (body)
- **Spacing:** 4 / 8 / 16 / 24 / 32 / 64 / 80 px scale

---

## Decisions Log

| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-02-18 | Created `.claude/` scratchpad | Persistent context across sessions |

---

## Current Thinking

_Write your analysis and open questions here as you work._

---

## Open Questions

- _None yet — add questions as they come up during development._
