import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import { siteConfig } from "@/config/site";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product" };
  return { title: product.name, description: product.description, openGraph: { title: `${product.name} | ${siteConfig.name}`, description: product.description, images: [product.images[0]] } };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const whatsapp = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Hello, I'm interested in ${product.name}.\nI'd like to learn more about this product.`)}`;
  return <div className="shell"><div className="product-detail"><div className="gallery">{product.images.map((image, index) => <figure className="gallery-item" key={image}><Image src={image} alt={`${product.name} view ${index + 1}`} fill sizes="(max-width: 900px) 100vw, 58vw" className="object-cover" /></figure>)}</div><div className="detail-copy"><Link href={`/${product.collection}`} className="eyebrow inline-flex items-center gap-2"><ArrowLeft size={13} /> Back to {product.collection}</Link><h1>{product.name}</h1><p className="detail-subtitle">{product.subtitle}</p><p className="detail-description">{product.description}</p><dl className="detail-list"><div><dt>Collection</dt><dd>{product.collection === "bridal" ? "Bridal" : "Modest"}</dd></div><div><dt>Category</dt><dd>{product.category}</dd></div>{product.material && <div><dt>Material</dt><dd>{product.material}</dd></div>}{product.colors && <div><dt>Colours</dt><dd>{product.colors.join(", ")}</dd></div>}{product.sizes && <div><dt>Sizes</dt><dd>{product.sizes.join(", ")}</dd></div>}</dl><div className="detail-actions"><Link className="button button-dark" href={`/contact?product=${product.slug}`}>Send an inquiry <ArrowUpRight size={14} /></Link><a className="button button-ghost" href={whatsapp} target="_blank" rel="noreferrer">Contact on WhatsApp <ArrowUpRight size={14} /></a></div></div></div></div>;
}
