"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig } from "@/config/site";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const labels = { "/": t("home"), "/bridal": t("bridal"), "/hijab": t("hijab"), "/about": t("about"), "/contact": t("contact") };

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label={`${siteConfig.name} home`}>
          <Image src="/images/brand/logo-wordmark.png" alt={siteConfig.name} width={700} height={109} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{labels[item.href as keyof typeof labels]}</Link>)}
        </nav>
        <LanguageSwitcher />
        <button className="icon-button mobile-menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={21} strokeWidth={1.5} />}
        </button>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation" className="shell mobile-nav-inner">
          {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{labels[item.href as keyof typeof labels]}</Link>)}
        </nav>
      </div>
    </header>
  );
}
