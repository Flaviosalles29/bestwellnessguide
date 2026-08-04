# Sistema Automático de Geração de Artigos

## O que faz?

Quando um blog responde **"SIM"** ao seu pitch, este sistema:

1. ✅ Gera automaticamente um artigo bem estruturado (1500-2500 palavras)
2. ✅ Busca imagens profissionais do Unsplash
3. ✅ Formata em Markdown/HTML pronto para publicação
4. ✅ Salva em `/ready-to-send` para você revisar
5. ✅ Envia notificação (email) para ação

---

## Como funciona

### Fluxo Diário

```
09:00 → Google Alerts check
10:00 → HARO inbox
12:00 → Reddit posts
14:00 → Email pitches (3 propostas enviadas)
           ↓
[Blog responde positivamente dentro de 24-72h]
           ↓
05:00 → Article Generator roda
           ↓
        ✅ Artigo gerado em /ready-to-send
        📧 Você recebe email: "Novo artigo pronto: JointHealth_WellnessBlog.md"
           ↓
[Você revisa + ajusta (5-10 min)]
           ↓
[Você envia para editor]
           ↓
⭐ Publicado = 1 backlink de qualidade
```

---

## Categorias de Artigos Pré-configuradas

O sistema tem templates prontos para 5 categorias:

| Categoria | Tópico | Palavras | Foco |
|-----------|--------|----------|------|
| `dental-health` | Dental health facts | 2,000 | ProDentim, gum health |
| `brain-wellness` | Brain supplement guide | 2,200 | NeuroVera, memory/focus |
| `joint-support` | Joint health buyer guide | 1,800 | Joint Genesis, mobility |
| `blood-sugar` | Blood sugar management | 1,900 | Sugar Defender, energy |
| `hearing-support` | Hearing health guide | 1,700 | Audifort, ear health |

---

## Estrutura de Cada Artigo

```markdown
1. INTRO (200 palavras)
   - Hook sobre o tópico
   - Porque a leitura é importante
   - O que vai aprender

2. 5 FATOS ESSENCIAIS (800 palavras)
   - Fato 1: Ingredientes transparentes
   - Fato 2: Política de reembolso
   - Fato 3: Preços oficiais vs resellers
   - Fato 4: Testes de terceiros
   - Fato 5: Contexto de saúde pessoal

3. TABELA COMPARATIVA (200 palavras)
   - 3 opções principais
   - Benefícios | Preço | Garantia

4. CTA (Call-to-Action) (150 palavras)
   - Link direto para checkout oficial
   - Por que comprar direto
   - Benefícios de segurança

5. FAQ (400 palavras)
   - Perguntas comuns
   - Respostas baseadas em fatos
   - Orientações de saúde

TOTAL: ~1,750-2,200 palavras
```

---

## Como usar

### Opção 1: Automático Diário (Recomendado)

Adicione ao `backlinks-automation.js`:

```javascript
const SCHEDULE = {
  ARTICLE_GENERATE: '0 5 * * *', // 05:00 todo dia
  // ... outros
};

async function checkBlogResponses() {
  // Monitora /ready-to-send
  // Se blog respondeu positivamente no tracker
  // Executa article-generator.js
  const { generateArticle, saveArticle } = await import('./article-generator.js');
  
  const blog = getLatestBlogResponse(); // sua lógica
  if (blog && blog.accepted === true) {
    const article = generateArticle(blog.category, blog.name);
    saveArticle(article);
    sendEmailNotification(article); // você recebe email
  }
}
```

### Opção 2: Manual Sob Demanda

Quando blog responder, execute:

```bash
node article-generator.js
```

Ou adicione um script npm no package.json:

```json
{
  "scripts": {
    "generate:article": "node article-generator.js"
  }
}
```

Depois execute:

```bash
npm run generate:article
```

---

## Estrutura de Pastas

```
D:\bestwellnessguide\
├── article-generator.js           ← Script gerador
├── backlinks-automation.js         ← Adicionar trigger aqui
├── backlinks-tracker.json          ← Monitora respostas
├── ready-to-send/                  ← Artigos prontos
│   ├── dental-health_healthblog_1691234567.md
│   ├── brain-wellness_wellnesstoday_1691234568.md
│   └── ...
└── published/                      ← Artigos já publicados
    ├── dental-health_healthblog_published.md
    └── ...
```

---

