"use client";

import React, { useState } from "react";
import {
  FaEyeSlash,
  FaUserShield,
  FaLock,
  FaWrench,
  FaCheckCircle,
  FaSlidersH,
  FaShieldAlt,
  FaEye,
  FaUserTie,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function JCMStaffPrivacy({ bgClass = "bg-slate-50" }) {
  const [viewRole, setViewRole] = useState("technician"); // "technician" | "admin"

  return (
    <section className={`py-16 md:py-24 px-4 lg:px-15 2xl:px-50 ${bgClass} flex justify-center`}>
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Workshop Staff Access Control
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Role-Based Staff Privacy &amp;{" "}
            <GradientUnderline>Hide Pricing in Job Cards</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Protect your garage's profit margins, customer phone numbers, and spare part costs. GarageSaarthi lets you mask financial pricing for floor mechanics while keeping them laser-focused on repair tasks and checklists.
          </p>
        </div>

        {/* Dual Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Interactive View Switcher Mockup (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-xl p-5 sm:p-7 shadow-lg space-y-5">
            {/* Mockup Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-primary flex items-center justify-center font-bold">
                  <FaUserShield className="text-sm" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Job Card #JC-2026-089</h3>
                  <p className="text-[11px] text-slate-500">Hyundai Creta 1.5 CRDi • GJ 05 AB 1234</p>
                </div>
              </div>

              {/* Live Role Badge */}
              <span
                className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                  viewRole === "technician"
                    ? "bg-amber-50 text-amber-800 border-amber-200"
                    : "bg-emerald-50 text-emerald-800 border-emerald-200"
                }`}
              >
                {viewRole === "technician" ? (
                  <>
                    <FaEyeSlash className="text-[9px]" /> Floor Mechanic View
                  </>
                ) : (
                  <>
                    <FaEye className="text-[9px]" /> Owner / Admin View
                  </>
                )}
              </span>
            </div>

            {/* Interactive Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl text-xs font-semibold text-center">
              <button
                type="button"
                onClick={() => setViewRole("technician")}
                className={`py-2 rounded-lg font-bold transition flex items-center justify-center gap-1.5 ${
                  viewRole === "technician"
                    ? "bg-white text-slate-900 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <FaEyeSlash className="text-xs text-primary" /> Technician View (Prices Hidden)
              </button>
              <button
                type="button"
                onClick={() => setViewRole("admin")}
                className={`py-2 rounded-lg font-bold transition flex items-center justify-center gap-1.5 ${
                  viewRole === "admin"
                    ? "bg-white text-slate-900 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <FaEye className="text-xs text-emerald-600" /> Owner View (Full Pricing)
              </button>
            </div>

            {/* Job Card Tasks & Parts Table */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden text-xs">
              <div className="bg-slate-50 px-3.5 py-2.5 border-b border-slate-200 font-bold text-slate-700 flex justify-between items-center">
                <span>Task / Spare Part Description</span>
                <span className="font-mono">
                  {viewRole === "technician" ? "Rate & Total" : "Billed Amount"}
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {/* Item 1 */}
                <div className="p-3 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
                  <div className="space-y-0.5">
                    <p className="font-bold text-slate-800 text-xs">Synthetic Engine Oil 5W-30 (3.8L)</p>
                    <p className="text-[10px] text-slate-500">Inventory Code: OIL-SYN-5W30 • Bay 2</p>
                  </div>
                  <div className="text-right">
                    {viewRole === "technician" ? (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        <FaLock className="text-[9px]" /> Hidden for Staff
                      </span>
                    ) : (
                      <span className="font-mono font-bold text-slate-900 text-xs">₹ 2,450.00</span>
                    )}
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-3 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
                  <div className="space-y-0.5">
                    <p className="font-bold text-slate-800 text-xs">OEM Oil Filter Replacement</p>
                    <p className="text-[10px] text-slate-500">Genuine Hyundai Mobis Part</p>
                  </div>
                  <div className="text-right">
                    {viewRole === "technician" ? (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        <FaLock className="text-[9px]" /> Hidden for Staff
                      </span>
                    ) : (
                      <span className="font-mono font-bold text-slate-900 text-xs">₹ 480.00</span>
                    )}
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-3 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
                  <div className="space-y-0.5">
                    <p className="font-bold text-slate-800 text-xs">Front Brake Caliper Cleaning &amp; Bleeding</p>
                    <p className="text-[10px] text-slate-500">Labor Charge • Assigned to: Ramesh S.</p>
                  </div>
                  <div className="text-right">
                    {viewRole === "technician" ? (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        <FaLock className="text-[9px]" /> Hidden for Staff
                      </span>
                    ) : (
                      <span className="font-mono font-bold text-slate-900 text-xs">₹ 650.00</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Summary Bar */}
              <div className="bg-slate-50/80 p-3 border-t border-slate-200 flex justify-between items-center text-xs">
                <span className="font-bold text-slate-700">Total Billed Estimate</span>
                <div>
                  {viewRole === "technician" ? (
                    <span className="text-xs font-semibold text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded">
                      Confidential (Owner Access Only)
                    </span>
                  ) : (
                    <span className="font-mono font-bold text-emerald-700 text-sm">
                      ₹ 3,580.00 <span className="text-[10px] text-slate-500 font-normal">(incl. 18% GST)</span>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Helper Note */}
            <div className="text-[11px] text-slate-500 flex items-center gap-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
              <FaCheckCircle className="text-emerald-500 shrink-0" />
              <span>
                Technicians only see the repair checklist, vehicle model, and assigned task items.
              </span>
            </div>
          </div>

          {/* Right Panel: Value Pillars (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-slate-200/80 rounded-2xl p-4.5 bg-white hover:border-orange-200 transition-colors shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center shrink-0">
                  <FaEyeSlash className="text-sm" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">Mask Part Prices &amp; Profit Margins</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pl-10.5">
                Prevent sensitive cost breakdowns, supplier margins, and billing rates from leaking. Floor mechanics only see what needs to be fixed.
              </p>
            </div>

            <div className="border border-slate-200/80 rounded-2xl p-4.5 bg-white hover:border-orange-200 transition-colors shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <FaUserShield className="text-sm" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">Restrict Staff to Assigned-Only Jobs</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pl-10.5">
                Keep customer contact info confidential. Mechanics can only open and log hours on vehicle job cards explicitly assigned to their technician bay.
              </p>
            </div>

            <div className="border border-slate-200/80 rounded-2xl p-4.5 bg-white hover:border-orange-200 transition-colors shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <FaWrench className="text-sm" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">Focus on Repair Quality &amp; Speed</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pl-10.5">
                Technicians enjoy a simplified mobile interface with clear task checklists, torque guidelines, and inspection photo capture without billing noise.
              </p>
            </div>

            <div className="border border-slate-200/80 rounded-2xl p-4.5 bg-white hover:border-orange-200 transition-colors shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                  <FaSlidersH className="text-sm" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">1-Click Settings Toggle</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pl-10.5">
                Turn price hiding and assigned-only restrictions on or off with a single toggle in GarageSaarthi's ActionHub settings menu anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
