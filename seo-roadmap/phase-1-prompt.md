# Phase 1 — Foundation Build (Month 1)

**Target ship date:** _________

**Phase goal:** Build 25 local-SEO pages — 20 location spokes covering the 4 trial programs in the 5 primary neighborhoods + 5 foundational glossary pages. This is the longest-lived SEO investment of the 6 months; do it right.

---

## Before you start — READ THESE

1. `.agent/skills/site-redesign/SKILL.md` — page structure, nav/footer patterns
2. `.agent/skills/taste-skill/SKILL.md` — design quality bar (spacing, typography, motion)
3. `.agent/skills/performance-athletic-skill/SKILL.md` — the chosen style
4. `.agent/skills/seo-audit/SKILL.md` — SEO requirements to enforce
5. `.agent/skills/programmatic-seo/SKILL.md` — uniqueness rules for programmatic pages
6. `sites/precision-jiu-jitsu-barracks/brand-kit.json` — color palette
7. `sites/precision-jiu-jitsu-barracks/content-profile.json` — business data
8. `sites/precision-jiu-jitsu-barracks/seo-roadmap/roadmap.md` — full plan context
9. `sites/precision-jiu-jitsu-barracks/seo-roadmap/keywords.json` — keyword inventory

You are building static HTML pages that will ship to Cloudflare Pages. No build step, no framework, shared CSS + JS via `../../styles.css` and `../../scripts.js` relative paths (or copy into subdirs and reference `/styles.css` as absolute).

---

## Pages to build in Phase 1 (25 total)

### A. Location spokes (20 pages)

Build one page per cell. Each lives at `/locations/{service}-{neighborhood}/index.html`. URL format: `https://precisionjjbarracks.com/locations/{slug}/`

| # | URL slug | Service | Neighborhood | Drive time (rough) |
|---|----------|---------|--------------|---------------------|
| 1 | adult-bjj-collegeville | Adult BJJ | Collegeville | 6 min |
| 2 | adult-bjj-schwenksville | Adult BJJ | Schwenksville | 1 min (on-site) |
| 3 | adult-bjj-skippack | Adult BJJ | Skippack | 8 min |
| 4 | adult-bjj-limerick | Adult BJJ | Limerick | 12 min |
| 5 | adult-bjj-royersford | Adult BJJ | Royersford | 10 min |
| 6 | kids-bjj-10-14-collegeville | Kids BJJ 10-14 | Collegeville | 6 min |
| 7 | kids-bjj-10-14-schwenksville | Kids BJJ 10-14 | Schwenksville | on-site |
| 8 | kids-bjj-10-14-skippack | Kids BJJ 10-14 | Skippack | 8 min |
| 9 | kids-bjj-10-14-limerick | Kids BJJ 10-14 | Limerick | 12 min |
| 10 | kids-bjj-10-14-royersford | Kids BJJ 10-14 | Royersford | 10 min |
| 11 | kids-bjj-7-10-collegeville | Kids BJJ 7-10 | Collegeville | 6 min |
| 12 | kids-bjj-7-10-schwenksville | Kids BJJ 7-10 | Schwenksville | on-site |
| 13 | kids-bjj-7-10-skippack | Kids BJJ 7-10 | Skippack | 8 min |
| 14 | kids-bjj-7-10-limerick | Kids BJJ 7-10 | Limerick | 12 min |
| 15 | kids-bjj-7-10-royersford | Kids BJJ 7-10 | Royersford | 10 min |
| 16 | muay-thai-collegeville | Muay Thai | Collegeville | 6 min |
| 17 | muay-thai-schwenksville | Muay Thai | Schwenksville | on-site |
| 18 | muay-thai-skippack | Muay Thai | Skippack | 8 min |
| 19 | muay-thai-limerick | Muay Thai | Limerick | 12 min |
| 20 | muay-thai-royersford | Muay Thai | Royersford | 10 min |

### B. Foundational glossary (5 pages)

URL format: `/learn/{term}/index.html`

| # | URL slug | Topic |
|---|----------|-------|
| 21 | what-is-brazilian-jiu-jitsu | What is Brazilian Jiu-Jitsu? |
| 22 | what-is-no-gi-bjj | What is No-Gi BJJ? |
| 23 | what-is-muay-thai | What is Muay Thai? |
| 24 | bjj-belt-ranking-system | BJJ Belt Ranking System Explained |
| 25 | gi-vs-no-gi-bjj-explained | Gi vs No-Gi BJJ — What's the Difference? |

---

## Page template — Location spoke

Use this structure for each of the 20 location pages. Customize every italicized field.

