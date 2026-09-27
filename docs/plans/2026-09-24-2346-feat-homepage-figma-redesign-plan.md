---
title: "Homepage Figma Redesign - Plan"
type: feat
date: 2026-09-24
artifact_contract: ce-unified-plan/v1
product_contract_source: ce-plan-bootstrap
execution: code
---

# Homepage Figma Redesign - Plan

## Goal Capsule

- **Objective:** A visitor to the Homepage sees Samuel's current, Figma-approved design — not the earlier two-column layout — with Selected Works data that reflects his real, current project roster.
- **Means:** Rebuild each Homepage section to match Figma node `765:8015` pixel-for-pixel, apply the new divider/border system site-wide, and refresh the Selected Works project data (KTD1-3, KD1-4).
- **Authority:** Figma node `765:8015` (file `MSkP29rAGfQBT3N9ekaVeM`) is authoritative for every visual/layout decision in this plan. The Key Decisions and Key Technical Decisions below are settled and should not be revisited during implementation absent new contradicting evidence.
- **Stop conditions:** Stop and ask if implementation uncovers a Selected Works entry or tag in Figma not accounted for in U4's data mapping, or if narrowing Experience/CTA's width breaks an About-page layout assumption this plan's research didn't surface.
- **Execution profile:** Sequential, single-implementer (or `ce-work`) execution; visual verification via the dev server after each unit, per the Verification Contract.
- **Who finishes and ships:** Samuel (repo owner) or an executing agent on his behalf; this repo has no external review gate.

---

## Product Contract

### Summary

Rebuilds the Homepage to match Samuel's updated Figma design (node `765:8015`): a single-column stacked layout replacing the current two-column grid, a new site-wide divider/border treatment, and refreshed Selected Works project data. `Experience` and `Cta` — shared with the About page — adopt the new stacked layout now rather than later.

### Problem Frame

The live Homepage still reflects an earlier design iteration: a two-column grid for Selected Works, section titles sitting beside their content, and placeholder project data that no longer matches Samuel's real project roster. Samuel has since revised the design in Figma and wants the site brought in line with it, taking the update one page at a time — Homepage first, with Selected Work and Work Details pages to follow in their own plans.

### Key Decisions

- **KD1. Divider/border treatment applies site-wide.** (session-settled: user-directed — chosen over scoping the new treatment to the Homepage shell alone) Governs R3.
- **KD2. Selected Works project data is replaced to match Figma's new entries.** (session-settled: user-directed — chosen over keeping the current placeholder projects and only updating layout/style) Governs R5.
- **KD3. Experience and CTA adopt the new stacked layout now, extending it onto the About page.** (session-settled: user-directed — chosen over homepage-scoping the layout change and revisiting Experience/CTA once About gets its own Figma pass) Governs R2.
- **KD4. Mobile layout is extrapolated from the desktop Figma frame.** (session-settled: user-directed — chosen over holding current mobile behavior until a dedicated mobile frame is provided) Governs R7.

### Requirements

**Layout & divider system**

- R1. Homepage sections (Hero, Selected Works, Testimonials, About Me, Experience, CTA) render in Figma's single-column stacked layout (node `765:8015`), replacing the current 848px two-column layout.
- R2. Section titles for Testimonials, About Me, Experience, and CTA stack above their content instead of beside it; Experience and CTA carry this onto the About page since they're shared components. (KD3)
- R3. The site-wide divider/border treatment is replaced: content-width (700px) horizontal dividers between sections, plus four corner marker squares near the page top and bottom, replacing the current full-bleed vertical guide lines and per-section intersection squares — applied to Home, About, Works, and Work Details. (KD1)

**Section content**

- R4. The Selected Works section on the Homepage becomes a single-column list of large project entries with category tag pills, replacing the 2-column card grid.
- R5. Selected Works project data reflects Figma's new entries (Ninenines, Migor, Holidayalot-Mobile, Wills Bisgrove) and their category tags, replacing the current placeholder project set. (KD2)
- R6. The Hero section matches Figma's updated spec: a 200x200 profile image, a "SENIOR PRODUCT DESIGNER" mono label under the name, the name at 20px/-1px tracking, a 400px-wide bio paragraph, all centered within the new 700px content column.

**Responsive**

- R7. All updated Homepage sections remain usable on mobile viewports, with the new layout extrapolated onto the project's existing responsive breakpoint conventions (the `md:`/`lg:` utility pattern already used across components). (KD4)

