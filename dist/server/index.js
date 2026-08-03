import { prodentimProductHeroV2Base64 } from "./prodentim-product-hero-v2.js";
import { audifortGalleryV1Base64 } from "./audifort-gallery-v1.js";
import { soulmateSketchGalleryV1Base64 } from "./soulmate-sketch-gallery-v1.js";
import { faviconIcoBase64, appleTouchIconBase64, logoPngBase64 } from "./favicon-assets.js";

const faviconSvg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#171b18"/>
      <stop offset="1" stop-color="#0e100f"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="512" height="512" rx="104" fill="url(#bg)"/>
  <rect x="18" y="18" width="476" height="476" rx="90" fill="none" stroke="#2a322c" stroke-width="4"/>
  <text x="256" y="312" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="230" fill="#fffdfa" text-anchor="middle" letter-spacing="-4">BW</text>
  <rect x="146" y="378" width="220" height="14" rx="7" fill="#d49b2c"/>
</svg>`;

const faviconHeadLinks = `<link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`;

const products = [
  {
    name: "ProDentim",
    vendor: "prodentim",
    category: "Dental Health",
    badge: "Top ClickBank offer",
    market: "Physical product; buyer must confirm delivery country on the official checkout",
    image: "https://www.bestwellnessguide.com/assets/prodentim-product-hero-v2.jpg",
    summary: "A leading dental-health offer built around oral microbiome support, positioned for buyers researching teeth, gums, and fresh-breath routines.",
    seoKeywords: ["ProDentim official website", "ProDentim reviews", "ProDentim price", "oral probiotic supplement", "dental health supplement", "gum health support", "fresh breath routine", "where to buy ProDentim"],
    bullets: ["Ranked by ClickBank among August 2026 top offers", "Confirmed affiliate HopLink", "Official checkout handles pricing, bundles, shipping and refund terms"],
    cta: "View ProDentim official offer",
    href: "https://hop.clickbank.net/?affiliate=bwellguide&vendor=prodentim"
  },
  {
    name: "NeuroVera",
    vendor: "neurovera",
    category: "Brain Wellness",
    badge: "Top ClickBank offer",
    market: "Physical product; buyer must confirm delivery country on the official checkout",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
    summary: "A brain-health supplement offer for adults comparing memory, focus, and daily cognitive-support routines.",
    seoKeywords: ["NeuroVera official website", "NeuroVera reviews", "NeuroVera price", "brain health supplement", "memory support supplement", "focus supplement for adults", "cognitive support routine", "where to buy NeuroVera"],
    bullets: ["Ranked by ClickBank among August 2026 top offers", "Confirmed affiliate HopLink", "Broad audience fit across English-speaking markets"],
    cta: "View NeuroVera official offer",
    href: "https://hop.clickbank.net/?affiliate=bwellguide&vendor=neurovera"
  },
  {
    name: "Joint Genesis",
    vendor: "jointgen",
    category: "Joint Support",
    badge: "Ranked ClickBank offer",
    market: "Physical product; buyer must confirm delivery country on the official checkout",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    summary: "A joint-support supplement offer for adults researching mobility, flexibility, and daily healthy-aging routines.",
    seoKeywords: ["Joint Genesis official website", "Joint Genesis reviews", "Joint Genesis price", "joint support supplement", "mobility support supplement", "flexibility support", "healthy aging supplement", "where to buy Joint Genesis"],
    bullets: ["Cited by ClickBank among top dietary supplement products", "Confirmed affiliate HopLink", "Strong fit for the US 40+ wellness audience"],
    cta: "View Joint Genesis official offer",
    href: "https://hop.clickbank.net/?affiliate=bwellguide&vendor=jointgen"
  },
  {
    name: "Sugar Defender",
    vendor: "sugardef",
    category: "Blood Sugar Support",
    badge: "Ranked ClickBank offer",
    market: "Physical product; buyer must confirm delivery country on the official checkout",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
    summary: "A blood-sugar support supplement offer for buyers comparing plant-based wellness formulas and energy-focused routines.",
    seoKeywords: ["Sugar Defender official website", "Sugar Defender reviews", "Sugar Defender price", "blood sugar support supplement", "glucose support formula", "plant based wellness drops", "energy support routine", "where to buy Sugar Defender"],
    bullets: ["Ranked in ClickBank's supplement affiliate list", "Confirmed affiliate HopLink", "Built for mobile-heavy health audiences"],
    cta: "View Sugar Defender official offer",
    href: "https://hop.clickbank.net/?affiliate=bwellguide&vendor=sugardef"
  },
  {
    name: "Audifort",
    vendor: "audifort",
    category: "Hearing Support",
    badge: "Top ClickBank offer",
    market: "Physical product; buyer must confirm delivery country on the official checkout",
    image: "https://www.bestwellnessguide.com/assets/audifort-gallery-v1.png",
    summary: "A hearing-support wellness supplement offer for adults comparing natural routines, bundle discounts, and official checkout protection.",
    seoKeywords: ["Audifort official website", "Audifort reviews", "Audifort price", "hearing support supplement", "ear health supplement", "natural hearing support", "hearing wellness routine", "where to buy Audifort"],
    bullets: ["Ranked by ClickBank among August 2026 top offers", "Confirmed affiliate HopLink", "Official page confirms current bundles and terms"],
    cta: "Check Audifort availability",
    href: "https://hop.clickbank.net/?affiliate=bwellguide&vendor=audifort"
  },
  {
    name: "Soulmate Sketch",
    vendor: "tinapsc",
    category: "Spiritual Reading",
    badge: "Top ClickBank offer",
    market: "Digital product; available online after purchase terms are confirmed",
    image: "https://www.bestwellnessguide.com/assets/soulmate-sketch-gallery-v1.png",
    summary: "A long-running digital spirituality offer for buyers interested in soulmate art, relationship insight, and personal readings.",
    seoKeywords: ["Soulmate Sketch official website", "Soulmate Sketch reviews", "Soulmate Sketch price", "soulmate drawing reading", "psychic soulmate sketch", "relationship reading online", "digital soulmate portrait", "where to buy Soulmate Sketch"],
    bullets: ["Ranked by ClickBank among August 2026 top offers", "Confirmed affiliate HopLink", "Digital delivery removes physical shipping friction"],
    cta: "View Soulmate Sketch official offer",
    href: "https://hop.clickbank.net/?affiliate=bwellguide&vendor=tinapsc"
  },
  {
    name: "Energy Revolution System",
    vendor: "enrev",
    category: "Alternative Energy",
    badge: "Validated offer",
    market: "Digital product; available online after purchase terms are confirmed",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    summary: "A digital guide offer for homeowners and preparedness buyers researching lower-cost energy ideas and self-reliance projects.",
    seoKeywords: ["Energy Revolution System official website", "Energy Revolution System reviews", "home energy guide", "alternative energy system", "off grid energy guide", "lower electric bill ideas", "DIY energy plans", "where to buy Energy Revolution System"],
    bullets: ["Featured by ClickBank in July 2026 top offers", "Confirmed affiliate HopLink", "Strong angle for English-speaking utility-cost audiences"],
    cta: "View Energy Revolution official offer",
    href: "https://hop.clickbank.net/?affiliate=bwellguide&vendor=enrev"
  },
  {
    name: "Lymph Tonic",
    vendor: "lymphtonic",
    category: "Lymphatic Support",
    badge: "Validated HopLink",
    market: "Physical product; buyer must confirm delivery country on the official checkout",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1200&q=80",
    summary: "A wellness offer for readers researching lymphatic drainage support, herbal formulas, and daily detox-style routines.",
    seoKeywords: ["Lymph Tonic official website", "Lymph Tonic reviews", "Lymph Tonic price", "lymphatic support supplement", "lymph drainage support", "detox support formula", "herbal wellness tonic", "where to buy Lymph Tonic"],
    bullets: ["Confirmed affiliate HopLink", "Clear supplement niche angle", "Official checkout controls delivery, refund and bundle details"],
    cta: "View Lymph Tonic official offer",
    href: "https://hop.clickbank.net/?affiliate=bwellguide&vendor=lymphtonic"
  },
  {
    name: "Java Burn 2.0",
    vendor: "JAVABURN",
    category: "Coffee Routine",
    badge: "Validated HopLink",
    market: "Physical product; buyer must confirm delivery country on the official checkout",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    summary: "A coffee-compatible wellness offer for buyers who want a supplement that fits an existing morning habit.",
    seoKeywords: ["Java Burn official website", "Java Burn reviews", "Java Burn price", "coffee supplement", "morning metabolism routine", "weight management coffee supplement", "Java Burn 2.0", "where to buy Java Burn"],
    bullets: ["Built around a daily coffee routine", "Good fit for capsule-resistant buyers", "Official page confirms current bundles and terms"],
    cta: "View Java Burn official page",
    href: "https://hop.clickbank.net/?affiliate=bwellguide&vendor=JAVABURN"
  },
  {
    name: "VisiFlora",
    vendor: "VISIFLORA",
    category: "Eye + Gut Wellness",
    badge: "Confirmed HopLink",
    market: "English-speaking buyers; verify delivery at checkout",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    summary: "A wellness offer for readers researching eye-support routines and gut-health education.",
    seoKeywords: ["VisiFlora official website", "VisiFlora reviews", "VisiFlora price", "eye health supplement", "gut health support", "vision support supplement", "eye and gut wellness", "where to buy VisiFlora"],
    bullets: ["Less generic than standard eye-vitamin pages", "Good educational SEO angle", "Official checkout confirms label and terms"],
    cta: "See VisiFlora official page",
    href: "https://hop.clickbank.net/?affiliate=bwellguide&vendor=VISIFLORA"
  }
];

const siteUrl = "https://www.bestwellnessguide.com";

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function productUrl(product) {
  return `${siteUrl}/offers/${slugify(product.name)}`;
}

function trackedHref(product, placement = "gallery") {
  const suffix = placement === "featured" ? "feat" : placement === "blog" ? "blog" : placement === "offer" ? "offer" : "";
  const tid = `bwg${product.vendor.toLowerCase().replace(/[^a-z0-9]/g, "")}${suffix}`;
  const separator = product.href.includes("?") ? "&" : "?";
  return `${product.href}${separator}tid=${tid}`;
}

function allSeoKeywords() {
  return [...new Set(products.flatMap((product) => product.seoKeywords))];
}

function structuredData() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Best Wellness Guide",
        url: `${siteUrl}/`,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
          width: 512,
          height: 512
        },
        image: `${siteUrl}/logo.png`,
        description: "An independent wellness product discovery brand for English-speaking buyers.",
        keywords: allSeoKeywords().join(", "),
        sameAs: []
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Best Wellness Guide",
        url: `${siteUrl}/`,
        inLanguage: "en-US",
        publisher: { "@id": `${siteUrl}/#organization` }
      },
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/#collection`,
        name: "Best Wellness Guide official wellness offer gallery",
        url: `${siteUrl}/`,
        inLanguage: "en-US",
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: products.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: productUrl(product),
            name: product.name
          }))
        }
      },
      ...products.map((product) => ({
        "@type": "Offer",
        "@id": `${productUrl(product)}#offer`,
        name: product.name,
        category: product.category,
        url: trackedHref(product),
        image: product.image,
        description: product.summary,
        keywords: product.seoKeywords.join(", "),
        seller: { "@id": `${siteUrl}/#organization` },
        availability: "https://schema.org/InStock"
      }))
    ]
  });
}

