"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ExternalLink, ZoomIn } from "lucide-react";
import Image from "next/image";
import { AchievementItem } from "@/types";

interface CertificateModalProps {
  achievement: AchievementItem;
}

export function CertificateCard({ achievement }: CertificateModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer flex flex-col"
      >
        {/* Certificate Thumbnail */}
        <div className="relative h-60 w-full overflow-hidden bg-gray-100">
          <Image
            src={achievement.image || "/images/client/certificates/cert-1.jpeg"}
            alt={achievement.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Badge */}
          {achievement.badge && (
            <span className="absolute top-4 left-4 bg-brand-crimson/95 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
              {achievement.badge}
            </span>
          )}

          {/* Hover Zoom Prompt */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
            <div className="flex items-center gap-2 bg-white text-brand-navy font-semibold text-xs px-4 py-2 rounded-full shadow-lg">
              <ZoomIn className="w-4 h-4 text-brand-crimson" />
              <span>Click to Verify</span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-orange mb-1">
              {achievement.organization}
            </div>
            <h4 className="font-display text-lg font-bold text-gray-900 group-hover:text-brand-crimson transition-colors line-clamp-2">
              {achievement.title}
            </h4>
            <p className="mt-2 text-sm text-gray-600 line-clamp-3 leading-relaxed">
              {achievement.description}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-500">
            <span>{achievement.year || "Verified Recognition"}</span>
            <span className="text-brand-crimson font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              View Document →
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-gray-700 hover:text-black flex items-center justify-center shadow-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Document Image View */}
              <div className="relative md:w-3/5 h-80 md:h-auto min-h-[350px] bg-gray-900 flex items-center justify-center">
                <Image
                  src={achievement.image || "/images/client/certificates/cert-1.jpeg"}
                  alt={achievement.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Document Info */}
              <div className="md:w-2/5 p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-crimson bg-brand-sand px-3 py-1 rounded-full mb-3">
                    <Award className="w-3.5 h-3.5" />
                    <span>Official Credential</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 leading-snug">
                    {achievement.title}
                  </h3>
                  <div className="mt-2 text-xs font-semibold text-brand-navy">
                    Awarding Body: {achievement.organization}
                  </div>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3">
                  <div className="text-xs text-gray-500">
                    Archived under verified credentials repository of Dr. P. V. Devi Seshadri.
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-2.5 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-crimson transition-colors"
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

