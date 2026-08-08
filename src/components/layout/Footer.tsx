import Link from "next/link";
import Image from "next/image";
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
          <p className="eyebrow">Luverila App</p>
          <Link href="/hijab-designer">Hijab Designer</Link>
          <Link href="/app-support">App Support</Link>
          <Link href="/app-privacy">App Privacy</Link>
          <Link href="/app-terms">App Terms</Link>
        </div>
        <div className="footer-links">
          <p className="eyebrow">Website Legal</p>
          <Link href="/privacy">Website Privacy</Link>
          <Link href="/terms">Website Terms</Link>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.legalName}</span><span>Designed for a timeless point of view.</span></div>
    </footer>
  );
}
