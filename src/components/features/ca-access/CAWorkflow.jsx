import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const caWorkflowSteps = [
  {
    step: "01",
    title: "Invite CA / Accountant",
    desc: "Enter your Chartered Accountant's email address and assign 'Read-Only Accountant' role permissions."
  },
  {
    step: "02",
    title: "Secure Portal Login",
    desc: "Your accountant receives secure login credentials to access the dedicated garage finance dashboard."
  },
  {
    step: "03",
    title: "Real-Time Book Inspection",
    desc: "CA reviews sales invoices, purchase bills, payment collection modes, and expense ledgers 24/7."
  },
  {
    step: "04",
    title: "1-Click GST Data Export",
    desc: "Accountant downloads GSTR-1, GSTR-3B, and sales summary Excel sheets formatted for government portals."
  },
  {
    step: "05",
    title: "On-Time Tax Filing",
    desc: "Complete monthly GST return filings accurately without tax notice penalties or data mismatch."
  }
];

export default function CAWorkflow() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Simple Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            How CA Access Works <GradientUnderline>In GarageSaarthi</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            5 steps to streamline monthly garage accounting and tax return submission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {caWorkflowSteps.map((item, idx) => (
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
