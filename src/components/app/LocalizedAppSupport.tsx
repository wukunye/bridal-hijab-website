"use client";

import Link from "next/link";
import type { Language } from "@/components/i18n/LanguageProvider";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const translationNotice: Record<Language, string> = {
  en: "",
  zh: "当前最新版支持指南仅提供英文版本。",
  es: "La guía de soporte actualizada solo está disponible en inglés.",
  ar: "يتوفر دليل الدعم الحالي باللغة الإنجليزية فقط."
};

const supportEmail = "sales@luveilahijab.com";

export function LocalizedAppSupport() {
  const { language } = useLanguage();

  return (
    <div className="shell app-support legal-copy">
      <div className="page-intro">
        <p className="eyebrow">App Support | HijabHub</p>
        <h1>HijabHub Support</h1>
        <p>HijabHub helps creators draw multi-view hijab concepts, save editable projects, export images, create AI visualizations and share selected work with the HijabHub community.</p>
        <p>Last updated: November 5, 2026</p>
      </div>
      {translationNotice[language] && <aside className="legal-language-notice">{translationNotice[language]}</aside>}

      <section aria-labelledby="contact-support">
        <h2 id="contact-support">Contact Support</h2>
        <p>For help, email <a className="underline" href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>
        <p>When contacting support, please include:</p>
        <ul>
          <li>Your device model and iOS or iPadOS version</li>
          <li>The HijabHub app version and build number</li>
          <li>A short description of what you were doing</li>
          <li>The exact error message and a screenshot, if available</li>
        </ul>
        <p>Do not email passwords, API keys, login tokens, full identity documents or private portraits that are unrelated to the support request.</p>
      </section>

      <section aria-labelledby="projects-backups">
        <h2 id="projects-backups">Projects and Backups</h2>
        <p>Editable projects are primarily stored on your device. Use the project export function to create a <code>.nur.json</code> backup before deleting the App, clearing App data or changing devices. A PNG export is an image and does not contain all editable project information.</p>
      </section>

      <section aria-labelledby="ai-features-credits">
        <h2 id="ai-features-credits">AI Features and Credits</h2>
        <p>AI generation requires an internet connection. A first request may take longer while the service starts. Generated images are creative previews and may not exactly match physical fabric, construction, color or fit.</p>
        <p>Only submit a portrait when you are the person shown or have that person&apos;s clear permission for AI editing and virtual try-on.</p>
        <p>HijabHub currently offers HD generation through OpenRouter and Creative generation through Volcengine; Standard generation is paused. AI generation requires an active basic subscription and separately purchased credits. Open AI Credits to check your available and reserved balance and the local Apple price for a 10, 30 or 50 credit pack. Credit packs are one-time purchases and do not renew. HD and Creative generation share one credit balance. Each successfully generated image saved for retrieval uses one credit, including refinement, theme fusion and pose generation.</p>
        <p>After reinstalling the App or changing devices, sign in to the same HijabHub account and refresh the credit balance. Restore Purchases verifies eligible subscriptions; it does not deliver a previously purchased consumable credit pack again. If Apple completes a purchase but the balance has not updated, refresh to continue verifying the original purchase rather than buying again.</p>
        <p>If generation disconnects, use <strong>Check Previous Result</strong>. The App checks the same task without starting another generation. A confirmed failure releases the reserved credit. If the status remains unknown, contact support with your account email, App version and the approximate request time. Do not email an API key, password or login token. Support must verify the original task before resolving its reservation.</p>
        <p>If Apple refunds or revokes a credit purchase, the corresponding credits may be removed. If some credits have already been used, the Credits page shows any resulting shortfall. A future credit purchase or generation may first be applied to that shortfall; no additional automatic cash charge is made.</p>
      </section>

      <section aria-labelledby="subscription-restore-help">
        <h2 id="subscription-restore-help">Subscription and Restore Help</h2>
        <p>Open <strong>Premium</strong> to view Apple&apos;s current local monthly and yearly prices. Monthly and yearly plans provide the same basic access for different billing periods. Sign in to your HijabHub account before purchasing so the transaction can be linked to that account.</p>
        <p>To restore an eligible subscription, sign in to the same HijabHub account, open <strong>Premium → Restore Purchases</strong>, and wait for server verification. If no active subscription is found, check that you are using the Apple account that made the purchase and that the subscription has not expired. Contact support with the displayed error if verification fails; do not repeatedly purchase to resolve an error.</p>
        <p>Manage or cancel automatic renewal through <a className="underline" href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noreferrer">Apple subscription settings</a>. Deleting the App or your HijabHub account does not cancel the subscription. Apple&apos;s purchase sheet and subscription settings show the applicable renewal and cancellation terms. For refund requests, use Apple&apos;s purchase support process.</p>
      </section>

      <section aria-labelledby="account-password-help">
        <h2 id="account-password-help">Account and Password Help</h2>
        <p>Use <strong>Forgot password?</strong> on the HijabHub community sign-in screen to request a password reset link. The link expires after 30 minutes and can be used once. If you do not receive an email after a few minutes, check your spam folder and contact support. If a link has expired or has already been used, request a new one.</p>
      </section>

      <section aria-labelledby="delete-account">
        <h2 id="delete-account">Delete Your Account</h2>
        <p>While signed in, open <strong>Community → Account → Delete my account and community content</strong>, enter your current password and confirm deletion. Your account, account-linked AI credit balance, generated results, community posts and comments cannot be recovered after deletion. Local projects and files exported to Photos or Files remain on your device until you delete them separately. Deleting your HijabHub account does not cancel an Apple subscription; cancel it separately through your Apple Account settings.</p>
      </section>

      <section aria-labelledby="report-block-content">
        <h2 id="report-block-content">Report or Block Community Content</h2>
        <p>When signed in, use <strong>Report work</strong> to submit a reason for review, or <strong>Block this user</strong> to stop displaying that creator&apos;s posts and comments in your feed. For urgent safety or legal concerns, contact support and include the post title and creator nickname. Do not redistribute the reported content.</p>
      </section>

      <section aria-labelledby="privacy-terms">
        <h2 id="privacy-terms">Privacy and Terms</h2>
        <ul>
          <li><Link className="underline" href="/app-privacy">HijabHub App Privacy Policy</Link></li>
          <li><Link className="underline" href="/app-terms">HijabHub Terms of Use</Link></li>
        </ul>
      </section>

      <section aria-labelledby="company-information">
        <h2 id="company-information">Company Information</h2>
        <p><strong>Guangzhou Kela Clothing Design Co., Ltd.</strong><br />Room 404, No. 12 Dekang Road, Tongde Street<br />Baiyun District, Guangzhou, Guangdong 510407<br />China</p>
      </section>
    </div>
  );
}
