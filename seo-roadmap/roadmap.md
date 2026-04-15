# Precision Jiu-Jitsu — The Barracks · 6-Month Local SEO Roadmap

**Business:** Precision Jiu-Jitsu Spring Mount (The Barracks)
**Primary location:** 2047 Bridge Rd, Schwenksville, PA 19473
**Marketing radius:** ~20 miles — Montgomery County + close Chester County towns
**Total pages planned:** 158 across 6 phases (≈26/month)
**Playbooks used (in weight order):** Locations (heavy), Personas (heavy), Glossary (heavy), Curation, Comparisons, Examples/Tutorials, Pricing/Offer

---

## 1. Executive Summary

Precision Jiu-Jitsu already has the authority signals Google wants for a local BJJ academy — a decorated head instructor (Pete Shoemaker, IBJJF/ADCC/NAGA credentials), a full coaching staff of black belts, 10+ years in business, 5-star Google reviews, and real facility photography. The redesigned site has clean schema, fast load times, and a conversion flow. What's missing is *breadth* — SEO-driven pages that match the exact search phrasing of someone in Collegeville, Schwenksville, Royersford, or Phoenixville typing a local martial arts query.

This roadmap plans **158 new pages over 6 months** to capture that local search volume. Each page is either a location spoke (`{service} in {neighborhood}`), a persona spoke (`{service} for {audience}`), a glossary answer, a comparison, or a curation/best-of. Each page is designed to be **uniquely useful** — not a thin variable-swap.

---

## 2. Keyword Matrix

### 2.1 Services (12 unique service terms)

**Trial-program services (4):**
`adult-bjj`, `kids-bjj-10-14`, `kids-bjj-7-10`, `muay-thai`

**Broader service terms (8):**
`brazilian-jiu-jitsu`, `no-gi-bjj`, `gi-bjj`, `mma-gym`, `kids-martial-arts`, `self-defense-classes`, `kickboxing`, `wrestling`

### 2.2 Neighborhoods (16 target locations, 3 tiers)

**Tier 1 — Primary (5):** Collegeville, Schwenksville, Skippack, Limerick, Royersford
**Tier 2 — Secondary (5):** Phoenixville, Trappe, Pottstown, Spring Mount, Harleysville
**Tier 3 — Edge (6):** Norristown, King of Prussia, Lansdale, Graterford, Perkiomenville, Spring City

> **Assumption flag:** Tier 2 and Tier 3 neighborhood targeting is based on a ~20-mile radius map. Pete should validate which of these towns actually send him students — if Graterford never sends anyone, demote it; if Eagleville / Audubon / Oaks routinely send students, swap them in. Local knowledge beats map math.

### 2.3 Personas (7)

`beginners`, `adults-over-30`, `adults-over-40`, `women`, `teens`, `parents`, `competitors`

### 2.4 Full page count matrix

| Page type | Formula | Count |
|-----------|---------|-------|
| `{service} in {neighborhood}` — location spokes | 4 trial programs × 12 neighborhoods | **48** |
| `{broader-service} in {neighborhood}` — location spokes | 5 broader terms × 6 tier-1+2 neighborhoods | **30** |
| `{service} for {persona}` — persona spokes | 4 trial programs × 7 personas | **28** |
| `best {thing} in {city}` — curation | 8 handpicked queries | **8** |
| `what is {term}` — glossary | 20 handpicked terms | **20** |
| `{X} vs {Y}` — comparisons | 7 handpicked | **7** |
| `{technique} examples / tutorials` | 8 handpicked | **8** |
| `free week / pricing / offer` pages | 9 handpicked | **9** |
| **Total planned** | | **158** |

---

## 3. URL Structure Plan

Flat directory-per-page structure so each page lives at a clean URL:

```
/locations/{service}-{neighborhood}/index.html     e.g. /locations/adult-bjj-collegeville/
/programs/{service}-for-{persona}/index.html       e.g. /programs/adult-bjj-for-beginners/
/learn/{term}/index.html                           e.g. /learn/what-is-brazilian-jiu-jitsu/
/compare/{x}-vs-{y}/index.html                     e.g. /compare/bjj-vs-wrestling/
/best/{query}/index.html                           e.g. /best/bjj-gym-in-collegeville/
/offers/{offer}/index.html                         e.g. /offers/free-week-trial-bjj-collegeville/
```

