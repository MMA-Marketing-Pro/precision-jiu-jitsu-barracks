# Phase 4 — Long-Tail Glossary & Technique Tutorials (Month 4)

**Target ship date:** _________

**Phase goal:** 25 pages — 15 glossary/education pieces + 8 technique tutorials + 2 edge location fills. These are top-of-funnel pages that build topical authority and capture "what is X" / "how do I X" searches.

---

## Before you start

Re-read if fresh session:
- `.agent/skills/site-redesign/SKILL.md`
- `.agent/skills/programmatic-seo/SKILL.md`
- `sites/precision-jiu-jitsu-barracks/seo-roadmap/roadmap.md`
- `sites/precision-jiu-jitsu-barracks/seo-roadmap/phase-1-prompt.md` for the glossary template

---

## Pages to build in Phase 4 (25 total)

### A. Glossary / education (15 pages) — URL: `/learn/{slug}/`

| # | URL slug | Title |
|---|----------|-------|
| 1 | what-is-a-bjj-black-belt | What Is a BJJ Black Belt? (And How Long It Takes) |
| 2 | what-to-wear-to-your-first-bjj-class | What to Wear to Your First BJJ Class |
| 3 | how-to-choose-a-bjj-school | How to Choose the Right BJJ School (6-Point Checklist) |
| 4 | how-long-to-get-a-bjj-blue-belt | How Long Does It Take to Get a BJJ Blue Belt? |
| 5 | adult-bjj-beginners-complete-guide | The Adult Beginner's Complete Guide to BJJ |
| 6 | bjj-competition-guide-for-beginners | BJJ Competition Guide for Beginners |
| 7 | benefits-of-bjj-for-kids | 9 Benefits of BJJ for Kids (From Actual Parents) |
| 8 | benefits-of-bjj-for-women | Benefits of BJJ for Women |
| 9 | how-to-start-bjj-as-an-adult | How to Start BJJ as an Adult (Even If You're Out of Shape) |
| 10 | ibjjf-explained | IBJJF Explained — What the Rules Mean for You |
| 11 | bjj-tournament-preparation | How to Prepare for a BJJ Tournament |
| 12 | what-is-open-mat | What Is Open Mat? (And Why You Should Go) |
| 13 | how-much-does-bjj-cost | How Much Does BJJ Cost? (2026 Pricing Guide) |
| 14 | bjj-hygiene-and-etiquette | BJJ Hygiene & Etiquette — The Unwritten Rules |
| 15 | is-bjj-good-for-self-defense | Is BJJ Good for Self-Defense? |

**Glossary template (from Phase 1):**
- Title: "{Question} | Precision Jiu-Jitsu — Collegeville PA"
- Meta: 150-160 chars with primary keyword + CTA
- H1: The question itself, plain prose
- Content: TL;DR in first 60 words → sections → Pete's quote → related links → CTA → footer
- Schema: `Article` (with author=Pete) + `BreadcrumbList`. Add `FAQPage` if Q&A format.
- Length: 700-1,200 words per page
- Each page MUST include Pete's or a coach's original sentence/quote (no template swap)

### B. Technique / tutorial pages (8 pages) — URL: `/learn/{slug}/`

| # | URL slug | Title |
|---|----------|-------|
| 16 | basic-bjj-guard-positions | Basic BJJ Guard Positions (With Photos) |
| 17 | bjj-takedowns-for-beginners | BJJ Takedowns for Beginners |
| 18 | 5-most-common-bjj-submissions | The 5 Most Common BJJ Submissions |
| 19 | muay-thai-kicks-explained | Muay Thai Kicks Explained (Roundhouse, Teep, Knee) |
| 20 | bjj-warmups-routine | The BJJ Warmup Routine We Use at The Barracks |
| 21 | bjj-passing-the-guard-basics | Passing the Guard in BJJ — The Basics |
| 22 | self-defense-from-the-ground | Self-Defense From the Ground — BJJ Fundamentals |
| 23 | bjj-escape-from-side-control | How to Escape Side Control in BJJ |

**Technique-page template:**
- Title: "{Technique} — Tutorial | Precision Jiu-Jitsu"
- Meta: 150-160 chars, include step count or benefit ("3 high-percentage submissions you'll learn in your first month")
- H1: Technique name + subtitle
- Content:
  1. Short intro — why this technique matters + who it's for
  2. Step-by-step breakdown (text — images are a bonus; mark which gallery photos map to each step)
  3. Common mistakes students make
  4. "How we teach this at The Barracks" — Pete or a coach's perspective
  5. Related technique pages + link to `/programs.html#adult-bjj`
  6. CTA block — try free week
- Schema: `Article` + `HowTo` (if genuinely step-by-step) + `BreadcrumbList`
- Length: 500-900 words

### C. Edge location fills (2 pages) — URL: `/locations/{slug}/`

| # | URL slug | Service | Neighborhood |
|---|----------|---------|--------------|
| 24 | adult-bjj-norristown | Adult BJJ | Norristown |
| 25 | adult-bjj-king-of-prussia | Adult BJJ | King of Prussia |

Same location-spoke template from Phase 1. These are bigger metros — the search volume may be worth the drive time even at 20+ minutes.

---

## Unique-content rules

Glossary and technique pages MUST include:
- At least one original sentence/quote from Pete or another coach
- An original insight or framing not copy-pasted from generic BJJ content on the web
- Links to 3+ related `/learn/` or `/programs/` pages (topical clustering)
- CTA block for free week

---

## Integration

1. Update `sitemap.xml` with 25 new entries
2. Add Phase 4 glossary to `/learn/index.html` hub (create if missing)
3. Add cross-links from existing glossary pages (Phase 1) to new glossary pages (topical density)
4. Audit via `/seo-audit`

---

## Post-build checklist

1. `/seo-audit`
2. Sitemap updated
3. Spot-check 5 pages in browser
4. Commit: `feat: phase-4 SEO expansion — 25 glossary + tutorial pages`
5. Push → deploy

---

## Agency attribution on every page

```html
<p class="powered-by">
  Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a>
</p>
```
