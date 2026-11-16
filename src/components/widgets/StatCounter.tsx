"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface StatCounterProps {
  value: string;
  label: string;
  suffix?: string;
  delay?: number;
}

export function StatCounter({ value, label, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Check if numeric
    const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
    const nonNumericPrefix = value.match(/^[^0-9]+/)?.[0] || "";
    const nonNumericSuffix = value.match(/[^0-9]+$/)?.[0] || "";

    if (isNaN(numericPart)) {
      setDisplayValue(value);
      return;
    }

    let start = 0;
    const duration = 1800; // ms
    const steps = 40;
    const stepTime = duration / steps;
    const increment = numericPart / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericPart) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(`${nonNumericPrefix}${Math.floor(start)}${nonNumericSuffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="font-display text-4xl sm:text-5xl font-extrabold text-brand-crimson tracking-tight">
        {displayValue}
      </div>
      <div className="mt-2 text-sm font-medium text-brand-navy uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

