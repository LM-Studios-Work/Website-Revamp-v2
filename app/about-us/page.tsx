import type { Metadata } from "next";
import { AboutPage } from "@/views/AboutPage";

export const metadata: Metadata = {
  title: "About Us | LMWebDesign – Web Design & Custom Web Apps",
  description:
    "Learn about LMWebDesign, a South African web design and custom web application studio based in Midrand, Gauteng. We craft unique, high-performance digital experiences built to grow your business and get you found on Google.",
  alternates: { canonical: "https://www.lmwebdesign.co.za/about-us" },
  openGraph: {
    title: "About Us | LMWebDesign – Web Design & Custom Web Apps",
    description:
      "Learn about LMWebDesign, a South African web design and custom web application studio based in Midrand, Gauteng.",
    url: "https://www.lmwebdesign.co.za/about-us",
  },
};

export default function Page() {
  return <AboutPage />;
}
