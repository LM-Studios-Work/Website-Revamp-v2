import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Web Design Johannesburg — Custom Websites & SEO Services | LM Studios",
  description:
    "Professional web design services in Johannesburg. LM Studios builds fast, SEO-optimized websites for Joburg businesses. Get a quote today.",
  alternates: {
    canonical: "https://www.lmwebstudios.co.za/web-design-johannesburg",
  },
  openGraph: {
    title: "Web Design Johannesburg | LM Studios",
    description:
      "Professional web design services in Johannesburg. LM Studios builds fast, SEO-optimized websites for Joburg businesses.",
    url: "https://www.lmwebstudios.co.za/web-design-johannesburg",
  },
};

export default function Page() {
  return (
    <section className="relative min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight text-white mb-8">
          Web Design Services in{" "}
          <span className="text-[#e7fe56]">Johannesburg</span>
        </h1>

        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
          <p>
            Johannesburg is the economic engine of South Africa, and competition
            for online visibility is fierce. Whether you operate in Sandton,
            Rosebank, Randburg, or anywhere across the greater Joburg area, your
            website is often the first impression a potential customer gets of
            your business. A slow, outdated site means lost leads — and in a
            market this competitive, you cannot afford that.
          </p>
          <p>
            LM Studios designs high-performance, SEO-optimized websites
            specifically for Johannesburg businesses. We combine clean,
            conversion-focused design with technical best practices — fast load
            times, mobile responsiveness, and on-page SEO — so your site ranks
            where it matters. From professional service firms in Sandton to
            e-commerce brands in Braamfontein, we build sites that help you
            stand out from the crowd and turn visitors into paying customers.
          </p>
          <p>
            Based in Midrand, we are perfectly positioned to serve the entire
            Johannesburg metro. We offer in-person consultations, quick
            turnaround times, and ongoing support so your online presence keeps
            pace with your ambitions. If you are ready to invest in a website
            that actually works for your business, get in touch today.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center text-base font-semibold bg-[#e7fe56] text-black pl-8 pr-3 py-3 rounded-full hover:bg-[#e7fe56]/90 hover:scale-105 transition-all duration-300"
          >
            Get a Quote
            <span className="ml-3 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-black -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
