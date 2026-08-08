import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getCollectionProducts } from "@/data/products";

export const metadata: Metadata = { title: "Bridal", description: "Timeless silhouettes, delicate details and modern expressions of bridal elegance." };

export default function BridalPage() {
  return <div className="shell"><div className="page-intro"><p className="eyebrow">The collection</p><h1>Bridal</h1><p>Timeless silhouettes, delicate details and modern expressions of bridal elegance.</p></div><section className="pb-32"><SectionHeading eyebrow="Selected pieces" title="Made for the moments that matter." /><ProductGrid products={getCollectionProducts("bridal")} filters={["ALL", "WEDDING DRESSES", "VEILS", "EVENING"]} /></section></div>;
}
