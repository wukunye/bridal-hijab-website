import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Luverila Hijab Designer Terms of Use",
  description: "Terms of Use for the Luverila Hijab Designer application."
};

const supportEmail = siteConfig.email;

export default function AppTermsPage() {
  return (
    <div className="shell legal-copy app-support">
      <div className="page-intro">
        <p className="eyebrow">Luverila Hijab Designer</p>
        <h1>Terms of Use</h1>
        <p>Effective date: August 8, 2026<br />Last updated: August 8, 2026</p>
      </div>

      <p>These Terms of Use (&quot;Terms&quot;) govern your use of the Luverila Hijab Designer application (the &quot;App&quot;), operated by <strong>{siteConfig.legalName}</strong> (&quot;Luverila,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By downloading, accessing, or using the App, you agree to these Terms.</p>
      <p>If you do not agree, do not use the App.</p>

      <section aria-labelledby="app">
        <h2 id="app">1. The App</h2>
        <p>The App provides creative tools for hijab drawing, multi-view design, project saving, image export, AI visualization, optional portrait enhancement, virtual try-on, and sharing-image preparation.</p>
        <p>AI-generated and virtual try-on images are visual concepts. They may not accurately represent physical fit, construction, color, texture, safety, availability, or the final appearance of a manufactured product.</p>
      </section>

      <section aria-labelledby="eligibility">
        <h2 id="eligibility">2. Eligibility</h2>
        <p>You must be at least 13 years old, or the higher minimum age required in your country, to use the App independently. If you are under the age of legal majority, a parent or legal guardian must review and agree to these Terms where required.</p>
      </section>

      <section aria-labelledby="content-permissions">
        <h2 id="content-permissions">3. Your Content and Permissions</h2>
        <p>&quot;Your Content&quot; includes designs, drawings, prompts, text, photos, portraits, fabric images, accessories, project files, and other material you submit or create through the App.</p>
        <p>You retain the rights you have in Your Content. You grant Luverila and the service providers needed to operate the App a limited, non-exclusive, worldwide license to host, transmit, reproduce, format, and process Your Content only as reasonably necessary to provide, secure, troubleshoot, and support the features you request.</p>
        <p>You represent that:</p>
        <ul>
          <li>You own Your Content or have all permissions required to use it</li>
          <li>A person shown in a submitted portrait has authorized its use for AI editing and virtual try-on, unless you are that person</li>
          <li>Your Content and use of the App do not violate privacy, publicity, copyright, trademark, or other rights</li>
        </ul>
      </section>

      <section aria-labelledby="ai-features">
        <h2 id="ai-features">4. AI Features and Facial Edits</h2>
        <p>AI outputs may be inaccurate, inconsistent, incomplete, or unexpected. Identity-protection controls are designed to reduce unwanted facial changes but cannot guarantee an identical face. Optional eye, eyelash, wrinkle, eyeshadow, blush, or lip adjustments may change a person&apos;s appearance.</p>
        <p>You are responsible for reviewing every output before saving, publishing, manufacturing from, selling, or relying on it. You must not present an AI virtual try-on as proof of actual fit or as an unedited documentary photograph when that would mislead others.</p>
        <p>Luverila may automatically select or change an AI provider based on quality, availability, location, safety, or service reliability. AI features may be unavailable, delayed, rate-limited, modified, or discontinued.</p>
      </section>

      <section aria-labelledby="local-storage">
        <h2 id="local-storage">5. Local Storage and Backups</h2>
        <p>The current release stores projects primarily on your device. You are responsible for saving and backing up important projects.</p>
        <p>Deleting the App, clearing App data, losing or replacing a device, or changing system settings may result in loss of locally stored work. Luverila is not responsible for lost local projects where no cloud-backup service was offered. Exported PNG images do not preserve all editable project information.</p>
      </section>

      <section aria-labelledby="acceptable-use">
        <h2 id="acceptable-use">6. Acceptable Use</h2>
        <p>You may not use the App to:</p>
        <ul>
          <li>Upload or edit a private portrait without the person&apos;s permission</li>
          <li>Impersonate, deceive, harass, exploit, defame, or harm another person</li>
          <li>Create unlawful sexual content, sexual content involving minors, non-consensual intimate imagery, or abusive deepfakes</li>
          <li>Violate intellectual-property, privacy, publicity, consumer-protection, or other rights</li>
          <li>Upload malware or attempt to disrupt, probe, reverse engineer, bypass limits, or gain unauthorized access to the App or its services, except where applicable law expressly permits</li>
          <li>Automate excessive requests, resell access to the AI service, or use the App to train or benchmark competing systems without written permission</li>
          <li>Remove ownership notices or falsely claim that Luverila endorses an output or product</li>
        </ul>
        <p>We may limit or block access to online features when reasonably necessary to protect users, providers, Luverila, or the public.</p>
      </section>

      <section aria-labelledby="intellectual-property">
        <h2 id="intellectual-property">7. Intellectual Property</h2>
        <p>The App, Luverila name and branding, interface, software, templates, documentation, and included assets are owned by Luverila or its licensors and are protected by law. Except for the limited right to use the App under these Terms, no rights are transferred to you.</p>
        <p>Your rights in AI-generated output may depend on applicable law and the terms of the AI provider involved. Luverila does not promise that an AI output is unique, eligible for copyright, free of third-party rights, or suitable for trademark or commercial registration. Similar outputs may be generated for others.</p>
      </section>

      <section aria-labelledby="third-party-services">
        <h2 id="third-party-services">8. Third-Party Services</h2>
        <p>Online AI features rely on third-party cloud and AI services. Their availability, processing, and policies may affect the App. Review the <Link className="underline" href="/app-privacy">App Privacy Policy</Link> for information about data sharing and provider processing.</p>
        <p>Apple is not responsible for third-party AI services or their outputs.</p>
      </section>

      <section aria-labelledby="future-paid">
        <h2 id="future-paid">9. Future Paid Features</h2>
        <p>The current release described by these Terms does not require a Luverila account or include an App subscription or AI-credit purchase system. If paid features are introduced, we will disclose the price, included benefits, renewal terms, cancellation method, and any applicable Apple in-app-purchase rules before purchase, and we will update these Terms as needed.</p>
      </section>

      <section aria-labelledby="feedback">
        <h2 id="feedback">10. Feedback</h2>
        <p>If you voluntarily send ideas or feedback, you grant Luverila a non-exclusive, perpetual, worldwide, royalty-free right to use that feedback to improve or develop products, without an obligation to compensate you. This does not transfer ownership of your private designs or portraits.</p>
      </section>

      <section aria-labelledby="disclaimers">
        <h2 id="disclaimers">11. Disclaimers</h2>
        <p>To the maximum extent permitted by law, the App and AI outputs are provided &quot;as is&quot; and &quot;as available.&quot; We do not warrant that the App will be uninterrupted, error-free, perfectly accurate, or compatible with every device, or that an AI output will preserve identity, match a physical product, or be suitable for a particular commercial purpose.</p>
        <p>Nothing in these Terms excludes rights or warranties that cannot lawfully be excluded under applicable consumer law.</p>
      </section>

      <section aria-labelledby="limitation-liability">
        <h2 id="limitation-liability">12. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Luverila and its directors, employees, affiliates, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages; lost profits, revenue, data, designs, goodwill, or business opportunities; or losses arising from reliance on AI output, unauthorized content submitted by a user, or loss of locally stored projects.</p>
        <p>Where liability cannot be excluded, Luverila&apos;s liability will be limited to the amount permitted by applicable law. Consumer rights that cannot be waived remain unaffected.</p>
      </section>

      <section aria-labelledby="suspension-termination">
        <h2 id="suspension-termination">13. Suspension and Termination</h2>
        <p>You may stop using and delete the App at any time. We may suspend or terminate access to online features if you materially violate these Terms, create legal or security risk, abuse the service, or if a provider or law requires us to do so.</p>
        <p>Sections that by their nature should survive termination—including ownership, permissions already needed to complete prior requests, disclaimers, liability, and dispute terms—will survive.</p>
      </section>

      <section aria-labelledby="changes">
        <h2 id="changes">14. Changes</h2>
        <p>We may update the App or these Terms to reflect new features, providers, safety requirements, or law. We will publish updated Terms and change the date above. Where required, we will provide additional notice or request renewed agreement.</p>
      </section>

      <section aria-labelledby="apple-terms">
        <h2 id="apple-terms">15. Apple App Store Terms</h2>
        <p>If you downloaded the App from Apple&apos;s App Store:</p>
        <ul>
          <li>These Terms are between you and Luverila, not Apple</li>
          <li>Luverila, not Apple, is responsible for the App and its support, subject to applicable law</li>
          <li>Apple has no obligation to provide maintenance or support for the App</li>
          <li>Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce the App Store-related provisions</li>
          <li>Your use of the App must comply with the App Store terms and applicable usage rules</li>
        </ul>
        <p>The App may also be licensed under Apple&apos;s Standard Licensed Application End User License Agreement, available at: <a className="underline" href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noreferrer">Apple Standard EULA</a>.</p>
      </section>

      <section aria-labelledby="governing-law-contact">
        <h2 id="governing-law-contact">16. Governing Law and Contact</h2>
        <p>These Terms are governed by a governing law and court jurisdiction to be confirmed before production launch, except where mandatory consumer law gives you rights in another jurisdiction.</p>
        <p>Questions about these Terms may be sent to:</p>
        <p><strong>{siteConfig.legalName}</strong><br /><strong>{siteConfig.address.replace(/, China$/, "")}</strong><br /><strong>China</strong><br />Email: <a className="underline" href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
        <p><Link className="underline" href="/app-support">Return to App Support</Link></p>
      </section>
    </div>
  );
}
