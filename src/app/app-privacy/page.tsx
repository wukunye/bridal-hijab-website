import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "App Privacy Policy",
  description: `Privacy information for the Luverila Hijab Designer app.`
};

export default function AppPrivacyPage() {
  return (
    <div className="shell legal-copy app-support">
      <div className="page-intro">
        <p className="eyebrow">Luverila Hijab Designer</p>
        <h1>App Privacy Policy</h1>
        <p>Last updated: August 8, 2026</p>
      </div>
      <p>Luverila Hijab Designer is operated by {siteConfig.legalName}. This policy explains how information is handled when you use the app’s design, AI visualization and virtual try-on features.</p>
      <h2>Information you choose to use</h2>
      <p>Design projects, exported images and selected portraits are used to provide the features you request. Projects are primarily stored on your device. A portrait is only used for virtual try-on when you select it and provide the required permission.</p>
      <h2>AI processing</h2>
      <p>When you request AI visualization or virtual try-on, the selected design and optional portrait may be processed by an AI service to return the requested visual concept. Do not upload content you are not authorized to use.</p>
      <h2>Your choices</h2>
      <p>You can stop using a feature, delete local projects and remove exported images from Photos or Files. The current release does not require an account.</p>
      <h2>Contact</h2>
      <p>For privacy questions or requests, contact <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
    </div>
  );
}
