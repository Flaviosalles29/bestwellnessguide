# 🤖 Backlinks Automation Setup

## ⚡ Quick Start

### 1. Instale dependências

```bash
cd D:\bestwellnessguide
npm install node-cron
```

### 2. Inicie o scheduler

```bash
node backlinks-automation.js
```

Você verá:
```
╔═══════════════════════════════════════════════════════════╗
║     🚀 BACKLINKS AUTOMATION - DAILY SCHEDULER 🚀          ║
╠═══════════════════════════════════════════════════════════╣
║ Status: ✅ ATIVO - Tarefas sendo executadas...
║ 09:00 → Google Alerts Check
║ 10:00 → HARO Inbox Morning
║ 14:00 → Enviar 3 Pitches
║ ...
╚═══════════════════════════════════════════════════════════╝
```

---

## 📅 Agenda Automática

| Horário | Tarefa | Frequência | Ação |
|---------|--------|-----------|------|
| **09:00** | Google Alerts | Diário | Verifique novos artigos para outreach |
| **10:00** | HARO Morning | Diário | Responda journalist queries |
| **12:00** | Reddit Posts | Terça/Quinta | Poste guias em r/supplements, r/wellness |
| **14:00** | Enviar Pitches | Seg-Sex | 3 emails personalizados/dia |
| **18:00** | HARO Evening | Diário | Check inbox novamente |
| **22:00** | Update Tracker | Diário | Log progress do dia |

---

## 🎯 O que o Scheduler faz

### Tarefa 1: HARO Monitoring (2x/dia)
- **10:00** - Verifica inbox matinal
- **18:00** - Verifica inbox noturno
- Lê queries de jornalistas
- Responde em < 4 horas com seu pitch

**Seu papel:** Abra HARO.com, leia queries, copie/cole sua resposta bio

### Tarefa 2: Google Alerts (1x/dia)
- **09:00** - Verifica novos artigos matching suas keywords
- Templates: "Resource for your readers" outreach

**Seu papel:** Abra Gmail alerts, customize pitch, envie email

### Tarefa 3: Daily Pitches (Seg-Sex)
- **14:00** - Reminder: envie 3 emails personalizados
- Escalação automática: Week 1 (3/dia), Week 2-4 (3/dia)

**Seu papel:** Customize templates, envie emails

### Tarefa 4: Reddit Posts (Terça/Quinta)
- **12:00** - Reminder: post em r/supplements, r/wellness
- 3 posts = high visibility

**Seu papel:** Copie conteúdo, adapte post, responda comentários

### Tarefa 5: Daily Tracker (22:00)
- Organiza log de todas tarefas
- Salva em `backlinks-tracker.json`

**Seu papel:** Atualize status de emails, respostas, links recebidos

---

## 📊 Rastreamento

O scheduler cria arquivo: `backlinks-tracker.json`

```json
{
  "startDate": "2026-08-03T22:19:00.000Z",
  "emailsSent": 0,
  "haroResponses": 0,
  "guestPostsConfirmed": 0,
  "backlinksReceived": 0,
  "tasks": [
    {
      "name": "HARO_MORNING",
      "scheduledAt": "2026-08-04T10:00:00.000Z",
      "details": "Check inbox para queries",
      "status": "PENDING"
    }
  ]
}
```

---

## 🔄 Como usar com PM2 (Produção)

Para manter o scheduler rodando 24/7:

### Instale PM2:
```bash
npm install -g pm2
```

### Inicie com PM2:
```bash
pm2 start backlinks-automation.js --name "backlinks-scheduler"
pm2 save
pm2 startup
```

### Monitorar:
```bash
pm2 logs backlinks-scheduler
pm2 status
```

### Parar:
```bash
pm2 stop backlinks-scheduler
```

---

## 📝 Logs

Arquivo: `backlinks-automation.log`

Exemplo:
```
[2026-08-04T10:00:00.000Z] [SUCCESS] ✓ HARO Morning Check agendado
[2026-08-04T10:05:00.000Z] [INFO] Checking HARO inbox for new queries
[2026-08-04T10:15:00.000Z] [SUCCESS] ✓ Found 2 relevant queries
```

---

## ✅ Workflow Diário (Manual + Automático)

```
09:00
├─ 🤖 Auto: Google Alerts Check
└─ 👤 Você: Abra Gmail, encontre artigos relevantes
   └─ Email outreach template preparado

10:00
├─ 🤖 Auto: HARO Morning Reminder
└─ 👤 Você: Abra HARO.com, responda queries
   └─ Deadline: 4 horas

12:00 (TER/QUI)
├─ 🤖 Auto: Reddit Post Reminder
└─ 👤 Você: Poste em r/supplements, r/wellness
   └─ Responda comentários em < 2h

14:00
├─ 🤖 Auto: Pitch Reminder
└─ 👤 Você: Envie 3 emails personalizados
   └─ Template: backlinks-strategy.md

18:00
├─ 🤖 Auto: HARO Evening Check
└─ 👤 Você: Responda mais queries (menos concorrência)

22:00
├─ 🤖 Auto: Update Tracker
└─ 👤 Você: Abra backlinks-tracker.json
   └─ Update: status, respostas, links recebidos
```

---

## 📈 Métricas Esperadas

Após 30 dias com este scheduler:

```
Semana 1:  5-8 emails + 2-3 HARO = 3-5 backlinks
Semana 2:  10-15 emails + 3-5 HARO = 5-8 backlinks
Semana 3:  15 emails + 5-8 HARO = 5-8 backlinks
Semana 4:  10-15 emails + 5-8 HARO = 5-8 backlinks
─────────────────────────────────────────────
TOTAL:     40-50 emails + 15 HARO = 15-25 backlinks
           DA +2-3 pontos
```

---

## 🚨 Troubleshooting

### Scheduler não inicia
```bash
node backlinks-automation.js
# Error: Cannot find module 'node-cron'
```
**Solução:** `npm install node-cron`

### Port já em uso
Não há port — é só scheduler local. Você pode rodar múltiplos schedulers.

### Quer adicionar horário customizado?
Edite `SCHEDULE` object:
```javascript
const SCHEDULE = {
  HARO_MORNING: '0 10 * * *',    // 10:00 todos dias
  CUSTOM_TIME: '0 15 * * 1',     // 15:00 segunda-feira
};
```

Cron syntax: `MM HH DD MM WW` (minuto hora dia mês semana)

---

## 🔗 Recursos

- `backlinks-strategy.md` — Plano estratégico + templates
- `BACKLINKS-EXECUTION.txt` — Checklist executável
- `backlinks-tracker.json` — Progresso automático

---

## ✨ Próximos Passos

1. ✅ Execute `npm install node-cron`
2. ✅ Execute `node backlinks-automation.js`
3. ✅ Deixe rodando (ou use PM2 para 24/7)
4. ✅ Siga os reminders a cada horário
5. ✅ Update tracker diariamente (22:00)

**Resultado esperado:** 15-25 backlinks em 30 dias + +2-3 DA

---

**Status:** ✅ Scheduler pronto | Teste: hoje mesmo!
