import type { Metadata } from "next";
import { BarbershopPage } from "@/views/BarbershopPage";

export const metadata: Metadata = {
  title: "Barbershop Web Design & Booking Systems | LMWebDesign",
  description:
    "Custom websites and automated booking systems for South African barbershops. Eliminate queue walk-outs, no-shows, and WhatsApp chaos with your own branded platform.",
  alternates: { canonical: "https://www.lmwebdesign.co.za/services/barbershop" },
  openGraph: {
    title: "Barbershop Web Design & Booking Systems | LMWebDesign",
    description:
      "Custom websites and automated booking systems for South African barbershops.",
    url: "https://www.lmwebdesign.co.za/services/barbershop",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will I lose my walk-in customers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You maintain full control over your calendar. You can choose to allocate specific chairs or specific hours strictly for walk-ins, while keeping the rest of your schedule reserved for guaranteed, prepaid online bookings.",
      },
    },
    {
      "@type": "Question",
      name: "How do the payment integrations work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We connect the website to your existing Yoco, PayFast, or Ozow merchant account. When a client pays for a booking or product, the money goes directly to your account. We do not touch your funds.",
      },
    },
    {
      "@type": "Question",
      name: "Is the system easy for my staff to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The dashboard is designed to be straightforward. During handover training, we show you and your staff how to check the daily schedule, adjust working hours, and manage availability from any device.",
      },
    },
    {
      "@type": "Question",
      name: "What if I need to change my service prices later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You have full access to a simple dashboard where you can easily update haircut prices, add new services, or change the grooming products you're selling.",
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
      <BarbershopPage />
    </>
  );
}
