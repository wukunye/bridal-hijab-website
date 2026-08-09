"use client";

import { languageOptions, useLanguage } from "./LanguageProvider";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  return <label className="language-switcher">
    <span className="sr-only">{t("language")}</span>
    <select value={language} onChange={(event) => setLanguage(event.target.value as typeof language)} aria-label={t("language")}>
      {languageOptions.map((option) => <option key={option.code} value={option.code}>{option.nativeLabel} · {option.label}</option>)}
    </select>
  </label>;
}
