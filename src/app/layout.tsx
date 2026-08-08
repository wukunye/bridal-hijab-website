import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | Bridal & Modest Fashion`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: { title: `${siteConfig.name} | Bridal & Modest Fashion`, description: siteConfig.description, type: "website", siteName: siteConfig.name }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
