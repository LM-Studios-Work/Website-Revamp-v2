import type { Metadata } from "next";
import { WebDesignPage } from "@/views/WebDesignPage";
import { webDesignFAQ } from "@/sections/FAQ/constants";

export const metadata: Metadata = {
  title:
    "Web Design Midrand | Perfect 100 Google Score | From R1,999 | LMWebDesign",
  description:
    "We build lightning-fast, lead-generating websites that score 100/100 on Google PageSpeed. Hand-coded in Next.js. Once-off packages from R1,999. Free hosting, GA4 analytics, WhatsApp funnels & 6-month warranty. Based in Midrand — serving all of South Africa.",
  alternates: {
    canonical: "https://www.lmwebdesign.co.za/services/web-design",
  },
  openGraph: {
    title:
      "Web Design Midrand | Perfect 100 Google Score | From R1,999 | LMWebDesign",
    description:
      "Lightning-fast, lead-generating websites that score 100/100 on Google PageSpeed. Once-off packages from R1,999 with free hosting, analytics setup & 6-month warranty.",
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
