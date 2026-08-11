"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import { getLocalizedProduct } from "@/data/productTranslations";
import { siteConfig } from "@/config/site";
import { PageText } from "@/components/i18n/PageText";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const detailCopy = {
  en: { bridal: "Bridal", modest: "Modest", message: "Hello, I'm interested in this product. I'd like to learn more." },
  zh: { bridal: "婚纱", modest: "端庄时尚", message: "你好，我对这个产品感兴趣，希望了解更多信息。" },
  es: { bridal: "Novias", modest: "Modesta", message: "Hola, me interesa este producto. Me gustaría obtener más información." },
  ar: { bridal: "فساتين الزفاف", modest: "الأزياء المحتشمة", message: "مرحبا، أنا مهتم بهذا المنتج وأرغب في معرفة المزيد." }
} as const;

export function LocalizedProductDetails({ product }: { product: Product }) {
  const { language } = useLanguage();
  const localized = getLocalizedProduct(product, language);
  const text = detailCopy[language];
  const whatsapp = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`${product.name}: ${text.message}`)}`;
  const collectionName = product.collection === "bridal" ? text.bridal : text.modest;
  return <div className="detail-copy"><Link href={`/${product.collection}`} className="eyebrow inline-flex items-center gap-2"><ArrowLeft size={13} /> <PageText id="backTo" /> {collectionName}</Link><h1>{product.name}</h1><p className="detail-subtitle">{localized.subtitle}</p><p className="detail-description">{localized.description}</p><dl className="detail-list"><div><dt><PageText id="collectionLabel" /></dt><dd>{collectionName}</dd></div><div><dt><PageText id="categoryLabel" /></dt><dd>{localized.category}</dd></div>{localized.material && <div><dt><PageText id="materialLabel" /></dt><dd>{localized.material}</dd></div>}{localized.colors && <div><dt><PageText id="coloursLabel" /></dt><dd>{localized.colors.join(", ")}</dd></div>}{localized.sizes && <div><dt><PageText id="sizesLabel" /></dt><dd>{localized.sizes.join(", ")}</dd></div>}</dl><div className="detail-actions"><Link className="button button-dark" href={`/contact?product=${product.slug}`}><PageText id="sendInquiry" /> <ArrowUpRight size={14} /></Link><a className="button button-ghost" href={whatsapp} target="_blank" rel="noreferrer"><PageText id="whatsappContact" /> <ArrowUpRight size={14} /></a></div></div>;
}
