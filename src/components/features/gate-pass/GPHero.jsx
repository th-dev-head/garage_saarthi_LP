"use client";

import React from "react";
import Link from "next/link";
import {
  FaShieldAlt,
  FaQrcode,
  FaCheckCircle,
  FaPrint,
  FaArrowRight,
  FaCar,
  FaLock,
  FaReceipt,
  FaUserCheck,
  FaWhatsapp
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function GPHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a1c23] via-[#12141a] to-[#0d0e12] text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4 lg:px-15 2xl:px-50 flex justify-center">
      {/* Background glow & grid accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(176,46,12,0.18),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,100,60,0.12),transparent_40%)] pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full relative z-10 space-y-12">
        {/* Top Announcement Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-light text-xs md:text-sm font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <FaShieldAlt className="text-primary w-3.5 h-3.5" />
            <span>QR-Enabled Vehicle Exit Security &amp; Clearance Engine</span>
          </div>
        </div>

        {/* Hero Title & Subheading */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
            Smart Digital <GradientUnderline>Gate Pass &amp; Vehicle Release</GradientUnderline> Software
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            Eliminate unauthorized vehicle drive-aways, unpaid customer exits, and lost paper gate slips. Generate cryptographic QR gate passes in 1-click, verify payment clearance in 2 seconds on any smartphone, and maintain an immutable exit audit ledger.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="hero"
              className="w-full sm:w-auto text-sm md:text-base px-8 py-3.5 !rounded-full shadow-lg hover:shadow-primary/30 font-bold"
              onClick={() => {
                trackEvent("Lead");
                window.open(`${FRONTEND_URL}/signup`, "_blank");
              }}
            >
              Generate Free QR Gate Pass
              <FaArrowRight className="w-3.5 h-3.5 ml-2 inline-block" />
            </Button>
            <Link
              href="#interactive-demo"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 border border-white/20 transition-all text-center backdrop-blur-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <FaQrcode className="text-primary-light" />
              Watch Live QR Scan Demo
            </Link>
          </div>

          {/* Micro Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-300 pt-2 font-medium">
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-400 w-3.5 h-3.5" /> Zero Guard App Login Required
            </span>
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-400 w-3.5 h-3.5" /> Thermal 2-Inch/3-Inch &amp; A4 Print
            </span>
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-400 w-3.5 h-3.5" /> Unpaid Bill Exit Blocking
            </span>
          </div>
        </div>

        {/* Hero Visual Card / Mockup Presentation */}
        <div className="relative max-w-4xl mx-auto pt-4">
          <div className="bg-slate-900/90 rounded-3xl border border-slate-700/80 shadow-2xl p-4 sm:p-6 md:p-8 backdrop-blur-xl">
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                  <FaShieldAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    Live Security Gate Monitor <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </h3>
                  <p className="text-[11px] text-slate-400">Workshop Exit Checkpoint • Real-Time Cloud Sync</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full font-bold flex items-center gap-1">
                  <FaCheckCircle className="w-3 h-3" /> Gate Pass Active
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary-light border border-primary/40 rounded-full font-mono text-[11px]">
                  GP-2026-0894
                </span>
              </div>
            </div>

            {/* Grid Showcase of Pass Slip + Guard Verification */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left: Thermal Gate Pass Slip Mockup (7 Cols) */}
              <div className="md:col-span-7 bg-white text-slate-900 rounded-2xl p-5 shadow-lg border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block">
                      GARAGESAARTHI WORKSHOP
                    </span>
                    <h4 className="text-base font-black text-slate-900">DIGITAL VEHICLE GATE PASS</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-slate-400 block">TIME STAMP</span>
                    <span className="text-xs font-bold text-slate-700">Today, 04:30 PM</span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-3 items-center">
                  <div className="col-span-4 bg-slate-900 text-white rounded-xl p-2.5 flex flex-col items-center justify-center space-y-1">
                    <div className="w-16 h-16 bg-white p-1 rounded-lg flex items-center justify-center">
                      <FaQrcode className="w-14 h-14 text-slate-900" />
                    </div>
                    <span className="text-[8px] font-mono text-slate-300 uppercase">Scan to Exit</span>
                  </div>

                  <div className="col-span-8 space-y-1.5 text-xs">
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200/80 flex justify-between">
                      <span className="text-slate-500 text-[11px]">Vehicle:</span>
                      <span className="font-bold font-mono text-slate-900">MH 02 AB 9988</span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200/80 flex justify-between">
                      <span className="text-slate-500 text-[11px]">Model:</span>
                      <span className="font-semibold text-slate-800">Hyundai Creta 1.5</span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200/80 flex justify-between">
                      <span className="text-slate-500 text-[11px]">Customer:</span>
                      <span className="font-semibold text-slate-800">Dinesh Sharma</span>
                    </div>
                    <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200 flex justify-between items-center text-emerald-900 font-bold">
                      <span className="text-[11px]">Bill ₹ 14,850.00</span>
                      <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full">PAID IN FULL</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-100 rounded-lg p-2.5 text-[11px] text-slate-600 flex items-center justify-between font-mono">
                  <span>Job: JC-2026-1042</span>
                  <span>Invoice: INV-2026-0412</span>
                  <span className="text-emerald-700 font-bold">✓ Clearance OK</span>
                </div>
              </div>

              {/* Right: Guard Verification Status (5 Cols) */}
              <div className="md:col-span-5 space-y-3 text-xs">
                <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <FaUserCheck className="w-4 h-4" />
                    <span>Guard Mobile Scanner Preview</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Guard points phone camera at paper slip or customer's WhatsApp screen. Instant verification screen loads with zero login.
                  </p>
                </div>

                <div className="bg-emerald-950/80 border border-emerald-700/60 rounded-2xl p-4 text-emerald-300 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 block">Security Action</span>
                  <div className="font-bold text-sm flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-emerald-400" />
                    Authorized for Exit
                  </div>
                  <p className="text-[11px] text-emerald-200/90 pt-1">
                    Guard taps <strong>"Confirm Vehicle Exit"</strong> to record release timestamp &amp; close vehicle cycle.
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 px-2">
                  <span className="flex items-center gap-1">
                    <FaPrint className="text-primary-light" /> 2" Thermal Roll Ready
                  </span>
                  <span className="flex items-center gap-1">
                    <FaWhatsapp className="text-emerald-400" /> WhatsApp PDF
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
