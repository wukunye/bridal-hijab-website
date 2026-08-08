import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap { const pages = ["", "/bridal", "/hijab", "/about", "/lookbook", "/contact", "/hijab-designer", "/app-support", "/app-privacy", "/privacy", "/terms"]; return [...pages.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .7 })), ...products.map((product) => ({ url: `${siteConfig.url}/products/${product.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .6 }))]; }
