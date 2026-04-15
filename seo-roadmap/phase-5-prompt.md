# Phase 5 — Pricing, Offers & Edge Geography (Month 5)

**Target ship date:** _________

**Phase goal:** 25 pages — 9 pricing/offer pages (commercial intent) + 16 tier-3 edge-suburb location spokes. This phase targets "free trial," "pricing," and "how much does X cost" queries, plus expands geographic reach into smaller Montgomery + Chester County towns.

---

## Before you start

Re-read if fresh session:
- `.agent/skills/site-redesign/SKILL.md`
- `.agent/skills/programmatic-seo/SKILL.md`
- `sites/precision-jiu-jitsu-barracks/seo-roadmap/roadmap.md`
- `sites/precision-jiu-jitsu-barracks/seo-roadmap/phase-1-prompt.md` for templates

> **Before building pricing pages:** Confirm with Pete whether he wants public pricing visible, or whether pricing pages should drive to a "call for pricing" experience. Both approaches rank — the first wins more clicks, the second protects margin against competitors comparison-shopping. Default below assumes *ranges* are public (e.g., "Adult BJJ memberships start at $X/month") without exact prices.

---

## Pages to build in Phase 5 (25 total)

### A. Pricing / offers (9 pages) — URL: `/offers/{slug}/` or `/pricing/{slug}/`

| # | URL slug | Title |
|---|----------|-------|
| 1 | free-week-trial-bjj-collegeville | Free Week Trial — Adult BJJ in Collegeville, PA |
| 2 | free-week-trial-kids-bjj | Free Week Trial — Kids BJJ at The Barracks |
| 3 | free-week-trial-muay-thai | Free Week Trial — Muay Thai at The Barracks |
| 4 | bjj-pricing-collegeville | BJJ Pricing in Collegeville — What a Membership Costs |
| 5 | kids-bjj-pricing | Kids BJJ Pricing — What a Kids Membership Costs |
| 6 | muay-thai-pricing | Muay Thai Pricing in Collegeville, PA |
| 7 | monthly-membership-bjj | Monthly BJJ Membership Options at The Barracks |
| 8 | private-lessons-bjj | Private BJJ Lessons at The Barracks — What to Expect |
| 9 | family-pricing-bjj | Family Pricing for BJJ — Discount Structure Explained |

**Pricing-page template:**

- **Title tag (50-60 chars):** Format: "{Offer/Price Topic} in {City} — {Brand}"
- **Meta description:** 150-160 chars — commercial intent, include "free trial / no credit card / book online"
- **H1:** The offer or question, plain prose
- **Canonical:** `/offers/{slug}/`

**Content outline (600-1,000 words):**
1. One-paragraph intro — what's included in the offer/membership
2. "What's included" list — classes, gear, open mats, progress tracking (whatever Pete wants to disclose)
3. Who it's best for (persona alignment)
4. FAQ section (4-6 questions) — "Is there a contract?", "Do I need to bring anything?", "Can I switch programs?", "Is there a freeze option?"
5. Direct CTA — lead modal with the relevant `data-program` preselected
6. "Still have questions?" — link to contact page + phone
7. Related pricing pages
8. Footer with MMA Marketing Pro attribution

**Schema:**
- `Offer` nested under `MartialArtsSchool` (reference `#business` `@id`)
- `FAQPage` for the FAQ section
- `BreadcrumbList`
- `PriceSpecification` if exact prices are published

**Commercial intent = higher conversion rate.** Make the CTA the loudest element on these pages.

### B. Tier-3 edge location spokes (16 pages) — URL: `/locations/{slug}/`

Spread the 4 trial programs across the 6 tier-3 neighborhoods (Norristown excluded since it was built in Phase 4; King of Prussia excluded for same reason). That leaves 4 tier-3 towns with high-enough signal × 4 trial programs = 16 pages.

| # | URL slug | Service | Neighborhood |
|---|----------|---------|--------------|
| 10 | adult-bjj-lansdale | Adult BJJ | Lansdale |
| 11 | adult-bjj-graterford | Adult BJJ | Graterford |
| 12 | adult-bjj-perkiomenville | Adult BJJ | Perkiomenville |
| 13 | adult-bjj-spring-city | Adult BJJ | Spring City |
| 14 | kids-bjj-10-14-lansdale | Kids BJJ 10-14 | Lansdale |
| 15 | kids-bjj-10-14-graterford | Kids BJJ 10-14 | Graterford |
| 16 | kids-bjj-10-14-perkiomenville | Kids BJJ 10-14 | Perkiomenville |
| 17 | kids-bjj-10-14-spring-city | Kids BJJ 10-14 | Spring City |
| 18 | kids-bjj-7-10-lansdale | Kids BJJ 7-10 | Lansdale |
| 19 | kids-bjj-7-10-graterford | Kids BJJ 7-10 | Graterford |
| 20 | kids-bjj-7-10-perkiomenville | Kids BJJ 7-10 | Perkiomenville |
| 21 | kids-bjj-7-10-spring-city | Kids BJJ 7-10 | Spring City |
| 22 | muay-thai-lansdale | Muay Thai | Lansdale |
| 23 | muay-thai-graterford | Muay Thai | Graterford |
| 24 | muay-thai-perkiomenville | Muay Thai | Perkiomenville |
| 25 | muay-thai-spring-city | Muay Thai | Spring City |

Use the Phase 1 location-spoke template. Drive times will be 15-30 min for these tier-3 neighborhoods — acknowledge the drive in the page's intro and explain why the trip is worth it (real black belt instruction, 35+ classes a week, a coaching staff that includes an IBJJF medalist — not every BJJ school in PA can say that).

> **Consider:** After Phase 5, if some tier-3 location pages are getting <5 monthly impressions in Search Console, mark them for noindex in Phase 6's cleanup. Edge pages are a coin flip — some win, some don't.

---

## Unique-content rules

Pricing pages are commercial-intent and must:
- Have actual information buyers can act on (not "contact us for pricing" only)
- Lead with the offer/CTA — free week trial first, paid options second
- Include at least one FAQ block (5-point schema booster)

Tier-3 location pages must:
- Acknowledge the drive time honestly
- Answer "why is this worth 20 minutes?" with specific program/coach signal
- Link back to closer-in Tier 1/2 pages for the same service (related links)

---

## Integration

1. Update `sitemap.xml` with 25 new entries
2. Create `/offers/index.html` hub if missing — list all pricing/offer pages
3. Link pricing pages from:
   - Homepage big CTA block
   - Programs page (beneath each program's description, link to its free-trial page)
   - The footer's "Train" column (add a "Free Trial" link)
4. Audit via `/seo-audit`

---

## Post-build checklist

1. `/seo-audit`
2. Sitemap updated
3. Test 3 pricing pages + 3 random tier-3 locations in browser
4. Commit: `feat: phase-5 SEO expansion — 25 pricing + tier-3 location pages`
5. Push → deploy

---

## Agency attribution on every page

```html
<p class="powered-by">
  Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a>
</p>
```
