# ⚙️ GitHub Actions - Automação 24/7

## O que faz?

Sistema automático que **roda 24/7 sem você fazer nada**:

- ✅ 09:00 - Google Alerts check
- ✅ 10:00 - HARO morning inbox  
- ✅ 12:00 - Reddit posts (Tue/Thu)
- ✅ 14:00 - Email pitches (Mon-Fri: 3 diárias)
- ✅ 05:00 - Gera artigos automaticamente
- ✅ 18:00 - HARO evening inbox
- ✅ 22:00 - Atualiza tracker
- 📧 Envia relatório diário por email

**+ Relatório semanal** (domingo 19:00 UTC)

---

## Setup (5 minutos)

### Passo 1: Criar app senha no Gmail

1. Abra: https://myaccount.google.com/security
2. Ative "2-Step Verification" (se não tiver)
3. Vá para "App passwords" (aparece depois do 2FA)
4. Selecione:
   - Device: "Windows Computer"
   - App: "Mail"
5. Copie a senha gerada (ex: `abcd efgh ijkl mnop`)

---

### Passo 2: Adicionar secrets ao GitHub

1. Abra seu repositório no GitHub
2. Vá para: **Settings → Secrets and variables → Actions**
3. Clique "New repository secret"

Adicione **2 secrets**:

**Secret 1:**
- Name: `EMAIL_USER`
- Value: `fflaviosalles@gmail.com`

**Secret 2:**
- Name: `EMAIL_PASSWORD`
- Value: `(a senha de app gerada acima)`

---

### Passo 3: Fazer push do workflow

```bash
cd D:\bestwellnessguide
git add .github/workflows/daily-automation.yml
git commit -m "feat: Setup GitHub Actions daily automation"
git push
```

---

### Passo 4: Ativar Actions no repositório

1. Vá para: **GitHub → seu repo → Actions**
2. Clique "I understand my workflows..."
3. Pronto! ✅

---

## Verificar se está funcionando

### Option A: Aguardar primeira execução

- **Próxima execução:** Amanhã às 09:00 UTC
- Você receberá email automático

### Option B: Testar agora (Manual)

1. Vá para: **GitHub → seu repo → Actions**
2. Clique no workflow: "🤖 Daily Automation"
3. Clique "Run workflow"
4. Escolha a branch (main)
5. Clique "Run workflow"

Aguarde ~2 minutos. Você receberá email de teste.

---

## O que você receberá todo dia

### Email Diário (09:00 UTC)

```
✅ Daily Automation Report - 2026-08-04
======================================

✅ COMPLETED TODAY:
- Google Alerts monitored
- HARO inbox checked (morning + evening)
- 3 email pitches sent
- Article generator ran
- Tracker updated

📊 METRICS:
- Articles ready for review: 3
- Blogs tracked: 50
- Total pitches sent this month: 45

🎯 NEXT STEPS:
1. Check ready-to-send/ folder for new articles
2. Review and personalize articles (10 min each)
3. Send to blog editors
4. Track responses in backlinks-tracker.json
```

### Email Semanal (Domingo 19:00 UTC)

```
📊 WEEKLY AUTOMATION REPORT
============================

✅ THIS WEEK'S PERFORMANCE:

📧 Email Pitches: 15 sent
📝 Articles Generated: 5 ready for review
✨ Articles Published: 3 live
🔗 Backlinks Acquired: 3 confirmed

🎯 CUMULATIVE PROGRESS (30 days):
- Total pitches: 45
- Total articles: 12
- Total backlinks: 8
- Domain Authority: +1.2 points (projected)
- Monthly traffic: 2.3K visits (this week)
```

---

## O que você AINDA precisa fazer

### Tarefas Manuais (10 min/dia)

1. **Receber email diário**
2. **Abrir folder** `ready-to-send/`
3. **Revisar artigos** (5 min)
   - Ler para naturalidade
   - Ajustar tom se necessário
   - Confirmar links
4. **Enviar para blogs** (5 min)
   - Copiar conteúdo
   - Enviar email para editor
   - Marcar em tracker.json

---

## Arquitetura

```
GitHub Repository
    ↓
.github/workflows/daily-automation.yml
    ↓
Roda 09:00 UTC (6am EST)
    ↓
├─ Google Alerts check
├─ HARO morning
├─ Reddit posts (Tue/Thu)
├─ Email pitches (Mon-Fri: 3 diárias)
├─ Article generation
├─ HARO evening
├─ Tracker update
└─ Commit articles
    ↓
📧 Email para você (fflaviosalles@gmail.com)
    ↓
Você revisa (10 min)
    ↓
Você envia para blogs
    ↓
⭐ Backlink = sucesso!
```

---

## Logs & Monitoramento

### Visualizar logs no GitHub

1. Vá para: **GitHub → seu repo → Actions**
2. Clique na última execução
3. Clique em "daily-tasks"
4. Veja logs completos

### Parar automação

Se precisar pausar:

1. **GitHub → Settings → Actions → Disable all**
2. Depois: **Enable** para reativar

---

## Troubleshooting

**❌ Workflow não roda**
- Verifique se Actions está habilitado
- Verifique secrets estão configurados
- Aguarde 09:00 UTC do dia seguinte

**❌ Email não chega**
- Verifique se secrets estão corretos
- Teste "Run workflow" manualmente
- Verifique spam/promotions no Gmail
- Autorize novo login em https://myaccount.google.com/device-activity

**❌ Artigos não geram**
- Verifique se blogs responderam
- Arquivo `backlinks-tracker.json` precisa existir
- Verifique `node article-generator.js` funciona localmente

---

## Fluxo Completo de 30 Dias

```
DIA 1-30: GitHub Actions roda automaticamente
    ↓
DAILY (09:00 UTC):
├─ 09:00 → Alerts monitored
├─ 10:00 → HARO morning  
├─ 12:00 → Reddit (Tue/Thu)
├─ 14:00 → 3 email pitches
├─ 05:00 → Articles generated
├─ 18:00 → HARO evening
├─ 22:00 → Tracker updated
└─ 📧 Email para você
    ↓
VOCÊ (10 min/dia):
├─ Abre ready-to-send/
├─ Revisa artigos
└─ Envia para blogs
    ↓
RESULT (30 dias):
├─ 60 pitches enviados
├─ 15-25 blogs responderam
├─ 15-25 artigos gerados
├─ 12-20 artigos publicados
├─ 12-20 backlinks conquistados
├─ +2-3 Domain Authority
└─ 5K-15K monthly visits
```

---

## Próximos Passos

✅ 1. Gere app password no Gmail
✅ 2. Adicione secrets no GitHub  
✅ 3. Faça push do `.github/workflows/daily-automation.yml`
✅ 4. Ative Actions no repositório
✅ 5. Teste com "Run workflow"
✅ 6. Receba primeiro email

**Tempo total setup:** ~5 minutos

**Resultado:** Automação 24/7 sem fazer nada além de revisar artigos 10 min/dia!
