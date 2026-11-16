"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Animated Gradient Text:
 * Shifting glowing gradient clipped strictly to the text letters.
 * Runs on GPU-accelerated CSS keyframe animation for instant, 100% reliable rendering.
 */
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "inline-block font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#AE282E] via-[#F06321] to-[#AE282E] animate-text-gradient select-none",
        className
      )}
    >
      {children}
    </span>
  );
};
