"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const filterLabels = {
  en: { ALL: "ALL", "WEDDING DRESSES": "WEDDING DRESSES", VEILS: "VEILS", EVENING: "EVENING", MODAL: "MODAL", CHIFFON: "CHIFFON", JERSEY: "JERSEY", BRIDAL: "BRIDAL" },
  zh: { ALL: "全部", "WEDDING DRESSES": "婚纱", VEILS: "头纱", EVENING: "晚礼服", MODAL: "莫代尔", CHIFFON: "雪纺", JERSEY: "针织", BRIDAL: "新娘系列" },
  es: { ALL: "TODO", "WEDDING DRESSES": "VESTIDOS DE NOVIA", VEILS: "VELOS", EVENING: "NOCHE", MODAL: "MODAL", CHIFFON: "GASA", JERSEY: "JERSEY", BRIDAL: "NOVIA" },
  ar: { ALL: "الكل", "WEDDING DRESSES": "فساتين الزفاف", VEILS: "الطرحات", EVENING: "فساتين السهرة", MODAL: "مودال", CHIFFON: "شيفون", JERSEY: "جيرسي", BRIDAL: "مجموعة العروس" }
} as const;

const filterAriaLabels = { en: "Filter products", zh: "筛选产品", es: "Filtrar productos", ar: "تصفية المنتجات" } as const;

export function ProductGrid({ products, filters }: { products: Product[]; filters: string[] }) {
  const [active, setActive] = useState("ALL");
  const { language } = useLanguage();
  const visible = useMemo(() => active === "ALL" ? products : products.filter((product) => product.category.toUpperCase().includes(active)), [active, products]);
  return <>
    <div className="filter-row" role="group" aria-label={filterAriaLabels[language]}>
      {filters.map((filter) => <button type="button" key={filter} className={`filter-button ${active === filter ? "is-active" : ""}`} onClick={() => setActive(filter)}>{filterLabels[language][filter as keyof typeof filterLabels.en] || filter}</button>)}
    </div>
    <div className="product-grid">{visible.map((product) => <ProductCard key={product.id} product={product} />)}</div>
  </>;
}
