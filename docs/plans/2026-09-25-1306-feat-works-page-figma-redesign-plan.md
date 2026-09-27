---
title: "Works Page Figma Redesign - Plan"
type: feat
date: 2026-09-25
artifact_contract: ce-unified-plan/v1
product_contract_source: ce-plan-bootstrap
execution: code
---

# Works Page Figma Redesign - Plan

## Goal Capsule

- **Objective:** A visitor to `/works` sees Samuel's current, Figma-approved Selected Works listing — a full flat list of his real project roster with tags and descriptions — not the old two-column grid under a "Works" hero title.
- **Means:** Rebuild the page's Selected Works section to match Figma node `765:4908` using the existing homepage list pattern, and expand the shared project data to the full eight-entry roster that frame specifies.
- **Authority:** Figma node `765:4908` (file `MSkP29rAGfQBT3N9ekaVeM`) is authoritative for this page's layout and content order. The Homepage's own Figma node (`765:8015`, already implemented) remains authoritative for what the Homepage shows.
- **Stop conditions:** Stop and ask if a Figma-listed project's tags or imagery can't be resolved from the design-context export, or if decoupling the Homepage's Selected Works section breaks its current approved rendering.
- **Execution profile:** Sequential, single-implementer (or `ce-work`) execution; visual verification via the dev server after each unit, per the Verification Contract.
- **Who finishes and ships:** Samuel (repo owner) or an executing agent on his behalf; this repo has no external review gate.

---

## Product Contract

### Summary

Rebuilds `/works`' Selected Works section to match Samuel's updated Figma design (node `765:4908`): a single-column stacked list of all eight of his projects, replacing the current two-column grid and "Works" hero title. Expands the shared project data from four to Figma's full eight entries. The page's Gallery section, and a dedicated `/gallery` route, are deferred to a follow-up plan.

### Problem Frame

The live `/works` page still shows the pre-redesign layout: a "Works" hero heading followed by a two-column grid of four project cards. Samuel's updated Figma design drops the hero entirely and presents all eight of his projects as a single continuous list — image, category tags, name, and description — matching the list pattern already built for the Homepage's Selected Works section. The shared project data also needs to grow from four entries to Figma's eight to support this page.

### Key Decisions

- **KD1. The Gallery section and a dedicated `/gallery` route are deferred.** (session-settled: user-directed — chosen over building `/gallery` now from the current gallery grid with no Figma spec) Governs R4.
- **KD2. Project data grows to Figma's full eight-entry roster, with freshly written placeholder copy for the four new entries.** (session-settled: user-directed — chosen over limiting this page to the current four projects) Governs R1, R2.
- **KD3. The Homepage's Selected Works section keeps its current four-item curated order, decoupled from the full shared list.** (session-settled: user-directed — chosen over letting the Homepage's list grow to all eight or re-sync to this page's order) Governs R3.

### Requirements

**Page content & data**

- R1. `/works`' Selected Works section renders all eight of Figma's project entries, in Figma's order, as a single-column stacked list (image, tag pills, name, description) — replacing the current two-column `ProjectCard` grid and the "Works" H1 hero. (KD2)
- R2. The shared project data includes Figma's four new entries (Scale Health, Virally, Soigne Living, Holidayalot Landing Page Experience) with Figma-accurate tags and freshly written summary copy, and corrects the existing "Holidayalot Mobile" entry's display name and tags to match Figma's "Holidayalot App" listing. (KD2)

**Homepage decoupling**

- R3. The Homepage's Selected Works section continues to show only its current four projects, in their current order, unaffected by the project-data expansion in R2. (KD3)

**Work Details stability**

- R5. The Work Details "See Also" section's item count does not change as a side effect of the project-data expansion in R2. (KTD5)

**Deferred**

- R4. The Gallery section on `/works` and the `/works` → `/gallery` nav split are out of scope for this plan. (KD1)

### Scope Boundaries

- The Gallery grid currently on `/works` is left exactly as-is; it is not restyled, moved, or removed. (KD1)
- No new "GALLERY" nav link is added to `Navbar.astro` in this plan — that ships together with the dedicated `/gallery` page in the follow-up plan.
- The Homepage's "SEE ALL" link under Selected Works already points to `/works` and needs no change — verified during research, not a defect this plan fixes.
- Work Details page (`src/pages/works/[slug].astro`) layout/content redesign remains out of scope, as in the Homepage plan; this plan only ensures the four new project slugs resolve correctly on that route, and that the "See Also" section's size doesn't change as a side effect of R2 (R5).