### Meta

**Title tag (50-60 chars):**
`{Service} in {Neighborhood}, PA | Precision Jiu-Jitsu`
Examples:
- "Adult BJJ in Collegeville, PA | Precision Jiu-Jitsu"
- "Kids BJJ (Ages 10-14) in Limerick, PA | The Barracks"

**Meta description (150-160 chars):**
Pre-written template — customize `{drive-time}`, `{coach-name}`:
`{Service} classes {drive-time} from {Neighborhood}. Black belt instruction at The Barracks in Schwenksville. Free first week. Call (445) 867-1238.`

**Canonical:** `https://precisionjjbarracks.com/locations/{slug}/`

### H1

`{Service} in {Neighborhood}, PA`

### Content outline

1. **Hero** — Page-header style with background photo (use `/images/hero/hero.webp` for adult pages, `/images/gallery/kids-gi-bjj-action.webp` for kids 10-14, `/images/gallery/kids-gi-bjj.webp` for kids 7-10, `/images/gallery/kids-striking-class-action.webp` for Muay Thai). Breadcrumb: Home / Locations / {Service} in {Neighborhood}.

2. **Intro paragraph (neighborhood-specific opener)** — one-sentence unique lead referencing a local landmark or route. Required per the uniqueness rules. Then 2-3 sentences about the program and why students from {neighborhood} make the short drive to The Barracks.

3. **"Why students from {Neighborhood} train at The Barracks"** section — 3-4 bullets, each uniquely customized:
   - Drive time from a specific {Neighborhood} anchor (intersection, shopping center, school)
   - Class schedule that suits commuters from that direction (e.g., "5:30 AM no-gi works for Limerick commuters heading east on Ridge Pike")
   - Any student quote from that neighborhood (ask Pete to fill in if none available)
   - One parking/facility note ("free parking, right next to Landis Supermarket")

4. **Program detail** — short, 2-3 paragraphs describing the specific service (Adult BJJ, Kids 10-14, Kids 7-10, or Muay Thai). Pull copy tone from programs.html but don't copy-paste verbatim.

