"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Leadership and management coaching",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="w-full bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-card">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-display text-2xl font-bold text-gray-900">
            Enquiry Received With Thanks
          </h3>
          <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
            Thank you for reaching out to Dr. P. V. Devi Seshadri. Our executive office will review your enquiry and respond within 24 business hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                category: "Leadership and management coaching",
                message: "",
              });
            }}
            className="mt-6 px-6 py-2.5 rounded-xl bg-brand-crimson text-white text-sm font-semibold hover:bg-brand-crimson-dark transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Your Full Name <span className="text-brand-crimson">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rajesh Kumar"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/20 transition-all text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Email Address <span className="text-brand-crimson">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. rajesh@enterprise.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/20 transition-all text-sm outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98400 00000"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/20 transition-all text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Enquiry Category <span className="text-brand-crimson">*</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/20 transition-all text-sm outline-none"
              >
                <option value="Leadership and management coaching">
                  Leadership & Management Coaching (DeeSkill)
                </option>
                <option value="Business consulting and mentoring">
                  Business Consulting & Mentoring
                </option>
                <option value="Life-skills training and workshops">
                  Life-Skills Training & Workshops
                </option>
                <option value="Wellness and Reiki programmes">
                  Wellness & Reiki Healing (LiveEase)
                </option>
                <option value="Traditional Foods (Dhee Foods)">
                  Dhee Foods Venture Inquiry
                </option>
                <option value="Speaking engagements and collaborations">
                  Keynote Speaking & Panel Collaboration
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              How Can Dr. Devi Assist You? <span className="text-brand-crimson">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your organization, role, and the key challenges or outcomes you wish to address..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/20 transition-all text-sm outline-none resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <p className="text-xs text-gray-500">
              Direct enquiries routed securely to official desk: <span className="font-semibold text-brand-navy">{siteConfig.contact.primaryEmail}</span>
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-crimson hover:bg-brand-crimson-dark text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50"
            >
              <span>{isSubmitting ? "Submitting..." : "Send Confidential Enquiry"}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