#### Deferred to Follow-Up Work

- Dedicated `/gallery` page and its Figma-driven design.
- Site-wide nav update adding "GALLERY" alongside WORK/ABOUT/RESUME.

---

## Planning Contract

### Key Technical Decisions

- **KTD1. Reuse `SelectedWorkItem.astro` directly in `works.astro` rather than building a new component.** Figma's Works-listing item shape (300px image, tag-pill row, name, description) is identical to the component already built for the Homepage's Selected Works section — no new markup pattern is needed, only a new call site rendering the full `projects` array instead of a curated subset.
- **KTD2. Source images for the four new projects from Figma's own export for this frame, following the existing convention.** The Homepage plan established that Figma is the authoritative visual source and downloaded each new project's image into `public/images/projects/<slug>/`; this plan follows the same convention for Scale Health, Virally, Soigne Living, and Holidayalot Landing Page Experience. The four existing projects' images are left untouched — they already render correctly on the Homepage and Figma's crops for them are visually consistent.
- **KTD3. Decouple the Homepage from the shared array's order via explicit slug lookup, not a slice.** `SelectedWorks.astro` currently does `projects.map(...)` over the entire shared array. Figma's Works-listing order (`Ninenines, Migor, Holidayalot App, Scale Health, Virally, Soigne Living, Wills Bisgrove, Holidayalot Landing Page Experience`) does not match the Homepage's current order (`Ninenines, Migor, Holidayalot Mobile, Wills Bisgrove`) — "Wills Bisgrove" sits at a different position in each. A positional `.slice(0, 4)` can't satisfy both orderings from one linear array, so `SelectedWorks.astro` instead resolves its four slugs explicitly via `getProjectBySlug`, in the Homepage's own order. (KD3)
- **KTD4. "Holidayalot Landing Page Experience" is a new, distinct project from "Holidayalot Mobile."** Figma lists them separately with different tags (`LANDING PAGE DESIGN, TRAVEL` vs. `PRODUCT DESIGN, APP DESIGN, TRAVEL`) and different imagery. The existing `holidayalot-mobile` slug is retained and only its display name/tags are corrected to "Holidayalot App"; the landing-page project gets its own new slug, data entry, and image folder.
- **KTD5. `getRelatedProjects` caps its output instead of returning every other project.** It currently returns `projects.filter(p => p.slug !== currentSlug)` with no limit — 3 items today, but 7 once R2 grows the array to 8. Since Work Details' "See Also" layout is explicitly out of scope for a redesign, an uncapped fan-out would silently double that section's length on every one of the eight case-study pages, old and new alike. Capping it to a fixed count of 3 keeps "See Also" at its current visual size regardless of how large the catalog grows, mirroring KTD3's decoupling logic for the same underlying problem — an unrelated data change on `projects.ts` should not silently alter another page's rendered output. (R5)

### Assumptions

- Freshly written summary/title copy for Scale Health and Soigne Living (no prior repo content exists for either) follows the voice and length of the existing four entries — a short one-line `title` plus a paragraph `summary`, written to plausibly describe a product/web design case study, without claiming specific unverifiable metrics.
- Virally and Holidayalot Landing Page Experience may draw loosely on this repo's pre-redesign descriptions of similarly-named projects (git history) for tone, adapted to each entry's current Figma tags and scope — not copied verbatim, since Figma's own placeholder text for these entries carries no real content.
- The existing `holidayalot-mobile` slug and its case-study route stay stable (no URL change) even though its display name changes to "Holidayalot App," since nothing in the request calls for a URL change and the slug is otherwise just an identifier.

### Sources & Research

- Figma design-context export for node `765:4908` (`file MSkP29rAGfQBT3N9ekaVeM`) — the full item list, tags, and per-item image asset URLs used throughout this plan.
- `src/components/SelectedWorkItem.astro`, `src/components/SelectedWorks.astro` — the existing Homepage list pattern this plan reuses (KTD1).
- `src/data/projects.ts` and its git history (commit `732a1e7`) — prior "Virally" and "Holidayalot" descriptions informing the new entries' copy (see Assumptions).
- `docs/plans/2026-09-24-2346-feat-homepage-figma-redesign-plan.md` — established the Figma-sourced image convention (KTD2) and the site-wide divider/mobile-extrapolation precedents this plan carries forward unchanged.

