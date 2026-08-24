import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const fWorkflowSteps = [
  {
    step: "01",
    title: "Customer Invoice Payment",
    desc: "When a job card bill is cleared via Cash, UPI, or Card, the payment is immediately tagged to daily collections."
  },
  {
    step: "02",
    title: "Vendor Purchase Logging",
    desc: "Log incoming spare parts bills against vendor accounts to update pending credit balances."
  },
  {
    step: "03",
    title: "Daily Expenses Entry",
    desc: "Record petty workshop expenses like tea, shop maintenance, and utility bills in 2 taps."
  },
  {
    step: "04",
    title: "Mechanic Commission Calc",
    desc: "System calculates labor share for mechanics based on completed service tasks."
  },
  {
    step: "05",
    title: "Automated Evening P&L Summary",
    desc: "View exact net profit, total cash in drawer, and bank settlement report at shop closing."
  }
];

export default function FWorkflow() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Financial Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            How Finance Tracking Works <GradientUnderline>In GarageSaarthi</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            5 seamless steps to maintain 100% financial accuracy every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {fWorkflowSteps.map((item, idx) => (
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
