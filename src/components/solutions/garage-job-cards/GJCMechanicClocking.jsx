"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaClock,
  FaPlay,
  FaPause,
  FaRedo,
  FaCheckCircle,
  FaCoffee,
  FaTools,
  FaChartLine,
  FaArrowRight,
  FaUserCheck
} from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const clockingCapabilities = [
  {
    icon: FaClock,
    title: "Task-Level Stopwatch Timers",
    desc: "Start and track precise repair minutes for individual labour tasks or the entire job card to compare actual vs estimated times."
  },
  {
    icon: FaCoffee,
    title: "Reason-Based Break Logging",
    desc: "Record lunch, tea, parts waiting, or customer approval pauses with 1-click. Break time is isolated from active billable labour."
  },
  {
    icon: FaTools,
    title: "Global Persistent Clocking Bar",
    desc: "A floating bottom bar keeps the live job timer accessible across all screens, allowing 1-tap breaks and resumes on the go."
  },
  {
    icon: FaChartLine,
    title: "Technician Productivity Analytics",
    desc: "Automatically aggregate active hours, pause durations, and technician efficiency percentages for performance incentives."
  }
];

const sampleTask = {
  jobCardNumber: "JC-2026-1042",
  vehicle: "Hyundai Creta 1.5 - MH 02 AB 9988",
  serviceName: "Front Brake Pad Replacement & Caliper Greasing",
  mechanic: "Rajesh Sharma (Lead Brake Tech)",
  activeTime: "00:45:12",
  breakTime: "00:15:00",
  efficiency: "94%"
};

export default function GJCMechanicClocking() {
  const [isPaused, setIsPaused] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleCtaClick = () => {
    trackEvent("feature_click", {
      page_path: "/solutions/garage-job-card-software/",
      page_type: "solution_page",
      page_topic: "garage_job_card_software",
      cta_location: "mechanic_clocking",
      cta_label: "Explore Mechanic Time Tracking",
      destination: "/features/job-card-management/"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <FaClock className="w-3.5 h-3.5" /> Mechanic Work &amp; Break Tracking
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Track Live Mechanic Repair Hours with{" "}
            <GradientUnderline>Task Clocking &amp; Break Logging</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate repair bay delays and unrecorded idle time. Equip mechanics with live job stopwatches, capture categorized breaks (lunch, tea, parts waiting), and measure real workshop productivity.
          </p>
        </div>

        {/* Dual Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Panel: Live Clocking Mockup Card */}
          <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-md space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                  <FaClock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Live Labour Task Clocking
                  </h3>
                  <p className="text-[10px] text-slate-400">Stopwatch with active vs break time tracking</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                Active Job Card
              </span>
            </div>

            {/* Selected Job Card Preview */}
            <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-4 border border-slate-800">
              <div className="flex justify-between items-start text-xs">
                <div>
                  <span className="font-mono text-xs font-bold text-primary-light">#{sampleTask.jobCardNumber}</span>
                  <h4 className="font-bold text-sm text-white mt-0.5">{sampleTask.serviceName}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{sampleTask.vehicle}</p>
                </div>
                <span className="text-[10px] bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-emerald-400 font-mono font-bold">
                  {sampleTask.efficiency} Efficiency
                </span>
              </div>

              {/* Timers */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                    Active Working
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-black text-emerald-400 block mt-0.5">
                    {sampleTask.activeTime}
                  </span>
                </div>

                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                    Break Duration
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-black text-amber-400 block mt-0.5">
                    {sampleTask.breakTime}
                  </span>
                </div>
              </div>

              {/* Interactive Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {isPaused ? (
                  <button
                    type="button"
                    onClick={() => setIsPaused(false)}
                    className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <FaRedo className="w-3 h-3" /> Resume Work
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsPaused(true)}
                    className="py-2.5 px-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <FaPause className="w-3 h-3" /> Take Break
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setFinished(true);
                    setTimeout(() => setFinished(false), 3000);
                  }}
                  className="py-2.5 px-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <FaCheckCircle className="w-3 h-3" /> Finish Task
                </button>
              </div>

              {finished && (
                <div className="p-2.5 bg-emerald-950/90 border border-emerald-600/60 rounded-xl text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                  <FaCheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Logged {sampleTask.activeTime} active repair hours to technician ledger!</span>
                </div>
              )}
            </div>

            {/* Floating Bar Snippet */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs flex items-center justify-between text-slate-600">
              <span className="flex items-center gap-1.5">
                <FaUserCheck className="text-primary w-3.5 h-3.5" /> Assigned: {sampleTask.mechanic}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Global Floating Bar Enabled</span>
            </div>
          </div>

          {/* Right Panel: 4 Solution Pillars & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {clockingCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EFE9E7] text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{cap.title}</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link href="/features/job-card-management/">
                <Button
                  variant="hero"
                  onClick={handleCtaClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
                >
                  Explore Job Card &amp; Time Tracking Features <FaArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
