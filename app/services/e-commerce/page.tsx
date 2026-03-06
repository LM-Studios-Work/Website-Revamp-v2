import type { Metadata } from "next";
import { EcommercePage } from "@/views/EcommercePage";

export const metadata: Metadata = {
  title:
    "E-Commerce Web Design South Africa | High-Performance Online Stores | From R8,999 | LMWebDesign",
  description:
    "Custom-built e-commerce stores engineered for performance and conversion. Features local South African payment gateways, automated courier integration, and WhatsApp cart recovery. Once-off packages from R8,999. 6-month warranty included.",
  alternates: {
    canonical: "https://www.lmwebdesign.co.za/services/e-commerce",
  },
  openGraph: {
    title:
      "E-Commerce Web Design South Africa | High-Performance Online Stores | From R8,999 | LMWebDesign",
    description:
      "Custom-built e-commerce stores with local SA payment integration, automated shipping, and WhatsApp cart recovery. From R8,999 with 6-month warranty.",
    url: "https://www.lmwebdesign.co.za/services/e-commerce",
  },
};

export default function Page() {
  return <EcommercePage />;
}
