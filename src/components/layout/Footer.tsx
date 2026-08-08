import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { navItems, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="wordmark footer-wordmark" href="/" aria-label={`${siteConfig.name} home`}>
            <Image src="/images/brand/logo-wordmark.png" alt={siteConfig.name} width={700} height={109} />
          </Link>
          <p className="footer-note">Bridal and modest fashion for modern women.</p>
        </div>
        <div className="footer-links">
          <p className="eyebrow">Explore</p>
          {navItems.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div className="footer-links">
          <p className="eyebrow">Follow</p>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a>
          <a href={siteConfig.facebook} target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={13} /></a>
          <a href={siteConfig.pinterest} target="_blank" rel="noreferrer">Pinterest <ArrowUpRight size={13} /></a>
        </div>
        <div className="footer-links">
          <p className="eyebrow">Legal</p>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.legalName}</span><span>Designed for a timeless point of view.</span></div>
    </footer>
  );
}
