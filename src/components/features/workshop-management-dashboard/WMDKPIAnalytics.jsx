import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaChartBar, FaUserClock, FaCoins } from "react-icons/fa";

export default function WMDKPIAnalytics() {
  const kpis = [
    {
      icon: <FaCoins className="w-6 h-6 text-primary" />,
      title: "Daily Financial & Gross Margin KPIs",
      desc: "Track total invoice collections, counter sale revenue, pending customer credit, and net profit margins calculated automatically per service."
    },
    {
      icon: <FaChartBar className="w-6 h-6 text-orange-600" />,
      title: "Vehicle Repair Throughput & Delivery Speed",
      desc: "Monitor average job completion time, vehicles delivered per day, and bottlenecks across inspection, repair, and billing stages."
    },
    {
      icon: <FaUserClock className="w-6 h-6 text-emerald-600" />,
      title: "Technician & Mechanic Productivity Stats",
      desc: "Measure labor charges earned per mechanic, total active work hours, and jobs completed to reward top-performing technicians."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Real-Time KPI & Financial Analytics
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Comprehensive <GradientUnderline>Garage KPI Dashboard Analytics</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Transform raw repair data into actionable business insights. Make data-driven decisions to increase your workshop's profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-primary/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-6">
                  {kpi.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {kpi.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {kpi.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