function productCard(product) {
  const href = trackedHref(product);
  const tid = new URL(href).searchParams.get("tid");
  return `
    <article class="gallery-card product-${product.vendor.toLowerCase().replace(/[^a-z0-9]/g, "")}">
      <div class="product-art">
        <img src="${product.image}" alt="${product.name} ${product.category} official offer research image" loading="lazy">
        <span>${product.badge}</span>
      </div>
      <div class="gallery-body">
        <div class="category">${product.category}</div>
        <h3>${product.name}</h3>
        <p>${product.summary}</p>
        <a class="buy-button" href="${href}" data-product="${product.name}" data-vendor="${product.vendor}" data-tid="${tid}" rel="nofollow sponsored noopener" target="_blank">Buy Now</a>
        <div class="microcopy">Official checkout. Delivery and refund terms are confirmed by the seller.</div>
      </div>
    </article>
  `;
}

const blogPosts = [
  {
    slug: "best-blood-sugar-supplement-sugar-defender-review",
    category: "Blood Sugar Support",
    title: "Best Blood Sugar Supplement 2026: Sugar Defender Review",
    description: "A buyer's guide to Sugar Defender for readers comparing natural blood sugar support formulas, ingredients, and where to buy.",
    keywords: ["blood sugar formula", "blood sugar supplement", "glucose control", "natural blood sugar control", "blood sugar support", "diabetes supplement natural", "blood sugar management"],
    publishDate: "2026-08-03",
    product: products.find((product) => product.vendor === "sugardef"),
    bodyHtml: `
      <p>Readers researching a natural blood sugar control routine usually land on the same short list of plant-based drop formulas. Sugar Defender is one of the offers we get asked about most, so this guide breaks down what the formula is built around, who it tends to fit, and what to confirm before buying.</p>
      <h2>What Sugar Defender is positioned for</h2>
      <p>Sugar Defender is marketed as a liquid blood sugar support formula aimed at adults who want a daily routine that also supports steady energy. It sits in the broader glucose control supplement category alongside capsule-based competitors, but the drop format is the main differentiator buyers mention.</p>
      <h2>What to check before you buy</h2>
      <ul>
        <li>Full ingredient list and any allergens, reviewed against your own health history</li>
        <li>Whether the listing is a one-time purchase or an auto-ship subscription</li>
        <li>Bundle pricing versus single-bottle pricing on the official checkout</li>
        <li>Stated refund window and how to request it</li>
        <li>Delivery country and shipping timelines</li>
      </ul>
      <h2>Who tends to research this offer</h2>
      <p>Most visitors comparing blood sugar management supplements are looking for a natural add-on to an existing routine, not a replacement for medical care. If you're managing diagnosed diabetes, loop in your doctor before adding any new supplement.</p>
    `,
    faqs: [
      { q: "Is Sugar Defender a substitute for medication?", a: "No. It is marketed as a wellness supplement, not a medical treatment. Speak with a doctor about any diagnosed condition before changing your routine." },
      { q: "How is Sugar Defender taken?", a: "As a liquid drop formula, typically added to water or taken directly, per the label on the official product page." },
      { q: "Where should I buy Sugar Defender?", a: "Through the official checkout page linked from this guide, so you get the current price, bundle options, and stated refund terms directly from the seller." }
    ]
  },
  {
    slug: "prodentim-review-best-probiotics-for-teeth",
    category: "Dental Health",
    title: "ProDentim Review: Best Probiotics for Teeth and Gums",
    description: "An overview of ProDentim for readers comparing oral probiotic supplements, gum health support, and natural teeth care routines.",
    keywords: ["probiotics for teeth", "best probiotics for teeth", "teeth probiotics", "gum health supplement", "oral probiotics", "natural teeth whitening"],
    publishDate: "2026-08-03",
    product: products.find((product) => product.vendor === "prodentim"),
    bodyHtml: `
      <p>Oral probiotics are a newer category compared to traditional toothpaste and mouthwash, so it's a reasonable question: how does ProDentim fit into a daily teeth and gum routine, and what should you check before ordering?</p>
      <h2>How ProDentim is positioned</h2>
      <p>ProDentim is one of the more established oral probiotic offers, built around supporting the mouth's natural bacterial balance rather than just masking symptoms topically. It's usually compared against other probiotic-for-teeth capsules and chewables.</p>
      <h2>Buyer checklist</h2>
      <ul>
        <li>Confirm the current bundle pricing and per-bottle cost on the official page</li>
        <li>Check the ingredient panel for anything relevant to your own sensitivities</li>
        <li>Note the refund window before ordering multiple bottles</li>
        <li>Verify shipping country and expected delivery time</li>
      </ul>
      <h2>Who this fits</h2>
      <p>Readers usually land here after researching gum health support or natural teeth whitening options and wanting something that complements, not replaces, brushing, flossing, and regular dental checkups.</p>
    `,
    faqs: [
      { q: "Does ProDentim replace brushing and flossing?", a: "No. It is designed to complement a normal oral hygiene routine, not replace it." },
      { q: "Is ProDentim the same as probiotic toothpaste?", a: "No, ProDentim is taken as a supplement rather than applied topically like toothpaste." },
      { q: "Where can I confirm the current ProDentim price?", a: "Pricing, bundles, and refund terms are set and confirmed on the official checkout page linked in this guide." }
    ]
  },
  {
    slug: "neurovera-brain-supplement-review",
    category: "Brain Wellness",
    title: "Brain Supplements That Actually Get Researched: NeuroVera Overview",
    description: "A practical look at NeuroVera for readers comparing brain, memory, and focus supplements before buying.",
    keywords: ["brain supplement", "memory supplement", "nootropic supplement", "best brain health supplement", "cognitive function supplement", "memory enhancement"],
    publishDate: "2026-08-03",
    product: products.find((product) => product.vendor === "neurovera"),
    bodyHtml: `
      <p>The brain supplement category is crowded, which makes side-by-side research more important than picking whatever ranks first. Here's what to know about NeuroVera before adding it to a memory and focus routine.</p>
      <h2>Positioning</h2>
      <p>NeuroVera is positioned as a daily cognitive-support supplement for adults comparing memory, focus, and general brain health routines, rather than a fast-acting nootropic.</p>
      <h2>What to verify first</h2>
      <ul>
        <li>Full ingredient breakdown against any medications you currently take</li>
        <li>Serving size and how long a bottle is expected to last</li>
        <li>Current bundle pricing versus single-bottle pricing</li>
        <li>Refund policy and delivery region on the official page</li>
      </ul>
      <h2>Setting expectations</h2>
      <p>Cognitive supplements are typically framed as a support routine alongside sleep, diet, and exercise, not a standalone fix. Treat marketing claims with a healthy amount of skepticism and confirm details on the seller's own page.</p>
    `,
    faqs: [
      { q: "How long before NeuroVera shows results?", a: "Timelines vary by person; the official product page outlines the seller's suggested usage window." },
      { q: "Is NeuroVera safe with other supplements?", a: "Check the full ingredient list against anything else you take, and ask a doctor or pharmacist if you're unsure." },
      { q: "Is there a refund option?", a: "Refund terms are set by the seller and confirmed at checkout on the official page." }
    ]
  },
  {
    slug: "natural-energy-without-caffeine-energy-revolution-system",
    category: "Alternative Energy",
    title: "Natural Energy Without Caffeine Crash: Energy Revolution System Guide",
    description: "What to know about the Energy Revolution System digital guide before buying, including who it fits and what to check at checkout.",
    keywords: ["natural energy supplement", "energy without caffeine", "sustained energy", "best energy supplement", "natural energy drink alternative"],
    publishDate: "2026-08-03",
    product: products.find((product) => product.vendor === "enrev"),
    bodyHtml: `
      <p>Energy Revolution System is a different kind of offer from most items on this site: it's a digital guide rather than a supplement, aimed at homeowners and preparedness-minded buyers researching lower-cost, self-reliant energy ideas.</p>
      <h2>What it actually is</h2>
      <p>Instead of a pill or drop, this is an information product delivered digitally after purchase. Readers researching "natural energy without caffeine crash" sometimes land here expecting a supplement, so it's worth being clear upfront: this offer is about home energy independence, not a stimulant-free drink mix.</p>
      <h2>Before you buy</h2>
      <ul>
        <li>Confirm delivery format (digital access) and platform requirements</li>
        <li>Review the stated refund window on the official page</li>
        <li>Check whether the price shown includes any bundled bonuses</li>
      </ul>
      <h2>Who it fits</h2>
      <p>Best suited to readers specifically interested in home energy cost reduction and DIY-style projects, rather than buyers looking for a caffeine-free energy supplement.</p>
    `,
    faqs: [
      { q: "Is this a physical product?", a: "No, it is a digital guide delivered online after purchase." },
      { q: "Is there a refund policy?", a: "Refund terms are set by the seller and shown on the official checkout page." },
      { q: "Does this replace a licensed electrician?", a: "No. Any electrical or structural work should be reviewed by a qualified professional in your area." }
    ]
  },
  {
    slug: "visiflora-vision-health-supplement-guide",
    category: "Eye + Gut Wellness",
    title: "Vision Health Supplements for Eye Strain and Blue Light: VisiFlora Guide",
    description: "An overview of VisiFlora for readers comparing eye health and gut wellness supplements, including what to confirm before buying.",
    keywords: ["vision health supplement", "eye health supplement", "best supplement for vision", "natural vision improvement", "eye strain relief", "blue light protection"],
    publishDate: "2026-08-03",
    product: products.find((product) => product.vendor === "VISIFLORA"),
    bodyHtml: `
      <p>Between screen time and blue light exposure, eye strain relief is one of the more common wellness searches. VisiFlora pairs an eye-support angle with gut-health education, which is a slightly different combination than most single-focus eye vitamin offers.</p>
      <h2>Positioning</h2>
      <p>VisiFlora is marketed toward readers researching vision support routines who are also open to a gut-health connection, rather than a narrow single-nutrient eye vitamin.</p>
      <h2>Buyer checklist</h2>
      <ul>
        <li>Review the ingredient label for anything relevant to existing conditions or medications</li>
        <li>Confirm current bundle pricing on the official checkout</li>
        <li>Check the refund window before committing to multiple bottles</li>
      </ul>
      <h2>Who this fits</h2>
      <p>Readers dealing with screen-related eye strain who want an educational angle on the eye-gut connection, alongside a standard supplement routine.</p>
    `,
    faqs: [
      { q: "Does VisiFlora replace an eye exam?", a: "No. Regular eye exams with a licensed professional are still recommended, especially for any change in vision." },
      { q: "What makes VisiFlora different from typical eye vitamins?", a: "It combines an eye-support angle with gut-health education rather than focusing on a single nutrient." },
      { q: "Where do I check current pricing?", a: "Pricing and bundle options are confirmed on the official checkout page linked in this guide." }
    ]
  },
  {
    slug: "lymph-tonic-lymphatic-immune-support-guide",
    category: "Lymphatic Support",
    title: "Lymphatic System Cleanse and Immune Support: Lymph Tonic Guide",
    description: "What to know about Lymph Tonic for readers researching lymphatic drainage support and herbal immune-support routines.",
    keywords: ["lymphatic system cleanse", "immune system boost", "natural detox supplement", "lymph drainage support"],
    publishDate: "2026-08-03",
    product: products.find((product) => product.vendor === "lymphtonic"),
    bodyHtml: `
      <p>Lymphatic drainage and detox-style routines get a lot of search interest, and Lymph Tonic is the herbal formula offer on our shelf built around that angle.</p>
      <h2>Positioning</h2>
      <p>Lymph Tonic is framed as a daily herbal wellness routine supporting lymphatic drainage, rather than a medical detox protocol. It's aimed at readers already comfortable with herbal supplement routines.</p>
      <h2>What to check first</h2>
      <ul>
        <li>Full herbal ingredient list against any allergies or medications</li>
        <li>Serving instructions and expected bottle duration</li>
        <li>Current pricing and bundle discounts on the official page</li>
        <li>Refund terms and delivery country</li>
      </ul>
      <h2>Who this fits</h2>
      <p>Readers researching lymphatic support or general immune-routine supplements as a daily herbal add-on, not a replacement for medical treatment.</p>
    `,
    faqs: [
      { q: "Is Lymph Tonic a medical detox treatment?", a: "No. It's marketed as an herbal wellness supplement, not a medical procedure or treatment." },
      { q: "Can I take Lymph Tonic with other supplements?", a: "Review the ingredient list against anything else you take, and check with a doctor or pharmacist if unsure." },
      { q: "Where do I buy the official product?", a: "Through the official checkout page linked from this guide, to confirm current price and terms directly from the seller." }
    ]
  }
];

