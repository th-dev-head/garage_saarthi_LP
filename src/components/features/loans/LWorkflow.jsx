import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const lWorkflowSteps = [
  {
    step: "01",
    title: "Loan Registration",
    desc: "Enter bank loan details, principal amount, tenure, EMI amount, and monthly due date in GarageSaarthi."
  },
  {
    step: "02",
    title: "Automated EMI Calendar",
    desc: "System generates a complete multi-month amortization schedule for all active garage loans."
  },
  {
    step: "03",
    title: "Pre-Debit Alert Notification",
    desc: "Receive automated WhatsApp & app alerts 3 days prior to EMI debit date to ensure sufficient account balance."
  },
  {
    step: "04",
    title: "Repayment Entry & Ledger",
    desc: "When EMI is deducted, log payment in 1 tap to update remaining loan balance and interest ledger."
  },
  {
    step: "05",
    title: "Financial Audit Export",
    desc: "Export clean loan balance summaries and interest statements for yearly CA tax filings."
  }
];

export default function LWorkflow() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Simple Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            How Loan Tracking Works <GradientUnderline>In GarageSaarthi</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            5 simple steps to manage workshop debts and eliminate EMI bounce penalties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {lWorkflowSteps.map((item, idx) => (
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
