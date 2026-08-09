import type { Metadata } from "next";
import { getProduct } from "@/data/products";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with our team for product inquiries and collaborations." };

export default function ContactPage({ searchParams }: { searchParams?: { product?: string } }) {
  const selectedProduct = searchParams?.product ? getProduct(searchParams.product)?.name || searchParams.product : "";
  const subject = selectedProduct ? `Inquiry about ${selectedProduct}` : "Product inquiry";
  const whatsappText = selectedProduct
    ? `Hello, I'm interested in ${selectedProduct}. I'd like to learn more about this product.`
    : "Hello, I'd like to learn more about your collections.";

  return <ContactContent selectedProduct={selectedProduct} subject={subject} whatsappText={whatsappText} />;
}
