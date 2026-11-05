import type { Metadata } from "next";
import { LocalizedAppSupport } from "@/components/app/LocalizedAppSupport";

export const metadata: Metadata = {
  title: "HijabHub Support",
  description: "Support, subscriptions, AI credits, account help and troubleshooting for HijabHub.",
  alternates: { canonical: "/app-support" }
};

export default function AppSupportPage() {
  return <LocalizedAppSupport />;
}
