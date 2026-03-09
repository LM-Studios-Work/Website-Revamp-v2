"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  MagnifyingGlass,
  ArrowRight,
  Warning,
  DeviceMobile,
  Desktop,
  Globe,
  ShieldCheck,
  Rocket,
  Check,
  X,
  WhatsappLogo,
  ArrowCounterClockwise,
  Gauge,
  Clock,
  Spinner,
} from "@phosphor-icons/react";
import type { AuditReport, RedFlag } from "@/types/audit";

// ─── Colour helpers ───────────────────────────────────────────────────────────

type Grade = AuditReport["grade"];
type Impact = RedFlag["impact"];

const GRADE_COLOR: Record<Grade, string> = { A: "#22c55e", B: "#e7fe56", C: "#f59e0b", D: "#f97316", F: "#ef4444" };
const GRADE_BG: Record<Grade, string> = { A: "rgba(34,197,94,0.1)", B: "rgba(231,254,86,0.1)", C: "rgba(245,158,11,0.1)", D: "rgba(249,115,22,0.1)", F: "rgba(239,68,68,0.1)" };
const GRADE_LABEL: Record<Grade, string> = { A: "Excellent", B: "Good", C: "Needs Work", D: "Poor", F: "Critical" };
const IMPACT_COLOR: Record<Impact, string> = { critical: "#ef4444", high: "#f97316", medium: "#e7fe56" };
const IMPACT_BG: Record<Impact, string> = { critical: "rgba(239,68,68,0.1)", high: "rgba(249,115,22,0.1)", medium: "rgba(231,254,86,0.08)" };

function scoreColor(score: number): string {
  if (score >= 90) return "#22c55e";
  if (score >= 75) return "#e7fe56";
  if (score >= 60) return "#f59e0b";
  return "#ef4444";
}

function gradeColor(grade: Grade): string { return GRADE_COLOR[grade]; }
function gradeBg(grade: Grade): string { return GRADE_BG[grade]; }
function impactColor(impact: Impact): string { return IMPACT_COLOR[impact]; }
function impactBg(impact: Impact): string { return IMPACT_BG[impact]; }
function gradeLabel(grade: Grade): string { return GRADE_LABEL[grade]; }

// ─── Score ring (SVG) ─────────────────────────────────────────────────────────

function ScoreRing({ score, grade, animated }: { score: number; grade: AuditReport["grade"]; animated: boolean }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - (animated ? score : 0) / 100);
  const color = gradeColor(grade);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="144" height="144" viewBox="0 0 144 144" className="-rotate-90">
        {/* Track */}
        <circle cx="72" cy="72" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="10" />
        {/* Progress */}
        <circle
          cx="72"
          cy="72"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)", filter: `drop-shadow(0 0 8px ${color}60)` }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-4xl font-black leading-none font-obviously" style={{ color }}>{score}</span>
        <span className="text-xs font-semibold text-white/40 mt-0.5 tracking-wide">/100</span>
      </div>
    </div>
  );
}

// ─── Category score bar ───────────────────────────────────────────────────────

