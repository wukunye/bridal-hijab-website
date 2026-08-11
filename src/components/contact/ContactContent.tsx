"use client";

import { ArrowUpRight } from "lucide-react";
import { PageText } from "@/components/i18n/PageText";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const contactCopy = {
  en: { subject: "Product inquiry", productSubject: "Inquiry about", general: "Hello, I'd like to learn more about your collections.", product: "Hello, I'm interested in this product and would like to learn more." },
  zh: { subject: "产品咨询", productSubject: "产品咨询", general: "你好，我想进一步了解你们的产品系列。", product: "你好，我对这款产品感兴趣，希望了解更多信息。" },
  es: { subject: "Consulta de producto", productSubject: "Consulta sobre", general: "Hola, me gustaría obtener más información sobre sus colecciones.", product: "Hola, me interesa este producto y me gustaría obtener más información." },
  ar: { subject: "استفسار عن المنتجات", productSubject: "استفسار عن", general: "مرحبا، أرغب في معرفة المزيد عن مجموعاتكم.", product: "مرحبا، أنا مهتم بهذا المنتج وأرغب في معرفة المزيد." }
} as const;

export function ContactContent({ selectedProduct }: { selectedProduct: string }) {
  const { language } = useLanguage();
  const text = contactCopy[language];
  const subject = selectedProduct ? `${text.productSubject} ${selectedProduct}` : text.subject;
  const whatsappText = selectedProduct ? `${selectedProduct}: ${text.product}` : text.general;
  return <div className="shell"><div className="contact-grid"><section className="contact-copy"><div className="page-intro"><p className="eyebrow"><PageText id="contactUs" /></p><h1><PageText id="contactTitle" /></h1><p><PageText id="contactIntro" /></p></div><dl className="contact-details"><div><dt><PageText id="emailLabel" /></dt><dd><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd></div><div><dt><PageText id="whatsappLabel" /></dt><dd><a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">{siteConfig.whatsapp}</a></dd></div><div><dt><PageText id="wechatLabel" /></dt><dd>{siteConfig.wechat}</dd></div><div><dt><PageText id="addressLabel" /></dt><dd>{siteConfig.address}</dd></div></dl></section><section><div className="page-intro"><p className="eyebrow"><PageText id="contactDirect" /></p><h2 className="font-serif text-4xl"><PageText id="startTeam" /></h2><p><PageText id="chooseContact" /></p></div>{selectedProduct && <p className="mb-6 text-sm text-muted"><PageText id="interestedProduct" />: <strong className="font-medium text-ink">{selectedProduct}</strong></p>}<div className="detail-actions"><a className="button button-dark" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`}><PageText id="sendEmail" /> <ArrowUpRight size={14} /></a><a className="button button-ghost" href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noreferrer"><PageText id="whatsappContact" /> <ArrowUpRight size={14} /></a></div><div className="mt-10 border-t border-black/10 pt-8"><p className="eyebrow"><PageText id="wechatLabel" /></p><p className="font-serif text-3xl">{siteConfig.wechat}</p></div></section></div></div>;
}
