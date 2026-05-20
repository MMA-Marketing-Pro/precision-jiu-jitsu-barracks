# Live SEO Audit — https://precisionjjbarracks.com/

**Audit target:** Deployed Cloudflare Pages URL
**Date:** 2026-05-19
**Deploy commit:** `272b23e` (SEO pass — all fixes from local audit are confirmed live)

---

## Executive Summary

### Overall SEO Health Score: **78 / 100** ⚠️ (dropped from local 94)

The drop is **NOT** caused by your code — all the on-page SEO fixes deployed cleanly. The drop is caused by two **Cloudflare platform behaviors** that aren't visible in local files:

1. 🚨 **Cloudflare is auto-injecting AI bot blocks into your robots.txt** — blocking GPTBot, ClaudeBot, Google-Extended, Perplexity, etc. This nearly cancels out the FAQ schema work I just did, because AI search engines can't crawl the site.
2. 🚨 **Cloudflare Pages strips `.html` from URLs** (serves `/about` instead of `/about.html`), but all your canonical tags and sitemap.xml still reference `.html` URLs. Every page now has a "canonical points to a redirect" issue.

Both are fixable. Both are critical.

---

## 🚨 CRITICAL FINDINGS (live-only — not visible in local files)

### 1. Cloudflare is blocking AI search engines via robots.txt

**Severity:** Critical for AI search visibility (AEO/GEO)

Your live `robots.txt` includes auto-injected directives that block these crawlers:
```
User-agent: ClaudeBot      Disallow: /     ← Claude / Claude.ai
User-agent: GPTBot         Disallow: /     ← ChatGPT
User-agent: Google-Extended Disallow: /    ← Google AI Overviews / Gemini
User-agent: CCBot          Disallow: /     ← Common Crawl (used by most LLMs)
User-agent: Applebot-Extended Disallow: /  ← Apple AI
User-agent: Amazonbot      Disallow: /
User-agent: Bytespider     Disallow: /     ← TikTok / ByteDance AI
User-agent: meta-externalagent Disallow: / ← Meta AI
User-agent: Google-Extended Disallow: /
```

**Why this matters:** I just added a FAQ schema with 8 questions specifically optimized for AI Overviews, "People Also Ask," and AI search citation. With these blocks in place, **none of those AI engines can read your site** — so the schema can't help you get cited.

This is Cloudflare's **"AI Audit" feature**, which is enabled by default on Cloudflare Pages.

**Fix (in Cloudflare dashboard):**
1. Log into Cloudflare → select `precisionjjbarracks.com`
2. Go to **AI Audit** (or **Security** → **Bots** depending on plan)
3. Either:
   - Disable the AI crawler blocks entirely (recommended for an academy that wants AI citations), OR
   - Selectively unblock `Google-Extended`, `GPTBot`, `ClaudeBot`, `Perplexity-User`, and `Applebot-Extended` (preserves only-search visibility)

After disabling, re-check `https://precisionjjbarracks.com/robots.txt` — the "Cloudflare Managed content" block should disappear.

---

### 2. URL strategy mismatch — canonicals and sitemap point to redirects

**Severity:** Critical for crawl efficiency

**What's happening:**
- Cloudflare Pages serves: `https://precisionjjbarracks.com/about`
- Your canonical tag says: `<link rel="canonical" href="https://precisionjjbarracks.com/about.html">`
- The canonical URL **308-redirects back** to `/about`

This creates a "canonical to a redirect" loop on every page:

| Path requested | What happens |
|----------------|-------------|
| `/about.html` | 308 → `/about` |
| `/programs.html` | 308 → `/programs` |
| `/contact.html` | 308 → `/contact` |
| `/schedule.html` | 308 → `/schedule` |
| `/instructors.html` | 308 → `/instructors` |
| `/booking.html` | 308 → `/booking` |

**Also affects:**
- `sitemap.xml` lists all `.html` URLs → all 308 redirect → wastes crawl budget
- `robots.txt` says `Disallow: /booking.html` — but the actual served URL is `/booking`, which **is not blocked**