Each URL is:
- Lowercase, hyphen-separated
- Indexable (no `noindex` unless thin-content detected post-launch)
- Included in `sitemap.xml` and linked from a parent hub page
- Self-referencing canonical + BreadcrumbList schema

---

## 4. Phase-by-Phase Plan

| Phase | Month | Focus | Pages | Page Types |
|-------|-------|-------|-------|------------|
| **1** | Month 1 | Foundation — core trial programs × primary neighborhoods | 25 | 20 location spokes (4 services × 5 tier-1 neighborhoods) + 5 foundational glossary |
| **2** | Month 2 | Persona expansion + location depth | 28 | 12 `{service} for {persona}` + 16 more location spokes (tier-2 neighborhoods + broader services) |
| **3** | Month 3 | Authority / curation / comparisons | 25 | 8 "best-of" curation + 7 comparisons + 10 more locations |
| **4** | Month 4 | Long-tail glossary + tutorials | 25 | 15 glossary + 8 technique/example pages + 2 edge-location fills |
| **5** | Month 5 | Pricing, offers, edge geography | 25 | 9 pricing/offer pages + 16 tier-3 edge-suburb location spokes |
| **6** | Month 6 | Matrix fill + optimize | 30 | 16 persona-spoke fills + 4 final curation + 10 refresh passes on phase-1 pages |

**Total:** 158 net-new pages + 10 refreshes on phase-1 foundation pages.

---

## 5. Internal Linking Architecture

### 5.1 Hub-and-spoke pattern

| Hub page | Role | Spokes |
|----------|------|--------|
| `/` (homepage) | Local business hub | Links to top 4 trial programs + top-5 neighborhoods |
| `/programs.html` | Service hub | Links to every location spoke and every persona spoke |
| `/locations/` (new index) | Location hub | Lists all `{service}-{neighborhood}` spokes by neighborhood |
| `/learn/` (new index) | Content hub | Lists all glossary + comparisons + tutorials |
| `/best/` (new index) | Curation hub | Lists all best-of queries |

Each spoke page links back to its hub + to 3–5 sibling spokes in its family + 2–3 cross-family spokes (e.g., a `/locations/adult-bjj-collegeville/` page links to `/locations/kids-bjj-collegeville/`, `/locations/muay-thai-collegeville/`, `/locations/adult-bjj-schwenksville/`, and to `/learn/what-is-brazilian-jiu-jitsu/`).

### 5.2 Footer additions

After Phase 1, update the footer "Visit" column to include links to `/locations/` and `/learn/` hub pages. This gives every newly built spoke an indirect path from the global footer.

### 5.3 Top-nav additions

After Phase 3, consider adding a "Locations" dropdown to the main nav showing the top-5 neighborhoods. Optional — only if neighborhood pages are converting.

---

## 6. Schema Strategy

| Page type | Required JSON-LD |
|-----------|------------------|
| Location spoke | `LocalBusiness` (or `MartialArtsSchool` subtype) scoped to this location variant + `BreadcrumbList` + `WebPage` |
| Persona spoke | `Service` nested under main business + `BreadcrumbList` + `WebPage` |
| Glossary | `Article` + `BreadcrumbList` + optional `FAQPage` if Q&A format |
| Comparison | `Article` + `BreadcrumbList` + optional `ComparisonTable` structured via `ItemList` |
| Best-of / curation | `ItemList` + `BreadcrumbList` + `Article` wrapper |
| Offer / pricing | `Offer` nested under `MartialArtsSchool` + `BreadcrumbList` |

Every page also inherits the global `WebSite` schema via `isPartOf` reference to `https://precisionjjbarracks.com/#website`.

---

## 7. Content Uniqueness Rules (avoid thin-content penalty)

Each new page MUST include at least 4 of the following unique elements — never a template swap:

