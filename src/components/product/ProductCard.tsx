"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { getLocalizedProduct } from "@/data/productTranslations";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export function ProductCard({ product }: { product: Product }) {
  const { language } = useLanguage();
  const localized = getLocalizedProduct(product, language);
  return <article className="product-card">
    <Link href={`/products/${product.slug}`} className="product-image-wrap">
      <Image src={product.images[0]} alt={`${product.name} ${product.category}`} fill sizes="(max-width: 700px) 50vw, 25vw" className="product-image" />
    </Link>
    <div className="product-meta">
      <div><h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3><p>{localized.subtitle}</p></div>
      <span className="product-category">{localized.category}</span>
    </div>
  </article>;
}
