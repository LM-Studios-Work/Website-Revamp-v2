import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ScrollToTop } from "@/components/ScrollToTop";

const DOMAIN = "https://www.lmwebstudios.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "Web Design Johannesburg & Midrand | LM Studios",
    template: "%s | LM Studios",
  },
  description:
    "LM Studios builds affordable, SEO-optimized websites and automated booking systems for South African businesses. Based in Midrand, Gauteng. Get found on Google and start closing more leads.",
  robots: { index: true, follow: true },
  authors: [{ name: "LM Studios" }],
  alternates: { canonical: DOMAIN },
  openGraph: {
    type: "website",
    siteName: "LM Studios",
    url: DOMAIN,
    title: "Web Design Johannesburg & Midrand | LM Studios",
    description:
      "LM Studios builds high-performance, SEO-optimized websites for Johannesburg and Midrand businesses. Based in Midrand, Gauteng. Get found on Google and start closing more leads.",
    images: [{ url: "/lmstudioslogo.png", alt: "LM Studios logo" }],
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Johannesburg & Midrand | LM Studios",
    description:
      "LM Studios builds high-performance, SEO-optimized websites for Johannesburg and Midrand businesses. Based in Midrand, Gauteng. Get found on Google and start closing more leads.",
    images: ["/lmstudioslogo.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LM Studios",
  description:
    "LM Studios builds affordable, SEO-optimized websites and automated booking systems for South African businesses. Based in Midrand, Gauteng.",
  url: DOMAIN,
  logo: `${DOMAIN}/lmstudioslogo.png`,
  image: `${DOMAIN}/lmstudioslogo.png`,
  foundingDate: "2025",
  telephone: "+27814272624",
  email: "lm.studios.web@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Midrand",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
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
  sameAs: ["https://www.instagram.com/lmstudiosweb/"],
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
          href="/lmstudioslogo.png"
          sizes="any"
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
                className="w-full h-full object-cover"
                loading="eager"
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
