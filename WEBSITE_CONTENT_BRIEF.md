# Fincend - Website Content Brief for AstriOrb Website Agent

> **Purpose**: This document provides all the information needed to create the Fincend product page and privacy policy page on the AstriOrb website (astriorb.com).

---

## SECTION 1: ABOUT FINCEND

### App Identity
- **App Name**: Fincend
- **Tagline**: "Manage your money with ease"
- **Full Description**: A personal finance management mobile app for tracking expenses, managing loans, and analyzing spending habits.
- **Developer/Company**: AstriOrb Private Limited ("Where Ideas Orbit Into Reality")
- **Contact Email**: officialfincend@gmail.com
- **Version**: 1.0.0
- **Platforms**: Android, iOS (coming soon)

### What is Fincend?
Fincend is a **privacy-first personal finance manager** that helps users take control of their money. Unlike cloud-based finance apps, Fincend stores all data locally on the user's device, ensuring complete privacy and security. The app features a modern, aesthetic UI with dark/light mode support, intuitive animations, and robust offline-first data management.

### Target Audience
- Individuals who want to track personal expenses and income
- People who lend or borrow money and want to track repayments
- Budget-conscious users who want to monitor monthly spending
- Privacy-focused users who don't want their financial data on cloud servers

---

## SECTION 2: CORE FEATURES

### 📊 Transaction Tracking
- Record income and expenses with custom categories
- Add notes and dates to each transaction
- Search and filter transaction history by month
- Visual indicators: Green for income, Red for expenses

### 💰 Loan Management
- Track money you've lent to others ("To Receive")
- Track money you've borrowed ("To Pay")
- Record partial or full repayments
- Automatic settlement when loan is fully repaid
- Active vs. Settled loan tabs

### 📈 Budget Monitoring
- Set monthly budget limits
- Visual progress bar showing spending vs. budget
- Color-coded alerts:
  - Purple: Under 80% of budget (healthy)
  - Yellow/Orange: 80-100% of budget (warning)
  - Red: Over budget (critical)

### 🏠 Smart Dashboard (Home Page)
- **Financial Overview Flip Card**:
  - Front: Current Balance & Available Balance
  - Back: Breakdown of Income, Expenses, To Receive, To Pay
  - Interactive 3D flip animation on tap
- **Budget Alert Banner**: Warns when approaching or exceeding budget
- **Recent Activity**: Shows 5 most recent transactions
- **Pull-to-refresh** with animated number count-ups

### 📁 Custom Categories
- Pre-built default categories for common expenses/income
- Create custom categories with icons and colors
- Visual "Custom" badge on user-created categories
- Usage count showing how many transactions use each category

### 💱 Multi-Currency Support
- Select preferred currency (₹, $, €, £, etc.)
- Currency symbol displayed consistently throughout the app

### 🎨 Theme Support
- Automatic Dark/Light mode detection
- Manual theme toggle in settings
- Smooth theme transitions

### 📤 Data Export/Import
- Export all data to JSON file
- Import data from backup files
- Full user control over exported files

### 👤 User Profile
- Customizable profile name
- Profile picture (take photo or choose from gallery)
- Quick access to settings
- Feedback & Support (email-based)

### 📢 In-App Announcements
- Push important notices to users without app update
- Announcement types: Warning (orange), Info (blue), Success (green)

### 🎓 Interactive Onboarding
- First-time user tutorial
- Sample data to explore the app
- Privacy & Terms acceptance

---

## SECTION 3: PRIVACY & DATA HANDLING

### ⭐ KEY PRIVACY POINT (REQUIRED FOR PLAY STORE)

**All financial data is stored LOCALLY on the user's device only. Fincend does NOT collect, transmit, or store any personal or financial data on external servers.**

### Data Storage
- Uses **MMKV encrypted storage** (military-grade encryption)
- 30x faster than standard AsyncStorage
- Data never leaves the device
- We have NO access to user transaction history, loans, budgets, or any entered data

### Data Collected by the App
| Data Type | Storage Location | Transmitted? |
|-----------|------------------|--------------|
| Transactions | Device only | ❌ No |
| Loans | Device only | ❌ No |
| Budget data | Device only | ❌ No |
| Categories | Device only | ❌ No |
| Profile (name, photo) | Device only | ❌ No |

### Third-Party Services

#### Google AdMob (Advertising) ⚠️ REQUIRED DISCLOSURE
Fincend uses **Google AdMob** to display advertisements. AdMob may collect:

