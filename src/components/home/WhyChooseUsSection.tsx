"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const whyChooseItems: WhyChooseItem[] = [
  {
    id: "purpose-driven",
    title: "Purpose-Driven Methodology",
    description: "My approach starts with your core values, strengths,\nand long-term business vision.",
    image: "/images/client/person/circle-methodology.jpg",
  },
  {
    id: "actionable-roadmaps",
    title: "Clear, Actionable Roadmaps",
    description: "You'll receive a structured step-by-step roadmap\nthat transforms operational confusion into clarity.",
    image: "/images/client/person/circle-roadmap.jpg",
  },
  {
    id: "alignment-framework",
    title: "Proven Alignment Framework",
    description: "This framework combines executive IT discipline\nand coaching to help you master deliberate response.",
    image: "/images/client/person/circle-team.jpg",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#F8F6F2]">
      {/* Same width as Hero & About containers (w-[95%] sm:w-[94%] max-w-[1890px]) with small side padding */}
      <div className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-2 sm:px-4 space-y-12 sm:space-y-16">
        
        {/* TOP HEADER ROW: EXACT REFERENCE LAYOUT (LEFT KICKER, CENTER TITLE, RIGHT PARAGRAPH) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 pb-2">
          {/* Left Column: Kicker */}
          <div className="lg:w-[22%] flex-shrink-0">
            <span className="kicker-text-crimson">
              Why Choose Us
            </span>
          </div>

          {/* Middle Column: Exactly Centered Heading */}
          <div className="lg:w-[48%] text-left lg:text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-normal text-gray-950 tracking-tight leading-[1.18]">
              A Coaching Experience for <br className="hidden sm:inline" />
              Lasting Alignment
            </h2>
          </div>

          {/* Right Column: Sentence Body Description */}
          <div className="lg:w-[26%] text-left lg:text-right">
            <p className="text-sm sm:text-[15px] text-gray-600 font-normal leading-relaxed">
              Every session is tailored, practical, and deeply connected to the life you want to build.
            </p>
          </div>
        </div>

        {/* 3 STACKED HORIZONTAL BENTO ROWS - EXACT REFERENCE MINIMALIST PORCELAIN LUXURY */}
        <div className="space-y-4 sm:space-y-5">
          {whyChooseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group rounded-[28px] sm:rounded-[36px] bg-[#EFECE6]/85 border border-[#E3DFD7] px-8 sm:px-12 lg:px-14 py-7 sm:py-9 grid grid-cols-1 md:grid-cols-12 items-center gap-6 sm:gap-8 transition-colors duration-200 hover:bg-[#EAE6DD] shadow-2xs hover:shadow-md"
            >
              {/* Left Column: Title (md:col-span-4) */}
              <div className="md:col-span-4 flex items-center">
                <h3 className="font-display text-xl sm:text-2xl font-normal text-gray-950 tracking-tight leading-snug group-hover:text-brand-crimson transition-colors duration-200">
                  {item.title}
                </h3>
              </div>

              {/* Middle Column: 2-Line Subtitle Description (md:col-span-5) */}
              <div className="md:col-span-5 flex items-center">
                <p className="text-sm sm:text-[15px] text-gray-600 font-normal leading-relaxed max-w-[420px] whitespace-pre-line">
                  {item.description}
                </p>
              </div>

              {/* Right Column: Borderless Monochromatic Circular Showcase (md:col-span-3) */}
              <div className="md:col-span-3 flex justify-start md:justify-end items-center">
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden shadow-md flex-shrink-0 bg-[#E5DFD4] group-hover:scale-105 group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center filter grayscale contrast-[1.08] brightness-[0.98] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

