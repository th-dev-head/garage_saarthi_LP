"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaQuoteLeft, FaChartLine } from "react-icons/fa";
import GradientUnderline from "@/src/components/common/GradientUnderline";

export default function CustomerStoriesSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const stories = [
    {
      id: "apex-car-care",
      category: "car-garage",
      badge: "Car Workshop (6 Bays)",
      name: "Apex Multi-Brand Car Care",
      location: "Ahmedabad, Gujarat",
      challenge: "Mechanics relied on handwritten slips. Estimates frequently lacked customer approval, and counter parts were placed in bays without immediate billing, leading to ₹35,000+ monthly parts leakage.",
      solution: "Adopted GarageSaarthi digital job cards with photo check-in, real-time WhatsApp estimate approvals, and technician-specific restricted inventory dispatch.",
      metric: "₹42,000/mo",
      metricLabel: "Recovered Parts & Labor Revenue",
      timeframe: "Within first 60 days of deployment",
      quote: "Our floor mechanics no longer haggle over pricing. Customers approve estimates directly on WhatsApp before we touch a bolt, and every oil filter is accounted for.",
      speaker: "Haresh Patel, Managing Partner",
    },
    {
      id: "speedwheel-moto",
      category: "bike-garage",
      badge: "2-Wheeler & EV Service (4 Bays)",
      name: "SpeedWheel Moto Works",
      location: "Pune, Maharashtra",
      challenge: "High vehicle turnover caused long delivery queues. EV battery serial numbers and battery health percentages were not documented, resulting in warranty disputes and lost repeat maintenance visits.",
      solution: "Configured GarageSaarthi EV specs tracking with battery kWh history, selfie-verified technician bay logs, and automated 60-day service reminder alerts.",
      metric: "40% Higher",
      metricLabel: "Repeat Service Retention",
      timeframe: "Over a 90-day evaluation",
      quote: "Two-wheeler owners expect instant billing and paperless records. GarageSaarthi gives us professional PDF invoices and WhatsApp alerts that build immense customer trust.",
      speaker: "Sanjay Deshmukh, Founder",
    },
    {
      id: "shree-ram-detailing",
      category: "detailing",
      badge: "Detailing & Ceramic Studio",
      name: "Shree Ram Auto Detailing & Bodycraft",
      location: "Surat, Gujarat",
      challenge: "Disputes over pre-existing scratches during final vehicle handover, plus paper gate passes that allowed cars to leave before final balance settlement.",
      solution: "Implemented mandatory 360° vehicle intake photos during job card creation, digital customer sign-off, and the locked digital gate pass module.",
      metric: "0 Disputes",
      metricLabel: "Pre-existing Condition Claims",
      timeframe: "6 months uninterrupted record",
      quote: "The restrictive gate pass alone saved us from 3 unpaid delivery mistakes. The security of knowing no car rolls out without payment gives complete peace of mind.",
      speaker: "Ketan Vaghani, Studio Director",
    },
  ];

  const filteredStories = activeFilter === "all"
    ? stories
    : stories.filter((s) => s.category === activeFilter);

  return (
    <section id="stories" className="bg-slate-50 py-16 lg:py-24 px-4 lg:px-15 2xl:px-50">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Verified Case Studies
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Real Workshop Stories,{" "}
            <GradientUnderline>Measurable Results</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Substantiated problem-to-outcome case summaries from verified workshop owners using GarageSaarthi daily.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Workshops" },
              { id: "car-garage", label: "Car Garages" },
              { id: "bike-garage", label: "2-Wheeler & EV" },
              { id: "detailing", label: "Detailing & Paint" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[#B02E0C] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white border border-slate-200/50 shadow-sm rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#B02E0C]/30 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Workshop Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="inline-block text-[11px] font-bold text-[#B02E0C] bg-[#EFE9E7] px-3 py-0.5 rounded-full uppercase tracking-wide">
                    {story.badge}
                  </span>
                  <div className="flex items-center text-xs text-slate-500 font-medium">
                    <FaMapMarkerAlt className="mr-1 text-slate-400" />
                    {story.location}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {story.name}
                </h3>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6 text-xs sm:text-sm text-slate-600">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
                    <span className="text-[10px] font-extrabold text-rose-700 uppercase tracking-wider block mb-1">
                      The Operational Challenge
                    </span>
                    <p>{story.challenge}</p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
                    <span className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-wider block mb-1">
                      GarageSaarthi Solution
                    </span>
                    <p>{story.solution}</p>
                  </div>
                </div>

                {/* Metric Highlight Box */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/60 mb-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-2xl font-extrabold text-[#B02E0C]">
                    <FaChartLine className="w-5 h-5 text-emerald-600" />
                    <span>{story.metric}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">
                    {story.metricLabel}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {story.timeframe}
                  </div>
                </div>
              </div>

              {/* Quote & Speaker */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs italic text-slate-700 mb-3 leading-relaxed relative pl-5">
                  <FaQuoteLeft className="absolute left-0 top-0 text-[#B02E0C]/30 text-xs" />
                  "{story.quote}"
                </p>
                <div className="text-xs font-bold text-slate-900">
                  {story.speaker}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
