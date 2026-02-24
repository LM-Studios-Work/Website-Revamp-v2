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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you do keyword research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We don't guess what your customers are searching for; we use advanced data tools to find the exact terms they use. For our Essential package, we focus on high-intent local keywords—terms that indicate a user is ready to hire someone nearby.",
      },
    },
    {
      "@type": "Question",
      name: "How soon can I see SEO results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is a marathon, not a sprint. While some technical fixes can yield quick wins in the first month, substantial ranking improvements typically take 3 to 6 months. We build for long-term stability, avoiding quick hacks that risk penalties later.",
      },
    },
    {
      "@type": "Question",
      name: "Will you optimize existing content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Often, you don't need new pages; you just need your existing pages to work harder. We review your current text to ensure it is readable, keyword-rich, and structured in a way that Google's bots can easily understand.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SEOPage />
    </>
  );
}
