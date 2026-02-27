import type { Metadata } from "next";
import { WebDesignPage } from "@/views/WebDesignPage";
import { webDesignFAQ } from "@/sections/FAQ/constants";

export const metadata: Metadata = {
  title:
    "Professional Web Design Midrand | From R1,999 | LMWebDesign",
  description:
    "Affordable, mobile-responsive web design in Midrand, Johannesburg & across South Africa. Once-off packages from R1,999 with free hosting, on-page SEO & a 6-month warranty. No retainers. Get your free quote from LMWebDesign.",
  alternates: {
    canonical: "https://www.lmwebdesign.co.za/services/web-design",
  },
  openGraph: {
    title:
      "Professional Web Design Midrand | From R1,999 | LMWebDesign",
    description:
      "Affordable, mobile-responsive web design in Midrand, Johannesburg & across South Africa. Once-off packages from R1,999.",
    url: "https://www.lmwebdesign.co.za/services/web-design",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: webDesignFAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WebDesignPage />
    </>
  );
}
