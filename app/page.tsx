import type { Metadata } from "next";
import { HomePage } from "@/views/HomePage";

export const metadata: Metadata = {
  title: "LM Studios | Affordable Websites for South African Businesses",
  alternates: { canonical: "https://www.lmwebstudios.co.za" },
  openGraph: { url: "https://www.lmwebstudios.co.za" },
};

export default function Page() {
  return <HomePage />;
}
