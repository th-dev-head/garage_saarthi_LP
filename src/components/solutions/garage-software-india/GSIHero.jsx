"use client";

import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import PlayStoreBadge from "../../common/PlayStoreBadge";

export default function GSIHero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-4 lg:px-15 2xl:px-50 pt-36 pb-20 md:pt-44 md:pb-28 flex justify-center">
        <div className="mx-auto max-w-full lg:max-w-4xl 2xl:max-w-full text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Garage Management Software India
          </div>

          {/* H1 */}
          <h1 className="text-white font-extrabold leading-normal mb-6">
            <span className="block text-3xl md:text-5xl mb-2">
              Garage Management Software
            </span>
            <span className="block text-2xl md:text-4xl font-semibold text-orange-400">
              Built for Indian Workshops
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/75 text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Run your daily garage operations from one unified platform instead of managing separate paper registers, Excel sheets, and disconnected records. GarageSaarthi helps automotive workshops in India organize job cards, GST billing, inventory, staff, and WhatsApp service reminders.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center w-fit mx-auto mb-10">
            <Button
              variant="hero"
              className="!px-8 !py-3 text-base"
              icon={<FaArrowRight className="w-4 h-4" />}
              onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
            >
              Start 7-Day Free Trial
            </Button>
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-colors text-base"
            >
              View Pricing
            </Link>
            <PlayStoreBadge />
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm font-medium">
            <span>✓ No credit card required</span>
            <span>✓ 7-day free trial</span>
            <span>✓ GST billing included</span>
            <span>✓ Android app available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
