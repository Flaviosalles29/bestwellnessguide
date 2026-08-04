# AdSense Setup para bestwellnessguide.com

## ⚠️ PRÉ-REQUISITOS (Verificados ✓)

- ✅ Site live: https://www.bestwellnessguide.com
- ✅ 18+ páginas indexadas no GSC
- ✅ Domínio verificado
- ✅ HTTPS ativo
- ✅ Conteúdo original em wellness
- ✅ Sitemap publicado
- ✅ GA4 configurado (G-XJZLDPC7DZ)

---

## STEP 1: Criar conta Google AdSense

1. Abra: https://www.google.com/adsense/start
2. Click "COMEÇAR"
3. Use email: **fflaviosalles@gmail.com**
4. Aceite termos
5. Clique "Ir para AdSense"

**Tempo:** 2 minutos

---

## STEP 2: Adicionar seu site

1. Na dashboard AdSense, clique "Sites" → "Adicionar novo site"
2. Insira: **bestwellnessguide.com** (sem https://)
3. Clique "Adicionar site"

**Tempo:** 1 minuto

---

## STEP 3: Adicionar código de verificação

Google fornecerá um código meta tag:

```html
<meta name="google-adsense-account" content="ca-pub-xxxxxxxxxxxxxxxx">
```

**Onde colocar:** No arquivo D:\bestwellnessguide\dist\server\index.js, linha ~1056 (dentro do `<head>`), procure por:

```html
<meta name="description" content="${description}">
```

E adicione logo após:

```html
<meta name="google-adsense-account" content="ca-pub-xxxxxxxxxxxxxxxx">
```

Substitua `ca-pub-xxxxxxxxxxxxxxxx` pelo seu código real.

**Tempo:** 5 minutos

---

## STEP 4: Implantar alteração

```bash
cd D:\bestwellnessguide
git add dist/server/index.js
git commit -m "feat: Add AdSense verification meta tag"
git push
```

**Tempo:** 2 minutos

---

## STEP 5: Verificar no AdSense

1. Volte para https://www.google.com/adsense
2. Clique no botão "VERIFICAR" no seu site
3. Aguarde 24-48 horas para aprovação

**Status esperado:** "Verificado" ✓

**Tempo:** 1 minuto (depois espera 24-48h)

---

## STEP 6: Implementar anúncios (após aprovação)

Após aprovação (24-48h), você terá:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
     crossorigin="anonymous"></script>
```

**Onde colocar:**
1. No `<head>` do arquivo index.js
2. No corpo de cada página onde quiser anúncios

**Opções:**
- Display ads (automáticos)
- Native ads (integrados)
- Link units (anúncios de links)

---

## TIMELINE

| Etapa | Tempo | Status |
|-------|-------|--------|
| Cadastro | 2 min | Manual |
| Adicionar site | 1 min | Manual |
| Código de verificação | 5 min | Manual + Deploy |
| Deploy | 2 min | Automático |
| **Aguardar aprovação** | **24-48h** | Automático |
| Ativar anúncios | 5 min | Manual |
| **TOTAL** | **~1h + 48h espera** | ✅ |

---

## ESTIMATIVA DE RECEITA (quando ativo)

Com 18+ páginas indexadas + backlinks + 5K-15K visitas/mês:

- **CPM (custo por mil): $2-8** (wellness topic)
- **CTR (taxa de clique): 0.5-2%**
- **Visitantes/mês: 5,000-15,000**

**Estimativa mensal:**
- Cenário conservador: 5K visitas × $3 CPM × 1% CTR = **$150/mês**
- Cenário otimista: 15K visitas × $6 CPM × 1.5% CTR = **$1,350/mês**

---

## PRÓXIMOS PASSOS

1. ✅ Cadastro AdSense (você)
2. ✅ Adicionar código meta (você)
3. ✅ Deploy (git push)
4. ⏳ Aguardar aprovação 24-48h (automático)
5. ✅ Ativar anúncios (você)
6. 📈 Monitorar performance (dashboard AdSense)

---

## SUPORTE

Se Google rejeitar:
- Verifique conteúdo (sem ClickBank links demais)
- Melhore design/layout
- Adicione política de privacidade
- Reapresente após 30 dias

Se tiver dúvidas sobre anúncios:
- Leia: https://support.google.com/adsense/answer/9713
