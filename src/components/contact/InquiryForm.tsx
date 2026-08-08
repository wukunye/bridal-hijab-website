"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { siteConfig } from "@/config/site";

type FormState = "idle" | "loading" | "success" | "error";

export function InquiryForm({ productName = "" }: { productName?: string }) {
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
      if (!response.ok) throw new Error(result.message || "Unable to send your inquiry.");
      setStatus("success");
      setMessage("Thank you. Your inquiry has been sent and our team will be in touch shortly.");
      form.reset();
      setSelectedProduct("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your inquiry. Please email us directly.");
    }
  }

  return <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
    <div className="form-grid">
      <label>Full Name *<input name="fullName" required autoComplete="name" /></label>
      <label>Company / Organization<input name="company" autoComplete="organization" /></label>
      <label>Country *<input name="country" required autoComplete="country-name" /></label>
      <label>Email *<input name="email" type="email" required autoComplete="email" /></label>
      <label>WhatsApp<input name="whatsapp" autoComplete="tel" /></label>
      <label>Interested Product<input name="product" value={selectedProduct} onChange={(event) => setSelectedProduct(event.target.value)} /></label>
    </div>
    <label>Message *<textarea name="message" required rows={6} placeholder="Tell us how we can help." /></label>
    <input type="text" name="botcheck" className="hidden-field" tabIndex={-1} autoComplete="off" />
    <button className="button button-dark" type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Send inquiry"}</button>
    {status === "success" && <p className="form-message success" role="status">{message}</p>}
    {status === "error" && <p className="form-message error" role="alert">{message} <a href={`mailto:${siteConfig.email}`}>Email us directly.</a></p>}
  </form>;
}