function blogPostUrl(post) {
  return `${siteUrl}/blog/${post.slug}`;
}

function blogStructuredData(post) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${blogPostUrl(post)}#article`,
        headline: post.title,
        description: post.description,
        image: post.product.image,
        datePublished: post.publishDate,
        dateModified: post.publishDate,
        inLanguage: "en-US",
        author: { "@type": "Organization", name: "Best Wellness Guide" },
        publisher: { "@type": "Organization", name: "Best Wellness Guide", "@id": `${siteUrl}/#organization` },
        mainEntityOfPage: blogPostUrl(post),
        keywords: post.keywords.join(", ")
      },
      {
        "@type": "FAQPage",
        "@id": `${blogPostUrl(post)}#faq`,
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a }
        }))
      }
    ]
  });
}

function blogLayout({ title, description, canonical, bodyHtml, jsonLd, image }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <meta name="theme-color" content="#fffdfa">
  ${faviconHeadLinks}
  <link rel="canonical" href="${canonical}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:type" content="article">
  <meta property="og:image" content="${image}">
  <meta name="twitter:card" content="summary_large_image">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XJZLDPC7DZ"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag("js", new Date());
    gtag("config", "G-XJZLDPC7DZ");
  </script>
  <script type="application/ld+json">${jsonLd}</script>
  <style>
    :root{--ink:#121513;--muted:#5b6560;--paper:#f7f8f4;--panel:#fffdfa;--line:#d8ded6;--green:#13745c;--gold:#d49b2c}
    *{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,Arial,Helvetica,sans-serif;line-height:1.6}
    a{color:var(--green)}
    .blog-nav{max-width:760px;margin:0 auto;padding:24px 22px 0;display:flex;justify-content:space-between;align-items:center;font-size:13px;font-weight:900;text-transform:uppercase}
    .blog-nav a{color:var(--ink);text-decoration:none}
    .blog-wrap{max-width:760px;margin:0 auto;padding:24px 22px 80px}
    .blog-eyebrow{color:var(--green);font-size:12px;font-weight:950;text-transform:uppercase;margin:18px 0 6px}
    .blog-wrap h1{font-family:Georgia,serif;font-size:clamp(30px,5vw,46px);line-height:1.1;margin:0 0 14px}
    .blog-meta{color:var(--muted);font-size:13px;margin-bottom:28px}
    .blog-wrap h2{font-family:Georgia,serif;font-size:26px;margin:36px 0 12px}
    .blog-wrap p{color:#2c332f;font-size:16px;margin:0 0 16px}
    .blog-wrap ul{padding-left:20px;margin:0 0 16px}
    .blog-wrap li{margin-bottom:8px;color:#2c332f}
    .disclosure{padding:12px 14px;border:1px solid var(--line);border-radius:8px;background:#fff;color:var(--muted);font-size:13px;margin-bottom:28px}
    .cta-box{margin:32px 0;padding:24px;border:1px solid var(--line);border-radius:10px;background:#fff;text-align:center}
    .cta-box a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 24px;border-radius:8px;background:var(--ink);color:#fffdfa;font-weight:950;text-transform:uppercase;text-decoration:none}
    .faq h3{font-family:Georgia,serif;font-size:18px;margin:20px 0 6px}
    .blog-list{list-style:none;padding:0;margin:0}
    .blog-list li{border:1px solid var(--line);border-radius:8px;padding:18px;margin-bottom:14px;background:#fff}
    .blog-list a{font-family:Georgia,serif;font-size:20px;color:var(--ink);text-decoration:none}
    .blog-list p{color:var(--muted);font-size:14px;margin:8px 0 0}
    .blog-footer{max-width:760px;margin:0 auto;padding:20px 22px;border-top:1px solid var(--line);color:var(--muted);font-size:13px}
  </style>
</head>
<body>
  <div class="blog-nav"><a href="/">&larr; Best Wellness Guide</a><a href="/blog">All guides</a></div>
  <main class="blog-wrap">${bodyHtml}</main>
  <footer class="blog-footer">Best Wellness Guide. Informational content only, not medical advice. We may earn a commission when readers buy through links on this site.</footer>
  <script>
    document.querySelectorAll("[data-tid]").forEach((link) => {
      link.addEventListener("click", () => {
        const eventData = { product: link.dataset.product, vendor: link.dataset.vendor, tid: link.dataset.tid };
        if (window.gtag) window.gtag("event", "affiliate_click", eventData);
        if (window.clarity) window.clarity("event", "affiliate_click_" + link.dataset.tid);
      });
    });
  </script>
</body>
</html>`;
}

function relatedPosts(post, count = 3) {
  const others = blogPosts.filter((candidate) => candidate.slug !== post.slug);
  const start = blogPosts.indexOf(post);
  const ordered = others.slice(start % others.length).concat(others.slice(0, start % others.length));
  return ordered.slice(0, count);
}

function blogPostPage(post) {
  const href = trackedHref(post.product, "blog");
  const tid = new URL(href).searchParams.get("tid");
  const faqHtml = post.faqs.map((faq) => `<div class="faq"><h3>${faq.q}</h3><p>${faq.a}</p></div>`).join("");
  const related = relatedPosts(post);
  const relatedHtml = related.map((other) => `
    <li><a href="/blog/${other.slug}">${other.title}</a></li>
  `).join("");
  const body = `
    <p class="blog-eyebrow">${post.category}</p>
    <h1>${post.title}</h1>
    <p class="blog-meta">Updated ${post.publishDate} &middot; Best Wellness Guide editorial team</p>
    <div class="disclosure">Best Wellness Guide may earn a commission from qualifying purchases through links in this guide. Informational content only, not medical advice.</div>
    ${post.bodyHtml}
    <p><a href="${productUrl(post.product)}">See the full ${post.product.name} offer page on Best Wellness Guide &rarr;</a></p>
    <div class="cta-box">
      <p style="margin:0 0 14px;color:var(--muted)">Ready to compare pricing, bundles and the official checkout?</p>
      <a href="${href}" data-product="${post.product.name}" data-vendor="${post.product.vendor}" data-tid="${tid}" rel="nofollow sponsored noopener" target="_blank">${post.product.cta}</a>
    </div>
    <h2>FAQ</h2>
    ${faqHtml}
    <h2>Related guides</h2>
    <ul class="blog-related">${relatedHtml}</ul>
  `;
  return blogLayout({
    title: post.title,
    description: post.description,
    canonical: blogPostUrl(post),
    bodyHtml: body,
    jsonLd: blogStructuredData(post),
    image: post.product.image
  });
}

function blogIndexPage() {
  const items = blogPosts.map((post) => `
    <li><a href="/blog/${post.slug}">${post.title}</a><p>${post.description}</p></li>
  `).join("");
  const body = `
    <p class="blog-eyebrow">Guides</p>
    <h1>Wellness buying guides</h1>
    <p class="blog-meta">Research notes on the offers we feature, written for readers comparing options before checkout.</p>
    <ul class="blog-list">${items}</ul>
  `;
  return blogLayout({
    title: "Wellness Buying Guides | Best Wellness Guide",
    description: "Research-driven guides comparing blood sugar, dental, brain, energy, vision and immune wellness offers before you buy.",
    canonical: `${siteUrl}/blog`,
    bodyHtml: body,
    jsonLd: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${siteUrl}/blog#collection`,
      name: "Best Wellness Guide buying guides",
      url: `${siteUrl}/blog`
    }),
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=82"
  });
}

function productStructuredData(product, relatedGuide) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${productUrl(product)}#product`,
        name: product.name,
        category: product.category,
        image: product.image,
        description: product.summary,
        url: productUrl(product),
        offers: {
          "@type": "Offer",
          url: trackedHref(product, "offer"),
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Best Wellness Guide" }
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${productUrl(product)}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `Is ${product.name} a legitimate offer?`,
            acceptedAnswer: { "@type": "Answer", text: `${product.name} is listed with an active, confirmed affiliate link. Pricing, guarantees and shipping are set by the official seller and confirmed at checkout.` }
          },
          {
            "@type": "Question",
            name: `Where can I buy ${product.name}?`,
            acceptedAnswer: { "@type": "Answer", text: `Through the official checkout page linked from this page. We recommend avoiding third-party marketplaces that are not the seller's own official page.` }
          },
          {
            "@type": "Question",
            name: `Does ${product.name} offer a refund?`,
            acceptedAnswer: { "@type": "Answer", text: `Refund terms are set by the seller and disclosed on the official checkout page before you complete payment.` }
          }
        ]
      }
    ]
  });
}

