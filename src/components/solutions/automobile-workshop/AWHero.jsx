import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import PlayStoreBadge from "../../common/PlayStoreBadge";

export default function AWHero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-4 lg:px-15 2xl:px-50 pt-36 pb-20 md:pt-44 md:pb-28 flex justify-center">
        <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Automobile Workshop Software — India
          </div>

          {/* H1 */}
          <h1 className="text-white font-extrabold leading-normal mb-6">
            <span className="block text-3xl md:text-5xl mb-2">Automobile Workshop Software</span>
            <span className="block text-2xl md:text-4xl font-semibold text-white/90">
              to Manage Your Entire Workshop
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base mb-8 leading-relaxed">
            GarageSaarthi is an all-in-one automobile workshop management software for managing repair jobs, estimates, digital job cards, spare parts inventory, billing, customers, vehicles, staff and automated service follow-ups.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              icon={<FaArrowRight className="w-4 h-4" />}
              onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
            >
              Start 7-Day Free Trial
            </Button>
            <Link
              href="/pricing"
              className="rounded-full bg-transparent text-white border border-white hover:bg-white/10 px-6 py-2.5 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap h-11"
            >
              View Pricing Plans
            </Link>
            <PlayStoreBadge />
          </div>
        </div>
      </div>
    </section>
  );
}