### Scope Boundaries

- The Selected Work (works listing) page and Work Details page layouts are out of scope for this plan; each gets its own follow-up plan once its Figma design is confirmed, per the user's step-by-step sequencing.
- `src/components/ProjectCard.astro` (shared by the Works listing and Work Details pages) is not modified — the Homepage's new list style is built as a separate component (KTD1) instead.
- Full case-study copy (long-form summary, contributions, year) for the four new project entries is not authored here — see Assumptions.

#### Deferred to Follow-Up Work

- Selected Work (works listing) page Figma implementation.
- Work Details page Figma implementation.
- Full case-study content for Ninenines, Migor, Holidayalot-Mobile, and Wills Bisgrove.
- SEO/redirect handling for the removed Holidayalot/Virally/hconnect Work Details URLs (their routes and case-study content are removed along with their `projects.ts` entries per KD2, not preserved).

---

## Planning Contract

### Key Technical Decisions

- KTD1. **New Homepage-scoped list-item component instead of extending `ProjectCard.astro`.** `ProjectCard.astro` is shared with the Works listing and Work Details pages, neither of which has a confirmed Figma redesign yet. A new component avoids coupling those pages' unconfirmed future shape to this change. Governs U5.
- KTD2. **Add a `tags: string[]` field to the `Project` data model rather than repurposing `contributions`.** The existing `contributions` field renders as a dot-separated plain-text list in `ProjectCard.astro`; Figma's design shows a different visual treatment (background-chip pills) with different labels than the existing contribution values. A new field keeps both renderings independently correct. Governs U4, U5.
- KTD3. **Introduce a new narrower `.content-divider`/`.content-divider-top` class pair for inter-section dividers, keeping `.section-border`/`.section-border-top` for the full-width edges.** `.section-border` currently renders every section boundary site-wide, including the header's bottom edge (`Navbar.astro`) and the boundary directly above the Footer on every page — both of which Figma keeps full-width, distinct from the narrower dividers between other sections. A blind in-place rework of `.section-border` would also narrow those two edges, contradicting R3. Keeping `.section-border`/`.section-border-top` (with markers reduced to the two corner squares each) for the header and the last section before the Footer, and moving every other section boundary to the new marker-free `.content-divider` class, satisfies R3's "four corner marker squares near the page top and bottom" without narrowing the edges Figma keeps full-width. Governs U1.

### Assumptions

- The four new Selected Works entries (Ninenines, Migor, Holidayalot-Mobile, Wills Bisgrove) get placeholder `summary`/`contribution`/`year` values sufficient to keep the existing Work Details route (`src/pages/works/[slug].astro`) rendering without errors, until the future Work Details plan authors their real case-study content.
- Corner marker positions follow the project's existing `--spacing-8xl` (80px) token for edge alignment rather than the Figma export's raw 76px measurement, consistent with how the current `page-wrapper` guide lines are already positioned.

### Sequencing

U1 (divider system) ships first as the smallest, most isolated, site-wide change. U2 (shared stacked layout), U3 (Hero), and U4 (project data) are independent of each other. U5 depends on U4 for the new data shape. U6 follows the same pattern as U2 but touches Home-only components. U7 (responsive pass) runs last, after all visual units land.

---

## Implementation Units

### U1. Site-wide divider & corner-marker system

**Goal:** Replace the full-bleed vertical guide lines and per-section intersection squares with Figma's thinner content-width dividers, keeping a full-width hairline only at the header's bottom edge and directly above the Footer, applied to every page.

**Requirements:** R3 (KD1), KTD3

**Dependencies:** none

