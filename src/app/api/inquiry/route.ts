import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

type InquiryBody = { fullName?: string; company?: string; country?: string; email?: string; whatsapp?: string; product?: string; message?: string; botcheck?: string };

export async function POST(request: Request) {
  const body = await request.json() as InquiryBody;
  if (body.botcheck) return NextResponse.json({ message: "Your inquiry could not be submitted." }, { status: 400 });
  if (!body.fullName || !body.country || !body.email || !body.message) return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  if (!/^\S+@\S+\.\S+$/.test(body.email)) return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return NextResponse.json({ message: "The inquiry form is not configured yet. Please email us directly." }, { status: 503 });
  const payload = { access_key: accessKey, subject: `New inquiry from ${body.fullName}`, from_name: `${siteConfig.name} website`, ...body };
  const response = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
  if (!response.ok) return NextResponse.json({ message: "The inquiry service is temporarily unavailable." }, { status: 502 });
  const result = await response.json() as { success?: boolean; message?: string };
  if (!result.success) return NextResponse.json({ message: result.message || "Unable to send your inquiry." }, { status: 502 });
  return NextResponse.json({ message: "Inquiry sent." });
}