function productPage(product) {
  const href = trackedHref(product, "offer");
  const tid = new URL(href).searchParams.get("tid");
  const relatedGuide = blogPosts.find((post) => post.product.vendor === product.vendor);
  const otherProducts = products.filter((candidate) => candidate.vendor !== product.vendor).slice(0, 3);
  const bulletsHtml = product.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
  const otherHtml = otherProducts.map((other) => `<li><a href="${productUrl(other)}">${other.name} &mdash; ${other.category}</a></li>`).join("");
  const guideHtml = relatedGuide
    ? `<p><a href="/blog/${relatedGuide.slug}">Read our full ${product.name} buying guide &rarr;</a></p>`
    : `<p><a href="/blog">See all Best Wellness Guide buying guides &rarr;</a></p>`;
  const body = `
    <p class="blog-eyebrow">${product.category}</p>
    <h1>${product.name} Official Website: Reviews, Price &amp; Where to Buy</h1>
    <p class="blog-meta">${product.badge} &middot; Best Wellness Guide editorial team</p>
    <div class="disclosure">Best Wellness Guide may earn a commission from qualifying purchases through links on this page. Informational content only, not medical advice.</div>
    <p>${product.summary}</p>
    <ul>${bulletsHtml}</ul>
    ${guideHtml}
    <div class="cta-box">
      <p style="margin:0 0 14px;color:var(--muted)">${product.market}</p>
      <a href="${href}" data-product="${product.name}" data-vendor="${product.vendor}" data-tid="${tid}" rel="nofollow sponsored noopener" target="_blank">${product.cta}</a>
    </div>
    <h2>FAQ</h2>
    <div class="faq"><h3>Is ${product.name} a legitimate offer?</h3><p>${product.name} is listed with an active, confirmed affiliate link. Pricing, guarantees and shipping are set by the official seller and confirmed at checkout.</p></div>
    <div class="faq"><h3>Where can I buy ${product.name}?</h3><p>Through the official checkout page linked above. We recommend avoiding third-party marketplaces that are not the seller's own official page.</p></div>
    <div class="faq"><h3>Does ${product.name} offer a refund?</h3><p>Refund terms are set by the seller and disclosed on the official checkout page before you complete payment.</p></div>
    <h2>Other featured offers</h2>
    <ul class="blog-related">${otherHtml}</ul>
  `;
  return blogLayout({
    title: `${product.name} Official Offer, Reviews and Checkout | Best Wellness Guide`,
    description: `Compare ${product.name} details, reviews, price research and official checkout access through Best Wellness Guide.`,
    canonical: productUrl(product),
    bodyHtml: body,
    jsonLd: productStructuredData(product),
    image: product.image
  });
}

