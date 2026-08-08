"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products, filters }: { products: Product[]; filters: string[] }) {
  const [active, setActive] = useState("ALL");
  const visible = useMemo(() => active === "ALL" ? products : products.filter((product) => product.category.toUpperCase().includes(active)), [active, products]);
  return <>
    <div className="filter-row" role="group" aria-label="Filter products">
      {filters.map((filter) => <button type="button" key={filter} className={`filter-button ${active === filter ? "is-active" : ""}`} onClick={() => setActive(filter)}>{filter}</button>)}
    </div>
    <div className="product-grid">{visible.map((product) => <ProductCard key={product.id} product={product} />)}</div>
  </>;
}
