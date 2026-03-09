import { NextRequest, NextResponse } from "next/server";
import type { AuditReport, RedFlag } from "@/types/audit";

// Vercel Pro: allow up to 60 s — PSI runs a real Chrome instance and takes 15–30 s
export const maxDuration = 60;

export type { AuditReport, RedFlag };

const PSI_ENDPOINT =
  "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const NOTIFY_EMAIL = "info@lmwebdesign.co.za";

// ─── Minimal Lighthouse types ─────────────────────────────────────────────────

type LighthouseAudit = {
  score: number | null;
  displayValue?: string;
  title?: string;
};

type LighthouseResult = {
  lighthouseResult: {
    categories: {
      performance?: { score: number | null };
      seo?: { score: number | null };
      accessibility?: { score: number | null };
      "best-practices"?: { score: number | null };
    };
    audits: Record<string, LighthouseAudit>;
  };
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toScore(raw: number | null | undefined): number {
  if (raw == null) return 0;
  return Math.round(raw * 100);
}

function getGrade(score: number): AuditReport["grade"] {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 60) return "C";
  if (score >= 45) return "D";
  return "F";
}

function extractRedFlags(audits: Record<string, LighthouseAudit>): RedFlag[] {
  const checks: Array<{
    id: string;
    title: string;
    description: string;
    impact: RedFlag["impact"];
  }> = [
    {
      id: "server-response-time",
      title: "Slow server response time (TTFB)",
      description:
        "Your server is taking too long to respond before sending a single byte. This is the first thing Google measures and it directly penalises your ranking.",
      impact: "critical",
    },
    {
      id: "render-blocking-resources",
      title: "Render-blocking scripts & stylesheets",
      description:
        "Scripts and stylesheets are blocking the browser from displaying your content. Users see a blank white screen while these files download.",
      impact: "critical",
    },
    {
      id: "uses-optimized-images",
      title: "Images not compressed or converted to next-gen formats",
      description:
        "Images are not served in modern formats (WebP / AVIF) or are poorly compressed. This is almost always the single biggest cause of slow mobile load times.",
      impact: "critical",
    },
    {
      id: "document-title",
      title: "Missing or generic page title",
      description:
        "The page title is missing or not keyword-optimised. The <title> tag is one of the most fundamental signals Google uses to rank a page.",
      impact: "critical",
    },
    {
      id: "viewport",
      title: "Mobile viewport not configured",
      description:
        "This page does not declare a mobile viewport. Mobile browsers will render the desktop version, causing a serious user experience and SEO penalty.",
      impact: "critical",
    },
    {
      id: "uses-responsive-images",
      title: "Oversized images served to mobile devices",
      description:
        "Desktop-sized images are being sent to phones. This wastes mobile data and slows the page on the exact connections your customers use most.",
      impact: "high",
    },
    {
      id: "unused-javascript",
      title: "Unused JavaScript is being downloaded",
      description:
        "The browser downloads and parses JavaScript that is never executed. This is extremely common on WordPress and plugin-heavy websites.",
      impact: "high",
    },
    {
      id: "unused-css-rules",
      title: "Unused CSS is being downloaded",
      description:
        "Stylesheets contain large amounts of rules that never apply to this page. Excess stylesheet size blocks rendering and wastes bandwidth.",
      impact: "high",
    },
    {
      id: "meta-description",
      title: "Missing meta description",
      description:
        "This page has no meta description. Google will write its own snippet — which is rarely as compelling as a custom one for click-through rates.",
      impact: "high",
    },
    {
      id: "uses-text-compression",
      title: "Text assets not served with GZIP / Brotli compression",
      description:
        "HTML, CSS, and JavaScript are transferred uncompressed. Enabling compression can reduce transfer sizes by 60–80%.",
      impact: "high",
    },
    {
      id: "bootup-time",
      title: "Excessive JavaScript execution time",
      description:
        "Scripts take too long to parse and execute on the main thread. This freezes the browser and makes the page feel completely unresponsive.",
      impact: "high",
    },
    {
      id: "uses-long-cache-ttl",
      title: "Static assets not being cached",
      description:
        "Images, scripts, and styles have short or missing cache lifetimes. Every returning visitor re-downloads files that haven't changed.",
      impact: "medium",
    },
    {
      id: "font-display",
      title: "Web fonts blocking page render",
      description:
        "Font files are blocking the browser from rendering text. Users see invisible text or a blank area while the custom font downloads.",
      impact: "medium",
    },
    {
      id: "third-party-summary",
      title: "Heavy third-party scripts slowing page load",
      description:
        "Third-party scripts (chat widgets, analytics, social embeds) are adding significant load time outside of your control.",
      impact: "medium",
    },
    {
      id: "efficiently-animate-contents",
      title: "Animations triggering expensive layout recalculations",
      description:
        "CSS animations are causing the browser to recalculate layout on every frame, leading to jank and a poor experience on mid-range phones.",
      impact: "medium",
    },
  ];

  const flags: RedFlag[] = [];
  const order: Record<RedFlag["impact"], number> = {
    critical: 0,
    high: 1,
    medium: 2,
  };

  for (const check of checks) {
    const audit = audits[check.id];
    if (!audit) continue;
    // score null = not applicable; 1 = pass; < 0.9 = failing
    if (audit.score !== null && audit.score < 0.9) {
      flags.push({
        title: check.title,
        description: check.description,
        impact: check.impact,
      });
    }
  }

  flags.sort((a, b) => order[a.impact] - order[b.impact]);
  return flags.slice(0, 8);
}

