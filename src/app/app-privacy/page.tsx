import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Luverila Hijab Designer App Privacy Policy",
  description: "Privacy policy for the Luverila Hijab Designer application."
};

const privacyEmail = siteConfig.email;
const supportEmail = siteConfig.email;

export default function AppPrivacyPage() {
  return (
    <div className="shell legal-copy app-support">
      <div className="page-intro">
        <p className="eyebrow">App Legal | Luverila Hijab Designer</p>
        <h1>App Privacy Policy</h1>
        <p>Effective date: August 8, 2026<br />Last updated: August 8, 2026</p>
      </div>

      <p>This Privacy Policy explains how <strong>{siteConfig.legalName}</strong> (&quot;Luverila,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles information when you use the Luverila Hijab Designer application (the &quot;App&quot;) or contact App support.</p>
      <p>This policy applies to the App. It does not replace the separate privacy policy that may apply to purchases or browsing on the Luverila retail website.</p>

      <section aria-labelledby="information-processed">
        <h2 id="information-processed">1. Information Processed by the App</h2>
        <h3>Information stored primarily on your device</h3>
        <p>The App may store the following locally on your device:</p>
        <ul>
          <li>Editable hijab projects, layers, drawing objects, colors, materials, and project names</li>
          <li>Imported fabric, trim, accessory, pattern, or other design images that you choose to add to a project</li>
          <li>App preferences, language settings, and an optional creator name</li>
          <li>AI-generated images that you intentionally add to a project</li>
        </ul>
        <p>Local projects are not automatically uploaded to a Luverila cloud library in the current release.</p>
        <h3>Information processed when you use AI features</h3>
        <p>When you request AI visualization, virtual try-on, or AI refinement, the App may send:</p>
        <ul>
          <li>Your selected design image or sketch</li>
          <li>Your prompt and design instructions</li>
          <li>Design information such as color, material, viewing angle, and selected generation settings</li>
          <li>For virtual try-on, the portrait you select</li>
          <li>Your selected photo-enhancement, facial beauty, identity-protection, and edit-region settings</li>
          <li>Technical request information needed to deliver and protect the service, such as IP address, request time, service status, and error information</li>
        </ul>
        <p>Your portrait may contain facial information. We use it to provide the visual editing or virtual try-on that you request. The App does not use the portrait to identify you against a face database, authenticate your identity, or create a Luverila facial-recognition profile.</p>
        <h3>Information you provide to support</h3>
        <p>If you contact us, we may receive your email address, message, device and app details, screenshots, and any other information you choose to provide.</p>
      </section>

      <section aria-labelledby="how-used">
        <h2 id="how-used">2. How We Use Information</h2>
        <p>We process information to:</p>
        <ul>
          <li>Operate drawing, saving, exporting, AI visualization, and virtual try-on features</li>
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
        <p>Ordinary local drawing and project editing do not require uploading the full project to Luverila.</p>
        <p>Information leaves your device when you intentionally use an online feature, including AI visualization or virtual try-on, or when you send information to support. AI requests are transmitted to Luverila&apos;s backend and then to an AI provider selected by our service.</p>
        <p>AI provider privacy links will be listed here before the production AI service is enabled.</p>
        <p>Our production backend and related data may be processed by a cloud hosting provider. The production provider and its privacy policy will be listed here before the production service is enabled.</p>
        <p>These providers process information under their own terms, privacy policies, security practices, and retention rules. The consumer version of the App may select a provider automatically based on quality, availability, location, or service reliability.</p>
        <p>We may also disclose information when required by law, to protect users or our rights, or as part of a merger, acquisition, financing, or sale of assets, subject to appropriate safeguards.</p>
        <p>We do not sell your portrait, design, or personal information.</p>
      </section>

      <section aria-labelledby="storage-retention">
        <h2 id="storage-retention">4. Storage and Retention</h2>
        <h3>On-device data</h3>
        <p>Local projects and settings remain on your device until you delete them, clear App data, or uninstall the App, subject to Apple device backup and restore behavior. Exported files and images remain in Photos, Files, backups, or locations you choose until you delete them there.</p>
        <p>The original portrait selected for virtual try-on is not automatically saved inside an editable project. A generated result may be stored when you deliberately save, export, share, download, or add it to a project.</p>
        <h3>Luverila backend</h3>
        <p>Our current image-generation endpoint processes submitted images to complete the request and does not intentionally create a permanent Luverila gallery of original try-on portraits. A specific operational log retention period will be configured and documented before production launch. Logs should be configured not to contain image bodies, except where temporarily necessary to investigate a user-reported failure with the user&apos;s knowledge.</p>
        <h3>AI providers</h3>
        <p>AI providers may retain request data for periods described in their own policies or required for abuse prevention and legal compliance. Before publication, the provider links above must identify the providers used in production. Do not upload a portrait if you do not agree to this processing.</p>
      </section>

      <section aria-labelledby="choices-rights">
        <h2 id="choices-rights">5. Your Choices and Rights</h2>
        <p>You can:</p>
        <ul>
          <li>Avoid online AI features and continue using local drawing tools</li>
          <li>Choose whether to upload a portrait</li>
          <li>Select or disable optional facial beauty adjustments</li>
          <li>Delete saved works in the App</li>
          <li>Delete exported images from Photos or Files</li>
          <li>Request information, correction, deletion, restriction, or a copy of personal information where applicable law provides those rights</li>
          <li>Withdraw consent for future processing, without affecting processing already completed lawfully</li>
        </ul>
        <p>To make a privacy request, email <a className="underline" href={`mailto:${privacyEmail}`}>{privacyEmail}</a>. We may need to verify enough information to locate and securely act on the request. Because the current release does not require an account, we may not be able to associate an anonymous past AI request with a particular person after the request has completed.</p>
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
        <p>Do not upload another person&apos;s private image without permission. Do not upload images of children unless you are their parent or legal guardian and the feature is lawful and appropriate in your location.</p>
      </section>

      <section aria-labelledby="children-privacy">
        <h2 id="children-privacy">8. Children&apos;s Privacy</h2>
        <p>The App is not directed to children under 13, or under the higher minimum age required in their country. We do not knowingly collect personal information from a child in violation of applicable law. Contact <a className="underline" href={`mailto:${privacyEmail}`}>{privacyEmail}</a> if you believe a child&apos;s information was submitted improperly.</p>
      </section>

      <section aria-labelledby="international-transfers">
        <h2 id="international-transfers">9. International Data Transfers</h2>
        <p>Luverila, its cloud providers, and AI providers may process information in countries different from yours. Where required, we use contractual or other lawful safeguards for international transfers. Provider locations and safeguards may vary by the service selected for a request.</p>
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
        <p><strong>{siteConfig.legalName}</strong><br /><strong>{siteConfig.address.replace(/, China$/, "")}</strong><br /><strong>China</strong><br />Privacy email: <a className="underline" href={`mailto:${privacyEmail}`}>{privacyEmail}</a><br />Support email: <a className="underline" href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
        <p><Link className="underline" href="/app-support">Return to App Support</Link></p>
      </section>
    </div>
  );
}
