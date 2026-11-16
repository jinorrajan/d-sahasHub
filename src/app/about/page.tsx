import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Briefcase,
  Languages,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Linkedin,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { ExecutiveJourneyTimeline } from "@/components/widgets/ExecutiveJourneyTimeline";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PerspectiveImpactCard } from "@/components/ui/PerspectiveImpactCard";
import { Meteors } from "@/components/ui/meteors";

export const metadata = {
  title: "About Dr. P. V. Devi Seshadri",
  description:
    "Learn about Dr. P. V. Devi Seshadri's 25+ years journey from IT infrastructure consulting to becoming a premier Tactical Leadership Management Coach, BYST Senior Mentor, and founder of D SAHAS Hub.",
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
            
            {/* Main Title matching Home page font styles */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-normal text-gray-950 tracking-tight leading-[1.12]">
              About Dr. Devi Seshadri
            </h1>

            {/* Paragraph Text with Our Authentic Client Content */}
            <div className="space-y-4 text-base sm:text-[17px] text-gray-600 leading-relaxed font-normal">
              <p>
                Bridging 25+ years of enterprise IT corporate discipline with deep human coaching to build resilient, deliberate business leaders where scale never costs personal and family peace.
              </p>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                For over 22 years, she worked across the competitive landscapes of IT infrastructure solutions consulting, enterprise hardware and software architecture, and corporate sales. Throughout those decades, she witnessed high-velocity leaders frequently derail not by lack of market opportunity, but by unmanaged reactive stress and communication breakdowns.
              </p>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Today, as Founder of D SAHAS Hub, Certified Life Coach (USA), BYST Senior Mentor, and World Record Trainer, she guides leaders to shift from instinctive <strong className="text-brand-crimson font-medium">REACT to deliberate RESPOND</strong>.
              </p>
            </div>

            {/* Verification Highlights - Clean Text + Icon (Background & Borders removed) */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#07131F]">
                <ShieldCheck className="w-4 h-4 text-brand-crimson shrink-0" />
                <span>25+ Years Cross-Industry Experience</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#07131F]">
                <Award className="w-4 h-4 text-brand-orange shrink-0" />
                <span>55h 40s World Record Trainer</span>
              </div>
            </div>

            {/* Brand Gradient Button with Angled Arrow (Consistent Book Now style) */}
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

      {/* 2. VERIFIED QUALIFICATIONS & PROFESSIONAL CERTIFICATIONS (MINDCO BENTO ROWS STYLE) */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-2 sm:px-4 space-y-10 sm:space-y-12">
        
        {/* SECTION HEADER: MATCHING "WHY CHOOSE US" / "ABOUT" HEADER FORMAT */}
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

        {/* 3 ACADEMIC & PROFESSIONAL FOUNDATION CARDS (DARK NAVY COLOR, TOP ICONS REMOVED) */}
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
                {/* 1. Aceternity Meteor Tail Effect */}
                <Meteors number={14} />

                {/* 2. Top Header Row: Title/SubRole (Left) & Status Badge (Right) - Top Icon Removed */}
                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-semibold text-white tracking-tight leading-snug">
                      {item.degree}
                    </h3>
                    <p className="text-xs text-gray-400 font-normal mt-0.5">
                      {item.subRole}
                    </p>
                  </div>

                  {/* Top Right Status Badge */}
                  <span className="text-[11px] sm:text-xs font-medium text-gray-300 bg-white/[0.06] border border-white/10 px-3 py-1 rounded-full whitespace-nowrap shrink-0 shadow-xs">
                    {item.badge}
                  </span>
                </div>

                {/* 3. Middle Body Paragraph: Editorial content from image 2 */}
                <div className="relative z-10 my-6 flex-1 flex items-center">
                  <p className="text-xs sm:text-[13.5px] text-gray-300/90 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* 4. Bottom Footer Row: Institution/Location (Left) & Action Buttons (Right) */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/[0.08] mt-auto">
                  <span className="text-xs sm:text-[13px] font-medium text-gray-400">
                    {item.institution}
                  </span>

                  {/* Social / Credential verification icon buttons matching image 1 */}
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href="https://www.linkedin.com/in/pvdeviseshadri"
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

                {/* 5. Subtle Ambient Corner Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-orange/10 transition-colors duration-500" />
              </div>
            );
          })}
        </div>

      </section>

      {/* 3. DEDICATED 25-YEAR EXECUTIVE TIMELINE (REPLACING THE DUPLICATE WHY-CHOOSE-US HOME SECTION) */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-2 sm:px-4">
        <ExecutiveJourneyTimeline />
      </section>

      {/* 4. EXACT HOME SCREEN TESTIMONIALS SECTION */}
      <TestimonialsSection />

    </div>
  );
}
