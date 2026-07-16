import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

export default function VSHCustomerRecords() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Connected Databases
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Customer and <GradientUnderline>Vehicle Records Together</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Vehicle histories are only half the equation. To build a loyal customer base, you need to understand who owns the car or bike, how to reach them, and when to follow up.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi unifies customer information, vehicle specifications, invoice logs, active service alerts, and communication histories into a centralized platform.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/features/customers" className="text-xs text-primary font-bold hover:underline">
              Customer Management →
            </Link>
            <Link href="/features/vehicles" className="text-xs text-primary font-bold hover:underline">
              Vehicle Records →
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-text-dark">Quick View Checklist:</h3>
          <ul className="space-y-3 text-xs text-slate-500 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span><strong>Owner Profiles:</strong> Contact numbers, addresses, and pending dues.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span><strong>Vehicle Lists:</strong> Multiple cars/bikes linked to a single owner.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span><strong>Due Service Targets:</strong> Automatic next due targets set after billing.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}