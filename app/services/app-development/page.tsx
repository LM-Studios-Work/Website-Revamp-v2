import type { Metadata } from "next";
import { AppPage } from "@/views/AppPage";

export const metadata: Metadata = {
  title: "Custom Web Applications & Business Systems | LM Studios",
  description:
    "We build secure, scalable web applications tailored to your organization. From booking systems and inventory management to role-based dashboards and workflow automation. Serving South African businesses from R15,000.",
  alternates: {
    canonical: "https://www.lmwebstudios.co.za/services/app-development",
  },
  openGraph: {
    title: "Custom Web Applications & Business Systems | LM Studios",
    description:
      "Secure, scalable web applications for South African organizations. Booking systems, dashboards, workflow automation.",
    url: "https://www.lmwebstudios.co.za/services/app-development",
  },
};

export default function Page() {
  return <AppPage />;
}
