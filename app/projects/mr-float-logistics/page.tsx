import type { Metadata } from "next";
import { MrFloatLogisticsCaseStudy } from "@/views/MrFloatLogisticsCaseStudy";

const DOMAIN = "https://www.lmwebstudios.co.za";

export const metadata: Metadata = {
  title:
    "Logistics Website Developers — Transport Company Web Design & WhatsApp Booking | LM Studios",
  description:
    "See how our logistics website developers built a high-converting transport company web design with custom WhatsApp booking integration for Mr. Float in Zimbabwe. Sub-second load times, 3x daily enquiries, and 6 services unified on one platform.",
  alternates: {
    canonical: `${DOMAIN}/projects/mr-float-logistics`,
  },
  openGraph: {
    title:
      "Transport Company Web Design — Mr. Float Logistics Case Study | LM Studios",
    description:
      "How logistics website developers at LM Studios built a mobile-optimised landing page with custom WhatsApp booking integration for a Zimbabwe transport company offering taxi rides, car hire, airport shuttles, and package deliveries.",
    url: `${DOMAIN}/projects/mr-float-logistics`,
    images: [
      {
        url: "/preview/mrfloatlogistics.com_(laptop) (6).webp",
        width: 1200,
        height: 630,
        alt: "Transport company web design — Mr. Float Logistics WhatsApp booking integration by LM Studios logistics website developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Logistics Website Developers — Transport Company Web Design | LM Studios",
    description:
      "Custom WhatsApp booking integration and transport company web design for Mr. Float in Zimbabwe. 3x daily enquiries, sub-second loads.",
    images: ["/preview/mrfloatlogistics.com_(laptop) (6).webp"],
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Transport Company Web Design — Mr. Float Logistics WhatsApp Booking Platform",
  description:
    "Case study showing how LM Studios logistics website developers built a high-converting transport company web design with custom WhatsApp booking integration for Mr. Float Logistics in Zimbabwe, tripling daily enquiries and unifying six transport services on one platform.",
  url: `${DOMAIN}/projects/mr-float-logistics`,
  image: `${DOMAIN}/preview/mrfloatlogistics.com_(laptop) (6).webp`,
  creator: {
    "@type": "Organization",
    name: "LM Studios",
    url: DOMAIN,
    description:
      "Logistics website developers and small business website specialists building transport company web design with custom WhatsApp booking integration across Africa.",
  },
  about: {
    "@type": "LocalBusiness",
    name: "Mr. Float Logistics",
    description:
      "Zimbabwe-based transport company offering taxi rides, long-distance travel, car hire, airport shuttles, and package deliveries with integrated WhatsApp booking.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZW",
    },
    areaServed: [
      { "@type": "Country", name: "Zimbabwe" },
      { "@type": "City", name: "Harare" },
      { "@type": "City", name: "Bulawayo" },
    ],
    priceRange: "$$",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: DOMAIN,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: `${DOMAIN}/projects`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Mr. Float Logistics — Transport Company Web Design",
      item: `${DOMAIN}/projects/mr-float-logistics`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([caseStudySchema, breadcrumbSchema]),
        }}
      />
      <MrFloatLogisticsCaseStudy />
    </>
  );
}
