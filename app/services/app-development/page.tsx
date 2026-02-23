import type { Metadata } from "next";
import { AppPage } from "@/views/AppPage";

export const metadata: Metadata = {
  title: "Custom Web Apps & Booking System Development | LM Studios",
  description:
    "Need a custom booking system or automated business web app? We build secure scheduling tools, dashboards, and portals for South African businesses. Packages from R15,000.",
  alternates: {
    canonical: "https://www.lmwebstudios.co.za/services/app-development",
  },
  openGraph: {
    title: "Custom Web Apps & Booking System Development | LM Studios",
    description:
      "Need a custom booking system or automated business web app? We build secure scheduling tools, dashboards, and portals for South African businesses. Packages from R15,000.",
    url: "https://www.lmwebstudios.co.za/services/app-development",
  },
};

export default function Page() {
  return <AppPage />;
}
