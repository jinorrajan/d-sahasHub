"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MoveHorizontal } from "lucide-react";
import { motion, PanInfo } from "framer-motion";

const recordStats = [
  { value: "55h 40s", label: "CONTINUOUS WEBINAR" },
  { value: "4 Bodies", label: "GLOBAL RECORD CITATIONS" },
  { value: "3,000+", label: "YOUTH & LEADERS REACHED" },
];

const certThumbnails = [
  {
    id: 1,
    title: "Official World Record Citation",
    src: "/images/client/certificates/cert-1.jpeg",
    issuer: "Elite World Records & Asian Records Academy",
  },
  {
    id: 2,
    title: "Asian Book of Records Honor",
    src: "/images/client/certificates/cert-2.jpeg",
    issuer: "Asian Book of Records",
  },
  {
    id: 3,
    title: "India Records Academy Citation",
    src: "/images/client/certificates/cert-3.jpeg",
    issuer: "India Records Academy",
  },
  {
    id: 4,
    title: "Tamilian Book of Records Recognition",
    src: "/images/client/certificates/cert-4.jpeg",
    issuer: "Tamilian Book of Records",
  },
];

export function WorldRecordBannerSection() {
  const [cards, setCards] = useState(certThumbnails);

  // Auto-flip every 5 seconds like Aceternity Card Stack
  useEffect(() => {
    const interval = setInterval(() => {
      cycleCard();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const cycleCard = () => {
    setCards((prev) => {
      const arr = [...prev];
      const last = arr.pop();
      if (last) arr.unshift(last);
      return arr;
    });
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    // If swiped horizontally or vertically with enough momentum or distance
    if (
      Math.abs(info.offset.x) > 60 ||
      Math.abs(info.offset.y) > 60 ||
      Math.abs(info.velocity.x) > 400 ||
      Math.abs(info.velocity.y) > 400
    ) {
      cycleCard();
    }
  };

  const CARD_OFFSET = 16;
  const SCALE_FACTOR = 0.045;

  return (
    <section className="relative w-full py-6 sm:py-10 bg-[#F8F6F2]">
      <div className="relative z-10 w-[95%] sm:w-[94%] max-w-[1890px] mx-auto">
        {/* REFINED EDITORIAL SHOWCASE */}
        <div className="relative rounded-[32px] sm:rounded-[44px] bg-white border border-[#E5E0D6] shadow-[0_16px_50px_-20px_rgba(7,19,31,0.06)] p-7 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* LEFT 7 COLS: CONFIDENT EDITORIAL STORY & AUTHENTIC METRICS */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                {/* Clean Classical Kicker Text (No pill, no icon/logo) */}
                <div>
                  <span className="kicker-text-crimson">
                    Documented World Record Marathon
                  </span>
                </div>

                <p className="text-base sm:text-lg text-[#556370] leading-relaxed max-w-2xl font-normal">
                  Conducted by <strong className="font-medium text-[#07131F]">Dr. P. V. Devi Seshadri</strong>, recognized by Elite World Records, Asian Records Academy, India Records Academy, and Tamilian Book of Records for an extraordinary marathon training feat.
                </p>
              </div>

              {/* 3 REAL METRIC PILLARS */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-2 border-t border-[#EAE5DC]">
                {recordStats.map((stat, i) => (
                  <div key={i} className="flex flex-col text-left">
                    <p className="font-display text-2xl sm:text-3xl lg:text-[42px] font-light text-gray-950 tracking-tight leading-none">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[10px] sm:text-xs font-semibold text-gray-500 tracking-wider uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* 2. BUTTON WITH EXACT BOOK NOW CORNER RADIUS (rounded-xl) AND GRADIENT */}
              <div className="pt-2">
                <Link
                  href="/achievements"
                  className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#AE282E] to-[#F06321] hover:from-[#931f25] hover:to-[#d85518] shadow-md shadow-red-950/20 transition-all duration-200 uppercase tracking-wider"
                >
                  <span>View All Record Certificates & Proof</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 3. RIGHT 5 COLS: ACETERNITY CARD STACK WITH FULL IMAGE */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center pt-8 lg:pt-0">
              <div className="relative w-full max-w-[460px] h-[330px] sm:h-[350px] flex items-center justify-center">
                {cards.map((cert, index) => {
                  const isTop = index === 0;

                  return (
                    <motion.div
                      key={cert.id}
                      drag={isTop ? true : false}
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={0.65}
                      onDragEnd={handleDragEnd}
                      onClick={() => {
                        if (isTop) cycleCard();
                      }}
                      className="absolute w-full h-[300px] sm:h-[320px] rounded-2xl sm:rounded-3xl bg-white border border-[#DDD7CC] shadow-[0_20px_50px_-15px_rgba(7,19,31,0.18)] cursor-grab active:cursor-grabbing select-none overflow-hidden"
                      style={{
                        transformOrigin: "bottom center",
                      }}
                      animate={{
                        top: index * -CARD_OFFSET,
                        scale: 1 - index * SCALE_FACTOR,
                        zIndex: cards.length - index,
                        opacity: index > 3 ? 0 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      {/* Full Bleed Image with Fill & Cover - zero padding */}
                      <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white flex items-center justify-center">
                        <Image
                          src={cert.src}
                          alt={cert.title}
                          fill
                          className="object-cover object-center pointer-events-none"
                          sizes="(max-width: 768px) 100vw, 460px"
                          priority={index === 0}
                        />

                        {/* Subtle Floating Swipe Icon Pill (Only on top card) */}
                        {isTop && (
                          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/90 shadow-md flex items-center justify-center text-gray-800 pointer-events-none z-10">
                            <MoveHorizontal className="w-4 h-4 text-brand-orange animate-pulse" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
