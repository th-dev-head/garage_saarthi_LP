"use client";

import React, { useState } from "react";
import {
  FaTruck,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaFilePdf,
  FaFileExcel,
  FaPlus,
  FaSyncAlt,
  FaCheckCircle,
  FaBuilding,
  FaHistory,
  FaTimes,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function VMInteractiveDemo() {
  const [selectedSupplierId, setSelectedSupplierId] = useState("1");
  const [filterType, setFilterType] = useState("ALL"); // ALL | PURCHASE | PAYMENT
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [exportFeedback, setExportFeedback] = useState("");

  const [paymentAmount, setPaymentAmount] = useState("15000");
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer (NEFT/RTGS)");
  const [paymentNotes, setPaymentNotes] = useState("Part payment for INV-8821");

  const [suppliers, setSuppliers] = useState([
    {
      id: "1",
      name: "Metro Auto Spares & Lubricants",
      gstin: "24AAACM8821F1Z8",
      phone: "+91 98251 44102",
      city: "Surat, Gujarat",
      totalPurchases: 245000,
      totalPaid: 202150,
      transactions: [
        {
          id: 101,
          date: "08-10-2026",
          type: "PAYMENT",
          refNo: "UTR-HDFC9921448",
          description: "Bank Transfer (NEFT) via HDFC Current A/c",
          debit: 0,
          credit: 25000,
          runningBalance: 42850,
        },
        {
          id: 102,
          date: "04-10-2026",
          type: "PURCHASE",
          refNo: "INV-MAS-8821",
          description: "Synthetic Engine Oil (5W-30) 20 Cans + Oil Filters",
          debit: 38450,
          credit: 0,
          runningBalance: 67850,
        },
        {
          id: 103,
          date: "28-09-2026",
          type: "PAYMENT",
          refNo: "UPI-ICICI-88312",
          description: "Instant UPI Payment via PhonePe",
          debit: 0,
          credit: 40000,
          runningBalance: 29400,
        },
        {
          id: 104,
          date: "20-09-2026",
          type: "PURCHASE",
          refNo: "INV-MAS-8760",
          description: "Front Brake Pads (Creta, City, Baleno) - 15 Sets",
          debit: 45000,
          credit: 0,
          runningBalance: 69400,
        },
      ],
    },
    {
      id: "2",
      name: "BOSCH Certified Electricals & Filters",
      gstin: "24AADCB4419E1Z2",
      phone: "+91 99042 11984",
      city: "Ahmedabad, Gujarat",
      totalPurchases: 180000,
      totalPaid: 155000,
      transactions: [
        {
          id: 201,
          date: "06-10-2026",
          type: "PURCHASE",
          refNo: "INV-BOS-4192",
          description: "Alternators, Starter Motors & Spark Plugs",
          debit: 32000,
          credit: 0,
          runningBalance: 25000,
        },
        {
          id: 202,
          date: "01-10-2026",
          type: "PAYMENT",
          refNo: "CHQ-002194",
          description: "Axis Bank Cheque Cleared",
          debit: 0,
          credit: 50000,
          runningBalance: -7000,
        },
      ],
    },
    {
      id: "3",
      name: "Shree Ram Tyres & Suspension Parts",
      gstin: "24AAGCS9920A1Z5",
      phone: "+91 94280 55190",
      city: "Rajkot, Gujarat",
      totalPurchases: 310000,
      totalPaid: 280000,
      transactions: [
        {
          id: 301,
          date: "07-10-2026",
          type: "PURCHASE",
          refNo: "INV-SRT-9910",
          description: "Bridgestone 205/55 R16 Tyres (4 Units) + Lower Arms",
          debit: 42000,
          credit: 0,
          runningBalance: 30000,
        },
      ],
    },
  ]);

  const activeSupplier = suppliers.find((s) => s.id === selectedSupplierId) || suppliers[0];
  const outstandingBalance = activeSupplier.totalPurchases - activeSupplier.totalPaid;

  const handleRecordPayment = (e) => {
    e.preventDefault();
    const amt = parseFloat(paymentAmount) || 0;
    if (amt <= 0) return;

    const newTx = {
      id: Date.now(),
      date: "Today",
      type: "PAYMENT",
      refNo: `REC-${Math.floor(100000 + Math.random() * 900000)}`,
      description: `${paymentMethod} - ${paymentNotes || "Supplier payment"}`,
      debit: 0,
      credit: amt,
      runningBalance: Math.max(0, outstandingBalance - amt),
    };

    setSuppliers((prev) =>
      prev.map((sup) =>
        sup.id === selectedSupplierId
          ? {
              ...sup,
              totalPaid: sup.totalPaid + amt,
              transactions: [newTx, ...sup.transactions],
            }
          : sup
      )
    );

    setShowPaymentModal(false);
    setPaymentNotes("");
  };

  const handleExport = (format) => {
    setExportFeedback(`Generating ${format.toUpperCase()} Statement for ${activeSupplier.name}...`);
    setTimeout(() => {
      setExportFeedback(`✓ ${format.toUpperCase()} statement exported successfully!`);
      setTimeout(() => setExportFeedback(""), 3000);
    }, 1200);
  };

  const filteredTransactions = activeSupplier.transactions.filter((tx) => {
    if (filterType === "PURCHASE") return tx.type === "PURCHASE";
    if (filterType === "PAYMENT") return tx.type === "PAYMENT";
    return true;
  });

  return (
    <section id="supplier-ledger-demo" className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center scroll-mt-20">
      <div className="mx-auto max-w-full lg:max-w-5xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Live Software Simulation
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Try the <GradientUnderline>Supplier Statement &amp; Ledger</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Experience our vendor ledger: switch between parts distributors, log multi-mode payments, inspect running balances, and export audit statements in real time.
          </p>
        </div>

        {/* Simulator Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-slate-900">
          
          {/* Top Bar: Supplier Selector & Actions */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
                <FaTruck className="w-4 h-4" />
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  SELECT SUPPLIER / DISTRIBUTOR
                </label>
                <select
                  value={selectedSupplierId}
                  onChange={(e) => setSelectedSupplierId(e.target.value)}
                  className="text-xs sm:text-sm font-bold text-slate-900 bg-transparent border-none p-0 focus:outline-none cursor-pointer"
                >
                  {suppliers.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.city})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowPaymentModal(true)}
                className="px-3.5 py-1.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <FaPlus className="text-[10px]" /> Record Payment
              </button>
              <button
                type="button"
                onClick={() => handleExport("pdf")}
                className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <FaFilePdf className="text-rose-500 text-xs" /> PDF
              </button>
              <button
                type="button"
                onClick={() => handleExport("excel")}
                className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <FaFileExcel className="text-emerald-600 text-xs" /> Excel
              </button>
            </div>
          </div>

          {/* Export Toast Notification */}
          {exportFeedback && (
            <div className="bg-emerald-50 border-b border-emerald-100 text-emerald-800 text-xs px-6 py-2 font-medium flex items-center justify-between">
              <span>{exportFeedback}</span>
            </div>
          )}

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Supplier Info & Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="text-[10px] text-slate-500 block uppercase font-semibold">Vendor KYC &amp; Tax</span>
                <span className="text-xs font-bold text-slate-900 block mt-0.5">{activeSupplier.gstin}</span>
                <span className="text-[11px] text-slate-500">{activeSupplier.phone}</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="text-[10px] text-slate-500 block uppercase font-semibold">Total Purchases</span>
                <span className="text-base font-bold text-slate-900 block mt-0.5">
                  ₹{activeSupplier.totalPurchases.toLocaleString("en-IN")}
                </span>
                <span className="text-[11px] text-slate-500">Inward Invoices</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="text-[10px] text-slate-500 block uppercase font-semibold">Total Paid</span>
                <span className="text-base font-bold text-emerald-600 block mt-0.5">
                  ₹{activeSupplier.totalPaid.toLocaleString("en-IN")}
                </span>
                <span className="text-[11px] text-emerald-700 font-medium">Bank / Cash / UPI</span>
              </div>

              <div className="bg-rose-50/70 p-4 rounded-xl border border-rose-200">
                <span className="text-[10px] text-rose-700 block uppercase font-bold">Outstanding Balance</span>
                <span className="text-lg font-black text-rose-700 block mt-0.5">
                  ₹{outstandingBalance.toLocaleString("en-IN")}
                </span>
                <span className="text-[11px] text-rose-600 font-medium">Net Payable Amount</span>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setFilterType("ALL")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    filterType === "ALL"
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  All Transactions ({activeSupplier.transactions.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType("PURCHASE")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    filterType === "PURCHASE"
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Purchases Only
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType("PAYMENT")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    filterType === "PAYMENT"
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Payments Only
                </button>
              </div>

              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline-block">
                Auto-calculated Running Balance
              </span>
            </div>

            {/* Ledger Transactions Table */}
            <div className="border border-slate-200 rounded-xl overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Ref / Invoice #</th>
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3 text-right">Debit (Purchase)</th>
                    <th className="px-4 py-3 text-right">Credit (Payment)</th>
                    <th className="px-4 py-3 text-right">Running Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filteredTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="px-4 py-3.5 text-slate-500 font-mono text-[11px] whitespace-nowrap">
                        {tx.date}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span
                          className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                            tx.type === "PURCHASE"
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          }`}
                        >
                          {tx.type}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 font-mono font-bold text-slate-900 whitespace-nowrap">
                        {tx.refNo}
                      </td>
                      <td className="px-4 py-3.5 text-slate-600 min-w-[200px]">
                        {tx.description}
                      </td>
                      <td className="px-4 py-3.5 text-right font-mono font-bold text-slate-900 whitespace-nowrap">
                        {tx.debit > 0 ? `₹${tx.debit.toLocaleString("en-IN")}` : "—"}
                      </td>
                      <td className="px-4 py-3.5 text-right font-mono font-bold text-emerald-600 whitespace-nowrap">
                        {tx.credit > 0 ? `₹${tx.credit.toLocaleString("en-IN")}` : "—"}
                      </td>
                      <td className="px-4 py-3.5 text-right font-mono font-black text-rose-600 whitespace-nowrap">
                        ₹{tx.runningBalance.toLocaleString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>

        {/* Modal: Record Supplier Payment */}
        {showPaymentModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full p-6 text-slate-900 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center">
                    <FaMoneyBillWave className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Record Vendor Payment</h3>
                    <span className="text-[11px] text-slate-500">{activeSupplier.name}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPaymentModal(false)}
                  className="text-slate-400 hover:text-slate-600 p-1"
                >
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={handleRecordPayment} className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-700 block mb-1 font-semibold">Payment Amount (₹) *</label>
                  <input
                    type="number"
                    required
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm font-bold text-slate-900 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-slate-700 block mb-1 font-semibold">Payment Method *</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-2 text-xs font-semibold text-slate-800 focus:outline-none"
                  >
                    <option>Bank Transfer (NEFT/RTGS)</option>
                    <option>UPI / PhonePe / GPay</option>
                    <option>Cash from Workshop Drawer</option>
                    <option>Cheque Payment</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-700 block mb-1 font-semibold">Reference Notes / UTR No.</label>
                  <input
                    type="text"
                    value={paymentNotes}
                    onChange={(e) => setPaymentNotes(e.target.value)}
                    placeholder="e.g. Part payment for Oct stock, UTR #992188"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPaymentModal(false)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold shadow transition-all cursor-pointer"
                  >
                    Save &amp; Update Ledger
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