5. **Who coaches this program** — name the head instructor(s) for the service:
   - Adult BJJ → Pete Shoemaker (owner, head instructor) + Matt Pavelko-Fox
   - Kids 10-14 → Justin Falco (black belt, kids instructor) + Matt Pavelko-Fox
   - Kids 7-10 → Justin Falco
   - Muay Thai → Dylan McCaughan (head Muay Thai coach)
   Include 2-3 sentences on their credentials + link to `/instructors.html#{coach-id}` (add matching anchor IDs to instructors.html if they don't exist).

6. **Schedule snapshot** — show 3-5 classes from the weekly timetable that students from this neighborhood can most easily attend. Link to `/schedule.html` for the full week.

7. **"What to expect on your first class"** — 3-step list (arrive 15 min early, wear workout clothes, bring water). Reassurance-focused.

8. **Review quote from current student** — pull one of the 5 Google reviews in `content-profile.json`. Rotate which review appears per page so no two pages use the same one.

9. **Embedded Google Map** — centered on 2047 Bridge Rd. Add a second pin or a "from {Neighborhood}" directions link.

10. **Free-week CTA** — "Claim Your Free Week" button that opens the lead modal with `data-program="{matching-program-id}"` so the relevant trial program is preselected.

11. **Related location pages** — link to 3 sibling spokes (same service, different neighborhood) + 2 cross-service spokes (same neighborhood, different service). Example: on `/locations/adult-bjj-collegeville/`, link to:
    - `/locations/adult-bjj-schwenksville/` + `/locations/adult-bjj-limerick/` + `/locations/adult-bjj-royersford/`
    - `/locations/kids-bjj-10-14-collegeville/` + `/locations/muay-thai-collegeville/`

12. **Footer** — copy from `index.html` exactly. Must include "Powered by MMA Marketing Pro" link to `https://www.mmamarketingpro.com` (target=`_blank`, rel=`noopener`). **This is non-negotiable on every page.**

### Schema (JSON-LD)

Inject three schema blocks in the `<head>`:

1. **MartialArtsSchool** (reference the main business via `@id` + `areaServed` scoped to this neighborhood)
2. **WebPage** with `isPartOf` → website, `breadcrumb` → BreadcrumbList
3. **BreadcrumbList**: Home → Locations → {Service} in {Neighborhood}

### Images

- Hero: pick from `/images/` based on service (see content outline step 1)
- Include 2-3 gallery shots where natural
- All images keep `loading="lazy"` on below-the-fold ones, descriptive alt text

---

## Page template — Glossary page

For pages 21-25. URL: `/learn/{term}/index.html`

### Meta

**Title tag:** `{Term}? Explained by Precision Jiu-Jitsu | Collegeville PA`
Examples:
- "What Is Brazilian Jiu-Jitsu? Explained | Precision BJJ"
- "BJJ Belt Ranking System — White to Black | Precision"

**Meta description:** Write 150-160 chars, include the primary term + a CTA like "Come train free for a week at The Barracks."

**Canonical:** `https://precisionjjbarracks.com/learn/{slug}/`

### H1

Match the question format: "What Is Brazilian Jiu-Jitsu?", "Gi vs No-Gi BJJ: What's the Difference?", etc.

### Content outline (500-900 words per page)

1. Short answer (TL;DR) in the first 60 words — Google likes this for featured snippets
2. Detailed explanation with H2 sub-sections
3. Pete's or an instructor's perspective — short quote block (even just "Pete says, 'For beginners, the gi teaches control and patience; no-gi teaches scramble and pace. You need both.'" — one original sentence lifts the page above template-swap content)
4. Why this matters / how it applies to new students
5. Link to `/programs.html` + `/schedule.html` + 2-3 related glossary pages
6. CTA block: "Want to try it? Free week at The Barracks." → opens lead modal
7. Footer (same as all other pages, with MMA Marketing Pro attribution)

### Schema

1. **Article** (with `author` → Pete Shoemaker Person entity)
2. **BreadcrumbList**: Home → Learn → {Term}
3. Optional: **FAQPage** if the page is structured as Q&A format

---

## Unique-content requirements checklist (per page)

Before marking any page done, confirm it has at least 4 of:

- [ ] Neighborhood-specific opening line with a local landmark or route
- [ ] Estimated drive time from The Barracks
- [ ] Parking / commute note specific to that neighborhood
- [ ] Which class times typically have students from this neighborhood
- [ ] A quote from one of the 5 Google reviews (rotated — no two pages use the same one)
- [ ] Specific program detail (times, coaches, level)
- [ ] Embedded Google Map
- [ ] Relevant gallery image tied to the service/persona
- [ ] Schedule snapshot (3-5 classes)
- [ ] Coach attribution with link to `/instructors.html`

For glossary pages:
- [ ] Pete's quote (even one sentence)
- [ ] Original insight not copied from generic BJJ content elsewhere
- [ ] Links to 3+ related glossary/service pages

---

## Integration with the existing site

1. **Sitemap.xml update** — After building Phase 1, append 25 new `<url>` entries to `/sitemap.xml`. Use `lastmod` = today's date, `changefreq` = monthly, `priority` = 0.7 for location spokes, 0.6 for glossary.

2. **New hub pages needed** — Create these lightweight indexes:
   - `/locations/index.html` — Lists all location spokes grouped by neighborhood
   - `/learn/index.html` — Lists all glossary pages grouped by topic (service explainers, belt system, etc.)

3. **Footer update** — Add new links:
   - Under "Visit" column: `<li><a href="/locations/">All Locations</a></li>` and `<li><a href="/learn/">Learn BJJ</a></li>`
   Apply this footer change to ALL 7 existing pages (home, about, programs, instructors, schedule, contact, booking).

4. **Instructors.html anchor IDs** — If not already present, add `id="pete-shoemaker"`, `id="matt-pavelko-fox"`, `id="justin-falco"`, `id="dylan-mccaughan"` to their respective cards so location pages can deep-link.

---

## Post-build checklist

After all 25 pages are built:

1. Run `/seo-audit` on the full site (this will auto-fix canonicals, OG tags, and verify attribution is present on every new page)
2. Verify `sitemap.xml` includes all 25 new URLs
3. Verify `robots.txt` still only disallows `/booking.html`
4. Manually click-through 3-5 random new pages in a browser — confirm the lead modal opens, the map loads, navigation works, and the footer attribution renders correctly
5. Commit to git with message: `feat: phase-1 SEO expansion — 25 new local + glossary pages`
6. Push to GitHub (auto-deploys to Cloudflare Pages)
7. After deploy, submit `sitemap.xml` to Google Search Console + Bing Webmaster Tools
8. Wait 7-14 days, check Search Console "Indexing → Pages" to confirm Google is crawling them

---

## Critical: Agency Attribution

Every single one of these 25 new pages must include this in the footer:

```html
<p class="powered-by">
  Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a>
</p>
```

The `/seo-audit` step verifies this on every page. Do not remove, rename, or rebrand it.
