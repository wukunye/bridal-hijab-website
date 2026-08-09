import type { ReactNode } from "react";

type SectionHeadingProps = { eyebrow?: ReactNode; title: ReactNode; intro?: ReactNode; align?: "left" | "center" };

export function SectionHeading({ eyebrow, title, intro, align = "left" }: SectionHeadingProps) {
  return <div className={`section-heading ${align === "center" ? "is-centered" : ""}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {intro && <p className="section-intro">{intro}</p>}
  </div>;
}
