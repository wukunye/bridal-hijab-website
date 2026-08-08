import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = { title: "Terms" };
export default function TermsPage() { return <div className="shell legal-copy"><div className="page-intro"><p className="eyebrow">Website Legal</p><h1>Website Terms of Use</h1><p>TODO: Legal review before production use.</p></div><h2>Website content</h2><p>This website presents products and brand information for reference. Product availability, materials and specifications may change without notice.</p><h2>Inquiries</h2><p>Submitting an inquiry does not create a purchase contract. Our team will confirm availability and next steps directly.</p><h2>Contact</h2><p>For questions about these terms, please contact {siteConfig.email}.</p></div>; }
