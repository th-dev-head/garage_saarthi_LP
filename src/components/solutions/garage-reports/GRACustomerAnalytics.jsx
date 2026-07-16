import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

export default function GRACustomerAnalytics() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Retention Logs
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Understand Customer and <GradientUnderline>Vehicle Activity</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Monitor customer repeat visit metrics and communication histories. GarageSaarthi unifies customer records, vehicle logs, and past service dates, giving workshop managers clear insight into repeat visit patterns.
          </p>
          <div className="flex gap-4 pt-2">
            <Link href="/features/customers" className="text-xs text-primary font-bold hover:underline">
              Explore Customer Management →
            </Link>
            <Link href="/features/vehicles" className="text-xs text-primary font-bold hover:underline">
              Explore Vehicle Records →
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-text-dark">Customer Database Metrics:</h3>
          <ul className="space-y-2 text-xs text-slate-500 leading-relaxed">
            <li>• Unique customer profiles list</li>
            <li>• Active phone lists & addresses</li>
            <li>• Number of linked vehicles</li>
            <li>• Historic invoice logs per client</li>
          </ul>
        </div>
      </div>
    </section>
  );
}