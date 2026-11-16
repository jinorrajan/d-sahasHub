"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

interface CoachPanel {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
}

const coaches: CoachPanel[] = [
  {
    id: "leadership",
    badge: "Core Framework",
    title: "Tactical Leadership",
    subtitle: "From REACT to RESPOND",
    description: "Executive decision frameworks that preserve peace while navigating extreme business pressure.",
    image: "/images/client/person/person-1.jpeg",
    href: "/expertise#tactical-leadership",
  },
  {
    id: "consulting",
    badge: "Strategy & Scale",
    title: "Business Mentoring",
    subtitle: "25+ Years Enterprise Grit",
    description: "Streamlined operational SOPs, sales models, and growth roadmaps for founders and family enterprises.",
    image: "/images/client/meetings/meeting-1.jpeg",
    href: "/expertise#business-consulting",
  },
  {
    id: "skills",
    badge: "World Record Track",
    title: "Life-Skills Mastery",
    subtitle: "55h Marathon Record",
    description: "Self-awareness, assertive communication, and emotional resilience built through proven behavioral drills.",
    image: "/images/client/certificates/cert-1.jpeg",
    href: "/expertise#life-skills",
  },
  {
    id: "wellness",
    badge: "Energy & Calm",
    title: "Holistic Life Balance",
    subtitle: "Certified Reiki & Vitality",
    description: "Somatic release, stress management, and daily restorative rituals so success does not cost your peace.",
    image: "/images/client/person/person-3.jpeg",
    href: "/expertise#wellness-balancing",
  },
];

export function CoachAccordionSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#F8F6F2]">
      {/* Same width as other Mindco sections (w-[95%] sm:w-[94%] max-w-[1890px]) */}
      <div className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-2 sm:px-4 space-y-12 sm:space-y-16">
        
        {/* TOP HEADER: PILL + HEADLINE (LEFT) & VIEW ALL TRACKS BUTTON (RIGHT) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div>
              <span className="kicker-text-crimson">
                Coaching Domains
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 tracking-tight leading-[1.2]">
              Core Areas of Expertise
            </h2>
          </div>

          <div>
            <Link
              href="/expertise"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#AE282E] to-[#F06321] hover:from-[#931f25] hover:to-[#d85518] shadow-md shadow-red-950/20 transition-all duration-200 uppercase tracking-wider"
            >
              <span>View All 5 Tracks</span>
            </Link>
          </div>
        </div>

        {/* CSS FLEXBOX SMOOTH GPU ACCORDION (RESPONSIVE STACK ON MOBILE, ACCORDION ON TABLET/DESKTOP) */}
        <div className="w-full flex flex-col md:flex-row min-h-[920px] md:min-h-0 md:h-[580px] lg:h-[660px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl bg-black">
          {coaches.map((coach) => {
            const isHovered = hoveredId === coach.id;

            return (
              <Link
                key={coach.id}
                href={coach.href}
                onMouseEnter={() => setHoveredId(coach.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative h-[230px] md:h-full transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden ${
                  hoveredId === null
                    ? "md:flex-1"
                    : isHovered
                    ? "md:flex-[2.4]"
                    : "md:flex-[0.7]"
                }`}
                style={{ willChange: "flex" }}
              >
                {/* Background Image (Original Client Photos) */}
                <Image
                  src={coach.image}
                  alt={coach.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isHovered
                      ? "bg-gradient-to-t from-black/95 via-black/50 to-black/20 opacity-100"
                      : "bg-black/40 md:bg-black/35 hover:bg-black/50 opacity-90 md:opacity-80"
                  }`}
                />

                {/* Normal State Bottom Title (shows on mobile and when not hovered on desktop) */}
                <div
                  className={`absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 transition-opacity duration-300 ${
                    isHovered ? "opacity-100 md:opacity-0 md:pointer-events-none" : "opacity-100"
                  }`}
                >
                  <span className="text-[10px] sm:text-[11px] font-semibold text-brand-orange uppercase tracking-wider block mb-1">
                    {coach.badge}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md">
                    {coach.title}
                  </h3>
                </div>

                {/* Hover State: Expanded Plus Icon + Full Original Details (Active on desktop hover) */}
                <div
                  className={`hidden md:block absolute bottom-8 left-8 right-8 z-10 transition-all duration-500 ${
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full border border-white/40 bg-black/40 backdrop-blur-md flex items-center justify-center text-white mb-3 shadow-lg">
                    <Plus className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-1">
                    {coach.badge} • {coach.subtitle}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-white tracking-tight drop-shadow-md">
                    {coach.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed mt-2 max-w-md drop-shadow">
                    {coach.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

