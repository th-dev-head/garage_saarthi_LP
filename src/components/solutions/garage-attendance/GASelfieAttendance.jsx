"use client";

import React, { useState } from "react";
import {
  FaCamera,
  FaCheckCircle,
  FaShieldAlt,
  FaUserCheck,
  FaClock,
  FaSlidersH,
  FaMobileAlt,
  FaUserClock,
  FaRegCheckCircle,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const liveRoster = [
  {
    name: "Ramesh Sharma",
    role: "Senior Technician",
    time: "09:14 AM",
    status: "Present",
    badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
    initials: "RS",
    initialsBg: "bg-emerald-100 text-emerald-800",
  },
  {
    name: "Imran Khan",
    role: "Denting Tech",
    time: "09:28 AM",
    status: "Present",
    badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
    initials: "IK",
    initialsBg: "bg-blue-100 text-blue-800",
  },
  {
    name: "Vikas Patel",
    role: "Auto Electrician",
    time: "09:52 AM",
    status: "Grace Period",
    badgeStyle: "bg-amber-50 text-amber-800 border-amber-200",
    initials: "VP",
    initialsBg: "bg-amber-100 text-amber-800",
  },
  {
    name: "Suresh Rawat",
    role: "Helper Tech",
    time: "Not Checked In",
    status: "Absent",
    badgeStyle: "bg-rose-50 text-rose-700 border-rose-200",
    initials: "SR",
    initialsBg: "bg-rose-100 text-rose-800",
  },
];

const selfiePillars = [
  {
    icon: FaShieldAlt,
    title: "Zero Buddy Punching (Anti-Proxy Guarantee)",
    desc: "Camera capture authenticates the technician's face at punch-in. One mechanic can never clock in for an absent friend.",
  },
  {
    icon: FaUserClock,
    title: "Real-Time Shop Floor Visibility",
    desc: "Service managers see exact live headcounts on their dashboard: who is at their bay, who is on break, and late arrivals with grace period logs.",
  },
  {
    icon: FaSlidersH,
    title: "Flexible Role-Based Enforcement",
    desc: "Enforce mandatory selfie photos for bay mechanics and helpers, while keeping it optional for front-office receptionists and store managers.",
  },
  {
    icon: FaMobileAlt,
    title: "Runs on Any Workshop Mobile or Tablet",
    desc: "No expensive biometric machines or fingerprint sensors needed. Operates seamlessly on Android smartphones, shop tablets, and desktop webcams.",
  },
];

export default function GASelfieAttendance({ bgClass = "bg-white" }) {
  const [activeTab, setActiveTab] = useState("checkIn");

  return (
    <section className={`py-16 md:py-24 px-4 lg:px-15 2xl:px-50 ${bgClass} flex justify-center`}>
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Anti-Proxy Verification
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Selfie-Verified Punch In &amp;{" "}
            <GradientUnderline>Live Staff Roster</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate fake attendance and buddy punching in your garage. Mechanics clock in and out using a verified camera selfie from any workshop phone or tablet, logged instantly to the admin live roster.
          </p>
        </div>

        {/* Dual Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Simulated Selfie Punch-In Dialog (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-xl p-5 sm:p-7 shadow-lg space-y-5">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-primary flex items-center justify-center font-bold">
                  <FaCamera className="text-sm" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {activeTab === "checkIn" ? "Punch In Selfie Verification" : "Punch Out Selfie Verification"}
                  </h3>
                  <p className="text-[11px] text-slate-500">Live camera capture • Mandatory for workshop staff</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <FaCheckCircle className="text-[9px]" /> Camera Active
              </span>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl text-xs font-semibold text-center">
              <button
                type="button"
                onClick={() => setActiveTab("checkIn")}
                className={`py-2 rounded-lg font-bold transition ${
                  activeTab === "checkIn"
                    ? "bg-white text-slate-900 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Punch In (Morning Shift)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("checkOut")}
                className={`py-2 rounded-lg font-bold transition ${
                  activeTab === "checkOut"
                    ? "bg-white text-slate-900 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Punch Out (End of Shift)
              </button>
            </div>

            {/* Camera Viewfinder Viewport Mockup */}
            <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-200 flex flex-col items-center justify-center p-4 text-white">
              {/* Corner focus brackets */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-emerald-400"></div>
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-emerald-400"></div>
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-emerald-400"></div>
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-emerald-400"></div>

              {/* Center Technician Preview */}
              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="w-16 h-16 rounded-full bg-slate-700/80 border-2 border-emerald-400 flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-emerald-300">RS</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-[11px] px-3 py-0.5 rounded-full border border-emerald-400/30 font-medium">
                  <FaRegCheckCircle className="text-[10px]" />
                  Face Aligned: Ramesh Sharma
                </div>
              </div>

              {/* Bottom camera info bar */}
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-slate-300 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                <span className="font-mono flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span> 09:14:22 AM IST
                </span>
                <span className="font-medium text-slate-300">Device: Workshop Samsung Tab A9</span>
              </div>
            </div>

            {/* Live Staff Roster Mini-Table */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <FaUserCheck className="text-primary text-xs" /> Admin Live Attendance Roster
                </span>
                <span className="text-[10px] font-semibold text-slate-500">Auto-synced with Bay Allocation</span>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 text-xs bg-white">
                {liveRoster.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 hover:bg-slate-50/80 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold ${item.initialsBg}`}>
                        {item.initials}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-[11px] leading-tight">{item.name}</p>
                        <p className="text-[10px] text-slate-500">{item.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-600 font-mono hidden sm:inline">{item.time}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${item.badgeStyle}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Value Pillars (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {selfiePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="border border-slate-200/80 rounded-2xl p-4.5 bg-slate-50 hover:border-orange-200 transition-colors shadow-2xs space-y-1.5"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center shrink-0">
                      <IconComp className="text-sm" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-900">{pillar.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed pl-10.5">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}

            {/* Quick Summary Pill */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/70 text-xs space-y-1">
              <span className="font-bold text-primary block">Automatic Payroll & Commission Link</span>
              <p className="text-slate-700 text-[11px] leading-relaxed">
                Every verified punch-in automatically flows into technician work-hour calculations and job card incentive payouts without manual Excel entry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
