"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, HeartPulse, Apple } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";
import { venturesData } from "@/config/ventures";

const ventureImages: Record<string, string> = {
  deeskill: "/images/client/person/deeskill-bg.jpg",
  liveease: "/images/client/person/liveease-bg.jpg",
  dheefoods: "/images/client/person/dheefoods-bg.jpg",
};

export function VenturesSection() {
  return (
    <section className="relative w-full py-6 sm:py-8 bg-[#F8F6F2]">
      {/* Container with EXACT Hero Container background color and radius */}
      <div className="relative z-10 w-[95%] sm:w-[94%] max-w-[1890px] mx-auto rounded-[36px] sm:rounded-[48px] md:rounded-[56px] bg-[#07131F] border border-[#004A7F]/40 py-16 sm:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden shadow-2xl text-white">
        
        {/* Background Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#004A7F]/20 blur-[140px] pointer-events-none rounded-full" />

        {/* Aceternity Meteor Effect: Group of Beams streaking across the dark container */}
        <Meteors number={26} />

        <div className="relative z-10 space-y-12 sm:space-y-16">
          {/* HEADER: PILL + SLEEK TITLE + INTRO SUBTITLE */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div>
                <span className="kicker-text-light">
                  The Ecosystem
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.2]">
                D SAHAS Hub Ventures
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-base text-gray-300 leading-relaxed font-normal">
                Connecting Minds, Creating an Impact through distinct initiatives across leadership, wellness, and healthy nutrition.
              </p>
            </div>
          </div>

          {/* 3-COLUMN MINDCO CARD GRID (EXACT SCREENSHOT: IMAGE TOP -> METADATA -> TITLE -> DESC -> PILL TAGS) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {venturesData.map((venture, idx) => {
              const bgImage = ventureImages[venture.id] || "/images/client/meetings/meeting-1.jpeg";

              return (
                <motion.div
                  key={venture.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group relative flex flex-col justify-between text-white"
                >
                  <div>
                    {/* 1. TOP ROUNDED IMAGE (Clean, Floating, No Text Overlay) */}
                    <div className="relative w-full h-[220px] sm:h-[240px] rounded-[24px] overflow-hidden mb-5 bg-[#0D2135] shadow-xl border border-white/5">
                      <Image
                        src={bgImage}
                        alt={venture.name}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* 2. SUB-METADATA ROW: Category • Active Venture (UPPERCASE & TRACKING-WIDER LIKE 1ST IMAGE) */}
                    <div className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-400 mb-3 tracking-wider uppercase font-semibold">
                      <span className="text-brand-orange">{venture.badge}</span>
                      <span className="text-white/20">•</span>
                      <span className="text-gray-400">Active Venture</span>
                    </div>

                    {/* 3. SLEEK TITLE (FONT-LIGHT / NORMAL LIKE 1ST IMAGE) */}
                    <h3 className="font-display text-2xl sm:text-[28px] font-normal text-white tracking-tight leading-snug mb-3 group-hover:text-brand-orange transition-colors">
                      {venture.name}
                    </h3>

                    {/* 4. DESCRIPTION TEXT */}
                    <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 mb-6 font-normal">
                      {venture.description}
                    </p>
                  </div>

                  {/* 5. BOTTOM PILL TAGS (Dark Capsule Badges) */}
                  <div className="pt-2">
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      {venture.highlights.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-4 py-2 rounded-full bg-[#0D2135] border border-white/10 text-xs text-gray-200 hover:text-white hover:border-white/30 transition-all cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* External Link */}
                    <a
                      href={venture.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange hover:text-white transition-colors"
                    >
                      <span>Visit {venture.name} Website</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Note on Brand Architecture - Clean Text (Container pill removed) */}
          <div className="max-w-2xl mx-auto text-center pt-4">
            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              <strong className="text-gray-200 font-medium">Note on Brand Architecture:</strong> Dhee Foods operates as a standalone wholesome nutrition venture under D SAHAS Hub, distinct from personal leadership coaching.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

