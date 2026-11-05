import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { LegalLanguageNotice } from "@/components/app/LegalLanguageNotice";

export const metadata: Metadata = {
  title: "HijabHub Terms of Use",
  description: "Terms of Use for the HijabHub application.",
  alternates: { canonical: "/app-terms" }
};

export default function AppTermsPage() {
  return (
    <div className="shell legal-copy app-support">
      <div className="page-intro">
        <p className="eyebrow">App Legal | HijabHub</p>
        <h1>HijabHub Terms of Use</h1>
        <p>Effective date: November 5, 2026<br />Last updated: November 5, 2026</p>
      </div>
      <LegalLanguageNotice />

      <p>These Terms of Use (&quot;Terms&quot;) govern your access to and use of the HijabHub application (the &quot;App&quot;). The App is operated by Guangzhou Kela Clothing Design Co., Ltd. (&quot;Luveila,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By downloading, accessing, or using the App, you agree to these Terms. If you do not agree, do not use the App.</p>

      <section aria-labelledby="app-accounts">
        <h2 id="app-accounts">1. The App and Accounts</h2>
        <p>HijabHub provides tools for drawing and editing hijab designs, creating multi-view concepts, saving projects, exporting images, requesting AI visualizations and virtual try-on, and sharing selected work and comments in the HijabHub community.</p>
        <p>An account and an active monthly or yearly auto-renewing basic subscription are required to use the design tools, save projects, export images, and access the community. Both subscription periods provide the same basic access. AI generation also requires an active subscription and sufficient separately purchased AI credits. Account management, subscription information, support, legal information, and eligible purchase restoration remain accessible without an active subscription.</p>
        <p>You are responsible for keeping your account credentials secure and for activity under your account. You must provide accurate account information and promptly update it when it changes. Do not share, sell, or transfer your account or account-bound credits.</p>
      </section>

      <section aria-labelledby="eligibility">
        <h2 id="eligibility">2. Eligibility</h2>
        <p>You must be at least 13 years old, or the higher minimum age required in your country, to use the App independently. If you are under the age of legal majority, a parent or legal guardian must review and agree to these Terms where required by law.</p>
      </section>

      <section aria-labelledby="projects-storage-backups">
        <h2 id="projects-storage-backups">3. Projects, Storage, and Backups</h2>
        <p>Editable design projects are stored primarily on your device and are not automatically uploaded to a Luveila cloud library. Online account and community features, AI requests, and generated results may be processed or stored by Luveila and its service providers as described in the <Link className="underline" href="/app-privacy">App Privacy Policy</Link>.</p>
        <p>You are responsible for saving and backing up important local projects. Deleting the App, clearing App data, losing or replacing a device, or changing system settings may result in loss of locally stored work. Exported PNG images do not preserve all editable project information.</p>
      </section>

      <section aria-labelledby="content-community">
        <h2 id="content-community">4. Your Content and Community</h2>
        <p>&quot;Your Content&quot; includes designs, drawings, prompts, text, photos, portraits, fabric or accessory images, project files, posts, comments, and other material you submit or create through the App.</p>
        <p>You retain the rights you have in Your Content. You grant Luveila and the service providers needed to operate the App a limited, non-exclusive, worldwide license to host, transmit, reproduce, format, and process Your Content as reasonably necessary to provide, secure, troubleshoot, and support the features you request. If you publish content to the community, this license also allows us to display that content to community users until it is removed by you or by us under these Terms.</p>
        <p>You represent that you own Your Content or have all permissions required to use it. If a submitted portrait shows another person, you must have that person&apos;s permission for the AI editing or virtual try-on you request. You are responsible for ensuring that Your Content and use of the App do not violate privacy, publicity, copyright, trademark, or other rights.</p>
        <p>Community posts and comments may be visible to other community users. You can report content or block users through the App. We may review reports, remove content, or limit community access when reasonably necessary to enforce these Terms, protect users, or comply with law.</p>
      </section>

      <section aria-labelledby="ai-features">
        <h2 id="ai-features">5. AI Features</h2>
        <p>AI visualizations, facial edits, and virtual try-on results may be inaccurate, inconsistent, incomplete, or unexpected. Identity-protection controls are intended to reduce unwanted facial changes but cannot guarantee an identical face. AI images are creative visual concepts and do not guarantee physical fit, construction, color, texture, safety, availability, or the final appearance of a manufactured product.</p>
        <p>You are responsible for reviewing AI results before saving, publishing, manufacturing from, selling, or relying on them. Do not present an AI virtual try-on as proof of actual fit or as an unedited documentary photograph when that would mislead others.</p>
        <p>The App identifies the available AI option and provider before an AI request. Your design, prompt, and any optional portrait you choose to submit may be sent to Luveila&apos;s backend and the identified AI provider to fulfill that request. A provider or mode may change or become unavailable; we will provide the applicable in-App disclosure and obtain any consent required for a changed data transfer. See the <Link className="underline" href="/app-privacy">App Privacy Policy</Link> for details about data handling.</p>
      </section>

      <section aria-labelledby="subscriptions-payments">
        <h2 id="subscriptions-payments">6. Subscriptions and Payments</h2>
        <p>Monthly and yearly subscriptions renew automatically unless you cancel through your Apple Account settings. Apple displays the applicable local price and billing period before you confirm a purchase. Manage or cancel a subscription in your Apple Account settings or at <a className="underline" href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noreferrer">Apple&apos;s subscription management page</a>. Follow Apple&apos;s displayed cancellation deadline; cancellation must generally be made at least 24 hours before the current period ends to avoid renewal.</p>
        <p>Subscription access is linked to your HijabHub account after Apple verifies the purchase. Sign in to the same HijabHub account on another device to access eligible subscription benefits. If a subscription expires, is refunded, or is revoked, subscription-gated features may become unavailable. Cancellation normally stops future renewals and does not end access to a paid period already in progress, unless Apple refunds or revokes the purchase.</p>
        <p>Apple processes App Store payments and handles refund requests under its policies and applicable law. Deleting the App or your HijabHub account does not cancel an Apple subscription. You must manage or cancel it separately through Apple.</p>
      </section>

      <section aria-labelledby="ai-credits">
        <h2 id="ai-credits">7. AI Credits</h2>
        <p>AI credits are sold in one-time, non-renewing packs of 10, 30, or 50 credits. The purchase sheet displays the applicable local price before purchase. Credit packs are linked to the HijabHub account associated with the verified Apple transaction; they are not transferable between accounts, redeemable for cash, or included in a basic subscription.</p>
        <p>HD and Creative AI generation share the same credit balance. Each successfully generated image saved for retrieval uses one credit. A confirmed failed request does not consume a credit. If a request times out or its result is uncertain, a credit may remain reserved while the original task is checked. Check the original task status before retrying; the App does not automatically create and charge for a replacement image.</p>
        <p>Credits do not expire while retained in your account. If your subscription ends, AI generation pauses; unused credits remain associated with your account and can be used again if you restore or renew an eligible subscription. Sign in to the same HijabHub account after reinstalling the App or changing devices. Restore Purchases can verify eligible subscriptions; it does not award a previously delivered consumable credit pack a second time.</p>
        <p>If Apple refunds or revokes a credit purchase, the corresponding credits may be removed. If some of those credits have already been used, a resulting shortfall may be applied against future credit purchases or generation; the App will display any applicable adjustment before it proceeds. This does not authorize an automatic cash charge. Credit balances and task records are removed when the associated HijabHub account is deleted, subject to limited records retained as described in the <Link className="underline" href="/app-privacy">App Privacy Policy</Link>.</p>
      </section>

      <section aria-labelledby="acceptable-use">
        <h2 id="acceptable-use">8. Acceptable Use</h2>
        <p>You may not use the App or community to:</p>
        <ul>
          <li>Upload or edit a private portrait without the person&apos;s permission;</li>
          <li>Impersonate, deceive, harass, exploit, defame, or harm another person;</li>
          <li>Create unlawful sexual content, sexual content involving minors, non-consensual intimate imagery, or abusive deepfakes;</li>
          <li>Post spam, hateful, harassing, sexually explicit, unlawful, or infringing material;</li>
          <li>Violate intellectual-property, privacy, publicity, consumer-protection, or other rights;</li>
          <li>Upload malware, disrupt or probe the App, bypass limits, or gain unauthorized access, except where applicable law expressly permits;</li>
          <li>Automate excessive requests, resell access to AI services, or use the App to train or benchmark competing systems without written permission;</li>
          <li>Evade a user block, submit knowingly false reports, interfere with community review, remove ownership notices, or falsely claim that Luveila endorses an output or product.</li>
        </ul>
        <p>We may remove content or limit, suspend, or terminate access to online features when reasonably necessary to protect users, service providers, Luveila, or the public, or to comply with law.</p>
      </section>

      <section aria-labelledby="intellectual-property-feedback">
        <h2 id="intellectual-property-feedback">9. Intellectual Property and Feedback</h2>
        <p>The App, Luveila name and branding, interface, software, templates, documentation, and included assets are owned by Luveila or its licensors and are protected by law. Except for the limited right to use the App under these Terms, no rights are transferred to you.</p>
        <p>Your rights in AI-generated output may depend on applicable law and the terms of the AI provider involved. We do not promise that an AI output is unique, eligible for copyright, free of third-party rights, or suitable for trademark or commercial registration. Similar outputs may be generated for others.</p>
        <p>If you voluntarily send ideas or feedback, you grant Luveila a non-exclusive, perpetual, worldwide, royalty-free right to use that feedback to improve or develop products, without an obligation to compensate you. This does not transfer ownership of your private designs or portraits.</p>
      </section>

      <section aria-labelledby="third-party-services-apple">
        <h2 id="third-party-services-apple">10. Third-Party Services and Apple</h2>
        <p>The App relies on Apple for App Store purchases and may use hosting, storage, email, and AI service providers to operate requested online features. Those services may be subject to separate terms, privacy policies, availability, and processing practices. Review the <Link className="underline" href="/app-privacy">App Privacy Policy</Link> and the provider information presented in the App.</p>
        <p>If you downloaded the App from Apple&apos;s App Store, these Terms are between you and Luveila, not Apple. Luveila, not Apple, is responsible for the App and its support, subject to applicable law. Apple has no obligation to provide maintenance or support for the App. Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce the App Store-related provisions. Your use of the App must comply with Apple&apos;s applicable terms and usage rules.</p>
        <p>The App may also be licensed under Apple&apos;s <a className="underline" href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noreferrer">Standard Licensed Application End User License Agreement</a>.</p>
      </section>

      <section aria-labelledby="account-deletion-termination">
        <h2 id="account-deletion-termination">11. Account Deletion and Termination</h2>
        <p>You may stop using the App and delete your HijabHub account through the in-App account controls. Account deletion removes the account and associated community content, account-linked credit balance, and AI task records from the active service, subject to limited transaction, security, legal, or backup records described in the <Link className="underline" href="/app-privacy">App Privacy Policy</Link>. Deleting a project or uninstalling the App alone does not delete your HijabHub account or its online records.</p>
        <p>We may remove content or suspend or terminate online access if you materially violate these Terms, create legal or security risks, abuse the service, or if a provider or law requires us to do so. Deleting your account does not cancel an Apple subscription; cancel it separately through your Apple Account settings.</p>
        <p>Sections that by their nature should survive termination—including ownership, licenses needed to complete prior requests, disclaimers, liability limits, and dispute terms—will survive.</p>
      </section>

      <section aria-labelledby="disclaimers">
        <h2 id="disclaimers">12. Disclaimers</h2>
        <p>To the maximum extent permitted by law, the App and AI outputs are provided &quot;as is&quot; and &quot;as available.&quot; We do not warrant that the App will be uninterrupted, error-free, perfectly accurate, or compatible with every device, or that an AI output will preserve identity, match a physical product, or be suitable for a particular commercial purpose.</p>
        <p>Nothing in these Terms excludes or limits rights, remedies, or warranties that cannot lawfully be excluded or limited under applicable law.</p>
      </section>

      <section aria-labelledby="limitation-liability">
        <h2 id="limitation-liability">13. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Luveila and its directors, employees, affiliates, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages; lost profits, revenue, data, designs, goodwill, or business opportunities; or losses arising from reliance on AI output, unauthorized content submitted by a user, or loss of locally stored projects.</p>
        <p>Where liability cannot be excluded, Luveila&apos;s liability will be limited only to the extent permitted by applicable law. Consumer rights that cannot be waived remain unaffected.</p>
      </section>

      <section aria-labelledby="changes-app-terms">
        <h2 id="changes-app-terms">14. Changes to the App or These Terms</h2>
        <p>We may update the App or these Terms to reflect new features, providers, safety requirements, or law. We will publish updated Terms and change the date above. Where required, we will provide additional notice or request renewed agreement.</p>
      </section>

      <section aria-labelledby="governing-law-contact">
        <h2 id="governing-law-contact">15. Governing Law and Contact</h2>
        <p>These Terms are governed by the laws of the People&apos;s Republic of China. Disputes arising from these Terms will be submitted to a court with jurisdiction in Guangzhou, Guangdong, China, subject to mandatory consumer-protection laws and any rights that cannot lawfully be waived.</p>
        <p>Questions about these Terms may be sent to:</p>
        <p><strong>Guangzhou Kela Clothing Design Co., Ltd.</strong><br /><strong>Room 404, No. 12 Dekang Road, Tongde Street, Baiyun District, Guangzhou, Guangdong 510407, China</strong><br />Email: <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br />Support: <a className="underline" href="https://luveilahijab.com/contact" target="_blank" rel="noreferrer">Luveila Contact Page</a></p>
      </section>
      <p><Link className="underline" href="/app-support">Return to App Support</Link></p>
    </div>
  );
}
