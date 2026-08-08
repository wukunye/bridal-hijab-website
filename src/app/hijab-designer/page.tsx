import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Layers3, Palette, ScanFace, Share2, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Luverila Hijab Designer",
  description: "Design, visualize, try on and share your dream hijab with Luverila Hijab Designer."
};

const features = [
  {
    icon: Palette,
    title: "Create Your Design",
    text: "Draw freely, work with multiple layers, adjust colors and materials, and design front, side and back views."
  },
  {
    icon: Sparkles,
    title: "Visualize with AI",
    text: "Turn your original hijab sketch into a realistic fashion image with fabric texture, folds and natural lighting."
  },
  {
    icon: ScanFace,
    title: "Virtual Try-On",
    text: "Upload an authorized portrait and preview how your design may look when worn. Optional photo enhancement tools help prepare the portrait while identity-protection controls aim to preserve the person’s recognizable appearance."
  },
  {
    icon: Layers3,
    title: "Save and Continue",
    text: "Save editable projects and return to your designs later."
  },
  {
    icon: Share2,
    title: "Share Your Creation",
    text: "Create square, portrait and story-format images for sharing your work."
  }
] as const;

export default function HijabDesignerPage() {
  return (
    <div className="app-page">
      <section className="app-hero">
        <div className="shell app-hero-inner">
          <div className="app-hero-copy">
            <p className="eyebrow">A creative studio by WEINUOKELA</p>
            <h1>Luverila Hijab Designer</h1>
            <p className="app-hero-subtitle">Design, Visualize, Try On and Share Your Dream Hijab</p>
            <p className="app-hero-intro">Luverila Hijab Designer is a creative design application for hijab designers, fashion creators and anyone who wants to explore personalized hijab styles.</p>
            <p className="app-hero-intro">Create your own hijab designs with digital drawing tools, colors, fabrics, patterns and decorative details. Transform your sketches into realistic AI-generated visuals, virtually try your designs on an authorized personal photo, and create beautiful images ready to save or share.</p>
          </div>
          <div className="app-hero-mark" aria-hidden="true"><span>LD</span><small>LUVERILA<br />HIJAB DESIGNER</small></div>
        </div>
      </section>

      <section className="section section-cream app-features" aria-labelledby="app-features-title">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Designed for imagination</p>
            <h2 id="app-features-title">From a first sketch to a look you can share.</h2>
          </div>
          <div className="app-feature-grid">
            {features.map(({ icon: Icon, title, text }, index) => (
              <article className={`app-feature-card app-feature-card-${index + 1}`} key={title}>
                <Icon size={24} strokeWidth={1.25} aria-hidden="true" />
                <p className="eyebrow">0{index + 1}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="app-details">
        <div className="shell app-details-grid">
          <div>
            <p className="eyebrow">Availability</p>
            <h2>Made for iPhone and iPad.</h2>
            <p>Designed for iPhone and iPad. Apple Pencil support is planned for compatible iPad devices.</p>
          </div>
          <div className="app-disclaimer">
            <p className="eyebrow">Please note</p>
            <p>AI-generated and virtual try-on images are visual concepts and may not exactly represent the appearance, fit, color or material of a finished physical product.</p>
          </div>
        </div>
      </section>

      <section className="app-footer-note">
        <div className="shell">
          <p>Luverila Hijab Designer is developed and operated by {siteConfig.legalName}</p>
          <p>For support, please visit our <Link href="/contact">App Support</Link> page <ArrowUpRight size={14} aria-hidden="true" />.</p>
        </div>
      </section>
    </div>
  );
}
