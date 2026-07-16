import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

export default function GRADefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Business Visibility
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Turn Daily Garage Data into <GradientUnderline>Clear Business Reports</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Running a busy garage means handling counter sales, billing, job cards, parts stock, payroll files, and invoices. If this data stays scattered in different notebooks, Excel documents, or personal messaging apps, understanding overall workshop performance is almost impossible.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi automatically structures your daily transactions and logs into clear, visual business reports. Retrieve operational data, track performance, and make decision calls based on real numbers.
          </p>
          <div className="pt-2">
            <Link href="/" className="text-xs text-primary font-bold hover:underline">
              Explore Garage Management Software →
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text-dark">Say Goodbye to Scattered Records</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            GarageSaarthi integrates all key data sources:
          </p>
          <ul className="space-y-2 text-xs md:text-sm text-slate-600">
            <li>• Closed job card logs</li>
            <li>• Counter spare parts sales</li>
            <li>• Employee attendance sheets</li>
            <li>• Payments and expense files</li>
          </ul>
        </div>
      </div>
    </section>
  );
}