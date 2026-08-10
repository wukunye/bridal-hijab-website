import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { editorialImages } from "@/lib/images";
import { PageText } from "@/components/i18n/PageText";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the design, development and production partner behind bridal, Muslim fashion, evening gowns, hijabs and veils."
};

export default function AboutPage() {
  return <div className="shell">
    <div className="page-intro">
      <p className="eyebrow"><PageText id="aboutUs" /></p>
      <h1><PageText id="aboutTitle" /></h1>
      <p><PageText id="aboutIntro" /></p>
    </div>

    <section className="about-split pb-32">
      <div className="about-image"><Image src={editorialImages.about} alt="Bride wearing a white bridal gown in an elegant interior" fill sizes="(max-width: 680px) 100vw, 50vw" className="object-cover" /></div>
      <div className="about-copy">
        <p className="eyebrow"><PageText id="whoWeAre" /></p>
        <h2><PageText id="designPurpose" /></h2>
        <p><PageText id="aboutBody1" /></p>
        <p><PageText id="aboutBody2" /></p>
        <p><PageText id="aboutBody3" /></p>
      </div>
    </section>

    <section className="section-cream -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] py-24">
      <div className="shell about-split">
        <div className="about-copy">
          <p className="eyebrow"><PageText id="ourApproach" /></p>
          <h2><PageText id="yourVision" /></h2>
          <p><PageText id="approachBody1" /></p>
          <p><PageText id="approachBody2" /></p>
          <Link className="button button-dark mt-6" href="/contact"><PageText id="startConversation" /> <ArrowUpRight size={14} /></Link>
        </div>
        <div className="about-image"><Image src={editorialImages.dualHijab} alt="Modest fashion styling detail" fill sizes="(max-width: 680px) 100vw, 50vw" className="object-cover" /></div>
      </div>
    </section>

    <section className="section">
      <div className="shell about-copy max-w-3xl">
        <p className="eyebrow"><PageText id="ourStrength" /></p>
        <h2><PageText id="designDevelopmentProduction" /></h2>
        <p className="text-lg"><PageText id="onePartner" /></p>
        <p><PageText id="craftsmanship" /></p>
      </div>
    </section>
  </div>;
}
