"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface Milestone {
  period: string;
  phase: string;
  role: string;
  domain: string;
  headline: string;
  story: string;
  impactTag: string;
}

const milestones: Milestone[] = [
  {
    period: "1992 — 2014",
    phase: "Phase 01",
    role: "Enterprise IT Infrastructure Consultant",
    domain: "Corporate Technology & Systems Architecture",
    headline: "22 Years of Enterprise Discipline & Systems Rigor",
    story:
      "Engineered hardware architectures, mission-critical infrastructure networks, and multi-tier corporate sales across demanding enterprise client environments. Observed first-hand how technical competence is rendered ineffective when leaders derail through emotional friction and reactive decision-making.",
    impactTag: "Systems & Analytical Logic",
  },
  {
    period: "2014 — 2021",
    phase: "Phase 02",
    role: "Certified Executive Life Coach & Senior Mentor",
    domain: "Behavioral Transformation & Youth Mentorship",
    headline: "Shifting Leaders from Instinctive REACT to Deliberate RESPOND",
    story:
      "Accredited by the Carlton Advanced Management Institute (USA). Dedicated 7+ consecutive years as a BYST Senior Mentor guiding budding entrepreneurs. Set an unprecedented world record delivering a continuous 55-hour 40-second live life-skills webinar for youth and emerging executives.",
    impactTag: "55h 40s World Record Trainer",
  },
  {
    period: "2021 — Present",
    phase: "Phase 03",
    role: "Founder & Ecosystem Architect",
    domain: "D SAHAS Hub",
    headline: "Synchronizing Executive Mastery, Vitality & Heritage",
    story:
      "Unified tactical leadership (DeeSkill), holistic inner vitality (LiveEase), and ancestral wholesome nutrition (Dhee Foods) under one cohesive umbrella. Coaching second-generation family successors, founders, and executives across India and worldwide.",
    impactTag: "Complete Ecosystem Vision",
  },
];

export function ExecutiveJourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  // Track window scroll relative to the timeline reference element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  // Transform scroll progress (0 to 1) into height scaling and opacity for the follow beam
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full space-y-12" ref={containerRef}>
      {/* Top Header matching Mindco typography */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div>
            <span className="kicker-text-crimson">
              25+ Years of Evolution
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-gray-950 tracking-tight leading-[1.2]">
            The Journey Behind the Method
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            How decades of high-pressure corporate IT discipline evolved into a calm, deliberate methodology for modern leadership.
          </p>
        </div>
      </div>

      {/* Aceternity Vertical Timeline with Sticky Headers & Scroll Follow Beam */}
      <div ref={ref} className="relative w-full max-w-6xl mx-auto pb-16">
        {milestones.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-28 md:gap-12"
          >
            {/* Sticky Header / Milestone Indicator Sidebar */}
            <div className="sticky flex flex-col md:flex-row z-30 items-start md:items-center top-28 md:top-36 self-start max-w-xs md:w-80 shrink-0">
              {/* Timeline Indicator Node with animated halo */}
              <div className="h-10 w-10 absolute -left-[19px] md:-left-[19px] top-0 md:top-auto rounded-full bg-[#F8F6F2] flex items-center justify-center z-40 border-2 border-[#DDD7CD]">
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-[#AE282E] to-[#F06321] shadow-sm shadow-red-950/30" />
              </div>

              {/* Sticky Period & Phase Title (Desktop view) */}
              <div className="hidden md:block pl-10 space-y-1">
                <span className="font-serif text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange block">
                  {item.phase}
                </span>
                <h3 className="text-2xl lg:text-3xl font-display font-light text-gray-900 tracking-tight">
                  {item.period}
                </h3>
              </div>
            </div>

            {/* Content Card with Client Story & Verification */}
            <div className="relative pl-8 pr-2 md:pl-0 w-full">
              {/* Mobile Title */}
              <div className="md:hidden block mb-4 space-y-1">
                <span className="font-serif text-[10px] font-bold uppercase tracking-[0.16em] text-brand-orange block">
                  {item.phase}
                </span>
                <h3 className="text-xl font-display font-medium text-gray-900">
                  {item.period}
                </h3>
              </div>

              {/* Elevated Milestone Editorial Card */}
              <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-[#E5E0D6] p-7 sm:p-10 shadow-[0_16px_50px_-20px_rgba(7,19,31,0.06)] space-y-5 hover:border-[#DDD7CD] transition-all">
                <div className="space-y-3">
                  <div className="font-serif tracking-[0.16em] uppercase text-xs font-bold leading-relaxed text-[#AE282E]">
                    {item.role} • {item.domain}
                  </div>

                  <h4 className="font-display text-2xl sm:text-3xl font-normal text-gray-950 tracking-tight leading-snug">
                    {item.headline}
                  </h4>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal pt-1">
                    {item.story}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-brand-crimson flex items-center gap-1.5">
                    <span>{item.impactTag}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Dynamic Vertical Scroll Beam Follower */}
        <div
          style={{
            height: height ? `${height}px` : "100%",
          }}
          className="absolute left-[0px] top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-gray-300 to-transparent"
        >
          {/* Animated Glowing Beam following scroll */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-[#AE282E] via-[#F06321] to-[#004A7F] shadow-[0_0_12px_#F06321]"
          />
        </div>
      </div>
    </div>
  );
}
