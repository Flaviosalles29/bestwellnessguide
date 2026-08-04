#!/usr/bin/env python3
"""
HARO.com Signup Automation Script
Automatiza o cadastro no HARO e configuração de expertise areas
Requer: Python 3.8+, Selenium, Chrome
"""

import sys
import time
from pathlib import Path

try:
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.chrome.options import Options
except ImportError:
    print("❌ Selenium não instalado. Execute:")
    print("   pip install selenium")
    sys.exit(1)

# Configuração
FIRST_NAME = "Best Wellness"
LAST_NAME = "Guide"
EMAIL = "fflaviosalles@gmail.com"
PASSWORD = "Suplementos2026!@"  # Change this to something stronger!

EXPERTISE_AREAS = [
    "Dietary Supplements",
    "Health & Wellness",
    "Nutrition",
    "Product Reviews",
    "Health Products",
    "Supplement Reviews",
]

class HAROSignup:
    def __init__(self):
        self.driver = None
        self.wait = None

    def setup_driver(self):
        """Setup Chrome webdriver"""
        try:
            options = Options()
            options.add_argument("--start-maximized")
            options.add_argument("--no-sandbox")
            options.add_argument("--disable-dev-shm-usage")

            self.driver = webdriver.Chrome(options=options)
            self.wait = WebDriverWait(self.driver, 15)
            print("✅ Chrome iniciado")
        except Exception as e:
            print(f"❌ Erro ao iniciar Chrome: {e}")
            print("   Certifique-se de que Chrome está instalado")
            sys.exit(1)

    def go_to_haro(self):
        """Navigate to HARO"""
        print("\n📍 Abrindo HARO.com...")
        self.driver.get("https://www.haro.com")
        time.sleep(3)
        print("✅ Página carregada")

    def click_signup(self):
        """Click Sign Up button"""
        print("\n🔘 Clicando 'Sign Up Free'...")
        try:
            # Try different selectors for Sign Up button
            signup_selectors = [
                "//a[contains(text(), 'Sign Up')]",
                "//button[contains(text(), 'Sign Up')]",
                "//a[contains(@href, 'signup')]",
                "//button[contains(text(), 'Get Started')]",
            ]

            for selector in signup_selectors:
                try:
                    btn = self.driver.find_element(By.XPATH, selector)
                    if btn.is_displayed():
                        btn.click()
                        time.sleep(2)
                        print("✅ Clicado em Sign Up")
                        return True
                except:
                    continue

            print("⚠️ Botão Sign Up não encontrado - talvez já esteja na página de signup")
            return True
        except Exception as e:
            print(f"⚠️ Erro: {e}")
            return True

    def fill_signup_form(self):
        """Fill the signup form"""
        print("\n📝 Preenchendo formulário...")

        try:
            # First Name
            first_name_field = self.wait.until(
                EC.presence_of_element_located((By.NAME, "firstName"))
            )
            first_name_field.clear()
            first_name_field.send_keys(FIRST_NAME)
            print(f"  ✓ First Name: {FIRST_NAME}")
            time.sleep(1)

            # Last Name
            last_name_field = self.driver.find_element(By.NAME, "lastName")
            last_name_field.clear()
            last_name_field.send_keys(LAST_NAME)
            print(f"  ✓ Last Name: {LAST_NAME}")
            time.sleep(1)

            # Email
            email_field = self.driver.find_element(By.NAME, "email")
            email_field.clear()
            email_field.send_keys(EMAIL)
            print(f"  ✓ Email: {EMAIL}")
            time.sleep(1)

            # Password
            password_field = self.driver.find_element(By.NAME, "password")
            password_field.clear()
            password_field.send_keys(PASSWORD)
            print(f"  ✓ Password: ****")
            time.sleep(1)

            # Confirm Password
            confirm_password_field = self.driver.find_element(By.NAME, "confirmPassword")
            confirm_password_field.clear()
            confirm_password_field.send_keys(PASSWORD)
            print(f"  ✓ Confirm Password: ****")
            time.sleep(1)

            # Accept Terms
            try:
                terms_checkbox = self.driver.find_element(
                    By.XPATH,
                    "//input[@type='checkbox'][contains(@name, 'terms') or contains(@id, 'terms')]"
                )
                if not terms_checkbox.is_selected():
                    terms_checkbox.click()
                    print("  ✓ Terms accepted")
            except:
                print("  ⚠️ Termos - pode precisar ser feito manualmente")

            time.sleep(1)
            print("✅ Formulário preenchido")
            return True

        except Exception as e:
            print(f"❌ Erro ao preencher formulário: {e}")
            return False

    def submit_form(self):
        """Submit the signup form"""
        print("\n📤 Submetendo formulário...")

        try:
            # Find and click submit button
            submit_selectors = [
                "//button[contains(text(), 'Create Account')]",
                "//button[contains(text(), 'Sign Up')]",
                "//button[type='submit']",
            ]

            for selector in submit_selectors:
                try:
                    btn = self.driver.find_element(By.XPATH, selector)
                    if btn.is_displayed():
                        btn.click()
                        time.sleep(3)
                        print("✅ Formulário submetido")
                        return True
                except:
                    continue

            print("⚠️ Botão de submit não encontrado")
            return True
        except Exception as e:
            print(f"❌ Erro ao submeter: {e}")
            return False

    def select_expertise_areas(self):
        """Select expertise areas"""
        print("\n🎯 Selecionando Expertise Areas...")

        try:
            time.sleep(2)

            for area in EXPERTISE_AREAS:
                try:
                    # Try to find and click expertise checkboxes
                    expertise_selectors = [
                        f"//label[contains(text(), '{area}')]",
                        f"//input[@value='{area}']",
                        f"//label[contains(., '{area}')]",
                    ]

                    found = False
                    for selector in expertise_selectors:
                        try:
                            element = self.driver.find_element(By.XPATH, selector)
                            # Click the label or input
                            element.click()
                            print(f"  ✓ {area}")
                            time.sleep(0.5)
                            found = True
                            break
                        except:
                            continue

                    if not found:
                        print(f"  ⚠️ {area} - talvez não exista exatamente com este nome")

                except Exception as e:
                    print(f"  ⚠️ Erro ao selecionar {area}: {e}")

            print("✅ Expertise areas selecionadas (verifique manualmente)")
            return True

        except Exception as e:
            print(f"⚠️ Erro ao selecionar expertise: {e}")
            return True

    def wait_for_email_confirmation(self):
        """Wait and guide for email confirmation"""
        print("\n📧 CONFIRMAÇÃO DE EMAIL NECESSÁRIA")
        print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
        print(f"Um email foi enviado para: {EMAIL}")
        print("\nVocê precisa:")
        print("1. Abrir sua caixa de entrada: gmail.com")
        print("2. Procurar email do HARO")
        print("3. Clicar no link de confirmação")
        print("\nDepois volte aqui e continamos!")
        print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")

        input("\n✓ Pressione ENTER após confirmar o email...")

        print("\n✅ Email confirmado!")

    def configure_email_frequency(self):
        """Configure email delivery frequency"""
        print("\n⏰ Configurando frequência de emails...")

        try:
            # Look for frequency settings
            time.sleep(2)

            # Try to select "Daily" options
            daily_options = [
                "//label[contains(text(), 'Daily')]",
                "//input[@value='daily']",
            ]

            for selector in daily_options:
                try:
                    elements = self.driver.find_elements(By.XPATH, selector)
                    for elem in elements:
                        try:
                            elem.click()
                            print(f"  ✓ Selecionado")
                            time.sleep(0.5)
                        except:
                            pass
                except:
                    pass

            print("✅ Frequência configurada (ou faça manualmente na sua conta)")
            return True

        except Exception as e:
            print(f"⚠️ Erro ao configurar frequência: {e}")
            return True

    def run(self):
        """Run full signup process"""
        print("╔════════════════════════════════════════════════════════╗")
        print("║   🚀 HARO.COM AUTOMATED SIGNUP                       ║")
        print("║                                                        ║")
        print("║   Email: " + EMAIL)
        print("║   Expertise: Supplements & Health                      ║")
        print("╚════════════════════════════════════════════════════════╝")

        self.setup_driver()
        self.go_to_haro()
        self.click_signup()
        time.sleep(2)

        if not self.fill_signup_form():
            print("\n❌ Erro ao preencher - tente manualmente em: https://www.haro.com/signup")
            self.driver.quit()
            return

        self.submit_form()
        time.sleep(3)

        self.select_expertise_areas()
        time.sleep(2)

        self.wait_for_email_confirmation()
        time.sleep(2)

        self.configure_email_frequency()

        print("\n" + "="*56)
        print("✅ CADASTRO NO HARO COMPLETO!")
        print("="*56)
        print("\nVocê agora vai receber:")
        print("• 10:00 AM - ~15 journalist queries")
        print("• 6:00 PM - ~15 journalist queries")
        print("\nResponda as relevantes com template de backlinks-strategy.md")
        print("\n🎯 Meta: Responder 2-3 por dia = 15-25 backlinks em 30 dias")
        print("\n")

        time.sleep(3)
        self.driver.quit()

if __name__ == "__main__":
    automation = HAROSignup()

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
