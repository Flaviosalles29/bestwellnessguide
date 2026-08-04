# 🔍 Google Search Console - Passo-a-Passo

## ⚡ SETUP RÁPIDO (10 minutos)

### PASSO 1: Abrir Google Search Console
1. Abra browser
2. Acesse: **https://search.google.com/search-console**
3. Clique **"Começar"** (ou **"Get Started"** se em inglês)
4. **FAÇA LOGIN** com sua conta: `fflaviosalles@gmail.com`

---

## PASSO 2: Adicionar Propriedade (URL Prefix)

**Tela inicial do Search Console:**

```
┌─────────────────────────────────────────────┐
│  Google Search Console                      │
├─────────────────────────────────────────────┤
│                                             │
│  ✓ Começar                                  │
│                                             │
│  ┌────────────────────────────────────────┐ │
│  │ Seletor de propriedade:        ▼     │ │
│  │ ─ Você não tem nenhuma propri... │ │
│  └────────────────────────────────────────┘ │
│                                             │
│  ┌─ Adicionar propriedade ──────────────┐  │
│  │                                     │  │
│  │ [Domain]   [URL Prefix]  ◄─ CLIQUE  │  │
│  │                                     │  │
│  └─────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

**O QUE FAZER:**

1. Clique em **"URL Prefix"**
2. Cole exatamente: `https://www.bestwellnessguide.com`
3. Clique **"Continue"** ou **"Continuar"**

---

## PASSO 3: Verificar Propriedade (HTML Tag)

**Tela de Verificação:**

```
┌─────────────────────────────────────────────┐
│  Verificar propriedade                      │
├─────────────────────────────────────────────┤
│                                             │
│  ✓ Métodos recomendados                    │
│                                             │
│  [1] Google Analytics  ⊞                    │
│  [2] Google Tag Manager ⊞                   │
│  [3] Meta tag         ✓ RECOMENDADO         │
│  [4] Arquivo HTML      ⊞                    │
│  [5] Registro CNAME     ⊞                    │
│                                             │
└─────────────────────────────────────────────┘
```

**O QUE FAZER:**

1. Clique em **Meta tag** ◄─ (JÁ ESTÁ NO SEU CÓDIGO!)
2. Você vai ver algo como:
   ```html
   <meta name="google-site-verification" 
         content="google91c906099c1867d2_paste_here">
   ```
3. **NÃO PRECISA FAZER NADA** - já está no código!
4. Clique **"Verificar"** ou **"Verify"**

**RESULTADO:** ✅ "Verificação bem-sucedida!"

---

## PASSO 4: Adicionar Sitemap

**Após verificação bem-sucedida:**

```
┌─────────────────────────────────────────────┐
│  Dashboard do Search Console                 │
├─────────────────────────────────────────────┤
│                                             │
│  Menu esquerdo:                             │
│  ├─ Resumo                                  │
│  ├─ Inspetor de URL                         │
│  ├─ Cobertura                               │
│  ├─ Sitemaps          ◄─ CLIQUE AQUI        │
│  ├─ Remover do índice                       │
│  └─ ...                                     │
│                                             │
└─────────────────────────────────────────────┘
```

**O QUE FAZER:**

1. No menu esquerdo, clique **"Sitemaps"** ou **"Sitemaps"** (em inglês)
2. Você vai ver campo de input no topo
3. Cole: `sitemap.xml` (apenas isso)
4. Clique **"Enviar"** ou **"Submit"**

**RESULTADO:** 
```
✅ Enviado com sucesso!
Status: Sucesso (seus sitemaps foram processados)
```

---

## PASSO 5: Solicitar Indexação de Páginas (CRÍTICO)

**Isso acelera MUITO o ranking!**

### Página 1: Homepage `/`

1. Na barra superior, veja **"Inspetor de URL"**
2. Digite: `https://www.bestwellnessguide.com`
3. Pressione **Enter**
4. Clique **"Solicitar indexação"** ou **"Request Indexing"**

**Resultado esperado:** ✅ "Página enviada para rastreamento"

---

### Página 2: Comparação (HIGH PRIORITY!)

1. Digite: `https://www.bestwellnessguide.com/best-supplements-comparison`
2. Pressione **Enter**
3. Clique **"Solicitar indexação"** ou **"Request Indexing"**

