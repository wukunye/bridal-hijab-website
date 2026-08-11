"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const copy = {
  en: { title: "This page has drifted away.", action: "Return home" },
  zh: { title: "这个页面似乎不存在。", action: "返回首页" },
  es: { title: "Esta página ya no está disponible.", action: "Volver al inicio" },
  ar: { title: "هذه الصفحة غير موجودة.", action: "العودة إلى الرئيسية" }
} as const;

export function LocalizedNotFound() {
  const { language } = useLanguage();
  const text = copy[language];
  return <div className="shell not-found"><div><p className="eyebrow">404</p><h1>{text.title}</h1><Link href="/" className="button button-dark">{text.action}</Link></div></div>;
}
