"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/i18n/LanguageProvider";

type FormState = "idle" | "loading" | "success" | "error";

export function InquiryForm({ productName = "" }: { productName?: string }) {
  const { t } = useLanguage();
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(productName);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || t("inquiryError"));
      setStatus("success");
      setMessage(t("inquirySuccess"));
      form.reset();
      setSelectedProduct("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : t("inquiryError"));
    }
  }

  return <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
    <div className="form-grid">
      <label>{t("fullName")} *<input name="fullName" required autoComplete="name" /></label>
      <label>{t("company")}<input name="company" autoComplete="organization" /></label>
      <label>{t("country")} *<input name="country" required autoComplete="country-name" /></label>
      <label>{t("email")} *<input name="email" type="email" required autoComplete="email" /></label>
      <label>{t("whatsapp")}<input name="whatsapp" autoComplete="tel" /></label>
      <label>{t("interestedProduct")}<input name="product" value={selectedProduct} onChange={(event) => setSelectedProduct(event.target.value)} /></label>
    </div>
    <label>{t("message")} *<textarea name="message" required rows={6} placeholder={t("messagePlaceholder")} /></label>
    <input type="text" name="botcheck" className="hidden-field" tabIndex={-1} autoComplete="off" />
    <button className="button button-dark" type="submit" disabled={status === "loading"}>{status === "loading" ? t("sending") : t("sendInquiry")}</button>
    {status === "success" && <p className="form-message success" role="status">{message}</p>}
    {status === "error" && <p className="form-message error" role="alert">{message} <a href={`mailto:${siteConfig.email}`}>{t("emailDirectly")}</a></p>}
  </form>;
}
