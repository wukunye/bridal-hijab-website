import type { Metadata } from "next";
import { LocalizedAppSupport } from "@/components/app/LocalizedAppSupport";

export const metadata: Metadata = {
  title: "Luverila Hijab Hub Support",
  description: "Help and support information for Luverila Hijab Hub.",
  alternates: { canonical: "/app-support" }
};

export default function AppSupportPage() {
  return <LocalizedAppSupport />;
}
