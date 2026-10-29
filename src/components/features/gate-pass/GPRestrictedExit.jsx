"use client";

import React, { useState } from "react";
import {
  FaLock,
  FaCheckCircle,
  FaTimesCircle,
  FaCamera,
  FaShieldAlt,
  FaQrcode,
  FaCar,
  FaFileInvoiceDollar,
  FaExclamationTriangle,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GPRestrictedExit({ bgClass = "bg-slate-50" }) {
  const [gateStatus, setGateStatus] = useState("blocked"); // "blocked" | "approved"

  return (
    <section className={`py-16 md:py-24 px-4 lg:px-15 2xl:px-50 ${bgClass} flex justify-center`}>
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Security &amp; Payment Guard
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Restricted Gate Exit &amp;{" "}
            <GradientUnderline>Mandatory Media Verification</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate unpaid vehicle releases and damage disputes. GarageSaarthi automatically locks exit gate passes until the final repair invoice is paid and mandatory delivery photos are uploaded.
          </p>
        </div>

        {/* Dual Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Gate Pass Security Simulator (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-xl p-5 sm:p-7 shadow-lg space-y-5">
            {/* Mockup Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-primary flex items-center justify-center font-bold">
                  <FaCar className="text-sm" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Gate Pass #GP-2026-114</h3>
                  <p className="text-[11px] text-slate-500">Tata Nexon EV • MH 02 CD 4589</p>
                </div>
              </div>
              <span
                className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                  gateStatus === "blocked"
                    ? "bg-rose-50 text-rose-700 border-rose-200"
                    : "bg-emerald-50 text-emerald-700 border-emerald-200"
                }`}
              >
                {gateStatus === "blocked" ? (
                  <>
                    <FaTimesCircle className="text-[9px]" /> Exit Restricted
                  </>
                ) : (
                  <>
                    <FaCheckCircle className="text-[9px]" /> Security Cleared
                  </>
                )}
              </span>
            </div>

            {/* Status Switcher Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl text-xs font-semibold text-center">
              <button
                type="button"
                onClick={() => setGateStatus("blocked")}
                className={`py-2 rounded-lg font-bold transition flex items-center justify-center gap-1.5 ${
                  gateStatus === "blocked"
                    ? "bg-white text-rose-700 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <FaLock className="text-xs text-rose-600" /> Scenario 1: Unpaid / Missing Media
              </button>
              <button
                type="button"
                onClick={() => setGateStatus("approved")}
                className={`py-2 rounded-lg font-bold transition flex items-center justify-center gap-1.5 ${
                  gateStatus === "approved"
                    ? "bg-white text-emerald-700 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <FaCheckCircle className="text-xs text-emerald-600" /> Scenario 2: Paid &amp; Verified
              </button>
            </div>

            {/* Checklist & Gate Security Inspection Card */}
            <div className="border border-slate-200 rounded-2xl p-4 space-y-3.5 bg-slate-50/50 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="font-bold text-slate-700">Pre-Release Security Requirements</span>
                <span className="text-[10px] text-slate-500 font-mono">Rule: Automated Gate Check</span>
              </div>

              {/* Requirement 1: Payment Check */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                      gateStatus === "blocked"
                        ? "bg-rose-100 text-rose-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    <FaFileInvoiceDollar />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-[11px]">Invoice Payment Status</p>
                    <p className="text-[10px] text-slate-500">
                      {gateStatus === "blocked"
                        ? "Pending Balance: ₹ 4,850.00 (Unpaid)"
                        : "Paid via UPI QR • ₹ 4,850.00 (Cleared)"}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    gateStatus === "blocked"
                      ? "bg-rose-50 text-rose-700 border border-rose-200"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  }`}
                >
                  {gateStatus === "blocked" ? "Failed ❌" : "Passed ✓"}
                </span>
              </div>

              {/* Requirement 2: Mandatory Media Enforcement */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                      gateStatus === "blocked"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    <FaCamera />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-[11px]">Mandatory Delivery Photos</p>
                    <p className="text-[10px] text-slate-500">
                      {gateStatus === "blocked"
                        ? "Min 2 required: 0 photos uploaded"
                        : "3 Photos attached (Front, Rear, Odometer)"}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    gateStatus === "blocked"
                      ? "bg-amber-50 text-amber-800 border border-amber-200"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  }`}
                >
                  {gateStatus === "blocked" ? "Pending ⚠️" : "Passed ✓"}
                </span>
              </div>

              {/* Requirement 3: Guard QR Scan Clearance */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs shrink-0">
                    <FaQrcode />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-[11px]">Security Guard Verification</p>
                    <p className="text-[10px] text-slate-500">
                      {gateStatus === "blocked"
                        ? "QR code locked. Gate open signal disabled."
                        : "QR scanned by Guard #2. Exit authorized."}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    gateStatus === "blocked"
                      ? "bg-slate-100 text-slate-500 border border-slate-200"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  }`}
                >
                  {gateStatus === "blocked" ? "Locked 🔒" : "Authorized ✓"}
                </span>
              </div>
            </div>

            {/* Bottom Alert Banner */}
            <div
              className={`p-3 rounded-2xl border text-xs flex items-center gap-2.5 ${
                gateStatus === "blocked"
                  ? "bg-rose-50/80 border-rose-200 text-rose-800"
                  : "bg-emerald-50/80 border-emerald-200 text-emerald-800"
              }`}
            >
              {gateStatus === "blocked" ? (
                <>
                  <FaExclamationTriangle className="text-rose-600 text-sm shrink-0" />
                  <span>
                    <strong>Vehicle Cannot Leave:</strong> Collect invoice payment or override with manager PIN to unlock the gate pass.
                  </span>
                </>
              ) : (
                <>
                  <FaCheckCircle className="text-emerald-600 text-sm shrink-0" />
                  <span>
                    <strong>Vehicle Cleared for Delivery:</strong> Digital exit pass verified with time-stamped security log.
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Right Panel: Value Pillars (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-slate-200/80 rounded-2xl p-4.5 bg-white hover:border-orange-200 transition-colors shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
                  <FaLock className="text-sm" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">Stop Unpaid Vehicle Deliveries</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pl-10.5">
                Ensure customers settle outstanding repair dues before getting their keys. Automatic lockdown ensures guards never release a car by mistake.
              </p>
            </div>

            <div className="border border-slate-200/80 rounded-2xl p-4.5 bg-white hover:border-orange-200 transition-colors shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center shrink-0">
                  <FaCamera className="text-sm" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">Mandatory Delivery Photo Proof</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pl-10.5">
                Enforce a minimum photo count (odometer, clean exterior, replaced parts) before closing jobs to permanently protect against false damage claims.
              </p>
            </div>

            <div className="border border-slate-200/80 rounded-2xl p-4.5 bg-white hover:border-orange-200 transition-colors shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <FaQrcode className="text-sm" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">1-Second Mobile QR Scan at Gate</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pl-10.5">
                Guards simply scan the customer's WhatsApp gate pass QR code on any Android device to verify clearance without calling the office.
              </p>
            </div>

            <div className="border border-slate-200/80 rounded-2xl p-4.5 bg-white hover:border-orange-200 transition-colors shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <FaShieldAlt className="text-sm" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">Configurable Manager Override</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pl-10.5">
                Need to release a corporate fleet car with credit terms? Admins can approve a special one-time override while logging full manager credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

