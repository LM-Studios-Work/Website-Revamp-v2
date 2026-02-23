import type { Metadata } from "next";
import { HomePage } from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Web Design Johannesburg & Midrand | LM Studios",
  description:
    "LM Studios builds high-performance, SEO-optimized websites for Johannesburg and Midrand businesses. Based in Midrand, Gauteng. Get found on Google and start closing more leads.",
  alternates: { canonical: "https://www.lmwebstudios.co.za" },
  openGraph: {
    title: "Web Design Johannesburg & Midrand | LM Studios",
    description:
      "LM Studios builds high-performance, SEO-optimized websites for Johannesburg and Midrand businesses. Based in Midrand, Gauteng. Get found on Google and start closing more leads.",
    url: "https://www.lmwebstudios.co.za",
  },
};

export default function Page() {
  return <HomePage />;
}
