"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AchievementItem } from "@/types";

interface HoverImageLinksProps {
  items: AchievementItem[];
  onSelectCertificate?: (item: AchievementItem) => void;
}

export const HoverImageLinks: React.FC<HoverImageLinksProps> = ({
  items,
  onSelectCertificate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<AchievementItem | null>(null);

  // 1. Raw mouse position within the container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Spring smoothing for trailing behind cursor
  const springConfig = { damping: 20, stiffness: 180, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3. Velocity tracking for dynamic speed-based tilt
  const velocityX = useVelocity(smoothX);
  const velocityY = useVelocity(smoothY);

  // 4. Map velocity to dynamic tilt angles (clamped to prevent extreme distortions)
  const rawRotate = useTransform(velocityX, [-1200, 1200], [-18, 18], {
    clamp: true,
  });
  const smoothRotate = useSpring(rawRotate, { damping: 25, stiffness: 220 });

  const rawTiltY = useTransform(velocityY, [-1200, 1200], [12, -12], {
    clamp: true,
  });
  const smoothTiltY = useSpring(rawTiltY, { damping: 25, stiffness: 220 });

  const updatePosition = (clientX: number, clientY: number, isTouch = false) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (isTouch) {
      // For mobile touch: Position the preview card comfortably ABOVE the user's finger so it isn't blocked!
      mouseX.set(clientX - rect.left - 130);
      mouseY.set(clientY - rect.top - 180);
    } else {
      // Desktop mouse centering
      mouseX.set(clientX - rect.left - 170);
      mouseY.set(clientY - rect.top - 120);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX, e.clientY, false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      updatePosition(touch.clientX, touch.clientY, true);

      // Find element under touch position to highlight the right item during touch drag
      const element = document.elementFromPoint(touch.clientX, touch.clientY);
      const row = element?.closest("[data-achievement-id]");
      if (row) {
        const id = row.getAttribute("data-achievement-id");
        const found = items.find((it) => it.id === id);
        if (found) setActiveItem(found);
      }
    }
  };

  const handleTouchEnd = () => {
    // Fade out preview shortly after finger leaves screen
    setTimeout(() => {
      setActiveItem(null);
    }, 300);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full rounded-[36px] bg-[#07131F] border border-[#004A7F]/40 p-6 sm:p-10 lg:p-14 overflow-hidden select-none shadow-2xl"
    >
      {/* Subtle ambient spotlight in dark background */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#004A7F]/20 blur-[130px] pointer-events-none rounded-full" />

      {/* Vertical List of Links (Matching Screenshot 2 layout) */}
      <div className="relative z-10 divide-y divide-white/10">
        {items.map((item, index) => {
          const isHovered = activeItem?.id === item.id;

          return (
            <div
              key={item.id}
              data-achievement-id={item.id}
              onClick={() => onSelectCertificate?.(item)}
              onMouseEnter={() => setActiveItem(item)}
              onMouseLeave={() => setActiveItem(null)}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                updatePosition(touch.clientX, touch.clientY, true);
                setActiveItem(item);
              }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 sm:py-8 px-3 sm:px-6 cursor-pointer transition-colors duration-300 hover:bg-white/[0.03] rounded-2xl"
            >
              {/* Left Column: Big Bold Title (Matching Screenshot 2 font size) */}
              <div className="flex items-center gap-4 sm:gap-6 z-10">
                <span className="text-xs font-mono font-medium text-gray-500 group-hover:text-brand-orange transition-colors">
                  0{index + 1}
                </span>

                <div>
                  <h3
                    className={`font-display text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight transition-all duration-300 ${
                      isHovered
                        ? "text-white translate-x-2"
                        : "text-gray-300 translate-x-0"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 line-clamp-1 font-light">
                    {item.organization}
                  </p>
                </div>
              </div>

              {/* Right Column: Category Badge & Arrow */}
              <div className="flex items-center gap-4 mt-3 md:mt-0 z-10 shrink-0">
                <span
                  className={`text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isHovered ? "text-brand-orange" : "text-gray-400"
                  }`}
                >
                  {item.badge || "Verified Credential"}
                </span>

                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isHovered
                      ? "bg-gradient-to-r from-[#AE282E] to-[#F06321] border-transparent text-white scale-110 shadow-lg shadow-orange-500/20"
                      : "bg-white/5 border-white/10 text-gray-400"
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Pointer/Touch-Follower Image with Spring trailing & Speed-based Tilt */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 z-30"
        style={{
          x: smoothX,
          y: smoothY,
          rotate: smoothRotate,
          rotateX: smoothTiltY,
          perspective: 1000,
        }}
      >
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative w-[260px] h-[175px] sm:w-[340px] sm:h-[230px] rounded-2xl overflow-hidden bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-2 border-white/60 select-none"
            >
              {/* Full view image without inner padding or borders */}
              <div className="relative w-full h-full overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src={
                    activeItem.image || "/images/client/certificates/cert-1.jpeg"
                  }
                  alt={activeItem.title}
                  fill
                  className="object-cover object-center pointer-events-none"
                  sizes="340px"
                  priority
                />
              </div>

              {/* Just a floating subtle icon (Text removed) */}
              <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#07131F]/90 backdrop-blur-md text-white flex items-center justify-center shadow-md border border-white/20">
                <ArrowUpRight className="w-4 h-4 text-brand-orange" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
