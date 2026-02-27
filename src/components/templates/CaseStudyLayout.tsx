"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, IconProps } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionWrapper } from "@/components/SectionWrapper";
import React from "react";

export type ProjectHighlight = {
  number: string;
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
};

export type ResultMetric = {
  metric: string;
  label: string;
  description: string;
};

export type TechStack = string[];

export type CaseStudyData = {
  category: string;
  title: React.ReactNode;
  description: string;
  location: string;
  serviceType: string;
  features: string;
  previewImage: {
    src: string;
    alt: string;
  };
  problem: {
    quote: string;
    paragraphs: string[];
  };
  solution: {
    quote: string;
    paragraphs: string[];
  };
  deliverables: {
    description: string;
    highlights: ProjectHighlight[];
  };
  results: {
    description: string;
    metrics: ResultMetric[];
  };
  techStack: TechStack;
  cta: {
    title: React.ReactNode;
    description: string;
  };
};

const STAGGER_4 = [
  "animate-[fadeInUp_0.8s_ease-out_0.2s_both]",
  "animate-[fadeInUp_0.8s_ease-out_0.4s_both]",
  "animate-[fadeInUp_0.8s_ease-out_0.6s_both]",
  "animate-[fadeInUp_0.8s_ease-out_0.8s_both]",
] as const;

