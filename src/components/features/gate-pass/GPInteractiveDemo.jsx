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
  FaInfoCircle,
  FaSearch,
  FaFileInvoice
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const demoGatePasses = [
  {
    id: "gp-1",
    gatePassNumber: "GP-2026-0894",
    vehicleNumber: "MH 02 AB 9988",
    vehicleModel: "Hyundai Creta 1.5 SX",
    customerName: "Dinesh Sharma",
    phone: "+91 98765 43210",
    jobNumber: "JC-2026-1042",
    invoiceNumber: "INV-2026-0412",
    invoiceAmount: "₹ 14,850.00",
    paymentStatus: "Paid",
    releaseStatus: "Authorized",
    authBadge: "bg-emerald-500 text-white",
    paymentBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
    issuedAt: "Today, 03:45 PM",
    expiresAt: "Tomorrow, 03:45 PM",
    advisor: "Rajesh V.",
    guardNote: "Payment verified. Vehicle inspected with zero external damage. Clearance granted."
  },
  {
    id: "gp-2",
    gatePassNumber: "GP-2026-0899",
    vehicleNumber: "DL 04 CD 1234",
    vehicleModel: "Honda City 1.5 V",
    customerName: "Vikram Malhotra",
    phone: "+91 98111 22334",
    jobNumber: "JC-2026-1048",
    invoiceNumber: "INV-2026-0418",
    invoiceAmount: "₹ 28,400.00",
    paymentStatus: "Pending",
    releaseStatus: "Blocked",
    authBadge: "bg-red-500 text-white",
    paymentBadge: "bg-red-100 text-red-800 border-red-300",
    issuedAt: "Today, 04:10 PM",
    expiresAt: "Tomorrow, 04:10 PM",
    advisor: "Amit Patel",
    guardNote: "Exit blocked: Customer payment settlement pending at billing desk. Do not open gate."
  },
  {
    id: "gp-3",
    gatePassNumber: "GP-2026-0872",
    vehicleNumber: "GJ 01 XY 7721",
    vehicleModel: "Maruti Swift ZXI",
    customerName: "Anand Verma",
    phone: "+91 97234 55667",
    jobNumber: "JC-2026-1035",
    invoiceNumber: "INV-2026-0395",
    invoiceAmount: "₹ 8,200.00",
    paymentStatus: "Paid",
    releaseStatus: "Already Exited",
    authBadge: "bg-amber-500 text-white",
    paymentBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
    issuedAt: "Today, 10:30 AM",
    expiresAt: "Today, 11:45 AM (Exited)",
    advisor: "Suresh S.",
    guardNote: "Vehicle exited workshop gate at 11:45 AM. Verified by Guard Ramesh."
  }
];