function parseReport(
  mobileData: LighthouseResult,
  desktopData: LighthouseResult,
  url: string
): AuditReport {
  const mLhr = mobileData.lighthouseResult;
  const dLhr = desktopData.lighthouseResult;

  const mobileScore = toScore(mLhr.categories.performance?.score);
  const desktopScore = toScore(dLhr.categories.performance?.score);
  const seoScore = toScore(mLhr.categories.seo?.score);
  const accessibilityScore = toScore(mLhr.categories.accessibility?.score);
  const bestPracticesScore = toScore(
    mLhr.categories["best-practices"]?.score
  );

  const a = mLhr.audits;

  return {
    url,
    mobileScore,
    desktopScore,
    seoScore,
    accessibilityScore,
    bestPracticesScore,
    grade: getGrade(mobileScore),
    metrics: {
      fcp: a["first-contentful-paint"]?.displayValue ?? "—",
      lcp: a["largest-contentful-paint"]?.displayValue ?? "—",
      tti: a["interactive"]?.displayValue ?? "—",
      tbt: a["total-blocking-time"]?.displayValue ?? "—",
      cls: a["cumulative-layout-shift"]?.displayValue ?? "—",
      speedIndex: a["speed-index"]?.displayValue ?? "—",
      fcpScore: toScore(a["first-contentful-paint"]?.score),
      lcpScore: toScore(a["largest-contentful-paint"]?.score),
      ttiScore: toScore(a["interactive"]?.score),
      tbtScore: toScore(a["total-blocking-time"]?.score),
      clsScore: toScore(a["cumulative-layout-shift"]?.score),
      speedIndexScore: toScore(a["speed-index"]?.score),
    },
    redFlags: extractRedFlags(a),
  };
}

// ─── PSI fetch ────────────────────────────────────────────────────────────────

