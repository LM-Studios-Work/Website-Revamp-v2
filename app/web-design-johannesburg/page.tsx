import type { Metadata } from "next";
import WebDesignJohannesburgClient from "./client";

export const metadata: Metadata = {
  title: "Custom Web Design Johannesburg | No Retainers | LM Studios",
  description:
    "Professional web design services in Johannesburg. LM Studios builds fast, SEO-optimized websites for Joburg businesses. Get a quote today.",
  alternates: {
    canonical: "https://www.lmwebstudios.co.za/web-design-johannesburg",
  },
  openGraph: {
    title: "Custom Web Design Johannesburg | No Retainers | LM Studios",
    description:
      "Professional web design services in Johannesburg. LM Studios builds fast, SEO-optimized websites for Joburg businesses.",
    url: "https://www.lmwebstudios.co.za/web-design-johannesburg",
  },
};

export default function Page() {
  return <WebDesignJohannesburgClient />;
}
