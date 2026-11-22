import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Briefcase,
  Award,
  HeartPulse,
  Users,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Play,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Building,
  GraduationCap,
  Heart,
  Users2,
  Smile,
} from "lucide-react";
import { expertiseData, classifiedServices } from "@/config/expertise";

export const metadata = {
  title: "Expertise & Coaching Services | Dr. P. V. Devi Seshadri",
  description:
    "Explore the comprehensive counseling and coaching services by Dr. P. V. Devi Seshadri — Business Owners & MSMEs, Workplace Culture, Student Clarity, Women's Empowerment, Relationships, and Parenting.",
};

const serviceCategoryIcons: Record<string, React.ReactNode> = {
  "business-owners": <Building className="w-5 h-5 text-brand-orange" />,
  "workplace-counseling": <Briefcase className="w-5 h-5 text-brand-crimson" />,
  "student-counseling": <GraduationCap className="w-5 h-5 text-brand-orange" />,
  "womens-counseling": <Heart className="w-5 h-5 text-brand-crimson" />,
  "relationships-counseling": <Users2 className="w-5 h-5 text-brand-orange" />,
  "parenting-counseling": <Smile className="w-5 h-5 text-brand-crimson" />,
};

export default function ExpertisePage() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-20 sm:space-y-28 bg-[#F8F6F2] overflow-hidden">
      
      {/* =========================================================================
          SECTION 1: TOP HERO BANNER
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-5">
          <span className="kicker-text-crimson">
            dSkill • Live Ease • D SAHAS Hub
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] font-light text-gray-950 tracking-tight leading-[1.12]">
            Empower Your Life & Business with Expert Coaching Services
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Unlock your potential, lead with mindfulness, and achieve sustainable success. Specialized coaching and emotional counseling tailored to freelance workers, proprietors, SME business owners, leaders, and families.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CLASSIFIED SERVICES (6 CORE COUNSELING & COACHING PILLARS FROM CLIENT)
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-2xl">
            <div>
              <span className="kicker-text">
                Classified Services
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-gray-950 tracking-tight leading-[1.18]">
              Comprehensive Counseling & Mentorship Programs
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base text-gray-600 leading-relaxed font-normal">
              A client-centered approach creating a safe, confidential environment where individuals and groups explore feelings, develop coping strategies, and unlock their true potential.
            </p>
          </div>
        </div>

        {/* 6 Classified Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {classifiedServices.map((service, index) => (
            <div
              key={service.id}
              className="group rounded-[32px] bg-white border border-[#E0D9CE] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-orange-50/80 border border-orange-100 flex items-center justify-center">
                    {serviceCategoryIcons[service.id] || <Sparkles className="w-5 h-5 text-brand-orange" />}
                  </div>
                  <span className="text-[11px] font-semibold text-brand-orange uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-normal text-gray-950 tracking-tight leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Key Pillars */}
                <div className="pt-2 space-y-2 border-t border-gray-100">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                    Focus Areas
                  </span>
                  <div className="space-y-1.5">
                    {service.keyPillars.map((pillar, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span className="truncate">{pillar}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Target Audiences & CTA Link */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="text-[11px] text-gray-500 font-medium truncate max-w-[70%]">
                  For: {service.audiences.slice(0, 2).join(", ")}
                </div>
                <Link
                  href="/contact"
                  className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-[#07131F] group-hover:text-white transition-colors shrink-0"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          SECTION 3: STRATEGIC PILLARS SHOWCASE (LIGHT CONTAINER WITH 3 CARDS)
          ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 bg-[#EFECE6]/90 border-y border-[#DDD7CD]">
        <div className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div>
                <span className="kicker-text">
                  Executive Engagement Tracks
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-gray-950 tracking-tight leading-[1.18]">
                Your Ambition, Our Commitment
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-base text-gray-600 leading-relaxed font-normal">
                Every executive engagement is grounded in measurable accountability, behavioral neuroscience, and sustainable operational clarity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* CARD 1: TACTICAL LEADERSHIP */}
            <div className="group rounded-[32px] bg-white border border-[#E0D9CE] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                    Core Advantage
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-[#07131F] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-normal text-gray-950 tracking-tight">
                  Tactical Leadership
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  Eliminate decision fatigue and high-pressure operational friction through structured, deliberate response frameworks.
                </p>
              </div>

              <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden mt-6 bg-gray-100 border border-gray-100">
                <Image
                  src="/images/client/person/devi-coaching-1.jpg"
                  alt="Tactical Leadership"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* CARD 2: CENTER DARK HIGHLIGHT - MSME GROWTH */}
            <div className="group rounded-[32px] bg-[#07131F] text-white p-7 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden border border-[#004A7F]/40">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                    Enterprise Scaling
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#0D2135] border border-[#004A7F]/60 flex items-center justify-center text-white group-hover:bg-brand-orange transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-normal text-white tracking-tight">
                  MSME Growth & Mentorship
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  Founder-to-leader transition, commercial sales architecture, and sustainable family business governance.
                </p>
              </div>

              <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden mt-6 bg-gray-900 border border-[#004A7F]/30 z-10">
                <Image
                  src="/images/client/person/executive-meeting.jpg"
                  alt="Business Consulting"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-brand-orange/15 to-transparent rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* CARD 3: HOLISTIC WELLNESS */}
            <div className="group rounded-[32px] bg-white border border-[#E0D9CE] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                    Holistic Equilibrium
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-[#07131F] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-normal text-gray-950 tracking-tight">
                  Life-Skills & Inner Balance
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  Somatic energy release and emotional resilience so your executive triumph never comes at the cost of personal peace.
                </p>
              </div>

              <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden mt-6 bg-gray-100 border border-gray-100">
                <Image
                  src="/images/client/person/inner-balance-meditation.jpg"
                  alt="Life-Skills & Inner Balance"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: DETAILED 5-TRACK MASTER CURRICULUM
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div>
            <span className="kicker-text-crimson">
              Curriculum & Formats
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-gray-950 tracking-tight">
            Comprehensive Strategic Frameworks
          </h2>
        </div>

        <div className="space-y-6">
          {expertiseData.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="group rounded-[32px] bg-white border border-[#E3DFD7] p-8 sm:p-12 shadow-sm hover:shadow-md transition-all duration-300 scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left 4 Cols: Track Number + Title + Formats */}
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Track 0{index + 1}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-normal text-gray-950 tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-brand-navy">
                    {service.subtitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-gray-700">
                    {service.formats.map((fmt, i) => (
                      <React.Fragment key={fmt}>
                        {i > 0 && <span className="text-gray-300">•</span>}
                        <span>{fmt}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Right 8 Cols: Detailed Description + Deliverables */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                    {service.detailedDesc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
                      Key Program Deliverables
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((deliv, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