export default function GPInteractiveDemo() {
  const [selectedId, setSelectedId] = useState("gp-1");
  const [scanResult, setScanResult] = useState(null);
  const [activeTab, setActiveTab] = useState("slip"); // "slip" | "guard" | "audit"

  const pass = demoGatePasses.find((p) => p.id === selectedId) || demoGatePasses[0];

  const handleScanSimulate = () => {
    if (pass.paymentStatus === "Paid" && pass.releaseStatus !== "Already Exited") {
      setScanResult({
        type: "success",
        title: "VEHICLE RELEASE AUTHORIZED",
        msg: `Exit timestamp recorded for ${pass.vehicleNumber}. Gate barrier open.`
      });
    } else if (pass.paymentStatus === "Pending") {
      setScanResult({
        type: "error",
        title: "EXIT BLOCKED - PAYMENT PENDING",
        msg: `Dues of ${pass.invoiceAmount} pending at cashier. Direct customer to billing counter.`
      });
    } else {
      setScanResult({
        type: "warning",
        title: "ALREADY EXITED",
        msg: `This gate pass was already redeemed and exited today.`
      });
    }
    setTimeout(() => setScanResult(null), 5000);
  };

  return (
    <section id="interactive-demo" className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <FaQrcode className="w-3.5 h-3.5" /> Live Interactive Demo
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Experience the <GradientUnderline>Zero-Risk Gate Pass System</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Switch between different vehicle scenarios below to test how the digital QR gate pass slip looks, how guards scan it on mobile, and how unpaid exits are blocked automatically.
          </p>
        </div>

        {/* Interactive Container */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-white">
          {/* Top Bar with Vehicle Scenario Switcher */}
          <div className="p-4 md:p-6 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                <FaShieldAlt className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-white">Interactive Gate Pass Simulator</h3>
                <p className="text-xs text-slate-400">Select test scenario to simulate verification</p>
              </div>
            </div>

            {/* Scenario Buttons */}
            <div className="flex flex-wrap gap-2">
              {demoGatePasses.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(p.id);
                    setScanResult(null);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                    selectedId === p.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  {p.vehicleNumber} ({p.paymentStatus})
                </button>
              ))}
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="px-6 pt-4 bg-slate-900/90 border-b border-slate-800 flex gap-4 text-xs font-semibold">
            <button
              onClick={() => setActiveTab("slip")}
              className={`pb-3 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "slip" ? "border-primary text-primary-light" : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <FaReceipt /> Gate Pass Thermal Slip
            </button>
            <button
              onClick={() => setActiveTab("guard")}
              className={`pb-3 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "guard" ? "border-primary text-primary-light" : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <FaUserCheck /> Guard Mobile Scan View
            </button>
            <button
              onClick={() => setActiveTab("audit")}
              className={`pb-3 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "audit" ? "border-primary text-primary-light" : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <FaClock /> Cloud Audit Ledger
            </button>
          </div>

          {/* Tab Contents */}
          <div className="p-6 md:p-8">
            {activeTab === "slip" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Printable Slip (7 Cols) */}
                <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 space-y-4">
                  {/* Slip Header */}
                  <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-3 gap-2">
                    <div>
                      <span className="text-[10px] font-black uppercase text-primary tracking-widest block">GARAGESAARTHI GATE PASS</span>
                      <h4 className="text-base font-black text-slate-900">{pass.gatePassNumber}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${pass.paymentBadge}`}>
                        ● {pass.paymentStatus === "Paid" ? "Payment Cleared" : "Payment Pending"}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${pass.authBadge}`}>
                        {pass.releaseStatus}
                      </span>
                    </div>
                  </div>

                  {/* QR & Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    <div className="sm:col-span-4 bg-slate-950 text-white rounded-2xl p-3 flex flex-col items-center justify-center space-y-1 text-center shadow-inner">
                      <div className="w-24 h-24 bg-white p-2 rounded-xl flex items-center justify-center shadow">
                        <FaQrcode className="w-20 h-20 text-slate-900" />
                      </div>
                      <span className="text-[9px] font-mono text-slate-400">SCAN AT EXIT</span>
                    </div>

                    <div className="sm:col-span-8 space-y-2 text-xs">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 bg-slate-50 rounded-xl border border-slate-200/80">
                          <span className="text-[10px] text-slate-400 uppercase font-bold block">Vehicle No.</span>
                          <span className="font-bold text-slate-900 text-xs font-mono block mt-0.5">{pass.vehicleNumber}</span>
                          <span className="text-[10px] text-slate-500 truncate block">{pass.vehicleModel}</span>
                        </div>
                        <div className="p-2 bg-slate-50 rounded-xl border border-slate-200/80">
                          <span className="text-[10px] text-slate-400 uppercase font-bold block">Customer</span>
                          <span className="font-bold text-slate-900 text-xs block mt-0.5">{pass.customerName}</span>
                          <span className="text-[10px] text-slate-500">{pass.phone}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 bg-slate-50 rounded-xl border border-slate-200/80">
                          <span className="text-[10px] text-slate-400 uppercase font-bold block">Invoice Amount</span>
                          <span className="font-bold text-primary text-xs block mt-0.5">{pass.invoiceAmount}</span>
                          <span className="text-[10px] text-slate-500 font-mono">{pass.invoiceNumber}</span>
                        </div>
                        <div className="p-2 bg-slate-50 rounded-xl border border-slate-200/80">
                          <span className="text-[10px] text-slate-400 uppercase font-bold block">Service Advisor</span>
                          <span className="font-bold text-slate-900 text-xs block mt-0.5">{pass.advisor}</span>
                          <span className="text-[10px] text-slate-500 font-mono">Job #{pass.jobNumber}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security Note */}
                  <div className={`p-3 rounded-xl text-xs flex items-start gap-2.5 ${
                    pass.paymentStatus === "Paid"
                      ? "bg-emerald-50 border border-emerald-200 text-emerald-900"
                      : "bg-red-50 border border-red-200 text-red-900"
                  }`}>
                    {pass.paymentStatus === "Paid" ? (
                      <FaCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <FaTimesCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <span className="font-bold block">
                        {pass.paymentStatus === "Paid" ? "Cleared for Exit Gate Release" : "Security Notice: Unpaid Dues Detected"}
                      </span>
                      <p className="text-[11px] opacity-90 mt-0.5">{pass.guardNote}</p>
                    </div>
                  </div>
                </div>

                {/* Right Interactive Actions (5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-3">
                    <h4 className="font-bold text-white text-sm flex items-center gap-2">
                      <FaPrint className="text-primary-light" /> Instant Print &amp; WhatsApp Actions
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Cashier can print directly to thermal receipt printers (2" / 3") or dispatch the PDF slip instantly over WhatsApp to the customer.
                    </p>

                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={handleScanSimulate}
                        className="w-full py-2.5 px-4 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold transition-all shadow cursor-pointer flex items-center justify-center gap-2"
                      >
                        <FaUserCheck className="w-4 h-4" /> Simulate Guard Scanning This QR
                      </button>
                    </div>
                  </div>

                  {scanResult && (
                    <div className={`p-4 rounded-2xl text-xs flex items-start gap-3 animate-fadeIn border ${
                      scanResult.type === "success"
                        ? "bg-emerald-950 text-emerald-300 border-emerald-700"
                        : scanResult.type === "error"
                        ? "bg-red-950 text-red-300 border-red-700"
                        : "bg-amber-950 text-amber-300 border-amber-700"
                    }`}>
                      {scanResult.type === "success" && <FaCheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
                      {scanResult.type === "error" && <FaTimesCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />}
                      {scanResult.type === "warning" && <FaExclamationTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />}
                      <div>
                        <strong className="block font-bold text-sm">{scanResult.title}</strong>
                        <span className="opacity-90 mt-0.5 block">{scanResult.msg}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "guard" && (
              <div className="max-w-xl mx-auto bg-slate-950 rounded-3xl p-6 border border-slate-800 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-300">Guard Mobile Screen • Zero Login</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">HTTPS://GARAGESAARTHI.COM/VERIFY/..</span>
                </div>

                <div className={`p-5 rounded-2xl border text-center space-y-3 ${
                  pass.paymentStatus === "Paid"
                    ? "bg-emerald-950/60 border-emerald-700/60 text-emerald-200"
                    : "bg-red-950/60 border-red-700/60 text-red-200"
                }`}>
                  <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-white/10">
                    {pass.paymentStatus === "Paid" ? (
                      <FaCheckCircle className="w-7 h-7 text-emerald-400" />
                    ) : (
                      <FaTimesCircle className="w-7 h-7 text-red-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-black">{pass.vehicleNumber}</h4>
                    <p className="text-xs opacity-80">{pass.vehicleModel} • {pass.customerName}</p>
                  </div>

                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20">
                    {pass.paymentStatus === "Paid" ? "✓ PAYMENT CLEARED" : "✕ PAYMENT DUE AT CASHIER"}
                  </div>

                  <p className="text-xs font-mono">{pass.invoiceNumber} • {pass.invoiceAmount}</p>
                </div>

                <div className="text-xs text-slate-400 text-center">
                  Guard clicks <strong>"Authorize Exit"</strong> upon physical inspection. The gate log is permanently recorded in the cloud.
                </div>
              </div>
            )}

            {activeTab === "audit" && (
              <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900 text-slate-400 font-mono text-[11px] uppercase">
                    <tr>
                      <th className="p-3">Gate Pass #</th>
                      <th className="p-3">Vehicle</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Amount</th>
                      <th className="p-3">Payment</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Audit Log</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {demoGatePasses.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-900/60">
                        <td className="p-3 font-mono font-bold text-white">{p.gatePassNumber}</td>
                        <td className="p-3 font-bold text-slate-200">{p.vehicleNumber}</td>
                        <td className="p-3">{p.customerName}</td>
                        <td className="p-3 text-primary-light font-semibold">{p.invoiceAmount}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            p.paymentStatus === "Paid" ? "bg-emerald-900/60 text-emerald-300" : "bg-red-900/60 text-red-300"
                          }`}>
                            {p.paymentStatus}
                          </span>
                        </td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            p.releaseStatus === "Authorized"
                              ? "bg-emerald-500/20 text-emerald-300"
                              : p.releaseStatus === "Blocked"
                              ? "bg-red-500/20 text-red-300"
                              : "bg-amber-500/20 text-amber-300"
                          }`}>
                            {p.releaseStatus}
                          </span>
                        </td>
                        <td className="p-3 text-[11px] text-slate-400 truncate max-w-xs">{p.guardNote}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
