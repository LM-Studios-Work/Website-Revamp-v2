import type { Metadata } from "next";
import { HomePage } from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Web Design Midrand | LM Studios — Based in Midrand, Gauteng",
  description:
    "LM Studios builds high-performance, SEO-optimized websites for Midrand businesses. Serving Waterfall, Kyalami, Halfway House & Johannesburg. Based in Midrand, Gauteng. Get found on Google and start closing more leads.",
  alternates: { canonical: "https://www.lmwebstudios.co.za" },
  openGraph: {
    title: "Web Design Midrand | LM Studios — Based in Midrand, Gauteng",
    description:
      "LM Studios builds high-performance, SEO-optimized websites for Midrand businesses. Serving Waterfall, Kyalami, Halfway House & Johannesburg. Based in Midrand, Gauteng.",
    url: "https://www.lmwebstudios.co.za",
  },
};

export default function Page() {
  return <HomePage />;
}
