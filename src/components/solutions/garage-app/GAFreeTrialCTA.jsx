import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import AppStoreBadge from "../../common/AppStoreBadge";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAFreeTrialCTA() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl 2xl:max-w-full w-full text-center bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Get Started Now
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
          Try the GarageSaarthi Garage Management{" "}
          <GradientUnderline>App Free for 7 Days</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
          Download the mobile application on your Android device, log in to experience digital job cards, billing, and follow-ups, or explore pricing plans.
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div className="flex items-center gap-4">
<PlayStoreBadge />
<AppStoreBadge />
</div>
<Link
            href={FRONTEND_URL + "/register"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            Start 7-Day Free Trial
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/pricing/"
            className="text-xs font-bold text-primary hover:underline"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

