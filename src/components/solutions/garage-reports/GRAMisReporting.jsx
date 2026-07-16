import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

export default function GRAMisReporting() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Management Reports
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Get Better Management Visibility with <GradientUnderline>Garage MIS Reports</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Instead of cross-checking multiple physical files, Excel sheets, and billing slips, consolidate your garage database. Access clean management reports that support regular business reviews and help you make calculated operational updates.
        </p>
        <div className="pt-2">
          <Link href="/" className="text-xs text-primary font-bold hover:underline">
            Explore Garage Management Software →
          </Link>
        </div>
      </div>
    </section>
  );
}