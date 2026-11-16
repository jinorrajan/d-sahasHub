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
} from "lucide-react";
import { expertiseData } from "@/config/expertise";

export const metadata = {
  title: "Expertise & Services | Dr. P. V. Devi Seshadri",
  description:
    "Explore the 5 core leadership coaching, business consulting, life-skills, wellness balance, and relationship advisory services by Dr. P. V. Devi Seshadri.",
};

const serviceImages: Record<string, string> = {
  "tactical-leadership": "/images/client/person/devi-coaching-1.jpg",
  "business-consulting": "/images/client/person/executive-meeting.jpg",
  "life-skills": "/images/client/person/devi-strategy-2.jpg",
  "wellness-balancing": "/images/client/person/devi-healing-3.jpg",
  "relationship-harmony": "/images/client/meetings/meeting-1.jpeg",
};

export default function ExpertisePage() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-20 sm:space-y-28 bg-[#F8F6F2] overflow-hidden">
      
      {/* =========================================================================
          SECTION 1: TOP HERO BANNER (MATCHING REFERENCE TOP: BOLD TITLE + SUBTITLE)
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-5">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-light text-gray-950 tracking-tight leading-[1.12]">
            Leadership & Tactical Advisory
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Practical, high-impact frameworks crafted over 25+ years of enterprise IT rigor and executive life mentorship — moving leaders from instinctive <strong className="text-brand-crimson font-medium">REACT to deliberate RESPOND</strong>.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CURVED CONTAINER WITH 3-CARD SHOWCASE (MATCHING REFERENCE MIDDLE CURVED SECTION)
          In reference: Soft container (curved top/bottom) with 3 prominent cards (2 light/colored, 1 center dark)
          ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 bg-[#EFECE6]/90 border-y border-[#DDD7CD]">
        <div className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
          
          {/* Header Row: Left Eyebrow Pill + Title, Right Subtitle */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div>
                <span className="kicker-text">
                  Executive Engagement Tracks
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-gray-950 tracking-tight leading-[1.18]">
                Your Ambition, Our <br className="hidden sm:inline" /> Commitment
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-base text-gray-600 leading-relaxed font-normal">
                Every executive engagement is grounded in measurable accountability, behavioral neuroscience, and sustainable operational clarity.
              </p>
            </div>
          </div>

          {/* 3 Prominent Cards Grid: [Card 1: Light] [Card 2: Center Dark Highlight] [Card 3: Light] */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* CARD 1: LIGHT PILLAR */}
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

              {/* Bottom Image: 1st User Uploaded Image (Team in presentation room) */}
              <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden mt-6 bg-gray-100 border border-gray-100">
                <Image
                  src="/images/client/person/tactical-team-session.jpg"
                  alt="Tactical Leadership Session"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* CARD 2: CENTER DARK HIGHLIGHT CARD (MATCHING REFERENCE BLACK CARD) */}
            <div className="group rounded-[32px] bg-[#07131F] border border-[#004A7F]/40 p-7 sm:p-8 flex flex-col justify-between text-white shadow-2xl hover:shadow-cyan-950/40 transition-all duration-300 relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                    Strategic Mentorship
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-orange transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-normal text-white tracking-tight">
                  Enterprise Direction & Scale
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  Rooted in 25+ years of IT consulting and 7+ years of BYST mentorship, building scalable SOPs and founder autonomy.
                </p>
              </div>

              {/* Center Card Bottom Image with subtle overlay */}
              <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden mt-6 border border-white/10">
                <Image
                  src="/images/client/person/executive-meeting.jpg"
                  alt="Business Mentoring"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07131F]/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* CARD 3: LIGHT PILLAR */}
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

              {/* Bottom Image: 2nd User Uploaded Image (Levitating/floating meditation) */}
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
          SECTION 3: STATS & SERVICES BENTO ROW (MATCHING REFERENCE BOTTOM SECTION)
          In reference: Headline with CTA + Video Play button on top, and dynamic horizontal stats cards below
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Header with Title (Left) + Description & Learn More / Video Button (Right) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-4">
          <div className="space-y-4 max-w-2xl">
            <div>
              <span className="kicker-text-crimson">
                Proven Track Record
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-gray-950 tracking-tight leading-[1.18]">
              Tactical Expertise You <br className="hidden sm:inline" /> Can Count On
            </h2>
          </div>

          <div className="max-w-md space-y-6">
            <p className="text-base text-gray-600 leading-relaxed font-normal">
              Structured assessments, custom intervention toolkits, and continuous executive accountability designed for enduring leadership results.
            </p>

            {/* Action Buttons: Consistent Gradient Button + Play Video Button */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#AE282E] to-[#F06321] hover:from-[#931f25] hover:to-[#d85518] shadow-md shadow-red-950/20 transition-all duration-200 tracking-wider uppercase"
              >
                Schedule Diagnostic
              </Link>
              
              <Link
                href="/about"
                className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-gray-800 group"
              >
                <div className="w-11 h-11 rounded-full bg-white border border-[#DDD7CD] flex items-center justify-center text-gray-800 shadow-sm group-hover:scale-105 transition-transform">
                  <Play className="w-4 h-4 fill-gray-800 text-gray-800 ml-0.5" />
                </div>
                <span>Our Story</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Bento Stats Row: Photo card + Stat 1 + Stat 2 + Stat 3 + CTA Card (Matching exact reference bottom grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch">
          
          {/* Item 1: Thumbnail Photo Card */}
          <div className="relative rounded-[28px] overflow-hidden min-h-[220px] shadow-sm border border-[#E0D9CE]">
            <Image
              src="/images/client/person/actionable-roadmap.jpg"
              alt="Execution Roadmap"
              fill
              className="object-cover"
            />
          </div>

          {/* Item 2: Stat Card (14+ / 25+ Years Experience) */}
          <div className="rounded-[28px] bg-[#EFECE6]/90 border border-[#DDD7CD] p-6 sm:p-7 flex flex-col justify-between">
            <span className="font-display text-4xl sm:text-5xl font-light text-gray-950 tracking-tight">
              25+
            </span>
            <div className="space-y-1 pt-4">
              <p className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
                Years of Grit
              </p>
              <p className="text-xs text-gray-500 leading-relaxed font-normal">
                IT solutions consulting & executive governance.
              </p>
            </div>
          </div>

          {/* Item 3: Stat Card (Leaders Guided - Updated with matching beige/warm background of Item 2) */}
          <div className="rounded-[28px] bg-[#EFECE6]/90 border border-[#DDD7CD] p-6 sm:p-7 flex flex-col justify-between">
            <div className="flex items-center justify-between text-gray-400">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div className="space-y-1 pt-4">
              <span className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider">
                Leaders Guided
              </span>
              <p className="font-display text-3xl sm:text-4xl font-light text-gray-950 tracking-tight">
                1,200+
              </p>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                Across startups & family enterprises.
              </p>
            </div>
          </div>

          {/* Item 4: Stat Card (55h 40s Marathon Record) */}
          <div className="rounded-[28px] bg-[#EFECE6]/90 border border-[#DDD7CD] p-6 sm:p-7 flex flex-col justify-between">
            <span className="font-display text-3xl sm:text-4xl font-light text-gray-950 tracking-tight">
              55h 40s
            </span>
            <div className="space-y-1 pt-4">
              <p className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
                World Record
              </p>
              <p className="text-xs text-gray-500 leading-relaxed font-normal">
                Continuous life-skills webinar feat.
              </p>
            </div>
          </div>

          {/* Item 5: End Action Card (Matching Purple/Gradient 'Get Start With Us' in reference) */}
          <div className="rounded-[28px] bg-gradient-to-br from-[#07131F] to-[#0D2135] text-white p-6 sm:p-7 flex flex-col justify-between shadow-lg border border-[#004A7F]/40">
            {/* Overlapping Avatars */}
            <div className="flex -space-x-2">
              {["/images/client/person/person-2.jpeg", "/images/client/person/person-3.jpeg", "/images/client/person/person-4.jpeg"].map((av, idx) => (
                <div key={idx} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#07131F]">
                  <Image src={av} alt="Leader" fill className="object-cover" />
                </div>
              ))}
            </div>

            <div className="space-y-2 pt-4">
              <h4 className="font-display text-xl font-normal text-white tracking-tight">
                Get Started
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-normal">
                Transform reactive loops into composed strategic impact.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange hover:text-white transition-colors pt-2"
              >
                <span>Book Diagnostic Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 4: DETAILED 5-TRACK MASTER CURRICULUM (ACCORDION / BENTO LIST)
          ========================================================================= */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div>
            <span className="kicker-text-crimson">
              Curriculum & Formats
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-gray-950 tracking-tight">
            Comprehensive 5-Track Framework
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
