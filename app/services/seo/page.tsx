import type { Metadata } from "next";
import { SEOPage } from "@/views/SEOPage";

export const metadata: Metadata = {
  title: "SEO Services South Africa | Search Engine Optimization",
  description:
    "Data-driven SEO strategies for South African businesses. From local visibility to national reach, LM Studios builds the digital foundation that makes you visible exactly when customers are ready to buy.",
  alternates: { canonical: "https://www.lmwebstudios.co.za/services/seo" },
  openGraph: {
    title: "SEO Services South Africa | LM Studios",
    description:
      "Data-driven SEO strategies for South African businesses. Local visibility to national reach.",
    url: "https://www.lmwebstudios.co.za/services/seo",
  },
};

export default function Page() {
  return <SEOPage />;
}