async function fetchPSI(
  url: string,
  strategy: "mobile" | "desktop"
): Promise<LighthouseResult> {
  const params = new URLSearchParams({ url, strategy });
  ["performance", "seo", "accessibility", "best-practices"].forEach((c) =>
    params.append("category", c)
  );

  const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;
  if (apiKey) params.set("key", apiKey);

  const res = await fetch(`${PSI_ENDPOINT}?${params.toString()}`, {
    signal: AbortSignal.timeout(45_000),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(
      `PageSpeed API error (${strategy}): ${res.status} — ${body.slice(0, 300)}`
    );
  }

  return res.json() as Promise<LighthouseResult>;
}

// ─── Email helpers ────────────────────────────────────────────────────────────

async function sendReportEmail(
  to: string,
  url: string,
  report: AuditReport
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return; // gracefully skip until key is configured

  const gradeColor: Record<AuditReport["grade"], string> = {
    A: "#22c55e",
    B: "#e7fe56",
    C: "#f59e0b",
    D: "#f97316",
    F: "#ef4444",
  };
  const impactColor: Record<RedFlag["impact"], string> = {
    critical: "#ef4444",
    high: "#f97316",
    medium: "#e7fe56",
  };
  const gc = gradeColor[report.grade];

  const categoryRows = (
    [
      ["Mobile Performance", report.mobileScore],
      ["Desktop Performance", report.desktopScore],
      ["SEO", report.seoScore],
      ["Accessibility", report.accessibilityScore],
      ["Best Practices", report.bestPracticesScore],
    ] as [string, number][]
  )
    .map(([label, score]) => {
      const color =
        score >= 90
          ? "#22c55e"
          : score >= 75
          ? "#e7fe56"
          : score >= 60
          ? "#f59e0b"
          : "#ef4444";
      return `
      <div style="margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span style="font-size:13px;color:rgba(255,255,255,0.7);">${label}</span>
          <span style="font-size:13px;font-weight:700;color:${color};">${score}/100</span>
        </div>
        <div style="height:6px;background:rgba(255,255,255,0.07);border-radius:3px;overflow:hidden;">
          <div style="height:100%;width:${score}%;background:${color};border-radius:3px;"></div>
        </div>
      </div>`;
    })
    .join("");

  const flagRows = report.redFlags
    .slice(0, 6)
    .map(
      (f) => `
    <div style="padding:14px 16px;background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.07);border-left:3px solid ${impactColor[f.impact]};border-radius:10px;margin-bottom:10px;">
      <p style="font-size:13px;font-weight:600;color:#ffffff;margin:0 0 4px;">${f.title}</p>
      <p style="font-size:12px;color:rgba(255,255,255,0.5);margin:0;line-height:1.5;">${f.description}</p>
    </div>`
    )
    .join("");

  const ctaPanel =
    report.mobileScore < 75
      ? `<div style="margin-top:20px;padding:16px;background:rgba(231,254,86,0.06);border:1px solid rgba(231,254,86,0.2);border-radius:12px;">
          <p style="color:#e7fe56;font-size:13px;font-weight:600;margin:0;">Your site scored ${report.mobileScore}/100 on mobile speed.</p>
          <p style="color:rgba(255,255,255,0.6);font-size:12px;margin:6px 0 0;">A Next.js rebuild by LMWebDesign typically achieves 90–98/100 on the same test.</p>
        </div>`
      : "";

  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#fff;">
<div style="max-width:600px;margin:0 auto;padding:40px 24px;">
  <p style="color:#e7fe56;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 8px;">LMWebDesign</p>
  <h1 style="font-size:26px;font-weight:700;color:#fff;margin:0 0 6px;line-height:1.2;">Your Website Performance Audit</h1>
  <p style="color:rgba(255,255,255,0.4);font-size:13px;margin:0 0 32px;">${url}</p>

  <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:32px;margin-bottom:24px;text-align:center;">
    <div style="display:inline-flex;align-items:center;justify-content:center;width:90px;height:90px;background:${gc}18;border:3px solid ${gc};border-radius:50%;font-size:42px;font-weight:900;color:${gc};margin-bottom:16px;">${report.grade}</div>
    <p style="font-size:42px;font-weight:900;color:${gc};margin:0 0 4px;">${report.mobileScore}<span style="font-size:18px;color:rgba(255,255,255,0.4)">/100</span></p>
    <p style="color:rgba(255,255,255,0.5);font-size:13px;margin:0;">Mobile Performance Score</p>
    ${ctaPanel}
  </div>

  <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:24px;margin-bottom:24px;">
    <p style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 20px;">Category Breakdown</p>
    ${categoryRows}
  </div>

  ${
    report.redFlags.length > 0
      ? `<p style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 14px;">Issues Found (${report.redFlags.length})</p>
    ${flagRows}`
      : ""
  }

  <div style="background:linear-gradient(135deg,rgba(231,254,86,0.08),rgba(114,245,227,0.05));border:1px solid rgba(231,254,86,0.2);border-radius:20px;padding:32px;text-align:center;margin-top:28px;margin-bottom:32px;">
    <p style="font-size:20px;font-weight:700;color:#fff;margin:0 0 8px;">Ready to fix all of this?</p>
    <p style="font-size:13px;color:rgba(255,255,255,0.6);margin:0 0 24px;line-height:1.6;">We rebuild slow WordPress and template sites in custom Next.js — typically achieving 90–98/100 on the same test.</p>
    <a href="https://www.lmwebdesign.co.za/contact" style="display:inline-block;background:#e7fe56;color:#000;font-weight:700;font-size:13px;letter-spacing:0.05em;text-transform:uppercase;text-decoration:none;padding:14px 32px;border-radius:50px;">Get a Free Quote</a>
  </div>

  <p style="text-align:center;font-size:11px;color:rgba(255,255,255,0.2);margin:0;">LMWebDesign · Midrand, Gauteng · <a href="https://www.lmwebdesign.co.za" style="color:rgba(255,255,255,0.35);text-decoration:none;">lmwebdesign.co.za</a></p>
</div>
</body></html>`;

  await Promise.allSettled([
    // Report to the user
    fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "LMWebDesign Audit <audit@lmwebdesign.co.za>",
        to: [to],
        subject: `Your Website Audit: Grade ${report.grade} — ${report.mobileScore}/100 mobile`,
        html,
      }),
    }),
    // Lead notification to ourselves
    fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "LMWebDesign Audit <audit@lmwebdesign.co.za>",
        to: [NOTIFY_EMAIL],
        subject: `[Audit Lead] ${url} — Grade ${report.grade} (${report.mobileScore}/100 mobile)`,
        html: `
          <p><strong>URL scanned:</strong> ${url}</p>
          <p><strong>User email:</strong> ${to}</p>
          <p><strong>Mobile score:</strong> ${report.mobileScore}/100 — Grade ${report.grade}</p>
          <p><strong>Desktop score:</strong> ${report.desktopScore}/100</p>
          <p><strong>SEO:</strong> ${report.seoScore}/100 &nbsp; <strong>Accessibility:</strong> ${report.accessibilityScore}/100</p>
          <p><strong>Red flags found:</strong> ${report.redFlags.length}</p>
          <ul>${report.redFlags
            .slice(0, 5)
            .map((f) => `<li>[${f.impact.toUpperCase()}] ${f.title}</li>`)
            .join("")}</ul>
        `,
      }),
    }),
  ]);
}

// ─── POST handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const { url: rawUrl, email } = (await req.json()) as {
      url?: string;
      email?: string;
    };

    if (!rawUrl || typeof rawUrl !== "string" || rawUrl.trim() === "") {
      return NextResponse.json(
        { error: "A website URL is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // Normalise URL — add https:// if missing
    let url = rawUrl.trim();
    if (!/^https?:\/\//i.test(url)) url = `https://${url}`;

    try {
      const parsed = new URL(url);
      // Reject localhost / raw IPs
      const host = parsed.hostname;
      if (
        host === "localhost" ||
        host === "127.0.0.1" ||
        /^10\.|^172\.(1[6-9]|2\d|3[01])\.|^192\.168\./.test(host)
      ) {
        return NextResponse.json(
          { error: "Please enter a publicly accessible website URL." },
          { status: 400 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Please enter a valid website URL (e.g. www.yoursite.co.za)." },
        { status: 400 }
      );
    }

    // Run mobile + desktop scans in parallel
    const [mobileData, desktopData] = await Promise.all([
      fetchPSI(url, "mobile"),
      fetchPSI(url, "desktop"),
    ]);

    const report = parseReport(mobileData, desktopData, url);

    // Send emails fire-and-forget — don't block the response
    sendReportEmail(email, url, report).catch(console.error);

    return NextResponse.json(report);
  } catch (err) {
    console.error("[audit] error:", err);
    const message =
      err instanceof Error ? err.message : "An unexpected error occurred.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