| Data Collected by AdMob | Purpose |
|-------------------------|---------|
| **Advertising ID** (Android) / IDFA (iOS) | Personalized advertising |
| Device type, OS version | Ad targeting |
| Mobile network information | Ad delivery |
| Ad interaction data | Analytics |

**Important AdMob Notes:**
- AdMob data collection is governed by [Google's Privacy Policy](https://policies.google.com/privacy)
- Users can opt out of personalized ads:
  - **Android**: Settings → Google → Ads → Opt out of Ads Personalization
  - **iOS**: Settings → Privacy → Advertising → Limit Ad Tracking
- Fincend has NO access to data collected by AdMob

#### No Other Third-Party Services
Apart from AdMob, Fincend does NOT use any:
- Analytics services
- Tracking services
- Cloud databases
- Third-party login services

### App Permissions
| Permission | Purpose |
|------------|---------|
| Camera | Take profile pictures (stored locally) |
| Photo Library | Select profile pictures from gallery |
| Storage | Export/import financial data |

### Data Deletion
To delete all data:
1. Uninstall the Fincend app
2. All locally stored data is permanently removed

### User Rights
- **Access**: All data is on user's device
- **Export**: Built-in export feature
- **Delete**: Uninstall app to remove all data

---

## SECTION 4: PRIVACY POLICY (FULL TEXT)

> **⚠️ THIS IS THE EXACT PRIVACY POLICY TEXT TO BE HOSTED ON THE WEBSITE**
> 
> Suggested URL: `https://astriorb.com/fincend/privacy-policy`

---

# Privacy Policy for Fincend

**Last Updated: January 2026**

## Introduction

Fincend ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our mobile application.

## Data Collection and Storage

### Local Storage Only
- **All your data is stored locally on your device only**
- We use **MMKV encrypted storage** for fast and secure data persistence
- We do NOT collect, transmit, or store any of your personal or financial data on our servers
- We do NOT have access to your transaction history, loan information, or any other data you enter in the app

### Data You Provide
When using Fincend, you may enter:
- Transaction records (income and expenses)
- Loan information
- Budget data
- Category customizations
- Profile information (name, profile picture)

**Important:** All this data remains on your device and is never transmitted to us or any third party.

### Feedback Data
- If you choose to send feedback or report a bug, we use your device's email client
- The email may include device information (model, OS version) and app version to help us troubleshoot
- This data is only sent if you explicitly send the email

## Permissions

### Camera Permission
- Used only to take profile pictures
- Photos are stored locally on your device
- We do not access or transmit these photos

### Photo Library Permission
- Used only to select profile pictures from your gallery
- We do not access or transmit any photos

### Storage Permission
- Used to save and export your financial data
- All data remains under your control

## Data Export

- You can export your data at any time using the app's export feature
- Exported data is saved to your device's storage
- You have full control over exported files

## Third-Party Services

### Google AdMob (Advertising)
Fincend uses **Google AdMob** to display advertisements. AdMob may collect certain information from your device for advertising purposes, including:

- **Device Identifiers**: Advertising ID (on Android) or IDFA (on iOS) for personalized advertising
- **Device Information**: Device type, operating system version, and mobile network information
- **Interaction Data**: Information about how you interact with ads

**Important Notes about AdMob:**
- AdMob's data collection is governed by [Google's Privacy Policy](https://policies.google.com/privacy)
- You can opt out of personalized ads in your device settings
- On Android: Settings > Google > Ads > Opt out of Ads Personalization
- On iOS: Settings > Privacy > Advertising > Limit Ad Tracking

We do NOT have access to any data collected by AdMob.

### No Other Third-Party Services
Apart from AdMob, Fincend does NOT use any other third-party analytics or tracking services.

## Data Security

- Your data is stored securely on your device using **MMKV encrypted storage**
- MMKV provides military-grade encryption for your financial data
- We recommend setting up device security (PIN, password, biometric) to protect your data
- Regular backups are your responsibility

## Children's Privacy

Fincend does not knowingly collect information from children under 13. The app is intended for users who are at least 13 years old.

## Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date.

## Data Deletion

To delete your data:
1. Uninstall the Fincend app from your device
2. All locally stored data will be permanently removed

## Contact Us

If you have questions about this Privacy Policy, please contact us at:
- Email: officialfincend@gmail.com
- Company: AstriOrb Private Limited

## Your Rights

You have the right to:
- Access your data (it's all on your device)
- Delete your data (uninstall the app)
- Export your data (use the export feature)

## Consent

By using Fincend, you consent to this Privacy Policy.

---

**Summary:** Fincend is a privacy-first app. All your financial data stays on your device. We don't collect, transmit, or store any of your personal information. AdMob collects device identifiers for advertising purposes only.

---

## SECTION 5: TERMS OF SERVICE (FULL TEXT)

> Suggested URL: `https://astriorb.com/fincend/terms`

---

# Terms of Service for Fincend

**Last Updated: January 2026**

## 1. Acceptance of Terms

By downloading, installing, or using Fincend ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.

## 2. Description of Service

Fincend is a personal finance management application that helps you:
- Track income and expenses
- Manage loans (money lent and borrowed)
- Create and monitor budgets
- Categorize transactions
- Analyze spending patterns
- Export financial data

## 3. User Responsibilities

### You agree to:
- Provide accurate information when using the App
- Keep your device secure to protect your financial data
- Use the App for lawful purposes only
- Not attempt to reverse engineer, decompile, or hack the App
- Not use the App to track finances for illegal activities

### You understand that:
- You are solely responsible for the accuracy of data you enter
- You should regularly backup your data
- The App is for personal use only

## 4. Data and Privacy

- All your data is stored locally on your device
- We do not collect, access, or transmit your financial data
- You are responsible for backing up your data
- See our Privacy Policy for more details

## 5. Disclaimer of Warranties

THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
- Accuracy of calculations
- Uninterrupted or error-free operation
- Fitness for a particular purpose
- Data loss prevention

## 6. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW:
- We are not liable for any financial losses or decisions made based on the App
- We are not liable for data loss (please backup regularly)
- We are not liable for any indirect, incidental, or consequential damages
- Our total liability shall not exceed the amount you paid for the App (if any)

## 7. Financial Advice Disclaimer

**Fincend is NOT a financial advisor:**
- The App provides tools for tracking and organizing your finances
- It does not provide financial, investment, tax, or legal advice
- Always consult qualified professionals for financial decisions
- We are not responsible for financial decisions you make

## 8. Intellectual Property

- Fincend and its original content, features, and functionality are owned by AstriOrb Private Limited
- You may not copy, modify, distribute, or create derivative works
- All trademarks and logos are our property

## 9. Updates and Changes

- We may update the App from time to time
- Updates may include new features, bug fixes, or changes
- We may modify these Terms at any time
- Continued use after changes means you accept the new Terms

## 10. Termination

- You may stop using the App at any time by uninstalling it
- We reserve the right to terminate or suspend access for violations of these Terms
- Upon termination, all data on your device will remain until you delete the App

## 11. Governing Law

These Terms shall be governed by and construed in accordance with the laws of India.

## 12. Contact Information

For questions about these Terms, contact us at:
- Email: officialfincend@gmail.com
- Company: AstriOrb Private Limited

## 13. Acknowledgment

BY USING FINCEND, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.

---

**Remember:** Fincend is a tool to help you manage your finances. Always make informed decisions and consult professionals when needed.

---

## SECTION 6: DESIGN GUIDELINES

### App Colors
| Color Purpose | Light Mode | Dark Mode |
|---------------|------------|-----------|
| Primary/Brand | `#7F5DF0` (Purple) | `#7F5DF0` |
| Background | `#F3F4F6` | `#111827` |
| Cards | `#FFFFFF` | `#1F2937` |
| Text Primary | `#1F2937` | `#E5E7EB` |
| Income | Green | Green |
| Expense | Red | Red |

### Suggested Website Page Structure

```
astriorb.com/
├── fincend/                    ← Fincend product landing page
│   ├── privacy-policy          ← Privacy Policy (REQUIRED for Play Store)
│   └── terms                   ← Terms of Service
```

### Required URLs for Play Store
1. **Privacy Policy URL**: `https://astriorb.com/fincend/privacy-policy`
2. **Terms of Service URL** (optional but recommended): `https://astriorb.com/fincend/terms`

---

## SECTION 7: PLAY STORE REQUIREMENTS CHECKLIST

For the Privacy Policy to be accepted by Google Play Store, it MUST include:

- [x] Statement that **Fincend stores financial data locally on the device**
- [x] Statement that **AdMob collects device IDs for advertising**
- [x] Contact information (email)
- [x] Information about data deletion
- [x] Last updated date

---

## SECTION 8: ASSETS

The website agent may need these assets from the Fincend project:

| Asset | Location in Project | Purpose |
|-------|---------------------|---------|
| App Icon | `assets/icon.png` | Logo for website |
| Splash Logo | `assets/logo.png` | Hero image |

---

**Document prepared for AstriOrb Website Agent**  
**App**: Fincend v1.0.0  
**Date**: January 2026
