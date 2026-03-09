export type RedFlag = {
  title: string;
  description: string;
  impact: "critical" | "high" | "medium";
};

export type AuditReport = {
  url: string;
  mobileScore: number;
  desktopScore: number;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  grade: "A" | "B" | "C" | "D" | "F";
  metrics: {
    fcp: string;
    lcp: string;
    tti: string;
    tbt: string;
    cls: string;
    speedIndex: string;
    fcpScore: number;
    lcpScore: number;
    ttiScore: number;
    tbtScore: number;
    clsScore: number;
    speedIndexScore: number;
  };
  redFlags: RedFlag[];
};
