import type { Metadata } from "next";
import { HomePage } from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Web Design & Development | LM Studios",
  description:
    "LM Studios builds high-performance, SEO-optimized websites and automated booking systems for businesses everywhere. Get found on Google and start closing more leads.",
  alternates: { canonical: "https://www.lmwebstudios.co.za" },
  openGraph: {
    title: "Web Design & Development | LM Studios",
    description:
      "LM Studios builds high-performance, SEO-optimized websites and automated booking systems for businesses everywhere. Get found on Google and start closing more leads.",
    url: "https://www.lmwebstudios.co.za",
  },
};

export default function Page() {
  return <HomePage />;
}
