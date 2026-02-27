import type { Metadata } from "next";
import { HomePage } from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Web Design South Africa | LMWebDesign",
  description:
    "Midrand-based studio building high-performance, SEO-optimized websites for businesses across South Africa and beyond. Get found on Google and start closing more leads.",
  alternates: { canonical: "https://www.lmwebdesign.co.za" },
  openGraph: {
    title: "Web Design South Africa | LMWebDesign",
    description:
      "Midrand-based studio building high-performance, SEO-optimized websites for businesses across South Africa and beyond. Get found on Google and start closing more leads.",
    url: "https://www.lmwebdesign.co.za",
  },
};

export default function Page() {
  return <HomePage />;
}
