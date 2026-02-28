import type { Metadata } from "next";
import { ServicesPage } from "@/views/ServicesPage";

export const metadata: Metadata = {
  title: "Services | Web Design, SEO & App Development",
  description:
    "LMWebDesign offers professional web design, SEO services, and custom web application development for South African businesses. Affordable packages with transparent once-off pricing.",
  alternates: { canonical: "https://www.lmwebdesign.co.za/services" },
  openGraph: {
    title: "Services | Web Design, SEO & App Development | LMWebDesign",
    description:
      "Professional web design, SEO services, and custom web application development for South African businesses.",
    url: "https://www.lmwebdesign.co.za/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
