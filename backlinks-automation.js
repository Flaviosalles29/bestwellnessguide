#!/usr/bin/env node

/**
 * Backlinks Automation Scheduler
 * Executa tarefas de backlinks automaticamente todos os dias
 *
 * Uso: node backlinks-automation.js
 * Ou: npm install node-cron && node backlinks-automation.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cron from 'node-cron';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração
const LOG_FILE = path.join(__dirname, 'backlinks-automation.log');
const TRACKER_FILE = path.join(__dirname, 'backlinks-tracker.json');

// Tarefas agendadas
const SCHEDULE = {
  HARO_MORNING: '0 10 * * *',      // 10:00 todo dia - Check HARO inbox
  HARO_EVENING: '0 18 * * *',      // 18:00 todo dia - Check HARO inbox
  ALERTS_CHECK: '0 9 * * *',       // 09:00 todo dia - Check Google Alerts
  PITCHES_WEEK1: '0 14 * * 1,2,3,4,5', // 14:00 seg-sex semana 1 - Enviar pitches
  PITCHES_WEEK2: '0 14 * * 1,2,3,4,5', // 14:00 seg-sex semana 2 - Follow-ups
  REDDIT_POST: '0 12 * * 2,4',    // 12:00 ter/qui - Reddit posts
  TRACKER_UPDATE: '0 22 * * *',    // 22:00 todo dia - Update tracking
};

// ============================================================================
// LOGGING
// ============================================================================

function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level}] ${message}`;

  console.log(logEntry);

  fs.appendFileSync(LOG_FILE, logEntry + '\n', 'utf8');
}

function logSuccess(message) {
  log(`✓ ${message}`, 'SUCCESS');
}

function logError(message, error = null) {
  log(`✗ ${message}${error ? ' - ' + error.message : ''}`, 'ERROR');
}

// ============================================================================
// TAREFAS
// ============================================================================

function createTaskReminder(taskName, details) {
  return {
    name: taskName,
    scheduledAt: new Date(),
    details: details,
    status: 'PENDING',
  };
}

// Tarefa 1: HARO Morning Check
function checkHAROInbox() {
  const task = createTaskReminder('HARO_MORNING', 'Check inbox para queries');

  logSuccess('HARO Morning Check agendado');
  console.log(`
╔════════════════════════════════════════════════════════════╗
║ 🎯 TAREFA: HARO MORNING CHECK                             ║
╠════════════════════════════════════════════════════════════╣
║ ⏰ ${new Date().toLocaleTimeString('pt-BR')}                                 ║
║ 📋 Ação: Abra https://www.haro.com/inbox                 ║
║ 🎯 Goal: Responda queries relevantes em < 4h             ║
║ 💡 Dica: Look for supplement/wellness/health queries      ║
╠════════════════════════════════════════════════════════════╣
║ Template Response:                                         ║
║ [Your bio from profile + website link]                    ║
╚════════════════════════════════════════════════════════════╝
  `);

  updateTracker(task);
}

// Tarefa 2: HARO Evening Check
function checkHAROEvening() {
  const task = createTaskReminder('HARO_EVENING', 'Check inbox novamente');

  logSuccess('HARO Evening Check agendado');
  console.log(`
╔════════════════════════════════════════════════════════════╗
║ 🎯 TAREFA: HARO EVENING CHECK                             ║
╠════════════════════════════════════════════════════════════╣
║ ⏰ ${new Date().toLocaleTimeString('pt-BR')}                                 ║
║ 📋 Ação: Verifique novas queries no HARO                  ║
║ 🎯 Goal: Responda 2-3 queries se possível                 ║
║ 💡 Tip: Late responses têm menos competição              ║
╚════════════════════════════════════════════════════════════╝
  `);

  updateTracker(task);
}

// Tarefa 3: Google Alerts Check
function checkGoogleAlerts() {
  const task = createTaskReminder('ALERTS_CHECK', 'Monitore Google Alerts');

  logSuccess('Google Alerts Check agendado');
  console.log(`
╔════════════════════════════════════════════════════════════╗
║ 🎯 TAREFA: GOOGLE ALERTS CHECK                            ║
╠════════════════════════════════════════════════════════════╣
║ ⏰ ${new Date().toLocaleTimeString('pt-BR')}                                 ║
║ 📋 Ação: Abra Gmail → Google Alerts                       ║
║ 🎯 Goal: Envie 1 outreach se encontrado artigo relevante  ║
║ 📧 Template:                                              ║
║    Subject: "Resource for your [topic] readers"           ║
║    [Personalized pitch with link]                         ║
╚════════════════════════════════════════════════════════════╝
  `);

  updateTracker(task);
}

// Tarefa 4: Enviar Pitches
function sendWeeklyPitches() {
  const pitchSchedule = {
    'Segunda': 3,
    'Terça': 3,
    'Quarta': 3,
    'Quinta': 3,
    'Sexta': 3,
  };

  const today = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
  const taskName = `PITCH_${today.toUpperCase()}`;
  const task = createTaskReminder(taskName, `Envie 3 pitches - ${today}`);

  logSuccess(`Envio de pitches agendado para ${today}`);
  console.log(`
╔════════════════════════════════════════════════════════════╗
║ 🎯 TAREFA: ENVIAR PITCHES DO DIA                          ║
╠════════════════════════════════════════════════════════════╣
║ ⏰ ${new Date().toLocaleTimeString('pt-BR')} - ${today}          ║
║ 📋 Ação: Envie 3 emails personalizados                    ║
║ 📊 Meta: 15 emails/semana = 50-60 emails/mês             ║
║ ✅ Checklist:                                              ║
║    □ Personalize subject line com blog focus              ║
║    □ Mencione conteúdo específico do blog                 ║
║    □ Customize assinatura com seu info                    ║
║    □ Salve resposta de cada email no tracker              ║
║ 💾 Log: backlinks-tracker.json                             ║
╚════════════════════════════════════════════════════════════╝
  `);

  updateTracker(task);
}

// Tarefa 5: Reddit Posts
function postReddit() {
  const posts = {
    'Terça': {
      subreddit: 'r/supplements',
      title: 'Before You Buy: A Supplement Buyer\'s Verification Checklist',
    },
    'Quinta': {
      subreddit: 'r/wellness',
      title: 'Researching Wellness Products? Here\'s What Buyers Actually Verify',
    },
  };

  const today = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
  const post = posts[today];

  if (post) {
    const task = createTaskReminder('REDDIT_POST', `Post em ${post.subreddit}`);
    logSuccess(`Reddit post agendado para ${today}`);
    console.log(`
╔════════════════════════════════════════════════════════════╗
║ 🎯 TAREFA: POSTAR NO REDDIT                               ║
╠════════════════════════════════════════════════════════════╣
║ ⏰ ${new Date().toLocaleTimeString('pt-BR')} - ${today}          ║
║ 📍 Subreddit: ${post.subreddit}                              ║
║ 📝 Title: ${post.title}                  ║
║ ✅ Actions:                                                ║
║    □ Copie conteúdo de backlinks-strategy.md              ║
║    □ Adapte para comunidade do subreddit                  ║
║    □ Inclua link: website.com/blog/[topic]               ║
║    □ Responda todos comentários em < 2h                   ║
║    □ Note usernames = potential future links              ║
╚════════════════════════════════════════════════════════════╝
    `);
    updateTracker(task);
  }
}

// Tarefa 6: Update Tracker
function updateTrackerDaily() {
  logSuccess('Tracker diário sendo atualizado');
  console.log(`
╔════════════════════════════════════════════════════════════╗
║ 📊 TAREFA: UPDATE DAILY TRACKER                           ║
╠════════════════════════════════════════════════════════════╣
║ 📋 Ação: Abra backlinks-tracker.json (Google Sheets)      ║
║ ✅ Colunas a preencher:                                    ║
║    □ Status (Sent/Waiting/Interested/Confirmed)           ║
║    □ Response Date (se houver resposta)                   ║
║    □ Follow-up needed? (sim/não)                          ║
║    □ Link Received (URL se confirmado)                    ║
║ 📈 Métricas:                                               ║
║    Emails enviados: ___/50                                 ║
║    Respostas: ___/15                                       ║
║    Guest posts confirmados: ___/8                          ║
║    Backlinks recebidos: ___/15-20                          ║
╚════════════════════════════════════════════════════════════╝
  `);

  updateTracker(createTaskReminder('TRACKER_UPDATE', 'Log daily progress'));
}

// ============================================================================
// TRACKER
// ============================================================================

function initTracker() {
  if (!fs.existsSync(TRACKER_FILE)) {
    const initialTracker = {
      startDate: new Date(),
      emailsSent: 0,
      haroResponses: 0,
      redditPosts: 0,
      guestPostsConfirmed: 0,
      backlinksReceived: 0,
      tasks: [],
    };
    fs.writeFileSync(TRACKER_FILE, JSON.stringify(initialTracker, null, 2));
  }
}

function updateTracker(task) {
  const tracker = JSON.parse(fs.readFileSync(TRACKER_FILE, 'utf8'));
  tracker.tasks.push(task);
  fs.writeFileSync(TRACKER_FILE, JSON.stringify(tracker, null, 2));
}

// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

function displaySchedule() {
  console.log(`
╔═══════════════════════════════════════════════════════════════════╗
║           🚀 BACKLINKS AUTOMATION - DAILY SCHEDULER 🚀            ║
╠═══════════════════════════════════════════════════════════════════╣
║ Status: ✅ ATIVO - Tarefas sendo executadas automaticamente       ║
║ Log: ${LOG_FILE.substring(0, 50)}...║
║                                                                   ║
║ AGENDA DIÁRIA:                                                    ║
║ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ║
║ 09:00 → Google Alerts Check (diário)                             ║
║ 10:00 → HARO Inbox Morning (diário)                              ║
║ 12:00 → Reddit Posts (terça/quinta)                              ║
║ 14:00 → Enviar 3 Pitches (seg-sex)                               ║
║ 18:00 → HARO Inbox Evening (diário)                              ║
║ 22:00 → Update Tracker (diário)                                  ║
║                                                                   ║
║ META MENSAL:                                                      ║
║ • 40-50 emails enviados                                          ║
║ • 10-15 HARO responses                                           ║
║ • 15-25 backlinks de qualidade                                   ║
║ • +2-3 pontos Domain Authority                                   ║
║                                                                   ║
║ PRÓXIMAS AÇÕES:                                                   ║
║ 1. HOJE: Register HARO.com                                       ║
║ 2. HOJE: Setup 10 Google Alerts                                  ║
║ 3. HOJE: Send first 5 pitches                                    ║
║ 4. Create Google Sheet tracker                                   ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
  `);
}

// ============================================================================
// MAIN
// ============================================================================

function startScheduler() {
  initTracker();
  displaySchedule();

  log('🚀 Backlinks Automation iniciado', 'START');

  // HARO Morning
  cron.schedule(SCHEDULE.HARO_MORNING, () => {
    checkHAROInbox();
  });

  // HARO Evening
  cron.schedule(SCHEDULE.HARO_EVENING, () => {
    checkHAROEvening();
  });

  // Google Alerts
  cron.schedule(SCHEDULE.ALERTS_CHECK, () => {
    checkGoogleAlerts();
  });

  // Pitches
  cron.schedule(SCHEDULE.PITCHES_WEEK1, () => {
    sendWeeklyPitches();
  });

  // Reddit
  cron.schedule(SCHEDULE.REDDIT_POST, () => {
    postReddit();
  });

  // Tracker Update
  cron.schedule(SCHEDULE.TRACKER_UPDATE, () => {
    updateTrackerDaily();
  });

  console.log('\n✅ Scheduler ativo. Pressione Ctrl+C para parar.\n');

  log('Todos os cron jobs foram registrados', 'INFO');
}

// Listener para graceful shutdown
process.on('SIGINT', () => {
  log('⏹️  Scheduler parado pelo usuário', 'SHUTDOWN');
  console.log('\n👋 Scheduler finalizado.\n');
  process.exit(0);
});

// Start
startScheduler();

export { startScheduler, updateTracker, log };
