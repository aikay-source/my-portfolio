---
title: "Build Personal Portfolio Website from Scratch"
type: feat
status: active
date: 2026-03-08
origin: docs/brainstorms/2026-03-08-portfolio-website-brainstorm.md
---

# Build Personal Portfolio Website from Scratch

## Overview

Build a pixel-perfect UX/Product Design portfolio website using Astro + Tailwind CSS, matching Figma designs exactly. The site has 4 pages (Home, About, Works, Work Detail), uses markdown-based case studies, pure CSS animations, and deploys to Vercel. Built step-by-step for a complete beginner to understand every piece.

(See brainstorm: `docs/brainstorms/2026-03-08-portfolio-website-brainstorm.md`)

## Problem Statement

Samuel needs a professional portfolio to showcase UX/Product Design case studies to recruiters and hiring managers. The site must load fast, look polished, and be easy to update with new projects. As a complete beginner, the build process must be educational and approachable.

## Proposed Solution

An Astro static site with Tailwind CSS, organized into 10 incremental phases (Phase 0-9). Each phase produces a visible, testable result so the beginner can see progress at every step. Content collections handle project case studies in markdown, and pure CSS handles all animations.

## Technical Approach

### Architecture

```
my-portfolio/
├── public/
│   ├── fonts/
│   │   ├── Geist/                 # Sans font files
│   │   └── GeistMono/             # Mono font files
│   ├── images/
│   │   ├── profile-image.png
│   │   ├── testimonial-*.png      # Testimonial avatars
│   │   └── project-image*.png     # Project thumbnails
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── config.ts              # Content collection schema
│   │   └── projects/              # Markdown case studies
│   │       └── holidayalot.md
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── SectionTitle.astro
│   │   ├── ProjectCard.astro
│   │   ├── SelectedWorks.astro
│   │   ├── Testimonials.astro
│   │   ├── AboutMe.astro
│   │   ├── Experience.astro
│   │   └── Cta.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro            # Home
│   │   ├── about.astro            # About
│   │   ├── works/
│   │   │   ├── index.astro        # Works listing
│   │   │   └── [slug].astro       # Dynamic work detail
│   ├── styles/
│   │   └── global.css             # Design tokens, fonts, base styles
│   └── scripts/
│       └── scroll-reveal.js       # IntersectionObserver for fade-ins
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Implementation Phases

---

#### Phase 0: Figma Token Extraction & Update

**Goal:** Extract the latest design tokens from Figma so every phase uses up-to-date values.

**Tasks:**

- [x] Connect Figma MCP (or user provides updated Figma file/link)
- [x] Extract updated tokens from Figma: colors, typography, spacing, borders, shadows, effects
- [x] Compare with existing CLAUDE.md tokens and identify changes
- [x] Update `CLAUDE.md` design tokens section with new values:
  - Colors (backgrounds, text, borders, surfaces — including **light mode** palette)
  - Typography (font sizes, weights, line-heights, letter-spacing)
  - Spacing scale
  - Border widths, radii, styles
  - Any new component patterns or layout changes
- [x] Document light mode color palette alongside dark mode tokens:
  - Light background, surface, text, border values
  - Map each dark token to its light equivalent
- [x] Verify: CLAUDE.md reflects the current Figma source of truth

**Success criteria:** All design tokens in CLAUDE.md match the latest Figma file, including light mode colors.

---

#### Phase 1: Project Setup & Foundation

**Goal:** A blank dark page that loads in the browser with all design tokens ready.

**Tasks:**

- [ ] Initialize new Astro project with `npm create astro@latest` (`astro.config.mjs`)
- [ ] Install Tailwind CSS v4 with Vite plugin (`package.json`)
- [ ] Install `@astrojs/sitemap` integration (`package.json`)
- [ ] Configure Astro for Vercel deployment + sitemap (`astro.config.mjs`)
- [ ] Set up TypeScript strict mode (`tsconfig.json`)
- [ ] Add Geist and Geist Mono font files to `public/fonts/` (or install via npm `geist` package)
- [ ] Copy images into `public/images/` (profile image, project images, testimonial avatars — user will provide)
- [ ] Copy `favicon.svg` into `public/`
- [ ] Create `src/styles/global.css` with:
  - `@font-face` declarations for Geist (Regular 400, Semibold 600, Bold 700) and Geist Mono (Regular 400, Semibold 600)
  - Tailwind `@theme` block defining all design tokens from CLAUDE.md:
    - Spacing: `--spacing-xs` through `--spacing-8xl`
    - Font families: `--font-sans` (Geist), `--font-mono` (Geist Mono)
    - Font sizes, tracking, line-heights for the full type scale
    - Border radius: `--radius-pill: 100px`, `--radius-none: 0px`
  - CSS custom properties for theming on `:root` (dark default) and `[data-theme="light"]` selector:
    - `--bg-primary`, `--bg-hover`, `--bg-pressed`
    - `--surface-l2`
    - `--content-primary`, `--content-secondary`, `--content-tertiary`
    - `--border-secondary`, `--border-tertiary`
    - `--card-bg`, `--image-border`
  - Base styles: `html { scroll-behavior: smooth }`, body bg/text/font using CSS variables
  - Selection styling (inverted colors)
  - Noise texture overlay: `body::before` with inline SVG `feTurbulence` filter, `opacity: 0.15`, `z-index: 9999`, `pointer-events: none`
  - Page border lines: `.page-wrapper::before`/`::after` — 0.5px vertical lines at `left: 80px` and `right: 80px`, full height, `var(--border-tertiary)`
  - Section border class: `.section-border` — `border-bottom: 0.5px solid var(--border-tertiary)` + 5x5px intersection rectangle markers at left/right via `::before`/`::after` with `transform: translate()` centering
- [ ] Create `src/layouts/BaseLayout.astro` with `<html>`, `<head>` (meta, fonts, ViewTransitions import), `<body>` with max-width 1440px container, `.page-wrapper` class on container div
- [ ] Verify: `npm run dev` shows a dark (#131314) blank page

**Success criteria:** Dark page loads at `localhost:4321` with no errors, fonts available.

---

#### Phase 2: Navigation & Footer

**Goal:** Header and footer visible on every page.

**Tasks:**

- [ ] Create `src/components/Navbar.astro`:
  - Layout: `justify-between` — Logo (left) | actions (right: toggle + "Let's Chat" link)
  - Padding: 80px horizontal (`--space/8xl`), 24px vertical (`--space/xl`)
  - Logo: "SAMUEL NWOKOLO" text — Geist Bold, uppercase (not an SVG)
  - Right side: dark/light toggle (pill shape, 100px radius, 4px inner padding) + "Let's Chat" underlined link
  - Toggle: two icon buttons (sun/moon SVGs, 16px), active state gets `var(--surface-l2)` bg, 8px gap
  - Toggle border: 1px solid `var(--border-secondary)`
  - "Let's Chat" link: Geist Bold, 16px, bottom border `#575755`
  - Toggle functionality: clicking switches `data-theme` attribute on `<html>`, persists choice to `localStorage`
  - Mobile: hamburger menu button, fixed overlay menu
