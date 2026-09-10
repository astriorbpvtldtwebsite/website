# Fisclok — website legal pages update

Self-contained brief. Nothing here depends on another conversation.

## Why this is needed

Fisclok (Android personal-finance app, package `com.astriorb.fincend`) shipped
optional **Google Drive backup** in version 1.0.2. Before that the app was
strictly offline, and the website says so.

That claim is now incomplete. It matters for two concrete reasons:

1. **Google Play fetches the privacy policy URL** and checks it against the
   Data Safety declaration in Play Console. A mismatch is grounds for removal.
2. The Data Safety form will declare financial data as **shared** (to the user's
   own Google Drive) but **not collected** (it never reaches any server of ours).
   The privacy policy is what evidences that distinction.

The Data Safety form has not been submitted yet and is blocked on these pages
being correct first.

## Where the site lives

- Domain: `astriorb.com`
- Hosting: **GitHub Pages** — the A records point at `185.199.108–111.153` and
  `www` is a CNAME to `astriorbpvtldtwebsite.github.io`
- So the pages are files in that repository, not a CMS. Confirm the repo before
  editing.

Pages to update:

- `astriorb.com/fisclok/privacy-policy/`
- `astriorb.com/fisclok/terms/`

Both URLs are linked from inside the app (onboarding screen), so **the paths
must not change** — a rename breaks the in-app links and the Play listing.

## Source of truth

The in-app legal text was already rewritten for Drive backup and is correct.
It lives in `components/LegalModal.tsx` in the app repo. **The website should
agree with it**, not be written independently — Play compares the two.

The full current wording is reproduced below so this brief stands alone.

---

## Page 1 — Privacy Policy

*Last Updated: September 2026*

### Introduction

Fisclok is committed to protecting your privacy. This policy explains how we
handle your information.

### Data Collection and Storage

Your transactions, loans, categories, budgets and settings are stored on your
device in encrypted storage. Fisclok has no accounts and no backend. We do NOT
collect, transmit, or store any of your personal or financial data on our
servers, and we never see it.

### Google Drive Backup (optional)

This feature is off by default and only runs if you connect your Google account.
When enabled, Fisclok writes a single file named `fisclok-backup.json` to your
own Google Drive, containing your transactions, loans, custom categories,
budget, recurring rules and preferences. It is uploaded directly from your
device to Google over an encrypted connection and never passes through our
servers.

The backup file is stored in your Google Drive under your own Google account and
counts against your own Google storage quota. It is saved as a readable JSON
file rather than being separately encrypted by Fisclok, so anyone with access to
your Google account can open and read it. Treat access to your Google account as
access to your financial history.

Fisclok requests only the `drive.file` permission, which limits its access to
files Fisclok itself created. It cannot see, read or modify anything else in
your Drive.

You can disconnect at any time in Settings, or revoke access at
[myaccount.google.com/permissions](https://myaccount.google.com/permissions).
Disconnecting stops future backups; to delete the backup itself, delete the file
from your Drive.

### Announcements

The App periodically downloads a small public notice file so we can share
important messages without shipping an update. This is a download only — no
information about you or your device is sent with the request.

### Feedback Data

If you choose to send feedback or report a bug, we use your device's email
client. The email may include device information and app version. This data is
only sent if you explicitly send the email.

### Permissions

- **Internet** — used for Google Drive Backup and announcements only.
- **Notifications** — used only for the daily reminder, if you enable it.
- **Storage** — used for exporting and importing your data files.

Fisclok does not request camera or photo library access. Profile pictures are
chosen from a set of built-in avatars.

### Children's Privacy

Fisclok is not directed at children under 13 and we do not knowingly collect
information from them. As the App collects nothing, no such information reaches
us.

### Changes to This Policy

If this policy changes materially, the updated version will appear here and the
date above will be revised.

### Contact Us

Email: officialfisclok@gmail.com
Company: AstriOrb Private Limited

---

## Page 2 — Terms of Service

*Last Updated: September 2026*

### 1. Acceptance of Terms

By downloading, installing, or using Fisclok ("the App"), you agree to be bound
by these Terms of Service. If you do not agree to these terms, please do not use
the App.

### 2. Description of Service

Fisclok is a personal finance management application that helps you track income
and expenses, manage loans, create budgets, and analyze spending patterns.

### 3. User Responsibilities

You agree to provide accurate information and keep your device secure. You are
solely responsible for the accuracy of data you enter and should regularly
backup your data.

### 4. Data and Privacy

Your data is stored on your device and is never sent to our servers. If you turn
on Google Drive Backup, a copy is written to your own Google Drive account. You
remain responsible for the accuracy of your data and for keeping a backup.

### 5. Google Drive Backup

Google Drive Backup is optional and off by default. If you enable it, you
authorise the App to create and update a single backup file in your own Google
Drive. That file is held under your Google account and is subject to Google's
own terms. We cannot see it. You may disconnect at any time from Settings.

### 6. Disclaimer of Warranties

THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. We do not guarantee
accuracy of calculations or error-free operation.

### 7. Limitation of Liability

We are not liable for any financial losses, data loss, or decisions made based
on the App.

---

## One change from the in-app text, and why

The paragraph beginning *"The backup file is stored in your Google Drive under
your own Google account…"* is **not** in the app's current wording. It is an
addition, and it should also be added to `LegalModal.tsx` so the two stay in
step.

Reason: the app text says the file is "uploaded over an encrypted connection",
which covers transport but could be read as implying the file itself is
encrypted. It is not — it is plaintext JSON, deliberately, because an encrypted
backup whose password is forgotten after the phone is lost defeats the entire
purpose of a backup. That is a defensible design choice, but it is a material
fact about the user's data and a privacy policy should state it plainly rather
than leave it to be inferred.

## Checks before publishing

- The pages must remain reachable at the exact existing paths — the app links to
  them from onboarding.
- Remove any remaining claim on the site that data "never leaves your device" or
  that the app is "fully offline". Both were true before 1.0.2 and are now
  incomplete. The in-app onboarding copy was already reworded for this reason.
- Contact address on the site should be `officialfisclok@gmail.com`.
  (Note: the Google OAuth consent screen deliberately shows a different address,
  `fincendcode@gmail.com`. That is a known, accepted inconsistency — the Google
  Cloud field only accepts addresses tied to the project owner account. Do not
  "fix" it by changing the website.)
- Once live, verify both URLs load over `https` with no redirect chain. Play
  fetches them directly and a broken or redirecting URL can fail review.

## What happens after this lands

The Play Console Data Safety form gets completed to match:

| Question | Answer |
|---|---|
| Does the app collect or share user data? | Yes |
| Data type | Financial info → Other financial info |
| Collected? | **No** — it never reaches our servers |
| Shared? | **Yes** — transferred to Google Drive on the user's behalf |
| Processed ephemerally? | No |
| Required or optional? | Optional |
| Purpose | App functionality |
| Encrypted in transit? | Yes |
| Can users request deletion? | Yes — disconnect in-app, or delete the file in Drive |
