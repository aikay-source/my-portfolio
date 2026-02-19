# Portfolio Website — Master Plan

> **What is this file?** This is the blueprint for your entire portfolio website.
> Read through it, and when you're happy with the approach, tell me to start building!

---

## 1. Recommended Tech Stack

Here's what we'll use and why — every choice is made with beginners in mind.

### Framework: **Astro**

- **What it is:** A tool that helps you build websites using a simple syntax that looks almost like regular HTML. Think of it as "HTML with superpowers."
- **Why it's great for you:**
  - Easiest learning curve of any modern framework
  - Your site loads extremely fast because Astro sends plain HTML to the browser (no unnecessary code)
  - Built-in page transitions (smooth animations when clicking between pages) with just one line of code
  - Great for SEO (search engines can easily read your site — important if recruiters Google your name)
  - You can add React components later as you learn more — no need to start over
- **Alternative considered:** Next.js is more popular but requires learning React first, which adds weeks of learning before you build anything

### Styling: **Tailwind CSS v4**

- **What it is:** A collection of pre-made CSS classes you add directly to your HTML. Instead of writing `color: blue; font-size: 24px;` in a separate file, you write `class="text-blue-500 text-2xl"` right on the element.
- **Why it's great for you:**
  - No switching between HTML and CSS files — everything is in one place
  - Comes with a built-in design system (consistent spacing, colors, typography)
  - Your site will look professional and consistent without being a design expert
  - Massive community — tons of examples and help online

### Animations: **CSS Animations + AOS (Animate on Scroll)**

- **What they are:**
  - **CSS Animations** — built into every browser, used for small effects like button hovers
  - **AOS** — a tiny library that makes elements fade in, slide up, etc. as you scroll down the page. You just add `data-aos="fade-up"` to any element — that's it!
- **Why this combo:** Zero configuration, very visual results, and you can see changes instantly
- **Page transitions:** Astro has built-in `<ViewTransitions />` — one component gives you smooth page-to-page animations

### Deployment: **Vercel** (free)

- **What it is:** A service that puts your website on the internet for free. You connect it to your code, and every time you save changes, it automatically updates your live site.
- **Why Vercel:** Free, fast, works perfectly with Astro, automatic HTTPS (the little lock icon in browsers), and gives your site a free URL like `your-portfolio.vercel.app`

### Images: **Astro's built-in `<Image>` component**

- **What it does:** Automatically compresses your images, converts them to modern formats (WebP/AVIF), and loads them only when needed — so your site stays fast even with lots of project screenshots

---

## 2. File & Folder Structure

Here's every file and folder you'll have, with plain-English explanations:

```
my-portfolio/
│
├── public/                     # Files that go directly to your website unchanged
│   ├── favicon.svg             # The tiny icon in the browser tab
│   ├── og-image.jpg            # Preview image when you share your site on social media
│   └── fonts/                  # Custom font files (if any)
│
├── src/                        # Your actual website code lives here
│   ├── layouts/                # Page templates (the "wrapper" around each page)
│   │   └── BaseLayout.astro    # The main template: includes <head>, nav, footer
│   │
│   ├── components/             # Reusable building blocks
│   │   ├── Navbar.astro        # Navigation bar at the top of every page
│   │   ├── Footer.astro        # Footer at the bottom of every page
│   │   ├── Hero.astro          # The big intro section on the home page
│   │   ├── ProjectCard.astro   # A single project preview card (used on Works page)
│   │   ├── SkillBadge.astro    # A small tag showing a skill (e.g., "Figma", "HTML")
│   │   └── Button.astro        # A reusable button component
│   │
│   ├── pages/                  # Each file here becomes a page on your website
│   │   ├── index.astro         # Home page (yourdomain.com/)
│   │   ├── about.astro         # About page (yourdomain.com/about)
│   │   ├── works.astro         # Works page (yourdomain.com/works)
│   │   └── works/
│   │       └── [slug].astro    # Work Detail page (yourdomain.com/works/project-name)
│   │
│   ├── content/                # Your project data (text, descriptions, images)
│   │   └── projects/           # One file per project
│   │       ├── project-1.md    # Project 1 details (title, description, images, etc.)
│   │       └── project-2.md    # Project 2 details
│   │
│   ├── assets/                 # Images that Astro will optimize automatically
│   │   ├── profile.jpg         # Your profile photo
│   │   └── projects/           # Project screenshots
│   │       ├── project-1/
│   │       │   ├── cover.jpg   # Cover image for project card
│   │       │   └── detail-1.jpg
│   │       └── project-2/
│   │           ├── cover.jpg
│   │           └── detail-1.jpg
│   │
│   └── styles/                 # Global styles
│       └── global.css          # Base styles, font imports, CSS custom properties
│
├── astro.config.mjs            # Astro settings (plugins, integrations)
├── tailwind.config.mjs         # Tailwind settings (your custom colors, fonts)
├── package.json                # Lists all the tools/libraries your project uses
├── tsconfig.json               # TypeScript settings (don't worry — we barely touch this)
└── plan.md                     # This file!
```

