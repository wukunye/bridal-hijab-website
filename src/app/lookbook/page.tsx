import type { Metadata } from "next";
import Image from "next/image";
import { editorialImages } from "@/lib/images";

export const metadata: Metadata = { title: "Lookbook", description: "A visual diary of bridal and modest fashion." };

export default function LookbookPage() { return <div className="shell"><div className="page-intro"><p className="eyebrow">The lookbook</p><h1>Light, texture, movement.</h1><p>A visual diary of bridal and modest dressing, held in soft focus.</p></div><div className="filter-row"><span className="filter-button is-active">ALL</span><span className="filter-button">BRIDAL</span><span className="filter-button">MODEST</span></div><div className="mosaic">{editorialImages.lookbook.map((src, index) => <figure key={src}><Image src={src} alt={`Lookbook image ${index + 1}`} fill sizes="(max-width: 680px) 50vw, 50vw" className="object-cover" /></figure>)}</div></div>; }
