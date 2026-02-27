import type { Metadata } from "next";
import { XclusiveBarberCaseStudy } from "@/views/XclusiveBarberCaseStudy";

const DOMAIN = "https://www.lmwebdesign.co.za";

export const metadata: Metadata = {
  title:
    "Custom Web Design Durban — Barber Website & Salon Online Booking System | LMWebDesign",
  description:
    "See how our small business website developers built a custom web design in Durban for Xclusive Barber — replacing mid-haircut phone calls with a 100% automated Next.js booking platform. Sub-second load times, local map pack rankings, and 40%+ more monthly bookings.",
  alternates: {
    canonical: `${DOMAIN}/projects/xclusive-barber`,
  },
  openGraph: {
    title:
      "Custom Web Design Durban — Barber Booking System Case Study | LMWebDesign",
    description:
      "How we built a salon online booking system setup for Xclusive Barber in Davenport, Durban. 100% automated scheduling, sub-second load times, and top 3 local map pack rankings.",
    url: `${DOMAIN}/projects/xclusive-barber`,
    images: [
      {
        url: "/preview/v0-barbershop-durban.vercel.app_(laptop).webp",
        width: 1200,
        height: 630,
        alt: "Custom web design Durban — Xclusive Barber salon online booking system by LMWebDesign small business website developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Web Design Durban — Barber Booking System | LMWebDesign",
    description:
      "Small business website developers replaced mid-haircut phone calls with a 100% automated booking platform for a Durban barber shop.",
    images: ["/preview/v0-barbershop-durban.vercel.app_(laptop).webp"],
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Custom Web Design Durban — Xclusive Barber Website & Salon Online Booking System",
  description:
    "Case study showing how LMWebDesign small business website developers built a custom web design in Durban with a salon online booking system setup for Xclusive Barber in Davenport, eliminating phone disruptions and increasing monthly bookings by 40%+.",
  url: `${DOMAIN}/projects/xclusive-barber`,
  image: `${DOMAIN}/preview/v0-barbershop-durban.vercel.app_(laptop).webp`,
  creator: {
    "@type": "Organization",
    name: "LMWebDesign",
    url: DOMAIN,
    description:
      "Small business website developers specialising in custom web design Durban, salon online booking system setup, and local SEO for service businesses across South Africa.",
  },
  about: {
    "@type": "LocalBusiness",
    name: "Xclusive Barber",
    description:
      "Premium barbershop in Davenport, Durban offering precision haircuts, beard trims, and grooming services with an automated online booking system.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Davenport",
      addressRegion: "KwaZulu-Natal",
      addressCountry: "ZA",
    },
    areaServed: [
      { "@type": "City", name: "Durban" },
      { "@type": "Place", name: "Davenport" },
      { "@type": "Place", name: "Chatsworth" },
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
      name: "Xclusive Barber — Custom Web Design Durban",
      item: `${DOMAIN}/projects/xclusive-barber`,
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
      <XclusiveBarberCaseStudy />
    </>
  );
}
