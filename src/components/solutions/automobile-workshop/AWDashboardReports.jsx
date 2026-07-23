import React from "react";
import Link from "next/link";
import { FaColumns, FaChartBar } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const features = [
  {
    icon: <FaColumns className="w-4 h-4" />,
    title: "Real-Time Dashboard",
    desc: "Review today's total collection, new walk-ins, pending deliveries, and inventory alerts from a centralized console.",
    linkHref: "/features/workshop-management-dashboard",
    linkText: "Explore Dashboard",
  },
  {
    icon: <FaChartBar className="w-4 h-4" />,
    title: "Reports & Analytics",
    desc: "Download GST tax reports, parts purchase lists, customer credit balance summaries, and technician commission statements.",
    linkHref: "/features/reports",
    linkText: "Explore Reports",
  },
];

export default function AWDashboardReports() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        {/* Section Header — full width */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Analytics & Insights
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Understand Your Workshop with <GradientUnderline>Dashboard and Reports</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Stay in control of your workshop metrics. Monitor daily sales, active job cards, parts stock values, expenses, and technician performance. Download custom reports to review weekly or monthly growth trends.
          </p>
        </div>

        {/* Feature list + Visual Card — side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Feature List */}
          <div className="space-y-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 border border-primary flex items-center justify-center text-primary shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-xs text-slate-600">{feature.desc}</p>
                  <Link href={feature.linkHref} className="text-xs font-bold text-primary hover:underline mt-1 inline-block">
                    {feature.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Column — Dashboard Summary Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-extrabold text-slate-800 mb-4">
              Daily Workshop Summary
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="text-[10px] text-slate-500 font-bold block mb-1">TODAY'S SALES</span>
                <span className="text-lg font-extrabold text-slate-900">₹24,850</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="text-[10px] text-slate-500 font-bold block mb-1">ACTIVE JOB CARDS</span>
                <span className="text-lg font-extrabold text-slate-900">12</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
              <span className="text-[10px] text-slate-500 font-bold block mb-2">MOST SOLD PARTS</span>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Engine Oil 10W-30</span>
                  <span className="font-semibold">8 Liters</span>
                </div>
                <div className="flex justify-between">
                  <span>Front Brake Pads</span>
                  <span className="font-semibold">4 Units</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

