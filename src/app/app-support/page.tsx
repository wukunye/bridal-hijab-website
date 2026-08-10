import type { Metadata } from "next";
import { LocalizedAppSupport } from "@/components/app/LocalizedAppSupport";

export const metadata: Metadata = {
  title: "Luverila Hijab Designer Support",
  description: "Help and support information for Luverila Hijab Designer."
};

export default function AppSupportPage() {
  return <LocalizedAppSupport />;
}
