"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export function AceternityContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
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
    <div className="w-full rounded-[36px] sm:rounded-[48px] bg-white border border-gray-200/80 p-7 sm:p-12 lg:p-16 text-gray-900 relative overflow-hidden shadow-xl shadow-gray-200/40">
      {/* Background Subtle Spotlight Glow (Soft Brand Warmth) */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-orange-100/40 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[250px] bg-red-100/30 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* =========================================================
            LEFT COLUMN (5 COLS): ICON + HEADING + SUBTEXT + MAP PIN
            ========================================================= */}
        <div className="lg:col-span-5 space-y-7">
          {/* Top Mail Icon Box */}
          <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center shadow-sm">
            <Mail className="w-5 h-5 text-brand-orange" />
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-4xl sm:text-5xl font-light text-brand-navy tracking-tight leading-tight">
              Contact us
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              We are always looking for ways to improve our programs and executive guidance. Connect directly with Dr. P. V. Devi Seshadri&apos;s desk.
            </p>
          </div>

          {/* Inline Direct Contacts */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-600 pt-1">
            <a
              href={`mailto:${siteConfig.contact.primaryEmail}`}
              className="hover:text-brand-crimson transition-colors font-medium text-brand-navy"
            >
              {siteConfig.contact.primaryEmail}
            </a>
            <span className="text-gray-300">•</span>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hover:text-brand-crimson transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500">Chennai, India</span>
          </div>

          {/* Real World Map Graphic with "We are here" Location Beacon */}
          <div className="relative w-full h-[230px] sm:h-[270px] rounded-2xl bg-[#F4F1EA] border border-gray-200 overflow-hidden flex items-center justify-center p-3">
            {/* Real Accurate World Map Vector (SVG) */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/world-map-clean.svg"
                alt="World Map"
                className="w-full h-full object-contain opacity-50 contrast-125 saturate-50 select-none pointer-events-none"
              />

              {/* Glowing Pointer Pin: "We are here" (Chennai, India: ~71.4%, 48.0%) */}
              <div
                className="absolute top-[48.0%] left-[71.4%] -translate-x-1/2 -translate-y-full flex flex-col items-center pointer-events-none z-10"
              >
                {/* "We are here" Floating Badge in Brand Theme Style */}
                <div className="px-3 py-1 rounded-full bg-white border border-brand-crimson/30 shadow-md shadow-brand-crimson/10 text-[10px] font-bold text-brand-crimson tracking-wide uppercase whitespace-nowrap mb-1.5 animate-bounce">
                  We are here
                </div>
                {/* Vertical Laser Beam to coordinate in Brand Gradient */}
                <div className="w-[2px] h-6 bg-gradient-to-t from-brand-crimson via-brand-orange to-transparent shadow-[0_0_8px_rgba(240,99,33,0.5)]" />
                {/* Ripple Radar Ring on coordinate */}
                <div className="relative flex items-center justify-center -mb-1">
                  <span className="w-4 h-4 rounded-full bg-brand-crimson animate-ping absolute opacity-70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-brand-crimson to-brand-orange shadow-[0_0_10px_#AE282E]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN (7 COLS): ACETERNITY GRID PATTERN CARD + FORM
            ========================================================= */}
        <div className="lg:col-span-7">
          <div className="relative rounded-[32px] bg-[#FAF8F5] border border-gray-200/90 p-7 sm:p-10 shadow-lg overflow-hidden">
            {/* Subtle Grid Accent Pattern matching Aceternity layout */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4 relative z-10"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-light text-brand-navy">
                  Message Dispatched to Executive Desk
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto font-light leading-relaxed">
                  Thank you for connecting. Dr. P. V. Devi Seshadri&apos;s office will review your message under confidentiality and respond within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", company: "", message: "" });
                  }}
                  className="mt-6 px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#AE282E] to-[#F06321] hover:from-[#931f25] hover:to-[#d85518] shadow-md shadow-red-950/20 transition-all duration-200"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Field 1: Full name */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-gray-700 tracking-wide">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Manu Arora"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/15 outline-none transition-all shadow-xs"
                  />
                </div>

                {/* Field 2: Email Address */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-gray-700 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="support@aceternity.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/15 outline-none transition-all shadow-xs"
                  />
                </div>

                {/* Field 3: Company */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-gray-700 tracking-wide">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Aceternity Labs LLC"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/15 outline-none transition-all shadow-xs"
                  />
                </div>

                {/* Field 4: Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-gray-700 tracking-wide">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Type your message here"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/15 outline-none resize-none transition-all shadow-xs"
                  />
                </div>

                {/* Submit Button (Brand Gradient & Rounded-xl) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#AE282E] to-[#F06321] hover:from-[#931f25] hover:to-[#d85518] shadow-md shadow-red-950/20 transition-all duration-200 disabled:opacity-60 uppercase tracking-wider"
                  >
                    <span>{isSubmitting ? "Routing..." : "Submit"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