**Key concept — "Components":** A component is a reusable chunk of your website. Instead of copying the same navigation bar code into every page, you build it once as `Navbar.astro` and drop it into each page. If you need to change it, you change it in one place.

---

## 3. Design Considerations

### Responsive Design: Mobile-First

- **What this means:** We'll design for phone screens first, then add styles for tablets and desktops.
- **Why mobile-first:** Over 60% of web traffic is mobile. Google also ranks mobile-friendly sites higher. It's also easier — start simple (one column) and expand to complex (multi-column) layouts.
- **How Tailwind helps:** You write `class="text-base md:text-lg lg:text-xl"` — this means "16px on phones, 18px on tablets, 20px on desktops." The `md:` and `lg:` prefixes are breakpoints (screen size thresholds).

### Typography & Spacing System

- **Font sizes** — We'll use Tailwind's built-in scale (a set of consistent sizes from `text-sm` to `text-6xl`). We'll customize these based on your Figma designs.
- **Spacing** — Tailwind uses a 4px base unit: `p-1` = 4px, `p-2` = 8px, `p-4` = 16px, `p-8` = 32px. This keeps everything evenly spaced and professional-looking.
- **Line height & letter spacing** — Set once globally to match your Figma, then forget about it.

### Animation Approach

| What | How | Why |
|---|---|---|
| Page transitions | Astro `<ViewTransitions />` | Smooth fades/slides between pages, one line of code |
| Scroll reveals | AOS library (`data-aos="fade-up"`) | Elements appear as you scroll — no JS to write |
| Hover effects | Tailwind classes (`hover:scale-105 transition`) | Instant feedback on interactive elements |
| Loading animations | CSS `@keyframes` | Custom animations for hero section, etc. |

### Image Optimization Strategy