---

## Implementation Units

### U1. Expand and correct shared project data

**Goal:** Grow `src/data/projects.ts` from four to Figma's eight entries — adding Scale Health, Virally, Soigne Living, and Holidayalot Landing Page Experience with their images, and correcting the existing "Holidayalot Mobile" entry's name/tags to match Figma's "Holidayalot App" listing.

**Requirements:** R2 (KD2), KTD2, KTD4

**Dependencies:** none

**Files:**
- `src/data/projects.ts`
- `public/images/projects/scale-health/` (new)
- `public/images/projects/virally/` (new — the pre-existing `public/images/projects/virally/` folder from before the Homepage redesign is unrelated leftover content and is not reused; source fresh from Figma per KTD2)
- `public/images/projects/soigne-living/` (new)
- `public/images/projects/holidayalot-landing/` (new)

**Approach:**
- Download each new project's image from the Figma export for node `765:4908` into its own new folder, per KTD2.
- Add four new `Project` entries (slugs: `scale-health`, `virally`, `soigne-living`, `holidayalot-landing`) with Figma's exact tags, a freshly written `title`/`summary`/`contribution(s)`/`year` per the Assumptions, and the downloaded image path.
- Update the existing `holidayalot-mobile` entry's `name` to "Holidayalot App" and `tags` to `['PRODUCT DESIGN', 'APP DESIGN', 'TRAVEL']`; leave its slug, image, summary, and other fields unchanged.
- Insert the four new entries in Figma's listing order relative to the existing four, so the array's order is: Ninenines, Migor, Holidayalot App, Scale Health, Virally, Soigne Living, Wills Bisgrove, Holidayalot Landing Page Experience.

**Patterns to follow:** The existing four `Project` entries in `src/data/projects.ts` for field shape and tone; the Homepage plan's U4 for the image-download convention.

**Test scenarios:**
- Test expectation: none -- static data and asset addition; correctness is verified through the pages that consume it (U2, and the existing Work Details route).

**Verification:** Confirm `getProjectBySlug` resolves all eight slugs, `npm run build` generates a Work Details page for each of the four new slugs without runtime errors, and each new image file loads at its referenced path.

---

### U2. Rebuild `/works`' Selected Works section

**Goal:** Replace `/works`' "Works" hero and two-column `ProjectCard` grid with a single-column stacked list of all eight projects, using the existing `SelectedWorkItem` component and matching Figma's order and section-title treatment.

**Requirements:** R1 (KD2), KTD1

**Dependencies:** U1

**Files:**
- `src/pages/works.astro`

**Approach:**
- Remove the "Works" H1 hero section entirely, but keep a semantic `<h1>` for page-level orientation — a visually-hidden (`sr-only`) "Works" heading — since `SectionTitle.astro` renders its label in a `<span>`, not a heading, and `BaseLayout.astro` supplies no `<h1>` of its own; without it the page would have no top-level heading for screen-reader navigation.
- Replace the Selected Works grid `<section>` with a `content-divider`-wrapped section rendering a `SectionTitle` labeled "Selected Works" followed by all `projects` entries via `SelectedWorkItem`, one per row, matching the 700px-max-width column and gap spacing already used on the Homepage's equivalent section.
- Leave the Gallery `<section>` below it completely unchanged (KD1) — it keeps its current `section-border` class as the page's last section before the footer.
- Remove the now-unused `ProjectCard` import from this file only if nothing else in it references `ProjectCard`.

**Patterns to follow:** `src/components/SelectedWorks.astro`'s section structure (title, 700px column, item list) as the direct template for this section's markup.

**Test scenarios:**
- Happy path: all eight projects render in Figma's order with correct image, tags, name, and description, each linking to its `/works/<slug>` page.
- Edge case: a project with a single tag (none currently, but the component must not assume 2+) still renders its tag row without a layout gap.
- Accessibility: the page exposes exactly one `<h1>` (the visually-hidden "Works" heading) discoverable via heading-based navigation, even though no hero text is visible.
- Test expectation for the Gallery section: none -- unchanged code, no behavior to verify.

