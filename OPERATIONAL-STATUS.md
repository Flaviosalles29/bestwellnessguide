# Operational Status

Last reviewed: 2026-08-08

## What is active

- The public site is a static Cloudflare Worker served from `dist/server/index.js`.
- The production copy positions Best Wellness Guide as an informational affiliate comparison site.
- Product links point buyers to seller checkout pages so buyers can confirm current price, refund terms, shipping, and availability directly with the seller.
- `wrangler.toml` contains the Cloudflare deployment configuration and cron trigger used by the Worker.

## What is intentionally removed

The old growth automation files were removed because they described or generated activity that was not supported by real evidence in the repository.

Removed items included:

- fabricated SEO authority and ranking projections
- hardcoded positive blog responses
- generated guest-post articles with invented pricing tables
- disabled GitHub workflows that reported work they did not perform
- setup guides promising automatic backlinks, traffic, or Domain Authority gains
- old local deployment archives

## SEO policy

- Do not publish exact prices unless they are pulled from, or manually confirmed against, the seller checkout page at publish time.
- Do not describe links, prices, refund terms, or product status as "verified" unless the verification evidence is stored and dated.
- Do not promise ranking gains, traffic numbers, backlinks, or Domain Authority increases.
- Use cautious supplement language: "support", "marketed as", "designed to", and "buyers should confirm".
- Keep medical disclaimers visible. The site must not present supplements as treatments or cures.

## Pending external items

These cannot be completed from the codebase alone:

- Google Search Console validation items waiting for Google recrawl
- Search Console indexing reports while Google shows data as processing
- Bing Webmaster profile completion if it requires owner/business details not present in the repository

