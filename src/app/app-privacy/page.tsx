import type { Metadata } from "next";
import Link from "next/link";
import { LegalLanguageNotice } from "@/components/app/LegalLanguageNotice";

export const metadata: Metadata = {
  title: "HijabHub App Privacy Policy",
  description: "Privacy policy for the HijabHub application.",
  alternates: { canonical: "/app-privacy" }
};

const privacyEmail = "sales@luveilahijab.com";
const supportEmail = "sales@luveilahijab.com";

export default function AppPrivacyPage() {
  return (
    <div className="shell legal-copy app-support">
      <div className="page-intro">
        <p className="eyebrow">App Legal | HijabHub</p>
        <h1>HijabHub App Privacy Policy</h1>
        <p>Effective date: October 24, 2026<br />Last updated: October 24, 2026</p>
      </div>
      <LegalLanguageNotice />

      <p>This Privacy Policy explains how <strong>Guangzhou Kela Clothing Design Co., Ltd.</strong> (&quot;Luveila,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles information when you use the HijabHub application (the &quot;App&quot;) or contact App support.</p>
      <p>This policy applies to the App. It does not replace the separate privacy policy that may apply to purchases or browsing on the Luveila retail website.</p>

      <section aria-labelledby="information-processed">
        <h2 id="information-processed">1. Information Processed by the App</h2>
        <h3>Information stored primarily on your device</h3>
        <p>The App may store the following locally on your device:</p>
        <ul>
          <li>Editable hijab projects, layers, drawing objects, colors, materials, and project names</li>
          <li>Imported fabric, trim, accessory, pattern, or other design images that you choose to add to a project</li>
          <li>App preferences, language settings, and an optional creator name</li>
          <li>AI-generated images that you intentionally add to a project</li>
          <li>A pending AI task identifier and brief settings, linked to the signed-in account, so the App can query the same request after interruption; this recovery record does not include the original uploaded images</li>
        </ul>
        <p>Local projects are not automatically uploaded to a Luveila cloud library. A design image is uploaded when you intentionally publish the current canvas to the HijabHub community.</p>

        <h3>Account and community information</h3>
        <p>If you create a HijabHub account or use the community, we process:</p>
        <ul>
          <li>Your email address, nickname, password hash and account creation time</li>
          <li>Hashed session tokens and single-use password-reset token records with expiration times</li>
          <li>Community work images, titles, descriptions, tags and comments you choose to publish</li>
          <li>Reports you submit and users you choose to block</li>
          <li>Technical information used for security, rate limiting and troubleshooting, such as request time, service status and error information</li>
        </ul>
        <p>Community work, nickname, descriptions, tags and comments are visible to users who have access to the HijabHub community. New work may remain in a moderation queue until approved. Your email address, password hash, session tokens, reset tokens, reports and block list are not included in public community responses.</p>

        <h3>Information processed when you use AI features</h3>
        <p>When you request AI visualization, virtual try-on, or AI refinement, the App may send:</p>
        <ul>
          <li>Your selected design image or sketch</li>
          <li>Your prompt and design instructions</li>
          <li>Design information such as color, material, viewing angle, and selected generation settings</li>
          <li>For virtual try-on, the portrait you select</li>
          <li>Your selected photo-enhancement, facial beauty, identity-protection, and edit-region settings</li>
          <li>Technical request information needed to deliver and protect the service, such as request time, service status, and error information. Hosting and network providers may record connection information, including IP addresses, under their own logging settings.</li>
        </ul>
        <p>Your portrait may contain facial information. We use it to provide the visual editing or virtual try-on that you request. The App does not use the portrait to identify you against a face database, authenticate your identity, or create a Luveila facial-recognition profile.</p>

        <h3>Subscription and purchase information</h3>
        <p>For subscriptions and consumable AI-credit purchases, we process an account-binding token, Apple&apos;s transaction and original-transaction identifiers, product and applicable subscription-group identifiers, verification environment, purchase and applicable expiration dates, purchased quantity, signed transaction dates, and any revocation information returned by Apple. These records and the credit ledger are linked to your HijabHub account to verify delivery, restore eligible subscription access, calculate available and reserved credits, process refunds and prevent duplicate delivery or reassignment. Apple processes payment; the App does not receive your full payment-card details.</p>

        <h3>Information you provide to support</h3>
        <p>If you contact us, we may receive your email address, message, device and app details, screenshots, and any other information you choose to provide.</p>
      </section>

      <section aria-labelledby="how-used">
        <h2 id="how-used">2. How We Use Information</h2>
        <p>We process information to:</p>
        <ul>
          <li>Operate drawing, saving, exporting, AI visualization, and virtual try-on features</li>
          <li>Create and secure accounts, authenticate sign-ins and reset passwords</li>
          <li>Verify Apple purchases, restore eligible subscriptions and maintain account-linked access and credit balances</li>
          <li>Publish community content you choose to share and deliver comments</li>
          <li>Process reports, user blocks, account deletion and community safety actions</li>
          <li>Return generated or edited images to your device</li>
          <li>Apply only the photo and facial adjustments you select</li>
          <li>Protect the service against abuse, excessive automated requests, and security threats</li>
          <li>Diagnose failures and provide customer support</li>
          <li>Comply with applicable law and enforce our terms</li>
        </ul>
        <p>We do not use your local design projects for advertising. The current release does not contain third-party advertising or cross-app advertising tracking.</p>
      </section>

      <section aria-labelledby="when-leaves-device">
        <h2 id="when-leaves-device">3. When Information Leaves Your Device</h2>
        <p>Ordinary local drawing and project editing do not require uploading the full project to Luveila.</p>
        <p>Information leaves your device when you create or use an account, buy credits or a subscription, restore a subscription, publish or interact with community content, request a password reset, use AI visualization or virtual try-on, or contact support. Purchase identifiers are sent to Luveila&apos;s backend for verification with Apple. AI requests are transmitted to Luveila&rsquo;s backend and then to the provider shown in the App&apos;s data-transfer notice.</p>
        <p>The AI provider depends on the generation mode you select:</p>
        <ul>
          <li>HD generation uses <a className="underline" href="https://openrouter.ai/privacy/" target="_blank" rel="noreferrer">OpenRouter</a>, which may route requests to downstream model providers. Its handling of information is described in the OpenRouter Privacy Policy. The downstream provider may vary between requests.</li>
          <li>For Creative generation, the App uses Volcengine Ark&apos;s Doubao-Seedream-5.0-Pro model. Processing is governed by the <a className="underline" href="https://ark.volcengine.com/region:cn-beijing/docs/volcengine-ark-platform-terms" target="_blank" rel="noreferrer">Ark Platform Terms</a> and the <a className="underline" href="https://ark.volcengine.com/region:cn-beijing/docs/doubao-model-service-agreement" target="_blank" rel="noreferrer">Doubao Model Service Agreement</a>. Under the Ark Platform Terms, Volcengine states that it will not store or use customer data to train or optimize models without separate consent. The terms also permit processing for automated compliance screening, troubleshooting that you request for a reasonable period, and investigation of data that triggers a model-anomaly alert until the alert is resolved. Detection or support may involve third parties. The applicable provider terms describe processing and any applicable retention periods; they may not specify a fixed period.</li>
        </ul>
        <p>Our production backend and related data may be processed by:</p>
        <ul>
          <li><a className="underline" href="https://render.com/privacy" target="_blank" rel="noreferrer">Render Privacy Policy</a></li>
          <li><a className="underline" href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">Cloudflare Privacy Policy</a> for private R2 storage of community images</li>
          <li><a className="underline" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">Apple Privacy Policy</a> for App Store purchases and transaction verification</li>
        </ul>
        <p>We send password-reset emails through <a className="underline" href="https://resend.com/legal/privacy-policy" target="_blank" rel="noreferrer">Resend</a>. The destination email address and reset message are sent to that service for delivery.</p>
        <p>These providers process information under their own terms, privacy policies, security practices, and retention rules. We do not promise a fixed retention period for data processed by an AI provider. Switching the provider shown in the App requires renewed consent for future AI requests.</p>
        <p>We may also disclose information when required by law, to protect users or our rights, or as part of a merger, acquisition, financing, or sale of assets, subject to appropriate safeguards.</p>
        <p>We do not sell your portrait, design, or personal information.</p>
      </section>

      <section aria-labelledby="storage-retention">
        <h2 id="storage-retention">4. Storage and Retention</h2>
        <h3>On-device data</h3>
        <p>Local projects and settings remain on your device until you delete them, clear App data, or uninstall the App, subject to Apple device backup and restore behavior. Exported files and images remain in Photos, Files, backups, or locations you choose until you delete them there.</p>
        <p>The original portrait selected for virtual try-on is not automatically saved inside an editable project. Generated results are stored privately on the server to support delivery and recovery. Device copies may also be stored when you deliberately save, export, share, download, or add a result to a project.</p>

        <h3>Luveila backend</h3>
        <p>Our backend processes the original uploaded images and instructions to complete the request. It does not store those original images or prompts in AI task records. It privately stores generated result images and technical task information, including the account-linked task identifier, selected provider, credit quote, status, request digest and timestamps, so the same result can be retrieved after disconnection without another generation charge. These records and results remain linked to the active account until account deletion; they do not have a scheduled automatic expiration. Task results are accessible only to the owning account. Operational and security logs follow production hosting settings and applicable legal or security needs; application logs exclude image bodies.</p>
        <p>Account and community information is retained while the account or content remains active. Password-reset links expire after 30 minutes; short-lived password-reset rate-limit records use a one-way email hash and expire after 15 minutes. Reports may be retained while they are reviewed and as needed to document safety action. Deleting your account in the App removes the account, community posts and comments, sessions, reset tokens, subscription records, credit balance and ledger, and AI task records from the active store. Private AI results and community media are deleted; temporary storage failures are recorded for retry. Deleting the App or your HijabHub account does not cancel an Apple subscription. You must manage or cancel that subscription through your Apple Account settings. We retain only one-way Apple transaction digests, without the account identifier, to prevent a previously delivered purchase from being granted again. Hosting backups and security records may persist for a limited period where technically or legally required.</p>

        <h3>AI providers</h3>
        <p>AI providers may retain request data for periods described in their own policies or required for abuse prevention and legal compliance. Do not upload a portrait if you do not agree to this processing.</p>
      </section>

      <section aria-labelledby="choices-rights">
        <h2 id="choices-rights">5. Your Choices and Rights</h2>
        <p>You can:</p>
        <ul>
          <li>Avoid online AI features and continue using local drawing tools</li>
          <li>Choose whether to upload a portrait</li>
          <li>Select or disable optional facial beauty adjustments</li>
          <li>Delete saved works in the App</li>
          <li>Delete your HijabHub account and associated community content in the App</li>
          <li>Report a community work or block another community user</li>
          <li>Delete exported images from Photos or Files</li>
          <li>Request information, correction, deletion, restriction, or a copy of personal information where applicable law provides those rights</li>
          <li>Withdraw consent for future processing, without affecting processing already completed lawfully</li>
        </ul>
        <p>To make a privacy request, email <a className="underline" href={`mailto:${privacyEmail}`}>{privacyEmail}</a>. We may need to verify enough information to locate and securely act on the request. Account-linked AI tasks and results can be located while their account records remain available.</p>
      </section>

      <section aria-labelledby="legal-bases">
        <h2 id="legal-bases">6. Legal Bases for Processing</h2>
        <p>Where applicable, we process information:</p>
        <ul>
          <li>To provide features you request and perform our agreement with you</li>
          <li>With your consent, particularly when you choose to submit a portrait and selected facial edits</li>
          <li>For legitimate interests such as service security, fraud prevention, troubleshooting, and product reliability</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section aria-labelledby="portraits-permission">
        <h2 id="portraits-permission">7. Portraits and Permission</h2>
        <p>You must only upload a portrait when:</p>
        <ul>
          <li>You are the person shown; or</li>
          <li>You have clear permission from the person shown to use the image for AI virtual try-on and editing</li>
        </ul>
        <p>Do not upload another person&rsquo;s private image without permission. Do not upload images of children unless you are their parent or legal guardian and the feature is lawful and appropriate in your location.</p>
      </section>

      <section aria-labelledby="children-privacy">
        <h2 id="children-privacy">8. Children&apos;s Privacy</h2>
        <p>The App is not directed to children under 13, or under the higher minimum age required in their country. We do not knowingly collect personal information from a child in violation of applicable law. Contact <a className="underline" href={`mailto:${privacyEmail}`}>{privacyEmail}</a> if you believe a child&rsquo;s information was submitted improperly.</p>
      </section>

      <section aria-labelledby="international-transfers">
        <h2 id="international-transfers">9. International Data Transfers</h2>
        <p>Luveila, its cloud providers, and AI providers may process information in countries different from yours. Where required, we use contractual or other lawful safeguards for international transfers. Provider locations and safeguards may vary by the service selected for a request.</p>
      </section>

      <section aria-labelledby="security">
        <h2 id="security">10. Security</h2>
        <p>We use reasonable technical and organizational measures designed to protect information, including encrypted network transmission for the production service, access controls, request-size limits, and abuse controls. No storage or transmission method is completely secure, and we cannot guarantee absolute security.</p>
      </section>

      <section aria-labelledby="changes-policy">
        <h2 id="changes-policy">11. Changes to This Policy</h2>
        <p>We may update this policy when the App, our providers, or legal requirements change. We will publish the revised policy and update the date above. If a change materially affects how portraits or personal information are used, we will provide additional notice where required.</p>
      </section>

      <section aria-labelledby="contact-us">
        <h2 id="contact-us">12. Contact Us</h2>
        <p><strong>Guangzhou Kela Clothing Design Co., Ltd.</strong><br /><strong>Room 404, No. 12 Dekang Road, Tongde Street, Baiyun District, Guangzhou, Guangdong 510407</strong><br /><strong>China</strong><br />Privacy email: <a className="underline" href={`mailto:${privacyEmail}`}>{privacyEmail}</a><br />Support email: <a className="underline" href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
        <p><Link className="underline" href="/app-support">Return to App Support</Link></p>
      </section>
    </div>
  );
}