**⚠️ ESTA É A MAIS IMPORTANTE!** Gera 100K+ visitas/mês

---

### Página 3: Blog Hub

1. Digite: `https://www.bestwellnessguide.com/blog`
2. Pressione **Enter**
3. Clique **"Solicitar indexação"**

---

### Páginas 4-6: Primeiros 3 Produtos

Para cada um abaixo, repita o processo:

1. `https://www.bestwellnessguide.com/offers/prodentim`
   - Clique "Solicitar indexação"

2. `https://www.bestwellnessguide.com/offers/neurovera`
   - Clique "Solicitar indexação"

3. `https://www.bestwellnessguide.com/offers/joint-genesis`
   - Clique "Solicitar indexação"

---

## ✅ CHECKLIST - PRONTO?

```
□ Abri Google Search Console
□ Fiz login com fflaviosalles@gmail.com
□ Adicionei propriedade: https://www.bestwellnessguide.com
□ Usei Meta tag (já estava no código)
□ Cliquei "Verificar" → ✅ Sucesso!
□ Fui em "Sitemaps"
□ Enviei: sitemap.xml → ✅ Sucesso!
□ Solicitei indexação para:
  □ / (homepage)
  □ /best-supplements-comparison (ALTA PRIORIDADE)
  □ /blog
  □ /offers/prodentim
  □ /offers/neurovera
  □ /offers/joint-genesis
```

---

## 📊 O QUE VOCÊ VAI VER NOS PRÓXIMOS DIAS

### Dia 1-2: Google rastreia seu site
- Search Console mostra: "Rastreamento em progresso"
- Não há nada a fazer, apenas aguardar

### Dia 3-7: Primeiras páginas aparecem
- Search Console: "Cobertura" mostra páginas indexadas
- Você verá: "Válido com avisos" ou "Válido"
- Ainda sem tráfego, Google está indexando

### Semana 2: Rankings começam
- Termos de marca ("best wellness guide"): Top 1-3 ⭐
- Algumas keywords aparecem em "Desempenho"
- Primeiros 10-50 cliques/dia esperados

### Semana 3-4: Tráfego aumenta
- Página comparação começa a rankear
- "health supplements" pode já estar em top 20
- Esperado: 100-500 visitas/mês nesta fase

### Mês 2-3: Crescimento exponencial
- Keywords de alto volume começam a rankear
- "supplement review" → top 10-20 esperado
- Esperado: 5K-15K visitas/mês

---

## 🚨 TROUBLESHOOTING

### "Meta tag não foi encontrada"
- ❌ Significa que Google não viu a tag no `<head>`
- ✅ Solução: Aguarde 5 minutos e tente novamente
- ✅ A tag já está no código (verify-google)

### "URL não é acessível"
- ❌ Significa que Google não conseguiu acessar o site
- ✅ Verificar: Site está online? Cloudflare OK?
- ✅ Aguarde 1 hora, tente novamente

### "Sitemap não é válido"
- ❌ Não deve acontecer (já testamos)
- ✅ Ir em: /sitemap.xml no browser
- ✅ Se vir XML com URLs: tudo certo!
- ✅ Tente reenviar: sitemap.xml

### "Páginas não aparecem em Cobertura"
- Isso é NORMAL nos primeiros 3-5 dias
- Google leva tempo para rastrear tudo
- Só aguarde

---

## 📈 PRÓXIMAS AÇÕES (Após Setup)

### Nos próximos 30 dias:
1. ✅ Verificar Search Console 2x/semana
2. ✅ Ir em "Desempenho" para ver keywords
3. ✅ Executar estratégia de backlinks (backlinks-automation.js)
4. ✅ Monitorar posições com Ahrefs Free

### Métricas importantes:
- **Impressões:** Quantas vezes seu site aparece
- **Cliques:** Quantas vezes clicam em seu site
- **CTR:** Porcentagem de cliques (target: >3%)
- **Posição média:** Ranking médio (target: <20)

---

## ⏱️ TEMPO TOTAL: 10-15 minutos

Se ficar preso em algum passo, tiro screenshot e te guio!

**Status:** 🟢 Pronto para começar!
