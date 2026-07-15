import React from "react";
import GradientUnderline from "../common/GradientUnderline";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import PlayStoreBadge from "../common/PlayStoreBadge";

export default function WAFinalCTA() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl 2xl:max-w-full w-full text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold mt-4 mb-4 leading-tight">
          Ready to Manage Your Workshop{" "}
          <GradientUnderline>from One App?</GradientUnderline>
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
          Start your trial or download the Android app and digitize your workshop management with GarageSaarthi.
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Link
            href={FRONTEND_URL + "/register"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-6 py-3 text-base font-bold text-white shadow-lg bg-[linear-gradient(92.52deg,#B22F0E_2.1%,#D73D17_105.99%)] hover:opacity-95 active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
          >
            Start 7-Day Free Trial
            <FaArrowRight className="w-4 h-4" />
          </Link>
          <PlayStoreBadge />
        </div>
      </div>
    </section>
  );
}
