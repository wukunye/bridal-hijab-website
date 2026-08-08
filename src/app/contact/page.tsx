import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getProduct } from "@/data/products";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with our team for product inquiries and collaborations." };

export default function ContactPage({ searchParams }: { searchParams?: { product?: string } }) {
  const selectedProduct = searchParams?.product ? getProduct(searchParams.product)?.name || searchParams.product : "";
  const subject = selectedProduct ? `Inquiry about ${selectedProduct}` : "Product inquiry";
  const whatsappText = selectedProduct
    ? `Hello, I'm interested in ${selectedProduct}. I'd like to learn more about this product.`
    : "Hello, I'd like to learn more about your collections.";

  return <div className="shell"><div className="contact-grid"><section className="contact-copy"><div className="page-intro"><p className="eyebrow">Contact</p><h1>Let&apos;s get in touch.</h1><p>We&apos;d love to hear from you. For product inquiries, collaborations or general questions, please contact us below.</p></div><dl className="contact-details"><div><dt>Email</dt><dd><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd></div><div><dt>WhatsApp</dt><dd><a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">{siteConfig.whatsapp}</a></dd></div><div><dt>WeChat</dt><dd>{siteConfig.wechat}</dd></div><div><dt>Company address</dt><dd>{siteConfig.address}</dd></div></dl></section><section><div className="page-intro"><p className="eyebrow">Contact us directly</p><h2 className="font-serif text-4xl">Start a conversation with our team.</h2><p>Choose the contact method that works best for you. We will respond as soon as possible.</p></div>{selectedProduct && <p className="mb-6 text-sm text-muted">Interested product: <strong className="font-medium text-ink">{selectedProduct}</strong></p>}<div className="detail-actions"><a className="button button-dark" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`}>Send an email <ArrowUpRight size={14} /></a><a className="button button-ghost" href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noreferrer">Contact on WhatsApp <ArrowUpRight size={14} /></a></div><div className="mt-10 border-t border-black/10 pt-8"><p className="eyebrow">WeChat</p><p className="font-serif text-3xl">{siteConfig.wechat}</p></div></section></div></div>;
}