function CategoryBar({ label, score, icon: Icon, animated }: {
  label: string;
  score: number;
  icon: React.ComponentType<{ className?: string; weight?: string }>;
  animated: boolean;
}) {
  const color = scoreColor(score);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-3.5 h-3.5 text-white/40" />
          <span className="text-xs text-white/60 font-medium">{label}</span>
        </div>
        <span className="text-sm font-bold tabular-nums" style={{ color }}>{score}</span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: animated ? `${score}%` : "0%",
            background: color,
            transition: "width 1s cubic-bezier(0.4,0,0.2,1) 0.2s",
            boxShadow: `0 0 6px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

// ─── Metric tile ─────────────────────────────────────────────────────────────

function MetricTile({ label, value, score, description }: {
  label: string;
  value: string;
  score: number;
  description: string;
}) {
  const color = scoreColor(score);
  const indicator = score >= 90 ? "good" : score >= 75 ? "ok" : score >= 50 ? "warn" : "bad";

  return (
    <div
      className="rounded-2xl p-4 flex flex-col gap-2 border"
      style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold text-white/35 uppercase tracking-widest">{label}</span>
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ color, background: `${color}18` }}
        >
          {indicator === "good" ? "FAST" : indicator === "ok" ? "OK" : indicator === "warn" ? "SLOW" : "VERY SLOW"}
        </span>
      </div>
      <span className="text-2xl font-black text-white font-obviously leading-none">{value}</span>
      <span className="text-[11px] text-white/35 leading-snug">{description}</span>
    </div>
  );
}

// ─── Red flag card ────────────────────────────────────────────────────────────

function RedFlagCard({ flag, index }: { flag: RedFlag; index: number }) {
  const [open, setOpen] = useState(false);
  const ic = impactColor(flag.impact);
  const bg = impactBg(flag.impact);

  return (
    <div
      className="rounded-2xl border overflow-hidden transition-all duration-200"
      style={{
        borderColor: `${ic}30`,
        background: bg,
        animationDelay: `${index * 60}ms`,
      }}
    >
      <button
        onClick={() => setOpen((v: boolean) => !v)}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <div
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: `${ic}25`, border: `1px solid ${ic}50` }}
        >
          <Warning className="w-3 h-3" style={{ color: ic }} weight="fill" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-white leading-snug">{flag.title}</span>
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shrink-0"
              style={{ color: ic, background: `${ic}18` }}
            >
              {flag.impact}
            </span>
          </div>
        </div>
        <div className={`shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <svg viewBox="0 0 10 6" className="w-2.5 h-2.5 text-white/30 fill-current">
            <path d="M0 0l5 6 5-6z" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="px-4 pb-4">
          <p className="text-sm text-white/55 leading-relaxed pl-9">{flag.description}</p>
        </div>
      )}
    </div>
  );
}

// ─── Loading animation ────────────────────────────────────────────────────────

const STATUS_MESSAGES = [
  "Resolving your domain...",
  "Launching headless Chrome browser...",
  "Running mobile performance scan...",
  "Running desktop performance scan...",
  "Auditing SEO signals...",
  "Analysing accessibility tree...",
  "Compiling your full report...",
];

