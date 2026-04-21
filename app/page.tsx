import type { Metadata } from "next";
import { HomePage } from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Affordable Web Design Johannesburg & Midrand | Get Online in 7 Days",
  description:
    "Small business web design specialist in Gauteng. Fast, SEO-optimized websites from R1,999. No retainers, no monthly fees. Get found on Google and start closing more leads today.",
  alternates: { canonical: "https://www.lmwebdesign.co.za" },
  openGraph: {
    title: "Affordable Web Design Johannesburg & Midrand | Get Online in 7 Days | LMWebDesign",
    description:
      "Small business web design specialist in Gauteng. Fast, SEO-optimized websites from R1,999. No retainers, no monthly fees. Get found on Google and start closing more leads today.",
    url: "https://www.lmwebdesign.co.za",
  },
};

export default function Page() {
  return <HomePage />;
}
