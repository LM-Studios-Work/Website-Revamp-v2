import type { Metadata } from "next";
import { AboutPage } from "@/views/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Midrand Web Design Studio | Small Business Specialist",
  description:
    "Meet LMWebDesign, a Midrand-based web design studio specialising in affordable websites for South African small businesses. We build fast, Google-optimised sites that generate leads and grow your business.",
  alternates: { canonical: "https://www.lmwebdesign.co.za/about-us" },
  openGraph: {
    title: "About Us | Midrand Web Design Studio | Small Business Specialist | LMWebDesign",
    description:
      "Midrand-based web design studio specialising in affordable websites for South African small businesses.",
    url: "https://www.lmwebdesign.co.za/about-us",
  },
};

export default function Page() {
  return <AboutPage />;
}