1. **Store images in `src/assets/`** — Astro auto-optimizes these (compression, format conversion)
2. **Use Astro's `<Image>` component** — Generates WebP/AVIF, adds lazy loading, prevents layout shifts
3. **Target sizes:** Cover images ~800px wide, detail images ~1200px wide, profile photo ~400px
4. **Compress before adding:** Use [Squoosh](https://squoosh.app/) (free, browser-based) to shrink large images before putting them in the project

### Accessibility Basics (included from the start)

- **What is accessibility?** Making your site usable by everyone, including people using screen readers, keyboard-only navigation, or who have visual impairments.
- We'll include:
  - Proper heading hierarchy (`<h1>` → `<h2>` → `<h3>`, never skipping levels)
  - Alt text on every image (descriptive text for screen readers)
  - Sufficient color contrast (text readable against backgrounds)
  - Semantic HTML (`<nav>`, `<main>`, `<article>`, `<footer>` instead of generic `<div>` for everything)
  - Keyboard-navigable menus and buttons
  - Focus indicators (visible outline when tabbing through elements)

### Performance Targets

| Metric | Target | What it means |
|---|---|---|
| Lighthouse Performance | 95+ | Google's overall speed score |
| Largest Contentful Paint (LCP) | < 2.5s | How fast the main content appears |
| Cumulative Layout Shift (CLS) | < 0.1 | How stable the page is (no jumping elements) |
| Total page weight | < 500 KB | How much data the browser downloads |

Astro makes hitting these targets easy because it ships zero JavaScript by default.

---

## 4. Step-by-Step Implementation Plan

### Phase A: Project Setup & Configuration
1. Install Node.js (the engine that runs our development tools)
2. Create the Astro project with `npm create astro@latest`
3. Add Tailwind CSS integration
4. Add sitemap integration (for SEO)
5. Set up the folder structure shown above
6. Configure custom colors, fonts, and spacing in Tailwind (based on your Figma)
7. Create `global.css` with base styles and font imports
8. Initialize Git (version control — saves snapshots of your work so you can undo mistakes)
9. Preview the site locally in your browser

### Phase B: Layout & Navigation (shared across pages)
10. Build `BaseLayout.astro` — the template wrapping every page (includes `<head>`, meta tags, SEO)
11. Build `Navbar.astro` — responsive navigation with mobile hamburger menu
12. Build `Footer.astro` — links, social icons, copyright
13. Add `<ViewTransitions />` for page transition animations
14. Test navigation between pages

### Phase C: Home Page
15. Build `Hero.astro` — big intro section with your name, title, and a call-to-action button
16. Build a "Featured Projects" section (shows 2-3 selected projects from your works)
17. Build a brief "About" teaser section linking to the full About page
18. Add scroll animations (AOS fade-in effects)
19. Review and refine

### Phase D: About Page
20. Build the About page layout — profile photo, bio text, skills section
21. Build `SkillBadge.astro` component for skill tags
22. Add a timeline or experience section (if in your Figma design)
23. Add scroll animations
24. Review and refine

### Phase E: Works Page (project grid)
25. Set up the content collection for projects (the markdown files that store project data)
26. Build `ProjectCard.astro` — the card showing a project preview
27. Build the Works page with a responsive grid of project cards
28. Add hover effects and scroll animations
29. Review and refine

### Phase F: Work Detail Page (individual project)
30. Build the dynamic `[slug].astro` page that generates a page for each project
31. Add project hero image, description, tech stack, links
32. Add image gallery or screenshots section
33. Add "Next/Previous Project" navigation
34. Add scroll animations
35. Review and refine

### Phase G: Animations & Interactions
36. Fine-tune page transitions (speed, easing, direction)
37. Add micro-interactions (button hovers, card lifts, link underline effects)
38. Add loading/entrance animations for the hero section
39. Ensure animations respect `prefers-reduced-motion` (some users disable animations for health reasons)
40. Test all animations on mobile

### Phase H: Responsiveness & Polish
41. Test every page on mobile, tablet, and desktop sizes
42. Fix any layout issues at different screen widths
43. Add SEO meta tags and Open Graph images to every page
44. Add structured data (JSON-LD) for Google
45. Generate and verify sitemap
46. Test with Lighthouse and fix any issues
47. Cross-browser testing (Chrome, Firefox, Safari, Edge)

### Phase I: Deployment
48. Create a GitHub account (if you don't have one) and push your code
49. Connect your repository to Vercel
50. Deploy and get your live URL
51. (Optional) Connect a custom domain
52. Final testing on the live site
53. Celebrate! 🎉

---

## 5. What Happens Next

1. **You review this plan** — tell me if anything should change
2. **Phase 2: Figma Integration** — you'll share your Figma file, and I'll extract your exact colors, fonts, spacing, and component designs
3. **Phase 3: We build it** — step by step, page by page, with explanations along the way

---

> **Ready?** Review this plan and let me know:
> - Does the tech stack sound good?
> - Anything you want to add, remove, or change?
> - Once approved, share your Figma file link and we'll extract your design tokens!
