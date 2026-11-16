"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorData {
  top: number;
  left: number;
  delay: string;
  duration: string;
}

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<MeteorData[]>([]);

  useEffect(() => {
    // Generate deterministic values on client to avoid hydration mismatch
    const generated: MeteorData[] = Array.from({ length: number }).map(() => ({
      top: Math.floor(Math.random() * 500) - 80,
      left: Math.floor(Math.random() * 1400) - 200,
      delay: (Math.random() * 5).toFixed(2) + "s",
      duration: (Math.random() * 6 + 4).toFixed(2) + "s",
    }));
    setMeteorStyles(generated);
  }, [number]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "absolute pointer-events-none h-0.5 w-0.5 rounded-full bg-slate-200/80 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-meteor-effect",
            className
          )}
          style={{
            top: `${style.top}px`,
            left: `${style.left}px`,
            animationDelay: style.delay,
            animationDuration: style.duration,
          }}
        >
          {/* Glowing Tail streak with subtle opacity */}
          <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 w-[50px] sm:w-[75px] h-[1px] bg-gradient-to-r from-orange-400/60 via-sky-300/40 to-transparent" />
        </span>
      ))}
    </div>
  );
};

