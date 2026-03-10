# Brainstorm: Personal Portfolio Website

**Date:** 2026-03-08
**Status:** Final

---

## What We're Building

A pixel-perfect UX/Product Design portfolio website with four pages:

1. **Home** — Hero section, selected works, about preview, experience, contact, explorations
2. **About** — Detailed bio, skills, background story
3. **Works** — Grid/list of all design projects
4. **Work Detail** — Individual case study pages (project summary, problem, solution, impact)

The site will have subtle, polished animations (smooth page transitions, gentle hover effects, scroll-based fade-ins) and match the Figma designs exactly.

**Target audience:** Recruiters, hiring managers, and potential clients looking at UX/Product Design work.

---

## Why This Approach

### Tech Stack: Astro + Tailwind CSS

**Astro** was chosen because:
- Purpose-built for content-focused websites like portfolios
- Simple mental model: one file = one page
- Generates fast static pages (important for recruiter first impressions)
- Built-in page transitions for polished feel
- No JavaScript shipped by default = blazing fast load times

**Tailwind CSS** was chosen because:
- Style directly in HTML — no jumping between files
- Design tokens from Figma map directly to Tailwind utility classes
- Consistent spacing, colors, and typography out of the box
- Beginner-friendly once you learn the pattern

**Rejected alternatives:**
- Next.js + Tailwind — too complex for a beginner; React concepts (hooks, state, JSX) add unnecessary learning curve for a static portfolio
- Plain HTML + CSS — too much copy-pasting, no reusable components, hard to maintain

### Animation Approach: Pure CSS
- Smooth page transitions (Astro ViewTransitions)
- Gentle hover effects on project cards and buttons
- Scroll-triggered fade-ins using CSS `@keyframes` + `IntersectionObserver` (no library)
- Lightweight and fast — zero extra dependencies

### Content: Markdown Files
- Case studies written as `.md` files in a content folder
- Astro's content collections render them into pages automatically
- Easy to update — just edit a text file, no code changes needed

### Hosting: Vercel
- Free tier, automatic deploys on git push
- Optimized for Astro out of the box
- Custom domain support

---

## Key Decisions

1. **Starting fresh** — Building from scratch to learn every piece, not restoring previous code
2. **Astro + Tailwind CSS** — Best balance of simplicity and capability for a beginner
3. **Pixel-perfect fidelity** — Figma designs matched exactly using extracted design tokens
4. **Subtle animations** — Pure CSS: transitions, hover effects, scroll fade-ins
5. **Markdown case studies** — Project content in `.md` files, rendered by Astro content collections
6. **UX case study structure** — Each project follows: summary, problem, solution, impact
7. **Vercel deployment** — Free, automatic, optimized for Astro
8. **Real content from day one** — User has content ready, no placeholders needed

---

## Resolved Questions

1. **Content management** — Markdown files with Astro content collections
2. **Animation library** — Pure CSS (no library)
3. **Deployment** — Vercel (free tier)
4. **Real content** — Ready to go, will use actual content from the start

---

## Scope

### In Scope
- 4 pages: Home, About, Works, Work Detail
- Responsive design (desktop-first based on 1440px Figma, then mobile)
- Dark AND light theme with functional toggle (persists preference)
- Page transitions and hover animations (pure CSS)
- Pixel-perfect implementation of updated Figma designs
- Fresh Figma token extraction before building
- Markdown-based case studies
- Vercel deployment

### Out of Scope (for now)
- Contact form with backend
- Blog or writing section
- CMS integration
- Analytics

---

## Next Steps

Proceed to `/ce:plan` for step-by-step implementation planning.
