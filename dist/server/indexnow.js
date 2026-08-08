// IndexNow client. Tells Bing (and therefore Yahoo, which runs on Bing's index)
// which URLs to crawl instead of waiting for the crawler to come around on its
// own. Ownership is proven by serving the key as plain text at /<key>.txt.

const ENDPOINT = "https://www.bing.com/indexnow";
const MAX_URLS_PER_BATCH = 10000;

/**
 * Submits the given URLs to IndexNow.
 * Returns a result object rather than throwing, so a scheduled run can log the
 * outcome without failing the whole invocation.
 */
export async function submitToIndexNow({ host, key, urls }) {
  if (!urls.length) {
    return { ok: false, reason: "no-urls", submitted: 0 };
  }

  const batch = urls.slice(0, MAX_URLS_PER_BATCH);
  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key,
        keyLocation: `https://${host}/${key}.txt`,
        urlList: batch
      })
    });
    // 200 = accepted, 202 = accepted pending key validation. Both are success.
    const ok = response.status === 200 || response.status === 202;
    return { ok, status: response.status, submitted: ok ? batch.length : 0 };
  } catch (error) {
    return { ok: false, reason: String(error), submitted: 0 };
  }
}

/** Extracts the <loc> values from a sitemap document. */
export function extractSitemapUrls(sitemapXml) {
  return [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) =>
    match[1].replace(/&amp;/g, "&")
  );
}
