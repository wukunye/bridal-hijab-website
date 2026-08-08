import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { editorialImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the design, development and production partner behind bridal, Muslim fashion, evening gowns, hijabs and veils."
};

export default function AboutPage() {
  return <div className="shell">
    <div className="page-intro">
      <p className="eyebrow">About us</p>
      <h1>Design with Purpose. Crafted with Care.</h1>
      <p>A trusted creative and manufacturing partner for thoughtful fashion brands and private clients.</p>
    </div>

    <section className="about-split pb-32">
      <div className="about-image"><Image src={editorialImages.about} alt="Editorial portrait from the collection" fill sizes="(max-width: 680px) 100vw, 50vw" className="object-cover" /></div>
      <div className="about-copy">
        <p className="eyebrow">Who we are</p>
        <h2>Design with purpose.</h2>
        <p>We are a boutique fashion design and manufacturing company specializing in bridal gowns, Muslim dresses, evening gowns, hijabs, and veils.</p>
        <p>With a strong passion for elegant design and fine craftsmanship, we work closely with a trusted family-run manufacturing partner with a team of 23 experienced and highly skilled artisans. Their extensive experience in garment making and attention to detail allow us to turn creative ideas into beautifully crafted finished pieces.</p>
        <p>From design concept and fabric selection to pattern making, sampling, customization, and bulk production, we provide a complete design-to-production service under one roof.</p>
      </div>
    </section>

    <section className="section-cream -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] py-24">
      <div className="shell about-split">
        <div className="about-copy">
          <p className="eyebrow">Our approach</p>
          <h2>Built around your vision.</h2>
          <p>We understand that every brand and every client is different. That is why we offer flexible customization and personalized service, working closely with our clients to develop designs that reflect their vision, style, and market needs.</p>
          <p>Our expertise covers everything from timeless bridal gowns and sophisticated evening dresses to elegant Muslim dresses, hijabs, and veils. Whether you are an established brand, a boutique, a designer, or a private client, we are committed to delivering quality garments with careful craftsmanship and reliable production.</p>
          <Link className="button button-dark mt-6" href="/contact">Start a conversation <ArrowUpRight size={14} /></Link>
        </div>
        <div className="about-image"><Image src={editorialImages.dualHijab} alt="Modest fashion styling detail" fill sizes="(max-width: 680px) 100vw, 50vw" className="object-cover" /></div>
      </div>
    </section>

    <section className="section">
      <div className="shell about-copy max-w-3xl">
        <p className="eyebrow">Our strength</p>
        <h2>Design + Development + Production</h2>
        <p className="text-lg">One creative partner from the first idea to the finished garment.</p>
        <p>We believe great fashion is not only about beautiful design — it is about the craftsmanship, details, and people behind every piece.</p>
      </div>
    </section>
  </div>;
}
