# Phase 3 — Authority, Curation & Comparisons (Month 3)

**Target ship date:** _________

**Phase goal:** 25 pages that build topical authority and capture brand-vs-brand / best-of queries. 8 curation pages, 7 head-to-head comparisons, 10 location + broader-service spokes.

---

## Before you start

Re-read (if fresh session):
- `.agent/skills/site-redesign/SKILL.md`
- `.agent/skills/programmatic-seo/SKILL.md`
- `sites/precision-jiu-jitsu-barracks/seo-roadmap/roadmap.md`
- `sites/precision-jiu-jitsu-barracks/seo-roadmap/keywords.json`
- Previous phase prompts for template reference

---

## Pages to build in Phase 3 (25 total)

### A. Curation / "Best-of" (8 pages) — URL: `/best/{slug}/`

| # | URL slug | Query |
|---|----------|-------|
| 1 | best-bjj-gym-in-collegeville | Best BJJ Gym in Collegeville, PA |
| 2 | best-bjj-gym-in-montgomery-county | Best BJJ Gym in Montgomery County |
| 3 | best-kids-bjj-in-collegeville | Best Kids BJJ in Collegeville, PA |
| 4 | best-kids-martial-arts-in-montgomery-county | Best Kids Martial Arts in Montgomery County |
| 5 | best-mma-gym-in-montgomery-county | Best MMA Gym in Montgomery County, PA |
| 6 | best-muay-thai-in-collegeville | Best Muay Thai in Collegeville, PA |
| 7 | best-womens-bjj-in-pa | Best Women's BJJ in Pennsylvania |
| 8 | best-bjj-gym-near-king-of-prussia | Best BJJ Gym Near King of Prussia |

**Curation-page template:**

- **Title tag (50-60 chars):** "Best {Thing} in {City} — 2026 Guide | Precision Jiu-Jitsu"
- **Meta description:** 150-160 chars, include "What to look for" + self-mention
- **H1:** "Best {Thing} in {City}, PA"
- **Canonical:** `/best/{slug}/`

**Content outline (700-1,200 words):**
1. Intro — "We run The Barracks in Schwenksville. We're biased, but we'll tell you what to look for honestly — even if that's not us for every student." (Authority + honesty = ranking signal)
2. **"What to look for in a {thing}"** — 5-7 objective criteria (black belt instruction, insurance, clean mats, women-welcoming, real competition pedigree, transparent pricing, etc.)
3. **"What The Barracks offers"** — map each criterion to specific Precision features (Pete's credentials, 8 coaches, 35+ classes/week, etc.)
4. **"Who we're NOT the right fit for"** — counter-intuitive honesty: "If you're hunting a $49/month strip-mall McDojo, we're not it. If you want pressure-tested black belt instruction with a family-friendly room, come train with us." (This kind of honesty ranks well for "best" queries because it differentiates.)
5. Optional: brief nod to 1-2 other regional BJJ academies (don't disparage, just acknowledge they exist for context — Google treats this as E-E-A-T positive)
6. CTA — free week
7. Footer with MMA Marketing Pro attribution

**Schema:** `Article` + `BreadcrumbList` + `ItemList` (listing the "what to look for" criteria) + `LocalBusiness` reference to `#business` `@id`.

### B. Comparison pages (7 pages) — URL: `/compare/{slug}/`

| # | URL slug | Title |
|---|----------|-------|
| 9 | bjj-vs-wrestling | BJJ vs Wrestling — Differences, Overlap, and How Precision Teaches Both |
| 10 | bjj-vs-muay-thai | BJJ vs Muay Thai — Grappling vs Striking, Explained |
| 11 | bjj-vs-karate | BJJ vs Karate — Which Is Right for You or Your Kid? |
| 12 | bjj-vs-judo | BJJ vs Judo — Similar Roots, Different Arts |
| 13 | gi-vs-no-gi-bjj | Gi vs No-Gi BJJ — What Changes and Why |
| 14 | muay-thai-vs-kickboxing | Muay Thai vs Kickboxing — The Real Differences |
| 15 | kids-bjj-vs-karate | Kids BJJ vs Karate — Which Builds Better Character? |

**Comparison-page template:**

- **Title tag:** "{X} vs {Y}: Which Is Better For You? | Precision Jiu-Jitsu"
- **Meta description:** 150-160 chars with primary keyword
- **H1:** "{X} vs {Y}: {sub-question}"
- **Canonical:** `/compare/{slug}/`

**Content outline (800-1,400 words):**
1. TL;DR — 50-80 word summary at the top (answers the question immediately for snippet capture)
2. Side-by-side comparison table — styles, ruleset, training focus, fitness benefits, self-defense application, competition paths
3. "Which is right for…" sections — beginners, kids, competitors, self-defense, fitness
4. "At Precision, we teach…" — explain how The Barracks handles both disciplines (wrestling-infused BJJ, striking-grappling crossover, etc.)
5. Pete's or a coach's perspective quote
6. CTA — "Try both in one free week"
7. Related glossary links + link back to `/programs.html`

**Schema:** `Article` + `BreadcrumbList` + optional `ComparisonTable` via `ItemList` structure.

### C. More locations + broader-service spokes (10 pages) — URL: `/locations/{slug}/`

| # | URL slug | Service | Neighborhood |
|---|----------|---------|--------------|
| 16 | adult-bjj-spring-mount | Adult BJJ | Spring Mount |
| 17 | kids-bjj-10-14-spring-mount | Kids BJJ 10-14 | Spring Mount |
| 18 | kids-bjj-7-10-spring-mount | Kids BJJ 7-10 | Spring Mount |
| 19 | muay-thai-spring-mount | Muay Thai | Spring Mount |
| 20 | no-gi-bjj-collegeville | No-Gi BJJ | Collegeville |
| 21 | no-gi-bjj-schwenksville | No-Gi BJJ | Schwenksville |
| 22 | mma-gym-collegeville | MMA Gym | Collegeville |
| 23 | kids-martial-arts-collegeville | Kids Martial Arts | Collegeville |
| 24 | self-defense-classes-collegeville | Self-Defense Classes | Collegeville |
| 25 | wrestling-classes-collegeville | Wrestling Classes | Collegeville |

Use the Phase 1 location-spoke template. For the broader-service pages (20-25), customize:
- Frame the page around the search term (e.g., "No-Gi BJJ in Collegeville" = our Adult BJJ program No-Gi offering)
- Map back to the actual program offered (so "MMA Gym in Collegeville" explains our BJJ + Muay Thai + wrestling curriculum together)

---

## Integration

1. Update `sitemap.xml` with 25 new entries
2. Create `/best/index.html` and `/compare/index.html` hub index pages if they don't exist yet
3. Link Phase 3 pages from the homepage's gallery-bento CTAs where relevant
4. Audit via `/seo-audit`

---

## Post-build checklist

1. `/seo-audit`
2. Sitemap updated
3. Spot-check 5 pages in browser
4. Commit: `feat: phase-3 SEO expansion — 25 curation + comparison + location pages`
5. Push → deploy
6. Check Search Console in 7-10 days

---

## Agency attribution on every page

```html
<p class="powered-by">
  Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a>
</p>
```
