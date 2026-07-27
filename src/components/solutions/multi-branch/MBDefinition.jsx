import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const multiBranchPitfalls = [
  { isPositive: false, title: "Isolated records:", desc: "Stock and customers aren't shared between locations." },
  { isPositive: false, title: "Delayed reports:", desc: "Waiting for end-of-day sheets or WhatsApp updates from branch managers." },
  { isPositive: true, title: "GarageSaarthi System:", desc: "Centralized dashboard showing real-time activities across all locations." }
];

export default function MBDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            The Expansion Problem
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Managing Multiple Garage Branches Shouldn't Mean <GradientUnderline>Managing Separate Systems</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Operating multiple garage locations or workshop branches brings unique challenges. Managing separate notebooks, offline software packages, individual spreadsheets, and separate stock ledgers at each branch leads to delayed visibility, inventory mismatches, and user role errors.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides a centralized, cloud-based multi-location system. Consolidate your branch data, manage distinct user groups and roles, and check branch-wise performance metrics centrally. Keep your growing business organized.
          </p>
        </div>
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text-dark">Common Multi-Branch Pitfalls</h3>
          <ul className="space-y-3 text-xs md:text-sm text-slate-600">
            {multiBranchPitfalls.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className={item.isPositive ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                  {item.isPositive ? "✓" : "✕"}
                </span>
                <span><strong>{item.title}</strong> {item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}