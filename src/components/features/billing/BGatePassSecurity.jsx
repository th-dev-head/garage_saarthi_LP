"use client";

import React, { useState } from "react";
import {
  FaShieldAlt,
  FaQrcode,
  FaCheckCircle,
  FaTimesCircle,
  FaCar,
  FaUserCheck,
  FaPrint,
  FaReceipt,
  FaLock,
  FaClock,
  FaExclamationTriangle,
  FaInfoCircle
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const sampleGatePasses = [
  {
    id: "gp-1",
    gatePassNumber: "GP-2026-0894",
    vehicleNumber: "MH 02 AB 9988",
    vehicleModel: "Hyundai Creta 1.5 SX",
    customerName: "Dinesh Sharma",
    jobNumber: "JC-2026-1042",
    invoiceNumber: "INV-2026-0412",
    invoiceAmount: "₹ 14,850.00",
    paymentStatus: "Paid",
    paymentBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
    releaseStatus: "Authorized",
    authBadge: "bg-emerald-500 text-white",
    guardNote: "Payment verified & vehicle inspected. All cleared for exit."
  },
  {
    id: "gp-2",
    gatePassNumber: "GP-2026-0899",
    vehicleNumber: "DL 04 CD 1234",
    vehicleModel: "Honda City 1.5 V",
    customerName: "Vikram Malhotra",
    jobNumber: "JC-2026-1048",
    invoiceNumber: "INV-2026-0418",
    invoiceAmount: "₹ 28,400.00",
    paymentStatus: "Pending",
    paymentBadge: "bg-red-100 text-red-800 border-red-300",
    releaseStatus: "Blocked",
    authBadge: "bg-red-500 text-white",
    guardNote: "Exit blocked: Customer payment settlement pending at billing desk."
  },
  {
    id: "gp-3",
    gatePassNumber: "GP-2026-0872",
    vehicleNumber: "GJ 01 XY 7721",
    vehicleModel: "Maruti Swift ZXI",
    customerName: "Anand Verma",
    jobNumber: "JC-2026-1035",
    invoiceNumber: "INV-2026-0395",
    invoiceAmount: "₹ 8,200.00",
    paymentStatus: "Paid",
    paymentBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
    releaseStatus: "Already Exited",
    authBadge: "bg-amber-500 text-white",
    guardNote: "Vehicle exited workshop gate at 11:45 AM (Verified by Guard Ramesh)."
  }
];

const gatePassPillars = [
  {
    icon: FaQrcode,
    title: "Dynamic QR-Code Gate Passes",
    desc: "Generate tamper-proof digital gate passes with unique cryptographic QR tokens as soon as an invoice is settled or job card is closed."
  },
  {
    icon: FaUserCheck,
    title: "Zero-App Smartphone QR Verification",
    desc: "Security guards scan the QR using any mobile camera without logging in. The system instantly verifies payment status and authorizes release."
  },
  {
    icon: FaLock,
    title: "Unpaid Vehicle Exit Prevention",
    desc: "Strictly blocks gate clearance if invoice balances, insurance deductibles, or parts counter bills remain pending at the cashier desk."
  },
  {
    icon: FaClock,
    title: "Immutable Vehicle Exit Audit Ledger",
    desc: "Every exit is permanently logged with guard name, vehicle registration, exact timestamp, and notes to eliminate drive-away theft."
  }
];

export default function BGatePassSecurity() {
  const [selectedPassId, setSelectedPassId] = useState("gp-1");
  const [exitedNotification, setExitedNotification] = useState(false);

  const activePass = sampleGatePasses.find((gp) => gp.id === selectedPassId) || sampleGatePasses[0];

  const handleSimulateScan = () => {
    setExitedNotification(true);
    setTimeout(() => setExitedNotification(false), 3500);
  };

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <FaShieldAlt className="w-3.5 h-3.5" /> Security &amp; Vehicle Release Control
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Zero Unauthorised Vehicle Exits with Instant{" "}
            <GradientUnderline>QR Gate Pass Verification</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate vehicle release confusion, unapproved drive-aways, and unpaid customer exits. Generate digital QR-stamped gate passes upon payment, allowing security guards to verify clearance in 2 seconds on any smartphone.
          </p>
        </div>

        {/* Interactive Dual-Panel Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Top Header */}
          <div className="p-4 md:p-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold">
                <FaShieldAlt className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold">Digital Gate Pass &amp; Vehicle Exit Engine</h3>
                <p className="text-xs text-slate-400">Live QR payment validation &amp; guard exit authorization</p>
              </div>
            </div>

            {/* Quick Gate Pass Selector */}
            <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
              {sampleGatePasses.map((gp) => (
                <button
                  key={gp.id}
                  type="button"
                  onClick={() => {
                    setSelectedPassId(gp.id);
                    setExitedNotification(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    selectedPassId === gp.id
                      ? "bg-primary text-white shadow"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {gp.vehicleNumber.split(" ")[0]}.. ({gp.paymentStatus})
                </button>
              ))}
            </div>
          </div>

          {/* Dual Panel Body */}
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Panel: Digital Gate Pass Slip Mockup (7 Cols) */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 space-y-6 shadow-sm">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
                {/* Gate Pass Header */}
                <div className="flex flex-col sm:row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EFE9E7] text-primary flex items-center justify-center font-bold">
                      <FaReceipt className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-primary block">
                        OFFICIAL GATE PASS
                      </span>
                      <h4 className="text-sm font-black text-slate-900">{activePass.gatePassNumber}</h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${activePass.paymentBadge}`}>
                      {activePass.paymentStatus === "Paid" ? "● Payment Cleared" : "● Payment Pending"}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${activePass.authBadge}`}>
                      {activePass.releaseStatus}
                    </span>
                  </div>
                </div>

                {/* Gate Pass Details Grid + QR Code */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  {/* QR Box (4 Cols) */}
                  <div className="sm:col-span-4 p-3 bg-slate-900 text-white rounded-xl text-center flex flex-col items-center justify-center space-y-2">
                    <div className="w-24 h-24 bg-white p-2 rounded-lg flex items-center justify-center shadow-inner">
                      <FaQrcode className="w-20 h-20 text-slate-900" />
                    </div>
                    <span className="text-[9px] text-slate-300 font-mono block">
                      SCAN AT WORKSHOP GATE
                    </span>
                  </div>

                  {/* Vehicle & Billing Data (8 Cols) */}
                  <div className="sm:col-span-8 space-y-2 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/70">
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Vehicle Number</span>
                        <span className="font-bold text-slate-900 text-xs block font-mono mt-0.5">
                          {activePass.vehicleNumber}
                        </span>
                        <span className="text-[10px] text-slate-500 truncate block">{activePass.vehicleModel}</span>
                      </div>

                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/70">
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Customer Details</span>
                        <span className="font-bold text-slate-900 text-xs block mt-0.5">{activePass.customerName}</span>
                        <span className="text-[10px] text-slate-500 font-mono">Job #{activePass.jobNumber}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/70">
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Invoice &amp; Amount</span>
                        <span className="font-bold text-primary text-xs block mt-0.5">{activePass.invoiceAmount}</span>
                        <span className="text-[10px] text-slate-500 font-mono">{activePass.invoiceNumber}</span>
                      </div>

                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/70">
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Gate Pass Validity</span>
                        <span className="font-bold text-slate-900 text-xs block mt-0.5">24 Hours (Active)</span>
                        <span className="text-[10px] text-emerald-600 font-medium">Digital Token Valid</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guard Scan Notice */}
                <div
                  className={`p-3 rounded-xl text-xs flex items-start gap-2.5 ${
                    activePass.paymentStatus === "Paid"
                      ? "bg-emerald-50 border border-emerald-200 text-emerald-900"
                      : "bg-red-50 border border-red-200 text-red-900"
                  }`}
                >
                  {activePass.paymentStatus === "Paid" ? (
                    <FaCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <FaTimesCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold block">
                      {activePass.paymentStatus === "Paid"
                        ? "Vehicle Release Authorized by Billing Desk"
                        : "Security Alert: Vehicle Exit Strictly Prohibited"}
                    </span>
                    <p className="text-[11px] mt-0.5 opacity-90">{activePass.guardNote}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSimulateScan}
                  disabled={activePass.paymentStatus !== "Paid"}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                    activePass.paymentStatus === "Paid"
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  <FaUserCheck className="w-3.5 h-3.5" /> Simulate Guard QR Scan &amp; Exit
                </button>
              </div>

              {exitedNotification && (
                <div className="p-3 bg-emerald-950 text-emerald-300 border border-emerald-700/60 rounded-xl text-xs flex items-center gap-2 animate-fadeIn">
                  <FaCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Guard verified QR Code! <strong>{activePass.vehicleNumber}</strong> marked as <strong>Exited</strong> with timestamp audit log.
                  </span>
                </div>
              )}
            </div>

            {/* Right Panel: 4 Security Pillars (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              {gatePassPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-primary/30 transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EFE9E7] text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{pillar.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}

              <div className="p-4 bg-[#EFE9E7] rounded-2xl border border-primary/20 text-xs text-slate-700 flex items-start gap-2.5">
                <FaInfoCircle className="text-primary w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Works seamlessly for both regular customer job cards and cashless insurance claim settlement releases.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
