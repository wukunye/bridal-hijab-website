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
  en: { home: "Home", bridal: "Bridal", hijab: "Hijab", about: "About", contact: "Contact", explore: "Explore", app: "Luverila App", hijabDesigner: "Hijab Designer", appSupport: "App Support", appPrivacy: "App Privacy", appTerms: "App Terms", comingSoon: "Coming soon", legal: "Website Legal", privacy: "Website Privacy", terms: "Website Terms", language: "Language", footerNote: "Bridal and modest fashion for modern women.", footerTagline: "Designed for a timeless point of view.", fullName: "Full name", company: "Company / Organization", country: "Country", email: "Email", whatsapp: "WhatsApp", interestedProduct: "Interested product", message: "Message", messagePlaceholder: "Tell us how we can help.", sending: "Sending...", sendInquiry: "Send inquiry", inquirySuccess: "Thank you. Your inquiry has been sent and our team will be in touch shortly.", inquiryError: "Unable to send your inquiry. Please email us directly.", emailDirectly: "Email us directly." },
  zh: { home: "首页", bridal: "婚纱", hijab: "头巾", about: "关于我们", contact: "联系我们", explore: "浏览", app: "Luverila 应用", hijabDesigner: "头巾设计器", appSupport: "应用支持", appPrivacy: "应用隐私政策", appTerms: "应用条款", comingSoon: "即将上线", legal: "网站法律信息", privacy: "网站隐私政策", terms: "网站条款", language: "语言", footerNote: "为现代女性打造的婚纱与端庄时尚。", footerTagline: "为历久弥新的审美而设计。", fullName: "姓名", company: "公司 / 机构", country: "国家 / 地区", email: "邮箱", whatsapp: "WhatsApp", interestedProduct: "感兴趣的产品", message: "留言", messagePlaceholder: "告诉我们如何为你提供帮助。", sending: "正在发送...", sendInquiry: "发送询盘", inquirySuccess: "感谢你的咨询。信息已发送，我们的团队将尽快联系你。", inquiryError: "暂时无法发送咨询，请直接发送邮件联系我们。", emailDirectly: "直接发送邮件" },
  es: { home: "Inicio", bridal: "Novias", hijab: "Hiyab", about: "Nosotros", contact: "Contacto", explore: "Explorar", app: "App Luverila", hijabDesigner: "Diseñador de hiyabs", appSupport: "Soporte de la app", appPrivacy: "Privacidad de la app", appTerms: "Términos de la app", comingSoon: "Próximamente", legal: "Información legal", privacy: "Privacidad web", terms: "Términos web", language: "Idioma", footerNote: "Moda nupcial y modesta para la mujer moderna.", footerTagline: "Disenado para una vision atemporal.", fullName: "Nombre completo", company: "Empresa / Organizacion", country: "Pais", email: "Correo electronico", whatsapp: "WhatsApp", interestedProduct: "Producto de interes", message: "Mensaje", messagePlaceholder: "Cuentanos como podemos ayudarte.", sending: "Enviando...", sendInquiry: "Enviar consulta", inquirySuccess: "Gracias. Tu consulta se ha enviado y nuestro equipo se pondra en contacto contigo pronto.", inquiryError: "No se pudo enviar la consulta. Escribenos directamente por correo.", emailDirectly: "Escribenos por correo." },
  ar: { home: "الرئيسية", bridal: "فساتين الزفاف", hijab: "الحجاب", about: "من نحن", contact: "اتصل بنا", explore: "استكشف", app: "تطبيق Luverila", hijabDesigner: "مصمم الحجاب", appSupport: "دعم التطبيق", appPrivacy: "خصوصية التطبيق", appTerms: "شروط التطبيق", comingSoon: "قريباً", legal: "قانوني للموقع", privacy: "خصوصية الموقع", terms: "شروط الموقع", language: "اللغة", footerNote: "أزياء زفاف وأزياء محتشمة للمرأة العصرية.", footerTagline: "مصمم برؤية خالدة.", fullName: "الاسم الكامل", company: "الشركة / المؤسسة", country: "البلد", email: "البريد الإلكتروني", whatsapp: "واتساب", interestedProduct: "المنتج المطلوب", message: "الرسالة", messagePlaceholder: "أخبرينا كيف يمكننا مساعدتك.", sending: "جارٍ الإرسال...", sendInquiry: "إرسال استفسار", inquirySuccess: "شكرا لك. تم إرسال استفسارك وسيتواصل فريقنا معك قريبا.", inquiryError: "تعذر إرسال الاستفسار. يرجى مراسلتنا عبر البريد الإلكتروني مباشرة.", emailDirectly: "راسِلينا مباشرة." }
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
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
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
