import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

export default function VSHDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Efficiency
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Keep Complete Vehicle Service History <GradientUnderline>Organized Digitally</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            When customer vehicles return to your garage, searching for past job cards, diagnostic checks, invoice histories, or replaced parts manually takes too long. Managing this with paper registers or spreadsheets is unorganized and limits your team's capability to understand past vehicle service.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi introduces an organized cloud-based workflow. It links every customer record with their vehicles' diagnostic issues, repair cards, parts changes, and payment files. Maintain a complete, searchable vehicle history to optimize workshop efficiency.
          </p>
          <div className="pt-2">
            <Link href="/features/vehicles" className="text-xs text-primary font-bold hover:underline inline-flex items-center gap-1.5">Learn about Vehicle Management <FaArrowRight className="w-3 h-3" /></Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-text-dark">Track Multi-Visit Data</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Each profile builds a historical record of:
          </p>
          <ul className="space-y-2 text-xs md:text-sm text-slate-600 font-semibold">
            <li className="flex items-center gap-2">• Multiple job cards and dates</li>
            <li className="flex items-center gap-2">• Repair jobs and labor logs</li>
            <li className="flex items-center gap-2">• Replaced spare parts and bills</li>
            <li className="flex items-center gap-2">• Next-due maintenance targets</li>
          </ul>
        </div>
      </div>
    </section>
  );
}