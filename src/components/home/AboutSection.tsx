"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PerspectiveImpactCard } from "@/components/ui/PerspectiveImpactCard";

export function AboutSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 bg-[#F8F6F2]">
      {/* Matched with Hero container width (w-[95%] sm:w-[94%] max-w-[1890px]) with small side padding */}
      <div className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-2 sm:px-4 space-y-12 sm:space-y-16">

        {/* ROW 1: TOP INTRO & 4 STATS ROW (EXACT MINDCO HEROIC ROW) */}
        <div className="space-y-10 sm:space-y-12">
          {/* Top Header Pill & Large Mission Headline */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-8">
            <div>
              <span className="kicker-text">
                About The Coach
              </span>
            </div>

            <div className="max-w-3xl">
              <h2 className="font-sans text-lg sm:text-xl lg:text-2xl font-normal tracking-wide leading-relaxed text-gray-500">
                <span className="text-gray-900 font-medium">Internationally certified Professional Coach & Trainer</span> dedicated to transforming individuals, entrepreneurs, families, and organizations through integrated personal and professional development. An engineer by qualification with an MBA and over two decades of experience in Information Technology, Sales, Consulting, Marketing, and Business Development.
              </h2>
            </div>
          </div>

          {/* 4 Stats Minimalist Grid - Perfectly Spread Out Across Full Width */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-start justify-between gap-6 pt-8 sm:pt-14 md:pt-16 border-t border-gray-200/60 w-full">
            <div className="flex flex-col text-left">
              <div className="font-display text-3xl sm:text-5xl lg:text-[56px] font-light text-gray-950 tracking-tight leading-none">
                25+
              </div>
              <div className="mt-2.5 sm:mt-3 text-[11px] sm:text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Years Experience
              </div>
            </div>

            <div className="flex flex-col text-left">
              <div className="font-display text-3xl sm:text-5xl lg:text-[56px] font-light text-gray-950 tracking-tight leading-none">
                55h 40s
              </div>
              <div className="mt-2.5 sm:mt-3 text-[11px] sm:text-sm font-semibold text-gray-500 tracking-wider uppercase">
                World Record Marathon
              </div>
            </div>

            <div className="flex flex-col text-left">
              <div className="font-display text-3xl sm:text-5xl lg:text-[56px] font-light text-gray-950 tracking-tight leading-none">
                7+ Yrs
              </div>
              <div className="mt-2.5 sm:mt-3 text-[11px] sm:text-sm font-semibold text-gray-500 tracking-wider uppercase">
                BYST Mentorship
              </div>
            </div>

            <div className="flex flex-col text-left">
              <div className="font-display text-3xl sm:text-5xl lg:text-[56px] font-light text-gray-950 tracking-tight leading-none">
                1,200+
              </div>
              <div className="mt-2.5 sm:mt-3 text-[11px] sm:text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Leaders Guided
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: 3-CARD SHOWCASE GRID WITH COHESIVE STAGGER ANIMATIONS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.16,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >

          {/* CARD 1: DARK BRAND CARD WITH AVATARS (md:col-span-4) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
              },
            }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="md:col-span-4 rounded-[32px] bg-[#121316] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl min-h-[460px] sm:min-h-[500px] border border-white/5 transition-shadow hover:shadow-2xl"
          >
            {/* Top Row: Pill + Avatars */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-300 tracking-wider">
                How I Help
              </span>
              <div className="flex -space-x-2">
                {["/images/client/person/person-2.jpeg", "/images/client/person/person-3.jpeg", "/images/client/person/person-4.jpeg"].map((av, idx) => (
                  <div key={idx} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#121316]">
                    <Image src={av} alt="Leader" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Main Headline */}
            <div className="py-8">
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white tracking-tight leading-snug">
                Create a step-by-step roadmap you can actually follow.
              </h3>
            </div>

            {/* Bottom Sub-bullets */}
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span>Clarify your long-term life & business vision</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span>Identify your core strengths & reactive triggers</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: 3D PERSPECTIVE ELEVATED IMPACT CARD (md:col-span-4) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
              },
            }}
            className="md:col-span-4 h-full flex"
          >
            <PerspectiveImpactCard
              imageSrc="/images/client/person/devi-cutout.png"
              imageAlt="Dr. P. V. Devi Seshadri"
              statNumber="25+"
              statLabel="YEARS OF IMPACT"
              aspectRatioClass="h-full min-h-[460px] sm:min-h-[500px]"
              containerClassName="w-full h-full"
              cardBgColor="#FCE7D8"
              badgeBgColor="#FAF7F2"
              watermarkText="RESPOND"
            />
          </motion.div>

          {/* CARD 3: EXACT MINDCO SLIDER & METRIC CARD (md:col-span-4) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
              },
            }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="md:col-span-4 rounded-[36px] bg-[#EFECE6]/75 border border-[#E3DFD7] p-8 sm:p-10 flex flex-col justify-between min-h-[460px] sm:min-h-[500px] transition-shadow hover:shadow-xl"
          >
            {/* Top Metric Header: 87% on left, Title on right */}
            <div className="flex items-start justify-between">
              <span className="font-display text-6xl sm:text-7xl font-normal text-gray-950 tracking-tight leading-none">
                87%
              </span>
              <span className="text-base sm:text-lg font-normal text-gray-900 pt-3 text-right">
                Clarity Improvement
              </span>
            </div>

            {/* Spacer / Minimalist Center Breathing Room */}
            <div className="flex-1" />

            {/* Bottom Exact Mindco Thumb Sliders */}
            <div className="space-y-6">
              {/* Slider 1: Career Confidence (92%) */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-base font-normal text-gray-900">
                    Career Confidence
                  </span>
                  <span className="text-base font-normal text-gray-900">
                    92%
                  </span>
                </div>
                {/* Track with circular draggable-style thumb */}
                <div className="relative w-full h-[2px] bg-[#D7D2C7] my-3">
                  <div className="absolute top-0 left-0 h-full bg-[#C0A385] w-[92%]" />
                  {/* Circular Thumb with inner ring */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#FAF8F5] border-2 border-[#C0A385] shadow-sm flex items-center justify-center pointer-events-none"
                    style={{ left: "calc(92% - 10px)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C0A385]" />
                  </div>
                </div>
              </div>

              {/* Slider 2: Action Consistency (78%) */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-base font-normal text-gray-900">
                    Action Consistency
                  </span>
                  <span className="text-base font-normal text-gray-900">
                    78%
                  </span>
                </div>
                {/* Track with circular draggable-style thumb */}
                <div className="relative w-full h-[2px] bg-[#D7D2C7] my-3">
                  <div className="absolute top-0 left-0 h-full bg-[#C0A385] w-[78%]" />
                  {/* Circular Thumb with inner ring */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#FAF8F5] border-2 border-[#C0A385] shadow-sm flex items-center justify-center pointer-events-none"
                    style={{ left: "calc(78% - 10px)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C0A385]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
