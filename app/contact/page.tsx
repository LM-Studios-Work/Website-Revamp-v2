import type { Metadata } from "next";
import { ContactPage } from "@/views/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote",
  description:
    "Get in touch with LM Studios for a free quote on your web design, SEO, or custom web application project. Based in Midrand, serving South African businesses nationwide.",
  alternates: { canonical: "https://www.lmwebstudios.co.za/contact" },
  openGraph: {
    title: "Contact LM Studios | Get a Free Quote",
    description:
      "Get in touch with LM Studios for a free quote on your web design, SEO, or custom web application project.",
    url: "https://www.lmwebstudios.co.za/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
