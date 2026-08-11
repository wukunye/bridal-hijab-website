import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Terms", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return <div className="shell legal-copy">
    <div className="page-intro"><p className="eyebrow">Website Legal</p><h1>Website Terms of Use</h1><p>Effective date: August 8, 2026</p></div>
    <h2>Website content</h2><p>This website presents products and brand information for reference. Product availability, materials, colours and specifications may change without notice.</p>
    <h2>Product inquiries</h2><p>Submitting an inquiry does not create a purchase contract. Our team will confirm product details, availability, pricing, production requirements and next steps directly.</p>
    <h2>Intellectual property</h2><p>Website text, branding, product images and design materials are owned by {siteConfig.legalName} or used with permission. They may not be reproduced for commercial use without written permission.</p>
    <h2>External services</h2><p>Links to email, WhatsApp, WeChat or other third-party services are provided for convenience. Those services operate under their own terms and policies.</p>
    <h2>Contact</h2><p>For questions about these terms, contact <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
  </div>;
}
