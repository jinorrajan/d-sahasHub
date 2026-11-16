"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user has scrolled past top
      setIsScrolled(currentScrollY > 20);

      // Smart Show / Hide based on scroll direction:
      // When scrolling down past 80px -> hide navbar
      // When scrolling up -> immediately reveal navbar
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY && !isMobileMenuOpen) {
          // Scrolling down -> Hide
          setIsVisible(false);
        } else {
          // Scrolling up -> Show
          setIsVisible(true);
        }
      } else {
        // Near top -> always visible
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 transform",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-gray-100"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Logo: Emblem + SAHAS Hub Wordmark with Tagline */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            {/* 1. Geometric Diamond Emblem */}
            <div className="relative w-8 h-10 sm:w-10 sm:h-12 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/client/logo/sahas-emblem.png"
                alt="SAHAS Hub Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* 2. SAHAS Hub Typography Wordmark with Tagline */}
            <div className="relative w-28 h-9 sm:w-36 sm:h-11 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/client/logo/sahas-hub-wordmark.png"
                alt="SAHAS Hub — Connecting Minds, Creating an Impact"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-sm font-medium transition-all relative",
                    isActive
                      ? "text-brand-crimson font-semibold"
                      : "text-gray-700 hover:text-brand-crimson hover:bg-black/5"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-crimson rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA (Brand Gradient Button) */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#AE282E] to-[#F06321] hover:from-[#931f25] hover:to-[#d85518] shadow-md shadow-red-950/20 transition-all duration-200"
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-brand-crimson hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-2.5 rounded-xl text-base font-medium transition-colors",
                      isActive
                        ? "bg-brand-crimson text-white font-semibold"
                        : "text-gray-800 hover:bg-brand-sand hover:text-brand-crimson"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#AE282E] to-[#F06321] hover:from-[#931f25] hover:to-[#d85518] shadow-md shadow-red-950/20 transition-all duration-200"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

