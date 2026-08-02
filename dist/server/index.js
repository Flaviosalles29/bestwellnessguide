const products = [
  {
    name: "Audifort",
    vendor: "audifort",
    category: "Hearing Support",
    badge: "Top wellness offer",
    market: "United States confirmed; other countries verify at checkout",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    summary: "A hearing-support wellness supplement offer for adults comparing natural routines and official bundle discounts.",
    bullets: ["Official ClickBank-tracked checkout", "US shipping shown on selected bundles", "90-day refund policy shown on official page"],
    cta: "Check today's Audifort offer",
    href: "https://hop.clickbank.net/?affiliate=ciacomrep&vendor=audifort"
  },
  {
    name: "Java Burn 2.0",
    vendor: "JAVABURN",
    category: "Coffee Routine",
    badge: "Coffee-friendly format",
    market: "English-speaking buyers; verify delivery at checkout",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    summary: "A coffee-compatible wellness offer for buyers who want a supplement that fits an existing morning habit.",
    bullets: ["Built around a daily coffee routine", "Good fit for capsule-resistant buyers", "Official page confirms current bundles and terms"],
    cta: "View Java Burn details",
    href: "https://hop.clickbank.net/?affiliate=ciacomrep&vendor=JAVABURN"
  },
  {
    name: "All Day Slimming Tea",
    vendor: "ALLSLIMTEA",
    category: "Tea Routine",
    badge: "Morning and evening ritual",
    market: "English-speaking buyers; approval and checkout availability should be verified",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
    summary: "A tea-based wellness routine positioned for buyers who prefer beverages over capsules or powders.",
    bullets: ["Simple habit-led positioning", "Strong angle for wellness content", "Checkout controls final pricing and delivery"],
    cta: "Explore tea offer",
    href: "https://hop.clickbank.net/?affiliate=ciacomrep&vendor=ALLSLIMTEA"
  },
  {
    name: "VisiFlora",
    vendor: "VISIFLORA",
    category: "Eye + Gut Wellness",
    badge: "Differentiated angle",
    market: "English-speaking buyers; verify delivery at checkout",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    summary: "A wellness offer for readers researching eye-support routines and gut-health education.",
    bullets: ["Less generic than standard eye-vitamin pages", "Good educational SEO angle", "Official checkout confirms label and terms"],
    cta: "See VisiFlora offer",
    href: "https://hop.clickbank.net/?affiliate=ciacomrep&vendor=VISIFLORA"
  }
];

