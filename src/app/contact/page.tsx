"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Calendar,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { FaqAccordion } from "@/components/widgets/FaqAccordion";
import { AceternityContactSection } from "@/components/widgets/AceternityContactSection";

const consultationTracks = [
  {
    id: "leadership",
    title: "Executive & Tactical Leadership",
    vertical: "DeeSkill",
    tagline: "For Founders, CXOs & Family Business Leaders",
    desc: "1:1 coaching to conquer emotional triggers, eliminate operational bottlenecks, and transition from reactive firefighting to tactical response.",
  },
  {
    id: "business-mentoring",
    title: "Business Mentoring & Scale-Up",
    vertical: "Consulting",
    tagline: "Strategy, Succession & Operational Clarity",
    desc: "Board-level facilitation for family businesses, MSMEs, and high-growth leadership teams navigating multi-generational transition.",
  },
  {
    id: "wellness",
    title: "Life-Skills & Inner Balance",
    vertical: "LiveEase",
    tagline: "Emotional Regulation & Holistic Vitality",
    desc: "Mindfulness, stress-resilience, and Reiki wellness pathways tailored for high-intensity professionals.",
  },
  {
    id: "speaking",
    title: "Keynotes & Corporate Workshops",
    vertical: "Keynotes",
    tagline: "Record-Holding Global Speaker",
    desc: "Transformational summits, leadership offsites, and structured institutional workshops with world-record pedigree.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    track: "Executive & Tactical Leadership (DeeSkill)",
    mode: "Virtual (Global Video Call)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5] text-gray-900 selection:bg-brand-crimson/15">
      {/* 1. Header (Editorial, Framer Mindco Style) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="kicker-text">
              Confidential Consultation Desk
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light text-brand-navy tracking-tight leading-[1.12]">
            Start a purposeful conversation with{" "}
            <span className="font-normal text-brand-crimson">
              Dr. P. V. Devi Seshadri
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
            Whether you seek high-stakes tactical leadership coaching, family business governance, or enterprise workshops, connect directly with our executive office.
          </p>
        </div>
      </section>

      {/* 2. Main Executive Contact Section (Aceternity UI Layout) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <AceternityContactSection />
      </section>

      {/* 3. Consultation Tracks (Editorial Cards for clear UX context) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-2xl mb-10">
          <div className="mb-2">
            <span className="kicker-text">
              Engagement Programs
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-light text-brand-navy">
            Choose the engagement designed for your growth stage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultationTracks.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-soft flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-crimson block mb-2">
                  {t.vertical}
                </span>
                <h3 className="font-display text-lg font-normal text-brand-navy mb-1.5">
                  {t.title}
                </h3>
                <p className="text-xs font-medium text-gray-500 mb-3">
                  {t.tagline}
                </p>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  {t.desc}
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      track: `${t.title} (${t.vertical})`,
                    }));
                    window.scrollTo({ top: 350, behavior: "smooth" });
                  }}
                  className="text-xs font-semibold text-brand-crimson hover:text-brand-orange transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Select Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Frequently Asked Questions (Mindco Editorial Accordion) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="mb-2">
            <span className="kicker-text">
              Clarity & FAQs
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-navy">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-gray-600 font-light">
            Direct clarity on confidentiality, session structure, and verifiable credentials.
          </p>
        </div>

        <FaqAccordion />
      </section>
    </div>
  );
}
