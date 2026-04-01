import type { Metadata } from "next";
import WebDesignJohannesburgClient from "./client";

export const metadata: Metadata = {
  title: "Affordable Web Design Johannesburg | From R1,999 | No Monthly Fees",
  description:
    "Website developers in Johannesburg building fast, SEO-optimized sites for small businesses. Once-off pricing from R1,999, no retainers. Get online and found on Google in 7 days.",
  alternates: {
    canonical: "https://www.lmwebdesign.co.za/web-design-johannesburg",
  },
  openGraph: {
    title: "Affordable Web Design Johannesburg | From R1,999 | No Monthly Fees | LMWebDesign",
    description:
      "Website developers in Johannesburg building fast, SEO-optimized sites for small businesses. Once-off pricing from R1,999.",
    url: "https://www.lmwebdesign.co.za/web-design-johannesburg",
  },
};

export default function Page() {
  return <WebDesignJohannesburgClient />;
}
