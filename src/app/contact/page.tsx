import type { Metadata } from "next";
import { getProduct } from "@/data/products";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with our team for product inquiries and collaborations.", alternates: { canonical: "/contact" } };

export default function ContactPage({ searchParams }: { searchParams?: { product?: string } }) {
  const selectedProduct = searchParams?.product ? getProduct(searchParams.product)?.name || searchParams.product : "";
  return <ContactContent selectedProduct={selectedProduct} />;
}
