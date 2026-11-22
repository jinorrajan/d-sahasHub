import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Linkedin,
  Compass,
  HeartHandshake,
  Sparkles,
  Target,
  Eye,
  Quote,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { ExecutiveJourneyTimeline } from "@/components/widgets/ExecutiveJourneyTimeline";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PerspectiveImpactCard } from "@/components/ui/PerspectiveImpactCard";
import { Meteors } from "@/components/ui/meteors";

export const metadata = {
  title: "About Dr. P. V. Devi Seshadri",
  description:
    "Learn about Dr. P. V. Devi Seshadri — Strategic Leadership & Management Coach, Emotional Intelligence Expert, Holistic Wellness Coach, and MSME Business Growth Strategist.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-24 bg-[#F8F6F2]">
      
      {/* 1. HEROIC ABOUT SECTION (PERFECT BALANCED BREATHING ROOM) */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT 6 COLS: 3D PERSPECTIVE NOTCHED IMPACT CARD */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="w-full max-w-[520px]">
              <PerspectiveImpactCard
                imageSrc="/images/client/person/devi-cutout.png"
                imageAlt="Dr. P. V. Devi Seshadri"
                statNumber="25+"
                statLabel="Years of Impact"
              />
            </div>
          </div>

          {/* RIGHT 6 COLS: EDITORIAL CONTENT (COMFORTABLE BREATHING ROOM) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 pl-0 lg:pl-4">
            
            <div className="space-y-2">
              <span className="kicker-text-crimson">
                Internationally Certified Professional Coach & Trainer
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-normal text-gray-950 tracking-tight leading-[1.12]">
                Dr. P. V. Devi Seshadri
              </h1>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Strategic Leadership & Management Coach • Emotional Intelligence Expert • Holistic Wellness Coach • MSME Business Growth Strategist
              </p>
            </div>

            {/* Paragraph Text with Verified Client Biography */}
            <div className="space-y-4 text-base sm:text-[16.5px] text-gray-600 leading-relaxed font-normal">
              <p>
                Dr. Devi Seshadri is an internationally certified Professional Coach, Leadership Trainer, Emotional Counsellor, and Holistic Wellness Coach dedicated to transforming individuals, entrepreneurs, families, and organizations through integrated personal and professional development.
              </p>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                An engineer by qualification with an MBA and over two decades of experience in Information Technology, Sales, Consulting, Marketing, and Business Development, she combines strategic thinking with emotional intelligence to help people build meaningful lives, resilient leadership, and sustainable success.
              </p>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                As the Founder of <strong className="text-brand-navy font-semibold">dSkill</strong>, <strong className="text-brand-navy font-semibold">Live Ease</strong>, and <strong className="text-brand-navy font-semibold">Dhee Foods</strong>, Dr. Devi has developed innovative coaching frameworks blending leadership development, emotional well-being, financial awareness, business strategy, mindfulness, and holistic wellness.
              </p>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Alongside her coaching practice, Dr. Devi is an accredited <strong className="text-brand-crimson font-medium">LIC Financial Advisor</strong>, assisting families and MSME owners in building financial security, key-person risk mitigation, and generational prosperity.
              </p>
            </div>

            {/* Verification Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#07131F]">
                <ShieldCheck className="w-4 h-4 text-brand-crimson shrink-0" />
                <span>25+ Years Corporate & Consulting Experience</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#07131F]">
                <Award className="w-4 h-4 text-brand-orange shrink-0" />
                <span>55h 40s World Record Marathon Participant</span>
              </div>
            </div>

            {/* Brand Gradient Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#AE282E] to-[#F06321] hover:from-[#931f25] hover:to-[#d85518] shadow-md shadow-red-950/20 transition-all duration-200 tracking-wide uppercase group"
              >
                <span>Connect With Dr. Devi</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 2. VISION & MISSION CARDS + CORE BELIEF QUOTE */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-2 sm:px-4 space-y-8">
        
        {/* Core Belief Quote Callout */}
        <div className="rounded-[32px] bg-[#07131F] border border-[#004A7F]/40 p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-4xl mx-auto space-y-4 relative z-10">
            <Quote className="w-10 h-10 text-brand-orange/60 mx-auto" />
            <p className="font-display text-xl sm:text-3xl font-light leading-relaxed tracking-tight">
              &quot;When the mind is empowered, leadership becomes purposeful, relationships become meaningful, businesses become sustainable, and life becomes fulfilling.&quot;
            </p>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-orange">
              — Dr. P. V. Devi Seshadri • Founder, dSkill & D SAHAS Hub
            </p>
          </div>
          <div className="absolute top-0 right-1/4 w-[500px] h-[250px] bg-[#004A7F]/20 blur-[130px] pointer-events-none rounded-full" />
        </div>

        {/* Vision & Mission Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Vision Card */}
          <div className="rounded-[32px] bg-white border border-gray-200/90 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-crimson/10 border border-brand-crimson/20 flex items-center justify-center text-brand-crimson">
                <Eye className="w-6 h-6" />
              </div>
              <span className="kicker-text-crimson">Our Vision</span>
              <h2 className="font-display text-2xl sm:text-3xl font-light text-brand-navy">
                Empowering Minds, Building Ethical Communities
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                {siteConfig.vision}
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-brand-crimson uppercase tracking-wider">
              <span>Clarity • Resilience • Ethical Leadership</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="rounded-[32px] bg-white border border-gray-200/90 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                <Target className="w-6 h-6" />
              </div>
              <span className="kicker-text">Our Mission</span>
              <h2 className="font-display text-2xl sm:text-3xl font-light text-brand-navy">
                Guiding Transformation Beyond Limitations
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                {siteConfig.mission}
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-brand-orange uppercase tracking-wider">
              <span>Mindset • Strategy • Purposeful Living</span>
            </div>
          </div>

        </div>

      </section>

      {/* 3. VERIFIED QUALIFICATIONS & PROFESSIONAL CERTIFICATIONS */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-2 sm:px-4 space-y-10 sm:space-y-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div>
              <span className="kicker-text">
                Academic & Accreditations
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-gray-950 tracking-tight leading-[1.2]">
              Academic & Professional Foundations
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base text-gray-600 leading-relaxed font-normal">
              Structured analytical engineering rigor combined with premier international business management and accredited coaching frameworks.
            </p>
          </div>
        </div>

        {/* 3 ACADEMIC & PROFESSIONAL FOUNDATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {[
            {
              id: "engineering",
              degree: "Engineering (ECE)",
              subRole: "Systems Engineering",
              institution: "Anna University • 1992",
              description:
                "Rigorous analytical and systems-thinking foundation applied to enterprise diagnostics, operational logic, and precision consulting.",
              badge: "Systems Thinking",
            },
            {
              id: "mba",
              degree: "MBA (Business & Marketing)",
              subRole: "Executive Postgraduate",
              institution: "IIBMS Post Graduate",
              description:
                "Strategic management, brand architecture, enterprise sales models, go-to-market governance, and cross-functional leadership.",
              badge: "Corporate Strategy",
            },
            {
              id: "coaching",
              degree: "Certified Executive Life Coach",
              subRole: "Global Accreditation",
              institution: "Carlton Institute, USA",
              description:
                "Accredited behavioral reframing, cognitive diagnostics, stress neutralization drills, and holistic executive alignment.",
              badge: "Global Certification",
            },
          ].map((item) => {
            return (
              <div
                key={item.id}
                className="relative rounded-[24px] sm:rounded-[26px] bg-[#07131F] border border-[#004A7F]/40 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/20 group hover:border-[#004A7F]/70 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 min-h-[300px]"
              >
                <Meteors number={14} />

                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-semibold text-white tracking-tight leading-snug">
                      {item.degree}
                    </h3>
                    <p className="text-xs text-gray-400 font-normal mt-0.5">
                      {item.subRole}
                    </p>
                  </div>

                  <span className="text-[11px] sm:text-xs font-medium text-gray-300 bg-white/[0.06] border border-white/10 px-3 py-1 rounded-full whitespace-nowrap shrink-0 shadow-xs">
                    {item.badge}
                  </span>
                </div>

                <div className="relative z-10 my-6 flex-1 flex items-center">
                  <p className="text-xs sm:text-[13.5px] text-gray-300/90 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/[0.08] mt-auto">
                  <span className="text-xs sm:text-[13px] font-medium text-gray-400">
                    {item.institution}
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href="https://www.linkedin.com/in/devi-seshadri/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile verification"
                      className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <Link
                      href="/achievements"
                      aria-label="View verifiable achievements"
                      className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-orange/10 transition-colors duration-500" />
              </div>
            );
          })}
        </div>

      </section>

      {/* 4. DEDICATED 25-YEAR EXECUTIVE TIMELINE */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-2 sm:px-4">
        <ExecutiveJourneyTimeline />
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <TestimonialsSection />

    </div>
  );
}
