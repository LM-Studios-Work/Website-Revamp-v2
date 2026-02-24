import type { Metadata } from "next";
import { XclusiveBarberCaseStudy } from "@/views/XclusiveBarberCaseStudy";

const DOMAIN = "https://www.lmwebstudios.co.za";

export const metadata: Metadata = {
  title: "Xclusive Barber Davenport — Website & Booking System Case Study",
  description:
    "See how LM Studios designed a custom barber website with online booking for Xclusive Barber in Davenport, Durban. Mobile-first design, local SEO, and a booking system that fills chairs.",
  alternates: {
    canonical: `${DOMAIN}/projects/xclusive-barber`,
  },
  openGraph: {
    title: "Xclusive Barber Davenport — Website & Booking System | LM Studios",
    description:
      "Custom barber website and booking system for Xclusive Barber in Davenport, Durban. Built by LM Studios with local SEO, mobile-first design, and seamless online appointments.",
    url: `${DOMAIN}/projects/xclusive-barber`,
    images: [
      {
        url: "/preview/v0-barbershop-durban.vercel.app_(laptop).webp",
        width: 1200,
        height: 630,
        alt: "Xclusive Barber website design — barber in Davenport, Durban",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xclusive Barber Davenport — Website & Booking System | LM Studios",
    description:
      "Custom barber website and booking system for Xclusive Barber in Davenport, Durban.",
    images: ["/preview/v0-barbershop-durban.vercel.app_(laptop).webp"],
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Xclusive Barber — Website & Booking System",
  description:
    "Custom website design and online booking system for Xclusive Barber, a barbershop in Davenport, Durban, South Africa.",
  url: `${DOMAIN}/projects/xclusive-barber`,
  image: `${DOMAIN}/preview/v0-barbershop-durban.vercel.app_(laptop).webp`,
  creator: {
    "@type": "Organization",
    name: "LM Studios",
    url: DOMAIN,
  },
  about: {
    "@type": "LocalBusiness",
    name: "Xclusive Barber",
    description:
      "Premium barbershop in Davenport, Durban offering precision haircuts, beard trims, and grooming services.",
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
      name: "Xclusive Barber",
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
