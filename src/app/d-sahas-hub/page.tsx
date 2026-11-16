import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  Compass,
  HeartPulse,
  Apple,
  Sparkles,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { venturesData } from "@/config/ventures";
import { Highlight } from "@/components/ui/hero-highlight";

export const metadata = {
  title: "D SAHAS Hub — Connecting Minds, Creating an Impact",
  description:
    "Explore D SAHAS Hub, the multi-venture business umbrella founded by Dr. P. V. Devi Seshadri encompassing DeeSkill (Leadership), LiveEase (Wellness), and Dhee Foods (Traditional Nutrition).",
};

export default function DSAHASHUBPage() {
  const deeskill = venturesData.find((v) => v.id === "deeskill") || venturesData[0];
  const liveease = venturesData.find((v) => v.id === "liveease") || venturesData[1];
  const dheefoods = venturesData.find((v) => v.id === "dheefoods") || venturesData[2];

  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-16 sm:space-y-24 bg-[#F8F6F2] overflow-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO HEADER (MATCHING REFERENCE TOP: BOLD DISPLAY + SUBTITLE)
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-light text-gray-950 tracking-tight leading-[1.15]">
            Connecting Minds, Creating{" "}
            <Highlight>
              Impact.
            </Highlight>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Founded by <strong className="font-medium text-gray-950">Dr. P. V. Devi Seshadri</strong>, D SAHAS Hub unifies executive leadership mastery, holistic life-balancing wellness, and traditional wholesome nutrition into a synchronized architecture.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: HUMAN-CRAFTED CLASSIC EDITORIAL HERO BENTO
          Magazine-style asymmetric layout: edge-to-edge photo matting, authentic quote, connected verticals bar, no AI slop clichés
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="rounded-[36px] sm:rounded-[48px] bg-white border border-[#E5E0D6] shadow-[0_20px_60px_-15px_rgba(7,19,31,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left 5 Cols: Cutout on Clean White Background (No room background) */}
            <div className="lg:col-span-5 relative min-h-[360px] sm:min-h-[460px] lg:min-h-full bg-white flex items-end justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-[#EAE5DC]">
              {/* Top Text (Clean Typography, No background container) */}
              <div className="absolute top-6 left-6 right-6 z-10 space-y-0.5">
                <p className="text-sm font-semibold tracking-tight text-gray-950 font-display">
                  Dr. P. V. Devi Seshadri
                </p>
                <p className="text-xs text-gray-500 font-normal">
                  Founder, D SAHAS Hub • BYST Senior Mentor
                </p>
              </div>

              <Image
                src="/images/client/person/devi-strategy-2-cutout.png"
                alt="Dr. P. V. Devi Seshadri - Founder & Visionary"
                fill
                className="object-contain object-bottom filter contrast-[1.03]"
                priority
              />
            </div>

            {/* Right 7 Cols: Classic Editorial Typography & Connected Architecture */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              
              <div className="space-y-5">
                {/* Clean Category Kicker Text */}
                <div>
                  <span className="kicker-text">
                    D SAHAS Hub Architecture
                  </span>
                </div>

                {/* Editorial Headline with Brand Crimson Accent */}
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-normal text-gray-950 tracking-tight leading-[1.18]">
                  Why True Leadership Success Demands a <span className="font-normal text-brand-crimson">Complete Ecosystem.</span>
                </h2>

                {/* Narrative Paragraphs */}
                <div className="space-y-3.5 text-base sm:text-[17px] text-gray-600 font-normal leading-relaxed">
                  <p>
                    Genuine commercial impact cannot exist in silos. For leaders to operate at peak tactical efficacy, their minds must be composed under pressure, their decision frameworks must be deliberate, and their physical vitality must be sustained by natural wholesome fuel.
                  </p>
                  <p className="text-sm sm:text-base text-gray-500">
                    D SAHAS Hub synchronizes three specialized initiatives — bridging high-stakes executive consulting, holistic stress neutralization, and traditional culinary wellness into one enduring foundation.
                  </p>
                </div>
              </div>

              {/* 3 Connected Pillars Interactive Strip (Clickable Direct Anchors) */}
              <div className="pt-6 border-t border-gray-100 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href="#deeskill"
                    className="p-3.5 rounded-2xl bg-white border border-brand-crimson/30 hover:border-brand-crimson hover:shadow-md transition-all group block"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-crimson block mb-0.5 group-hover:translate-x-0.5 transition-transform">
                      Vertical 01 →
                    </span>
                    <p className="text-sm font-semibold text-gray-900">DeeSkill</p>
                    <p className="text-[11px] text-gray-500">Tactical Leadership</p>
                  </a>
                  <a
                    href="#liveease"
                    className="p-3.5 rounded-2xl bg-white border border-brand-crimson/30 hover:border-brand-crimson hover:shadow-md transition-all group block"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-crimson block mb-0.5 group-hover:translate-x-0.5 transition-transform">
                      Vertical 02 →
                    </span>
                    <p className="text-sm font-semibold text-gray-900">LiveEase</p>
                    <p className="text-[11px] text-gray-500">Wellness & Balance</p>
                  </a>
                  <a
                    href="#dheefoods"
                    className="p-3.5 rounded-2xl bg-white border border-brand-crimson/30 hover:border-brand-crimson hover:shadow-md transition-all group block"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-crimson block mb-0.5 group-hover:translate-x-0.5 transition-transform">
                      Vertical 03 →
                    </span>
                    <p className="text-sm font-semibold text-gray-900">Dhee Foods</p>
                    <p className="text-[11px] text-gray-500">Traditional Nutrition</p>
                  </a>
                </div>

                {/* Classic Editorial Action Link */}
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href="#ventures-grid"
                    className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-950 hover:text-brand-crimson transition-colors"
                  >
                    <span>Explore All 3 Verticals In Detail</span>
                    <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: 3-COLUMN VERTICAL BENTO CARDS (MATCHING REFERENCE BOTTOM 3 CARDS)
          In reference: 3 equal cards with Floating Rounded Images on top, Category badge, Title, Subtitle
          ========================================================================= */}
      <section id="ventures-grid" className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8 scroll-mt-28">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-2xl">
            <div>
              <span className="kicker-text-crimson">
                The 3 Pillar Initiatives
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-light text-gray-950 tracking-tight leading-[1.2]">
              Explore Our Distinct Hub Verticals
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Each initiative operates with dedicated methodologies, tailored deliverables, and specialized client engagements.
            </p>
          </div>
        </div>

        {/* 3-Card Grid Matching Reference Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* CARD 1: DEESKILL (LEADERSHIP) */}
          <div className="group rounded-[32px] bg-white border border-[#E3DFD7] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
            <div>
              {/* Floating Top Image with Rounded Corners & Subtle Top-Right Category Pill (Exact Reference) */}
              <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden mb-5 bg-[#FAF8F5] border border-gray-100">
                <Image
                  src="/images/client/person/deeskill-bg.jpg"
                  alt="DeeSkill Leadership"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating Top-Right Category Tag */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/80 text-[10px] font-semibold text-gray-900 tracking-wide shadow-xs">
                  Leadership
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display text-2xl font-normal text-gray-950 tracking-tight leading-snug mb-2 group-hover:text-brand-crimson transition-colors">
                {deeskill.name}
              </h3>
              <p className="text-xs font-semibold text-brand-orange uppercase tracking-wider mb-3">
                {deeskill.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed font-normal mb-6 line-clamp-3">
                {deeskill.description}
              </p>
            </div>

            {/* Bottom Highlights & Website Link */}
            <div className="pt-4 border-t border-gray-100 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {deeskill.highlights.slice(0, 2).map((item, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white border border-gray-300 text-[11px] text-gray-700 font-medium shadow-2xs">
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={deeskill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-crimson hover:text-brand-orange transition-colors"
              >
                <span>Visit Official DeeSkill Website</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* CARD 2: LIVEEASE (WELLNESS & BALANCE) */}
          <div className="group rounded-[32px] bg-white border border-[#E3DFD7] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
            <div>
              {/* Floating Top Image with Rounded Corners & Category Tag */}
              <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden mb-5 bg-[#FAF8F5] border border-gray-100">
                <Image
                  src="/images/client/person/liveease-bg.jpg"
                  alt="LiveEase Wellness"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating Top-Right Category Tag */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/80 text-[10px] font-semibold text-gray-900 tracking-wide shadow-xs">
                  Wellness
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display text-2xl font-normal text-gray-950 tracking-tight leading-snug mb-2 group-hover:text-brand-navy transition-colors">
                {liveease.name}
              </h3>
              <p className="text-xs font-semibold text-brand-navy uppercase tracking-wider mb-3">
                {liveease.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed font-normal mb-6 line-clamp-3">
                {liveease.description}
              </p>
            </div>

            {/* Bottom Highlights & Website Link */}
            <div className="pt-4 border-t border-gray-100 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {liveease.highlights.slice(0, 2).map((item, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white border border-gray-300 text-[11px] text-gray-700 font-medium shadow-2xs">
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={liveease.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#004A7F] hover:text-brand-orange transition-colors"
              >
                <span>Visit Official LiveEase Website</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* CARD 3: DHEE FOODS (TRADITIONAL NUTRITION) */}
          <div className="group rounded-[32px] bg-white border border-[#E3DFD7] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
            <div>
              {/* Floating Top Image with Rounded Corners & Category Tag */}
              <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden mb-5 bg-[#FAF8F5] border border-gray-100">
                <Image
                  src="/images/client/person/dheefoods-bg.jpg"
                  alt="Dhee Foods Traditional Nutrition"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating Top-Right Category Tag */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/80 text-[10px] font-semibold text-gray-900 tracking-wide shadow-xs">
                  Nutrition
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display text-2xl font-normal text-gray-950 tracking-tight leading-snug mb-2 group-hover:text-brand-orange transition-colors">
                {dheefoods.name}
              </h3>
              <p className="text-xs font-semibold text-brand-orange uppercase tracking-wider mb-3">
                {dheefoods.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed font-normal mb-6 line-clamp-3">
                {dheefoods.description}
              </p>
            </div>

            {/* Bottom Highlights & Website Link */}
            <div className="pt-4 border-t border-gray-100 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {dheefoods.highlights.slice(0, 2).map((item, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white border border-gray-300 text-[11px] text-gray-700 font-medium shadow-2xs">
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={dheefoods.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-orange hover:text-brand-crimson transition-colors"
              >
                <span>Visit Official Dhee Foods Website</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 4: BRAND ARCHITECTURE CLARIFICATION (CLEAN TEXT ONLY, NO BACKGROUND)
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 text-center pt-2">
        <p className="max-w-3xl mx-auto text-xs text-gray-500 leading-relaxed font-normal">
          <strong className="text-gray-900 font-medium">Note on Brand Architecture:</strong> Dhee Foods operates as a standalone wholesome culinary nutrition enterprise under the D SAHAS Hub umbrella, distinct from Dr. Devi Seshadri&apos;s personal executive coaching services.
        </p>
      </section>

    </div>
  );
}
