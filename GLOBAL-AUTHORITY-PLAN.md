# Global Authority Plan

Last reviewed: 2026-08-08

## Source Signals Used

Cloudflare dashboard, last 24 hours:

- Requests: 4.68K
- Visits: 3.46K
- Data transfer: 86.56 MB
- Cache hit rate: 0.00%
- Devices: desktop 4.49K, mobile 155, tablet 31
- Status codes: 2xx 3.89K, 3xx 761, 4xx 20, 5xx 7
- Top countries: United States, Germany, Sweden, Brazil, Switzerland, Hong Kong, Taiwan, India, Singapore, Italy, Canada
- Top paths: `/`, `/robots.txt`, `/blog/neurovera-brain-supplement-review`, `/sitemap.xml`, `/blog`, `/best-supplements-comparison`, `/offers/audifort`, `/offers/prodentim`
- Host split: `bestwellnessguide.com` and `www.bestwellnessguide.com`

## Strategic Direction

The site should build authority internationally, but the content language should remain English. The strongest commercial target is English-speaking traffic first:

- United States
- Canada
- United Kingdom
- Australia
- New Zealand
- Ireland
- Singapore
- English-speaking users in India, Hong Kong, and Europe

Do not translate the site into Portuguese or other languages yet. Translation would increase maintenance risk and could dilute the site while it is still building trust. The immediate goal is one clean English authority site.

## Technical Actions Taken

- Consolidated authority to `www.bestwellnessguide.com` with a 301 redirect from `bestwellnessguide.com`.
- Redirected older Portuguese-style paths to the correct English URLs.
- Changed `/graphql` to return 404 instead of serving the homepage.
- Changed unknown paths to return 404 instead of soft-homepage responses.
- Updated sitemap `lastmod` to the current deploy date.

## Content Priorities

Build topical authority through English clusters, not fabricated backlinks or automated guest posts.

Priority clusters:

1. Dental and oral probiotics
   - `best dental probiotics`
   - `oral probiotics`
   - `ProDentim review`
   - `ProDentim official website`

2. Blood sugar support
   - `best blood sugar supplements`
   - `blood sugar support supplement`
   - `Sugar Defender review`

3. Joint support
   - `best joint supplements`
   - `joint support supplement`
   - `Joint Genesis review`

4. Hearing support
   - `best hearing support supplements`
   - `hearing support supplement`
   - `Audifort review`

5. Brain wellness
   - `brain health supplement`
   - `memory support supplement`
   - `NeuroVera review`

## Country Strategy

Use one English page per topic with country-aware buyer notes, not duplicate country pages yet.

Add sections such as:

- Availability for US buyers
- What Canadian buyers should confirm
- What UK/Australia buyers should check before checkout
- Shipping, currency, and refund terms are confirmed by the seller

This lets the site serve global English demand without inventing regional claims.

## Authority Building Rules

- Publish only manually reviewed content.
- Do not claim prices are verified unless there is dated evidence.
- Do not promise rankings, traffic, backlinks, or Domain Authority gains.
- Use original comparison tables based on buyer criteria, not fake prices.
- Cite official seller pages only for seller-controlled facts.
- Cite reputable health sources only for general ingredient or supplement education.
- Keep all supplement claims cautious and non-medical.

## Next Measurement Loop

Review weekly:

- Countries with rising real visits
- Pages with real impressions in GSC/Bing
- 404 paths worth redirecting
- 5xx errors
- Top product pages by visits
- Affiliate clicks by product, if analytics events are available

