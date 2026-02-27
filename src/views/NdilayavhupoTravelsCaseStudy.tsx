"use client";

import { CaseStudyLayout } from "@/components/templates/CaseStudyLayout";
import { ndilayavhupoData, ndilayavhupoIcons } from "@/data/case-studies/ndilayavhupo";

export const NdilayavhupoTravelsCaseStudy = () => {
  return <CaseStudyLayout data={ndilayavhupoData} icons={ndilayavhupoIcons} />;
};
