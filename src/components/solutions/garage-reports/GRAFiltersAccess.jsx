import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GRAFiltersAccess() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text-dark">Quick Usability Features:</h3>
          <ul className="space-y-2.5 text-xs text-slate-500 leading-relaxed">
            <li>✓ Date-range filtering (Daily, Weekly, Monthly, Custom)</li>
            <li>✓ Export reports to PDF or Excel formats</li>
            <li>✓ Role-based reports permission limits</li>
            <li>✓ CA Access for tax processing checks</li>
          </ul>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Export & Access
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Find the Garage Information You Need Without <GradientUnderline>Checking Multiple Records</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Filter billing lists or stock summaries with custom parameters. You can export data lists to Excel or PDF files in one tap. Define CA permissions so your chartered accountant can audit files directly.
          </p>
          <div className="pt-2">
            <Link href="/features/ca-access" className="text-xs text-primary font-bold hover:underline inline-flex items-center gap-1">
              Explore CA Access <FaChevronRight className="w-2.5 h-2.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}