function productCard(product) {
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name} product category image" loading="lazy">
      <div class="product-body">
        <div class="meta-row">
          <span>${product.category}</span>
          <span>${product.badge}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.summary}</p>
        <ul>${product.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
        <div class="market"><strong>Market:</strong> ${product.market}</div>
        <a class="button" href="${product.href}" rel="nofollow sponsored noopener" target="_blank">${product.cta}</a>
      </div>
    </article>
  `;
}

function page() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Best Wellness Guide | International Wellness Product Storefront</title>
  <meta name="description" content="Best Wellness Guide curates wellness product offers for buyers in English-speaking markets. Compare products and visit official checkout pages.">
  <link rel="canonical" href="https://bestwellnessguide.com/">
  <style>
    :root{--ink:#14211d;--muted:#60716b;--paper:#f5f7f1;--panel:#fff;--line:#dce4da;--green:#207a59;--teal:#086b75;--gold:#e6ae43;--rose:#b84b63}
    *{box-sizing:border-box} body{margin:0;background:var(--paper);color:var(--ink);font-family:Arial,Helvetica,sans-serif} a{text-decoration:none;color:inherit}
    .hero{min-height:88vh;padding:24px;background:linear-gradient(90deg,rgba(245,247,241,.97),rgba(245,247,241,.74)),url("https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1800&q=80") center/cover}
    .nav,.hero-grid,.section,.capture,.footer{max-width:1180px;margin:0 auto}.nav{display:flex;justify-content:space-between;gap:20px;align-items:center;padding:8px 0 34px}.logo{display:flex;align-items:center;gap:10px;font-weight:900;color:var(--teal);font-size:22px}.mark{display:grid;place-items:center;width:38px;height:38px;border-radius:8px;background:var(--green);color:#fff;font-family:Georgia,serif}.nav-links{display:flex;gap:18px;font-size:14px;font-weight:800}
    .notice{max-width:1180px;margin:0 auto 42px;padding:11px 14px;border:1px solid rgba(32,122,89,.24);border-radius:8px;background:rgba(255,255,255,.82);color:#43524e;font-size:13px}
    .hero-grid{display:grid;grid-template-columns:minmax(0,1fr)360px;gap:46px;align-items:center;padding:44px 0 76px}.eyebrow{display:inline-flex;gap:8px;align-items:center;margin:0 0 14px;color:var(--teal);font-size:13px;font-weight:900;text-transform:uppercase}h1{max-width:820px;margin:0;font-family:Georgia,serif;font-size:clamp(42px,6vw,78px);line-height:1} .hero p{max-width:700px;color:#3e4d48;font-size:20px;line-height:1.65}
    .panel,.product-card,.capture-card{border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.94);box-shadow:0 20px 55px rgba(20,33,29,.08)}.panel{padding:26px}.panel h2{margin:0 0 12px;font-family:Georgia,serif;font-size:30px}.panel ul{display:grid;gap:12px;margin:0;padding-left:20px;color:var(--muted);line-height:1.55}
    .button{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 18px;border-radius:8px;background:var(--green);color:#fff;font-weight:900}.secondary{background:#fff;color:var(--ink);border:1px solid var(--line);margin-left:10px}
    .section,.capture{padding:72px 22px}.section-head{max-width:760px;margin-bottom:26px}.section-head h2,.capture h2{margin:0 0 12px;font-family:Georgia,serif;font-size:clamp(34px,4vw,56px);line-height:1.05}.section-head p,.capture p{color:var(--muted);line-height:1.65}
    .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}.product-card{overflow:hidden}.product-card img{width:100%;height:235px;object-fit:cover}.product-body{padding:24px}.meta-row{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px}.meta-row span{padding:7px 10px;border-radius:8px;background:#edf5ef;color:var(--green);font-size:12px;font-weight:900;text-transform:uppercase}.product-card h3{margin:0 0 8px;font-family:Georgia,serif;font-size:34px}.product-card p,.product-card li,.market{color:var(--muted);line-height:1.55}.product-card ul{display:grid;gap:8px;padding-left:20px}.market{padding:12px;border:1px solid var(--line);border-radius:8px;background:#f9fbf7;margin:18px 0}
    .capture{display:grid;grid-template-columns:minmax(0,1fr)420px;gap:34px;border-top:1px solid var(--line)}.capture-card{padding:24px}.capture-card input{width:100%;min-height:46px;border:1px solid var(--line);border-radius:8px;padding:0 12px;margin:8px 0 14px}.capture-card .button{border:0;width:100%}.footer{display:flex;justify-content:space-between;gap:18px;padding:30px 22px;border-top:1px solid var(--line);color:var(--muted);font-size:14px}
    @media(max-width:860px){.nav,.nav-links,.footer{align-items:flex-start;flex-direction:column}.hero-grid,.grid,.capture{grid-template-columns:1fr}.secondary{margin:10px 0 0}.hero{min-height:auto}}
  </style>
</head>
<body>
  <main>
    <section class="hero">
      <nav class="nav">
        <a class="logo" href="/"><span class="mark">BW</span><span>Best Wellness Guide</span></a>
        <div class="nav-links"><a href="#products">Products</a><a href="#checklist">Checklist</a></div>
      </nav>
      <div class="notice">We may earn a commission when readers buy through links on this site. Your price does not change.</div>
      <div class="hero-grid">
        <div>
          <p class="eyebrow">International wellness storefront</p>
          <h1>Discover wellness products for English-speaking buyers.</h1>
          <p>Best Wellness Guide is an exclusive storefront for offers matched to buyers outside Brazil, with clear product fit, market notes, and direct access to official checkout pages.</p>
          <a class="button" href="#products">Browse products</a><a class="button secondary" href="#checklist">Buyer checklist</a>
        </div>
        <aside class="panel">
          <h2>How products are selected</h2>
          <ul>
            <li>Strong demand or proven ClickBank positioning.</li>
            <li>Audience fit for English-speaking countries.</li>
            <li>Official offer page used for shipping and checkout confirmation.</li>
            <li>Original copy, not copied from the producer's sales page.</li>
          </ul>
        </aside>
      </div>
    </section>
    <section class="section" id="products">
      <div class="section-head">
        <p class="eyebrow">Product showcase</p>
        <h2>Featured wellness offers</h2>
        <p>Each card sends the buyer to the official page. Shipping, pricing, subscriptions and refunds must be confirmed on the official checkout before purchase.</p>
      </div>
      <div class="grid">${products.map(productCard).join("")}</div>
    </section>
    <section class="capture" id="checklist">
      <div>
        <p class="eyebrow">Free buyer checklist</p>
        <h2>Compare before buying.</h2>
        <p>Check ingredients, refund terms, shipping country, bundle price, and whether the offer uses a one-time purchase or subscription.</p>
      </div>
      <form class="capture-card" action="mailto:contact@bestwellnessguide.com" method="post" enctype="text/plain">
        <label>Email address<input name="email" type="email" placeholder="you@example.com" required></label>
        <input type="hidden" name="request" value="Send me the wellness buyer checklist.">
        <button class="button" type="submit">Request checklist</button>
      </form>
    </section>
  </main>
  <footer class="footer"><span>Best Wellness Guide</span><span>Informational content only. Not medical advice.</span></footer>
</body>
</html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/robots.txt") {
      return new Response("User-agent: *\nAllow: /\nSitemap: https://bestwellnessguide.com/sitemap.xml\n", {
        headers: { "content-type": "text/plain; charset=utf-8" }
      });
    }
    if (url.pathname === "/sitemap.xml") {
      return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://bestwellnessguide.com/</loc></url></urlset>`, {
        headers: { "content-type": "application/xml; charset=utf-8" }
      });
    }
    return new Response(page(), {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300"
      }
    });
  }
};