- [ ] Create `src/components/Footer.astro`:
  - Layout: `justify-between` — copyright (left) + social links (right)
  - Padding: 80px horizontal, 32px bottom, 16px top, plus 32px inner padding on both groups
  - Copyright: "@ 2026 Designed and built with love by Samuel Nwokolo" — Geist Mono Semibold, 12px, `var(--content-tertiary)`
  - Social links: Email, LinkedIn, Dribbble, Twitter — underlined (0.5px), 2px dot separators, 8px gap
- [ ] Add Navbar + Footer to `BaseLayout.astro` (Navbar above `<slot />`, Footer below)
- [ ] Verify: nav and footer appear, links work, mobile menu toggles

**Success criteria:** Consistent header/footer on all pages, responsive mobile menu works.

---

#### Phase 3: Home Page — All Sections

**Goal:** Complete home page matching Figma exactly.

**Tasks:**

- [ ] Create `src/components/SectionTitle.astro`:
  - Props: `title` (string)
  - Accent bar: 18px wide x 5px tall (white in dark, dark in light — uses `var(--content-primary)`)
  - 8px gap below bar
  - Title: Geist Mono Semibold, 12px, uppercase, `var(--content-tertiary)`

- [ ] Create `src/components/Hero.astro`:
  - Two-column layout: image (200x200, left) + text content (right), 232px gap
  - Name: Geist Medium, 36px, line-height 44px, letter-spacing -0.72px, white
  - Subtitle: "Ux designer" — Geist, 14px, medium, `var(--content-tertiary)`
  - Bio paragraph: Geist Regular, 16px, `var(--content-secondary)`
  - CTA links: "Let's Chat" + "My Resume" — Geist Bold, 16px, bottom border `#575755`, 16px gap
  - Profile image: 200x200px, 4px border `var(--image-border)`
  - Vertical padding: 64px (`--space/6xl`)

