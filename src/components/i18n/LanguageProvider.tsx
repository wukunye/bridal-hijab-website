"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "zh" | "es" | "ar";

export const languageOptions: Array<{ code: Language; label: string; nativeLabel: string }> = [
  { code: "en", label: "English", nativeLabel: "EN" },
  { code: "zh", label: "中文", nativeLabel: "中文" },
  { code: "es", label: "Español", nativeLabel: "ES" },
  { code: "ar", label: "العربية", nativeLabel: "ع" }
];

const translations = {
  en: { home: "Home", bridal: "Bridal", hijab: "Hijab", about: "About", contact: "Contact", explore: "Explore", app: "Luverila App", comingSoon: "Coming soon", legal: "Website Legal", privacy: "Website Privacy", terms: "Website Terms", language: "Language" },
  zh: { home: "首页", bridal: "婚纱", hijab: "头巾", about: "关于我们", contact: "联系我们", explore: "浏览", app: "Luverila 应用", comingSoon: "即将上线", legal: "网站法律信息", privacy: "网站隐私政策", terms: "网站条款", language: "语言" },
  es: { home: "Inicio", bridal: "Novias", hijab: "Hiyab", about: "Nosotros", contact: "Contacto", explore: "Explorar", app: "App Luverila", comingSoon: "Próximamente", legal: "Información legal", privacy: "Privacidad web", terms: "Términos web", language: "Idioma" },
  ar: { home: "الرئيسية", bridal: "فساتين الزفاف", hijab: "الحجاب", about: "من نحن", contact: "اتصل بنا", explore: "استكشف", app: "تطبيق Luverila", comingSoon: "قريباً", legal: "قانوني للموقع", privacy: "خصوصية الموقع", terms: "شروط الموقع", language: "اللغة" }
} as const;

type TranslationKey = keyof typeof translations.en;
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("luveila-language") as Language | null;
    if (saved && languageOptions.some((option) => option.code === saved)) setLanguageState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr";
    document.documentElement.dataset.language = language;
    window.localStorage.setItem("luveila-language", language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage: setLanguageState, t: (key: TranslationKey) => translations[language][key] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
