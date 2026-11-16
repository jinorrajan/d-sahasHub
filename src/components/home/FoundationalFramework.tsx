"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface FrameworkCard {
  id: string;
  pill: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  avatars?: string[];
  isFeatured?: boolean;
}

const frameworkCards: FrameworkCard[] = [
  {
    id: "self-care",
    pill: "Pillar 01",
    title: "Self Care & Restoration",
    subtitle: "The Foundation of Sustained Leadership",
    description: "Executive boundary protection, restorative daily rituals, and nervous system recovery to prevent cognitive burnout.",
    image: "/images/client/meetings/meeting-1.jpeg",
    avatars: [
      "/images/client/person/person-2.jpeg",
      "/images/client/person/person-3.jpeg",
    ],
  },
  {
    id: "self-healing",
    pill: "Core System",
    title: "Self Healing & Mental Clarity",
    subtitle: "Neutralizing Subconscious Stress Loops",
    description: "Releasing chronic stress holding patterns and restoring inner composure before high-stakes executive decisions.",
    image: "/images/client/person/person-1.jpeg",
    ctaText: "Schedule A Free Call",
    ctaLink: "/contact",
    isFeatured: true,
  },
  {
    id: "self-awareness",
    pill: "Pillar 03 & 04",
    title: "Self Awareness & Understanding",
    subtitle: "Moving From REACT to Deliberate RESPOND",
    description: "Recognize behavioral blindspots and align aggressive business growth with enduring family peace and personal harmony.",
    image: "/images/client/meetings/meeting-2.jpeg",
    ctaText: "Explore Full Framework",
    ctaLink: "/expertise",
    avatars: [
      "/images/client/person/person-4.jpeg",
      "/images/client/person/person-5.jpeg",
    ],
  },
];

export function FoundationalFrameworkMindco() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#111214] text-white overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#004A7F]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Centered Pill & Bold Display Title) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F2124] border border-white/10 text-xs font-semibold text-gray-300 uppercase tracking-widest mb-5 shadow-sm"
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

        {/* 3-Column Mindco Style Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {frameworkCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative flex flex-col justify-between rounded-[28px] sm:rounded-[32px] bg-[#17191C] border border-white/5 p-5 sm:p-6 transition-all duration-300 hover:border-white/15 hover:shadow-2xl"
            >
              {/* Top Image Showcase */}
              <div className="relative w-full h-[240px] sm:h-[260px] rounded-2xl overflow-hidden mb-6 bg-[#0B0D0E]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Shadow Overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17191C] via-[#17191C]/30 to-transparent" />

                {/* Pill on Top Left */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-gray-200 uppercase tracking-wider">
                  {card.pill}
                </div>

                {/* Overlaid Title on Image Bottom */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Card Body & Description */}
              <div className="flex-1 flex flex-col justify-between space-y-5">
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.description}
                </p>

                {/* Bottom Row: CTA Button or Avatars/Subtext */}
                <div className="pt-2 flex items-center justify-between gap-4 border-t border-white/5">
                  {card.ctaText && card.ctaLink ? (
                    <Link
                      href={card.ctaLink}
                      className="w-full text-center py-3 px-5 rounded-xl bg-gradient-to-r from-[#AE282E] to-[#F06321] hover:from-[#931f25] hover:to-[#d85518] text-white text-xs font-bold tracking-wide transition-all shadow-md inline-flex items-center justify-center gap-2"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <>
                      <span className="text-xs font-medium text-gray-400 line-clamp-1">
                        {card.subtitle}
                      </span>
                      {card.avatars && (
                        <div className="flex -space-x-2 flex-shrink-0">
                          {card.avatars.map((av, avIdx) => (
                            <div
                              key={avIdx}
                              className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-[#17191C]"
                            >
                              <Image
                                src={av}
                                alt="Leader avatar"
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

