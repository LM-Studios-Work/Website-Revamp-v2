import type { Metadata } from "next";
import { ServicesPage } from "@/views/ServicesPage";

export const metadata: Metadata = {
  title: "Services | Web Design, SEO & App Development",
  description:
    "LM Studios offers professional web design, SEO services, and custom web application development for South African businesses. Affordable packages with transparent once-off pricing.",
  alternates: { canonical: "https://www.lmwebstudios.co.za/services" },
  openGraph: {
    title: "Services | Web Design, SEO & App Development | LM Studios",
    description:
      "Professional web design, SEO services, and custom web application development for South African businesses.",
    url: "https://www.lmwebstudios.co.za/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
