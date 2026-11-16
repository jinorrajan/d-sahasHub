"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "@/config/achievements";

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);

  // Helper to get initials from author name (e.g. "R. Sundararajan" -> "RS", "K. Meenakshi" -> "KM")
  const getInitials = (name: string) => {
    const cleaned = name.replace(/[^a-zA-Z\s]/g, "").trim();
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Luxury gradient colors for the letter avatars
  const avatarColors = [
    "from-[#004A7F] to-[#0A2946] text-white",
    "from-[#AE282E] to-[#6A161A] text-white",
    "from-[#F06321] to-[#8F370D] text-white",
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#F8F6F2]">
      {/* Same width matching Hero, About & Why Choose Us sections */}
      <div className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-2 sm:px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT COLUMN: PILL + BOLD TITLE + TRUST CALLOUT CARD (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div>
                <span className="kicker-text">
                  Testimonials
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-gray-950 tracking-tight leading-[1.18]">
                What Clients Say About Their Transformation
              </h2>
            </div>

            {/* MINDCO EXACT BLACK TRUST CARD WITH LEAVE REVIEW BUTTON */}
            <div className="p-6 sm:p-7 rounded-[28px] bg-[#07131F] text-white space-y-6 shadow-xl border border-white/5">
              
              <div className="flex items-center justify-between gap-4">
                {/* 5 Stars + Trusted Text */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1 text-brand-orange">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 font-medium">
                    Trusted by clients worldwide
                  </p>
                </div>

                {/* Overlapping Letter Initials Avatars + 1.2k+ Pill */}
                <div className="flex items-center -space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#004A7F] to-[#0A2946] border-2 border-[#07131F] flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
                    RS
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#AE282E] to-[#6A161A] border-2 border-[#07131F] flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
                    KM
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F06321] to-[#8F370D] border-2 border-[#07131F] flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
                    AV
                  </div>
                  <div className="h-8 px-2.5 rounded-full bg-[#C0A385] border-2 border-[#07131F] flex items-center justify-center text-[10px] font-bold text-[#07131F] shadow-sm">
                    1.2k+
                  </div>
                </div>
              </div>

              {/* Tan/Gold CTA Button: Leave A Review */}
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-2xl bg-[#C0A385] hover:bg-[#B39373] text-[#07131F] font-semibold text-sm transition-all shadow-md active:scale-[0.99]"
              >
                <span>Leave A Review</span>
              </Link>

            </div>
          </div>

          {/* RIGHT 2 COLUMNS: MINDCO TESTIMONIAL CARDS (lg:col-span-8) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {testimonialsData.slice(0, 2).map((item, idx) => {
              const initials = getInitials(item.author);
              const colorClass = avatarColors[idx % avatarColors.length];

              return (
                <div
                  key={item.id}
                  className="rounded-[32px] bg-[#EFECE6]/90 border border-[#DDD7CD] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:bg-[#EAE5DC] hover:shadow-lg relative overflow-hidden"
                >
                  <div className="space-y-6">
                    {/* TOP AUTHOR ROW: LETTER INITIALS AVATAR + NAME & ROLE */}
                    <div className="flex items-center gap-3.5">
                      {/* Letter Avatar (No image, only letter) */}
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorClass} shadow-md flex items-center justify-center text-sm font-bold tracking-wider shrink-0 border border-white/20`}>
                        {initials}
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-display text-base font-semibold text-[#07131F] tracking-tight truncate">
                          {item.author}
                        </h4>
                        <p className="text-xs text-[#6B7885] truncate">
                          {item.role}, {item.company}
                        </p>
                      </div>
                    </div>

                    {/* STARS & RATING ROW (4.9/5.0) */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1 text-[#07131F]">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} className="w-3.5 h-3.5 fill-[#07131F] text-[#07131F]" />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-[#07131F]">
                        4.9/5.0
                      </span>
                    </div>

                    {/* GIANT SUBTLE WATERMARK QUOTE ICON */}
                    <div className="relative py-2">
                      <div className="opacity-[0.08] pointer-events-none select-none">
                        <Quote className="w-16 h-16 text-[#07131F]" />
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM QUOTE TEXT */}
                  <div className="pt-4">
                    <p className="text-base sm:text-[17px] text-[#222E3A] font-normal leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

