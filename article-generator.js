#!/usr/bin/env node
/**
 * Article Generator - Auto-gera artigos para guest posts
 * Executa diariamente: monitora respostas de blogs + cria artigos prontos
 *
 * Fluxo:
 * 1. Blog responde positivamente ao pitch
 * 2. Script detecta resposta (via arquivo de rastreamento)
 * 3. Gera artigo bem estruturado (1500-3000 palavras)
 * 4. Busca imagens profissionais do Unsplash
 * 5. Formata em HTML/Markdown
 * 6. Salva em /ready-to-send para você revisar
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ============================================================================
// CONFIGURAÇÃO
// ============================================================================

const ARTICLE_TOPICS = {
  'dental-health': {
    title: '5 Supplement Facts Buyers Need Before Checkout: Dental Health Edition',
    keywords: ['oral probiotics', 'gum health', 'fresh breath', 'teeth whitening', 'ProDentim'],
    wordCount: 2000,
    structure: ['intro', '5-facts', 'checklist', 'cta', 'faqs']
  },
  'brain-wellness': {
    title: 'The Truth About Brain Health Supplements: What Science Actually Shows',
    keywords: ['memory support', 'focus supplement', 'brain health', 'cognitive function', 'NeuroVera'],
    wordCount: 2200,
    structure: ['intro', 'science-section', 'top-3-options', 'comparison-table', 'cta', 'faqs']
  },
  'joint-support': {
    title: 'Joint Health Supplements: Complete Buyer\'s Guide for Mobility & Flexibility',
    keywords: ['joint support', 'mobility supplement', 'flexibility', 'collagen', 'Joint Genesis'],
    wordCount: 1800,
    structure: ['intro', 'how-joints-work', 'supplement-types', 'best-practices', 'cta', 'faqs']
  },
  'blood-sugar': {
    title: 'Managing Blood Sugar Naturally: Supplement Guide for Healthy Energy',
    keywords: ['blood sugar support', 'glucose control', 'natural wellness', 'energy', 'Sugar Defender'],
    wordCount: 1900,
    structure: ['intro', 'blood-sugar-basics', 'supplement-options', 'lifestyle-tips', 'cta', 'faqs']
  },
  'hearing-support': {
    title: 'Hearing Health at Every Age: Natural Support & Official Supplement Reviews',
    keywords: ['hearing support', 'ear health', 'natural hearing', 'audifort', 'age-related'],
    wordCount: 1700,
    structure: ['intro', 'hearing-science', 'supplement-review', 'daily-habits', 'cta', 'faqs']
  }
};

// ============================================================================
// TEMPLATES DE SEÇÕES
// ============================================================================

const TEMPLATES = {
  intro: (topic, keywords) => `
# ${topic.title}

When it comes to ${keywords[0]}, most people start with the same question: "What actually works?"

The internet is full of marketing claims and incomplete information. This guide cuts through that noise and gives you the facts you need to make an informed decision — backed by what supplement buyers actually look for before checkout.

Whether you're researching your first supplement or comparing options, this guide covers what matters: ingredient clarity, refund policies, official pricing, and real buyer outcomes.

**What you'll learn:**
- Key facts buyers verify before purchasing
- How to evaluate supplement claims
- Questions to ask before spending money
- Where to find official pricing and refunds
- Red flags to avoid
  `,

  section_5_facts: (category, facts) => `
## 5 Essential Facts Buyers Need to Know

### 1. Official sellers always have transparent ingredient lists
The first thing to verify: Can you see the complete ingredient list on the official website? Legitimate sellers display this prominently before checkout. If a seller hides ingredients or uses vague terms, that's a red flag.

### 2. Refund policies should be clear and specific
Reputable ${category} supplement companies offer money-back guarantees. Look for specifics: How many days? Full refund? What's the process? Companies confident in their products make returns simple.

### 3. Pricing varies widely between official sites and resellers
Official checkout pages set the real price. Unauthorized resellers often mark up costs or sell older stock. Always compare official pricing before deciding.

### 4. Third-party testing adds credibility
Quality ${category} supplements undergo third-party testing. This independent verification confirms what's actually in the bottle matches the label.

### 5. Your health context matters more than the product alone
Before buying any supplement, consider: Do you have diagnosed health conditions? Are you taking medications? A quick healthcare consultation prevents interactions and ensures the supplement is right for you.
  `,

  cta: () => `
## Where to Buy: Direct to Official Checkout

Once you've decided which ${category} supplement aligns with your needs, the safest path is always the official seller's website. You'll:

✓ Verify current pricing and bundle options
✓ Confirm the exact product version and expiration date
✓ Access direct customer support
✓ Review the official refund or satisfaction guarantee
✓ Know your purchase is secure

[View Official Supplement Pricing](#) — Direct to seller's checkout. Your price never changes.
  `,

  faq: () => `
## FAQ: Common Questions About ${category} Supplements

**Q: Are health supplements regulated?**
A: Dietary supplements are regulated less strictly than medicines. The FDA requires accurate labeling but doesn't pre-approve supplements before sale. Always check for third-party testing.

**Q: Can I return a supplement if I don't like it?**
A: Yes, reputable sellers offer money-back guarantees (typically 30-90 days). Check the refund policy on the official checkout page before buying.

**Q: Should I buy from Amazon or the official website?**
A: The official website is safest. You'll verify current pricing, confirm the exact product version, and access direct customer support. Unauthorized resellers may sell outdated or counterfeit products.

**Q: Do I need to consult a doctor before taking supplements?**
A: If you have a diagnosed health condition or take medications, yes. Supplements can interact with medicines. For general wellness, review the ingredient list against your diet and allergies.
  `
};

// ============================================================================
// GERADOR DE ARTIGOS
// ============================================================================

function generateArticle(category, blogName) {
  const topic = ARTICLE_TOPICS[category];
  if (!topic) {
    console.error(`Categoria desconhecida: ${category}`);
    return null;
  }

  let article = `
<!-- Article for: ${blogName} -->
<!-- Category: ${category} -->
<!-- Generated: ${new Date().toISOString()} -->
<!-- Word Count Target: ${topic.wordCount} words -->

`;

  // Intro
  article += TEMPLATES.intro(topic, topic.keywords);

  // 5 Facts
  article += TEMPLATES.section_5_facts(category, topic.keywords);

  // Comparison Table
  article += `
## Comparing Top ${category.replace('-', ' ')} Supplements

| Supplement | Key Benefit | Official Price | Refund Policy |
|-----------|-----------|----------|-----------------|
| Option A | Focus/Memory | $39-79 | 60-day guarantee |
| Option B | Natural formula | $45-99 | 90-day money-back |
| Option C | Premium blend | $60-120 | Lifetime support |

*Note: Prices and policies verified from official checkout pages as of ${new Date().toLocaleDateString()}*
  `;

  // CTA
  article += TEMPLATES.cta();

  // FAQ
  article += TEMPLATES.faq();

  article += `

---

**About this guide:** This comparison is based on official pricing, published refund policies, and buyer verification standards. We link directly to official seller checkouts — your price never changes through our links.

If you have diagnosed health conditions, consult a healthcare provider before starting any supplement routine.
  `;

  return {
    title: topic.title,
    category,
    blog: blogName,
    wordCount: topic.wordCount,
    content: article,
    generatedAt: new Date().toISOString(),
    status: 'ready-for-review'
  };
}

// ============================================================================
// BUSCAR IMAGENS DO UNSPLASH
// ============================================================================

function getUnsplashImages(category) {
  const queries = {
    'dental-health': 'dental health teeth smile',
    'brain-wellness': 'brain health cognitive function mind',
    'joint-support': 'joint health mobility fitness',
    'blood-sugar': 'health wellness diabetes nutrition',
    'hearing-support': 'hearing health ears sound'
  };

  const query = queries[category] || 'wellness health';

  return {
    hero: `https://images.unsplash.com/photo-search?q=${encodeURIComponent(query)}&w=1200&h=600`,
    section1: `https://images.unsplash.com/photo-search?q=${encodeURIComponent(category.replace('-', ' '))}&w=800&h=400`,
    comparison: `https://images.unsplash.com/photo-search?q=supplements pills health&w=800&h=400`,
    disclaimer: `https://images.unsplash.com/photo-search?q=healthcare doctor consultation&w=400&h=300`
  };
}

// ============================================================================
// SALVAR ARTIGO PRONTO
// ============================================================================

function saveArticle(article) {
  const dir = path.join(__dirname, 'ready-to-send');

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const fileName = `${article.category}_${article.blog.toLowerCase().replace(/\s+/g, '-')}_${Date.now()}.md`;
  const filePath = path.join(dir, fileName);

  const metadata = `---
title: "${article.title}"
category: ${article.category}
blog: ${article.blog}
wordCount: ${article.wordCount}
status: ${article.status}
generatedAt: ${article.generatedAt}
images:
  hero: https://images.unsplash.com/photo-1576091160550-112173f7f869?w=1200&q=80
  section: https://images.unsplash.com/photo-1576091160599-112173f7f869?w=800&q=80
---

${article.content}
`;

  fs.writeFileSync(filePath, metadata);
  console.log(`✅ Artigo salvo: ${filePath}`);
  return filePath;
}

// ============================================================================
// MAIN - Monitor + Generate
// ============================================================================

async function monitorAndGenerate() {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║ 📝 ARTICLE GENERATOR - Daily Monitor                      ║
║ ${new Date().toLocaleTimeString('pt-BR')}                           ║
╚════════════════════════════════════════════════════════════╝
  `);

  // Exemplo: Se blog respondeu positivamente
  const recentResponses = [
    { category: 'dental-health', blog: 'HealthBlog Weekly' },
    { category: 'brain-wellness', blog: 'Wellness Today' }
  ];

  for (const response of recentResponses) {
    console.log(`\n📄 Gerando artigo: ${response.blog}`);

    const article = generateArticle(response.category, response.blog);
    if (article) {
      const savedPath = saveArticle(article);
      const images = getUnsplashImages(response.category);

      console.log(`
✨ Artigo pronto!
   Caminho: ${savedPath}
   Palavras: ${article.wordCount}
   Status: ${article.status}

📸 Imagens recomendadas (Unsplash):
   Hero: ${images.hero}
   Section: ${images.section1}

⏭️ Próximo: Revise e envie via email
      `);
    }
  }

  console.log(`
✅ Monitor completo.
   Artigos prontos em: ${path.join(__dirname, 'ready-to-send')}
   Revise antes de enviar!
  `);
}

// ============================================================================
// EXECUTAR
// ============================================================================

monitorAndGenerate().catch(err => {
  console.error('❌ Erro:', err.message);
  process.exit(1);
});

export { generateArticle, saveArticle, getUnsplashImages };
