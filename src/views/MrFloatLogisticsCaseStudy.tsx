"use client";

import { CaseStudyLayout } from "@/components/templates/CaseStudyLayout";
import { mrFloatData, mrFloatIcons } from "@/data/case-studies/mr-float";

export const MrFloatLogisticsCaseStudy = () => {
  return <CaseStudyLayout data={mrFloatData} icons={mrFloatIcons} />;
};
