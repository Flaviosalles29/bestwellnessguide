const products = [
  {
    name: "ProDentim",
    vendor: "prodentim",
    category: "Dental Health",
    badge: "Top ClickBank offer",
    market: "Physical product; buyer must confirm delivery country on the official checkout",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
    summary: "A leading dental-health offer built around oral microbiome support, positioned for buyers researching teeth, gums, and fresh-breath routines.",
    bullets: ["Ranked by ClickBank among August 2026 top offers", "Confirmed affiliate HopLink", "Official checkout handles pricing, bundles, shipping and refund terms"],
    cta: "View ProDentim official offer",
    href: "https://hop.clickbank.net/?affiliate=ciacomrep&vendor=prodentim"
  },
  {
    name: "NeuroVera",
    vendor: "neurovera",
    category: "Brain Wellness",
    badge: "Top ClickBank offer",
    market: "Physical product; buyer must confirm delivery country on the official checkout",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
    summary: "A brain-health supplement offer for adults comparing memory, focus, and daily cognitive-support routines.",
    bullets: ["Ranked by ClickBank among August 2026 top offers", "Confirmed affiliate HopLink", "Broad audience fit across English-speaking markets"],
    cta: "View NeuroVera official offer",
    href: "https://hop.clickbank.net/?affiliate=ciacomrep&vendor=neurovera"
  },
  {
    name: "Audifort",
    vendor: "audifort",
    category: "Hearing Support",
    badge: "Top ClickBank offer",
    market: "Physical product; buyer must confirm delivery country on the official checkout",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    summary: "A hearing-support wellness supplement offer for adults comparing natural routines, bundle discounts, and official checkout protection.",
    bullets: ["Ranked by ClickBank among August 2026 top offers", "Confirmed affiliate HopLink", "Official page confirms current bundles and terms"],
    cta: "Check Audifort availability",
    href: "https://hop.clickbank.net/?affiliate=ciacomrep&vendor=audifort"
  },
  {
    name: "Soulmate Sketch",
    vendor: "tinapsc",
    category: "Spiritual Reading",
    badge: "Top ClickBank offer",
    market: "Digital product; available online after purchase terms are confirmed",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80",
    summary: "A long-running digital spirituality offer for buyers interested in soulmate art, relationship insight, and personal readings.",
    bullets: ["Ranked by ClickBank among August 2026 top offers", "Confirmed affiliate HopLink", "Digital delivery removes physical shipping friction"],
    cta: "View Soulmate Sketch official offer",
    href: "https://hop.clickbank.net/?affiliate=ciacomrep&vendor=tinapsc"
  },
  {
    name: "Energy Revolution System",
    vendor: "enrev",
    category: "Alternative Energy",
    badge: "Validated offer",
    market: "Digital product; available online after purchase terms are confirmed",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    summary: "A digital guide offer for homeowners and preparedness buyers researching lower-cost energy ideas and self-reliance projects.",
    bullets: ["Featured by ClickBank in July 2026 top offers", "Confirmed affiliate HopLink", "Strong angle for English-speaking utility-cost audiences"],
    cta: "View Energy Revolution official offer",
    href: "https://hop.clickbank.net/?affiliate=ciacomrep&vendor=enrev"
  },
  {
    name: "Lymph Tonic",
    vendor: "lymphtonic",
    category: "Lymphatic Support",
    badge: "Validated HopLink",
    market: "Physical product; buyer must confirm delivery country on the official checkout",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1200&q=80",
    summary: "A wellness offer for readers researching lymphatic drainage support, herbal formulas, and daily detox-style routines.",
    bullets: ["Confirmed affiliate HopLink", "Clear supplement niche angle", "Official checkout controls delivery, refund and bundle details"],
    cta: "View Lymph Tonic official offer",
    href: "https://hop.clickbank.net/?affiliate=ciacomrep&vendor=lymphtonic"
  },
  {
    name: "Java Burn 2.0",
    vendor: "JAVABURN",
    category: "Coffee Routine",
    badge: "Validated HopLink",
    market: "Physical product; buyer must confirm delivery country on the official checkout",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    summary: "A coffee-compatible wellness offer for buyers who want a supplement that fits an existing morning habit.",
    bullets: ["Built around a daily coffee routine", "Good fit for capsule-resistant buyers", "Official page confirms current bundles and terms"],
    cta: "View Java Burn official page",
    href: "https://hop.clickbank.net/?affiliate=ciacomrep&vendor=JAVABURN"
  },
  {
    name: "VisiFlora",
    vendor: "VISIFLORA",
    category: "Eye + Gut Wellness",
    badge: "Confirmed HopLink",
    market: "English-speaking buyers; verify delivery at checkout",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    summary: "A wellness offer for readers researching eye-support routines and gut-health education.",
    bullets: ["Less generic than standard eye-vitamin pages", "Good educational SEO angle", "Official checkout confirms label and terms"],
    cta: "See VisiFlora official page",
    href: "https://hop.clickbank.net/?affiliate=ciacomrep&vendor=VISIFLORA"
  }
];

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-art">
        <img src="${product.image}" alt="${product.name} product category image" loading="lazy">
        <span>${product.category}</span>
      </div>
      <div class="product-body">
        <div class="meta-row">
          <span>${product.badge}</span>
          <span>${product.vendor}</span>
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
    :root{--ink:#121513;--muted:#5b6560;--paper:#f7f8f4;--panel:#fffdfa;--line:#d8ded6;--green:#13745c;--teal:#075e67;--gold:#d49b2c;--coral:#c94f42}
    *{box-sizing:border-box} body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,Arial,Helvetica,sans-serif} a{text-decoration:none;color:inherit}
    .hero{min-height:92vh;padding:24px 24px 0;background:#fffdfa;position:relative;overflow:hidden}.hero:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,253,250,.98) 0%,rgba(255,253,250,.86) 45%,rgba(255,253,250,.22) 100%),url("https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1900&q=82") center/cover}.hero>*{position:relative}
    .nav,.hero-grid,.section,.capture,.footer{max-width:1220px;margin:0 auto}.nav{display:flex;justify-content:space-between;gap:20px;align-items:center;padding:8px 0 38px}.logo{display:flex;align-items:center;gap:12px;font-weight:950;color:var(--ink);font-size:22px}.mark{display:grid;place-items:center;width:42px;height:42px;border-radius:7px;background:var(--ink);color:#fffdfa;font-family:Georgia,serif}.nav-links{display:flex;gap:18px;font-size:13px;font-weight:900;text-transform:uppercase}.nav-links a{padding-bottom:6px;border-bottom:2px solid transparent}.nav-links a:hover{border-color:var(--gold)}
    .notice{max-width:1220px;margin:0 auto 36px;padding:11px 14px;border:1px solid rgba(19,116,92,.24);border-radius:8px;background:rgba(255,255,255,.78);color:#48534e;font-size:13px;backdrop-filter:blur(12px)}
    .hero-grid{display:grid;grid-template-columns:minmax(0,1fr)430px;gap:44px;align-items:end;padding:36px 0 76px}.eyebrow{display:inline-flex;gap:8px;align-items:center;margin:0 0 16px;color:var(--teal);font-size:12px;font-weight:950;text-transform:uppercase}.eyebrow:before{content:"";width:36px;height:2px;background:var(--gold)}h1{max-width:820px;margin:0;font-family:Georgia,serif;font-size:clamp(44px,7vw,92px);line-height:.94}.hero p{max-width:680px;color:#3d4743;font-size:20px;line-height:1.62}
    .button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 20px;border-radius:8px;background:var(--green);color:#fff;font-weight:950;box-shadow:0 14px 28px rgba(19,116,92,.24)}.secondary{background:#fff;color:var(--ink);border:1px solid var(--line);margin-left:10px;box-shadow:none}.button:hover{transform:translateY(-1px)}
    .showcase{border:1px solid rgba(18,21,19,.12);border-radius:8px;background:rgba(255,255,255,.82);box-shadow:0 24px 70px rgba(18,21,19,.12);overflow:hidden}.showcase img{width:100%;height:250px;object-fit:cover}.showcase-body{padding:24px}.showcase-kicker{color:var(--coral);font-weight:950;font-size:12px;text-transform:uppercase}.showcase h2{margin:8px 0 10px;font-family:Georgia,serif;font-size:34px;line-height:1}.showcase p{font-size:15px;line-height:1.55;color:var(--muted)}
    .section,.capture{padding:76px 22px}.section-head{display:grid;grid-template-columns:minmax(0,1fr)360px;gap:34px;align-items:end;margin-bottom:30px}.section-head h2,.capture h2{margin:0 0 12px;font-family:Georgia,serif;font-size:clamp(36px,5vw,64px);line-height:1}.section-head p,.capture p{color:var(--muted);line-height:1.65}.score-strip{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--line);border-radius:8px;background:#fff;overflow:hidden}.score-strip div{padding:18px;border-right:1px solid var(--line)}.score-strip div:last-child{border-right:0}.score-strip strong{display:block;font-family:Georgia,serif;font-size:34px}.score-strip span{color:var(--muted);font-size:12px;font-weight:900;text-transform:uppercase}
    .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.product-card{display:flex;flex-direction:column;min-height:100%;border:1px solid var(--line);border-radius:8px;background:var(--panel);box-shadow:0 18px 48px rgba(18,21,19,.07);overflow:hidden}.product-card:nth-child(1),.product-card:nth-child(2){grid-column:span 2}.product-art{position:relative;background:#dfe7e2}.product-art img{width:100%;height:255px;object-fit:cover;display:block}.product-card:nth-child(1) .product-art img,.product-card:nth-child(2) .product-art img{height:340px}.product-art span{position:absolute;left:14px;bottom:14px;padding:8px 10px;border-radius:8px;background:rgba(18,21,19,.86);color:#fff;font-size:12px;font-weight:950;text-transform:uppercase}.product-body{display:flex;flex-direction:column;flex:1;padding:22px}.meta-row{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px}.meta-row span{padding:7px 9px;border-radius:7px;background:#eef5f2;color:var(--green);font-size:11px;font-weight:950;text-transform:uppercase}.meta-row span:last-child{background:#fff2dc;color:#8b5a08}.product-card h3{margin:0 0 10px;font-family:Georgia,serif;font-size:32px;line-height:1}.product-card p,.product-card li,.market{color:var(--muted);line-height:1.55}.product-card ul{display:grid;gap:8px;padding-left:19px}.market{padding:12px;border:1px solid var(--line);border-radius:8px;background:#f9fbf7;margin:16px 0}.product-body .button{margin-top:auto;width:100%}
    .capture{display:grid;grid-template-columns:minmax(0,1fr)420px;gap:34px;border-top:1px solid var(--line);background:#fff}.capture-card{border:1px solid var(--line);border-radius:8px;background:#fffdfa;padding:24px}.capture-card input{width:100%;min-height:46px;border:1px solid var(--line);border-radius:8px;padding:0 12px;margin:8px 0 14px}.capture-card .button{border:0;width:100%}.footer{display:flex;justify-content:space-between;gap:18px;padding:30px 22px;border-top:1px solid var(--line);color:var(--muted);font-size:14px}
    @media(max-width:980px){.hero-grid,.section-head,.capture{grid-template-columns:1fr}.grid{grid-template-columns:repeat(2,1fr)}.product-card:nth-child(1),.product-card:nth-child(2){grid-column:span 1}}
    @media(max-width:640px){.nav,.nav-links,.footer{align-items:flex-start;flex-direction:column}.grid,.score-strip{grid-template-columns:1fr}.score-strip div{border-right:0;border-bottom:1px solid var(--line)}.score-strip div:last-child{border-bottom:0}.secondary{margin:10px 0 0}.hero{min-height:auto}.product-card:nth-child(1) .product-art img,.product-card:nth-child(2) .product-art img,.product-art img{height:240px}}
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
          <h1>A curated shelf of proven wellness offers.</h1>
          <p>Best Wellness Guide brings high-interest ClickBank offers into one clean storefront for English-speaking buyers, with direct access to official checkout pages.</p>
          <a class="button" href="#products">Browse products</a><a class="button secondary" href="#checklist">Buyer checklist</a>
        </div>
        <aside class="showcase">
          <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=82" alt="Dental wellness product category image">
          <div class="showcase-body">
            <div class="showcase-kicker">Featured today</div>
            <h2>ProDentim</h2>
            <p>One of ClickBank's top offers for August 2026, placed first in the storefront because the niche, payout profile and buyer intent are strong.</p>
            <a class="button" href="https://hop.clickbank.net/?affiliate=ciacomrep&vendor=prodentim" rel="nofollow sponsored noopener" target="_blank">Open official offer</a>
          </div>
        </aside>
      </div>
    </section>
    <section class="section" id="products">
      <div class="section-head">
        <div>
          <p class="eyebrow">Product showcase</p>
          <h2>Validated offers, arranged like a real storefront.</h2>
          <p>Each card sends the buyer to the official page. Shipping, pricing, subscriptions and refunds must be confirmed on the official checkout before purchase.</p>
        </div>
        <div class="score-strip">
          <div><strong>8</strong><span>offers live</span></div>
          <div><strong>5</strong><span>top-list picks</span></div>
          <div><strong>100%</strong><span>links checked</span></div>
        </div>
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