## Configuração Passo a Passo

### 1. Instale dependências (já instaladas)

```bash
npm install node-cron
```

### 2. Edite `backlinks-automation.js`

Adicione após as importações:

```javascript
import { generateArticle, saveArticle } from './article-generator.js';
```

Adicione na função `startScheduler()`:

```javascript
// Article generation - 05:00 daily
cron.schedule('0 5 * * *', async () => {
  console.log('🔍 Checking for blog responses...');
  await generateArticlesForAcceptedPitches();
});
```

### 3. Crie função de detecção

```javascript
async function generateArticlesForAcceptedPitches() {
  const tracker = JSON.parse(
    fs.readFileSync('./backlinks-tracker.json', 'utf8')
  );

  for (const blog of tracker.blogs || []) {
    if (blog.status === 'accepted' && !blog.articleGenerated) {
      console.log(`📝 Generating for: ${blog.name}`);
      const article = generateArticle(blog.category, blog.name);
      
      if (article) {
        saveArticle(article);
        
        // Marcar como gerado
        blog.articleGenerated = true;
        blog.articlePath = `ready-to-send/${blog.category}_${blog.name}.md`;
      }
    }
  }

  // Salvar tracker atualizado
  fs.writeFileSync(
    './backlinks-tracker.json',
    JSON.stringify(tracker, null, 2)
  );
}
```

### 4. Faça deploy

```bash
git add article-generator.js backlinks-automation.js ARTICLE-GENERATION-SETUP.md
git commit -m "feat: Add automatic article generation for blog pitches"
git push
```

---

## O que você precisa fazer

### Para cada artigo gerado:

1. **Abra** → `ready-to-send/seu-artigo.md`
2. **Revise** → Leia e ajuste (15 min)
   - Verifique tom
   - Personalize para o blog
   - Confirme links e imagens
3. **Aguarde imagem** → Baixe do Unsplash (grátis)
   - Links já estão no artigo
   - Salve como `/images/article-name.jpg`
4. **Envie** → Copie o conteúdo para email
   - Para: editor@blogname.com
   - Assunto: Seu artigo guest post
   - Body: Conteúdo HTML/Markdown
5. **Mova** → Para `/published/` após publicação

---

## Exemplo de Artigo Gerado

**Nome:** `dental-health_healthblog_weekly_1691234567.md`

**Conteúdo:** 
- Título: "5 Supplement Facts Buyers Need Before Checkout: Dental Health Edition"
- 2,000 palavras
- 5 seções estruturadas
- Links para Unsplash
- CTA direto para checkout oficial
- FAQ com 4 perguntas

**Status:** `ready-for-review`

---

## Métricas Esperadas

| Métrica | Esperado |
|---------|----------|
| Artigos gerados/mês | 15-25 |
| Tempo por artigo (auto) | < 2 segundos |
| Tempo revisar + ajustar | 10-15 min |
| Taxa de publicação | 60-80% |
| Backlinks gerados | 15-25 |

---

## Solução de Problemas

**Problema:** Blog respondeu mas artigo não gerou
- Verifique: `backlinks-tracker.json` tem categoria correta?
- Categoria válida? (dental-health, brain-wellness, etc)
- Execute manual: `npm run generate:article`

**Problema:** Artigo gerado mas precisa de ajustes
- Edite o arquivo em `/ready-to-send/`
- Ajuste tom/estrutura
- Salve
- Envie normalmente

**Problema:** Sem imagens
- Links Unsplash já inclusos
- Baixe em qualidade alta (1200x600px)
- Salve com nome descritivo
- Insira na versão final

---

## Próximos Passos

✅ 1. Adicione gatilho ao `backlinks-automation.js`
✅ 2. Configure monitoramento de `backlinks-tracker.json`
✅ 3. Teste com `node article-generator.js`
✅ 4. Quando blog responder, sistema gera automaticamente
✅ 5. Você revisa e envia em 10-15 minutos
✅ 6. Publicado = backlink

---

## Meta: 30 Dias

- **Pitches enviados:** 60 (3 × 20 dias úteis)
- **Blogs respondendo:** 15-25 (25-40%)
- **Artigos gerados:** 15-25
- **Artigos publicados:** 12-20 (80%)
- **Backlinks conquistados:** 12-20
- **Domain Authority:** +2-3 pontos
- **Tráfego novo:** 5K-15K visitas/mês
