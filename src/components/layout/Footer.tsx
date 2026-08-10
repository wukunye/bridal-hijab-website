"use client";

import Link from "next/link";
import Image from "next/image";
import { navItems, siteConfig } from "@/config/site";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const labels = { "/": t("home"), "/bridal": t("bridal"), "/hijab": t("hijab"), "/about": t("about"), "/contact": t("contact") };
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="wordmark footer-wordmark" href="/" aria-label={`${siteConfig.name} home`}>
            <Image src="/images/brand/logo-wordmark.png" alt={siteConfig.name} width={700} height={109} />
          </Link>
          <p className="footer-note">{t("footerNote")}</p>
        </div>
        <div className="footer-links">
          <p className="eyebrow">{t("explore")}</p>
          {navItems.slice(1).map((item) => <Link key={item.href} href={item.href}>{labels[item.href as keyof typeof labels]}</Link>)}
        </div>
        <div className="footer-links">
          <p className="eyebrow footer-app-heading"><span>{t("app")}</span><span className="coming-soon">{t("comingSoon")}</span></p>
          <Link href="/hijab-designer">{t("hijabDesigner")}</Link>
          <Link href="/app-support">{t("appSupport")}</Link>
          <Link href="/app-privacy">{t("appPrivacy")}</Link>
          <Link href="/app-terms">{t("appTerms")}</Link>
        </div>
        <div className="footer-links">
          <p className="eyebrow">{t("legal")}</p>
          <Link href="/privacy">{t("privacy")}</Link>
          <Link href="/terms">{t("terms")}</Link>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.legalName}</span><span>{t("footerTagline")}</span></div>
    </footer>
  );
}
