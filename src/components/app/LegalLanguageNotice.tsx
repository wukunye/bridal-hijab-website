"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

const notices = {
  en: "This legal document is currently provided in English. If a translation is made available, it is for convenience only; the English version remains the governing text until a reviewed localized version is published.",
  zh: "本法律文件目前仅提供英文版本。如提供翻译，该翻译仅供阅读参考；在经过审核的本地语言版本正式发布前，以英文版本为准。",
  es: "Este documento legal se ofrece actualmente en ingles. Si se proporciona una traduccion, sera solo para facilitar la lectura; la version en ingles seguira siendo el texto aplicable hasta que se publique una version localizada revisada.",
  ar: "يتوفر هذا المستند القانوني حاليا باللغة الإنجليزية. وإذا توفرت ترجمة فهي للقراءة فقط، وتظل النسخة الإنجليزية هي النص الحاكم إلى أن تنشر نسخة محلية مراجعة."
} as const;

export function LegalLanguageNotice() {
  const { language } = useLanguage();
  return <aside className="legal-language-notice" aria-label="Legal language notice">{notices[language]}</aside>;
}
