"use client";

import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { languageOptions, useLanguage } from "./LanguageProvider";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);
  const current = languageOptions.find((option) => option.code === language) || languageOptions[0];

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!switcherRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return <div className="language-switcher" ref={switcherRef}>
    <button className="language-trigger" type="button" aria-expanded={open} aria-haspopup="menu" onClick={() => setOpen((value) => !value)}>
      <Globe2 size={15} strokeWidth={1.5} aria-hidden="true" />
      <span>{current.nativeLabel}</span>
      <ChevronDown className={open ? "is-open" : ""} size={14} strokeWidth={1.5} aria-hidden="true" />
      <span className="sr-only">{t("language")}</span>
    </button>
    {open && <div className="language-menu" role="menu" aria-label={t("language")}>
      <p className="language-menu-label">{t("language")}</p>
      {languageOptions.map((option) => {
        const selected = option.code === language;
        return <button className={`language-option ${selected ? "is-selected" : ""}`} key={option.code} type="button" role="menuitemradio" aria-checked={selected} onClick={() => { setLanguage(option.code); setOpen(false); }}>
          <span className="language-option-copy"><strong>{option.label}</strong><small>{option.nativeLabel}</small></span>
          {selected && <Check size={16} strokeWidth={1.6} aria-hidden="true" />}
        </button>;
      })}
    </div>}
  </div>;
}
