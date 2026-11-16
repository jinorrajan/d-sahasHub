"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Who is Dr. P. V. Devi Seshadri's tactical leadership coaching specifically for?",
    answer:
      "Dr. Devi primarily coaches self-employed business owners, family business leaders, second-generation successors, and senior executives navigating high operational stress, high-stakes decision fatigue, and team friction.",
  },
  {
    id: "faq-2",
    question: "What is the core meaning behind 'From REACT to RESPOND'?",
    answer:
      "When business pressure spikes, leaders commonly slip into instinctive, emotional reactions—firefighting, micromanagement, or anger—which erode relationships and profits. Dr. Devi's framework trains you to pause, self-regulate, and execute a measured, tactical response that protects business growth and family peace.",
  },
  {
    question: "How is D SAHAS Hub connected to DeeSkill, LiveEase, and Dhee Foods?",
    answer:
      "D SAHAS Hub is the umbrella enterprise founded by Dr. Devi Seshadri. DeeSkill spearheads executive leadership and management coaching. LiveEase delivers holistic wellness, Reiki, and life-balancing solutions. Dhee Foods is a distinct traditional foods initiative promoting natural nutrition for healthy daily living.",
  },
  {
    question: "What is the format of coaching and consulting engagements?",
    answer:
      "Engagements are delivered in three primary formats: 1) Confidential 1:1 Executive Leadership Mentoring, 2) Tailored Corporate & Family Business Workshops, and 3) Intensive Strategic Retreats. Sessions are available in-person in Chennai or globally via secure virtual sessions.",
  },
  {
    question: "How does Dr. Devi verify her world records and professional credentials?",
    answer:
      "Dr. Devi holds documented world records from Elite World Records, Asian Records Academy, India Records Academy, and Tamilian Book of Records—including her historic 55-hour 40-second continuous life-skills training webinar. Scans and verification details are transparently displayed on our Achievements page.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className="rounded-[24px] border border-gray-200/80 bg-white overflow-hidden shadow-soft transition-all"
          >
            <button
              onClick={() => toggleFaq(idx)}
              className="w-full flex items-center justify-between p-6 sm:p-7 text-left focus:outline-none"
            >
              <span className="font-display text-base sm:text-lg font-normal text-brand-navy pr-4">
                {faq.question}
              </span>
              <div
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300",
                  isOpen
                    ? "bg-brand-crimson text-white rotate-180"
                    : "bg-[#FAF8F5] text-brand-navy border border-gray-200"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-gray-600 font-light leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
