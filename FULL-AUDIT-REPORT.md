# SEO Audit Report — Precision Jiu-Jitsu — The Barracks

**Audit target:** Local HTML files (pre-deploy)
**Date:** 2026-05-19
**Files audited:** 7 HTML pages + robots.txt + sitemap.xml
**Business type detected:** Local martial arts academy (BJJ / Muay Thai / Wrestling) — Schwenksville, PA

---

## Executive Summary

### Overall SEO Health Score: **87 / 100** (Strong)

This is a well-built site. Schema markup is comprehensive, on-page SEO is consistent, and the redesign captured real content with strong E-E-A-T signals (real instructor credentials, real reviews, real address). It will deploy in a healthy state.

The fixes below are mostly polish — there are no blocking issues.

### Top 5 Critical Issues
1. **AggregateRating only references 5 reviews** — the academy almost certainly has more on Google. Currently leaves rich-result potential on the table.
2. **Inconsistent age targeting for Adult BJJ across the site** — schema says "14+", schema `audience` says "16+", modal says "Ages 14+". Pick one.
3. **`alumniOf: "Ursinus College"` is a string, not an EducationalOrganization** — minor schema validation issue.
4. **Hero & header images missing explicit `width`/`height` attributes** — risks CLS (Cumulative Layout Shift) penalty.
5. **No FAQ schema on any page** — missed opportunity for "People Also Ask" / AI Overview citations.

### Top 5 Quick Wins
1. Add `loading="lazy"` to all below-the-fold images (gallery, instructor cards, program blocks).
2. Add `width` and `height` attributes to every `<img>` tag.
3. Add a small FAQ section + FAQPage schema to `index.html` or `programs.html`.
4. Pin `lucide@latest` to a specific version (e.g. `lucide@0.460.0`) to prevent silent breakage.
5. Add `sameAs` link to the Google Business Profile in the LocalBusiness schema.

---

## Technical SEO — Score: 22/25

### Strengths
- ✅ All 6 indexable pages have proper, self-referential canonicals
- ✅ `robots.txt` correctly disallows `/booking.html` (funnel page)
- ✅ `booking.html` has `<meta name="robots" content="noindex, nofollow">` (belt + suspenders — good)
- ✅ Sitemap.xml is valid, well-prioritized, and lists all 6 indexable pages
- ✅ Sitemap excludes booking page (correct)
- ✅ Mobile viewport meta tag present on every page
- ✅ `<html lang="en">` set everywhere

### Issues
- ⚠️ **Lucide loaded as `lucide@latest`** on every page (line 711 of `index.html` and others). This is a versioning anti-pattern — the library can ship a breaking change at any time and silently break your icon system in production. Pin to a specific version like `lucide@0.460.0`.
- ⚠️ **GSAP + ScrollTrigger on every page (~70KB unminified delivery)** — loaded from cdnjs. Acceptable, but worth knowing if you ever audit for performance budget.
- ⚠️ **Sitemap `lastmod` is 2026-04-15** for all pages — fine for now, but plan to update this whenever you push content changes.

---

## Content Quality — Score: 23/25

### Strengths
- ✅ Real instructor names, real accolades (IBJJF Pan Am Silver, ADCC Trials Runner-up, etc.) — E-E-A-T gold
- ✅ Real Google reviews with author attribution
- ✅ Specific program descriptions, not generic filler
- ✅ Local signals everywhere (Collegeville, Schwenksville, Skippack, Limerick, Royersford, Montgomery County)
- ✅ Content depth — no thin pages

### Issues
- ⚠️ **Homepage section labels show two `04 —` sections** (line 467 "Inside The Barracks" and line 524 "Actual Google Reviews"). Should be 04 and 05. Cosmetic, but it tells the reader the labels are arbitrary.
- ⚠️ **`alternateName: "Precision Jiu-Jitsu Spring Mount"`** in schema vs. branded name throughout site as "The Barracks". This is actually OK (covers both search queries), but be deliberate about which name you want ranking primary.

---

## On-Page SEO — Score: 18/20

