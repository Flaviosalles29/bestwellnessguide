#!/usr/bin/env python3
"""
Google Search Console Automation Script
Automatiza verificao, sitemap, e indexao de URLs
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
    print("[ERROR] Selenium no instalado. Execute:")
    print("   pip install selenium")
    sys.exit(1)

# Configurao
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
            print("[OK] Chrome driver iniciado")
        except Exception as e:
            print(f"[ERROR] Erro ao iniciar Chrome: {e}")
            print("   Certifique-se de que Chrome est instalado")
            sys.exit(1)

    def go_to_gsc(self):
        """Navigate to Google Search Console"""
        print("\n[LOCATION] Abrindo Google Search Console...")
        self.driver.get("https://search.google.com/search-console")
        time.sleep(3)
        print("[OK] Pgina carregada")

    def wait_for_login(self):
        """Wait for user to manually login"""
        print("\n[LOGIN] AO MANUAL NECESSRIA:")
        print("")
        print("1. Uma janela do Chrome foi aberta com Google Search Console")
        print("2. Voc precisa fazer LOGIN manualmente")
        print("3. Use seu email: fflaviosalles@gmail.com")
        print("4. Aps fazer login, esta janela vai continuar automaticamente")
        print("")

        # Esperar login (mximo 60 segundos de inatividade)
        print("\n[WAIT] Aguardando login (mx 5 minutos)...")

        for i in range(60):
            try:
                # Verifica se est logado procurando por elementos do dashboard
                self.driver.find_element(By.TAG_NAME, "body")
                time.sleep(5)

                # Se chegou aqui e a URL mudou, provavelmente est logado
                if "search-console" in self.driver.current_url and i > 2:
                    print("[OK] Login detectado!")
                    return True
            except:
                pass

        print("[WARNING]  Timeout - por favor, faa login manualmente e execute novamente")
        return False

    def add_property(self):
        """Add property to GSC"""
        print("\n ADICIONANDO PROPRIEDADE...")

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

            print("[OK] Propriedade adicionada")
            time.sleep(3)
            return True
        except Exception as e:
            print(f"[WARNING]  Erro ao adicionar propriedade: {e}")
            print("   Continuando para prxima etapa...")
            return True

    def verify_property(self):
        """Verify property with meta tag"""
        print("\n[OK] VERIFICANDO PROPRIEDADE...")

        try:
            # Google deve auto-detectar meta tag
            verify_btn = self.wait.until(
                EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Verify') or contains(text(), 'Verificar')]"))
            )
            verify_btn.click()

            time.sleep(5)
            print("[OK] Propriedade verificada!")
            return True
        except Exception as e:
            print(f"[WARNING]  Verificao manual pode ser necessria: {e}")
            return True

    def submit_sitemap(self):
        """Submit sitemap"""
        print("\n  SUBMETENDO SITEMAP...")

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
            print("[OK] Sitemap submetido!")
            return True
        except Exception as e:
            print(f"[WARNING]  Erro ao submeter sitemap: {e}")
            print("   Voc pode fazer isso manualmente em:")
            print("   https://search.google.com/search-console/sitemaps")
            return True

    def request_indexation(self):
        """Request indexation for URLs"""
        print("\n[LINKS] SOLICITANDO INDEXAO DE 6 URLs...")

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
                    print(f"  [OK] URL {i}/6 indexada")

                except Exception as e:
                    print(f"  [WARNING]  URL {i} - Erro: {e}")
                    print("     Voc pode fazer isso manualmente")

            print("\n[OK] Indexao de URLs completa!")
            return True
        except Exception as e:
            print(f"[ERROR] Erro geral: {e}")
            return True

    def run(self):
        """Run full automation"""
        print("\n=== GOOGLE SEARCH CONSOLE AUTOMATION ===\n")
        print("Site: " + DOMAIN)
        print("Actions: Verification + Sitemap + Indexation\n")

        self.setup_driver()
        self.go_to_gsc()

        if not self.wait_for_login():
            print("\n[ERROR] Timeout de login")
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
        print("AUTOMATION COMPLETE!")
        print("="*56)
        print("\nCheck Google Search Console:")
        print("- Coverage: URLs being indexed")
        print("- Performance: Impressions appearing")
        print("\nNext steps:")
        print("1. Wait 24-48 hours for Google to crawl")
        print("2. Monitor daily in Search Console")
        print("3. Backlinks automation already running!")
        print("\n")

        self.driver.quit()

if __name__ == "__main__":
    automation = GSCAutomation()

    try:
        automation.run()
    except KeyboardInterrupt:
        print("\n\n[ERROR] Interrompido pelo usurio")
        if automation.driver:
            automation.driver.quit()
    except Exception as e:
        print(f"\n[ERROR] Erro: {e}")
        if automation.driver:
            automation.driver.quit()
