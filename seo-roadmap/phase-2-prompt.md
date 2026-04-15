# Phase 2 — Persona Expansion + Location Depth (Month 2)

**Target ship date:** _________

**Phase goal:** 28 new pages — 12 `{service} for {persona}` pages (wide-audience capture) + 16 location spokes covering the tier-2 neighborhoods for all 4 trial programs. Same structural template as Phase 1. Same quality bar.

---

## Before you start

Re-read if this is a fresh session:
1. `.agent/skills/site-redesign/SKILL.md`
2. `.agent/skills/taste-skill/SKILL.md`
3. `.agent/skills/performance-athletic-skill/SKILL.md`
4. `.agent/skills/seo-audit/SKILL.md`
5. `.agent/skills/programmatic-seo/SKILL.md`
6. `sites/precision-jiu-jitsu-barracks/seo-roadmap/roadmap.md` — full context
7. `sites/precision-jiu-jitsu-barracks/seo-roadmap/keywords.json` — keyword inventory
8. `sites/precision-jiu-jitsu-barracks/seo-roadmap/phase-1-prompt.md` — detailed template reference (the location-spoke and glossary templates there apply here too)

---

## Pages to build in Phase 2 (28 total)

### A. Persona spokes (12 pages) — URL: `/programs/{service}-for-{persona}/`

| # | URL slug | Title | Primary keyword |
|---|----------|-------|-----------------|
| 1 | adult-bjj-for-beginners | Adult BJJ for Beginners — Start Free at Precision | adult bjj for beginners collegeville |
| 2 | adult-bjj-for-adults-over-40 | BJJ for Adults Over 40 — Start Safely at Precision | bjj for adults over 40 |
| 3 | adult-bjj-for-women | BJJ for Women — Train in a Supportive Room | bjj for women pa |
| 4 | kids-bjj-10-14-for-beginners | Kids BJJ Ages 10-14 for Beginners — Precision | kids bjj ages 10 14 beginners |
| 5 | kids-bjj-10-14-for-teens | BJJ for Teens Ages 13-14 — Precision Jiu-Jitsu | bjj for teens collegeville |
| 6 | kids-bjj-10-14-for-competitors | Kids BJJ for Aspiring Competitors (Ages 10-14) | kids bjj competition training |
| 7 | kids-bjj-7-10-for-beginners | Kids BJJ Ages 7-10 for First-Timers | kids bjj for first time |
| 8 | kids-bjj-7-10-for-shy-kids | Kids BJJ for Shy Kids — Build Confidence on the Mat | kids bjj confidence building |
| 9 | kids-bjj-7-10-for-parents | Kids BJJ Ages 7-10 — A Parent's Guide to Your First Month | kids bjj parents guide |
| 10 | muay-thai-for-beginners | Muay Thai for Beginners — Collegeville PA | muay thai for beginners |
| 11 | muay-thai-for-women | Muay Thai for Women — Collegeville PA | muay thai for women pa |
| 12 | muay-thai-for-adults-over-40 | Muay Thai for Adults Over 40 — Start Safely | muay thai for adults 40+ |

**Persona-page template** — use this pattern per page:

- **Title tag:** 50-60 chars, `{Service} for {Persona} — {Location hint or Precision}` format
- **Meta description:** 150-160 chars — include primary keyword + audience benefit + CTA + phone
- **H1:** `{Service} for {Persona}` (no colon, no em-dash needed)
- **Canonical:** `https://precisionjjbarracks.com/programs/{slug}/`

**Content outline (500-900 words):**
1. One-sentence lead that names the audience explicitly ("If you're over 40 and thinking about trying BJJ for the first time, this is the program for you.")
2. "Why this program works for {persona}" — 3-5 bullets with specific training/coaching detail (required uniqueness)
3. "What your first month looks like" — week-by-week or session-by-session narrative, tailored to that persona
4. "Which coach typically leads this" — attribution + link to `/instructors.html#{coach-slug}`
5. "Class times that work best" — pulled from schedule, filtered to this persona (e.g., for "Adults Over 40" → Saturday 10 AM Fundamentals, Monday 7 PM Gi)
6. Sample testimonial or quote if available (or note that real testimonials need to be added later)
7. Related pages — link to 2 sibling persona pages + the matching location spokes + the relevant glossary terms
8. Big CTA — lead modal with `data-program={matching-trial-id}`
9. Footer with MMA Marketing Pro attribution

