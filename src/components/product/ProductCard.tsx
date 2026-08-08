import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <Link href={`/products/${product.slug}`} className="product-image-wrap">
      <Image src={product.images[0]} alt={`${product.name} ${product.category}`} fill sizes="(max-width: 700px) 50vw, 25vw" className="product-image" />
    </Link>
    <div className="product-meta">
      <div><h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3><p>{product.subtitle}</p></div>
      <span className="product-category">{product.category}</span>
    </div>
  </article>;
}
