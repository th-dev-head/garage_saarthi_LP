import React from "react";
import Link from "next/link";
import { FaChartBar, FaFileAlt, FaFileContract } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const turnoverSpares = [
  { name: "Engine Oils", pct: "80%" },
  { name: "Brake Consumables", pct: "65%" }
];

export default function IReporting() {
  const reports = [
    {
      icon: <FaFileAlt className="text-primary w-4 h-4" />,
      title: "Stock Valuation Reports",
      desc: "Valuate current warehouse stock in one click using pre-logged purchase rates."
    },
    {
      icon: <FaChartBar className="text-primary w-4 h-4" />,
      title: "Fast vs Slow Turnover Analysis",
      desc: "Identify components that sit on shelves for months (dead stock) vs high-demand fast-moving items."
    },
    {
      icon: <FaFileContract className="text-primary w-4 h-4" />,
      title: "Purchase Log Summaries",
      desc: "Audit supplier transactions, track buying prices, and calculate retail profit margins."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Inventory Reporting
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Understand Your Garage Inventory with <GradientUnderline>Better Reports</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            Ditch the guesswork. GarageSaarthi inventory reports show purchase rates, margins, and low stock warnings, keeping you in complete control.
          </p>

          <div className="space-y-4">
            {reports.map((r, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                  {r.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5">{r.title}</h3>
                  <p className="text-xs text-slate-500 leading-normal">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Visual Report Card Mockup */}
        <div className="bg-slate-50 border border-slate-200/80 p-6 md:p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">Valuation Dashboard</h4>
            <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded font-medium">This Month</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-100 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Total Stock Value</span>
              <span className="text-lg font-black text-slate-900">₹2,84,500</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Total Margin (Avg)</span>
              <span className="text-lg font-black text-green-600">32.4%</span>
            </div>
          </div>

          <div className="pt-4 text-[10px] text-slate-500 border-t border-slate-100">
            <span className="uppercase font-bold text-slate-400 tracking-wider block mb-3">High Turnover Spares</span>

            <div className="space-y-3">
              {turnoverSpares.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-600">{item.name}</span>
                    <span className="font-bold text-slate-900">{item.pct}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: item.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

