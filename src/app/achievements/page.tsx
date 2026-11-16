import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  Trophy,
  Sparkles,
  CheckCircle2,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Users2,
  Calendar,
} from "lucide-react";
import { achievementsData } from "@/config/achievements";
import { VerifiableCredentialsSection } from "@/components/widgets/VerifiableCredentialsSection";

export const metadata = {
  title: "Achievements & Recognition | Dr. P. V. Devi Seshadri",
  description:
    "Verifiable record achievements, 55-hour marathon webinar milestone, BYST Senior Mentorship credentials, and Rotary leadership honors of Dr. P. V. Devi Seshadri.",
};

export default function AchievementsPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-16 sm:space-y-24 bg-[#F8F6F2] overflow-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO HEADER (MATCHING HOME & EXPERTISE EDITORIAL STYLE)
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-light text-gray-950 tracking-tight leading-[1.12]">
            Honors, Records & Accreditations
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            A verifiable track record of transformative leadership feats, international endurance records, and 7+ years of grassroots youth mentorship led by <strong className="font-medium text-gray-950">Dr. P. V. Devi Seshadri</strong>.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FEATURED WORLD RECORD BENTO (MATCHING HOME/D-SAHAS HEROIC CARD)
          Large Split Card: Authentic Real Certificate Proof + Editorial Story + 4 Certifying Bodies
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="rounded-[36px] sm:rounded-[48px] bg-white border border-[#E5E0D6] shadow-[0_20px_60px_-15px_rgba(7,19,31,0.06)] p-7 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left 7 Cols: Editorial Record Story & Numbers */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div>
                  <span className="kicker-text">
                    Historic World Record Milestone
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-normal text-gray-950 tracking-tight leading-[1.18]">
                  55 Hours 40 Seconds{" "}
                  <span className="text-brand-crimson">Continuous Life-Skills</span> Webinar
                </h2>

                <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl">
                  An unprecedented live marathon training session conducted without pause. Combining behavioral psychology, tactical decision-making, and emotional resilience to empower emerging youth and leaders across India.
                </p>
              </div>

              {/* 4 Record Bodies Pill Strip (Clean Mindco Bento Style) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-[#EAE5DC]">
                {[
                  { name: "Elite", desc: "World Records" },
                  { name: "Asian", desc: "Records Academy" },
                  { name: "India", desc: "Records Academy" },
                  { name: "Tamilian", desc: "Book of Records" },
                ].map((body, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] text-center sm:text-left">
                    <span className="font-display text-xl sm:text-2xl font-light text-gray-950 tracking-tight block">
                      {body.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider block mt-0.5">
                      {body.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Verified Accuracy Tag */}
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Fully Authenticated by International Record Adjudicators</span>
              </div>
            </div>

            {/* Right 5 Cols: Framed Certificate Citation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[460px] aspect-[4/3.1] rounded-2xl overflow-hidden bg-white shadow-md border border-[#E0D9CE] p-2.5 group">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-50">
                  <Image
                    src="/images/client/certificates/cert-1.jpeg"
                    alt="Official Elite World Records Certificate"
                    fill
                    className="object-contain p-1 group-hover:scale-102 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CIVIC & COMMUNITY LEADERSHIP (MATCHING WHY-CHOOSE-US BENTO ROW STYLE)
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-2xl">
            <div>
              <span className="kicker-text-crimson">
                Civic & Mentorship Impact
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-light text-gray-950 tracking-tight leading-[1.2]">
              7+ Years Grassroots Mentorship & Rotary Service
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Dedication that transcends boardrooms into community welfare, startup incubation, and non-profit governance.
            </p>
          </div>
        </div>

        {/* 2 Wide Bento Feature Cards (Edge-to-Edge Image Top, Left & Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: BYST Mentorship */}
          <div className="group rounded-[32px] bg-white border border-[#E3DFD7] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
            <div>
              {/* Full Bleed Image (Top, Left, Right Edge-to-Edge, No border) */}
              <div className="relative w-full h-[240px] sm:h-[300px] bg-gray-100 overflow-hidden">
                <Image
                  src="/images/client/meetings/meeting-1.jpeg"
                  alt="BYST Mentorship Session"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-7 sm:p-9 pb-0">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-crimson uppercase tracking-wider mb-2">
                  <span>BYST Guilds • London, UK</span>
                </div>

                <h3 className="font-display text-2xl font-normal text-gray-950 tracking-tight mb-3">
                  Senior Startup Mentor (7+ Years)
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  Empowering grassroots innovators and first-generation youth to structure robust financial projections, secure formal bank credit, and establish sustainable micro-enterprises under the Bharatiya Yuva Shakti Trust.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-9 pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                7+ Years Continuous Service
              </span>
              <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-brand-crimson group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 2: Rotary Leadership */}
          <div className="group rounded-[32px] bg-white border border-[#E3DFD7] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
            <div>
              {/* Full Bleed Image (Top, Left, Right Edge-to-Edge, No border) */}
              <div className="relative w-full h-[240px] sm:h-[300px] bg-gray-100 overflow-hidden">
                <Image
                  src="/images/client/meetings/meeting-2.jpeg"
                  alt="Rotary District Honors and Leadership Training"
                  fill
                  className="object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-7 sm:p-9 pb-0">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-orange uppercase tracking-wider mb-2">
                  <span>Rotary International</span>
                </div>

                <h3 className="font-display text-2xl font-normal text-gray-950 tracking-tight mb-3">
                  Charter President & Certified RLI Trainer
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  Founder & Charter President of Rotary Club of Chennai Fireflies; T20 Secretary, Rotary Club of Sainikpuri; actively training upcoming district leaders and spearheading humanitarian projects via the Rotary Leadership Institute.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-9 pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                District Leadership & Training
              </span>
              <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 4: VERIFIABLE CERTIFICATE REPOSITORY (MINDCO 3-COLUMN CARDS)
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div>
            <div>
              <span className="kicker-text-crimson">
                Verifiable Credentials
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-light text-gray-950 tracking-tight leading-[1.2]">
              Official Record Citations & Registry
            </h2>
          </div>
          <p className="text-xs text-gray-500 max-w-sm">
            Click on any certificate to inspect full resolution scans and official awarding body details.
          </p>
        </div>

        {/* Redesigned into 2nd Image Layout: Interactive Vertical List with Spring Cursor Follower & Speed Tilt */}
        <VerifiableCredentialsSection items={achievementsData} />
      </section>

      {/* =========================================================================
          SECTION 5: INTEGRITY COMMITMENT CALLOUT (CLEAN TEXT ONLY, NO BACKGROUND/ICON)
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 text-center pt-2">
        <div className="max-w-3xl mx-auto space-y-1.5">
          <p className="font-serif text-xs font-bold uppercase tracking-[0.16em] text-brand-crimson">
            Verifiable Accuracy Commitment
          </p>
          <p className="text-xs text-gray-500 leading-relaxed font-normal">
            In accordance with Dr. Devi&apos;s professional code of conduct, every world-record title, webinar duration, and credential listed on this website corresponds to authentic documentation and awarding body registries.
          </p>
        </div>
      </section>

    </div>
  );
}
