import React from "react";
import Link from "next/link";
import { FaChartBar, FaFileAlt, FaFileContract, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GIReporting() {
  const reports = [
    {
      icon: <FaFileAlt className="text-primary w-4 h-4" />,
      title: "Stock Valuation Reports",
      desc: "Instantly view the total monetary value of your current warehouse stock based on active purchase records."
    },
    {
      icon: <FaChartBar className="text-primary w-4 h-4" />,
      title: "Item Consumption Statistics",
      desc: "Identify fast-moving spare items versus dead stock that is taking up shelf space without generating revenue."
    },
    {
      icon: <FaFileContract className="text-primary w-4 h-4" />,
      title: "Purchase Log Summaries",
      desc: "Analyze supplier purchase trends, price fluctuations, and active transaction records over custom dates."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Inventory Reporting
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Understand Your Garage Inventory with <GradientUnderline>Better Reports</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            Ditch the guesswork. GarageSaarthi inventory reports show purchase rates, margins, and low stock warnings, keeping you in complete control.
          </p>

          <div className="space-y-4 mb-8">
            {reports.map((r, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                  {r.icon}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-0.5">{r.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-normal">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/features/reports" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1.5">
            Learn More About Reports <FaArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Right Side Visual Report Card Mockup */}
        <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl space-y-4 shadow-md">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">Valuation Dashboard</h4>
            <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">This Month</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Total Stock Value</span>
              <span className="text-lg font-black text-slate-900">₹2,84,500</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Total Margin (Avg)</span>
              <span className="text-lg font-black text-green-600">32.4%</span>
            </div>
          </div>

          <div className="pt-4 text-[10px] text-slate-500 border-t border-slate-100">
            <span className="uppercase font-bold text-slate-400 tracking-wider block mb-3">High Turnover Spares</span>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Engine Oils</span>
                  <span className="font-bold text-slate-700">80%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "80%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Brake Consumables</span>
                  <span className="font-bold text-slate-700">65%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "65%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