function LoadingScreen({ url }: { url: string }) {
  const [msgIdx, setMsgIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar: slow advance, never quite reaching 100 until done
    const intervals = [
      [500, 8],
      [2000, 25],
      [4500, 42],
      [8000, 58],
      [12000, 70],
      [17000, 79],
      [22000, 86],
      [27000, 91],
    ] as [number, number][];

    const timers = intervals.map(([delay, pct]) =>
      setTimeout(() => setProgress(pct), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    // Cycle status messages
    const delays = [0, 2500, 6000, 10500, 15000, 19000, 23500];
    const timers = delays.map((delay, i) =>
      setTimeout(() => setMsgIdx(i), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="animate-[fadeInUp_0.5s_ease-out_both]">
      {/* URL pill */}
      <div className="flex items-center gap-2 mb-10">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] max-w-sm overflow-hidden">
          <Globe className="w-3.5 h-3.5 text-[#72f5e3] shrink-0" />
          <span className="text-sm text-white/60 truncate">{url}</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e7fe56]/10 border border-[#e7fe56]/25">
          <div className="w-1.5 h-1.5 rounded-full bg-[#e7fe56] animate-pulse" />
          <span className="text-[11px] font-semibold text-[#e7fe56] uppercase tracking-wider">Scanning</span>
        </div>
      </div>

      {/* Big scan animation */}
      <div className="relative flex items-center justify-center mb-10">
        {/* Pulsing rings */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#72f5e3]/20 animate-ping"
            style={{
              width: `${80 + i * 48}px`,
              height: `${80 + i * 48}px`,
              animationDuration: `${1.5 + i * 0.4}s`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
        <div className="relative w-20 h-20 rounded-full bg-[#72f5e3]/10 border border-[#72f5e3]/30 flex items-center justify-center">
          <Spinner className="w-8 h-8 text-[#72f5e3] animate-spin" />
        </div>
      </div>

      {/* Status message */}
      <div className="text-center mb-10">
        <p className="text-lg font-semibold text-white mb-1 transition-all duration-500">
          {STATUS_MESSAGES[msgIdx]}
        </p>
        <p className="text-sm text-white/40">
          This takes 15–30 seconds — Google runs a real Chrome browser against your site.
        </p>
      </div>

      {/* Progress bar */}
      <div className="max-w-lg mx-auto">
        <div className="flex justify-between mb-2">
          <span className="text-xs text-white/30 font-medium">Progress</span>
          <span className="text-xs font-bold text-white/50">{progress}%</span>
        </div>
        <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#72f5e3] to-[#e7fe56]"
            style={{
              width: `${progress}%`,
              transition: "width 0.8s cubic-bezier(0.4,0,0.2,1)",
              boxShadow: "0 0 12px rgba(114,245,227,0.4)",
            }}
          />
        </div>

        {/* Step checklist */}
        <div className="mt-6 space-y-1.5">
          {STATUS_MESSAGES.slice(0, -1).map((msg, i) => {
            const done = i < msgIdx;
            const active = i === msgIdx;
            return (
              <div key={i} className={`flex items-center gap-2.5 transition-opacity duration-300 ${done || active ? "opacity-100" : "opacity-25"}`}>
                <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-[#72f5e3]/20" : active ? "bg-[#e7fe56]/10" : "bg-white/[0.04]"}`}>
                  {done ? (
                    <Check className="w-2.5 h-2.5 text-[#72f5e3]" weight="bold" />
                  ) : active ? (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e7fe56] animate-pulse" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  )}
                </div>
                <span className={`text-xs ${done ? "text-[#72f5e3]" : active ? "text-white/80" : "text-white/30"}`}>
                  {msg}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Results dashboard ────────────────────────────────────────────────────────

function ResultsDashboard({ report, onReset }: { report: AuditReport; onReset: () => void }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(t);
  }, []);

  const gc = gradeColor(report.grade);
  const flagCount = report.redFlags.length;
  const criticalCount = report.redFlags.filter((f) => f.impact === "critical").length;

  return (
    <div className="animate-[fadeInUp_0.6s_ease-out_both] space-y-6">

      {/* ── Top bar: URL + reset ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#72f5e3] shrink-0" />
          <span className="text-sm text-white/50 font-medium truncate max-w-xs sm:max-w-sm md:max-w-lg">{report.url}</span>
        </div>
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 text-xs font-semibold text-white/40 hover:text-white transition-colors shrink-0"
        >
          <ArrowCounterClockwise className="w-3.5 h-3.5" />
          Scan another site
        </button>
      </div>

      {/* ── Hero: grade + score ring ── */}
      <div
        className="rounded-3xl p-6 md:p-10"
        style={{ background: `linear-gradient(135deg, ${gc}08, rgba(255,255,255,0.02))`, border: `1px solid ${gc}25` }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Score ring */}
          <div className="flex flex-col items-center gap-3 shrink-0">
            <ScoreRing score={report.mobileScore} grade={report.grade} animated={animated} />
            <div
              className="px-5 py-1.5 rounded-full text-sm font-bold"
              style={{ background: gradeBg(report.grade), color: gc, border: `1px solid ${gc}35` }}
            >
              Grade {report.grade} — {gradeLabel(report.grade)}
            </div>
          </div>

          {/* Summary */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-[#e7fe56] text-xs font-bold uppercase tracking-widest mb-3">Audit Complete</p>
            <h2 className="text-2xl md:text-[34px] font-bold font-obviously leading-tight text-white mb-4">
              {report.mobileScore >= 90
                ? "Your site is performing excellently."
                : report.mobileScore >= 75
                ? "Your site is performing well, with some room to improve."
                : report.mobileScore >= 60
                ? "Your site has performance issues that are affecting your ranking."
                : "Your site has serious performance issues hurting your Google ranking."}
            </h2>
            <p className="text-white/55 text-sm leading-relaxed max-w-lg">
              {report.mobileScore < 75
                ? `Your site scored ${report.mobileScore}/100 on mobile speed. A custom Next.js rebuild by LMWebDesign typically achieves 90–98/100 on the same test — which translates directly to higher Google rankings and more conversions.`
                : `Your site scored ${report.mobileScore}/100 on mobile speed — above average. ${flagCount > 0 ? `We still found ${flagCount} technical issue${flagCount > 1 ? "s" : ""} worth addressing.` : "No critical issues detected."}`}
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              {[
                { label: "Issues Found", value: String(flagCount), color: flagCount > 0 ? "#ef4444" : "#22c55e" },
                { label: "Critical", value: String(criticalCount), color: criticalCount > 0 ? "#ef4444" : "#22c55e" },
                { label: "Desktop Score", value: `${report.desktopScore}/100`, color: scoreColor(report.desktopScore) },
              ].map(({ label, value, color }) => (
                <div key={label} className="text-center">
                  <p className="text-xl font-black font-obviously leading-none" style={{ color }}>{value}</p>
                  <p className="text-[11px] text-white/35 mt-0.5 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Category scores ── */}
      <div className="rounded-3xl p-6 md:p-8" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <p className="text-[11px] font-bold text-white/35 uppercase tracking-widest mb-6">Category Breakdown</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CategoryBar label="Mobile Performance" score={report.mobileScore} icon={DeviceMobile} animated={animated} />
          <CategoryBar label="Desktop Performance" score={report.desktopScore} icon={Desktop} animated={animated} />
          <CategoryBar label="SEO" score={report.seoScore} icon={Globe} animated={animated} />
          <CategoryBar label="Accessibility" score={report.accessibilityScore} icon={ShieldCheck} animated={animated} />
          <CategoryBar label="Best Practices" score={report.bestPracticesScore} icon={Rocket} animated={animated} />
        </div>
      </div>

      {/* ── Core web vitals ── */}
      <div>
        <p className="text-[11px] font-bold text-white/35 uppercase tracking-widest mb-4">Core Web Vitals</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <MetricTile label="First Contentful Paint" value={report.metrics.fcp} score={report.metrics.fcpScore} description="Time until first content appears on screen." />
          <MetricTile label="Largest Contentful Paint" value={report.metrics.lcp} score={report.metrics.lcpScore} description="Time until the largest element is visible. Direct Google ranking signal." />
          <MetricTile label="Time to Interactive" value={report.metrics.tti} score={report.metrics.ttiScore} description="Time until the page is fully interactive and responds to clicks." />
          <MetricTile label="Total Blocking Time" value={report.metrics.tbt} score={report.metrics.tbtScore} description="Total time the main thread was blocked from responding to user input." />
          <MetricTile label="Cumulative Layout Shift" value={report.metrics.cls} score={report.metrics.clsScore} description="How much the page layout shifts unexpectedly while loading." />
          <MetricTile label="Speed Index" value={report.metrics.speedIndex} score={report.metrics.speedIndexScore} description="How quickly content is visually displayed during page load." />
        </div>
      </div>

      {/* ── Red flags ── */}
      {report.redFlags.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-[11px] font-bold text-white/35 uppercase tracking-widest">
              Issues Found ({report.redFlags.length})
            </p>
            {criticalCount > 0 && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                {criticalCount} critical
              </span>
            )}
          </div>
          <p className="text-sm text-white/45 mb-4 leading-relaxed">
            Click any issue to see what it means and why it matters.
          </p>
          <div className="space-y-2">
            {report.redFlags.map((flag, i) => (
              <RedFlagCard key={i} flag={flag} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      {report.mobileScore < 90 && (
        <div
          className="rounded-3xl p-7 md:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(231,254,86,0.07), rgba(114,245,227,0.04))",
            border: "1px solid rgba(231,254,86,0.2)",
          }}
        >
          <p className="text-[#e7fe56] text-xs font-bold uppercase tracking-widest mb-3">Next Step</p>
          <h3 className="text-xl md:text-2xl font-bold font-obviously text-white mb-3 leading-snug">
            {report.mobileScore < 50
              ? `Your site scored ${report.mobileScore}/100. Our Next.js builds score 90–98/100 on the same test.`
              : `Ready to push your score from ${report.mobileScore} to 95+?`}
          </h3>
          <p className="text-white/55 text-sm leading-relaxed max-w-lg mb-6">
            We rebuild slow WordPress and template sites in custom Next.js — fixing every issue above.
            Get a free quote in 24 hours with a detailed technical breakdown.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`/contact?audit=${encodeURIComponent(report.url)}&score=${report.mobileScore}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#e7fe56] text-black font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-[#e7fe56]/90 transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/27814272624?text=Hi%2C%20my%20site%20${encodeURIComponent(report.url)}%20scored%20${report.mobileScore}%2F100%20in%20your%20audit.%20I'd%20like%20to%20discuss%20a%20rebuild.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-white/60 border border-white/15 font-semibold text-sm uppercase tracking-widest rounded-xl hover:border-[#25D366]/50 hover:text-[#25D366] hover:bg-[#25D366]/5 transition-colors"
            >
              <WhatsappLogo className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Good score CTA */}
      {report.mobileScore >= 90 && (
        <div
          className="rounded-3xl p-7 md:p-10"
          style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.2)" }}
        >
          <p className="text-[#22c55e] text-xs font-bold uppercase tracking-widest mb-3">Well done</p>
          <h3 className="text-xl font-bold font-obviously text-white mb-3">Your site is technically solid.</h3>
          <p className="text-white/55 text-sm leading-relaxed max-w-lg mb-6">
            Need help with SEO strategy, content, or a refresh of your design? We work with well-built sites too.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#e7fe56] text-black font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-[#e7fe56]/90 transition-colors"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
}

// ─── Input form ───────────────────────────────────────────────────────────────

function AuditForm({ onSubmit }: { onSubmit: (url: string, email: string) => void }) {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const urlRef = useRef<HTMLInputElement>(null);

  useEffect(() => { urlRef.current?.focus(); }, []);

  const urlOk = url.trim().length > 3;
  const emailOk = email.includes("@") && email.includes(".");
  const canSubmit = urlOk && emailOk;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (canSubmit) onSubmit(url.trim(), email.trim());
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="animate-[fadeInUp_0.5s_ease-out_both]">
      <div className="space-y-4">
        {/* URL input */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Globe className="w-4 h-4 text-white/30 group-focus-within:text-[#72f5e3] transition-colors" />
          </div>
          <input
            ref={urlRef}
            type="text"
            value={url}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
            placeholder="www.yoursite.co.za"
            className="w-full bg-white/[0.04] border border-white/[0.1] focus:border-[#72f5e3]/60 focus:bg-white/[0.06] text-white placeholder-white/25 text-base rounded-2xl pl-11 pr-4 py-4 outline-none transition-all duration-200"
            autoComplete="url"
            spellCheck={false}
          />
          {touched && !urlOk && (
            <p className="text-red-400 text-xs mt-1.5 ml-1">Please enter a valid website URL.</p>
          )}
        </div>

        {/* Email input */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <MagnifyingGlass className="w-4 h-4 text-white/30 group-focus-within:text-[#e7fe56] transition-colors" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-white/[0.04] border border-white/[0.1] focus:border-[#e7fe56]/60 focus:bg-white/[0.06] text-white placeholder-white/25 text-base rounded-2xl pl-11 pr-4 py-4 outline-none transition-all duration-200"
            autoComplete="email"
          />
          {touched && !emailOk && (
            <p className="text-red-400 text-xs mt-1.5 ml-1">Please enter a valid email address.</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-[#e7fe56] text-black font-bold text-sm uppercase tracking-widest rounded-2xl hover:bg-[#e7fe56]/90 active:scale-[0.99] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Gauge className="w-4 h-4" weight="fill" />
          Run Free Audit
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Trust signals */}
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {[
          { icon: Clock, text: "Results in ~20 seconds" },
          { icon: Check, text: "100% free, no credit card" },
          { icon: ShieldCheck, text: "Report emailed to you" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-1.5 text-white/30 text-xs">
            <Icon className="w-3.5 h-3.5" />
            {text}
          </div>
        ))}
      </div>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type State =
  | { status: "idle" }
  | { status: "loading"; url: string }
  | { status: "done"; report: AuditReport }
  | { status: "error"; message: string };

export const AuditPage = () => {
  const [state, setState] = useState<State>({ status: "idle" });

  const runAudit = useCallback(async (url: string, email: string) => {
    setState({ status: "loading", url });

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, email }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setState({ status: "error", message: data.error ?? "The audit failed. Please try again." });
        return;
      }

      setState({ status: "done", report: data as AuditReport });
    } catch {
      setState({ status: "error", message: "Could not reach the audit server. Please check your connection and try again." });
    }
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% -10%, rgba(114,245,227,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[860px] w-full mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#72f5e3]/30 bg-[#72f5e3]/5 mb-8 animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
            <Gauge className="w-3.5 h-3.5 text-[#72f5e3]" weight="fill" />
            <span className="text-xs font-bold text-[#72f5e3] uppercase tracking-widest">Free Website Audit</span>
          </div>

          {state.status === "idle" || state.status === "error" ? (
            <>
              <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold font-obviously leading-[1.05] tracking-tight text-white mb-5 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
                Is your website{" "}
                <span className="italic text-outline-15">penalising</span>
                <br />
                your Google ranking?
              </h1>
              <p className="text-lg md:text-xl text-white/55 leading-relaxed mb-10 max-w-xl mx-auto animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
                Enter your URL below. We run a free Google Lighthouse audit and email you a full technical report — speed, SEO, accessibility, and exactly what to fix.
              </p>

              <div className="max-w-lg mx-auto animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
                <AuditForm onSubmit={runAudit} />
              </div>

              {state.status === "error" && (
                <div className="mt-6 max-w-lg mx-auto flex items-start gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/25">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" weight="bold" />
                  <p className="text-sm text-red-300 leading-relaxed">{state.message}</p>
                </div>
              )}

              {/* What we check */}
              <div className="mt-16 animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
                <p className="text-[11px] font-bold text-white/25 uppercase tracking-widest mb-6">What the audit checks</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {[
                    { icon: Gauge, label: "Performance", desc: "Speed scores & Core Web Vitals", color: "#72f5e3" },
                    { icon: Globe, label: "SEO", desc: "On-page signals & crawlability", color: "#e7fe56" },
                    { icon: ShieldCheck, label: "Accessibility", desc: "WCAG compliance checks", color: "#d5bff0" },
                    { icon: Rocket, label: "Best Practices", desc: "Security & modern web standards", color: "#e7fe56" },
                  ].map(({ icon: Icon, label, desc, color }) => (
                    <div
                      key={label}
                      className="rounded-2xl p-4 flex flex-col gap-2"
                      style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center"
                        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                      >
                        <Icon className="w-4 h-4" style={{ color }} weight="fill" />
                      </div>
                      <p className="text-sm font-semibold text-white font-obviously">{label}</p>
                      <p className="text-[11px] text-white/35 leading-snug">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : state.status === "loading" ? (
            <div className="max-w-lg mx-auto py-8">
              <LoadingScreen url={state.url} />
            </div>
          ) : (
            <div className="max-w-3xl mx-auto text-left py-4">
              <ResultsDashboard report={state.report} onReset={() => setState({ status: "idle" })} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};
