import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCollectionProducts } from "@/data/products";
import { editorialImages } from "@/lib/images";
import { PageText } from "@/components/i18n/PageText";

export default function HomePage() {
  const bridal = getCollectionProducts("bridal").slice(0, 4);
  const hijab = getCollectionProducts("hijab").slice(0, 4);
  return <>
    <section className="hero">
      <div className="hero-media"><Image src={editorialImages.hero} alt="Bride wearing an embellished modest wedding gown and hijab" fill priority sizes="100vw" className="hero-image" /></div>
      <div className="hero-copy"><p className="hero-kicker"><PageText id="homeKicker" /></p><h1><PageText id="homeTitle" /></h1><p className="hero-subtitle"><PageText id="homeSubtitle" /></p><div className="hero-actions"><Link className="button button-light" href="/bridal"><PageText id="exploreBridal" /></Link><Link className="button button-light" href="/hijab"><PageText id="exploreHijabs" /></Link></div></div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white"><ArrowDownRight size={22} strokeWidth={1} /></div>
    </section>
    <section className="section section-cream"><div className="shell"><SectionHeading eyebrow={<PageText id="wardrobeEyebrow" />} title={<PageText id="wardrobeTitle" />} /><div className="dual-feature"><div className="dual-panel" style={{ backgroundImage: `url(${editorialImages.dualBridal})`, backgroundSize:"cover", backgroundPosition:"center" }}><div className="dual-content"><p className="eyebrow text-white/70"><PageText id="bridalCollection" /></p><h3><PageText id="timelessSilhouettes" /></h3><p><PageText id="bridalPanel" /></p><Link className="button button-light" href="/bridal"><PageText id="exploreBridal" /> <ArrowUpRight size={14} /></Link></div></div><div className="dual-panel" style={{ backgroundImage: `url(${editorialImages.dualHijab})`, backgroundSize:"cover", backgroundPosition:"center" }}><div className="dual-content"><p className="eyebrow text-white/70"><PageText id="modestCollection" /></p><h3><PageText id="everydayGrace" /></h3><p><PageText id="hijabPanel" /></p><Link className="button button-light" href="/hijab"><PageText id="exploreHijabs" /> <ArrowUpRight size={14} /></Link></div></div></div></div></section>
    <section className="section collection-section"><div className="shell"><SectionHeading eyebrow={<PageText id="selectedPieces" />} title={<PageText id="bridalCollection" />} intro={<PageText id="bridalCollectionIntro" />} /><div className="product-grid">{bridal.map((product) => <ProductCard key={product.id} product={product} />)}</div><div className="mt-12"><Link className="button button-ghost" href="/bridal"><PageText id="viewAllBridal" /> <ArrowUpRight size={14} /></Link></div></div></section>
    <section className="section section-cream collection-section"><div className="shell"><SectionHeading eyebrow={<PageText id="modestCollection" />} title={<PageText id="softerStatement" />} intro={<PageText id="hijabCollectionIntro" />} /><div className="product-grid">{hijab.map((product) => <ProductCard key={product.id} product={product} />)}</div><div className="mt-12"><Link className="button button-ghost" href="/hijab"><PageText id="viewAllHijabs" /> <ArrowUpRight size={14} /></Link></div></div></section>
    <section className="section"><div className="shell about-split"><div className="about-image"><Image src={editorialImages.about} alt="Bride wearing a white bridal gown in an elegant interior" fill sizes="(max-width: 680px) 100vw, 50vw" className="object-cover" /></div><div className="about-copy"><SectionHeading eyebrow={<PageText id="aboutEyebrow" />} title={<PageText id="aboutCompany" />} /><p><PageText id="aboutHome1" /></p><p><PageText id="aboutHome2" /></p><p><PageText id="aboutHome3" /></p><Link className="button button-dark mt-6" href="/about"><PageText id="discoverStory" /> <ArrowUpRight size={14} /></Link></div></div></section>
    <section className="cta-band"><div className="shell"><SectionHeading eyebrow={<PageText id="connectEyebrow" />} title={<PageText id="connectTitle" />} intro={<PageText id="connectIntro" />} /><Link className="button button-dark" href="/contact"><PageText id="contactUs" /> <ArrowUpRight size={14} /></Link></div></section>
  </>;
}
