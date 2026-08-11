import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getCollectionProducts } from "@/data/products";
import { PageText } from "@/components/i18n/PageText";

export const metadata: Metadata = { title: "Hijab", description: "Contemporary scarves designed for effortless elegance and everyday comfort.", alternates: { canonical: "/hijab" } };

export default function HijabPage() {
  return <div className="shell"><div className="page-intro"><p className="eyebrow"><PageText id="collection" /></p><h1><PageText id="hijabName" /></h1><p><PageText id="hijabIntro" /></p></div><section className="pb-32"><SectionHeading eyebrow={<PageText id="selectedPieces" />} title={<PageText id="hijabPageTitle" />} /><ProductGrid products={getCollectionProducts("hijab")} filters={["ALL", "MODAL", "CHIFFON", "JERSEY", "BRIDAL"]} /></section></div>;
}
