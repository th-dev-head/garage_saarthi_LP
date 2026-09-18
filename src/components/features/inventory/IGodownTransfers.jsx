"use client";

import React, { useState } from "react";
import {
  FaWarehouse,
  FaExchangeAlt,
  FaHistory,
  FaStore,
  FaBoxes,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaShieldAlt,
  FaFileImport,
  FaUserCheck,
  FaInfoCircle
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const demoInventoryItems = [
  {
    id: "part-1",
    name: "Motul 7100 4T 10W-50 (1L)",
    partNumber: "MOT-7100-1L",
    category: "Synthetic Lubricants",
    shopStock: 12,
    godownStock: 60,
    unit: "Liters",
    reorderLevel: 10
  },
  {
    id: "part-2",
    name: "Bosch Premium Oil Filter",
    partNumber: "BSH-OF-0451",
    category: "Filters & Elements",
    shopStock: 6,
    godownStock: 48,
    unit: "Units",
    reorderLevel: 8
  },
  {
    id: "part-3",
    name: "Brembo Front Ceramic Brake Pads",
    partNumber: "BRM-BP-9921",
    category: "Braking System",
    shopStock: 4,
    godownStock: 25,
    unit: "Sets",
    reorderLevel: 5
  }
];

const transferReasons = [
  "Daily Shop Floor Restock",
  "High Job Card Demand",
  "Bulk Shipment Intake",
  "Excess Stock Return to Godown",
  "Branch Workshop Transfer"
];

const sampleTransferHistory = [
  {
    date: "Today, 11:30 AM",
    item: "Motul 7100 4T 10W-50 (1L)",
    partNo: "MOT-7100-1L",
    direction: "godown_to_shop",
    directionLabel: "Godown ➔ Shop Floor",
    qty: 20,
    unit: "Ltr",
    balances: "Godown: 40 | Shop: 32",
    staff: "Rajesh Sharma (Storekeeper)",
    reason: "Daily Shop Floor Restock",
    status: "Completed"
  },
  {
    date: "Today, 09:15 AM",
    item: "Bosch Premium Oil Filter",
    partNo: "BSH-OF-0451",
    direction: "godown_to_shop",
    directionLabel: "Godown ➔ Shop Floor",
    qty: 15,
    unit: "Units",
    balances: "Godown: 33 | Shop: 21",
    staff: "Amit Patel (Floor Lead)",
    reason: "High Job Card Demand",
    status: "Completed"
  },
  {
    date: "Yesterday, 05:45 PM",
    item: "Brembo Front Brake Pads",
    partNo: "BRM-BP-9921",
    direction: "shop_to_godown",
    directionLabel: "Shop Floor ➔ Godown",
    qty: 5,
    unit: "Sets",
    balances: "Shop: 4 | Godown: 25",
    staff: "Suresh K. (Inventory Mgr)",
    reason: "Excess Stock Return",
    status: "Completed"
  }
];

const godownPillars = [
  {
    icon: FaWarehouse,
    title: "Dual-Location Stock Isolation",
    desc: "Maintain separate stock counts for active Shop Floor racks vs backroom Godown warehouses to prevent clutter and keep fast-moving parts immediately accessible."
  },
  {
    icon: FaExchangeAlt,
    title: "1-Tap Inter-Location Transfers",
    desc: "Move spare parts between Godown and Shop floor with live projected balance previews, instant stock recalculations, and safety threshold checks."
  },
  {
    icon: FaFileImport,
    title: "Direct Godown Inflow & Bulk Upload",
    desc: "Allocate newly purchased vendor shipments or Excel bulk imports directly into Godown warehouse or Shop floor inventory with automatic batch creation."
  },
  {
    icon: FaHistory,
    title: "Immutable Transfer Audit Ledger",
    desc: "Every stock movement is time-stamped and mapped to the authorizing staff member, reason note, and before/after balances to eliminate inventory leakage."
  }
];

export default function IGodownTransfers() {
  const [selectedItemId, setSelectedItemId] = useState("part-1");
  const [direction, setDirection] = useState("godown_to_shop"); // 'godown_to_shop' or 'shop_to_godown'
  const [transferQty, setTransferQty] = useState(10);
  const [selectedReason, setSelectedReason] = useState(transferReasons[0]);
  const [activeTab, setActiveTab] = useState("transfer"); // 'transfer' or 'history'
  const [transferredSuccess, setTransferredSuccess] = useState(false);

  const selectedItem = demoInventoryItems.find((item) => item.id === selectedItemId) || demoInventoryItems[0];

  const isGodownToShop = direction === "godown_to_shop";
  const sourceName = isGodownToShop ? "🏢 Godown Warehouse" : "🏪 Shop Floor (Active)";
  const destName = isGodownToShop ? "🏪 Shop Floor (Active)" : "🏢 Godown Warehouse";

  const sourceAvailable = isGodownToShop ? selectedItem.godownStock : selectedItem.shopStock;
  const destCurrent = isGodownToShop ? selectedItem.shopStock : selectedItem.godownStock;

  const validQty = Math.min(Math.max(1, Number(transferQty) || 1), sourceAvailable);
  const sourceProjected = Math.max(0, sourceAvailable - validQty);
  const destProjected = destCurrent + validQty;

  const handleSwapDirection = () => {
    setDirection(isGodownToShop ? "shop_to_godown" : "godown_to_shop");
    setTransferredSuccess(false);
  };

  const handleSimulateTransfer = () => {
    setTransferredSuccess(true);
    setTimeout(() => {
      setTransferredSuccess(false);
    }, 3500);
  };

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <FaWarehouse className="w-3.5 h-3.5" /> Godown &amp; Inter-Location Stock Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Separate Shop Floor &amp; Godown Inventory with{" "}
            <GradientUnderline>Seamless Stock Transfers</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate workshop floor clutter and prevent unaccounted part loss. Maintain bulk reserves in your godown warehouse, easily transfer stock to active job card racks, and track every movement with an immutable audit ledger.
          </p>
        </div>

        {/* Interactive Dual-Panel Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Top Bar with Mode Switcher */}
          <div className="p-4 md:p-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold">
                <FaExchangeAlt className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold">Godown Warehouse &amp; Transfer Hub</h3>
                <p className="text-xs text-slate-400">Live multi-location stock routing &amp; audit logging engine</p>
              </div>
            </div>

            {/* View Mode Tabs */}
            <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("transfer")}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "transfer"
                    ? "bg-primary text-white shadow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <FaExchangeAlt className="w-3 h-3" /> Quick Stock Transfer
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("history")}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "history"
                    ? "bg-primary text-white shadow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <FaHistory className="w-3 h-3" /> Transfer Audit Ledger
              </button>
            </div>
          </div>

          {activeTab === "transfer" ? (
            /* Stock Transfer Simulation */
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Item Selection & Transfer Controls */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    1. Select Inventory Spare Part
                  </label>
                  <div className="space-y-2">
                    {demoInventoryItems.map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => {
                          setSelectedItemId(item.id);
                          setTransferredSuccess(false);
                        }}
                        className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                          selectedItemId === item.id
                            ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-sm"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono font-semibold">
                              {item.partNumber}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">{item.category}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-slate-500">
                            Shop: <span className="font-bold text-slate-800">{item.shopStock}</span> | Godown:{" "}
                            <span className="font-bold text-primary">{item.godownStock}</span>
                          </div>
                          <span className="text-[10px] text-emerald-600 font-medium">
                            Total: {item.shopStock + item.godownStock} {item.unit}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transfer Direction Swap Bar */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      2. Transfer Direction
                    </span>
                    <button
                      type="button"
                      onClick={handleSwapDirection}
                      className="text-xs font-bold text-primary hover:text-primary-dark flex items-center gap-1.5 px-3 py-1 bg-white border border-primary/30 rounded-lg shadow-2xs hover:bg-primary/5 transition-all cursor-pointer"
                    >
                      <FaExchangeAlt className="w-3 h-3" /> Swap Direction
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-11 gap-2 items-center text-center">
                    {/* Source */}
                    <div className="sm:col-span-5 p-3 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Source (From)
                      </span>
                      <p className="font-bold text-sm text-slate-900 mt-1">{sourceName}</p>
                      <span className="text-xs font-semibold text-emerald-600 block mt-0.5">
                        {sourceAvailable} {selectedItem.unit} Available
                      </span>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="sm:col-span-1 flex justify-center py-1 sm:py-0">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shadow-2xs">
                        <FaArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Destination */}
                    <div className="sm:col-span-5 p-3 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Destination (To)
                      </span>
                      <p className="font-bold text-sm text-slate-900 mt-1">{destName}</p>
                      <span className="text-xs font-semibold text-slate-600 block mt-0.5">
                        {destCurrent} {selectedItem.unit} Current
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Quantity, Projected Balances & Transfer Action */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-5 border border-slate-800 shadow-md">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      3. Transfer Parameters
                    </span>
                    <span className="text-xs text-primary-light font-semibold bg-primary/20 px-2.5 py-0.5 rounded-full">
                      Real-time Validation
                    </span>
                  </div>

                  {/* Quantity Input */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <label htmlFor="transfer-qty-input" className="text-slate-300 font-semibold">
                        Transfer Quantity ({selectedItem.unit})
                      </label>
                      <button
                        type="button"
                        onClick={() => setTransferQty(sourceAvailable)}
                        className="text-primary-light hover:underline font-bold text-[11px] cursor-pointer"
                      >
                        Transfer Max ({sourceAvailable})
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        id="transfer-qty-input"
                        type="number"
                        min="1"
                        max={sourceAvailable}
                        value={transferQty}
                        onChange={(e) => setTransferQty(Math.max(1, Number(e.target.value) || 1))}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white font-bold text-base focus:outline-hidden focus:border-primary"
                      />
                      <div className="flex gap-1.5">
                        {[5, 10, 20].map((quickQty) => (
                          <button
                            key={quickQty}
                            type="button"
                            onClick={() => setTransferQty(Math.min(quickQty, sourceAvailable))}
                            className="px-2.5 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs font-bold text-slate-200 cursor-pointer"
                          >
                            +{quickQty}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Transfer Reason */}
                  <div className="space-y-2">
                    <label htmlFor="transfer-reason-select" className="text-xs text-slate-300 font-semibold block">
                      Transfer Reason / Audit Note
                    </label>
                    <select
                      id="transfer-reason-select"
                      value={selectedReason}
                      onChange={(e) => setSelectedReason(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white focus:outline-hidden focus:border-primary cursor-pointer"
                    >
                      {transferReasons.map((reason, idx) => (
                        <option key={idx} value={reason} className="bg-slate-900 text-white">
                          {reason}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Live Projected Balances Display */}
                  <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
                      <FaInfoCircle className="text-primary w-3.5 h-3.5" />
                      <span>Projected Live Balance Preview</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">{sourceName}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="line-through text-slate-500 font-semibold">{sourceAvailable}</span>
                          <span className="font-bold text-amber-400 text-sm">➔ {sourceProjected}</span>
                          <span className="text-[10px] text-slate-400">{selectedItem.unit}</span>
                        </div>
                      </div>

                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">{destName}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="line-through text-slate-500 font-semibold">{destCurrent}</span>
                          <span className="font-bold text-emerald-400 text-sm">➔ {destProjected}</span>
                          <span className="text-[10px] text-slate-400">{selectedItem.unit}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Transfer Action Button */}
                  <button
                    type="button"
                    onClick={handleSimulateTransfer}
                    className="w-full py-3 bg-gradient-to-r from-primary to-orange-600 hover:from-primary-dark hover:to-orange-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    <FaCheckCircle className="w-4 h-4" /> Execute Stock Transfer
                  </button>

                  {transferredSuccess && (
                    <div className="p-3 bg-emerald-950/80 border border-emerald-600/60 rounded-xl text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                      <FaCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>
                        Transferred <strong>{validQty} {selectedItem.unit}</strong> to {destName} successfully! Audit logged.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Stock Transfer Audit Ledger View */
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Complete Inter-Location Transfer Audit Trail</h4>
                  <p className="text-xs text-slate-500">Every single transfer is immutably logged with timestamp, user ID, and balance history.</p>
                </div>
                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full w-fit">
                  Showing 3 Recent Transfers
                </span>
              </div>

              {/* History Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                      <th className="py-3 px-4 rounded-l-xl">Timestamp &amp; Staff</th>
                      <th className="py-3 px-4">Item &amp; Part Number</th>
                      <th className="py-3 px-4">Transfer Route</th>
                      <th className="py-3 px-4">Qty</th>
                      <th className="py-3 px-4">Balances After</th>
                      <th className="py-3 px-4">Transfer Reason</th>
                      <th className="py-3 px-4 rounded-r-xl">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {sampleTransferHistory.map((log, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4">
                          <span className="font-bold text-slate-900 block">{log.date}</span>
                          <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                            <FaUserCheck className="w-3 h-3 text-primary" /> {log.staff}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-bold text-slate-900 block">{log.item}</span>
                          <span className="text-[10px] text-slate-500 font-mono">{log.partNo}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-bold text-[11px] ${
                              log.direction === "godown_to_shop"
                                ? "bg-amber-50 text-amber-800 border border-amber-200"
                                : "bg-blue-50 text-blue-800 border border-blue-200"
                            }`}
                          >
                            <FaExchangeAlt className="w-2.5 h-2.5" />
                            {log.directionLabel}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          +{log.qty} {log.unit}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-mono text-[11px] text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                            {log.balances}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          {log.reason}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold text-[10px]">
                            <FaCheckCircle className="w-2.5 h-2.5 text-emerald-600" /> {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {godownPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EFE9E7] text-primary flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