- [ ] Create `src/components/ProjectCard.astro`:
  - Props: `title`, `niche`, `image`, `slug`
  - Wrapped in `<a>` tag linking to `/works/{slug}`
  - Image container: full-width x 400px height, `overflow-hidden`, bg `var(--card-bg)`
  - Image: hover scale effect (`scale-[1.02]`, 500ms transition)
  - Details below image: 23px gap, 4px gap between name and niche
  - Project name: Geist Medium, 20px, `var(--content-primary)`
  - Niche: Geist Regular, 16px, `var(--content-tertiary)`

- [ ] Create `src/components/SelectedWorks.astro`:
  - Uses SectionTitle with "SELECTED WORKS"
  - Full-width section, 80px horizontal padding
  - Project grid: 2 columns (flex-1 each), 16px gap
  - 32px gap between project rows
  - 4 projects: all "Holidayalot" / "Niche" (placeholder — content from Figma)

- [ ] Create `src/components/Testimonials.astro`:
  - Two-column: SectionTitle sidebar + testimonials content (632px)
  - Max-width: 848px, centered
  - "TESTIMONIALS" section title
  - 2 testimonial items, 32px gap between
  - Each: quote (Geist Regular, 16px) + avatar (32px circle) + name + title
  - 6px gap quote-to-attribution, 8px gap avatar-to-text
  - Testimonial 1: Valentine Oleka — "Founder, Odogwu Technologies"
  - Testimonial 2: Bruno Pankovski — "Founder, Axiom Growth"

- [ ] Create `src/components/AboutMe.astro`:
  - Two-column: SectionTitle sidebar (200px) + bio content (632px)
  - Max-width: 848px, centered
  - Bio text: Geist Regular, 16px, `var(--content-secondary)`, 16px paragraph gaps

- [ ] Create `src/components/Experience.astro`:
  - Two-column: SectionTitle sidebar (200px) + experience list (632px), 16px gap
  - Max-width: 848px, centered
  - Each item: company (Geist Semibold, 20px) + role (Geist Mono Regular, 14px, right-aligned)
  - Date below: Geist Mono Regular, 14px, `var(--content-tertiary)`, 8px gap from name row
  - Currently: Odogwutechnologies — "Product Designer" — "2023 - 2026"

- [ ] Create `src/components/Cta.astro`:
  - Two-column: SectionTitle sidebar + content (632px), max-width 848px, centered
  - Section title: "SAY HI"
  - Text: collaboration message paragraph (Geist Regular, 16px, `var(--content-primary)`)
  - Copy email block: "Copy email" label + email address with underline border
  - Click-to-copy: `navigator.clipboard.writeText()` with "Copied!" feedback (2s timeout)
  - Uses `.section-border` class

- [ ] Assemble `src/pages/index.astro`:
  - Stack: Hero → SelectedWorks → Testimonials → AboutMe → Experience → Cta → Footer
  - All sections use `.section-border` class for bottom borders with intersection markers
  - Sections wrapped in `.page-wrapper` container (provides vertical border lines)

- [ ] Verify: home page matches Figma at 1440px width, all sections visible

**Success criteria:** Home page is pixel-perfect at 1440px, all interactions work (hover effects, toggle).

---

#### Phase 4: Content Collections & Work Detail Pages

**Goal:** Project case studies in markdown, rendered as dynamic pages.

**Tasks:**

- [ ] Create `src/content/config.ts` — define `projects` collection schema:
  - Fields: `title`, `date`, `number`, `image` (thumbnail), `summary`, `heroImage`, `role`, `timeline`, `tools`
  - Type: `content` (for markdown body rendering)

- [ ] Create markdown files in `src/content/projects/`:
  - `holidayalot.md` — with frontmatter + case study body (content from Figma work details pages)
  - Additional project files as needed (all currently "Holidayalot" in Figma)
  - Body structure per CLAUDE.md: Project summary → The problem → The solution → The impact

- [ ] Create `src/pages/works/[slug].astro`:
  - Dynamic route using `getStaticPaths()` from content collection
  - Layout: BaseLayout
  - Hero section: project title, role, timeline, tools
  - Hero image: full-width project image
  - Case study body: rendered markdown with proper typography
  - Navigation: "Back to Works" link
  - Styling: prose-like layout for readable long-form content

- [ ] Update `ProjectCard.astro` to accept content collection data
- [ ] Update `SelectedWorks.astro` to pull from content collection instead of hardcoded array

- [ ] Verify: clicking a project card navigates to its detail page, content renders correctly

