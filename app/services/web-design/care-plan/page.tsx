import type { Metadata } from "next";
import CarePlanClient from "./CarePlanClient";

export const metadata: Metadata = {
  title: "Website Maintenance Plans | Hosting, Security & Updates",
  description:
    "Keep your website fast, secure, and up to date with our monthly care plans. Includes hosting, backups, security patches, SEO monitoring, and content updates. From R199/month. Cancel anytime.",
  alternates: {
    canonical: "https://www.lmwebdesign.co.za/services/web-design/care-plan",
  },
  openGraph: {
    title: "Website Maintenance Plans | Hosting, Security & Updates | LMWebDesign",
    description:
      "Monthly care plans to keep your website fast, secure, and indexed. Hosting, backups, SEO monitoring, and content updates from R199/month.",
    url: "https://www.lmwebdesign.co.za/services/web-design/care-plan",
  },
};

export default function Page() {
  return <CarePlanClient />;
}
