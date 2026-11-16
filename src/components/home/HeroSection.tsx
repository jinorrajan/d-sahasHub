"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, ShieldCheck, Trophy, Globe, GraduationCap } from "lucide-react";

export function HeroSection() {
  const marqueeText = "LIFE COACH  TACTICAL LEADERSHIP  D SAHAS HUB  EXECUTIVE MENTOR  WORLD RECORD HOLDER  ";

  return (
    <section className="relative w-full pt-20 sm:pt-24 md:pt-28 bg-[#F8F6F2] overflow-hidden">
      {/* 1. INFINITE RUNNING WATERMARK MARQUEE ACROSS TOP */}
      {/* Mobile-only adjustment: pushes text below navbar with comfortable breathing room */}
      <div className="absolute top-28 sm:top-24 md:top-28 left-0 right-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="animate-marquee-smooth flex items-center whitespace-nowrap">
          <span className="font-display text-[15vw] md:text-[13vw] font-black uppercase text-[#E7E2D8] tracking-widest leading-none opacity-85 pr-8">
            {marqueeText}
          </span>
          <span className="font-display text-[15vw] md:text-[13vw] font-black uppercase text-[#E7E2D8] tracking-widest leading-none opacity-85 pr-8">
            {marqueeText}
          </span>
        </div>
      </div>

      {/* 2. CENTERED FULL-WIDTH CONTAINER WRAPPER */}
      {/* Mobile-only adjustment: Reduced mt-48 to mt-28/32 so container moves up cleanly without giant gap */}
      <div className="relative z-10 w-[95%] sm:w-[94%] max-w-[1890px] mx-auto mt-28 sm:mt-56 md:mt-80">
        {/* UPPER HERO CONTAINER */}
        <div className="relative bg-[#07131F] rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[60px] min-h-[500px] sm:min-h-[640px] lg:h-[720px] px-5 sm:px-12 lg:px-20 shadow-2xl flex items-end border-t border-[#004A7F]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full h-full items-end">

            {/* LEFT: CLIENT CUTOUT PORTRAIT OVERLAPPING RUNNING MARQUEE */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start h-full items-end">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
                className="relative z-20 flex justify-center w-full"
              >
                {/* Cutout image with head rising high above black container */}
                {/* Mobile: subtle bottom gradient mask so waist seamlessly dissolves into dark navy without hard straight cut */}
                <div 
                  className="relative w-[300px] sm:w-[460px] md:w-[540px] lg:w-[620px] h-[480px] sm:h-[720px] md:h-[820px] lg:h-[920px] -mt-24 sm:-mt-48 md:-mt-56 lg:-mt-68 pointer-events-none [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)] lg:[mask-image:none]"
                >
                  <Image
                    src="/images/client/person/devi-cutout.png"
                    alt="Dr. P. V. Devi Seshadri - Certified Life & Leadership Coach"
                    fill
                    className="object-contain object-bottom drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* RIGHT: EXACT MINDCO CONTENT HIERARCHY */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-7 sm:space-y-9 py-12 lg:py-24 pl-0 lg:pl-8 z-10">

              {/* Mindco Style Avatars & Social Proof Pill (Avatars pop outside left, sized perfectly on mobile to prevent overflow) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center w-fit max-w-full"
              >
                {/* 3 Overlapping Avatars (Responsive: w-10/11 on mobile, w-16 on desktop) */}
                <div className="flex -space-x-3 sm:-space-x-4 relative z-10 shrink-0">
                  <div className="relative w-11 h-11 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 sm:border-[3px] border-[#07131F] shadow-xl">
                    <Image
                      src="/images/client/person/person-2.jpeg"
                      alt="Leader avatar 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-11 h-11 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 sm:border-[3px] border-[#07131F] shadow-xl">
                    <Image
                      src="/images/client/person/person-3.jpeg"
                      alt="Leader avatar 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-11 h-11 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 sm:border-[3px] border-[#07131F] shadow-xl">
                    <Image
                      src="/images/client/person/person-4.jpeg"
                      alt="Leader avatar 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Pill Capsule with Text - slightly overlaps behind avatars */}
                <div className="-ml-4 sm:-ml-5 pl-6 sm:pl-8 pr-5 sm:pr-7 py-2.5 sm:py-3.5 rounded-full bg-[#1A2634] text-white shadow-lg border border-white/5 shrink-0">
                  <span className="text-xs sm:text-lg font-bold tracking-wide whitespace-nowrap">
                    1,200+ Leaders Guided
                  </span>
                </div>
              </motion.div>

              {/* 3-Line Pure White Display Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium text-white tracking-tight leading-[1.12]">
                  Align Your Leadership <br />
                  With the Impact You <br />
                  Truly Want.
                </h1>
              </motion.div>

              {/* Dual Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 pt-1"
              >
                {/* Button 1: Brand Crimson / Orange Gradient CTA */}
                <Link
                  href="/expertise"
                  className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#AE282E] to-[#F06321] hover:from-[#931f25] hover:to-[#d85518] text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-red-950/30 hover:shadow-xl inline-flex items-center justify-center"
                >
                  Start Your Journey
                </Link>

                {/* Button 2: Deep Navy Translucent Button */}
                <Link
                  href="/contact"
                  className="px-9 py-4 rounded-xl bg-[#0D2135] hover:bg-[#13304c] text-white font-medium text-sm border border-[#004A7F]/40 transition-all duration-200 inline-flex items-center justify-center"
                >
                  Schedule A Free Call
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CONNECTED LOWER BAR (PARTNER RIBBON - CONTINUOUS SINGLE ROW MARQUEE ON MOBILE, 5-COL GRID ON TABLET/DESKTOP) */}
        <div className="relative bg-[#0E1E2E] border-t border-white/5 px-0 sm:px-12 lg:px-20 py-5 sm:py-10 shadow-2xl overflow-hidden">
          {/* Subtle side fade masks for mobile marquee */}
          <div className="sm:hidden absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#0E1E2E] to-transparent z-10 pointer-events-none" />
          <div className="sm:hidden absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#0E1E2E] to-transparent z-10 pointer-events-none" />

          {/* MOBILE VIEW: Single row continuous running marquee */}
          <div className="sm:hidden flex overflow-hidden select-none">
            <div className="animate-partner-marquee flex items-center">
              {[...Array(2)].map((_, loopIdx) => (
                <div key={loopIdx} className="flex items-center gap-6 pr-6">
                  {[
                    { 
                      name: "BYST Guilds London", 
                      tag: "Certified Mentor",
                      logo: "/images/client/logo/byst-guilds.png",
                    },
                    { 
                      name: "Rotary International", 
                      tag: "District Leader",
                      logo: "/images/client/logo/rotary-intl.png",
                    },
                    { 
                      name: "Elite World Records", 
                      tag: "Record Holder",
                      logo: "/images/client/logo/elite-records.png",
                    },
                    { 
                      name: "Asian Records Academy", 
                      tag: "Global Adjudicator",
                      logo: "/images/client/logo/asian-records.png",
                    },
                    { 
                      name: "Anna University Alumni", 
                      tag: "Honorary Member",
                      logo: "/images/client/logo/anna-univ.png",
                    },
                  ].map((partner, index) => (
                    <div
                      key={`${loopIdx}-${index}`}
                      className="flex items-center gap-3 py-2 px-3.5 rounded-xl bg-white/[0.03] border border-white/5 shrink-0"
                    >
                      <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-contain filter drop-shadow-md brightness-105"
                        />
                      </div>
                      <div className="flex flex-col text-left whitespace-nowrap">
                        <span className="text-xs font-bold text-gray-100 tracking-tight leading-snug">
                          {partner.name}
                        </span>
                        <span className="text-[11px] font-semibold text-brand-orange">
                          {partner.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* TABLET / DESKTOP VIEW: Balanced 5-column grid */}
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center">
            {[
              { 
                name: "BYST Guilds London", 
                tag: "Certified Mentor",
                logo: "/images/client/logo/byst-guilds.png",
              },
              { 
                name: "Rotary International", 
                tag: "District Leader",
                logo: "/images/client/logo/rotary-intl.png",
              },
              { 
                name: "Elite World Records", 
                tag: "Record Holder",
                logo: "/images/client/logo/elite-records.png",
              },
              { 
                name: "Asian Records Academy", 
                tag: "Global Adjudicator",
                logo: "/images/client/logo/asian-records.png",
              },
              { 
                name: "Anna University Alumni", 
                tag: "Honorary Member",
                logo: "/images/client/logo/anna-univ.png",
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-3.5 group cursor-default p-2 rounded-xl transition-all duration-200 hover:bg-white/5 w-full justify-start sm:justify-center"
              >
                {/* Transparent Logo Container */}
                <div className="relative w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain filter drop-shadow-md brightness-105"
                  />
                </div>

                <div className="flex flex-col text-left min-w-0">
                  <span className="text-sm sm:text-base font-bold text-gray-100 group-hover:text-white transition-colors tracking-tight leading-snug">
                    {partner.name}
                  </span>
                  <span className="text-xs font-semibold text-brand-orange/90 group-hover:text-brand-orange transition-colors">
                    {partner.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. INTEGRATED FOUNDATIONAL FRAMEWORK SECTION (SEAMLESSLY COMBINED) */}
        <div className="relative bg-[#07131F] rounded-b-[36px] sm:rounded-b-[48px] md:rounded-b-[60px] border-t border-white/5 px-6 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-24 shadow-2xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D2135] border border-white/10 text-xs font-semibold text-gray-300 uppercase tracking-widest mb-5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>Foundational Framework</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.15]"
            >
              The S.E.L.F. Architecture <br className="hidden sm:inline" />
              Engineered for Executive Impact
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Sustainable leadership begins from within. Moving business leaders from instinctive, chaotic reaction to calm, calculated strategy.
            </motion.p>
          </div>

          {/* 3-Column Mindco Exact Card Grid (Uniform Design with Transparent Cutouts Matching Hero Navy Container) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {[
              {
                id: "card-1",
                title: "Strategic Executive Mentoring",
                tag: "1:1 Strategic Depth",
                description: "Deep 1-on-1 strategic exploration to identify cognitive blindspots and architect enduring career triumph.",
                cutout: "/images/client/person/devi-strategy-cutout.png",
                bgGradient: "from-[#0E2438] via-[#0A1A29] to-[#07131F]",
                accentGlow: "rgba(240, 99, 33, 0.15)",
                avatars: [
                  "/images/client/person/person-2.jpeg",
                  "/images/client/person/person-3.jpeg",
                ],
              },
              {
                id: "card-2",
                title: "Career & Leadership Alignment",
                tag: "Tactical Execution",
                description: "Designed for business leaders facing decision fatigue, seeking absolute clarity on their next high-stakes leap.",
                cutout: "/images/client/person/devi-coaching-cutout.png",
                bgGradient: "from-[#0E2438] via-[#0A1A29] to-[#07131F]",
                accentGlow: "rgba(0, 74, 127, 0.25)",
                avatars: [
                  "/images/client/person/person-4.jpeg",
                  "/images/client/person/person-5.jpeg",
                ],
              },
              {
                id: "card-3",
                title: "Executive Inner Equilibrium",
                tag: "Inner Composure",
                description: "Dissolving high-pressure somatic stress loops so ambition and scale never cost family peace and inner calm.",
                cutout: "/images/client/person/devi-healing-cutout.png",
                bgGradient: "from-[#0E2438] via-[#0A1A29] to-[#07131F]",
                accentGlow: "rgba(174, 40, 46, 0.2)",
                avatars: [
                  "/images/client/person/person-1.jpeg",
                  "/images/client/person/person-2.jpeg",
                ],
              },
            ].map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative flex flex-col justify-between rounded-[32px] bg-[#0A1826] border border-[#004A7F]/40 p-5 sm:p-6 transition-all duration-300 hover:border-[#F06321]/50 hover:shadow-2xl overflow-hidden"
              >
                {/* 1. TOP HERO CUTOUT SHOWCASE (SEAMLESSLY MATCHED TO MIDNIGHT NAVY CONTAINER) */}
                <div className={`relative w-full h-[320px] sm:h-[350px] lg:h-[380px] rounded-[24px] overflow-hidden mb-6 bg-gradient-to-b ${card.bgGradient} border border-white/5 flex items-end justify-center`}>
                  {/* Subtle radial ambient spotlight matching container */}
                  <div 
                    className="absolute inset-0 pointer-events-none" 
                    style={{ background: `radial-gradient(circle at 50% 30%, ${card.accentGlow}, transparent 70%)` }}
                  />

                  {/* Eyebrow tag at top left of image box */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-orange bg-[#07131F]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {card.tag}
                    </span>
                  </div>

                  {/* High Precision Transparent Cutout Portrait */}
                  <div className="relative w-full h-[92%] flex items-end justify-center">
                    <Image
                      src={card.cutout}
                      alt={card.title}
                      fill
                      className="object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.02] drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                    />
                  </div>

                  {/* Soft bottom vignette for seamless integration */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A1826] via-[#0A1826]/70 to-transparent pointer-events-none" />

                  {/* Exact Headline overlaid at bottom of photo showcase */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="font-display text-xl sm:text-[22px] font-normal text-white tracking-tight leading-snug drop-shadow-md">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* 2. CARD BOTTOM AREA - EDITORIAL COPY + SOCIAL PROOF AVATARS */}
                <div className="flex-1 flex items-end justify-between gap-4 pt-1">
                  <p className="text-sm text-gray-300 font-light max-w-[68%] leading-relaxed">
                    {card.description}
                  </p>
                  <div className="flex -space-x-3 flex-shrink-0">
                    {card.avatars.map((av, avIdx) => (
                      <div
                        key={avIdx}
                        className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#0A1826] shadow-md"
                      >
                        <Image
                          src={av}
                          alt="Client avatar"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
