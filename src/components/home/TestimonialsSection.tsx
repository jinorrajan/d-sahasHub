"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "@/config/achievements";

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);

  // Helper to get initials from author name (e.g. "Priya" -> "PR", "Ravi" -> "RA", "R. Sundararajan" -> "RS")
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
    "from-[#0D2135] to-[#1A3654] text-white",
  ];

  const totalPages = Math.ceil(testimonialsData.length / 2);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonialsData.slice(
    currentPage * 2,
    currentPage * 2 + 2
  );

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
                  Client Testimonials
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-gray-950 tracking-tight leading-[1.18]">
                What Clients Say About Their Transformation
              </h2>
            </div>

            {/* BLACK TRUST CARD WITH LEAVE REVIEW BUTTON */}
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
                    Verified client feedback
                  </p>
                </div>

                {/* Overlapping Letter Initials Avatars + 1.2k+ Pill */}
                <div className="flex items-center -space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#004A7F] to-[#0A2946] border-2 border-[#07131F] flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
                    PR
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#AE282E] to-[#6A161A] border-2 border-[#07131F] flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
                    RA
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F06321] to-[#8F370D] border-2 border-[#07131F] flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
                    NL
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
                <span>Share Your Experience</span>
              </Link>

            </div>
          </div>

          {/* RIGHT 2 COLUMNS: TESTIMONIAL CARDS (lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch flex-1">
              {currentTestimonials.map((item, idx) => {
                const initials = getInitials(item.author);
                const colorClass = avatarColors[idx % avatarColors.length];

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-[32px] bg-[#EFECE6]/90 border border-[#DDD7CD] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:bg-[#EAE5DC] hover:shadow-lg relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      {/* Quote Icon */}
                      <Quote className="w-8 h-8 text-brand-orange/60" />

                      {/* Quote Text */}
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
                        &quot;{item.quote}&quot;
                      </p>
                    </div>

                    {/* Author Row */}
                    <div className="pt-6 mt-6 border-t border-[#DDD7CD] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-xs font-bold shadow-md shrink-0`}
                        >
                          {initials}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-950">
                            {item.author}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {item.role}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-orange bg-white px-2.5 py-1 rounded-full border border-gray-200">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={prevPage}
                aria-label="Previous Testimonials"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors shadow-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-gray-500 font-medium">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                onClick={nextPage}
                aria-label="Next Testimonials"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors shadow-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
