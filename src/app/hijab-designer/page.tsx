import type { Metadata } from "next";
import { LocalizedAppDesigner } from "@/components/app/LocalizedAppDesigner";

export const metadata: Metadata = {
  title: "Luverila Hijab Hub",
  description: "Design, visualize, try on and share your dream hijab with Luverila Hijab Hub.",
  alternates: { canonical: "/hijab-designer" }
};

export default function HijabDesignerPage() {
  return <LocalizedAppDesigner />;
}