### Title Tags (all under 65 chars — excellent)
| Page | Title | Length |
|------|-------|--------|
| index.html | Precision Jiu-Jitsu — The Barracks \| BJJ & MMA Academy in Collegeville, PA | 76 chars |
| about.html | About \| Precision Jiu-Jitsu — The Barracks in Collegeville, PA | 62 |
| programs.html | Programs \| Precision Jiu-Jitsu — The Barracks in Collegeville, PA | 64 |
| instructors.html | Instructors \| Precision Jiu-Jitsu — The Barracks | 49 |
| schedule.html | Class Schedule \| Precision Jiu-Jitsu — The Barracks | 52 |
| contact.html | Contact \| Precision Jiu-Jitsu — The Barracks in Schwenksville, PA | 66 |
| booking.html | Book Your Free Class \| Precision Jiu-Jitsu — The Barracks | 58 (noindex — fine) |

⚠️ **`index.html` title is 76 chars** — over Google's typical 60–65 char display limit. Will be truncated in SERP. Suggested: `Precision Jiu-Jitsu — BJJ & MMA Academy in Collegeville, PA` (60 chars).

### Meta Descriptions (all 138–180 chars — good)
All present, all written with real value, all under 165. ✅

### Heading Structure
- ✅ Exactly one `<h1>` per page
- ✅ Logical `<h2>` → `<h3>` hierarchy across all sections
- ✅ Page header `<h1>` matches the page's primary keyword intent

### Keywords Meta Tag
- ⚠️ `index.html` line 7 has `<meta name="keywords">`. Google ignores this since 2009. Not harmful, but adds nothing. Safe to remove.

### Internal Linking
- ✅ Footer has 6 deep links to program anchors
- ✅ Cross-page nav consistent
- ⚠️ **No internal links from blog content / SEO landing pages yet** — these are coming via the programmatic-seo roadmap in `seo-roadmap/`. Fine for now.

---

## Schema / Structured Data — Score: 8/10

### What's Implemented (impressive)
- `MartialArtsSchool` (LocalBusiness subtype) with full NAP, geo, hours, areaServed (8 cities)
- `AggregateRating` + 5 `Review` items (eligible for star ratings in SERP)
- `OfferCatalog` with 4 services
- `WebSite` on homepage
- `AboutPage` + `BreadcrumbList` on about.html
- `CollectionPage` + `ItemList` of 6 services on programs.html
- `ProfilePage` + `ItemList` of 8 `Person` records on instructors.html
- `WebPage` + `BreadcrumbList` on schedule.html
- `ContactPage` + `BreadcrumbList` on contact.html
- `founder` field references Pete with title + accolades summary

### Issues
1. **`alumniOf: "Ursinus College"` is a plain string** (instructors.html line 58). Schema.org expects an `EducationalOrganization`:
   ```json
   "alumniOf": { "@type": "EducationalOrganization", "name": "Ursinus College" }
   ```
2. **`aggregateRating.reviewCount: "5"`** with a perfect 5.0 — Google may suppress rich snippets on low review counts. The real business almost certainly has more 5-star reviews; pull the real count from Google Business Profile and update.
3. **`schedule.html` claims a Schedule in the HTML comment but doesn't emit Event/Schedule structured data.** With 30+ classes, an `Event` ItemList (or `Schedule` with `byDay`) would be eligible for Google's Events results.
4. **No FAQPage schema anywhere.** This is the single highest-leverage missing schema for an academy site. AI Overviews + "People Also Ask" love FAQ markup.
5. **No `sameAs` to Google Business Profile** in the LocalBusiness schema. You have FB/IG/X — add `https://www.google.com/maps/place/...` GBP URL.
6. **`priceRange: "$$"`** is generic. Acceptable, but specificity helps.

---

## Performance (Code-Inspected) — Score: 7/10

> Real CWV (LCP/INP/CLS) can only be measured on the deployed URL. These are static-source observations.

