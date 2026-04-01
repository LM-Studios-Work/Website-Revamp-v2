import type { Metadata } from "next";
import { EcommercePage } from "@/views/EcommercePage";

export const metadata: Metadata = {
  title:
    "E-Commerce Setup for Small SA Businesses | Online Store From R8,999",
  description:
    "Custom e-commerce stores for South African small businesses. Yoco, PayFast & Ozow payments, automated courier integration, and WhatsApp cart recovery. Once-off from R8,999 with 6-month warranty. No monthly platform fees.",
  alternates: {
    canonical: "https://www.lmwebdesign.co.za/services/e-commerce",
  },
  openGraph: {
    title:
      "E-Commerce Setup for Small SA Businesses | Online Store From R8,999 | LMWebDesign",
    description:
      "Custom e-commerce stores with local SA payment integration, automated shipping, and WhatsApp cart recovery. From R8,999 with 6-month warranty.",
    url: "https://www.lmwebdesign.co.za/services/e-commerce",
  },
};

export default function Page() {
  return <EcommercePage />;
}
