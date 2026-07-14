import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import PlayStoreBadge from "../common/PlayStoreBadge";

export default function WAFreeTrial() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl 2xl:max-w-full w-full text-center bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Free Onboarding
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-4 mb-4 leading-tight">
          Try the GarageSaarthi Workshop Management{" "}
          <span className="relative inline-block">
            App Free for 7 Days
            <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
          </span>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
          Get unrestricted access to job cards, billing registries, inventory tracking, staff logins, and service reminders. No credit card details required.
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Link
            href={FRONTEND_URL + "/register"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            Start 7-Day Free Trial
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
          <PlayStoreBadge />
          <Link
            href="/pricing"
            className="text-xs font-bold text-primary hover:underline"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
