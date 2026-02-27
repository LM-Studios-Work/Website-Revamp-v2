import type { Metadata } from "next";
import { AppPage } from "@/views/AppPage";

export const metadata: Metadata = {
  title: "Custom Web Apps & Booking System Development | LMWebDesign",
  description:
    "Need a custom booking system or automated business web app? We build secure scheduling tools, dashboards, and portals for South African businesses. Packages from R15,000.",
  alternates: {
    canonical: "https://www.lmwebdesign.co.za/services/app-development",
  },
  openGraph: {
    title: "Custom Web Apps & Booking System Development | LMWebDesign",
    description:
      "Need a custom booking system or automated business web app? We build secure scheduling tools, dashboards, and portals for South African businesses. Packages from R15,000.",
    url: "https://www.lmwebdesign.co.za/services/app-development",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you determine project scope and pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project is unique. We start with a discovery call to understand your requirements, then provide a detailed proposal with timeline and cost estimates tailored to your specific needs.",
      },
    },
    {
      "@type": "Question",
      name: "What types of web applications do you build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build booking systems, inventory management, admin dashboards, workflow automation, CRMs, and other custom business tools. Each solution is designed around your operational requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure security and scalability?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We implement role-based authentication, encrypted data storage, secure APIs, and cloud infrastructure that scales with your organization. Security and reliability are built into every system we create.",
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
      <AppPage />
    </>
  );
}