**Verification:** Visually compare the rendered section against the Figma screenshot for node `765:4908` at desktop and mobile widths, in both themes; confirm the Gallery section below it still renders exactly as before; confirm a heading-navigation check (e.g. browser accessibility tree or a screen reader) finds the page's `<h1>`.

---

### U3. Decouple Homepage's Selected Works from the full shared list

**Goal:** Change `SelectedWorks.astro` so the Homepage keeps showing only its current four projects in their current order, unaffected by `projects.ts` growing to eight.

**Requirements:** R3 (KD3), KTD3

**Dependencies:** U1

**Files:**
- `src/components/SelectedWorks.astro`

**Approach:**
- Replace the `projects.map(...)` call with an explicit ordered list of the four slugs (`ninenines`, `migor`, `holidayalot-mobile`, `wills-bisgrove`) resolved via `getProjectBySlug`, preserving the Homepage's current rendered order.
- Leave the "SEE ALL" link (already pointing to `/works`) unchanged.

**Patterns to follow:** `src/data/projects.ts`'s existing `getProjectBySlug` helper.

**Test scenarios:**
- Happy path: Homepage's Selected Works section renders exactly the same four projects, in the same order, as before `projects.ts` grew to eight entries.
- Test expectation: none beyond the happy-path check above -- no new interactive behavior.

**Verification:** Load the Homepage in the dev server after U1 lands; confirm the Selected Works section is visually identical to its pre-expansion state, and that "SEE ALL" still navigates to `/works`.

---

### U4. Cap Work Details' "See Also" related-projects list

**Goal:** Prevent `getRelatedProjects` from fanning out to every other project once `projects.ts` reaches eight entries, keeping the Work Details "See Also" section at its current size regardless of catalog growth.

**Requirements:** R5, KTD5

**Dependencies:** U1

**Files:**
- `src/data/projects.ts`

**Approach:**
- Change `getRelatedProjects` to return at most 3 entries after filtering out the current slug, instead of every remaining project.
- Leave `src/pages/works/[slug].astro`'s consumption of `relatedProjects` and its `ProjectCard` rendering unchanged — this unit only bounds the data it receives.

**Patterns to follow:** The existing `getRelatedProjects` function signature and its single call site in `src/pages/works/[slug].astro`.

**Test scenarios:**
- Happy path: on a project page, "See Also" renders exactly 3 related projects once `projects.ts` has eight entries, never the current page's own project.
- Edge case: this behavior is unchanged for today's four-entry array, where 3 related projects is already the full remaining set.

**Verification:** Load a pre-existing project's Work Details page (e.g. `/works/ninenines`) and a new one (e.g. `/works/scale-health`) after U1 and U4 land; confirm each "See Also" section renders exactly 3 cards, matching its pre-expansion size and layout.

---

## Verification Contract

| Check | Command / Method | Applies to |
|---|---|---|
| Build succeeds | `npm run build` | All units |
| Visual match — Works page | Dev server vs. Figma node `765:4908` screenshot, desktop + mobile, both themes | U2 |
| Visual match — Homepage unaffected | Dev server vs. pre-change Homepage screenshot | U3 |
| New routes resolve | `npm run build` generates `/works/scale-health`, `/works/virally`, `/works/soigne-living`, `/works/holidayalot-landing` | U1 |
| "See Also" size unchanged | Load a pre-existing and a new project's Work Details page; confirm "See Also" still renders 3 cards | U4 |
| Page has a top-level heading | Confirm `/works` exposes exactly one `<h1>`, even with the visible hero removed | U2 |

No automated test suite exists in this repo (confirmed: `package.json` has no test script); verification is build success plus manual visual comparison, consistent with the Homepage plan.

---

## Definition of Done

- All four units implemented and individually verified per their Verification field.
- `npm run build` succeeds with no errors, and the `dist/` output is removed after the final check (not committed).
- The Works page's Selected Works section visually matches Figma node `765:4908` at desktop and mobile widths, in both themes, and exposes a single top-level `<h1>` for accessibility.
- The Homepage's Selected Works section is visually unchanged from before this plan.
- Every Work Details page's "See Also" section still renders 3 related projects, unchanged in size from before this plan.
- No dead code left behind: if `ProjectCard` becomes unused by `works.astro`, its other call site (`works/[slug].astro`'s "See Also" grid) is confirmed to still need it before leaving it in place.
