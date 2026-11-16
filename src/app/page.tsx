import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Sparkles,
  Users2,
  Building2,
  UserCheck,
  Briefcase,
  Compass,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { venturesData } from "@/config/ventures";
import { achievementsData, testimonialsData } from "@/config/achievements";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { CoachAccordionSection } from "@/components/home/CoachAccordionSection";
import { VenturesSection } from "@/components/home/VenturesSection";
import { WorldRecordBannerSection } from "@/components/home/WorldRecordBannerSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SelfPhilosophyMatrix } from "@/components/widgets/SelfPhilosophyMatrix";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* 1. HERO SECTION (WITH INTEGRATED LOGOS & FOUNDATIONAL FRAMEWORK) */}
      <HeroSection />

      {/* 2. ABOUT & STATS 3-CARD COMPOSITE SECTION */}
      <AboutSection />

      {/* 3. "WHY CHOOSE US" ACCORDION / BENTO ROW SECTION */}
      <WhyChooseUsSection />

      {/* 4. FULL-BLEED COACH ACCORDION SLIDER */}
      <CoachAccordionSection />

      {/* 5. LUXURY WORLD RECORDS & MARATHON MILESTONE BANNER */}
      <WorldRecordBannerSection />

      {/* 6. VENTURES / THE ECOSYSTEM SHOWCASE (DEESKILL, LIVEEASE, DHEE FOODS) */}
      <VenturesSection />

      {/* 7. TESTIMONIALS SECTION (LETTER AVATARS ONLY, NO IMAGES) */}
      <TestimonialsSection />

      {/* 12. FINAL CTA BLOCK (CLEAN MINIMALIST, NO RED BACKGROUND, BLACK TEXT) */}
      <section className="w-[95%] sm:w-[94%] max-w-[1890px] mx-auto px-2 sm:px-4 py-12 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-gray-950 tracking-tight leading-[1.2]">
            Ready to Shift From Reactive Pressure to Composed Impact?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Schedule a confidential diagnostic discussion with Dr. P. V. Devi Seshadri to explore 1:1 leadership coaching or corporate advisory.
          </p>
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#AE282E] to-[#F06321] hover:from-[#931f25] hover:to-[#d85518] shadow-md shadow-red-950/20 transition-all duration-200 tracking-wide uppercase"
            >
              Request Executive Consultation
            </Link>
            <Link
              href="/expertise"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs font-bold text-gray-800 bg-white hover:bg-gray-50 border border-gray-300 shadow-sm transition-all duration-200 tracking-wide uppercase"
            >
              Explore All Offerings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
