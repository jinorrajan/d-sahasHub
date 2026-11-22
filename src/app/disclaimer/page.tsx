import React from "react";
import Link from "next/link";
import { ShieldCheck, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Professional Disclaimer | Dr. P. V. Devi Seshadri",
  description:
    "Official Professional & Financial Disclaimer for coaching, holistic wellness, and advisory services of Dr. P. V. Devi Seshadri.",
};

export default function DisclaimerPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8F6F2] text-gray-900">
      <div className="w-[92%] sm:w-[90%] max-w-[1000px] mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-gray-200/80 pb-8">
          <span className="kicker-text-crimson">Transparency & Code of Conduct</span>
          <h1 className="font-display text-3xl sm:text-5xl font-light text-brand-navy tracking-tight">
            Professional Disclaimer
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Important Information on Coaching, Emotional Counseling, and Advisory Boundaries
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-gray-200/70 shadow-sm space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
          
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-medium text-brand-navy">
              1. Executive Coaching & Life Mentoring
            </h2>
            <p>
              The leadership development, strategic management consulting, and personal transformation programs offered by Dr. P. V. Devi Seshadri are intended solely for personal, leadership, and professional growth. Results depend on individual application, organizational circumstances, and sustained commitment. No outcome is guaranteed as each leadership and business journey is inherently unique.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-medium text-brand-navy">
              2. Emotional Counseling & Wellness Notice
            </h2>
            <p>
              Emotional counseling, mindfulness, and Reiki healing sessions are holistic and complementary modalities aimed at emotional self-regulation, stress reduction, and mental decluttering. They are not intended as medical advice, clinical psychotherapy, or emergency psychiatric intervention. Individuals with severe mental health diagnoses or medical conditions should always consult qualified healthcare practitioners.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-medium text-brand-navy">
              3. Financial Advisory & Wealth Planning (LIC)
            </h2>
            <p>
              In her capacity as an authorized Life Insurance Corporation of India (LIC) Financial Advisor, Dr. Devi Seshadri provides risk assessment and wealth protection consultation. Insurance and financial products are subject to underwriting approval and policy terms issued by the respective institutions. Clients should review policy prospectuses thoroughly before committing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-medium text-brand-navy">
              4. Nutritional & Millet Ventures (Dhee Foods)
            </h2>
            <p>
              Dhee Foods products, including the organically prepared millet-based ABC MALT and cold-pressed oils, are whole-food nutritional offerings. They are not intended to diagnose, treat, cure, or prevent any medical disease.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-100">
            <h2 className="font-display text-xl font-medium text-brand-navy">
              Inquiries & Clarifications
            </h2>
            <p className="text-gray-600 text-sm">
              If you have any questions regarding these disclaimers, please contact our desk at:
              <br />
              <strong>Email:</strong> infodskill@gmail.com • <strong>Phone:</strong> +91 83095 37883
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
