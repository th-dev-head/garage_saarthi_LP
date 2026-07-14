import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";

export default function ARSFinalCTA() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white text-center flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl 2xl:max-w-full w-full">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
          Ready to Digitize Your{" "}
          <span className="relative inline-block">
            Auto Repair Shop?
            <span className="absolute -bottom-2 left-0 w-full h-[4px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
          </span>
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Move your garage operations away from complex paper registers and scattered template books into GarageSaarthi.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link
            href={FRONTEND_URL + "/register"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-3 text-base font-bold shadow-md transition-all inline-flex items-center gap-2"
          >
            Start 7-Day Free Trial
            <FaArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/pricing"
            className="rounded-full bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 text-sm font-semibold transition-all"
          >
            View Pricing Plans
          </Link>
        </div>
      </div>
    </section>
  );
}