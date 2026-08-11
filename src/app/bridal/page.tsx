import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getCollectionProducts } from "@/data/products";
import { PageText } from "@/components/i18n/PageText";

export const metadata: Metadata = { title: "Bridal", description: "Timeless silhouettes, delicate details and modern expressions of bridal elegance.", alternates: { canonical: "/bridal" } };

export default function BridalPage() {
  return <div className="shell"><div className="page-intro"><p className="eyebrow"><PageText id="collection" /></p><h1><PageText id="bridalName" /></h1><p><PageText id="bridalIntro" /></p></div><section className="pb-32"><SectionHeading eyebrow={<PageText id="selectedPieces" />} title={<PageText id="bridalPageTitle" />} /><ProductGrid products={getCollectionProducts("bridal")} filters={["ALL", "WEDDING DRESSES", "VEILS", "EVENING"]} /></section></div>;
}
