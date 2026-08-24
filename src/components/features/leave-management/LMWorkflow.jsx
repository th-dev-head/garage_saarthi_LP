import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaMobileAlt, FaUserCheck, FaCalculator, FaFileInvoiceDollar } from "react-icons/fa";

const steps = [
  {
    num: "01",
    icon: <FaMobileAlt className="w-6 h-6 text-primary" />,
    title: "Staff Submits Leave Request",
    desc: "Mechanics select Paid Leave (PL), Sick Leave (SL), or Casual Leave (CL) with dates and reason on mobile."
  },
  {
    num: "02",
    icon: <FaUserCheck className="w-6 h-6 text-primary" />,
    title: "Owner Reviews & Approves",
    desc: "Workshop managers review active job cards and approve or reject leave applications with 1-click."
  },
  {
    num: "03",
    icon: <FaCalculator className="w-6 h-6 text-primary" />,
    title: "Automatic Quota Deduction",
    desc: "Approved leaves automatically deduct from the staff member's available paid leave quota register."
  },
  {
    num: "04",
    icon: <FaFileInvoiceDollar className="w-6 h-6 text-primary" />,
    title: "Direct Payroll Sync",
    desc: "Monthly payroll automatically calculates attendance present days and loss-of-pay deductions for salary slips."
  }
];

export default function LMWorkflow() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            How GarageSaarthi <GradientUnderline>Leave Management Works</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            A seamless digital workflow connecting employee leave applications with workshop attendance and monthly payroll.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4 relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black px-2.5 py-1 rounded-md bg-primary/10 text-primary uppercase">
                  Step {step.num}
                </span>
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
