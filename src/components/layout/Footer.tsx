import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, Heart, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerQuickLinks, ventureLinks } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="bg-[#07131F] text-white pt-16 pb-12 border-t border-[#004A7F]/30 relative overflow-hidden">
      {/* Background Subtle Ambient Glow matching Hero container */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#004A7F]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-white p-1 shadow-md">
                <Image
                  src="/images/client/logo/d-sahas-hub-logo.jpg"
                  alt="D SAHAS Hub Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight">
                  Dr. P. V. Devi Seshadri
                </span>
                <span className="block text-xs font-semibold text-brand-orange uppercase tracking-wider">
                  D SAHAS Hub — Connecting Minds, Creating an Impact
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              Tactical Leadership Management Coach helping entrepreneurs, family business leaders, and executives move from <strong className="text-white">REACT to RESPOND</strong> through self-care, self-healing, self-awareness, and self-understanding.
            </p>

            <div className="pt-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>25+ Years Corporate & Consulting Experience • BYST Senior Mentor</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* D SAHAS Hub Ventures */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Hub Ventures
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {ventureLinks.map((venture) => (
                <li key={venture.label}>
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white inline-flex items-center gap-1 group transition-colors"
                  >
                    <span>{venture.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-brand-orange opacity-70 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-3 text-[11px] text-gray-400 italic">
              * Dhee Foods is an independent traditional nutrition venture within D SAHAS Hub.
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Executive Office
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-crimson flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${siteConfig.contact.primaryEmail}`} className="hover:text-white block font-medium">
                    {siteConfig.contact.primaryEmail}
                  </a>
                  <a href={`mailto:${siteConfig.contact.secondaryEmail}`} className="hover:text-white text-gray-400 block">
                    {siteConfig.contact.secondaryEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-crimson flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-crimson flex-shrink-0" />
                <span>{siteConfig.contact.location}</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block w-full text-center py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#AE282E] to-[#F06321] hover:from-[#931f25] hover:to-[#d85518] shadow-md shadow-red-950/20 transition-all duration-200 tracking-wider uppercase"
              >
                Request Confidential Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} Dr. P. V. Devi Seshadri. All Rights Reserved. Business Umbrella: D SAHAS Hub.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span>Chennai • India</span>
            <span>Connecting Minds, Creating an Impact</span>
            <span className="text-gray-500">•</span>
            <a
              href="https://theaccura8agency.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaf9PvED3B8C7l6_eVGiwP3rZsXe4s_bUeHaK9oDjlCo1KrgpI1Y3UCbMT_ANQ_aem_AUi1jpIaWP2GDTCxAHa_Fg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-orange transition-colors font-medium"
            >
              Designed by theaccura8agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