### Strengths
- ✅ All images served as `.webp` (modern format)
- ✅ Font preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`
- ✅ Fonts loaded with `display=swap`
- ✅ Single shared `styles.css` and `scripts.js` (good caching)

### Issues
- ⚠️ **No `loading="lazy"` on any image** — every image loads immediately, including below-the-fold gallery items, instructor cards, and program block images. Adding `loading="lazy"` to non-hero images will dramatically improve LCP.
- ⚠️ **No `width`/`height` attributes on `<img>` tags.** Browsers can't reserve space → CLS. Add explicit dimensions to all images.
- ⚠️ **No `fetchpriority="high"` on the hero image** — small boost for LCP if added.
- ⚠️ **GSAP + ScrollTrigger (~70KB before gzip)** loaded on every page including booking.html. Booking.html doesn't need GSAP — remove it from booking-only scripts.
- ⚠️ **Lucide `@latest`** — see Technical SEO section.

---

## Images — Score: 4.5/5

### Strengths
- ✅ **Every single `<img>` has descriptive alt text** — excellent
- ✅ Alt text is keyword-aware without being spammy ("Adult Brazilian Jiu-Jitsu rolling on the mat at Precision — The Barracks, Collegeville PA")
- ✅ `.webp` format throughout
- ✅ Logo has `apple-touch-icon` set

### Issues
- ⚠️ No `width`/`height` (see Performance)
- ⚠️ No `loading="lazy"` for below-the-fold (see Performance)
- ⚠️ A handful of images use `.jpg` (e.g. `adult-muay-thai.jpg` line 366 of `index.html`) instead of `.webp` — minor consistency issue.

---

## AI Search Readiness — Score: 4/5

### Strengths
- ✅ Comprehensive schema means AI engines (Perplexity, Google AI Overviews, ChatGPT search) can confidently cite the business
- ✅ Specific, factual content (Pete trained since 2006, black belt in 2014 from Rob Scheier) — exactly what LLMs cite
- ✅ Reviews with named authors — strong citation signal
- ✅ Real address, real phone, real hours — verifiable

### Issues
- ⚠️ **No FAQ section anywhere.** LLMs and AI search engines love Q&A structure. Add 6–10 FAQs to homepage or a dedicated FAQ page:
  - "How much does Brazilian Jiu-Jitsu cost in Collegeville, PA?"
  - "What age can my child start BJJ?"
  - "Do I need experience to start Muay Thai?"
  - "What should I wear to my first class?"
  - "Is BJJ safe for kids?"
  - "How long does it take to get a blue belt?"
- ⚠️ **No `Article` or `BlogPosting` schema** — none needed yet, but as the programmatic SEO pages roll out, ensure they ship with schema.

---

## Local SEO — Score: 9/10 (bonus category)

- ✅ NAP (Name, Address, Phone) consistent across all 7 pages
- ✅ Address embedded in schema, footer, contact page, and Google Maps embed
- ✅ Phone formatted consistently: `(445) 867-1238` (display) and `+14458671238` (tel: links)
- ✅ Embedded Google Map on contact.html (lazy-loaded via iframe — good)
- ✅ Service-area cities listed in schema (`areaServed`) and footer copy
- ⚠️ Secondary phone `(484) 897-7700` — only in footer + contact page, not in schema. Either add as secondary in schema or remove if not actively monitored.

---

## File-by-File Summary

| Page | Score | Critical Issues |
|------|-------|----------------|
| index.html | 88/100 | Title 76 chars (truncates), duplicate section number `04 —`, schema needs Adult BJJ age fix |
| about.html | 92/100 | None blocking — solid |
| programs.html | 90/100 | Schema `audience` for Adult BJJ says 16+ but body copy + modal say 14+ |
| instructors.html | 88/100 | `alumniOf` is plain string (should be object) |
| schedule.html | 82/100 | Missing Event/Schedule schema for 30+ classes |
| contact.html | 90/100 | Map iframe lazy-loaded ✓; schema solid |
| booking.html | N/A | Correctly noindex'd — funnel page |

---

## Methodology

This audit reviewed the static HTML, robots.txt, and sitemap.xml in this directory. The following could not be tested without a deployed URL and will be picked up by the post-deploy audit:

- Real Core Web Vitals (LCP, INP, CLS measurements)
- HTTPS configuration, HSTS, security headers
- Server response time / TTFB
- Redirect chains
- CDN cache headers
- Actual crawlability by Googlebot
- Live schema validation via Google Rich Results Test

Run a follow-up audit on the deployed Cloudflare Pages URL once it's live.
