import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaUserPlus, FaShieldAlt, FaKey, FaClock, FaCheckDouble } from "react-icons/fa";

export default function UMWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FaUserPlus className="w-5 h-5 text-primary" />,
      title: "Add Staff Profile",
      desc: "Register employee details, select their job title, and enter basic contact information."
    },
    {
      num: "02",
      icon: <FaShieldAlt className="w-5 h-5 text-orange-600" />,
      title: "Configure Permissions",
      desc: "Toggle specific permissions. Block accounting views or disable invoice edits."
    },
    {
      num: "03",
      icon: <FaKey className="w-5 h-5 text-emerald-600" />,
      title: "Generate Logins",
      desc: "Assign a unique username and temporary password for their secure personal account."
    },
    {
      num: "04",
      icon: <FaClock className="w-5 h-5 text-amber-600" />,
      title: "Track Action Audits",
      desc: "As staff process job cards or billing entries, actions are saved with individual timestamps."
    },
    {
      num: "05",
      icon: <FaCheckDouble className="w-5 h-5 text-purple-600" />,
      title: "Monitor Productivity",
      desc: "Analyze labor outputs, attendance records, and mechanic commissions from one dashboard."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            5-Step Staff Process
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            How GarageSaarthi Secures <GradientUnderline>Workshop User Roles</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Protect your business from cash leaks, delete errors, and employee fraud in 5 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between relative hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300">{step.num}</span>
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
