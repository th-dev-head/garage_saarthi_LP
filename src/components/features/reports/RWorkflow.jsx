import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const rWorkflowSteps = [
  {
    step: "01",
    title: "Automated Data Logging",
    desc: "Every job card, counter sale, inventory movement, and expense is automatically logged into the analytics system."
  },
  {
    step: "02",
    title: "Real-Time Processing",
    desc: "GarageSaarthi calculates margins, labor share, and inventory velocity live without manual calculations."
  },
  {
    step: "03",
    title: "Visual Dashboard View",
    desc: "View clear graphs, KPI metric cards, and performance trends on your mobile app or desktop browser."
  },
  {
    step: "04",
    title: "Filter & Custom Date Range",
    desc: "Select custom date ranges (daily, weekly, monthly, quarterly) or specific branch locations."
  },
  {
    step: "05",
    title: "1-Click PDF & Excel Export",
    desc: "Export clean reports formatted for workshop management meetings or CA tax filings."
  }
];

export default function RWorkflow() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Simple Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            How Garage Analytics Works <GradientUnderline>In GarageSaarthi</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            5 seamless steps to generate actionable workshop insights effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {rWorkflowSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-5 rounded-2xl space-y-3 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-2xl font-black text-primary/30 block">{item.step}</span>
                <h3 className="text-xs font-bold text-slate-900 leading-snug">{item.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
