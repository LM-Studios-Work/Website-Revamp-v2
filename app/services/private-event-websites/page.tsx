import type { Metadata } from "next";
import { PrivateEventPage } from "@/views/PrivateEventPage";

export const metadata: Metadata = {
  title: "Private Event & Birthday Party Websites South Africa | RSVPs & Ticketing",
  description:
    "Custom event landing pages for milestone birthdays, baby showers, and VIP gatherings. Replace messy WhatsApp groups with automated RSVPs, built-in ticketing via Yoco/PayFast, and fund collection. Gauteng-based.",
  alternates: {
    canonical: "https://www.lmwebdesign.co.za/services/private-event-websites",
  },
  openGraph: {
    title: "Private Event & Birthday Party Websites South Africa | RSVPs & Ticketing | LMWebDesign",
    description:
      "Replace messy WhatsApp groups with a sleek event landing page. Automated RSVPs, ticketing, and fund collection for SA events.",
    url: "https://www.lmwebdesign.co.za/services/private-event-websites",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of events is this suited for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Milestone birthdays (21st, 30th, 50th), baby showers, bridal showers, exclusive dinner parties, VIP gatherings, and any private event where you want a premium, controlled guest experience.",
      },
    },
    {
      "@type": "Question",
      name: "How does the ticketing and fund collection work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We integrate PayFast, Yoco, or Ozow directly into your event page. Guests can purchase tickets or contribute to a collective gift fund via card payment or Instant EFT. All funds go directly to your merchant account.",
      },
    },
    {
      "@type": "Question",
      name: "Can I keep the guest list private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The RSVP system is fully private. Only guests with your link can access the page, and only you can see the submitted guest list in your private dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to the website after the event?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The site can be taken down after the event, or we can update it to serve as a post-event gallery page. The choice is entirely yours.",
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
      <PrivateEventPage />
    </>
  );
}
