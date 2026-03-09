import type { Metadata } from "next";
import CarePlanClient from "./CarePlanClient";

export const metadata: Metadata = {
  title: "Website Maintenance Plans | Care Plan",
  description:
    "Keep your website secure, fast, and always online with LMWebDesign's monthly care plans. Hosting included. From R199/month. No lock-in contracts. Serving Midrand and Johannesburg.",
  alternates: {
    canonical: "https://www.lmwebdesign.co.za/services/web-design/care-plan",
  },
  openGraph: {
    type: "website",
    siteName: "LMWebDesign",
    url: "https://www.lmwebdesign.co.za/services/web-design/care-plan",
    title: "Website Maintenance Plans | Care Plan | LMWebDesign",
    description:
      "Keep your website secure, fast, and always online with LMWebDesign's monthly care plans. Hosting included. From R199/month. No lock-in contracts.",
    locale: "en_ZA",
  },
};

export default function CarePlanPage() {
  return <CarePlanClient />;
}
