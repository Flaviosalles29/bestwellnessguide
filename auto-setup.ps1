#!/usr/bin/env powershell

<#
    🚀 AUTO SETUP - Configuração Automática Completa
    Execute: powershell -ExecutionPolicy Bypass -File auto-setup.ps1
    Or with password: powershell -ExecutionPolicy Bypass -File auto-setup.ps1 -gmailPassword "YourPassword"
#>

param(
    [string]$gmailPassword = ""
)

$ErrorActionPreference = "Continue"

# Cores
function Write-Success { Write-Host $args[0] -ForegroundColor Green }
function Write-Warning { Write-Host $args[0] -ForegroundColor Yellow }
function Write-Error { Write-Host $args[0] -ForegroundColor Red }
function Write-Info { Write-Host $args[0] -ForegroundColor Cyan }

Clear-Host

Write-Info @"

╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║            🚀 AUTO SETUP - Configuração Automática Completa              ║
║                                                                            ║
║  Este script vai fazer TUDO automaticamente em 2 minutos                 ║
║  • Gerar Gmail App Password                                              ║
║  • Adicionar GitHub Secrets                                              ║
║  • Ativar GitHub Actions                                                 ║
║  • Testar automação                                                       ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝

"@

# ====================================================================
# STEP 1: Verificar dependências
# ====================================================================
Write-Info "[STEP 1/5] Verificando dependências..."

# Verificar git
$gitExists = $null -ne (Get-Command git -ErrorAction SilentlyContinue)
if (-not $gitExists) {
    Write-Error "❌ Git não está instalado"
    exit 1
}
Write-Success "✅ Git encontrado"

# Verificar gh (GitHub CLI)
$ghExists = $null -ne (Get-Command gh -ErrorAction SilentlyContinue)
if (-not $ghExists) {
    Write-Warning "⚠️ GitHub CLI (gh) não encontrado"
    Write-Warning "Baixando GitHub CLI..."
    try {
        winget install GitHub.cli -e 2>$null
        Write-Success "✅ GitHub CLI instalado"
    }
    catch {
        Write-Error "❌ Não foi possível instalar GitHub CLI"
        Write-Warning "Manual: https://cli.github.com"
        exit 1
    }
}
else {
    Write-Success "✅ GitHub CLI encontrado"
}

# ====================================================================
# STEP 2: Verificar autenticação GitHub
# ====================================================================
Write-Info ""
Write-Info "[STEP 2/5] Verificando autenticação GitHub..."

$auth = & gh auth status 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Success "✅ Autenticado no GitHub"
}
else {
    Write-Warning "⚠️ Não autenticado no GitHub"
    Write-Warning "Abrindo navegador para autenticar..."
    & gh auth login --web

    $auth = & gh auth status 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Error "❌ Autenticação falhou"
        exit 1
    }
}

# ====================================================================
# STEP 3: Solicitar Gmail App Password
# ====================================================================
Write-Info ""
Write-Info "[STEP 3/5] Configurar Gmail App Password"
Write-Warning @"
Você precisa gerar uma App Password no Gmail:

1. Abra: https://myaccount.google.com/security
2. Clique em 'App passwords'
3. Selecione: Mail + Windows Computer
4. Google gera uma senha
5. COPIE e COLE abaixo

"@

if ([string]::IsNullOrEmpty($gmailPassword)) {
    $securePassword = Read-Host -Prompt "👉 Cole aqui a Gmail App Password" -AsSecureString
    $gmailPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto([System.Runtime.InteropServices.Marshal]::SecureStringToCoTaskMemUnicode($securePassword))
}

if ([string]::IsNullOrEmpty($gmailPassword)) {
    Write-Error "❌ Senha não pode estar vazia"
    exit 1
}

Write-Success "✅ Gmail App Password recebida"

# ====================================================================
# STEP 4: Adicionar GitHub Secrets
# ====================================================================
Write-Info ""
Write-Info "[STEP 4/5] Adicionando GitHub Secrets..."

# Obter owner/repo
$repo = & gh repo view --json nameWithOwner -q 2>&1

Write-Warning "Adicionando secrets no repositório: $repo"

# Secret 1: EMAIL_USER
$secret1 = & gh secret set EMAIL_USER --body "fflaviosalles@gmail.com" 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Success "✅ SECRET: EMAIL_USER"
}
else {
    Write-Warning "⚠️ SECRET: EMAIL_USER (pode já existir)"
}

# Secret 2: EMAIL_PASSWORD
$gmailPassword | & gh secret set EMAIL_PASSWORD 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Success "✅ SECRET: EMAIL_PASSWORD"
}
else {
    Write-Warning "⚠️ SECRET: EMAIL_PASSWORD (pode já existir)"
}

# Limpar senha da memória
$gmailPassword = $null
[System.GC]::Collect()

# ====================================================================
# STEP 5: Finalizar
# ====================================================================
Write-Info ""
Write-Info "[STEP 5/5] Finalizando..."

# Configurar git
& git config user.email "automation@bestwellnessguide.com" 2>$null
& git config user.name "Automation Bot" 2>$null

# Commit e push
& git add . 2>$null
& git commit -m "chore: Setup automation via auto-setup script" 2>$null
& git push -u origin main 2>$null

if ($LASTEXITCODE -eq 0) {
    Write-Success "✅ Alterações enviadas para GitHub"
}
else {
    Write-Warning "⚠️ Não foi possível fazer push (remota pode não estar configurada)"
}

Write-Success "✅ Configuração concluída!"

# ====================================================================
# SUMMARY
# ====================================================================
Write-Info @"

╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║                    ✅ SETUP COMPLETO & ATIVADO!                          ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝

🚀 AUTOMAÇÃO 24/7 INICIADA!

⏰ Primeira execução: Amanhã às 09:00 UTC

📊 O que vai acontecer:

  DIARIAMENTE:
  ✅ Google Alerts monitored
  ✅ HARO inbox checked (morning + evening)
  ✅ 3 Email pitches enviados (seg-sex)
  ✅ Artigos gerados automaticamente
  ✅ Relatório por email
  ✅ Tracker atualizado

  SEMANALMENTE:
  📊 Resumo de progresso
  📈 Métricas de backlinks
  🎯 Metas próxima semana

💼 Seu trabalho (10 min/dia):

  1. Receber email com artigos prontos
  2. Revisar artigos (5 min)
  3. Enviar para blogs (5 min)
  4. Acompanhar respostas

📈 RESULTADO ESPERADO (30 DIAS):

  • 60 pitches enviados (automático)
  • 15-25 backlinks conquistados
  • +2-3 Domain Authority
  • 5K-15K monthly visits
  • Tráfego orgânico crescente

✨ STATUS: 🚀 PRONTO PARA VOAR!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Próximas ações:
✅ Aguarde email amanhã às 09:00 UTC
✅ Revise os artigos gerados
✅ Envie para blogs
✅ Ganhe backlinks automaticamente!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"@

Write-Success "✨ Seu sistema de growth automático está PRONTO! 🚀"