**Success criteria:** 4 case study pages accessible via `/works/savewell`, etc., content from markdown.

---

#### Phase 5: Works Listing & About Pages

**Goal:** Complete the remaining two pages.

**Tasks:**

- [ ] Create `src/pages/works/index.astro`:
  - Fetch all projects from content collection
  - Display as grid/list of ProjectCards
  - Page title using SectionTitle pattern
  - Same padding/spacing as home page sections

- [ ] Create `src/pages/about.astro`:
  - Full bio/background story
  - Skills or tools section
  - Photo or personal details
  - Match Figma about page design exactly
  - Use same two-column layout pattern

- [ ] Verify: all 4 pages (Home, About, Works, Work Detail) are navigable and complete

**Success criteria:** All pages built and linked, navigation works between all pages.

---

#### Phase 6: Dark/Light Mode Toggle

**Goal:** Fully functional theme switching that persists across page loads.

**Tasks:**

- [ ] Define light mode color palette in `global.css`:
  - `:root` (default dark): all dark color values as CSS custom properties
  - `[data-theme="light"]`: override with light color values (from Phase 0 Figma extraction)
  - All Tailwind color utilities reference these CSS variables (not hardcoded hex)
- [ ] Update all components to use CSS variable-based colors instead of hardcoded values:
  - Background colors: `bg-[var(--bg-primary)]` pattern
  - Text colors: `text-[var(--content-primary)]` pattern
  - Border colors: `border-[var(--border-tertiary)]` pattern
  - Surface/card colors: same pattern
- [ ] Create theme toggle script in `Navbar.astro`:
  - On click: toggle `data-theme` attribute between "dark" and "light" on `<html>`
  - Save preference to `localStorage`
  - Update active state styling on toggle buttons (sun/moon)
- [ ] Add theme initialization script in `BaseLayout.astro` `<head>` (inline, blocking):
  - Check `localStorage` for saved preference
  - If no preference, respect `prefers-color-scheme` media query
  - Set `data-theme` attribute before page renders (prevents flash of wrong theme)
- [ ] Handle ViewTransitions: re-apply theme on `astro:after-swap` event
- [ ] Test: toggle works, persists on refresh, no flash of wrong theme on load, all pages respect theme

**Success criteria:** Toggle switches all colors smoothly, preference persists, no FOUC (flash of unstyled content).

---

#### Phase 7: Animations & Transitions

**Goal:** Subtle, polished motion throughout the site.

**Tasks:**

- [ ] Configure Astro ViewTransitions in `BaseLayout.astro`:
  - Smooth fade transitions between pages
  - `transition:animate` directives on key elements (headings, images)

- [ ] Add hover effects (CSS transitions):
  - Project cards: image `scale(1.02)` on hover, 500ms ease
  - Buttons: color transition on hover, 200ms
  - Nav links: color transition, 200ms
  - Social links in footer: color transition

- [ ] Create `src/scripts/scroll-reveal.js`:
  - `IntersectionObserver` watching elements with `data-reveal` attribute
  - When element enters viewport: add `.revealed` class
  - CSS: `.reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s, transform 0.6s; }`
  - CSS: `.revealed { opacity: 1; transform: translateY(0); }`

- [ ] Add `data-reveal` attribute to key sections on each page:
  - Section titles, project cards, about content, experience items

- [ ] Verify: page transitions are smooth, hover effects feel natural, scroll reveals trigger correctly

**Success criteria:** All animations feel subtle and professional, no jank or layout shift.

---

#### Phase 8: Responsive Design

**Goal:** Site looks great on all screen sizes.

**Tasks:**

- [ ] Desktop (1440px): verify pixel-perfect match to Figma (already built to this)
- [ ] Tablet (768px - 1024px):
  - Two-column layouts collapse to single column
  - Reduce horizontal padding: 80px → 24-40px
  - Inner content padding (200px) removed
  - Project cards: single column stack
- [ ] Mobile (< 768px):
  - Single column everything
  - Horizontal padding: 24px
  - Hamburger menu replaces nav links
  - Hero: stack image above/below text
  - Project card images: auto height
  - Exploration cards: horizontal scroll maintained
  - Font sizes: mostly unchanged (already responsive)
- [ ] Test mobile menu: opens/closes, links work, body scroll locked
- [ ] Test all interactive elements on touch (hover states, copy button)
- [ ] Verify: no horizontal scrolling issues, no text overflow, images scale properly

**Success criteria:** Fully responsive from 320px to 1440px+, no layout breaks.

---

#### Phase 9: SEO, Performance & Deployment

