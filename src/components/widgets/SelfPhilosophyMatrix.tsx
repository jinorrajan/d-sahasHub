"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Eye, Brain, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Pillar {
  id: string;
  letter: string;
  title: string;
  headline: string;
  description: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgTint: string;
}

const pillars: Pillar[] = [
  {
    id: "care",
    letter: "S",
    title: "Self Care",
    headline: "The Foundation of Sustained Leadership",
    description:
      "A leader cannot pour from an empty vessel. We establish non-negotiable personal boundaries, nervous system recovery, and restorative daily rituals so mental exhaustion never compromises decision quality.",
    bullets: [
      "Physical and mental recovery rituals",
      "Executive boundary protection from reactive firefighting",
      "Stress containment strategies during high-stakes execution",
    ],
    icon: Heart,
    color: "#AE282E",
    bgTint: "hover:border-[#AE282E]/40 group-hover:bg-[#AE282E]/5",
  },
  {
    id: "healing",
    letter: "E",
    title: "Self Healing",
    headline: "Neutralizing Subconscious Stress Loops",
    description:
      "Dissolving accumulated business fatigue, workplace tension, and unresolved conflicts through certified holistic balance and intentional emotional decluttering.",
    bullets: [
      "Releasing chronic stress somatic holding patterns",
      "Reconciling personal aspirations with family expectations",
      "Restoring inner equanimity before executive confrontations",
    ],
    icon: Sparkles,
    color: "#004A7F",
    bgTint: "hover:border-[#004A7F]/40 group-hover:bg-[#004A7F]/5",
  },
  {
    id: "awareness",
    letter: "L",
    title: "Self Awareness",
    headline: "Recognizing Blind Spots Before They Derail Growth",
    description:
      "Deep introspection into your cognitive triggers. Moving away from knee-jerk impulses and identifying the exact moments when ego or panic threaten strategic clarity.",
    bullets: [
      "Identification of reactive behavioural blindspots",
      "Clear differentiation between urgency and importance",
      "Real-time situational awareness during team conflict",
    ],
    icon: Eye,
    color: "#F06321",
    bgTint: "hover:border-[#F06321]/40 group-hover:bg-[#F06321]/5",
  },
  {
    id: "understanding",
    letter: "F",
    title: "Self Understanding",
    headline: "Moving from Instinctive REACT to Deliberate RESPOND",
    description:
      "The culmination of the SELF framework. When you thoroughly understand your values, strengths, and limits, you lead with calm confidence where business stress never costs family peace.",
    bullets: [
      "Mastery of the REACT-to-RESPOND cognitive transition",
      "Empathetic, authoritative communication across generations",
      "Alignment of business growth with enduring family harmony",
    ],
    icon: Brain,
    color: "#AE282E",
    bgTint: "hover:border-[#AE282E]/40 group-hover:bg-[#AE282E]/5",
  },
];

export function SelfPhilosophyMatrix() {
  const [selectedId, setSelectedId] = useState<string>("care");
  const activePillar = pillars.find((p) => p.id === selectedId) || pillars[0];

  return (
    <div className="w-full">
      {/* 4 Quadrants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => {
          const isSelected = selectedId === pillar.id;
          const Icon = pillar.icon;

          return (
            <motion.div
              key={pillar.id}
              onClick={() => setSelectedId(pillar.id)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "group relative p-6 rounded-2xl cursor-pointer transition-all duration-300",
                "bg-white border text-left",
                isSelected
                  ? "border-brand-crimson ring-2 ring-brand-crimson/20 shadow-lg"
                  : "border-gray-200/80 shadow-soft hover:shadow-md"
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-display text-4xl font-black transition-colors"
                  style={{ color: pillar.color }}
                >
                  {pillar.letter}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${pillar.color}15`,
                    color: pillar.color,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <h4 className="font-display text-lg font-bold text-gray-900 group-hover:text-brand-crimson transition-colors">
                {pillar.title}
              </h4>
              <p className="mt-1 text-xs text-gray-500 font-medium">
                {pillar.headline}
              </p>

              {/* Progress Line */}
              <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: isSelected ? "100%" : "25%",
                    backgroundColor: pillar.color,
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Active Detail Showcase */}
      <motion.div
        key={activePillar.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-8 p-8 rounded-3xl bg-white border border-gray-200/90 shadow-card"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-sand text-brand-crimson border border-brand-crimson/20 mb-3">
              <span>Pillar Highlight</span>
              <span>•</span>
              <span>The S.E.L.F. Paradigm</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
              {activePillar.title}: {activePillar.headline}
            </h3>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              {activePillar.description}
            </p>
          </div>

          <div className="lg:col-span-5 bg-brand-sand/70 rounded-2xl p-6 border border-gray-200/70">
            <h5 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-4">
              Key Focus Areas & Impact:
            </h5>
            <ul className="space-y-3">
              {activePillar.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: activePillar.color }}
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