**Schema:** `Service` (with `audience` field naming the persona) + `BreadcrumbList` + `WebPage`.

### B. Tier-2 location spokes (16 pages) — URL: `/locations/{service}-{neighborhood}/`

4 trial services × 4 tier-2 neighborhoods = 16 pages. Use the **exact template from Phase 1** (location spoke). Update the drive time + landmark opener per neighborhood.

| # | URL slug | Service | Neighborhood | Drive time (rough) |
|---|----------|---------|--------------|---------------------|
| 13 | adult-bjj-phoenixville | Adult BJJ | Phoenixville | 15 min |
| 14 | adult-bjj-trappe | Adult BJJ | Trappe | 8 min |
| 15 | adult-bjj-pottstown | Adult BJJ | Pottstown | 18 min |
| 16 | adult-bjj-harleysville | Adult BJJ | Harleysville | 14 min |
| 17 | kids-bjj-10-14-phoenixville | Kids BJJ 10-14 | Phoenixville | 15 min |
| 18 | kids-bjj-10-14-trappe | Kids BJJ 10-14 | Trappe | 8 min |
| 19 | kids-bjj-10-14-pottstown | Kids BJJ 10-14 | Pottstown | 18 min |
| 20 | kids-bjj-10-14-harleysville | Kids BJJ 10-14 | Harleysville | 14 min |
| 21 | kids-bjj-7-10-phoenixville | Kids BJJ 7-10 | Phoenixville | 15 min |
| 22 | kids-bjj-7-10-trappe | Kids BJJ 7-10 | Trappe | 8 min |
| 23 | kids-bjj-7-10-pottstown | Kids BJJ 7-10 | Pottstown | 18 min |
| 24 | kids-bjj-7-10-harleysville | Kids BJJ 7-10 | Harleysville | 14 min |
| 25 | muay-thai-phoenixville | Muay Thai | Phoenixville | 15 min |
| 26 | muay-thai-trappe | Muay Thai | Trappe | 8 min |
| 27 | muay-thai-pottstown | Muay Thai | Pottstown | 18 min |
| 28 | muay-thai-harleysville | Muay Thai | Harleysville | 14 min |

---

## Unique-content rules (non-negotiable)

Each page needs at least 4 of the 10 uniqueness elements listed in Phase 1. Persona pages replace the "parking note" requirement with "specific curriculum detail for this persona." Don't template-swap.

---

## Integration

1. Update `sitemap.xml` with 28 new `<url>` entries (priority 0.7 for location, 0.65 for persona).
2. Add each persona spoke to `/locations/index.html` or a new `/programs/index.html` hub (create if it doesn't exist, list all existing + new program pages).
3. From the homepage, add 2-3 contextual links to the strongest-performing personas (by volume guess: "BJJ for Beginners," "BJJ for Adults Over 40," "Muay Thai for Women").
4. From each program's section on `programs.html`, add a small "Tailored for…" section with links to its persona spokes.
5. Audit: `/seo-audit` — fixes any missing schema/canonicals/OG and verifies MMA Marketing Pro attribution is on every new page.

---

## Post-build checklist

1. Run `/seo-audit`
2. Confirm `sitemap.xml` has all 28 entries
3. Spot-check 5 random pages in a browser
4. Commit with message: `feat: phase-2 SEO expansion — 28 persona + tier-2 location pages`
5. Push → deploy
6. Wait 7 days, check Search Console for indexation

---

## Agency attribution — REQUIRED on every page

Every new page must include in its footer:

```html
<p class="powered-by">
  Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a>
</p>
```

Do not remove, rename, or alter.
