import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaCalendarCheck, FaCheckDouble, FaUserCheck, FaMoneyBillWave, FaClock, FaShieldAlt } from "react-icons/fa";

const capabilities = [
  {
    icon: <FaCalendarCheck className="w-6 h-6 text-primary" />,
    title: "Multiple Leave Type Quotas",
    desc: "Configure Paid Leave (PL), Sick Leave (SL), and Casual Leave (CL) monthly or annual quotas per employee role."
  },
  {
    icon: <FaCheckDouble className="w-6 h-6 text-primary" />,
    title: "1-Click Remote Approvals",
    desc: "Receive instant mobile alerts when mechanics request leave. Approve or reject leave applications remotely."
  },
  {
    icon: <FaUserCheck className="w-6 h-6 text-primary" />,
    title: "Real-time Leave Quota Tracker",
    desc: "Mechanics and managers can view updated paid leave balances, used leave days, and remaining quotas anytime."
  },
  {
    icon: <FaMoneyBillWave className="w-6 h-6 text-primary" />,
    title: "Automated Loss-of-Pay Payroll",
    desc: "Approved leaves integrate directly into monthly payroll. Unpaid leave days automatically deduct from salary slips."
  },
  {
    icon: <FaClock className="w-6 h-6 text-primary" />,
    title: "Half-Day & Short Leave Support",
    desc: "Log half-day leaves or urgent short leave permissions without distorting full-day attendance registers."
  },
  {
    icon: <FaShieldAlt className="w-6 h-6 text-primary" />,
    title: "Dispute-Free Attendance Audit",
    desc: "Maintain complete historical leave logs and approval timestamps to eliminate end-of-month wage disputes."
  }
];

export default function LMCoreCapabilities() {
  return (
    <section id="leave-capabilities" className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Key Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Powerful Features for <GradientUnderline>Workshop Leave Management</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything automotive workshops need to track employee leave balances, approvals, and monthly salary sync.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-primary/30 transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
