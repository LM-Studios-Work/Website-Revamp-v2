import type { Metadata } from "next";
import WebDesignMidrandClient from "./client";

export const metadata: Metadata = {
  title: "Website Design Midrand | From R1,999 | LM Web Studios",
  description:
    "Affordable website design in Midrand. We build custom, SEO-optimized websites for businesses in Waterfall, Kyalami, and Halfway House. Get a free quote today.",
  alternates: {
    canonical: "https://www.lmwebstudios.co.za/web-design-midrand",
  },
  openGraph: {
    title: "Website Design Midrand | From R1,999 | LM Web Studios",
    description:
      "Professional web design services in Midrand. Custom websites for businesses in Waterfall, Kyalami, and surrounds.",
    url: "https://www.lmwebstudios.co.za/web-design-midrand",
    type: "website",
  },
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "LM Web Studios",
        image: "https://www.lmwebstudios.co.za/lmstudioslogo.png",
        url: "https://www.lmwebstudios.co.za/web-design-midrand",
        telephone: "", // Add your phone number here if available
        address: {
          "@type": "PostalAddress",
          addressLocality: "Midrand",
          addressRegion: "Gauteng",
          addressCountry: "ZA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "-26.0122",
          longitude: "28.1284",
        },
        areaServed: [
          "Midrand",
          "Waterfall City",
          "Kyalami",
          "Halfway House",
          "Vorna Valley",
          "Blue Hills",
        ],
        priceRange: "R1,999 - R7,499",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How long does a website take to build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For a standard professional business website, our turnaround time is typically 5 to 7 working days. Larger e-commerce projects usually take 10 to 15 working days. We prioritize speed without compromising on quality.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer hosting services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Every website package includes 12 months of free hosting. After the first year, we offer affordable renewal rates to keep your site secure and online.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between a 5-page and 10-page site?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A 5-page site typically covers the essentials: Home, About, Services, Gallery, and Contact. A 10-page site allows for more specific service pages, location-specific landing pages, or detailed case studies, which significantly improves your SEO reach and ability to rank for different keywords.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with businesses outside Midrand?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. While we are based in Midrand and specialize in the local market, we serve clients across Gauteng and South Africa. We use Zoom, WhatsApp, and email to manage projects seamlessly regardless of location.",
            },
          },
          {
            "@type": "Question",
            name: "Is my website going to be mobile-friendly?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We adopt a mobile-first design approach. Your website will look and function perfectly on smartphones, tablets, and desktops, which is crucial for both user experience and Google rankings.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <WebDesignMidrandClient />
    </>
  );
}
