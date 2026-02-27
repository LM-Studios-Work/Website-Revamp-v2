"use client";

import { CaseStudyLayout } from "@/components/templates/CaseStudyLayout";
import { xclusiveBarberData, xclusiveBarberIcons } from "@/data/case-studies/xclusive-barber";

export const XclusiveBarberCaseStudy = () => {
  return <CaseStudyLayout data={xclusiveBarberData} icons={xclusiveBarberIcons} />;
};
