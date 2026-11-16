"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Briefcase, Award, HeartPulse, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AccordionPanel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  image: string;
  href: string;
}

const panels: AccordionPanel[] = [
  {
    id: "leadership",
    title: "Tactical Leadership",
    subtitle: "From REACT to RESPOND",
    description: "Executive decision frameworks that preserve peace while navigating extreme business pressure.",
    badge: "Core Framework",
    icon: Compass,
    accentColor: "from-[#AE282E] to-[#8C1F24]",
    image: "/images/client/person/person-1.jpeg",
    href: "/expertise#tactical-leadership",
  },
  {
    id: "consulting",
    title: "Business Mentoring",
    subtitle: "25+ Years Enterprise Grit",
    description: "Streamlined operational SOPs, sales models, and growth roadmaps for founders and family enterprises.",
    badge: "Strategy & Scale",
    icon: Briefcase,
    accentColor: "from-[#004A7F] to-[#00365D]",
    image: "/images/client/meetings/meeting-1.jpeg",
    href: "/expertise#business-consulting",
  },
  {
    id: "skills",
    title: "Life-Skills Mastery",
    subtitle: "55h Marathon Record",
    description: "Self-awareness, assertive communication, and emotional resilience built through proven behavioral drills.",
    badge: "World Record Track",
    icon: Award,
    accentColor: "from-[#F06321] to-[#D45215]",
    image: "/images/client/certificates/cert-1.jpeg",
    href: "/expertise#life-skills",
  },
  {
    id: "wellness",
    title: "Holistic Life Balance",
    subtitle: "Certified Reiki & Vitality",
    description: "Somatic release, stress management, and daily restorative rituals so success does not cost your peace.",
    badge: "Energy & Calm",
    icon: HeartPulse,
    accentColor: "from-[#004A7F] to-[#AE282E]",
    image: "/images/client/person/person-3.jpeg",
    href: "/expertise#wellness-balancing",
  },
];

export function InteractiveAccordion() {
  const [activeId, setActiveId] = useState<string>("leadership");

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 h-[580px] md:h-[460px]">
      {panels.map((panel) => {
        const isActive = activeId === panel.id;
        const Icon = panel.icon;

        return (
          <motion.div
            key={panel.id}
            onClick={() => setActiveId(panel.id)}
            onMouseEnter={() => setActiveId(panel.id)}
            animate={{
              flex: isActive ? 3 : 1,
            }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className={cn(
              "relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300",
              "border border-white/20 shadow-card flex flex-col justify-end p-6",
              "group"
            )}
            style={{
              backgroundImage: `linear-gradient(to top, rgba(17, 24, 39, 0.92) 0%, rgba(17, 24, 39, 0.45) 50%, rgba(17, 24, 39, 0.15) 100%), url(${panel.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          >
            {/* Top Accent Icon & Badge */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md bg-gradient-to-br",
                  panel.accentColor
                )}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                {panel.badge}
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 text-white">
              <p className="text-xs font-medium text-brand-orange uppercase tracking-wider mb-1">
                {panel.subtitle}
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                {panel.title}
              </h3>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.35 }}
                  className="mt-3 pt-3 border-t border-white/15"
                >
                  <p className="text-sm text-gray-200 line-clamp-2 mb-4 leading-relaxed">
                    {panel.description}
                  </p>
                  <Link
                    href={panel.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-lg transition-colors border border-white/20"
                  >
                    <span>Explore Track</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

