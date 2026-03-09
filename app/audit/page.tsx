import type { Metadata } from "next";
import { AuditPage } from "@/views/AuditPage";

export const metadata: Metadata = {
  title: "Free Website Performance & SEO Audit | LMWebDesign",
  description:
    "Is your website penalising your Google ranking? Run a free technical audit powered by Google Lighthouse. Get your speed score, SEO grade, and a full list of issues — delivered to your inbox in under 30 seconds.",
  alternates: { canonical: "https://www.lmwebdesign.co.za/audit" },
  openGraph: {
    title: "Free Website Performance & SEO Audit | LMWebDesign",
    description:
      "Run a free Google Lighthouse audit on your website. Get your speed score, SEO grade, and a full technical report — instantly.",
    url: "https://www.lmwebdesign.co.za/audit",
  },
};

export default function Page() {
  return <AuditPage />;
}
