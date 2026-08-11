import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import { siteConfig } from "@/config/site";
import { LocalizedProductDetails } from "@/components/product/LocalizedProductDetails";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product" };
  return { title: product.name, description: product.description, alternates: { canonical: `/products/${product.slug}` }, openGraph: { title: `${product.name} | ${siteConfig.name}`, description: product.description, url: `${siteConfig.url}/products/${product.slug}`, images: [product.images[0]] } };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  return <div className="shell"><div className="product-detail"><div className="gallery">{product.images.map((image, index) => <figure className="gallery-item" key={image}><Image src={image} alt={`${product.name} view ${index + 1}`} fill sizes="(max-width: 900px) 100vw, 58vw" className="object-cover" /></figure>)}</div><LocalizedProductDetails product={product} /></div></div>;
}
