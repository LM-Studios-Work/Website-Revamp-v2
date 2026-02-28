import type { Metadata } from "next";
import { NdilayavhupoTravelsCaseStudy } from "@/views/NdilayavhupoTravelsCaseStudy";

const DOMAIN = "https://www.lmwebdesign.co.za";

export const metadata: Metadata = {
  title:
    "Travel Agency Web Design — Custom Tourism Booking Platform & Local SEO | LMWebDesign",
  description:
    "See how our tour operator website developers built a custom tourism booking platform for Ndilayavhupo Travels in Thohoyandou, Limpopo. 60%+ increase in group trip fill rates, sub-second gallery rendering, and 5x organic local search traffic.",
  alternates: {
    canonical: `${DOMAIN}/projects/ndilayavhupo-travels`,
  },
  openGraph: {
    title:
      "Travel Agency Web Design — Ndilayavhupo Travels Case Study | LMWebDesign",
    description:
      "How tour operator website developers at LMWebDesign built a visually immersive custom tourism booking platform with WhatsApp booking funnels for a Thohoyandou-based travel agency specialising in shared group tours and Limpopo travel packages.",
    url: `${DOMAIN}/projects/ndilayavhupo-travels`,
    images: [
      {
        url: "/preview/www.ndilayavhupo.co.za_(laptop) (2).webp",
        width: 1200,
        height: 630,
        alt: "Travel agency web design — Ndilayavhupo Travels custom tourism booking platform by LMWebDesign tour operator website developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tour Operator Website Developers — Travel Agency Web Design | LMWebDesign",
    description:
      "Custom tourism booking platform for Ndilayavhupo Travels. 60%+ fill rate increase, sub-second galleries, 5x local search traffic.",
    images: ["/preview/www.ndilayavhupo.co.za_(laptop) (2).webp"],
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Travel Agency Web Design — Ndilayavhupo Travels Custom Tourism Booking Platform",
  description:
    "Case study showing how LMWebDesign tour operator website developers built a custom tourism booking platform with WhatsApp booking funnels and local SEO for travel agencies, increasing group trip fill rates by 60%+ and organic local search traffic by 5x for Ndilayavhupo Travels in Thohoyandou, Limpopo.",
  url: `${DOMAIN}/projects/ndilayavhupo-travels`,
  image: `${DOMAIN}/preview/www.ndilayavhupo.co.za_(laptop) (2).webp`,
  creator: {
    "@type": "Organization",
    name: "LMWebDesign",
    url: DOMAIN,
    description:
      "Tour operator website developers specialising in travel agency web design, custom tourism booking platforms, and local SEO for travel agencies across South Africa.",
  },
  about: {
    "@type": "TouristTrip",
    name: "Ndilayavhupo Travels — Shared Group Tours & Limpopo Travel Packages",
    description:
      "Thohoyandou-based travel agency specialising in shared group tours, Limpopo travel packages, and authentic South African travel experiences with an automated WhatsApp booking funnel.",
    touristType: "Group Travellers",
    provider: {
      "@type": "TravelAgency",
      name: "Ndilayavhupo Travels",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Thohoyandou",
        addressRegion: "Limpopo",
        addressCountry: "ZA",
      },
      areaServed: [
        { "@type": "State", name: "Limpopo" },
        { "@type": "Place", name: "Thohoyandou" },
        { "@type": "Place", name: "Venda" },
        { "@type": "Country", name: "South Africa" },
      ],
    },
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
      name: "Ndilayavhupo Travels — Travel Agency Web Design",
      item: `${DOMAIN}/projects/ndilayavhupo-travels`,
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
      <NdilayavhupoTravelsCaseStudy />
    </>
  );
}
