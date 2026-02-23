import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design Midrand",
  description:
    "Web design company based in Midrand, Gauteng. LM Studios builds affordable, high-performance websites for Midrand and surrounding businesses. Get a quote today.",
  alternates: {
    canonical: "https://www.lmwebstudios.co.za/web-design-midrand",
  },
  openGraph: {
    title: "Web Design Midrand | LM Studios",
    description:
      "Web design company based in Midrand, Gauteng. LM Studios builds affordable, high-performance websites for Midrand and surrounding businesses.",
    url: "https://www.lmwebstudios.co.za/web-design-midrand",
  },
};

export default function Page() {
  return (
    <section className="relative min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight text-white mb-8">
          Web Design Company Based in{" "}
          <span className="text-[#d5bff0]">Midrand</span>
        </h1>

        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
          <p>
            LM Studios is a web design company headquartered in Midrand,
            Gauteng — right in the heart of the Sandton-to-Pretoria corridor.
            We work with businesses in Halfway House, Kyalami, Centurion, and
            across the greater Midrand area to deliver websites that perform as
            hard as you do. Being local means we are available for face-to-face
            meetings, on-site consultations, and the kind of hands-on
            collaboration that remote agencies simply cannot offer.
          </p>
          <p>
            Midrand is one of the fastest-growing commercial hubs in Gauteng,
            and local businesses need an online presence that reflects that
            growth. We build affordable, high-performance websites with
            SEO baked in from day one — fast load speeds, clean code,
            mobile-first design, and content structured to rank on Google. From
            small startups in Carlswald to established firms near Grand Central,
            we tailor every project to fit your goals and budget.
          </p>
          <p>
            Choosing a Midrand-based studio means shorter feedback loops, a
            team that understands your local market, and zero timezone headaches.
            Whether you need a brand-new site or a complete redesign, we are
            here to help you get found online and start converting more leads.
            Let us meet for a coffee and talk about your project.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center text-base font-semibold bg-[#d5bff0] text-black pl-8 pr-3 py-3 rounded-full hover:bg-[#d5bff0]/90 hover:scale-105 transition-all duration-300"
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