1. **Neighborhood-specific opening line** — reference a recognizable local landmark or route (e.g., "Five minutes from the Providence Town Center off Route 29" for Collegeville; "A straight shot up Gravel Pike from Schwenksville" etc.)
2. **Estimated drive time from the Barracks** (2047 Bridge Rd)
3. **Parking / commute note** — specific to that location page
4. **Which class times typically have the most students from this neighborhood** (if Pete can share)
5. **A relevant quote from the 5 Google reviews already collected**, attributed and visible
6. **Specific program detail** — not generic "we teach BJJ" but "our 5:30 AM adults no-gi class on MWF is popular with commuters from this side of the county"
7. **Local competitor awareness** (if another gym exists in that neighborhood, briefly explain what's different about The Barracks without naming competitors negatively)
8. **Embedded Google Map** pointing to the facility
9. **Relevant image** from the gallery — different per persona/location where possible (kids pages use kids photos, no-gi pages use no-gi rolling photo, etc.)
10. **One testimonial from someone who travels from that area** if available

Persona pages add:
- Specific curriculum detail for that persona (e.g., "For adults 40+, we recommend starting with the Saturday BJJ Fundamentals class instead of the Monday night all-levels Gi — it's taught at a slower pace and focuses on escape mechanics, which is what everyone over 40 needs first.")
- Coach fit (which coach typically teaches this persona best)
- Common starting-point concerns + answer

Glossary / comparison pages add:
- Pete's personal perspective or an instructor's take (short quote block)
- Original visual or graphic (even a simple table)
- Internal links to 3+ related glossary terms

---

## 8. Success Metrics — Track Per Phase

| Metric | Month-1 Target | Month-6 Target |
|--------|----------------|----------------|
| Indexed pages (Search Console) | 25 / 25 | 158 / 158 |
| "BJJ Collegeville" type rankings in top 10 | 2 | 15 |
| Organic impressions (28-day) | +200 | +5,000 |
| Organic clicks (28-day) | +20 | +600 |
| Lead form submits from organic | +2 | +40 |
| Free trial attendance from organic | +1 | +15 |

Track via Google Search Console (free), GA4 (free), and GHL CRM for lead/trial attribution.

---

## 9. Content Refresh Cycle (ongoing)

- **Month 3:** Review Phase 1 pages — add any new Google reviews, update drive times if roads change, insert any new photos
- **Month 6:** Review all 158 pages. Flag any that have <10 organic impressions in the last 90 days — either rewrite or noindex.
- **Yearly:** Full content refresh on hub pages (homepage, programs, about) with any new instructor hires, new programs, updated pricing.

---

## 10. Integration with the Live Site

Every new page built in each phase must:

1. Be listed in `sitemap.xml` with `lastmod` = build date, `changefreq` = monthly
2. Be referenced from at least one hub page and one sibling spoke
3. Include the same nav + footer as the existing 6 content pages (copy the header/footer blocks from `index.html`)
4. Include the "Powered by MMA Marketing Pro" attribution in its footer (linked to `https://www.mmamarketingpro.com`, opens in a new tab, `rel="noopener"`)
5. Use the existing `styles.css` and `scripts.js` (no per-page custom CSS/JS)
6. Include the lead-capture modal (same as existing pages) so every spoke can convert
7. Run through `/seo-audit` before ship — the audit auto-fixes canonical, OG tags, schema completeness

---

## 11. What Each Phase Prompt Delivers

Each `phase-N-prompt.md` in this folder is a **self-contained Claude Code prompt** that the user (or a teammate) can paste into a fresh session to ship that phase. The prompt lists every page by:
- Target URL
- Target keyword
- Title tag (pre-written)
- Meta description (pre-written)
- H1
- Content outline with required unique-value elements
- Schema types to inject
- Internal links to add (inbound + outbound)
- Target ship date (user fills in)

Ship one phase per month or batch faster if you want.

---

## 12. Assumptions to Validate

Before starting Phase 1, Pete should confirm or correct:

- [ ] **Neighborhood list** — which 5 towns actually send the most students? (Adjust Tier 1/2/3 if needed.)
- [ ] **Real drive times** from the Barracks to each tier-1 neighborhood
- [ ] **Local landmarks** for 1-sentence neighborhood openers (school names, shopping centers, parks)
- [ ] **Which coach typically teaches which persona best** (for persona-page coach attribution)
- [ ] **Student quotes by neighborhood** — anyone from Phoenixville, Royersford, Limerick, etc. willing to be quoted?
- [ ] **Competitor awareness** — which neighborhoods already have another BJJ school? (Not for comparison pages — for differentiation copy in location pages.)
- [ ] **Pricing disclosure policy** — does Pete want public pricing pages or "call for pricing"?

---

Ship Phase 1 when ready. The prompt is in `phase-1-prompt.md`.