**Files:**
- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/components/Hero.astro`, `src/components/SelectedWorks.astro`, `src/components/Testimonials.astro`, `src/components/AboutMe.astro`, `src/components/Experience.astro` (swap from `.section-border` to the new `.content-divider` class)
- `src/pages/about.astro`, `src/pages/works.astro`, `src/pages/works/[slug].astro` (swap each section's divider class the same way, keeping `.section-border`/`.section-border-top` only on whichever section sits directly above that page's Footer)

**Approach:**
- Drop the vertical full-width guide-line pseudo-elements on `.page-wrapper`.
- Add a new `.content-divider`/`.content-divider-top` class pair: a slim divider spanning only the content column width (matching the new 700px content max-width), with no corner markers.
- Keep `.section-border`/`.section-border-top` for the header's bottom edge (`Navbar.astro`, unchanged) and for whichever section sits directly above the Footer on each page (`Cta.astro` on Home and About) — this is the only place the four corner marker squares remain, using the existing `--spacing-8xl` token for edge alignment (KTD3, Assumptions).
- Swap every other section currently using `.section-border`/`.section-border-top` to `.content-divider`/`.content-divider-top` (KTD3).

**Patterns to follow:** the existing `--border-tertiary` token and `page-wrapper::before`/`::after` pseudo-element approach in `src/styles/global.css`.

**Test scenarios:**
- Test expectation: none -- pure CSS/markup styling change with no runtime logic branch to test.

**Verification:** Run the dev server and visually confirm the new divider/corner-marker treatment renders correctly on Home, About, Works, and Work Details pages, in both dark and light theme — full-width hairline only under the header and above the Footer, narrow content-width dividers everywhere else.

---

### U2. Shared stacked section-title layout for Experience & Cta

**Goal:** Restructure `Experience.astro` and `Cta.astro` so the section title stacks above the content column instead of beside it, narrowing the shared content width from 848px (200px sidebar + 632px content) to a single 700px column with 632px inner content, matching Figma.

**Requirements:** R2 (KD3)

**Dependencies:** U1 (sequencing only, not a hard blocker — shares the section-width convention U1 introduces)

**Files:**
- `src/components/Experience.astro`
- `src/components/Cta.astro`

**Approach:**
- Replace the `flex-col md:flex-row ... justify-between` two-column wrapper with a `flex-col` wrapper containing the `SectionTitle` block followed by the content block, both constrained to `max-w-[700px]`.
- Keep each component's existing data and behavior (experience list, copy-email script) unchanged — only the layout wrapper changes.

**Patterns to follow:** the stacked layout shape Figma already uses for Testimonials/About Me (title block, then content block, inside one `flex-col` column).

**Test scenarios:**
- Test expectation: none -- layout-only change; the copy-email click handler in `Cta.astro` is unchanged.

**Verification:** Load the Home and About pages in the dev server; confirm Experience and CTA show the title stacked above content at desktop and mobile widths, and that the CTA's copy-email button still works.

---

### U3. Hero section rebuild

**Goal:** Rebuild `Hero.astro` to match Figma's updated Hero: name at 20px/28px line-height/-1px tracking (not the current 32px/-2px desktop styling), a mono "SENIOR PRODUCT DESIGNER" label, a fixed 400px-wide bio paragraph, a 200x200 profile image (not the current 150-to-200 responsive scale), all centered within the new 700px content column.

**Requirements:** R1, R6

**Dependencies:** none

**Files:**
- `src/components/Hero.astro`

**Approach:**
- Remove the current responsive size-jump classes (`text-[20px] md:text-[32px]`, `size-[150px] md:size-[200px]`) in favor of the new fixed desktop sizing, applying a mobile scale-down only where Figma doesn't specify a mobile frame (R7, KD4).
- Wrap the existing content-plus-image row in the new 700px max-width container used across the redesigned sections.

**Patterns to follow:** the mono uppercase label treatment already used in `SectionTitle.astro`.

**Test scenarios:**
- Test expectation: none -- static hero markup/styling change; the CONTACT/RESUME links are unchanged.

**Verification:** Compare the rendered Hero against the Figma screenshot at 1440px and at the smallest supported mobile width; confirm image, name, label, bio, and buttons match position and size.

---

### U4. Update Selected Works project data

**Goal:** Replace the current placeholder project entries with Figma's four Selected Works entries (Ninenines, Migor, Holidayalot-Mobile, Wills Bisgrove), add the category-tag data Figma's tag pills need, and keep the Work Details route consistent with the new data.

**Requirements:** R5 (KD2), KTD2

**Dependencies:** none

**Files:**
- `src/data/projects.ts`
- `src/pages/works/[slug].astro`
- `public/images/projects/<slug>/` (new, one folder per new project)

**Approach:**
- Add a `tags: string[]` field to the `Project` interface (KTD2) and populate it per project from Figma's pill labels (e.g. Ninenines: `["PRODUCT DESIGN", "WEB DESIGN", "SAAS"]`).
- Replace the three existing entries with the four new ones, carrying over each project's Figma-shown one-line description as `title`, and choosing a stable `slug` per project.
- Populate the existing `contributions: string[]` field (not just the new `tags` field) for each new entry, since `ProjectCard.astro` (kept unmodified per KTD1) unconditionally renders it on the Works listing and Work Details "See Also" sections.
- Fill `summary`/`contribution`/`year` with placeholder-but-coherent values sufficient for the existing Work Details template to render sensibly (Assumptions).
- Source each new project's `image` by downloading the corresponding asset Figma already exports for it (the same design-context extraction used for this plan) into `public/images/projects/<slug>/`, mirroring the existing asset convention — Figma is this plan's authoritative visual source (Goal Capsule) and no other image source exists in the repo.
- Update `getStaticPaths()` in `src/pages/works/[slug].astro` to derive its routes from the `projects` array (e.g. `projects.map((p) => ({ params: { slug: p.slug } }))`) instead of the current hardcoded three old slugs — otherwise none of the four new project pages are generated and every Selected Works link 404s.
- Remove the three now-orphaned slug-conditional case-study JSX blocks (`{slug === 'holidayalot' && (...)}`, `'virally'`, `'hconnect'`) in the same file, since their backing data is fully replaced (KD2). The four new entries render only the shared hero/summary and "See Also" sections until a future Work Details plan authors their full case-study bodies.

**Test scenarios:**
- Test expectation: none -- static data and routing change; correctness is verified through the pages that consume it (U5, and the Work Details route itself).

**Verification:** Confirm `getProjectBySlug`/`getRelatedProjects` resolve correctly for all four new slugs, that `npm run build` generates a Work Details page for each new slug (not the three old ones), and that each renders without runtime errors showing hero, summary, tags/contributions, and "See Also".

---

### U5. Rebuild Selected Works section

**Goal:** Rebuild the Homepage's Selected Works section as a single-column list of large project entries with category tag pills, replacing the 2-column grid, using a new Homepage-scoped card component.

**Requirements:** R1, R4, KTD1

**Dependencies:** U4

**Files:**
- `src/components/SelectedWorks.astro`
- `src/components/SelectedWorkItem.astro` (new)

**Approach:**
- Introduce the new list-item component (KTD1) rendering: a full-width ~300px-tall image, a tag-pill row (from the new `tags` field), the project name, and its one-line description — per Figma's `image+details`/`project-details` structure.
- Update `SelectedWorks.astro` to map `projects` into a single `flex-col` list (64px gap between entries) instead of the current 2-column grid, keeping the existing "SEE MORE"/"SEE ALL" button and its link to `/works`.

**Patterns to follow:** the existing `data-scroll-reveal` usage on other Home sections, for consistent scroll-in animation.

**Test scenarios:**
- Happy path: all four projects render in order with correct image, tags, name, and description, each linking to its `/works/<slug>` page.
- Edge case: a project with a single tag still renders the tag row correctly without a layout gap.
- Integration: clicking "SEE MORE" navigates to `/works`.

**Verification:** Visually compare the rendered section against the Figma screenshot for node `765:8015`'s Selected Works block, at desktop and mobile widths, in both themes.

---

### U6. Homepage-only stacked layout for Testimonials & About Me

**Goal:** Restructure `Testimonials.astro` and `AboutMe.astro` from the current two-column (title beside content) layout to the new stacked (title above content) layout, narrowing the content width from 848px to 700px/632px, matching Figma.

**Requirements:** R1, R2

**Dependencies:** none

**Files:**
- `src/components/Testimonials.astro`
- `src/components/AboutMe.astro`

**Approach:**
- Apply the same stacked-wrapper restructuring as U2 (title block, then content block, both inside one `flex-col max-w-[700px]` column) — these two components are Home-only, so the change has no cross-page impact.
- Keep each component's existing data and content unchanged; only the layout wrapper changes.

**Patterns to follow:** the stacked pattern established in U2 for Experience/Cta.

**Test scenarios:**
- Test expectation: none -- layout-only change with no new interactive behavior.

**Verification:** Load the Home page in the dev server; confirm Testimonials and About Me show the title stacked above content at desktop and mobile widths.

---

### U7. Responsive pass across redesigned Homepage sections

**Goal:** Verify and adjust the extrapolated mobile behavior (KD4) for all Homepage sections touched by U1-U6, since Figma provides no dedicated mobile frame for this design.

**Requirements:** R7

**Dependencies:** U1, U2, U3, U4, U5, U6

**Files:**
- `src/components/Hero.astro`
- `src/components/SelectedWorks.astro`
- `src/components/SelectedWorkItem.astro`
- `src/components/Testimonials.astro`
- `src/components/AboutMe.astro`
- `src/components/Experience.astro`
- `src/components/Cta.astro`

**Approach:**
- Walk each updated section at the project's existing mobile breakpoint(s) (below `md`), checking padding, font sizes, and stacking against the same mobile-adaptation conventions already used elsewhere in the codebase.
- Adjust any section where the new fixed desktop pixel values (400px bio, 632px content, 200x200 image) overflow small viewports, scaling them down using the same responsive pattern already established in the touched components.

**Execution note:** This is a styling/verification pass with no test runner in the repo — prefer a dev-server viewport-resize smoke check over unit coverage.

**Test scenarios:**
- Test expectation: none -- responsive verification pass, not new behavior; captured as a visual-check unit per the Verification Contract.

**Verification:** Resize the dev server viewport from 1440px down to a small mobile width (~360px) for the Home page; confirm no horizontal overflow, no unreadable text wrapping, and no clipped images across all six sections.

---

## System-Wide Impact

- The site-wide divider/border rework (U1) changes the visual chrome on About, Works, and Work Details pages even though their own section layouts are otherwise untouched by this plan.
- The stacked-layout change to `Experience.astro` and `Cta.astro` (U2) changes how the About page's Experience and CTA sections look, ahead of any dedicated About-page Figma pass.
- `src/data/projects.ts`'s data shape changes (U4): the `Project` interface gains a `tags` field, `getStaticPaths()` in `src/pages/works/[slug].astro` is updated to match the new slugs (U4), and the three old project routes (Holidayalot, Virally, hconnect) and their case-study content are removed along with their data — this is a full replacement, not an addition, per KD2.

---

## Verification Contract

No automated test suite exists in this repo (`package.json` defines only `dev`/`build`/`preview`/`astro` scripts). Verification for every unit in this plan is manual and visual:

- `npm run dev` — render each updated section and compare against the Figma screenshot for node `765:8015` (file `MSkP29rAGfQBT3N9ekaVeM`), at 1440px and at a small mobile width, in both dark and light theme via the existing theme toggle.
- `npm run dev` — click through each Selected Works entry into its Work Details page and confirm it renders (not a 404 or redirect), and confirm "SEE MORE" and "See Also" links still resolve.
- `npm run build` — must complete without errors, and its output must include a generated page for each of the four new project slugs.

## Definition of Done

- Requirements R1-R7 are visually verified against Figma node `765:8015` at desktop and mobile widths, in both themes.
- `npm run build` succeeds with no errors or warnings introduced by this work, and generates a Work Details page for each of the four new project slugs (not the three removed ones).
- The About, Works, and Work Details pages render correctly with the new site-wide divider treatment (R3) even though their own section layouts are untouched.
- The four new Selected Works entries link to working Work Details pages showing hero, summary, tags/contributions, and "See Also" content — not a 404 or a runtime error.
- No dead code remains: the previous two-column layout markup, the previous full-bleed `.section-border` usage once U1 replaces it, and the three orphaned slug-conditional case-study blocks in `src/pages/works/[slug].astro` once U4 removes them.

---

## Sources & Research

- Figma file `MSkP29rAGfQBT3N9ekaVeM` ("Samuel's Portfolio"), node `765:8015` — the confirmed Homepage V2 design, extracted via `get_design_context`.
- `src/pages/index.astro`, `src/pages/about.astro`, `src/pages/works.astro`, `src/pages/works/[slug].astro` — confirmed which components are Home-only versus shared (`Experience`/`Cta` shared with About; `ProjectCard`/`SectionTitle` shared with Works/Work Details).
- `src/styles/global.css` — existing divider/border-marker implementation being replaced.
- `src/data/projects.ts` — existing project data shape being extended.
- `package.json` and `astro.config.mjs` — confirmed no test runner is configured and the site builds via static output (no `output: 'server'`), so `getStaticPaths()` controls which routes exist.
- `src/pages/works/[slug].astro` — confirmed `getStaticPaths()` hardcodes the three current slugs and the case-study body is gated by three `{slug === '<old-slug>' && (...)}` blocks, both of which U4 must update; confirmed `ProjectCard.astro`'s `contributions` field is rendered unconditionally in its "See Also" grid.
- Confirmed via `grep` that `.section-border` is applied identically across every page (Navbar, all Home sections, About, Works, Work Details), which is why U1 introduces a separate `.content-divider` class rather than reworking `.section-border` in place.
