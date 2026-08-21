"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FRONTEND_URL } from "@/src/config/env";
import Button from "../../common/Button";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function VIHero() {
  const router = useRouter();

  return (
    <section className="relative pt-48 pb-24 md:pt-45 md:pb-32 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full relative z-10 flex flex-col items-center text-center">

        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          DIGITAL VEHICLE HEALTH CARDS
        </div>

        {/* Main Title */}
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight max-w-4xl tracking-tight">
          100+ Checkpoint Digital Vehicle Inspections{" "}
          <GradientUnderline>in Minutes</GradientUnderline>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Record exact vehicle conditions with photos, mechanic remarks, and color-coded statuses. Build trust by sending digital health cards directly to your customers' WhatsApp.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <Button
            variant="hero"
            onClick={() => window.open(`${FRONTEND_URL}/register`, '_blank')}
          >
            Start 7-Day Free Trial <FaArrowRight />
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-slate-300 text-sm font-medium">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" /> WhatsApp Sharing
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" /> Color-Coded Statuses
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" /> Mechanic Remarks
          </div>
        </div>

      </div>
    </section>
  );
}
