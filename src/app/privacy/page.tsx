import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles information collected through its website.`
};

export default function PrivacyPage() {
  const effectiveDate = "August 8, 2026";

  return <div className="shell legal-copy">
    <div className="page-intro">
      <p className="eyebrow">Legal</p>
      <h1>Privacy policy</h1>
      <p>Effective date: {effectiveDate}</p>
    </div>

    <p>{siteConfig.legalName} (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy explains how we handle information when you visit {siteConfig.url} or contact us through the methods shown on our website.</p>

    <h2>Information you provide</h2>
    <p>If you contact us by email, WhatsApp or WeChat, we may receive the information you choose to share, such as your name, email address, phone number, country, product interest and message. Please provide only the information needed for your inquiry.</p>

    <h2>How we use information</h2>
    <p>We use contact information to respond to your questions, discuss product inquiries, provide requested information and maintain business communications. We do not sell your personal information.</p>

    <h2>Website and service providers</h2>
    <p>Our website is hosted by Vercel. Like most hosting providers, Vercel may process limited technical information needed to deliver and secure the website, such as IP address, browser details, device information and access logs. Our website also displays images supplied through Unsplash, an external image service. When you view those images, Unsplash may receive technical information from your browser under its own privacy policy.</p>

    <h2>External links and messaging services</h2>
    <p>Our website may link to third-party services, including WhatsApp, WeChat and social media platforms. Your use of those services is governed by their own privacy policies. We are not responsible for the privacy practices of external websites or messaging platforms.</p>

    <h2>Data retention and security</h2>
    <p>We retain inquiry information only for as long as reasonably necessary to respond to you, maintain our business records or meet legal obligations. We use reasonable administrative and technical measures to protect information, but no online transmission or storage method is completely secure.</p>

    <h2>Your choices</h2>
    <p>You may ask us to update, correct or delete the personal information you have provided to us, subject to applicable legal requirements. To make a request, contact us using the details below.</p>

    <h2>Changes to this policy</h2>
    <p>We may update this Privacy Policy when our website, services or legal obligations change. The effective date at the top of this page indicates when it was last updated.</p>

    <h2>Contact us</h2>
    <p>For questions about this Privacy Policy or your information, contact {siteConfig.legalName} at <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or at {siteConfig.address}.</p>

    <p className="mt-12 text-sm text-muted">TODO: Legal review before production use. This policy is written for the current brochure-style website and should be reviewed before adding checkout, payments, analytics, advertising, customer accounts or email marketing.</p>
  </div>;
}
