import type { Metadata } from "next";
import { ServicesPage } from "@/views/ServicesPage";

export const metadata: Metadata = {
  title: "Our Services | Affordable Web Design, E-Commerce & SEO for SA Small Businesses",
  description:
    "Web design from R1,999, e-commerce from R8,999, SEO, and custom booking systems. Once-off pricing, no monthly retainers. Built for South African small businesses in Gauteng and beyond.",
  alternates: { canonical: "https://www.lmwebdesign.co.za/services" },
  openGraph: {
    title: "Our Services | Affordable Web Design, E-Commerce & SEO for SA Small Businesses | LMWebDesign",
    description:
      "Web design from R1,999, e-commerce from R8,999, SEO, and custom booking systems. Once-off pricing for South African small businesses.",
    url: "https://www.lmwebdesign.co.za/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
