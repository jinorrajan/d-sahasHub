"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ShieldCheck } from "lucide-react";
import { AchievementItem } from "@/types";
import { HoverImageLinks } from "@/components/widgets/HoverImageLinks";

interface VerifiableCredentialsSectionProps {
  items: AchievementItem[];
}

export function VerifiableCredentialsSection({
  items,
}: VerifiableCredentialsSectionProps) {
  const [selectedAchievement, setSelectedAchievement] =
    useState<AchievementItem | null>(null);

  return (
    <>
      {/* 2nd Image Minimal Vertical List with Spring Cursor Follower & Speed Tilt */}
      <HoverImageLinks
        items={items}
        onSelectCertificate={(item) => setSelectedAchievement(item)}
      />

      {/* Lightbox Modal for Full Resolution Document Inspection */}
      <AnimatePresence>
        {selectedAchievement && (
          <div
            onClick={() => setSelectedAchievement(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-gray-700 hover:text-black flex items-center justify-center shadow-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Document Image View */}
              <div className="relative md:w-3/5 h-80 md:h-auto min-h-[350px] bg-[#07131F] flex items-center justify-center">
                <Image
                  src={
                    selectedAchievement.image ||
                    "/images/client/certificates/cert-1.jpeg"
                  }
                  alt={selectedAchievement.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Document Info */}
              <div className="md:w-2/5 p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-crimson bg-[#FAF3ED] px-3 py-1 rounded-full mb-3">
                    <Award className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Official Credential</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 leading-snug">
                    {selectedAchievement.title}
                  </h3>
                  <div className="mt-2 text-xs font-semibold text-brand-navy">
                    Awarding Body: {selectedAchievement.organization}
                  </div>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed font-normal">
                    {selectedAchievement.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3">
                  <div className="text-xs text-gray-500">
                    Archived under verified credentials repository of Dr. P. V.
                    Devi Seshadri.
                  </div>
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#AE282E] to-[#F06321] text-white text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-opacity shadow-md"
                  >
                    Close Viewer
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

