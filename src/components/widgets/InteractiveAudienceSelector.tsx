"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Briefcase,
  Award,
  HeartPulse,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

interface AudiencePerspective {
  id: string;
  tabLabel: string;
  headline: string;
  problem: string;
  solution: string;
  trackId: string;
  trackName: string;
  metrics: string;
  actionText: string;
}

const perspectives: AudiencePerspective[] = [
  {
    id: "founders",
    tabLabel: "Founders & CXOs",
    headline: "Breaking Decision Fatigue & Founder Bottlenecks",
    problem:
      "When every business decision flows through you, high-velocity growth creates acute operational paralysis, sleepless anxiety, and reactive firefighting.",
    solution:
      "Master deliberate emotional regulation and install autonomous delegation structures so you direct strategy without being consumed by daily firefights.",
    trackId: "tactical-leadership",
    trackName: "Tactical Leadership & Decision Mastery",
    metrics: "1:1 Coaching • 120-Day Protocol",
    actionText: "Explore 1:1 Executive Coaching",
  },
  {
    id: "family-business",
    tabLabel: "Family Businesses",
    headline: "Navigating Multi-Generational Transition Without Discord",
    problem:
      "Generational friction between founder intuition and next-gen modernisation often threatens both family harmony and enterprise profitability.",
    solution:
      "Neutral boardroom facilitation to codify family constitutions, succession governance, and transition authority with absolute clarity and mutual respect.",
    trackId: "business-consulting",
    trackName: "Family Business Succession & SOPs",
    metrics: "Advisory Council • Board Facilitation",
    actionText: "Explore Succession Advisory",
  },
  {
    id: "enterprises",
    tabLabel: "Corporate & Teams",
    headline: "Aligning Cross-Functional Execution & Team Trust",
    problem:
      "Departmental silos, passive resistance, and reactive team communication drag down execution velocity on critical enterprise milestones.",
    solution:
      "High-impact offsites and leadership labs teaching Dr. Devi's REACT to RESPOND framework to align mid-level and senior managers.",
    trackId: "tactical-leadership",
    trackName: "Corporate Offsites & Keynotes",
    metrics: "World-Record Keynote Pedigree",
    actionText: "Plan Corporate Workshop",
  },
  {
    id: "wellness",
    tabLabel: "High-Stress Leaders",
    headline: "Inner Calm & Bodily Vitality for Peak Execution",
    problem:
      "Physical burnout, chronic emotional stress, and bodily fatigue compromise your presence, clarity, and home life.",
    solution:
      "LiveEase life-balancing drills combining scientific mindfulness, bio-energy Reiki harmony, and stress reframing.",
    trackId: "wellness-balancing",
    trackName: "LiveEase Vitality & Reiki Balance",
    metrics: "Holistic Health • Energy Balancing",
    actionText: "Explore LiveEase Wellness",
  },
];

export function InteractiveAudienceSelector() {
  const [activeTab, setActiveTab] = useState(perspectives[0].id);
  const current = perspectives.find((p) => p.id === activeTab) || perspectives[0];

  return (
    <div className="space-y-8">
      {/* Editorial Horizontal Tab Strip */}
      <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-3">
        {perspectives.map((p) => {
          const isActive = p.id === activeTab;
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#07131F] text-white shadow-md scale-102"
                  : "bg-white/80 text-gray-700 hover:bg-white hover:text-black border border-gray-200/60"
              }`}
            >
              {p.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Main Feature Bento Content Card */}
      <div className="relative rounded-[32px] sm:rounded-[36px] bg-white border border-[#DDD7CD] p-7 sm:p-10 lg:p-12 shadow-sm overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column (7 Cols): Editorial Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-orange">
                {current.metrics}
              </span>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-950 tracking-tight leading-snug">
                {current.headline}
              </h3>

              <div className="space-y-3.5 text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block mb-1">
                    The Critical Challenge:
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700">
                    {current.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                    Our Deliberate Transformation:
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700">
                    {current.solution}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#AE282E] to-[#F06321] hover:from-[#931f25] hover:to-[#d85518] shadow-md shadow-red-950/20 transition-all duration-200 tracking-wider uppercase group"
                >
                  <span>{current.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href={`#${current.trackId}`}
                  className="text-xs font-semibold text-gray-700 hover:text-brand-crimson transition-colors"
                >
                  Review Curriculum Track ↓
                </a>
              </div>
            </div>

            {/* Right Column (5 Cols): Editorial Insight Box */}
            <div className="lg:col-span-5 bg-[#07131F] text-white rounded-[28px] p-7 sm:p-8 space-y-5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-radial from-brand-orange/20 to-transparent rounded-full blur-xl pointer-events-none" />

              <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-orange block">
                Primary Recommended Track
              </span>

              <h4 className="font-display text-xl sm:text-2xl font-light text-white leading-tight">
                {current.trackName}
              </h4>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-gray-300 font-light border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Confidential 1:1 or Closed-Door Boardroom</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>25+ Years Enterprise Consulting Methodology</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Measurable Behavioral & Commercial Milestones</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-orange hover:text-white transition-colors"
                >
                  <span>Request Consultation Timing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