function page() {
  const title = "Best Wellness Guide | Official Wellness Offers, Reviews, Prices and Checkouts";
  const description = "Compare official wellness offers, reviews, prices and checkout pages for ProDentim, NeuroVera, Joint Genesis, Sugar Defender, Audifort, Java Burn and more.";
  const canonical = `${siteUrl}/`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <meta name="theme-color" content="#fffdfa">
  ${faviconHeadLinks}
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="en-US" href="${canonical}">
  <link rel="alternate" hreflang="en" href="${canonical}">
  <link rel="alternate" hreflang="x-default" href="${siteUrl}/">
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="preconnect" href="https://hop.clickbank.net">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=82">
  <meta name="twitter:card" content="summary_large_image">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XJZLDPC7DZ"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag("js", new Date());
    gtag("config", "G-XJZLDPC7DZ");
  </script>
  <script type="application/ld+json">${structuredData()}</script>
  <style>
    :root{--ink:#121513;--muted:#5b6560;--paper:#f7f8f4;--panel:#fffdfa;--line:#d8ded6;--green:#13745c;--teal:#075e67;--gold:#d49b2c;--coral:#c94f42}
    *{box-sizing:border-box} body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,Arial,Helvetica,sans-serif} a{text-decoration:none;color:inherit}
    .hero{min-height:92vh;padding:24px 24px 0;background:#fffdfa;position:relative;overflow:hidden}.hero:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,253,250,.98) 0%,rgba(255,253,250,.86) 45%,rgba(255,253,250,.22) 100%),url("https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1900&q=82") center/cover}.hero>*{position:relative}
    .nav,.hero-grid,.section,.capture,.footer{max-width:1220px;margin:0 auto}.nav{display:flex;justify-content:space-between;gap:20px;align-items:center;padding:8px 0 38px}.logo{display:flex;align-items:center;gap:12px;font-weight:950;color:var(--ink);font-size:22px}.mark{display:grid;place-items:center;width:42px;height:42px;border-radius:7px;background:var(--ink);color:#fffdfa;font-family:Georgia,serif}.nav-links{display:flex;gap:18px;font-size:13px;font-weight:900;text-transform:uppercase}.nav-links a{padding-bottom:6px;border-bottom:2px solid transparent}.nav-links a:hover{border-color:var(--gold)}
    .notice{max-width:1220px;margin:0 auto 36px;padding:11px 14px;border:1px solid rgba(19,116,92,.24);border-radius:8px;background:rgba(255,255,255,.78);color:#48534e;font-size:13px;backdrop-filter:blur(12px)}
    .hero-grid{display:grid;grid-template-columns:minmax(0,1fr)430px;gap:44px;align-items:end;padding:36px 0 76px}.eyebrow{display:inline-flex;gap:8px;align-items:center;margin:0 0 16px;color:var(--teal);font-size:12px;font-weight:950;text-transform:uppercase}.eyebrow:before{content:"";width:36px;height:2px;background:var(--gold)}h1{max-width:820px;margin:0;font-family:Georgia,serif;font-size:clamp(44px,7vw,92px);line-height:.94}.hero p{max-width:680px;color:#3d4743;font-size:20px;line-height:1.62}
    .button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 20px;border-radius:8px;background:var(--green);color:#fff;font-weight:950;box-shadow:0 14px 28px rgba(19,116,92,.24)}.secondary{background:#fff;color:var(--ink);border:1px solid var(--line);margin-left:10px;box-shadow:none}.button:hover{transform:translateY(-1px)}
    .showcase{border:1px solid rgba(18,21,19,.12);border-radius:8px;background:rgba(255,255,255,.82);box-shadow:0 24px 70px rgba(18,21,19,.12);overflow:hidden}.showcase img{width:100%;height:250px;object-fit:cover}.showcase-media{position:relative;height:308px;display:grid;place-items:end center;overflow:hidden;background:url("https://www.bestwellnessguide.com/assets/prodentim-product-hero-v2.jpg") center center/cover no-repeat}.showcase-media:before{content:"";position:absolute;inset:-4%;background:url("https://www.bestwellnessguide.com/assets/prodentim-product-hero-v2.jpg") center center/cover no-repeat;transform:scale(1.08);filter:blur(16px) saturate(.96);opacity:.72}.showcase-media:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,0) 34%,rgba(72,106,79,.18) 100%)}.showcase img.featured-product-image{position:relative;z-index:1;width:100%;height:308px;object-fit:contain;background:transparent;padding:0;transform:translateY(8px) scale(1.02);transform-origin:center bottom;filter:drop-shadow(0 18px 28px rgba(56,88,62,.18))}.showcase-body{padding:24px}.showcase-kicker{color:var(--coral);font-weight:950;font-size:12px;text-transform:uppercase}.showcase h2{margin:8px 0 10px;font-family:Georgia,serif;font-size:34px;line-height:1}.showcase p{font-size:15px;line-height:1.55;color:var(--muted)}
    .section,.capture{padding:76px 22px}.section-head{display:grid;grid-template-columns:minmax(0,1fr)360px;gap:34px;align-items:end;margin-bottom:30px}.section-head h2,.capture h2{margin:0 0 12px;font-family:Georgia,serif;font-size:clamp(36px,5vw,64px);line-height:1}.section-head p,.capture p{color:var(--muted);line-height:1.65}.score-strip{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--line);border-radius:8px;background:#fff;overflow:hidden}.score-strip div{padding:18px;border-right:1px solid var(--line)}.score-strip div:last-child{border-right:0}.score-strip strong{display:block;font-family:Georgia,serif;font-size:34px}.score-strip span{color:var(--muted);font-size:12px;font-weight:900;text-transform:uppercase}
    .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.gallery-card{display:flex;flex-direction:column;min-height:100%;border:1px solid var(--line);border-radius:8px;background:var(--panel);box-shadow:0 22px 52px rgba(18,21,19,.08);overflow:hidden;transition:transform .18s ease,box-shadow .18s ease}.gallery-card:hover{transform:translateY(-4px);box-shadow:0 28px 70px rgba(18,21,19,.14)}.gallery-card:nth-child(1),.gallery-card:nth-child(2){grid-column:span 2}.product-art{position:relative;background:#dfe7e2}.product-art img{width:100%;height:280px;object-fit:cover;display:block}.gallery-card:nth-child(1) .product-art img,.gallery-card:nth-child(2) .product-art img{height:390px}.product-prodentim .product-art{background:#86ad92}.product-prodentim .product-art img{object-fit:contain;background:#86ad92;padding:16px}.product-audifort .product-art{display:grid;place-items:center;background:linear-gradient(180deg,#f7f7f4 0%,#f0efe9 100%)}.product-audifort .product-art img{object-fit:contain;object-position:center;background:transparent;padding:22px 18px}.product-tinapsc .product-art{display:grid;place-items:center;background:#f7f3ee}.product-tinapsc .product-art img{object-fit:contain;object-position:center top;background:#f7f3ee;padding:0}.product-art:after{content:"";position:absolute;inset:auto 0 0;height:45%;background:linear-gradient(0deg,rgba(18,21,19,.58),rgba(18,21,19,0))}.product-prodentim .product-art:after{height:26%;background:linear-gradient(0deg,rgba(18,21,19,.34),rgba(18,21,19,0))}.product-audifort .product-art:after{height:10%;background:linear-gradient(0deg,rgba(18,21,19,.08),rgba(18,21,19,0))}.product-tinapsc .product-art:after{height:12%;background:linear-gradient(0deg,rgba(18,21,19,.12),rgba(18,21,19,0))}.product-art span{position:absolute;left:14px;bottom:14px;z-index:1;padding:8px 10px;border-radius:8px;background:rgba(255,253,250,.94);color:var(--ink);font-size:11px;font-weight:950;text-transform:uppercase}.gallery-body{display:flex;flex-direction:column;flex:1;padding:22px}.category{margin-bottom:8px;color:var(--coral);font-size:12px;font-weight:950;text-transform:uppercase}.gallery-card h3{margin:0 0 10px;font-family:Georgia,serif;font-size:32px;line-height:1}.gallery-card p{color:var(--muted);line-height:1.55;margin:0 0 18px}.buy-button{display:flex;align-items:center;justify-content:center;width:100%;min-height:50px;margin-top:auto;border-radius:8px;background:var(--ink);color:#fffdfa;font-weight:950;text-transform:uppercase;letter-spacing:0}.buy-button:hover{background:var(--green);transform:translateY(-1px)}.microcopy{margin-top:10px;color:#68736e;font-size:12px;line-height:1.4;text-align:center}
    .profile{padding:76px 22px;background:#121513;color:#fffdfa}.profile-inner{max-width:1220px;margin:0 auto;display:grid;grid-template-columns:minmax(0,1fr)1fr;gap:36px;align-items:start}.profile h2{margin:0 0 16px;font-family:Georgia,serif;font-size:clamp(36px,5vw,62px);line-height:1}.profile p{color:#d9dfda;line-height:1.7}.profile-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.profile-card{border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:18px;background:rgba(255,255,255,.05)}.profile-card strong{display:block;margin-bottom:8px;color:#f3c266}.profile-card span{color:#d9dfda;line-height:1.5;font-size:14px}
    .capture{display:grid;grid-template-columns:minmax(0,1fr)420px;gap:34px;border-top:1px solid var(--line);background:#fff}.checklist-items{list-style:none;padding:0;margin:18px 0 0;display:grid;gap:12px}.checklist-items li{position:relative;padding-left:26px;color:var(--muted);line-height:1.5}.checklist-items li:before{content:"";position:absolute;left:0;top:6px;width:14px;height:14px;border-radius:4px;background:var(--green)}.capture-card{border:1px solid var(--line);border-radius:8px;background:#fffdfa;padding:24px}.capture-card strong{display:block;margin-bottom:14px;font-family:Georgia,serif;font-size:18px}.capture-guides{list-style:none;padding:0;margin:0 0 18px}.capture-guides li{margin-bottom:10px}.capture-guides a{color:var(--ink);font-size:14px;line-height:1.4;display:block}.capture-guides a:hover{color:var(--green)}.capture-card .button{border:0;width:100%}.footer{display:flex;justify-content:space-between;gap:18px;padding:30px 22px;border-top:1px solid var(--line);color:var(--muted);font-size:14px}
    @media(max-width:980px){.hero-grid,.section-head,.capture,.profile-inner{grid-template-columns:1fr}.grid{grid-template-columns:repeat(2,1fr)}.gallery-card:nth-child(1),.gallery-card:nth-child(2){grid-column:span 1}}
    @media(max-width:640px){.nav,.nav-links,.footer{align-items:flex-start;flex-direction:column}.grid,.score-strip{grid-template-columns:1fr}.score-strip div{border-right:0;border-bottom:1px solid var(--line)}.score-strip div:last-child{border-bottom:0}.secondary{margin:10px 0 0}.hero{min-height:auto}.showcase-media{height:272px}.showcase img.featured-product-image{height:272px;transform:translateY(6px) scale(1.01)}.gallery-card:nth-child(1) .product-art img,.gallery-card:nth-child(2) .product-art img,.product-art img{height:250px}}
  </style>
</head>
<body>
  <main>
    <section class="hero">
      <nav class="nav">
        <a class="logo" href="/"><span class="mark">BW</span><span>Best Wellness Guide</span></a>
        <div class="nav-links"><a href="#products">Products</a><a href="/blog">Blog</a><a href="#profile">Profile</a><a href="#checklist">Checklist</a></div>
      </nav>
      <div class="notice">We may earn a commission when readers buy through links on this site. Your price does not change.</div>
      <div class="hero-grid">
        <div>
          <h1>A curated shelf of proven wellness offers.</h1>
          <p>Best Wellness Guide brings high-interest ClickBank offers into one clean storefront for English-speaking buyers, with direct access to official checkout pages.</p>
          <a class="button" href="#products">Browse products</a><a class="button secondary" href="#checklist">Buyer checklist</a>
        </div>
        <aside class="showcase">
          <div class="showcase-media">
            <img class="featured-product-image" src="https://www.bestwellnessguide.com/assets/prodentim-product-hero-v2.jpg" alt="ProDentim bottle advanced oral probiotics product image">
          </div>
          <div class="showcase-body">
            <div class="showcase-kicker">Featured today</div>
            <h2>ProDentim</h2>
            <p>One of ClickBank's top offers for August 2026, placed first in the storefront because the niche, payout profile and buyer intent are strong.</p>
            <a class="button" href="https://hop.clickbank.net/?affiliate=bwellguide&vendor=prodentim&tid=bwgprodentimfeat" data-product="ProDentim" data-vendor="prodentim" data-tid="bwgprodentimfeat" rel="nofollow sponsored noopener" target="_blank">Open official offer</a>
          </div>
        </aside>
      </div>
    </section>
    <section class="section" id="products">
      <div class="section-head">
        <div>
          <p class="eyebrow">Product showcase</p>
          <h2>Premium gallery of active offers.</h2>
          <p>Choose a product, click Buy Now, and continue on the official checkout page. Shipping, pricing, subscriptions and refunds are confirmed by the seller before purchase.</p>
        </div>
        <div class="score-strip">
          <div><strong>10</strong><span>offers live</span></div>
          <div><strong>7</strong><span>ranked picks</span></div>
          <div><strong>100%</strong><span>links checked</span></div>
        </div>
      </div>
      <div class="grid">${products.map(productCard).join("")}</div>
    </section>
    <section class="profile" id="profile">
      <div class="profile-inner">
        <div>
          <p class="eyebrow">Why shop with us</p>
          <h2>Compare trusted wellness supplements, then check out with confidence.</h2>
          <p>From blood sugar and dental support to brain, energy and vision formulas, we make it simple to compare top wellness offers side by side and head straight to the official checkout when you're ready.</p>
        </div>
        <div class="profile-grid">
          <div class="profile-card"><strong>Verified Official Links</strong><span>Every offer connects straight to the seller's real checkout page, so you always know exactly where your purchase is going.</span></div>
          <div class="profile-card"><strong>Independent Comparisons</strong><span>We compare pricing, bundles and ingredients across top wellness brands so you can decide with confidence, not pressure.</span></div>
          <div class="profile-card"><strong>Secure Checkout, Every Time</strong><span>Payment, shipping and account details are handled entirely by the official seller. We never see or store your information.</span></div>
          <div class="profile-card"><strong>Know Before You Buy</strong><span>Each guide notes the seller's refund window and bundle pricing, so there are no surprises at checkout.</span></div>
        </div>
      </div>
    </section>
    <section class="capture" id="checklist">
      <div>
        <p class="eyebrow">Before you buy</p>
        <h2>What to check before you buy.</h2>
        <ul class="checklist-items">
          <li>Full ingredient list, checked against your own health history</li>
          <li>The seller's stated refund window and how to request it</li>
          <li>Delivery country and expected shipping time</li>
          <li>Bundle pricing versus single-bottle pricing</li>
          <li>Whether the offer is a one-time purchase or an auto-ship subscription</li>
        </ul>
      </div>
      <div class="capture-card">
        <strong>Read the full buying guides</strong>
        <ul class="capture-guides">${blogPosts.slice(0, 4).map((post) => `<li><a href="/blog/${post.slug}">${post.title}</a></li>`).join("")}</ul>
        <a class="button" href="/blog">See all guides</a>
      </div>
    </section>
  </main>
  <footer class="footer"><span>Best Wellness Guide</span><span>Informational content only. Not medical advice.</span></footer>
  <script>
    document.querySelectorAll("[data-tid]").forEach((link) => {
      link.addEventListener("click", () => {
        const eventData = { product: link.dataset.product, vendor: link.dataset.vendor, tid: link.dataset.tid };
        if (window.gtag) window.gtag("event", "affiliate_click", eventData);
        if (window.clarity) window.clarity("event", "affiliate_click_" + link.dataset.tid);
      });
    });
  </script>
</body>
</html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const productMatch = url.pathname.match(/^\/offers\/([^/]+)\/?$/);
    const activeProduct = productMatch ? products.find((product) => slugify(product.name) === productMatch[1]) : null;
    const blogMatch = url.pathname.match(/^\/blog\/([^/]+)\/?$/);
    const blogPost = blogMatch ? blogPosts.find((post) => post.slug === blogMatch[1]) : null;
    if (url.pathname === "/blog" || url.pathname === "/blog/") {
      return new Response(blogIndexPage(), {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=300",
          "x-content-type-options": "nosniff",
          "referrer-policy": "strict-origin-when-cross-origin"
        }
      });
    }
    if (blogMatch && blogPost) {
      return new Response(blogPostPage(blogPost), {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=300",
          "x-content-type-options": "nosniff",
          "referrer-policy": "strict-origin-when-cross-origin"
        }
      });
    }
    if (blogMatch && !blogPost) {
      return Response.redirect(`${siteUrl}/blog`, 301);
    }
    if (url.pathname === "/robots.txt") {
      return new Response("User-agent: *\nAllow: /\nSitemap: https://www.bestwellnessguide.com/sitemap.xml\n", {
        headers: { "content-type": "text/plain; charset=utf-8" }
      });
    }
    if (url.pathname === "/assets/prodentim-product-hero-v2.jpg") {
      const binary = Uint8Array.from(atob(prodentimProductHeroV2Base64), (char) => char.charCodeAt(0));
      return new Response(binary, {
        headers: {
          "content-type": "image/jpeg",
          "cache-control": "public, max-age=31536000, immutable"
        }
      });
    }
    if (url.pathname === "/assets/soulmate-sketch-gallery-v1.png") {
      const binary = Uint8Array.from(atob(soulmateSketchGalleryV1Base64), (char) => char.charCodeAt(0));
      return new Response(binary, {
        headers: {
          "content-type": "image/png",
          "cache-control": "public, max-age=31536000, immutable"
        }
      });
    }
    if (url.pathname === "/assets/audifort-gallery-v1.png") {
      const binary = Uint8Array.from(atob(audifortGalleryV1Base64), (char) => char.charCodeAt(0));
      return new Response(binary, {
        headers: {
          "content-type": "image/png",
          "cache-control": "public, max-age=31536000, immutable"
        }
      });
    }
    if (url.pathname === "/favicon.svg") {
      return new Response(faviconSvg, {
        headers: { "content-type": "image/svg+xml; charset=utf-8", "cache-control": "public, max-age=31536000, immutable" }
      });
    }
    if (url.pathname === "/favicon.ico") {
      const binary = Uint8Array.from(atob(faviconIcoBase64), (char) => char.charCodeAt(0));
      return new Response(binary, {
        headers: { "content-type": "image/x-icon", "cache-control": "public, max-age=31536000, immutable" }
      });
    }
    if (url.pathname === "/apple-touch-icon.png") {
      const binary = Uint8Array.from(atob(appleTouchIconBase64), (char) => char.charCodeAt(0));
      return new Response(binary, {
        headers: { "content-type": "image/png", "cache-control": "public, max-age=31536000, immutable" }
      });
    }
    if (url.pathname === "/logo.png") {
      const binary = Uint8Array.from(atob(logoPngBase64), (char) => char.charCodeAt(0));
      return new Response(binary, {
        headers: { "content-type": "image/png", "cache-control": "public, max-age=31536000, immutable" }
      });
    }
    if (url.pathname === "/sitemap.xml") {
      const entries = [
        { loc: `${siteUrl}/`, priority: "1.0", image: `${siteUrl}/logo.png` },
        ...products.map((product) => ({ loc: productUrl(product), priority: "0.8", image: product.image })),
        { loc: `${siteUrl}/blog`, priority: "0.7", image: null },
        ...blogPosts.map((post) => ({ loc: blogPostUrl(post), priority: "0.7", image: post.product.image }))
      ];
      const sitemap = entries.map((entry) => `<url><loc>${entry.loc}</loc><lastmod>2026-08-03</lastmod><changefreq>weekly</changefreq><priority>${entry.priority}</priority>${entry.image ? `<image:image><image:loc>${entry.image}</image:loc></image:image>` : ""}</url>`).join("");
      return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${sitemap}</urlset>`, {
        headers: { "content-type": "application/xml; charset=utf-8" }
      });
    }
    if (url.pathname === "/google91c906099c1867d2.html") {
      return new Response("google-site-verification: google91c906099c1867d2.html", {
        headers: { "content-type": "text/html; charset=utf-8" }
      });
    }
    if (productMatch && !activeProduct) {
      return Response.redirect(`${siteUrl}/`, 301);
    }
    if (activeProduct) {
      return new Response(productPage(activeProduct), {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=300",
          "x-content-type-options": "nosniff",
          "referrer-policy": "strict-origin-when-cross-origin"
        }
      });
    }
    return new Response(page(), {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
        "x-content-type-options": "nosniff",
        "referrer-policy": "strict-origin-when-cross-origin"
      }
    });
  }
};
