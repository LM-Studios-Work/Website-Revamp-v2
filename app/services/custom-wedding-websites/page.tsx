import type { Metadata } from "next";
import { WeddingPage } from "@/views/WeddingPage";

export const metadata: Metadata = {
  title: "Custom Wedding Websites & Digital Invitations South Africa | LMWebDesign",
  description:
    "Beautiful, custom-coded wedding websites for South African couples. Automated RSVP tracking, interactive maps, seamless gift registries, and instant updates.",
  alternates: {
    canonical: "https://www.lmwebdesign.co.za/services/custom-wedding-websites",
  },
  openGraph: {
    title: "Custom Wedding Websites & Digital Invitations South Africa | LMWebDesign",
    description:
      "Stop chasing RSVPs. Give your guests a seamless digital experience while you focus on enjoying your big day.",
    url: "https://www.lmwebdesign.co.za/services/custom-wedding-websites",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can we keep the website active after the wedding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Many couples keep the site live as a digital memory — especially with the post-wedding photo gallery. We can keep your site active for as long as you'd like.",
      },
    },
    {
      "@type": "Question",
      name: "How does the RSVP system work exactly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each guest receives your website link. They visit the page, fill in their name, confirm attendance, select meal preferences, and submit. The responses are compiled in a clean dashboard that you can export as a spreadsheet for your caterers.",
      },
    },
    {
      "@type": "Question",
      name: "Can we integrate our Yuppiechef or Mr Price Home registry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can embed direct links to any South African retail registry. We can also set up a Yoco or PayFast cash fund where guests can contribute a monetary gift directly on the site.",
      },
    },
    {
      "@type": "Question",
      name: "What if the venue or time changes last minute?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can update any detail — venue address, time, itinerary changes — and every guest who visits the link sees the correct information immediately.",
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
      <WeddingPage />
    </>
  );
}
