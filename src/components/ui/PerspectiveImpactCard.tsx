"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface PerspectiveImpactCardProps {
  imageSrc?: string;
  imageAlt?: string;
  statNumber?: string;
  statLabel?: string;
  className?: string;
  containerClassName?: string;
  cardBgColor?: string;
  badgeBgColor?: string;
  aspectRatioClass?: string;
  watermarkText?: string;
}

export function PerspectiveImpactCard({
  imageSrc = "/images/client/person/devi-cutout.png",
  imageAlt = "Dr. P. V. Devi Seshadri - Certified Leadership & Life Coach",
  statNumber = "25+",
  statLabel = "YEARS OF IMPACT",
  className = "",
  containerClassName = "",
  cardBgColor = "#FBEAE0",
  badgeBgColor = "#FAF7F2",
  aspectRatioClass = "aspect-[4/4.5] sm:aspect-[4/4.3]",
  watermarkText = "IMPACT",
}: PerspectiveImpactCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Normalized mouse coordinates (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D tilt
  const springConfig = { damping: 22, stiffness: 240, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Tilt rotations
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className={`relative select-none [perspective:1200px] ${containerClassName}`}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.025 : 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`relative w-full ${aspectRatioClass} rounded-[36px] sm:rounded-[44px] overflow-hidden cursor-pointer transition-shadow duration-500 ease-out ${
          isHovered
            ? "shadow-[0_30px_70px_-15px_rgba(240,99,33,0.22),0_25px_50px_-20px_rgba(7,19,31,0.3)]"
            : "shadow-[0_16px_36px_-10px_rgba(7,19,31,0.12)]"
        } border border-[#F3DAC9] ${className}`}
      >
        {/* 1. BASE BACKGROUND LAYER (Z: 0) */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundColor: cardBgColor,
            backgroundImage:
              "radial-gradient(circle at 50% 25%, rgba(255,255,255,0.45) 0%, transparent 70%)",
          }}
        />

        {/* 2. SUBTLE ARCHITECTURAL WATERMARK */}
        {watermarkText && (
          <div
            className="absolute inset-x-0 top-8 flex flex-col items-center justify-center pointer-events-none select-none z-0 opacity-40"
            style={{ transform: "translateZ(5px)" }}
          >
            <span className="font-display text-6xl sm:text-7xl font-black uppercase text-[#EAD5C5] tracking-tight leading-none">
              {watermarkText}
            </span>
          </div>
        )}

        {/* 3. DYNAMIC SPECULAR LIGHT SHEEN */}
        <div
          className={`absolute inset-0 pointer-events-none z-20 rounded-[36px] sm:rounded-[44px] transition-opacity duration-300 bg-gradient-to-tr from-transparent via-white/20 to-white/30 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* 4. ELEVATED PORTRAIT CUTOUT LAYER */}
        <motion.div
          className="absolute inset-x-0 bottom-0 top-3 sm:top-5 flex items-end justify-center pointer-events-none z-10"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            z: isHovered ? 45 : 10,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
        >
          <div className="relative w-full h-full max-h-[96%] flex items-end justify-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain object-bottom origin-bottom drop-shadow-[0_16px_28px_rgba(7,19,31,0.18)]"
              priority
            />
          </div>
        </motion.div>

        {/* 5. ELEVATED INVERTED-NOTCH FLOATING BADGE */}
        <motion.div
          className="absolute bottom-0 right-0 z-30 pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            z: isHovered ? 80 : 25,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
        >
          {/* Main Notched Box container */}
          <div
            className="relative pt-4 pl-4 sm:pt-6 sm:pl-7 rounded-tl-[32px] sm:rounded-tl-[38px] transition-shadow duration-300"
            style={{
              backgroundColor: badgeBgColor,
              boxShadow: isHovered
                ? "-8px -8px 24px -4px rgba(7, 19, 31, 0.12)"
                : "-4px -4px 16px -2px rgba(7, 19, 31, 0.05)",
            }}
          >
            {/* Top-left concave transition curve smoothing into peach backdrop */}
            <div className="absolute -top-6 right-0 w-6 h-6 overflow-hidden pointer-events-none">
              <div
                className="w-12 h-12 rounded-full border-[12px] -translate-x-6"
                style={{ borderColor: badgeBgColor }}
              />
            </div>

            {/* Inner Stat Box Content with dedicated inner 3D depth */}
            <motion.div
              className="flex flex-col items-start justify-center pr-5 pb-3 sm:pr-8 sm:pb-5 min-w-[155px] sm:min-w-[195px]"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                z: isHovered ? 30 : 0,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-brand-orange tracking-tight leading-none drop-shadow-sm">
                {statNumber}
              </span>
              <span className="mt-2 text-[11px] sm:text-xs font-bold text-gray-900 tracking-wider uppercase">
                {statLabel}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* 6. SUBTLE INNER BORDER RING FOR POLISHED FINISH */}
        <div className="absolute inset-0 rounded-[36px] sm:rounded-[44px] ring-1 ring-inset ring-white/40 pointer-events-none z-40" />
      </motion.div>
    </div>
  );
}
