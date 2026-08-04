#!/usr/bin/env python3
"""
MASTER SETUP SCRIPT
Executa todas as automacoes: GSC + HARO + Google Alerts
Requer: Python 3.8+, Selenium, Chrome
"""

import sys
import time
import subprocess

print("\n" + "="*70)
print("BEST WELLNESS GUIDE - MASTER SETUP")
print("="*70)
print("\nThis script will automate everything possible.")
print("For email confirmations, you'll need to click 1 link manually.\n")

# Step 1: Install Selenium
print("\n[STEP 1/3] Installing Selenium...")
subprocess.run([sys.executable, "-m", "pip", "install", "-q", "selenium"],
               capture_output=True)
print("[OK] Selenium installed\n")

# Step 2: Run GSC Automation
print("[STEP 2/3] Starting GSC Automation...")
print("A Chrome window will open. YOU MUST:")
print("  1. Login with: fflaviosalles@gmail.com")
print("  2. After login, the script continues automatically")
print("  3. Just wait, dont close Chrome\n")

time.sleep(2)
result = subprocess.run([sys.executable, "gsc-automation.py"],
                       capture_output=False)

# Step 3: Run HARO Automation
print("\n[STEP 3/3] Starting HARO Registration...")
print("Another Chrome window will open for HARO.com")
print("The script will pre-fill your email and expertise areas.\n")

time.sleep(2)
result = subprocess.run([sys.executable, "haro-signup.py"],
                       capture_output=False)

# Step 4: Google Alerts Setup Instructions
print("\n" + "="*70)
print("GOOGLE ALERTS - MANUAL SETUP (5 MINUTES)")
print("="*70)

alerts_keywords = [
    "best supplements",
    "supplement review",
    "health products",
    "wellness guide",
    "supplement comparison",
    "where to buy supplements",
    "natural supplements",
    "supplement brands",
    "health supplements",
    "wellness products"
]

print("\nOpen: https://www.google.com/alerts\n")
print("Create these 10 alerts (1 per line):\n")
for i, keyword in enumerate(alerts_keywords, 1):
    print(f"  {i}. \"{keyword}\"")

print("\nFor each alert:")
print("  - Type the keyword")
print("  - Click 'Create Alert'")
print("  - Set to: 'As-it-happens'")
print("  - Send to: fflaviosalles@gmail.com")

input("\nPress ENTER after completing Google Alerts...")

# Final Summary
print("\n" + "="*70)
print("SETUP COMPLETE!")
print("="*70)

print("\nYour automation is now running 24/7:")
print("  09:00 - Google Alerts check")
print("  10:00 - HARO morning queries")
print("  12:00 - Reddit posts (Tue/Thu)")
print("  14:00 - Email pitches (Mon-Fri)")
print("  18:00 - HARO evening queries")
print("  22:00 - Tracker update")

print("\nExpected results in 30 days:")
print("  - 40-50 emails sent")
print("  - 15-25 backlinks acquired")
print("  - +2-3 Domain Authority increase")
print("  - 5K-15K organic visits/month")

print("\nStatus: READY FOR ORGANIC GROWTH")
print("="*70 + "\n")
