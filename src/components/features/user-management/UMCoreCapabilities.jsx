import React from "react";
import { FaUserShield, FaUsers, FaHistory, FaUserLock } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const capabilities = [
  {
    icon: <FaUserShield className="w-6 h-6 text-primary" />,
    title: "Role-Based Access Control (RBAC)",
    desc: "Assign predefined roles like Admin, Service Advisor, Cashier, or Mechanic. Restrict staff from viewing cash boxes, net profit, or editing closed job cards."
  },
  {
    icon: <FaUsers className="w-6 h-6 text-primary" />,
    title: "Individual Staff Logins",
    desc: "Create unique secure credentials for every employee. Mechanics can access their assigned job cards on their phone without seeing accounting data."
  },
  {
    icon: <FaHistory className="w-6 h-6 text-primary" />,
    title: "Activity Logs & Audits",
    desc: "Audit actions within your workshop. Keep track of which advisor created an estimate, who approved a discount, and when stock entries were modified."
  },
  {
    icon: <FaUserLock className="w-6 h-6 text-primary" />,
    title: "IP & Location Restrictions",
    desc: "Control where your team can access the platform. Restrict billing desks to only log in while connected to the physical workshop Wi-Fi network."
  }
];

export default function UMCoreCapabilities() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Core Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Comprehensive Staff Control &amp;{" "}
            <GradientUnderline>Security Features</GradientUnderline>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex flex-col justify-between h-full min-h-[220px] transition-shadow hover:shadow-md">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center mb-4">
                  {c.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
