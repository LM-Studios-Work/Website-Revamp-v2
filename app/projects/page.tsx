import type { Metadata } from "next";
import { ProjectsPage } from "@/views/ProjectsPage";

export const metadata: Metadata = {
  title: "Our Projects | LM Studios",
  description:
    "Explore LM Studios' portfolio of web design and custom web application projects for South African businesses. See how we've helped clients get found on Google and close more leads.",
  alternates: { canonical: "https://www.lmwebstudios.co.za/projects" },
  openGraph: {
    title: "Our Projects | LM Studios",
    description:
      "Explore LM Studios' portfolio of web design and custom web application projects for South African businesses.",
    url: "https://www.lmwebstudios.co.za/projects",
  },
};

export default function Page() {
  return <ProjectsPage />;
}
