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
    id: "tailored-coaching",
    title: "Tailored Coaching",
    description:
      "Our coaching sessions are customized to meet your specific needs and goals, whether individual or corporate.",
    image: "/images/client/person/circle-methodology.jpg",
  },
  {
    id: "holistic-methodology",
    title: "Holistic Methodology",
    description:
      "We integrate tactical leadership, mindfulness, and practical strategies for comprehensive, sustainable support.",
    image: "/images/client/person/circle-roadmap.jpg",
  },
  {
    id: "experienced-coaches",
    title: "Experienced Mentorship",
    description:
      "Our team of experienced coaches brings 25+ years of real-world expertise across diverse business domains.",
    image: "/images/client/person/circle-team.jpg",
  },
  {
    id: "proven-results",
    title: "Proven Results",
    description:
      "Our clients have achieved remarkable, measurable improvements in their personal and professional lives.",
    image: "/images/client/person/devi-strategy-2.jpg",
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
              Proven Guidance for <br className="hidden sm:inline" />
              Lasting Transformation
            </h2>
          </div>

          {/* Right Column: Sentence Body Description */}
          <div className="lg:w-[26%] text-left lg:text-right">
            <p className="text-sm sm:text-[15px] text-gray-600 font-normal leading-relaxed">
              Every session is customized, practical, and grounded in tactical execution and holistic emotional health.
            </p>
          </div>
        </div>

        {/* 4 STACKED HORIZONTAL BENTO ROWS - EXACT REFERENCE MINIMALIST PORCELAIN LUXURY */}
        <div className="space-y-4 sm:space-y-5">
          {whyChooseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group rounded-[28px] sm:rounded-[36px] bg-[#EFECE6]/85 border border-[#E3DFD7] px-8 sm:px-12 lg:px-14 py-7 sm:py-8 grid grid-cols-1 md:grid-cols-12 items-center gap-6 sm:gap-8 transition-colors duration-200 hover:bg-[#EAE6DD] shadow-2xs hover:shadow-md"
            >
              {/* Left Column: Title (md:col-span-4) */}
              <div className="md:col-span-4 flex items-center">
                <h3 className="font-display text-xl sm:text-2xl font-normal text-gray-950 tracking-tight leading-snug group-hover:text-brand-crimson transition-colors duration-200">
                  {item.title}
                </h3>
              </div>

              {/* Middle Column: 2-Line Subtitle Description (md:col-span-5) */}
              <div className="md:col-span-5 flex items-center">
                <p className="text-sm sm:text-[15px] text-gray-600 font-normal leading-relaxed max-w-[440px]">
                  {item.description}
                </p>
              </div>

              {/* Right Column: Borderless Monochromatic Circular Showcase (md:col-span-3) */}
              <div className="md:col-span-3 flex justify-start md:justify-end items-center">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md flex-shrink-0 bg-[#E5DFD4] group-hover:scale-105 group-hover:shadow-xl transition-all duration-300">
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
