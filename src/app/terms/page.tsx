import React from "react";
import Link from "next/link";
import { ShieldCheck, FileText, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | Dr. P. V. Devi Seshadri",
  description:
    "Terms and Conditions governing coaching engagements, advisory sessions, and website use for Dr. P. V. Devi Seshadri & D SAHAS Hub.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8F6F2] text-gray-900">
      <div className="w-[92%] sm:w-[90%] max-w-[1000px] mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-gray-200/80 pb-8">
          <span className="kicker-text-crimson">Legal & Governance</span>
          <h1 className="font-display text-3xl sm:text-5xl font-light text-brand-navy tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Effective Date: November 2024 • Governing Website & Executive Advisory Services
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-gray-200/70 shadow-sm space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
          
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-medium text-brand-navy">
              1. Engagement Scope
            </h2>
            <p>
              Dr. P. V. Devi Seshadri provides tactical leadership management coaching, business mentoring, emotional intelligence counseling, and holistic wellness guidance through dSkill, Live Ease, and D SAHAS Hub. All programs are consultative educational processes designed to empower personal and organizational self-awareness.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-medium text-brand-navy">
              2. Professional Boundaries & Disclaimer
            </h2>
            <p>
              Coaching and counseling sessions do not replace licensed clinical psychiatric therapy, medical treatment, or formal legal and certified chartered accounting representation. Clients retain full ownership and discretion over their business, operational, medical, and personal decisions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-medium text-brand-navy">
              3. Strict Confidentiality & Non-Disclosure
            </h2>
            <p>
              In alignment with Dr. Devi Seshadri&apos;s professional code of conduct, all client communications, business metrics, and personal narratives shared during private sessions remain strictly confidential under mutual non-disclosure, except where disclosure is mandated by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-medium text-brand-navy">
              4. Intellectual Property
            </h2>
            <p>
              All proprietary coaching frameworks, including the REACT-to-RESPOND methodology, workshop presentations, educational material, and written blueprints, remain the intellectual property of Dr. P. V. Devi Seshadri and D SAHAS Hub. Reproduction or unauthorized redistribution without written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-medium text-brand-navy">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising in connection with services rendered shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-100">
            <h2 className="font-display text-xl font-medium text-brand-navy">
              Contact Regarding Terms
            </h2>
            <p className="text-gray-600 text-sm">
              For legal inquiries or documentation regarding our service charters, reach our executive desk at:
              <br />
              <strong>Email:</strong> infodskill@gmail.com
              <br />
              <strong>Phone:</strong> +91 83095 37883
              <br />
              <strong>Office:</strong> New 87 (Old 5), Plot No 24, Bypass Road, 2nd Main Rd, 2nd Floor, Amsaveni Complex, Rajalakshmi Nagar, Velachery, Chennai – 600042
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
