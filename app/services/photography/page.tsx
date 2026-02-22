import type { Metadata } from "next";
import { PhotographyPage } from "@/views/PhotographyPage";
import { photographyFAQ } from "@/sections/FAQ/constants";

export const metadata: Metadata = {
  title:
    "Professional Brand Photography South Africa | LM Studios Johannesburg",
  description:
    "On-site brand photography in Johannesburg and Gqeberha (Port Elizabeth). Includes 1–2 hours of professional shooting, expert editing, and high-definition delivery. Travel included. Book your photoshoot with LM Studios today.",
  alternates: {
    canonical: "https://www.lmwebstudios.co.za/services/photography",
  },
  openGraph: {
    title: "Professional Brand Photography South Africa | LM Studios",
    description:
      "On-site brand photography in Johannesburg and Gqeberha. Professional shooting, editing, and HD delivery — all in one package.",
    url: "https://www.lmwebstudios.co.za/services/photography",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Brand Photography",
  description:
    "Professional on-site brand photography including 1–2 hours of shooting, expert editing, and high-definition image delivery. Travel included for Johannesburg and Gqeberha (Port Elizabeth).",
  provider: {
    "@type": "LocalBusiness",
    name: "LM Studios",
    url: "https://www.lmwebstudios.co.za",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Midrand",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
  },
  areaServed: [
    { "@type": "City", name: "Johannesburg" },
    { "@type": "City", name: "Gqeberha" },
  ],
  serviceType: "Photography",
  url: "https://www.lmwebstudios.co.za/services/photography",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: photographyFAQ.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PhotographyPage />
    </>
  );
}