**Goal:** Live on the internet, fast and findable.

**Tasks:**

- [ ] Add SEO meta tags to `BaseLayout.astro`:
  - `<title>`, `<meta name="description">`, Open Graph tags
  - Props for per-page title/description override
  - Favicon link
- [ ] Verify sitemap generates at `/sitemap.xml` (from @astrojs/sitemap)
- [ ] Performance check:
  - Images: use appropriate sizes, consider Astro `<Image>` component for optimization
  - Fonts: verify `font-display: swap` is set
  - No unnecessary JavaScript shipped
- [ ] Deploy to Vercel:
  - Connect GitHub repo to Vercel
  - Configure build command: `npm run build`
  - Configure output directory: `dist`
  - Set up custom domain (if available)
- [ ] Test deployed site:
  - All pages load correctly
  - Page transitions work
  - Mobile responsive
  - Links and interactions functional

**Success criteria:** Site live on Vercel, Lighthouse score 90+ on all categories.

---

## Alternative Approaches Considered

(See brainstorm: `docs/brainstorms/2026-03-08-portfolio-website-brainstorm.md`)

1. **Next.js + Tailwind** — Rejected: too complex for a beginner (React hooks, JSX, state management). Overkill for a static portfolio.
2. **Plain HTML + CSS** — Rejected: no reusable components, excessive copy-pasting, no built-in page transitions.

## Acceptance Criteria

### Functional Requirements

- [ ] 4 pages: Home, About, Works, Work Detail — all navigable
- [ ] Home page: Hero, Selected Works, About Me, Experience, Contact, Explorations sections
- [ ] Work Detail: renders markdown case studies (summary, problem, solution, impact)
- [ ] Navigation: logo, page links, functional dark/light toggle, CTA button
- [ ] Dark/light mode: toggle switches all colors, persists to localStorage, no flash on load
- [ ] Footer: copyright, social links
- [ ] Mobile: hamburger menu, responsive layouts
- [ ] Copy email to clipboard with feedback
- [ ] Project cards link to detail pages

### Non-Functional Requirements

- [ ] Pixel-perfect match to Figma at 1440px
- [ ] Responsive from 320px to 1440px+
- [ ] Page load < 2 seconds
- [ ] Lighthouse performance 90+
- [ ] Pure CSS animations (no JS libraries)
- [ ] Smooth page transitions via ViewTransitions

### Quality Gates

- [ ] All pages render without console errors
- [ ] No horizontal scroll on any viewport
- [ ] Fonts load correctly (no FOUT flash)
- [ ] All links functional
- [ ] Deployed and accessible on Vercel

## Dependencies & Prerequisites

- **Node.js** (v18+) installed on machine
- **npm** package manager
- **Git** for version control
- **GitHub account** for repo hosting + Vercel integration
- **Vercel account** (free tier) for deployment
- **Font files** (TWK Everett + Suisse Intl) — already in repo history
- **Project images** — already in repo history
- **Case study content** — user has this ready

## Risk Analysis & Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Beginner gets stuck on terminal/npm | High | Medium | Explain each command in plain language before running |
| Fonts fail to load | Medium | High | Test font-face declarations early in Phase 1 |
| Astro content collections API confusion | Medium | Medium | Provide exact code, explain each piece |
| Responsive design breaks at edge sizes | Medium | Low | Test incrementally, fix as we go |
| Vercel deployment issues | Low | Medium | Follow Astro's official Vercel guide |

## Success Metrics

- All 4 pages complete and matching Figma designs
- Site loads in < 2 seconds
- Lighthouse score 90+ across all categories
- User understands the codebase well enough to add a new project by creating a markdown file
- Site live on Vercel with a shareable URL

## Sources & References

### Origin

- **Brainstorm document:** [docs/brainstorms/2026-03-08-portfolio-website-brainstorm.md](docs/brainstorms/2026-03-08-portfolio-website-brainstorm.md) — Key decisions: Astro + Tailwind stack, pure CSS animations, markdown case studies, Vercel deployment, pixel-perfect Figma fidelity

### Internal References

- Design tokens: `CLAUDE.md` (complete Figma extraction with colors, typography, spacing, component patterns)
- Previous build patterns: repo git history (component conventions, CSS variable naming, Tailwind class patterns)

### Technical References

- Astro Content Collections (v5): file-based content with typed schemas
- Tailwind CSS v4: `@theme` directive for design tokens in CSS
- Astro ViewTransitions: built-in page transition API
- IntersectionObserver API: native browser API for scroll-triggered effects
