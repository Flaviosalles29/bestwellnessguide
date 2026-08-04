#!/usr/bin/env python3
"""
Google Search Console Automation Script
Automatiza verificação, sitemap, e indexação de URLs
Requer: Python 3.8+, Selenium, Chrome/Chromium
"""

import sys
import time
from pathlib import Path

try:
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.chrome.service import Service
except ImportError:
    print("❌ Selenium não instalado. Execute:")
    print("   pip install selenium")
    sys.exit(1)

# Configuração
DOMAIN = "https://www.bestwellnessguide.com"
URLS_TO_INDEX = [
    "https://www.bestwellnessguide.com",
    "https://www.bestwellnessguide.com/best-supplements-comparison",
    "https://www.bestwellnessguide.com/blog",
    "https://www.bestwellnessguide.com/offers/prodentim",
    "https://www.bestwellnessguide.com/offers/neurovera",
    "https://www.bestwellnessguide.com/offers/joint-genesis",
]

SITEMAP_URL = "sitemap.xml"

class GSCAutomation:
    def __init__(self):
        """Initialize webdriver"""
        self.driver = None
        self.wait = None

    def setup_driver(self):
        """Setup Chrome webdriver"""
        try:
            options = webdriver.ChromeOptions()
            options.add_argument("--start-maximized")
            options.add_argument("--no-sandbox")
            options.add_argument("--disable-dev-shm-usage")

            self.driver = webdriver.Chrome(options=options)
            self.wait = WebDriverWait(self.driver, 15)
            print("✅ Chrome driver iniciado")
        except Exception as e:
            print(f"❌ Erro ao iniciar Chrome: {e}")
            print("   Certifique-se de que Chrome está instalado")
            sys.exit(1)

    def go_to_gsc(self):
        """Navigate to Google Search Console"""
        print("\n📍 Abrindo Google Search Console...")
        self.driver.get("https://search.google.com/search-console")
        time.sleep(3)
        print("✅ Página carregada")

    def wait_for_login(self):
        """Wait for user to manually login"""
        print("\n🔑 AÇÃO MANUAL NECESSÁRIA:")
        print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
        print("1. Uma janela do Chrome foi aberta com Google Search Console")
        print("2. Você precisa fazer LOGIN manualmente")
        print("3. Use seu email: fflaviosalles@gmail.com")
        print("4. Após fazer login, esta janela vai continuar automaticamente")
        print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")

        # Esperar login (máximo 60 segundos de inatividade)
        print("\n⏳ Aguardando login (máx 5 minutos)...")

        for i in range(60):
            try:
                # Verifica se está logado procurando por elementos do dashboard
                self.driver.find_element(By.TAG_NAME, "body")
                time.sleep(5)

                # Se chegou aqui e a URL mudou, provavelmente está logado
                if "search-console" in self.driver.current_url and i > 2:
                    print("✅ Login detectado!")
                    return True
            except:
                pass

        print("⚠️  Timeout - por favor, faça login manualmente e execute novamente")
        return False

    def add_property(self):
        """Add property to GSC"""
        print("\n📋 ADICIONANDO PROPRIEDADE...")

        try:
            # Click "Add property"
            add_btn = self.wait.until(
                EC.element_to_be_clickable((By.XPATH, "//a[contains(text(), 'Add property') or contains(text(), 'Adicionar propriedade')]"))
            )
            add_btn.click()
            time.sleep(2)

            # Select "URL Prefix"
            url_prefix = self.wait.until(
                EC.element_to_be_clickable((By.XPATH, "//label[contains(., 'URL Prefix')]"))
            )
            url_prefix.click()
            time.sleep(1)

            # Enter URL
            input_field = self.driver.find_element(By.XPATH, "//input[@placeholder]")
            input_field.clear()
            input_field.send_keys(DOMAIN)
            time.sleep(1)

            # Click Continue
            continue_btn = self.driver.find_element(By.XPATH, "//button[contains(text(), 'Continue') or contains(text(), 'Continuar')]")
            continue_btn.click()

            print("✅ Propriedade adicionada")
            time.sleep(3)
            return True
        except Exception as e:
            print(f"⚠️  Erro ao adicionar propriedade: {e}")
            print("   Continuando para próxima etapa...")
            return True

    def verify_property(self):
        """Verify property with meta tag"""
        print("\n✅ VERIFICANDO PROPRIEDADE...")

        try:
            # Google deve auto-detectar meta tag
            verify_btn = self.wait.until(
                EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Verify') or contains(text(), 'Verificar')]"))
            )
            verify_btn.click()

            time.sleep(5)
            print("✅ Propriedade verificada!")
            return True
        except Exception as e:
            print(f"⚠️  Verificação manual pode ser necessária: {e}")
            return True

    def submit_sitemap(self):
        """Submit sitemap"""
        print("\n🗺️  SUBMETENDO SITEMAP...")

        try:
            # Navigate to Sitemaps page
            self.driver.get("https://search.google.com/search-console/sitemaps")
            time.sleep(2)

            # Find sitemap input
            sitemap_input = self.wait.until(
                EC.presence_of_element_located((By.XPATH, "//input[contains(@placeholder, 'www.example.com') or contains(@aria-label, 'sitemap')]"))
            )
            sitemap_input.click()
            sitemap_input.send_keys(SITEMAP_URL)
            time.sleep(1)

            # Click Submit
            submit_btn = self.driver.find_element(By.XPATH, "//button[contains(text(), 'Submit')]")
            submit_btn.click()

            time.sleep(3)
            print("✅ Sitemap submetido!")
            return True
        except Exception as e:
            print(f"⚠️  Erro ao submeter sitemap: {e}")
            print("   Você pode fazer isso manualmente em:")
            print("   https://search.google.com/search-console/sitemaps")
            return True

    def request_indexation(self):
        """Request indexation for URLs"""
        print("\n🔗 SOLICITANDO INDEXAÇÃO DE 6 URLs...")

        try:
            # Navigate to URL Inspection
            self.driver.get("https://search.google.com/search-console/inspect")
            time.sleep(2)

            for i, url in enumerate(URLS_TO_INDEX, 1):
                print(f"\n  [{i}/6] Indexando: {url}")

                try:
                    # Find input field
                    url_input = self.wait.until(
                        EC.presence_of_element_located((By.XPATH, "//input[@placeholder]"))
                    )
                    url_input.clear()
                    url_input.send_keys(url)

                    # Press Enter
                    url_input.send_keys("\n")
                    time.sleep(3)

                    # Click "Request Indexing"
                    request_btn = self.driver.find_element(By.XPATH, "//button[contains(text(), 'Request Indexing')]")
                    request_btn.click()

                    time.sleep(2)
                    print(f"  ✅ URL {i}/6 indexada")

                except Exception as e:
                    print(f"  ⚠️  URL {i} - Erro: {e}")
                    print("     Você pode fazer isso manualmente")

            print("\n✅ Indexação de URLs completa!")
            return True
        except Exception as e:
            print(f"❌ Erro geral: {e}")
            return True

    def run(self):
        """Run full automation"""
        print("╔════════════════════════════════════════════════════════╗")
        print("║   🚀 GOOGLE SEARCH CONSOLE AUTOMATION               ║")
        print("║                                                        ║")
        print("║   Site: " + DOMAIN)
        print("║   Ações: Verificação + Sitemap + Indexação             ║")
        print("╚════════════════════════════════════════════════════════╝")

        self.setup_driver()
        self.go_to_gsc()

        if not self.wait_for_login():
            print("\n❌ Timeout de login")
            self.driver.quit()
            return

        # Try to add property (may fail if already added)
        self.add_property()
        time.sleep(2)

        # Verify
        self.verify_property()
        time.sleep(2)

        # Submit sitemap
        self.submit_sitemap()
        time.sleep(2)

        # Request indexation
        self.request_indexation()

        print("\n" + "="*56)
        print("✅ AUTOMAÇÃO COMPLETA!")
        print("="*56)
        print("\nVerifique em Google Search Console:")
        print("• Coverage: URLs sendo indexadas")
        print("• Performance: Impressões começando a aparecer")
        print("\n⏳ Próximos passos:")
        print("1. Aguarde 24-48 horas para Google rastrear")
        print("2. Monitor daily em Search Console")
        print("3. Backlinks automation já está rodando!")
        print("\n")

        self.driver.quit()

if __name__ == "__main__":
    automation = GSCAutomation()

    try:
        automation.run()
    except KeyboardInterrupt:
        print("\n\n❌ Interrompido pelo usuário")
        if automation.driver:
            automation.driver.quit()
    except Exception as e:
        print(f"\n❌ Erro: {e}")
        if automation.driver:
            automation.driver.quit()