export const CaseStudyLayout = ({ data, icons }: { data: CaseStudyData; icons: { [key: string]: React.ComponentType<IconProps> } }) => {
  const { ref: overviewRef, isVisible: overviewVisible } =
    useScrollAnimation(0.15);
  const { ref: highlightsRef, isVisible: highlightsVisible } =
    useScrollAnimation(0.1);
  const { ref: resultsRef, isVisible: resultsVisible } =
    useScrollAnimation(0.15);
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation(0.15);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.15);

  const MapPin = icons.MapPin;
  const ServiceIcon = icons.ServiceIcon;
  const FeatureIcon = icons.FeatureIcon;


  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center pt-40 pb-20 px-6 overflow-hidden">
        <div className="relative z-30 max-w-[900px] w-full text-center animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50 border border-white/20 px-4 py-1.5 rounded-full">
              Case Study
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e7fe56]/80 border border-[#e7fe56]/30 px-4 py-1.5 rounded-full">
              {data.category}
            </span>
          </div>
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.95] tracking-tight text-white mb-6">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[680px] mx-auto mb-10">
            {data.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#e7fe56]/60" />
              {data.location}
            </span>
            <span className="w-px h-4 bg-white/15" />
            <span className="flex items-center gap-2">
              <ServiceIcon className="w-4 h-4 text-[#e7fe56]/60" />
              {data.serviceType}
            </span>
            <span className="w-px h-4 bg-white/15" />
            <span className="flex items-center gap-2">
              <FeatureIcon className="w-4 h-4 text-[#e7fe56]/60" />
              {data.features}
            </span>
          </div>
        </div>
      </section>

      {/* Preview Image */}
      <SectionWrapper className="z-10 !pt-0 !pb-0 md:!pb-0">
        <div className="rounded-2xl overflow-hidden border border-white/10 animate-[fadeInUp_0.8s_ease-out_0.4s_both] shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
          <Image
            src={data.previewImage.src}
            alt={data.previewImage.alt}
            width={1200}
            height={630}
            className="w-full h-auto"
          />
        </div>
      </SectionWrapper>

      {/* Section Label */}
      <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-4">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            01 / Challenge
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>

      {/* Problem + Solution */}
      <section ref={overviewRef} className="relative z-10 pb-20 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
            {/* Problem */}
            <div
              className={`opacity-0 ${
                overviewVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                  : ""
              }`}
            >
              <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-white mb-8">
                The <span className="italic text-outline-2">problem</span>
              </h2>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-[#e7fe56]/50 pl-5 mb-8">
                <p className="text-white/90 text-lg font-medium leading-snug">
                  &ldquo;{data.problem.quote}&rdquo;
                </p>
              </blockquote>

              <div className="space-y-5">
                {data.problem.paragraphs.map((p, i) => (
                  <p key={i} className="text-white/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>

            {/* Solution */}
            <div
              className={`opacity-0 ${
                overviewVisible
                  ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                  : ""
              }`}
            >
              <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-white mb-8">
                The <span className="italic text-outline-2">solution</span>
              </h2>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-[#e7fe56]/50 pl-5 mb-8">
                <p className="text-white/90 text-lg font-medium leading-snug">
                  &ldquo;{data.solution.quote}&rdquo;
                </p>
              </blockquote>

              <div className="space-y-5">
                 {data.solution.paragraphs.map((p, i) => (
                  <p key={i} className="text-white/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Label */}
      <div className="max-w-[1400px] mx-auto px-6 pt-4 pb-4">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            02 / Deliverables
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>

      {/* What We Delivered */}
      <section
        ref={highlightsRef}
        className="relative z-10 py-16 px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-14 opacity-0 ${
              highlightsVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-white mb-4">
              What we{" "}
              <span className="italic text-outline-2">delivered</span>
            </h2>
            <p className="text-base text-white/50 max-w-[540px]">
              {data.deliverables.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {data.deliverables.highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-8 md:p-10 bg-[#0a0a0a] transition-colors duration-300 hover:bg-white/[0.03] opacity-0 ${
                    highlightsVisible ? STAGGER_4[idx] : ""
                  }`}
                >
                  <div className="flex items-start gap-5 mb-5">
                    <span className="text-[11px] font-bold tracking-widest text-[#e7fe56]/50 mt-1 shrink-0">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#e7fe56]/10 border border-[#e7fe56]/15 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#e7fe56]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Label */}
      <div className="max-w-[1400px] mx-auto px-6 pt-4 pb-4">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            03 / Results
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>

      {/* Key Outcomes */}
      <section ref={resultsRef} className="relative z-10 py-16 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-14 opacity-0 ${
              resultsVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-white mb-4">
              Key{" "}
              <span className="italic text-outline-2">outcomes</span>
            </h2>
            <p className="text-base text-white/50 max-w-[540px]">
              {data.results.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.results.metrics.map((item, idx) => (
              <div
                key={item.label}
                className={`rounded-xl p-7 border border-white/10 bg-white/[0.03] flex flex-col gap-3 opacity-0 ${
                  resultsVisible ? STAGGER_4[idx] : ""
                }`}
              >
                <div className="text-[2.8rem] md:text-[3.2rem] font-bold text-[#e7fe56] leading-none tracking-tight">
                  {item.metric}
                </div>
                <div className="text-sm font-semibold text-white">
                  {item.label}
                </div>
                <div className="w-8 h-px bg-white/20" />
                <p className="text-xs text-white/45 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Label */}
      <div className="max-w-[1400px] mx-auto px-6 pt-4 pb-4">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            04 / Technology
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>

      {/* Tech Stack */}
      <section ref={techRef} className="relative z-10 py-16 px-6">
        <div className="max-w-[1400px] w-full mx-auto">
          <div
            className={`mb-10 opacity-0 ${
              techVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-white mb-4">
              Tech <span className="italic text-outline-2">stack</span>
            </h2>
          </div>
          <div
            className={`flex flex-wrap gap-2.5 opacity-0 ${
              techVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
                : ""
            }`}
          >
            {data.techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-white/60 hover:border-[#e7fe56]/30 hover:text-[#e7fe56]/80 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="relative z-10 py-20 md:py-32 px-6">
        <div className="max-w-[800px] w-full mx-auto">
          <div
            className={`opacity-0 ${
              ctaVisible
                ? "animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
                : ""
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6 block">
              Ready to start?
            </span>
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-6">
              {data.cta.title}
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-[560px]">
              {data.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center text-base font-semibold bg-[#e7fe56] text-black pl-8 pr-3 py-3 rounded-full hover:bg-[#e7fe56]/90 hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <span className="ml-3 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center text-base font-semibold text-white/60 hover:text-white border border-white/15 hover:border-white/30 pl-8 pr-3 py-3 rounded-full transition-all duration-300"
              >
                View All Projects
                <span className="ml-3 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