**Impact:**
- Google will eventually canonicalize correctly but spends extra crawl budget
- Booking page (a funnel page that shouldn't be indexed) is technically reachable by crawlers
- Sitemap signals are weaker because every URL is a redirect

**Fix (code changes):**

I can fix this in the next commit. Two parts:

**A. Update all canonicals to clean URLs:**
```html
<!-- before -->
<link rel="canonical" href="https://precisionjjbarracks.com/about.html">
<!-- after -->
<link rel="canonical" href="https://precisionjjbarracks.com/about">
```

**B. Update sitemap.xml URLs:**
```xml
<!-- before -->
<loc>https://precisionjjbarracks.com/about.html</loc>
<!-- after -->
<loc>https://precisionjjbarracks.com/about</loc>
```

**C. Update robots.txt:**
```
Disallow: /booking
```

(All `og:url` tags in the schema also reference `.html` and should be updated for consistency.)

---

## 🟠 HIGH-PRIORITY FINDINGS

### 3. www subdomain serves content (no 301 to apex)

**Severity:** Medium-High

`https://www.precisionjjbarracks.com/` returns HTTP 200 (not a redirect). It serves the same content as the apex domain.

Your canonical tag handles this correctly (points to apex), so Google won't get confused — but it's still suboptimal. A clean 301 from `www.*` to apex is the standard.

**Fix (Cloudflare dashboard):**
- Cloudflare → DNS → Bulk Redirects (or Page Rules on older plans)
- Add: `www.precisionjjbarracks.com/*` → `https://precisionjjbarracks.com/$1` (301)

### 4. Missing security headers

**Severity:** Medium

These headers are missing from the live response:
- `Strict-Transport-Security` (HSTS) — tells browsers to ONLY use HTTPS
- `Content-Security-Policy` — limits resource loading
- `X-Frame-Options` — prevents clickjacking
- `Permissions-Policy` — limits browser feature use

**Present and good:**
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ✅ `X-Content-Type-Options: nosniff`

**Fix:** Create a `_headers` file in the repo root:
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

Cloudflare Pages auto-picks this up.

### 5. Static HTML not being edge-cached

**Severity:** Medium (performance)

Response header: `cf-cache-status: DYNAMIC` — every HTML request hits the origin instead of being served from Cloudflare's edge cache. This adds ~50-200ms to TTFB.

Default `cache-control` is: `public, max-age=0, must-revalidate` — which forces revalidation every time.

**Fix:** Add to `_headers` file:
```
/*.html
  Cache-Control: public, max-age=3600, s-maxage=86400
```

---

## ✅ WHAT'S WORKING WELL ON LIVE

| Check | Result |
|-------|--------|
| HTTPS enabled | ✅ HTTP/2 + valid cert |
| `http://` → `https://` redirect | ✅ 301 |
| Homepage title deployed | ✅ "Precision Jiu-Jitsu — BJJ & MMA Academy in Collegeville, PA" (60 chars) |
| Meta descriptions all <160 chars | ✅ Confirmed across all 7 pages |
| FAQ schema live | ✅ `FAQPage` JSON-LD detected on homepage |
| `fetchpriority="high"` on hero | ✅ Live |
| Sitemap.xml accessible & valid | ✅ Updated lastmod (2026-05-19) |
| Sitemap referenced in robots.txt | ✅ |
| `booking.html` has `noindex,nofollow` | ✅ (though see Critical #2) |
| Referrer-Policy header | ✅ |
| X-Content-Type-Options header | ✅ |

---

## Updated Score Breakdown (live)

| Category | Local Score | Live Score | Delta | Reason |
|----------|------------|-----------|-------|--------|
| Technical SEO | 22/25 | 17/25 | **-5** | Cloudflare AI bot block + URL strategy mismatch + missing security headers |
| Content Quality | 23/25 | 23/25 | 0 | No change |
| On-Page SEO | 20/20 | 18/20 | **-2** | Canonical-to-redirect on every page |
| Schema | 9/10 | 9/10 | 0 | FAQ schema live ✓ |
| Performance | 7/10 | 6/10 | **-1** | cf-cache-status DYNAMIC, missing edge cache |
| Images | 5/5 | 5/5 | 0 | All lazy loading deployed |
| AI Search Readiness | 5/5 | 1/5 | **-4** | Cloudflare blocking AI bots |
| **Total** | **94** | **78** | **-16** | |

### Score recovery projection (after fixes)

| Fix | Score gain |
|-----|-----------|
| Disable Cloudflare AI bot block | +4 |
| Fix canonicals + sitemap to clean URLs | +4 |
| Fix robots.txt `/booking` rule | +1 |
| Add `_headers` file (security + cache) | +3 |
| Fix www → apex redirect | +1 |
| **Total after all fixes** | **91** |

---

## Recommended Action Order

1. **[Cloudflare dashboard]** Disable AI Audit / unblock AI crawlers — 5 min, biggest single impact
2. **[Cloudflare dashboard]** Set up `www → apex` 301 redirect — 3 min
3. **[Code fix — I can do this]** Update all canonicals + sitemap to clean URLs (no `.html`) — 10 min
4. **[Code fix — I can do this]** Add `_headers` file for HSTS + edge caching — 5 min
5. **[Code fix — I can do this]** Update robots.txt `Disallow: /booking.html` → `/booking` — 1 min

After steps 3-5, re-run this audit. Step 1 needs to be checked by visiting `/robots.txt` and confirming the Cloudflare Managed Content block is gone.
