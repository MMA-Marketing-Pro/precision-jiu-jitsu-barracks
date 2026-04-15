# Phase 6 — Matrix Fill + Optimize (Month 6)

**Target ship date:** _________

**Phase goal:** 30 pages — 16 remaining persona fills + 4 final curation pages + 10 refresh passes on Phase 1 foundation pages. This is the "fill gaps and sharpen the base" phase.

---

## Before you start

Re-read if fresh session:
- `.agent/skills/site-redesign/SKILL.md`
- `.agent/skills/programmatic-seo/SKILL.md`
- `sites/precision-jiu-jitsu-barracks/seo-roadmap/roadmap.md`
- Search Console data from Phases 1-5 (use this to prioritize refresh targets)

---

## Pages to build / update in Phase 6 (30 total)

### A. Remaining persona spokes (16 pages) — URL: `/programs/{slug}/`

Phases 1-2 covered 12 persona pages (3 per trial program). This phase fills the remaining matrix cells:

| # | URL slug | Title |
|---|----------|-------|
| 1 | adult-bjj-for-teens | Adult BJJ for Teens (14-17) — Precision |
| 2 | adult-bjj-for-parents | Adult BJJ for Parents — Train While Kids Train |
| 3 | adult-bjj-for-competitors | Adult BJJ for Competitors — Tournament Prep |
| 4 | kids-bjj-10-14-for-girls | Kids BJJ (Ages 10-14) for Girls |
| 5 | kids-bjj-10-14-for-homeschoolers | Kids BJJ for Homeschoolers (Ages 10-14) |
| 6 | kids-bjj-10-14-for-athletes | Kids BJJ for Multi-Sport Athletes |
| 7 | kids-bjj-10-14-for-discipline-building | Kids BJJ for Discipline & Focus Building |
| 8 | kids-bjj-7-10-for-girls | Kids BJJ (Ages 7-10) for Girls |
| 9 | kids-bjj-7-10-for-bullied-kids | Kids BJJ for Kids Dealing with Bullying |
| 10 | kids-bjj-7-10-for-attention-focus | Kids BJJ for Kids Who Need to Burn Energy |
| 11 | kids-bjj-7-10-for-homeschoolers | Kids BJJ for Homeschoolers (Ages 7-10) |
| 12 | muay-thai-for-teens | Muay Thai for Teens — Precision Collegeville |
| 13 | muay-thai-for-competitors | Muay Thai for Competitors — Pro Fight Prep |
| 14 | muay-thai-for-weight-loss | Muay Thai for Weight Loss & Conditioning |
| 15 | muay-thai-for-parents | Muay Thai for Parents — Train While Kids Train |
| 16 | bjj-for-law-enforcement | BJJ for Law Enforcement & First Responders |

**Template:** Same persona-page template from Phase 2.

### B. Final curation / authority (4 pages) — URL: `/best/{slug}/`

| # | URL slug | Title |
|---|----------|-------|
| 17 | best-bjj-gym-for-beginners-pa | Best BJJ Gym for Beginners in PA |
| 18 | best-bjj-gym-for-competitors-pa | Best BJJ Gym for Competitors in Pennsylvania |
| 19 | best-kids-bjj-for-confidence | Best Kids BJJ Program for Confidence Building |
| 20 | best-muay-thai-gym-for-women | Best Muay Thai Gym for Women in Pennsylvania |

**Template:** Same curation template from Phase 3.

### C. Refresh passes on Phase 1 pages (10 refreshes — not net-new pages)

Use Search Console data to prioritize. Target the 10 Phase 1 pages with the highest impressions but low CTR. Apply these refreshes:

**For each of the 10 pages:**

1. **Check Search Console** — what queries is the page getting impressions for? Are those queries in the title/H1? If not, fix.
2. **Update the drive-time / landmark opener** — if Pete got specific student feedback since launch, swap in a better line.
3. **Add any new Google reviews** — pull fresh testimonials.
4. **Add 1-2 internal links** to pages built in Phases 2-5 that didn't exist at Phase 1 launch.
5. **Refresh the `lastmod` date in sitemap.xml** — signals freshness to Google.
6. **Re-check schema** — add any new schema types that became relevant (e.g., if you added a gallery, add `ImageGallery`).
7. **Spot-check load speed** — has anything slowed down? Compress any heavy images.

**Pages likely to need refreshes (based on expected search volume):**
- `/locations/adult-bjj-collegeville/`
- `/locations/kids-bjj-10-14-collegeville/`
- `/locations/adult-bjj-royersford/`
- `/locations/adult-bjj-limerick/`
- `/learn/what-is-brazilian-jiu-jitsu/`
- `/learn/gi-vs-no-gi-bjj-explained/`
- Plus 4 others Search Console tells you are underperforming

Document each refresh in `sites/precision-jiu-jitsu-barracks/seo-roadmap/refresh-log.md` (create file if needed) — what changed, when, and why.

---

## Thin-content pruning check

After building all 16 new persona pages, **review every page in Search Console with <5 impressions in the last 90 days.** For those pages, make one of three decisions:

1. **Rewrite** — beef up with more specific content, add a coach quote, add testimonials
2. **Merge** — if two pages overlap heavily (e.g., "adult-bjj-for-beginners" and "how-to-start-bjj-as-an-adult"), redirect one to the other via `<meta http-equiv="refresh">` or just delete one and 301 at the Cloudflare level
3. **Noindex** — for edge-suburb locations that turn out to have zero volume, add `<meta name="robots" content="noindex">` so they don't dilute crawl budget

Document decisions in `refresh-log.md`.

---

## Unique-content rules

Persona pages follow Phase 2 rules. Curation pages follow Phase 3 rules. Refreshes must ADD unique value — not just touch dates.

---

## Integration

1. Update `sitemap.xml` with 20 new entries (16 personas + 4 curations). Update `lastmod` on 10 refreshed pages.
2. Add new persona pages to the `/programs/index.html` hub.
3. Add new curation pages to the `/best/index.html` hub.
4. From the homepage big CTA block, consider adding a rotating link to the highest-volume persona pages (discovered via Search Console).
5. Audit via `/seo-audit`.

---

## Post-build checklist

1. `/seo-audit`
2. Sitemap updated
3. `refresh-log.md` documents the 10 refreshes
4. Noindex decisions logged for thin pages
5. Commit: `feat: phase-6 SEO expansion + refresh — 20 new + 10 refreshed pages`
6. Push → deploy
7. **Final review** — 158 pages total. Check indexation rate in Search Console. If <80% of pages are indexed after 30 days, investigate (often a canonical or internal-linking issue).

---

## After Phase 6 — Ongoing cadence

- **Every quarter:** Audit the bottom-10 underperforming pages. Rewrite, merge, or noindex.
- **Every 6 months:** Add 10-20 new pages based on Search Console "Performance → Queries" — which searches surface the site but have no dedicated page? Build pages for those.
- **Yearly:** Full site content refresh. Update hero photos, new testimonials, new instructors, new Google reviews. Refresh OG images.

---

## Agency attribution on every page

```html
<p class="powered-by">
  Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a>
</p>
```
