import type { Metadata } from "next";
import { LocalizedAppDesigner } from "@/components/app/LocalizedAppDesigner";

export const metadata: Metadata = {
  title: "Luverila Hijab Designer",
  description: "Design, visualize, try on and share your dream hijab with Luverila Hijab Designer.",
  alternates: { canonical: "/hijab-designer" }
};

export default function HijabDesignerPage() {
  return <LocalizedAppDesigner />;
}
