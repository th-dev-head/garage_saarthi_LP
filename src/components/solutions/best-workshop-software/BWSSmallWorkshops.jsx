import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaExclamationTriangle, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const challenges = [
  "Paper job cards getting dirty, damaged, or lost on the workshop floor",
  "Customer phone numbers and vehicle numbers spread across diaries",
  "Manual spare parts inventory leading to stockouts or part leakage",
  "Manual mechanic attendance and loose slips for labor commissions",
  "Missed periodic service follow-ups and lost repeat customer business",
];

export default function BWSSmallWorkshops() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content - Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Small Business Solutions
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Workshop Management Software for Small Garages and{" "}
              <GradientUnderline>Growing Businesses</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Software shouldn't require a large enterprise setup to be useful. Independent and growing garages need simple, fast tools that eliminate daily operational headaches without unnecessary complexity.
            </p>

            <div className="space-y-3 pt-2">
              {challenges.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-amber-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Button
                variant="primary"
                icon={<FaArrowRight className="w-3.5 h-3.5" />}
                onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
              >
                Start Your 7-Day Free Trial
              </Button>
              <Link href="/solutions/automobile-workshop-software" className="text-xs font-bold text-primary hover:underline">
                Explore Independent Workshop Solutions →
              </Link>
            </div>
          </div>

          {/* Right Column Visual Box */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3">
              Built to Scale as You Grow
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              GarageSaarthi allows small workshop operators to digitize job sheet entry and GST billing today, while unlocking spare parts inventory, mechanic commissions, and branch controls as the business grows.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex items-center gap-3">
              <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-slate-900">Zero Technical Overhead</p>
                <p className="text-slate-500">Run completely from standard laptops and Android phones.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
