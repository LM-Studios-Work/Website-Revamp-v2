import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CONTACT_DETAILS } from "@/constants/contact";

const DOMAIN = "https://www.lmwebdesign.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "Web Design Midrand & Johannesburg | LMWebDesign",
    template: "%s | LMWebDesign",
  },
  description:
    "LMWebDesign builds affordable, SEO-optimized websites and automated booking systems for South African businesses. Based in Midrand, Gauteng. Get found on Google and start closing more leads.",
  robots: { index: true, follow: true },
  authors: [{ name: "LMWebDesign" }],
  alternates: { canonical: DOMAIN },
  openGraph: {
    type: "website",
    siteName: "LMWebDesign",
    url: DOMAIN,
    title: "Web Design Midrand & Johannesburg | LMWebDesign",
    description:
      "LMWebDesign builds high-performance, SEO-optimized websites for Midrand businesses — also serving Johannesburg and across Gauteng. Based in Midrand. Get found on Google and start closing more leads.",
    images: [{ url: "/lmwebdesignlogo.png", alt: "LMWebDesign logo" }],
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Midrand & Johannesburg | LMWebDesign",
    description:
      "LMWebDesign builds high-performance, SEO-optimized websites for Midrand businesses — also serving Johannesburg and across Gauteng. Based in Midrand. Get found on Google and start closing more leads.",
    images: ["/lmwebdesignlogo.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LMWebDesign",
  description:
    "LMWebDesign builds affordable, SEO-optimized websites and automated booking systems for South African businesses. Based in Midrand, Gauteng.",
  url: DOMAIN,
  logo: `${DOMAIN}/lmwebdesignlogo.png`,
  image: `${DOMAIN}/lmwebdesignlogo.png`,
  foundingDate: "2025",
  telephone: CONTACT_DETAILS.phone.value,
  email: CONTACT_DETAILS.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: CONTACT_DETAILS.address.locality,
    addressRegion: CONTACT_DETAILS.address.region,
    addressCountry: CONTACT_DETAILS.address.countryCode,
  },
  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Design",
          url: `${DOMAIN}/services/web-design`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO",
          url: `${DOMAIN}/services/seo`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Applications",
          url: `${DOMAIN}/services/app-development`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Photography",
          url: `${DOMAIN}/services/web-design#photography`,
        },
      },
    ],
  },
  sameAs: ["https://www.instagram.com/lmwebdesign/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/lmwebdesignlogo.png"
          sizes="any"
        />
        {/* Preconnect only to origins actually used at page load */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Preload the Inter font used by font-display:swap so text renders immediately */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2"
          crossOrigin="anonymous"
        />
        {/* LCP: preload the logo (identified as LCP element by Lighthouse) */}
        <link
          rel="preload"
          as="image"
          href="/lmwebdesignlogo.png"
        />
        {/* Preload the hero background image */}
        <link
          rel="preload"
          as="image"
          href="/background/fallback.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        <ScrollToTop />
        <div className="relative text-white text-base font-light h-full w-full overflow-hidden font-sans">
          <div
            className="relative flex flex-col h-full overflow-x-hidden overflow-y-auto w-full"
            data-scroll-container
          >
            {/* Layer 0: Fallback background image — loads first, always visible */}
            <div
              className="fixed inset-0 pointer-events-none"
              style={{ zIndex: 0 }}
              aria-hidden="true"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/background/fallback.webp"
                alt=""
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* Layer 1: Interactive particles — spans full page */}
            <ParticleBackground />

            <Header />
            <main className="relative z-[2] grow shrink-0 min-h-screen">
              <div>{children}</div>
            </main>
            <Footer />
          </div>
        </div>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VM1K1RLW8J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VM1K1RLW8J');
          `}
        </Script>
      </body>
    </html>
  );
}
